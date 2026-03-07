import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import GlowCard from "@/components/GlowCard";
import { departments, getModulesByDepartment } from "@/lib/modules";

export const metadata: Metadata = {
  title: "Piattaforma AI per PMI — Tutti i Moduli",
  description:
    "Scopri tutti i moduli della piattaforma MAITIME: vendite, produzione, magazzino, customer care, risorse umane e strategie. 18 moduli AI + Chat con il Direttore.",
  alternates: { canonical: "https://www.maitime.ai/piattaforma" },
  openGraph: {
    title: "Piattaforma MAITIME — 18 Moduli AI per la Tua Impresa",
    description:
      "Dashboard vendite, gestione clienti, magazzino, ordini, chatbot AI, gestione progetti e molto altro. Tutto in un'unica piattaforma.",
    url: "https://www.maitime.ai/piattaforma",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Piattaforma MAITIME — 18 Moduli AI per PMI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piattaforma MAITIME — 18 Moduli AI per la Tua Impresa",
    description:
      "Dashboard vendite, gestione clienti, magazzino, ordini, chatbot AI e molto altro. Tutto in un'unica piattaforma.",
    images: ["/assets/og-image.png"],
  },
};

const planColor = {
  Professional: "from-[#5B21B6] to-[#7C3AED]",
  Platinum: "from-[#FF00FF] to-[#EC4899]",
  "Tutti i piani": "from-[#059669] to-[#10B981]",
} as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Piattaforma MAITIME — 18 Moduli AI per PMI",
  description:
    "Scopri tutti i moduli della piattaforma MAITIME: vendite, produzione, magazzino, customer care, risorse umane e strategie.",
  url: "https://www.maitime.ai/piattaforma",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "MAITIME",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        name: "Professional",
        price: "499",
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "Platinum",
        price: "899",
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
      },
    ],
  },
};

