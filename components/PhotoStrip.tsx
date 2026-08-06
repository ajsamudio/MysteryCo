"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const photos = [
  { src: "/media/skoobe-photo-01.jpeg", alt: "Skoobe" },
  { src: "/media/skoobe-photo-09.jpeg", alt: "Skoobe" },
  { src: "/media/skoobe-photo-05.jpeg", alt: "Skoobe" },
  { src: "/media/skoobe-photo-06.jpeg", alt: "Skoobe" },
  { src: "/media/skoobe-photo-07.jpeg", alt: "Skoobe" },
];

const loopPhotos = [...photos, ...photos];

export default function PhotoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Time-based so the speed is identical on 60Hz and 120Hz displays;
    // the old per-frame increment ran twice as fast on high-refresh screens.
    const SPEED = 60; // px per second
    let last = 0;
    // Tracked as a float: a sub-pixel per-frame step could otherwise be
    // rounded away by scrollLeft and stall the marquee on 120Hz displays.
    let offset = 0;

    const tick = (now: number) => {
      const dt = last ? (now - last) / 1000 : 0;
      last = now;
      const half = el.scrollWidth / 2;
      offset += SPEED * dt;
      if (half > 0 && offset >= half) offset -= half;
      el.scrollLeft = offset;
      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafRef.current) return;
      last = 0;
      offset = el.scrollLeft;
      rafRef.current = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!rafRef.current) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };

    // Only animate while the strip is actually on screen and the tab is
    // visible — otherwise this loop forces layout every frame for nothing.
    let onScreen = false;
    const sync = () => (onScreen && !document.hidden ? start() : stop());

    const visibility = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0 }
    );
    visibility.observe(el);
    document.addEventListener("visibilitychange", sync);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      el.scrollLeft += delta;
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft < 0) el.scrollLeft += half;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      stop();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", sync);
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="photo-strip" aria-label="Photo Gallery" data-fade>
      <div className="photo-strip-header">
        <span className="photo-strip-label">Gallery</span>
      </div>
      <div className="photo-strip-marquee" ref={scrollRef}>
        <div className="photo-strip-track">
          {loopPhotos.map((photo, i) => (
            <div className="photo-strip-item" key={i} aria-hidden={i >= photos.length}>
              <div className="img-frame ratio-9-16">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 55vw, 300px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
