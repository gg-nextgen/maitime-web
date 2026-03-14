import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Risorse Gratuite per le PMI",
  description:
    "eBook, guide e materiali scaricabili per imprenditori che vogliono ottimizzare la gestione della propria azienda con l'AI e i dati.",
  alternates: {
    canonical: "https://maitime.ai/opera/risorse",
  },
  openGraph: {
    title: "Risorse Gratuite per le PMI — MAITIME OPERA",
    description:
      "eBook, guide e materiali scaricabili per imprenditori che vogliono ottimizzare la gestione aziendale con l'AI.",
    url: "https://maitime.ai/opera/risorse",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Risorse Gratuite MAITIME OPERA per PMI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Risorse Gratuite per le PMI — MAITIME OPERA",
    description:
      "eBook, guide e materiali scaricabili per imprenditori che vogliono ottimizzare la gestione aziendale con l'AI.",
    images: ["/assets/og-image.png"],
  },
};

export default function RisorsePage() {
  const resources = getAllResources();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Risorse Gratuite per le PMI",
    description:
      "eBook, guide e materiali scaricabili per imprenditori che vogliono ottimizzare la gestione aziendale.",
    url: "https://maitime.ai/opera/risorse",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: resources.length,
      itemListElement: resources.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://maitime.ai/opera/risorse/${r.slug}`,
        name: r.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Risorse{" "}
            <span className="text-maitime-accent">Gratuite</span> per la Tua
            Impresa
          </h1>
          <p className="mt-6 text-lg text-white/70">
            eBook, guide e materiali pratici per imprenditori che vogliono
            prendere decisioni basate sui dati, non sulle sensazioni.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/opera/risorse/${resource.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-maitime-border bg-maitime-card transition-all hover:-translate-y-1 hover:border-maitime-accent/40"
              >
                {/* Cover Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#000040]">
                  <Image
                    src={resource.coverImage}
                    alt={resource.title}
                    fill
                    className="object-cover object-left transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Type Badge */}
                  <span className="absolute top-3 left-3 rounded-full bg-maitime-accent/90 px-3 py-1 text-xs font-bold uppercase text-white">
                    {resource.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Tags */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-maitime-accent/10 px-3 py-1 text-xs text-maitime-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mb-2 text-xl font-bold transition-colors group-hover:text-maitime-accent">
                    {resource.title}
                  </h2>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">
                    {resource.subtitle}
                  </p>

                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span>
                      {new Date(resource.date).toLocaleDateString("it-IT", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    {resource.pages && <span>{resource.pages} pagine</span>}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-maitime-accent">
                    Scarica gratis
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-maitime-card p-12 text-center">
          <h2 className="text-2xl font-bold">
            Vuoi Vedere MAITIME in Azione?
          </h2>
          <p className="mt-4 text-white/70">
            Prenota una demo gratuita e scopri come MAITIME può trasformare i
            dati della tua azienda in decisioni concrete.
          </p>
          <a
            href="https://gg-nextgen.ai/meetings/egiardini"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white bg-gradient-to-r from-[#000062] to-maitime-accent px-8 py-3.5 font-bold text-white transition-transform hover:scale-105"
          >
            Prenota una Demo Gratuita &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
