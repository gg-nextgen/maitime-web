import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import GlowCard from "@/components/GlowCard";

export const metadata: Metadata = {
  title: "MAITIME OPERA — L'Agente AI della Tua PMI",
  description:
    "MAITIME OPERA è la piattaforma AI che si collega al tuo gestionale, analizza i dati e ti suggerisce le migliori strategie. 18 moduli, 6 reparti, tutto in linguaggio naturale.",
  alternates: { canonical: "https://maitime.ai/opera" },
  openGraph: {
    title: "MAITIME OPERA — L'Agente AI della Tua PMI",
    description:
      "La piattaforma AI per le piccole e medie imprese. 18 moduli per vendite, produzione, amministrazione, customer care, risorse umane e strategie.",
    url: "https://maitime.ai/opera",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAITIME OPERA — L'Agente AI della Tua PMI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAITIME OPERA — L'Agente AI della Tua PMI",
    description:
      "La piattaforma AI per le piccole e medie imprese. 18 moduli per vendite, produzione, amministrazione e strategie.",
    images: ["/assets/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MAITIME OPERA",
  description:
    "Piattaforma AI per le piccole e medie imprese italiane. Si collega al gestionale, analizza i dati e suggerisce le migliori strategie.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://maitime.ai/opera",
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
  author: {
    "@type": "Organization",
    name: "G&G NextGen",
  },
};

export default function OperaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section-dark relative overflow-hidden px-4 pt-32 pb-20 sm:px-6">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#FF00FF]/[0.04] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#FF00FF] uppercase">
            MAITIME OPERA
          </p>
          <h1 className="glow-text text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            L&apos;Agente AI{" "}
            <span className="bg-gradient-to-r from-white via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent">
              della Tua PMI
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            La piattaforma AI che si collega al tuo gestionale, analizza i dati
            e ti suggerisce le migliori strategie per far crescere il tuo
            business. 18 moduli, 6 reparti, tutto accessibile in linguaggio
            naturale.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://gg-nextgen.ai/meetings/egiardini"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button rounded-xl bg-gradient-to-r from-[#5B21B6] to-[#FF00FF] px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
            >
              Prenota una Demo Gratuita
            </a>
            <Link
              href="/opera/piattaforma"
              className="rounded-xl border border-white/20 px-8 py-4 text-lg font-medium text-white/80 transition-colors hover:border-[#FF00FF]/50 hover:text-white"
            >
              Scopri i Moduli &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <AnimatedSection className="section-light border-y border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-[#FF00FF]">18+</p>
            <p className="text-sm text-white/50">Moduli AI</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#FF00FF]">6</p>
            <p className="text-sm text-white/50">Reparti Aziendali</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#FF00FF]">2</p>
            <p className="text-sm text-white/50">Piani Disponibili</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#FF00FF]">24/7</p>
            <p className="text-sm text-white/50">Sempre Disponibile</p>
          </div>
        </div>
      </AnimatedSection>

      {/* What Opera Does */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedHeading subtitle="Un unico ecosistema AI per ogni reparto della tua azienda.">
            Cosa Fa{" "}
            <span className="glow-text text-[#FF00FF]">MAITIME OPERA</span>
          </AnimatedHeading>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Vendite",
                desc: "Dashboard vendite, panoramica clienti e prodotti. Analisi in tempo reale per decisioni commerciali data-driven.",
                icon: "📈",
              },
              {
                title: "Produzione",
                desc: "Merce in arrivo, ordini clienti, distinta base e magazzino. Il controllo totale sulla supply chain.",
                icon: "🏭",
              },
              {
                title: "Amministrazione",
                desc: "Documenti ufficiali generati dall'AI. Fatture, lettere e comunicazioni professionali in un click.",
                icon: "📋",
              },
              {
                title: "Customer Care",
                desc: "Conversazioni AI automatiche e lead generati. Il tuo servizio clienti non dorme mai.",
                icon: "💬",
              },
              {
                title: "Risorse Umane",
                desc: "Screening curriculum e profilazione dipendenti con l'AI. Trova i talenti giusti più velocemente.",
                icon: "👥",
              },
              {
                title: "Strategie",
                desc: "Obiettivi, azioni guidate, gestione progetti, agenda e promemoria. Il tuo direttore strategico AI.",
                icon: "🎯",
              },
            ].map((dept, i) => (
              <GlowCard key={dept.title} delay={i * 0.1}>
                <span className="mb-3 inline-block text-3xl">{dept.icon}</span>
                <h3 className="mb-2 text-lg font-bold text-[#FF00FF]">
                  {dept.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {dept.desc}
                </p>
              </GlowCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/opera/piattaforma"
              className="text-[#FF00FF] underline underline-offset-4 transition-colors hover:text-[#FF00FF]/80"
            >
              Scopri tutti i 18 moduli &rarr;
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* How it works */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedHeading subtitle="Tre semplici passaggi per trasformare la gestione della tua azienda.">
            Come Funziona
          </AnimatedHeading>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Collega",
                desc: "Connetti MAITIME OPERA al tuo gestionale. Nessun cambio di software necessario.",
              },
              {
                step: "02",
                title: "Chiedi",
                desc: "Fai una domanda in linguaggio naturale. OPERA capisce e risponde con dati reali.",
              },
              {
                step: "03",
                title: "Agisci",
                desc: "Ricevi analisi e suggerimenti pronti all'uso. OPERA può anche agire per conto tuo.",
              },
            ].map((item, i) => (
              <GlowCard key={item.step} delay={i * 0.15}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FF00FF]/20 to-[#5B21B6]/20 text-xl font-bold text-[#FF00FF]">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </GlowCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/opera/come-funziona"
              className="text-[#FF00FF] underline underline-offset-4 transition-colors hover:text-[#FF00FF]/80"
            >
              Scopri tutti i dettagli &rarr;
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Preview */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedHeading subtitle="Scegli il piano più adatto alla tua azienda.">
            I Piani MAITIME OPERA
          </AnimatedHeading>

          <div className="grid gap-6 md:grid-cols-2">
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
              </div>
            </GlowCard>

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
              </div>
            </GlowCard>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/opera/piattaforma"
              className="text-[#FF00FF] underline underline-offset-4 transition-colors hover:text-[#FF00FF]/80"
            >
              Confronta i piani nel dettaglio &rarr;
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
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
            Scopri MAITIME OPERA dal Vivo
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Prenota una demo gratuita di 30 minuti e scopri come MAITIME OPERA
            può trasformare la gestione della tua azienda.
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
