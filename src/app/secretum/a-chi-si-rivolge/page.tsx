import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import GlowCard from "@/components/GlowCard";
import { secretumTargets } from "@/lib/secretum";

export const metadata: Metadata = {
  title:
    "A Chi Si Rivolge MAITIME SECRETUM — Studi, Amministratori, DPO",
  description:
    "Secretum è pensato per Studi di Amministrazione Condominiale, Amministratori di Condominio e Studi Legali / DPO. Scopri come può aiutare il tuo lavoro.",
  alternates: { canonical: "https://maitime.ai/secretum/a-chi-si-rivolge" },
  openGraph: {
    title: "A Chi Si Rivolge MAITIME SECRETUM",
    description:
      "Studi di amministrazione, amministratori e studi legali: tre prospettive, una piattaforma per la compliance GDPR condominiale.",
    url: "https://maitime.ai/secretum/a-chi-si-rivolge",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "A Chi Si Rivolge MAITIME SECRETUM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Chi Si Rivolge MAITIME SECRETUM",
    description:
      "Studi di amministrazione, amministratori e studi legali: una piattaforma per la compliance GDPR condominiale.",
    images: ["/assets/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "A Chi Si Rivolge MAITIME SECRETUM",
  description:
    "Secretum è pensato per Studi di Amministrazione Condominiale, Amministratori di Condominio e Studi Legali / DPO.",
  url: "https://maitime.ai/secretum/a-chi-si-rivolge",
  isPartOf: {
    "@type": "WebSite",
    url: "https://maitime.ai",
  },
};

export default function SecretumTargetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section-dark relative overflow-hidden px-4 pt-32 pb-20 sm:px-6">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#06B6D4]/[0.04] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="mb-8 text-sm text-white/50">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/secretum" className="hover:text-white/80">
              Secretum
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">A Chi Si Rivolge</span>
          </nav>

          <p className="mb-4 text-sm font-semibold tracking-widest text-[#06B6D4] uppercase">
            MAITIME SECRETUM
          </p>
          <h1 className="glow-text text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Una Piattaforma,{" "}
            <span className="bg-gradient-to-r from-white via-[#06B6D4] to-[#0891B2] bg-clip-text text-transparent">
              Tre Prospettive
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Ognuno vede ciò che gli serve. Secretum si adatta al ruolo
            dell&apos;utente per offrire gli strumenti giusti, nel momento
            giusto.
          </p>
        </div>
      </section>

      {/* Target Sections */}
      {secretumTargets.map((target, index) => {
        const isLight = index % 2 === 0;
        return (
          <AnimatedSection
            key={target.slug}
            className={`${isLight ? "section-light" : "section-dark"} px-4 py-24 sm:px-6`}
          >
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 flex items-start gap-4">
                <span className="text-5xl">{target.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {target.name}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/70">
                    {target.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Problems */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-red-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    Problemi che Risolve
                  </h3>
                  <div className="space-y-3">
                    {target.problems.map((problem, i) => (
                      <GlowCard key={i} delay={i * 0.08}>
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 text-red-400">✗</span>
                          <p className="text-sm text-white/70">{problem}</p>
                        </div>
                      </GlowCard>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#06B6D4]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Come Secretum Ti Aiuta
                  </h3>
                  <div className="space-y-3">
                    {target.solutions.map((solution, i) => (
                      <GlowCard key={i} delay={i * 0.08}>
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 text-[#06B6D4]">
                            &#10003;
                          </span>
                          <p className="text-sm text-white/70">{solution}</p>
                        </div>
                      </GlowCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}

      {/* CTA */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#06B6D4]/20 p-10 text-center sm:p-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(0,0,70,0.5) 50%, rgba(8,145,178,0.08) 100%)",
            boxShadow:
              "0 0 60px rgba(6,182,212,0.1), inset 0 0 60px rgba(6,182,212,0.03)",
          }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-4 py-1.5 text-xs font-semibold text-[#06B6D4]">
            Coming Soon
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Secretum È Pensato per Te
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Iscriviti per essere tra i primi a provare la piattaforma.
          </p>
          <Link
            href="/secretum#iscriviti"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0891B2] to-[#06B6D4] px-10 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
          >
            Iscriviti per gli Aggiornamenti &rarr;
          </Link>
        </div>
      </AnimatedSection>

      {/* Back link */}
      <section className="section-dark px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/secretum"
            className="text-[#06B6D4] underline underline-offset-4 hover:text-[#06B6D4]/80"
          >
            &larr; Torna a MAITIME SECRETUM
          </Link>
        </div>
      </section>
    </>
  );
}
