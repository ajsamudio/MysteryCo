import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://mysteryentertainment.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mystery Entertainment: An Independent Record Label Based In Los Angeles",
    template: "%s | Mystery Entertainment",
  },
  description:
    "Mystery Entertainment — Fueled by passion and the desire to reimagine what it means to be a music company. Home of Skoobe. Based in Los Angeles, CA.",
  keywords: [
    "Mystery Entertainment",
    "independent record label",
    "Los Angeles",
    "Skoobe",
    "music label",
    "hip hop",
    "artist-first",
  ],
  authors: [{ name: "Mystery Entertainment" }],
  creator: "Mystery Entertainment",
  publisher: "Mystery Entertainment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mystery Entertainment",
    title: "Mystery Entertainment: An Independent Record Label Based In Los Angeles",
    description:
      "Fueled by passion and the desire to reimagine what it means to be a music company. Home of Skoobe.",
    images: [
      {
        url: "/media/SkoobeThumbnail.png",
        width: 1200,
        height: 630,
        alt: "Mystery Entertainment — Independent Record Label",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mystery Entertainment: An Independent Record Label Based In Los Angeles",
    description:
      "Fueled by passion and the desire to reimagine what it means to be a music company. Home of Skoobe.",
    images: ["/media/SkoobeThumbnail.png"],
    creator: "@mysteryentertainment_",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "music",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": `${SITE_URL}/#organization`,
      name: "Mystery Entertainment",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/media/SkoobeThumbnail.png`,
      },
      description:
        "Mystery Entertainment is an independent record label based in Los Angeles, CA. Founded in 2021, home of artist Skoobe.",
      foundingDate: "2021",
      location: {
        "@type": "Place",
        name: "Los Angeles, CA",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          addressCountry: "US",
        },
      },
      email: "MysteryEnt21@gmail.com",
      sameAs: [
        "https://www.instagram.com/mysteryentertainment_",
        "https://www.tiktok.com/@mysteryentertainment1",
        "https://mysteryentertainment.shop",
      ],
      member: [
        {
          "@type": "MusicGroup",
          name: "Skoobe",
          sameAs: [
            "https://www.instagram.com/mysteryentertainment_",
            "https://www.tiktok.com/@mysteryentertainment1",
          ],
        },
      ],
      album: [
        {
          "@type": "MusicAlbum",
          name: "COME HOME",
          byArtist: { "@type": "MusicGroup", name: "Skoobe" },
          datePublished: "2026",
        },
        {
          "@type": "MusicAlbum",
          name: "Adoption Day",
          byArtist: { "@type": "MusicGroup", name: "Skoobe" },
          datePublished: "2023",
        },
        {
          "@type": "MusicAlbum",
          name: "Marathon",
          byArtist: { "@type": "MusicGroup", name: "Skoobe" },
          datePublished: "2022",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Mystery Entertainment",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
