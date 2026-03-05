import type { MetadataRoute } from "next";
import { getAllResources } from "@/lib/resources";
import { getAllModules } from "@/lib/modules";

export default function sitemap(): MetadataRoute.Sitemap {
  const resources = getAllResources();
  const modules = getAllModules();

  const resourceEntries: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `https://www.maitime.ai/risorse/${r.slug}`,
    lastModified: new Date(r.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const moduleEntries: MetadataRoute.Sitemap = modules.map((mod) => ({
    url: `https://www.maitime.ai/piattaforma/${mod.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.maitime.ai",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.maitime.ai/piattaforma",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.maitime.ai/come-funziona",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.maitime.ai/risorse",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.maitime.ai/chi-siamo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.maitime.ai/contatti",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.maitime.ai/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.maitime.ai/cookie-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...moduleEntries,
    ...resourceEntries,
  ];
}
