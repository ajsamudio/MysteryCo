export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div className="hero-text">
        <h1>Reimagining Culture &amp; Music</h1>
        <p>Fueled by passion and the desire to reimagine what it means to be a music company.</p>
      </div>
      <div className="hero-image">
        <div className="video-embed ratio-16-9">
          <video
            className="video-player"
            controls
            autoPlay
            muted
            playsInline
            preload="auto"
            poster="/media/SkoobeThumbnail.png"
            aria-label="Skoobe — No Time (Official Music Video)"
          >
            <source src="/media/Skoobe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
