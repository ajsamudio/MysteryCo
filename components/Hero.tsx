"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const unmuteOnInteraction = () => {
      video.muted = false;
      video.play().catch(() => {});
      events.forEach((e) => window.removeEventListener(e, unmuteOnInteraction));
    };

    // Try to play with sound. Browsers block this unless the visitor has
    // interacted with the site, so fall back to muted playback and unmute
    // on the first interaction.
    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});
      events.forEach((e) =>
        window.addEventListener(e, unmuteOnInteraction, { once: true, passive: true })
      );
    });

    return () => {
      events.forEach((e) => window.removeEventListener(e, unmuteOnInteraction));
    };
  }, []);

  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div className="hero-text">
        <h1>Reimagining Culture &amp; Music</h1>
        <p>Fueled by passion and the desire to reimagine what it means to be a music company.</p>
      </div>
      <div className="hero-image">
        <div className="video-embed ratio-16-9">
          <video
            ref={videoRef}
            className="video-player"
            controls
            loop
            playsInline
            preload="auto"
            poster="/media/1110-poster.jpg"
            aria-label="Mystery Entertainment header video"
          >
            <source src="/media/1110-audio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
