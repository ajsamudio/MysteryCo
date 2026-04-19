import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Skoobe",
  description:
    "Skoobe is an American rapper, songwriter, and recording producer. Born in Southern California — home of Mystery Entertainment.",
  openGraph: {
    title: "Skoobe | Mystery Entertainment",
    description:
      "Skoobe is an American rapper, songwriter, and recording producer. Born in Southern California — home of Mystery Entertainment.",
    images: [{ url: "/media/SkoobeThumbnail.jpg", width: 1200, height: 630 }],
  },
};

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/therealskoobe" },
];

const streams = [
  { label: "Apple Music", href: "https://music.apple.com/us/album/come-home-single/1887215237" },
  { label: "Pandora",     href: "https://www.pandora.com/artist/skoobe/come-home/ALvxKxJkf9kqpV6?part=ug-desktop&corr=93267175485239337" },
  { label: "Spotify",     href: "https://open.spotify.com/search/skoobe" },
];

const releases = [
  {
    src: "/media/SkoobeComeHome.png",
    alt: "Skoobe — COME HOME cover art",
    title: "COME HOME",
    year: "2026",
    href: "https://music.apple.com/us/album/come-home-single/1887215237",
  },
  {
    src: "/media/SkoobeAdoption.png",
    alt: "Skoobe — Adoption Day cover art",
    title: "Adoption Day",
    year: "2023",
    href: "https://open.spotify.com/search/skoobe",
  },
  {
    src: "/media/SkoobeMarathon.png",
    alt: "Skoobe — Marathon cover art",
    title: "Marathon",
    year: "2022",
    href: "https://open.spotify.com/search/skoobe",
  },
];

export default function SkoobePage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Full-bleed Banner ─────────────────────────────── */}
        <div className="ap-banner">
          <Image
            src="/media/SkoobeMarathonPhoto.png"
            alt="Skoobe — Mystery Entertainment"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* ── Artist Name ───────────────────────────────────── */}
        <div className="ap-name-wrap">
          <h1 className="ap-name" style={{ textAlign: "center" }}>Skoobe</h1>
        </div>

        {/* ── Centered Bio Block ────────────────────────────── */}
        <section className="ap-center-block" aria-label="About Skoobe">
          <p className="ap-center-label">Skoobe x Mystery Entertainment</p>
          <p className="ap-center-bio">
            Skoobe is an American rapper, songwriter, and recording producer.
            Born in Southern California, after the release of his second album
            &ldquo;Adoption Day&rdquo; Skoobe has cultivated a global presence
            in the rap scene.
          </p>
          <a href="#biography" className="ap-bio-link">Biography</a>
        </section>

        {/* ── Socials + Stream ──────────────────────────────── */}
        <section className="ap-links-block" aria-label="Socials and streaming">
          <div className="ap-links-two-col">

            <div className="ap-links-group">
              <p className="ap-col-heading">Socials</p>
              <ul>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="ap-col-link">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ap-links-group">
              <p className="ap-col-heading">Stream</p>
              <ul>
                {streams.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="ap-col-link">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ── Releases ──────────────────────────────────────── */}
        <section id="releases" className="ap-releases" aria-label="Skoobe releases">
          <div className="ap-releases-inner">
            <h2 className="ap-releases-heading">Releases.</h2>
            <p className="ap-releases-sub">Listen to Skoobe&apos;s Albums.</p>

            <div className="ap-releases-grid">
              {releases.map((r) => (
                <article key={r.title}>
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="ap-release-link">
                    <div className="img-frame ratio-1-1">
                      <Image
                        src={r.src}
                        alt={r.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <p className="ap-release-title">{r.title}</p>
                    <p className="ap-release-artist">Skoobe</p>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Biography ─────────────────────────────────────── */}
        <section id="biography" className="ap-bio-section" aria-label="Biography">
          <div className="ap-bio-inner">
            <div className="ap-bio-content">
              <p className="ap-col-heading">Biography</p>
              <p>
                Skoobe is an American rapper, songwriter, and recording
                producer born and raised in Southern California. He first made
                waves releasing music independently, building a loyal fanbase
                track by track before catching the attention of Mystery
                Entertainment.
              </p>
              <p>
                Following the release of his debut project <strong>Marathon</strong>{" "}
                in 2022, Skoobe continued to sharpen his sound. His sophomore
                album <strong>Adoption Day</strong> (2023) deepened his artistic
                identity — cementing him as one of Southern California&rsquo;s
                rising voices in hip-hop.
              </p>
              <p>
                In 2026, Skoobe returned with <strong>Come Home</strong>, his
                most personal work to date — a record that captures growth,
                reflection, and the relentless drive that has defined his career.
              </p>
            </div>
            <div className="ap-bio-photos">
              <div className="img-frame ratio-3-4">
                <Image
                  src="/media/SkoobeVerticalPhoto.png"
                  alt="Skoobe"
                  fill
                  sizes="(max-width: 768px) 50vw, 22vw"
                />
              </div>
              <div className="img-frame ratio-3-4">
                <Image
                  src="/media/Skoobephoto6.png"
                  alt="Skoobe"
                  fill
                  sizes="(max-width: 768px) 50vw, 22vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Back to Home ──────────────────────────────────── */}
        <section className="cta-banner" aria-label="Navigation">
          <div className="cta-banner-inner">
            <p>Mystery Entertainment — Los Angeles, CA</p>
            <Link href="/" className="cta-link">Back to Home &rarr;</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
