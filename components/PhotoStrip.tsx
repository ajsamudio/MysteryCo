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

    const tick = () => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

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
      cancelAnimationFrame(rafRef.current);
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