export default function PiattaformaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════ */}
      <section className="section-dark relative overflow-hidden px-4 pt-32 pb-20 sm:px-6">
        {/* Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#FF00FF]/[0.04] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#FF00FF] uppercase">
            La Piattaforma
          </p>
          <h1 className="glow-text text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            18 Moduli AI.{" "}
            <span className="bg-gradient-to-r from-white via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Un Unico Obiettivo.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Ogni reparto della tua azienda ha il suo modulo dedicato.
            Dashboard, analisi, automazione e AI — tutto integrato, tutto
            accessibile con il linguaggio naturale.
          </p>

          {/* Quick stats */}
          <div className="mx-auto mt-10 flex max-w-lg justify-center gap-8 text-center sm:gap-12">
            <div>
              <p className="text-3xl font-bold text-[#FF00FF]">18+</p>
              <p className="text-sm text-white/50">Moduli</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FF00FF]">6</p>
              <p className="text-sm text-white/50">Reparti</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FF00FF]">2</p>
              <p className="text-sm text-white/50">Piani</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          DEPARTMENTS + MODULES
          ════════════════════════════════════════════════ */}
      {departments.map((dept, deptIndex) => {
        const deptModules = getModulesByDepartment(dept.id);
        const isLight = deptIndex % 2 === 0;

        return (
          <AnimatedSection
            key={dept.id}
            className={`${isLight ? "section-light" : "section-dark"} px-4 py-24 sm:px-6`}
          >
            <div className="mx-auto max-w-6xl">
              <AnimatedHeading subtitle={dept.description}>
                <span className="mr-3 inline-block text-4xl">{dept.icon}</span>
                {dept.name}
              </AnimatedHeading>

              <div
                className={`grid gap-6 ${
                  deptModules.length === 1
                    ? "max-w-xl mx-auto"
                    : deptModules.length === 2
                      ? "md:grid-cols-2"
                      : "md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {deptModules.map((mod, i) => (
                  <GlowCard key={mod.slug} delay={i * 0.1}>
                    <Link
                      href={`/piattaforma/${mod.slug}`}
                      className="block h-full"
                    >
                      {/* Plan badge */}
                      <span
                        className={`mb-4 inline-block rounded-full bg-gradient-to-r ${planColor[mod.plan]} px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase`}
                      >
                        {mod.plan}
                      </span>

                      <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-[#FF00FF]">
                        {mod.title}
                      </h3>
                      <p className="mb-3 text-sm font-medium text-[#FF00FF]/80">
                        {mod.tagline}
                      </p>
                      <p className="text-sm leading-relaxed text-white/60">
                        {mod.description}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#FF00FF]">
                        Scopri di più
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </Link>
                  </GlowCard>
                ))}
              </div>
            </div>
          </AnimatedSection>
        );
      })}

      {/* ════════════════════════════════════════════════
          CHAT CON IL DIRETTORE - Special section
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div
            className="overflow-hidden rounded-2xl border border-[#FF00FF]/20 p-10 text-center sm:p-14"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,0,255,0.08) 0%, rgba(0,0,70,0.5) 50%, rgba(91,33,182,0.08) 100%)",
              boxShadow:
                "0 0 60px rgba(255,0,255,0.1), inset 0 0 60px rgba(255,0,255,0.03)",
            }}
          >
            <span className="mb-4 inline-block text-5xl">🤖</span>
            <h2 className="glow-text text-3xl font-bold sm:text-4xl">
              Chat con il Direttore
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
              L&apos;interfaccia che unisce tutti i moduli. Gestisci la tua
              azienda con il linguaggio naturale — chiedi, analizza, agisci.
            </p>
            <span className="mt-2 inline-block rounded-full bg-gradient-to-r from-[#059669] to-[#10B981] px-4 py-1 text-xs font-bold tracking-wide text-white uppercase">
              Disponibile su tutti i piani
            </span>
            <div className="mt-8">
              <Link
                href="/piattaforma/chat-direttore"
                className="glow-button inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B21B6] to-[#FF00FF] px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
              >
                Scopri il Direttore &rarr;
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          PRICING PREVIEW
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedHeading subtitle="Scegli il piano più adatto alla tua azienda.">
            I Piani MAITIME
          </AnimatedHeading>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Professional */}
            <GlowCard>
              <div className="text-center">
                <span className="inline-block rounded-full bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] px-4 py-1 text-xs font-bold tracking-wide text-white uppercase">
                  Professional
                </span>
                <p className="mt-6 text-4xl font-bold">
                  &euro;499
                  <span className="text-lg font-normal text-white/50">
                    /mese
                  </span>
                </p>
                <p className="mt-2 text-sm text-white/50">
                  Tutti gli strumenti essenziali per gestire la tua PMI
                </p>
                <ul className="mt-6 space-y-2 text-left text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Dashboard Vendite
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Panoramica Clienti e Prodotti
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Magazzino
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Documenti Ufficiali
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Obiettivi, Azioni, Progetti, Agenda, Promemoria
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Chat con il Direttore
                  </li>
                </ul>
              </div>
            </GlowCard>

            {/* Platinum */}
            <GlowCard className="border-[#FF00FF]/30">
              <div className="text-center">
                <span className="inline-block rounded-full bg-gradient-to-r from-[#FF00FF] to-[#EC4899] px-4 py-1 text-xs font-bold tracking-wide text-white uppercase">
                  Platinum
                </span>
                <p className="mt-6 text-4xl font-bold">
                  &euro;899
                  <span className="text-lg font-normal text-white/50">
                    /mese
                  </span>
                </p>
                <p className="mt-2 text-sm text-white/50">
                  Tutto Professional + moduli avanzati
                </p>
                <ul className="mt-6 space-y-2 text-left text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Tutto il piano Professional
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Merce in Arrivo, Ordini Clienti, Distinta Base
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Conversazioni AI e Lead Generati
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Curriculum Ricevuti e Profilazione Dipendenti
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#FF00FF]">&#10003;</span>
                    Chat con il Direttore (avanzato)
                  </li>
                </ul>
              </div>
            </GlowCard>
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          CTA FINALE
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#FF00FF]/20 p-10 text-center sm:p-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,0,255,0.08) 0%, rgba(0,0,70,0.5) 50%, rgba(91,33,182,0.08) 100%)",
            boxShadow:
              "0 0 60px rgba(255,0,255,0.1), inset 0 0 60px rgba(255,0,255,0.03)",
          }}
        >
          <h2 className="glow-text text-3xl font-bold sm:text-4xl">
            Scopri MAITIME dal Vivo
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Prenota una demo gratuita di 30 minuti e scopri come MAITIME può
            trasformare la gestione della tua azienda.
          </p>
          <a
            href="https://gg-nextgen.ai/meetings/egiardini"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B21B6] to-[#FF00FF] px-10 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
          >
            Prenota una Demo Gratuita
            <span className="text-xl">&rarr;</span>
          </a>
          <p className="mt-4 text-sm text-white/30">
            Gratuita e senza impegno. 30 minuti per cambiare la tua azienda.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
