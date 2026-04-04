import Image from "next/image";

export default function ArtistSection() {
  return (
    <section id="artists" className="artist-section" aria-label="Artists">

      <div className="artist-photo-grid" aria-label="Skoobe photo collage">
        <div className="photo-tl">
          <div className="img-frame ratio-4-5">
            <Image src="/media/Skoobephoto2.png" alt="Skoobe" fill sizes="(max-width: 1200px) 20vw, 240px" />
          </div>
        </div>
        <div className="photo-bl">
          <div className="img-frame ratio-4-5">
            <Image src="/media/SkoobePhoto3.png" alt="Skoobe" fill sizes="(max-width: 1200px) 20vw, 240px" />
          </div>
        </div>
        <div className="photo-cm">
          <div className="img-frame">
            <Image
              src="/media/SkoobeMarathonPhoto.png"
              alt="Skoobe at The Marathon — Los Angeles"
              fill
              sizes="(max-width: 1200px) 40vw, 480px"
            />
          </div>
        </div>
        <div className="photo-tr">
          <div className="img-frame ratio-4-5">
            <Image src="/media/Skoobephoto4.png" alt="Skoobe" fill sizes="(max-width: 1200px) 20vw, 240px" />
          </div>
        </div>
        <div className="photo-br">
          <div className="img-frame ratio-4-5">
            <Image src="/media/Skoobephoto5.png" alt="Skoobe" fill sizes="(max-width: 1200px) 20vw, 240px" />
          </div>
        </div>
      </div>

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
              src="/media/SkoobeVerticalPhoto.png"
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
