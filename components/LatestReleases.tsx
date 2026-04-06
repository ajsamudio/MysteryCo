import Image from "next/image";

const releases = [
  {
    src: "/media/SkoobeComeHome.png",
    alt: "Skoobe — COME HOME cover art",
    artist: "Skoobe",
    title: "COME HOME",
    year: "2026",
  },
  {
    src: "/media/SkoobeAdoption.png",
    alt: "Skoobe — Adoption Day cover art",
    artist: "Skoobe",
    title: "Adoption Day",
    year: "2023",
  },
  {
    src: "/media/SkoobeMarathon.png",
    alt: "Skoobe — Marathon cover art",
    artist: "Skoobe",
    title: "Marathon",
    year: "2022",
  },
];

export default function LatestReleases() {
  return (
    <section id="latest-releases" className="latest-releases" aria-label="Latest Releases" data-fade>
      <div className="latest-releases-inner">
        <h2>Latest Releases.</h2>
        <p className="section-sub">Listen to our artist&apos;s latest collections.</p>

        <div className="releases-grid">
          {releases.map((release) => (
            <article className="release-card" key={release.title}>
              <div className="album-cover">
                <div className="img-frame ratio-1-1">
                  <Image
                    src={release.src}
                    alt={release.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 384px"
                  />
                </div>
              </div>
              <p className="artist-name">{release.artist}</p>
              <p className="album-title">
                <a href="#">{release.title} <span className="arrow">↗</span></a>
              </p>
              <p className="album-year">{release.year}</p>
            </article>
          ))}
        </div>

        <div className="releases-cta">
          <a
            href="https://mysteryentertainment.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Explore Releases &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
