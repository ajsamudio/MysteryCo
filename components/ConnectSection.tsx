import Image from "next/image";

export default function ConnectSection() {
  return (
    <section id="connect" className="press-section" aria-label="Connect with Mystery Entertainment" data-fade>
      <h2>Connect With Mystery Entertainment.</h2>

      <article className="press-article">
        <div className="press-article-text">
          <p className="publication">Instagram</p>
          <h3>
            <a
              href="https://www.instagram.com/mysteryentertainment_"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mysteryentertainment_
            </a>
            <span className="press-arrow" aria-hidden="true">↗</span>
          </h3>
          <p>Follow us on Instagram for behind-the-scenes content, new drops, and artist updates.</p>
        </div>
        <div className="press-article-image">
          <div className="img-frame ratio-4-5">
            <Image
              src="/media/Skoobephoto6.png"
              alt="Mystery Entertainment Instagram"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </article>

      <article className="press-article press-article--reverse">
        <div className="press-article-text">
          <p className="publication">TikTok</p>
          <h3>
            <a
              href="https://www.tiktok.com/@mysteryentertainment1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mysteryentertainment1
            </a>
            <span className="press-arrow" aria-hidden="true">↗</span>
          </h3>
          <p>Catch exclusive clips, music teasers, and updates on our TikTok.</p>
        </div>
        <div className="press-article-image">
          <div className="img-frame ratio-4-5">
            <Image
              src="/media/Skoobephoto7.png"
              alt="Mystery Entertainment TikTok"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </article>

      <article className="press-article">
        <div className="press-article-text">
          <p className="publication">YouTube</p>
          <h3>
            <a
              href="https://www.youtube.com/channel/UCttEBLCaociI_dN_gdCE6kA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mystery Entertainment
            </a>
            <span className="press-arrow" aria-hidden="true">↗</span>
          </h3>
          <p>Watch official music videos, visuals, and full-length releases on our YouTube channel.</p>
        </div>
        <div className="press-article-image">
          <div className="img-frame ratio-4-5">
            <Image
              src="/media/Skoobephoto5.png"
              alt="Mystery Entertainment YouTube"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </article>

      <div className="press-contact">
        <p className="publication">Email</p>
        <p>
          <a href="mailto:MysteryEnt21@gmail.com">MysteryEnt21@gmail.com</a>
        </p>
        <p>For bookings, features, press, and general inquiries.</p>
      </div>
    </section>
  );
}
