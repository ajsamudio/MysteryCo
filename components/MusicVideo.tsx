const VIDEO_ID = "1K0OsRG4FAQ";
const VIDEO_TITLE = "Skoobe — Where I'm From (Official Music Video)";
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

export default function MusicVideo() {
  return (
    <section id="music-video" className="music-video" aria-label="Latest Music Video" data-fade>
      <div className="music-video-inner">
        <h2>New Music Video.</h2>
        <p className="section-sub">
          Skoobe &mdash; Where I&apos;m From, out now on YouTube.
        </p>

        <div className="video-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
            title={VIDEO_TITLE}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="releases-cta">
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Watch on YouTube &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
