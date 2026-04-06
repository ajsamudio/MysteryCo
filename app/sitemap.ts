import type { MetadataRoute } from "next";

const SITE_URL = "https://mysteryentertainment.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-04-06",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
