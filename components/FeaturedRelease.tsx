import Image from "next/image";

export default function FeaturedRelease() {
  return (
    <section id="featured-release" className="featured-release" aria-label="Featured Release">
      <div className="release-image">
        <div className="img-frame ratio-9-5">
          <Image
            src="/media/SkoobeLight.png"
            alt="Skoobe — No Time"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </div>
      <p className="collab-tag">Skoobe x Setwillfree x Mystery Entertainment</p>
      <h2>No Time</h2>
      <p className="release-date">Featured Single</p>
    </section>
  );
}
