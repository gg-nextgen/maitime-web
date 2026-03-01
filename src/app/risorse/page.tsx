import Link from "next/link";
import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Risorse per le PMI",
  description:
    "Guide, consigli e strategie pratiche per imprenditori che vogliono ottimizzare la gestione della propria azienda con l'AI.",
  alternates: {
    canonical: "https://www.maitime.ai/risorse",
  },
};

export default function RisorsePage() {
  const articles = getAllArticles();

  return (
    <>
      {/* Hero */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Risorse per{" "}
            <span className="text-maitime-accent">Imprenditori</span>
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Guide pratiche, consigli e strategie per ottimizzare la gestione
            della tua PMI con l&apos;intelligenza artificiale.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/risorse/${article.slug}`}
                className="group flex flex-col rounded-xl border border-maitime-border bg-maitime-card p-6 transition-all hover:-translate-y-1 hover:border-maitime-accent/40"
              >
                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-maitime-accent/10 px-3 py-1 text-xs text-maitime-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mb-3 text-xl font-bold transition-colors group-hover:text-maitime-accent">
                  {article.title}
                </h2>

                <p className="mb-4 flex-1 text-sm text-white/70">
                  {article.description}
                </p>

                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>
                    {new Date(article.date).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span>{article.readingTime}</span>
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
            Vuoi Saperne di Più?
          </h2>
          <p className="mt-4 text-white/70">
            Prenota una demo gratuita e scopri come MAITIME può aiutare la tua
            azienda.
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
