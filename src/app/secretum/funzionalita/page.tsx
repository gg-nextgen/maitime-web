import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import GlowCard from "@/components/GlowCard";
import { secretumFeatures } from "@/lib/secretum";

export const metadata: Metadata = {
  title: "Funzionalità MAITIME SECRETUM — Gestione Privacy GDPR con AI",
  description:
    "Generazione documenti GDPR, assistente AI, firma elettronica OTP, dashboard compliance, gestione organizzazioni, audit digitali e notifiche automatiche.",
  alternates: { canonical: "https://maitime.ai/secretum/funzionalita" },
  openGraph: {
    title: "Funzionalità MAITIME SECRETUM — Privacy e Compliance GDPR",
    description:
      "Tutte le funzionalità di Secretum: documenti GDPR automatici, firma OTP, dashboard compliance, audit digitali per DPO e studi legali.",
    url: "https://maitime.ai/secretum/funzionalita",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Funzionalità MAITIME SECRETUM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funzionalità MAITIME SECRETUM — Privacy e Compliance GDPR",
    description:
      "Documenti GDPR automatici, firma OTP, dashboard compliance, audit digitali. Tutto in un'unica piattaforma.",
    images: ["/assets/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Funzionalità MAITIME SECRETUM",
  description:
    "Tutte le funzionalità della piattaforma MAITIME SECRETUM per la gestione della privacy e compliance GDPR.",
  url: "https://maitime.ai/secretum/funzionalita",
  isPartOf: {
    "@type": "WebSite",
    url: "https://maitime.ai",
  },
};

export default function SecretumFunzionalitaPage() {
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
            <span className="text-white/70">Funzionalità</span>
          </nav>

          <p className="mb-4 text-sm font-semibold tracking-widest text-[#06B6D4] uppercase">
            MAITIME SECRETUM
          </p>
          <h1 className="glow-text text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Tutte le{" "}
            <span className="bg-gradient-to-r from-white via-[#06B6D4] to-[#0891B2] bg-clip-text text-transparent">
              Funzionalità
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Sette moduli integrati per coprire ogni aspetto della compliance
            privacy. Dalla generazione documenti alla firma elettronica,
            dall&apos;audit al monitoraggio continuo.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      {secretumFeatures.map((feature, index) => {
        const isLight = index % 2 === 0;
        return (
          <AnimatedSection
            key={feature.slug}
            className={`${isLight ? "section-light" : "section-dark"} px-4 py-24 sm:px-6`}
          >
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-start gap-4">
                <span className="text-4xl">{feature.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {feature.title}
                  </h2>
                  <p className="mt-1 text-lg text-[#06B6D4]">
                    {feature.subtitle}
                  </p>
                </div>
              </div>

              <p className="mb-8 max-w-3xl text-base leading-relaxed text-white/70">
                {feature.description}
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {feature.details.map((detail, i) => (
                  <GlowCard key={i} delay={i * 0.08}>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-lg text-[#06B6D4]">
                        &#10003;
                      </span>
                      <p className="text-sm text-white/70">{detail}</p>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </AnimatedSection>
        );
      })}

      {/* CTA */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
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
            Vuoi Provare Secretum?
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
      <section className="section-light px-4 py-12 sm:px-6">
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
