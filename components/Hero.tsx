"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const sync = () => setMuted(video.muted);
    video.addEventListener("volumechange", sync);

    // Try to play with sound; browsers usually block this until the visitor
    // interacts, so fall back to muted playback and show the sound button.
    video.muted = false;
    video
      .play()
      .then(sync)
      .catch(() => {
        video.muted = true;
        sync();
        video.play().catch(() => {});
      });

    return () => video.removeEventListener("volumechange", sync);
  }, []);

  const enableSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    if (video.volume === 0) video.volume = 1;
    video.play().catch(() => {});
  };

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
          {muted && (
            <button type="button" className="sound-btn" onClick={enableSound}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"
                />
              </svg>
              Tap for sound
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
