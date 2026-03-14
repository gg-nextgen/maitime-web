import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import GlowCard from "@/components/GlowCard";
import { secretumStepsStudio, secretumStepsDPO } from "@/lib/secretum";

export const metadata: Metadata = {
  title: "Come Funziona MAITIME SECRETUM — 4 Passi per la Compliance",
  description:
    "Registrati, verifica la compliance, genera i documenti e firma. Scopri come Secretum semplifica la gestione privacy dei condomini in 4 semplici passi.",
  alternates: { canonical: "https://maitime.ai/secretum/come-funziona" },
  openGraph: {
    title: "Come Funziona MAITIME SECRETUM — 4 Passi per la Compliance",
    description:
      "Dalla registrazione alla firma: 4 passi per gestire la privacy condominiale. Per studi di amministrazione e studi legali / DPO.",
    url: "https://maitime.ai/secretum/come-funziona",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Come Funziona MAITIME SECRETUM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Come Funziona MAITIME SECRETUM — 4 Passi per la Compliance",
    description:
      "Dalla registrazione alla firma: 4 passi per gestire la privacy condominiale.",
    images: ["/assets/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Come Funziona MAITIME SECRETUM",
  description:
    "Quattro passaggi per gestire la compliance privacy condominiale con Secretum.",
  step: [
    ...secretumStepsStudio.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  ],
};

export default function SecretumComeFunzionaPage() {
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
            <span className="text-white/70">Come Funziona</span>
          </nav>

          <p className="mb-4 text-sm font-semibold tracking-widest text-[#06B6D4] uppercase">
            MAITIME SECRETUM
          </p>
          <h1 className="glow-text text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Come{" "}
            <span className="bg-gradient-to-r from-white via-[#06B6D4] to-[#0891B2] bg-clip-text text-transparent">
              Funziona
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Due percorsi, un unico obiettivo: la compliance privacy
            condominiale. Scegli il tuo ruolo e scopri come Secretum ti
            semplifica il lavoro.
          </p>
        </div>
      </section>

      {/* Studio di Amministrazione Flow */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedHeading subtitle="Da zero a compliance in 4 semplici passi.">
            <span className="mr-3 inline-block text-4xl">🏛️</span>
            Per lo Studio di Amministrazione
          </AnimatedHeading>

          <div className="grid gap-8 md:grid-cols-2">
            {secretumStepsStudio.map((step, i) => (
              <GlowCard key={step.step} delay={i * 0.15}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#06B6D4]/20 to-[#0891B2]/20 text-xl font-bold text-[#06B6D4]">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-white/60">{step.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* DPO / Studio Legale Flow */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedHeading subtitle="Dall'audit al report professionale, tutto digitale.">
            <span className="mr-3 inline-block text-4xl">⚖️</span>
            Per lo Studio Legale / DPO
          </AnimatedHeading>

          <div className="grid gap-8 md:grid-cols-2">
            {secretumStepsDPO.map((step, i) => (
              <GlowCard key={step.step} delay={i * 0.15}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#06B6D4]/20 to-[#0891B2]/20 text-xl font-bold text-[#06B6D4]">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-white/60">{step.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

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
            Pronto per Iniziare?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Iscriviti per essere tra i primi a provare Secretum.
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
