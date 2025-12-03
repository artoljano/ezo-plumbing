// app/sitemap.ts
import type { MetadataRoute } from "next";
import { AREAS } from "@/data/areas";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ezoplumbing.co.uk"; // <-- update if you use www

  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/areas", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route.priority,
  }));

  const areaRoutes: MetadataRoute.Sitemap = AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...areaRoutes];
}
