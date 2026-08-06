export default function FeaturedRelease() {
  return (
    <section id="featured-release" className="featured-release" aria-label="Featured Release" data-fade>
      <div className="release-image">
        <div className="video-embed ratio-16-9">
          <video
            className="video-player"
            controls
            playsInline
            preload="metadata"
            poster="/media/SkoobeLight.png"
            aria-label="Skoobe — No Time (Official Music Video)"
          >
            <source src="/media/Skoobe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <p className="collab-tag">Skoobe x Setwillfree x Mystery Entertainment</p>
      <h2>No Time</h2>
      <p className="release-date">Featured Single</p>
    </section>
  );
}
