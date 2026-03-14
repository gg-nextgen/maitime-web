import type { MetadataRoute } from "next";
import { getAllResources } from "@/lib/resources";
import { getAllModules } from "@/lib/modules";

export default function sitemap(): MetadataRoute.Sitemap {
  const resources = getAllResources();
  const modules = getAllModules();

  const resourceEntries: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `https://maitime.ai/opera/risorse/${r.slug}`,
    lastModified: new Date(r.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const moduleEntries: MetadataRoute.Sitemap = modules.map((mod) => ({
    url: `https://maitime.ai/opera/piattaforma/${mod.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://maitime.ai",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // OPERA
    {
      url: "https://maitime.ai/opera",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://maitime.ai/opera/piattaforma",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://maitime.ai/opera/come-funziona",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://maitime.ai/opera/risorse",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // SECRETUM
    {
      url: "https://maitime.ai/secretum",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://maitime.ai/secretum/funzionalita",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://maitime.ai/secretum/a-chi-si-rivolge",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://maitime.ai/secretum/come-funziona",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://maitime.ai/secretum/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Shared pages
    {
      url: "https://maitime.ai/chi-siamo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://maitime.ai/contatti",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://maitime.ai/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://maitime.ai/cookie-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...moduleEntries,
    ...resourceEntries,
  ];
}
