import type { MetadataRoute } from "next";

const SITE_URL = "https://www.maxmediapr.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/ochrana-osobnich-udaju`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    { url: `${SITE_URL}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
