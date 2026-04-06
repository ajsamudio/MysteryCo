import Image from "next/image";

export default function ArtistSection() {
  return (
    <section id="artists" className="artist-section" aria-label="Artists" data-fade>
      <div className="artist-about">
        <div className="artist-about-text">
          <h2>Artist-First Mentality.</h2>
          <p>
            Founded in 2021, Mystery Entertainment is uniquely positioned within culture
            to propel talent. A conjunction of culture and artistic talent.
          </p>
          <p className="location">Los Angeles, CA</p>
        </div>
        <div className="artist-about-image">
          <div className="img-frame ratio-3-4">
            <Image
              src="/media/skoobe-photo-04.jpeg"
              alt="Mystery Entertainment Artist — Skoobe"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
