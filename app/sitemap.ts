// app/sitemap.ts
import type { MetadataRoute } from "next";
import { AREAS } from "@/data/areas";

const baseUrl = "https://www.ezoplumbing.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/areas",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path === "" ? "/" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const areaRoutes: MetadataRoute.Sitemap = AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...areaRoutes];
}
