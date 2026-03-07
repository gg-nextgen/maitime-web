import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedHeading from "@/components/AnimatedHeading";
import GlowCard from "@/components/GlowCard";
import { ParticleBackground, HeroChat } from "@/components/ClientHome";

export const metadata: Metadata = {
  title: "MAITIME - L'AI per le Piccole Imprese",
  description:
    "MAITIME è la piattaforma AI che si collega al tuo gestionale, analizza i dati e ti suggerisce le migliori strategie per far crescere il tuo business.",
  alternates: { canonical: "https://www.maitime.ai" },
  openGraph: {
    title: "MAITIME - L'AI per le Piccole Imprese",
    description:
      "La piattaforma AI che si collega al tuo gestionale, analizza i dati e ti suggerisce le migliori strategie per far crescere il tuo business.",
    url: "https://www.maitime.ai",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAITIME - L'AI per le Piccole Imprese Italiane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAITIME - L'AI per le Piccole Imprese",
    description:
      "La piattaforma AI che si collega al tuo gestionale e ti suggerisce le migliori strategie per far crescere il tuo business.",
    images: ["/assets/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.maitime.ai/#organization",
      name: "G&G NextGen",
      url: "https://www.maitime.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://www.maitime.ai/assets/MAITIME_Logo_Dark.png",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Civitanova Marche",
        addressRegion: "MC",
        addressCountry: "IT",
      },
      sameAs: [
        "https://www.linkedin.com/company/106171898",
        "https://www.instagram.com/gg_nextgen",
        "https://www.youtube.com/channel/UCVFFf175JbFs6isvkxsbbTw",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.maitime.ai/#website",
      url: "https://www.maitime.ai",
      name: "MAITIME",
      publisher: { "@id": "https://www.maitime.ai/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.maitime.ai/#webpage",
      url: "https://www.maitime.ai",
      name: "MAITIME - L'AI per le Piccole Imprese",
      isPartOf: { "@id": "https://www.maitime.ai/#website" },
      about: { "@id": "https://www.maitime.ai/#organization" },
      description:
        "MAITIME è la piattaforma AI che si collega al tuo gestionale, analizza i dati e ti suggerisce le migliori strategie per far crescere il tuo business.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ════════════════════════════════════════════════
          HERO SECTION - Full viewport, particles, chat
          ════════════════════════════════════════════════ */}
      <section className="bg-animated-gradient relative flex min-h-[100dvh] flex-col items-center justify-center px-4 pt-10 pb-20">
        <ParticleBackground />

        {/* Radial glow behind title */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF00FF]/[0.04] blur-[100px]" />

        {/* Title */}
        <div className="relative z-10 mb-10 text-center sm:mb-12">
          <h1 className="glow-text text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Il Tuo Assistente AI
            <br />
            <span className="bg-gradient-to-r from-white via-[#FF00FF] to-[#8B5CF6] bg-clip-text text-transparent">
              è Già Qui.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/60 sm:text-lg">
            Chiedimi qualsiasi cosa. Sono MAITIME, l&apos;AI che aiuta le
            piccole imprese a crescere.
          </p>
        </div>

        {/* Inline chat - the product IS the hero */}
        <div className="relative z-10 w-full">
          <HeroChat />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-white/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SOCIAL PROOF - Animated counters
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-light border-y border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          <AnimatedCounter
            target={150}
            suffix="+"
            label="Ore risparmiate al mese"
          />
          <AnimatedCounter
            target={3200}
            suffix="+"
            label="Report generati"
          />
          <AnimatedCounter
            target={98}
            suffix="%"
            label="Soddisfazione clienti"
          />
          <AnimatedCounter
            target={24}
            suffix="/7"
            label="Sempre disponibile"
          />
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          PROBLEMA / SOLUZIONE
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedHeading
            subtitle="Gestire una PMI significa affrontare ogni giorno sfide che rubano tempo e risorse. MAITIME le risolve per te."
          >
            I Problemi che{" "}
            <span className="glow-text text-[#FF00FF]">Ogni Imprenditore</span>{" "}
            Conosce
          </AnimatedHeading>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                problem: "Perdi ore a cercare dati e fare report",
                solution:
                  "MAITIME analizza i tuoi dati in tempo reale e genera report dettagliati con una semplice domanda.",
                icon: "📊",
              },
              {
                problem: "I clienti in ritardo ti sfuggono di mano",
                solution:
                  "MAITIME monitora i pagamenti, identifica i clienti critici e suggerisce le azioni da compiere.",
                icon: "🔔",
              },
              {
                problem: "Le email e la comunicazione ti sommergono",
                solution:
                  "MAITIME scrive email professionali in più lingue e invia promemoria automatici per te.",
                icon: "✉️",
              },
            ].map((item, i) => (
              <GlowCard key={item.problem} delay={i * 0.15}>
                <div className={`mb-4 text-4xl animate-float float-delay-${i + 1}`}>{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-[#FF00FF]">
                  {item.problem}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {item.solution}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          COME FUNZIONA - 3 Steps
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedHeading
            subtitle="Tre semplici passaggi per trasformare la gestione della tua azienda."
          >
            Come Funziona
          </AnimatedHeading>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Collega",
                desc: "Connetti MAITIME al tuo gestionale. Nessun cambio di software necessario.",
              },
              {
                step: "02",
                title: "Chiedi",
                desc: "Fai una domanda in linguaggio naturale. MAITIME capisce e risponde con dati reali.",
              },
              {
                step: "03",
                title: "Agisci",
                desc: "Ricevi analisi e suggerimenti pronti all'uso. MAITIME può anche agire per conto tuo.",
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
              href="/come-funziona"
              className="text-[#FF00FF] underline underline-offset-4 transition-colors hover:text-[#FF00FF]/80"
            >
              Scopri tutti i dettagli &rarr;
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          VIDEO DEMO
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="glow-border overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <h2 className="mb-3 text-center text-3xl font-bold sm:text-4xl">
              Guarda MAITIME in Azione
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-center text-white/50">
              Analisi dati, report interattivi e suggerimenti strategici — tutto
              con una semplice domanda.
            </p>
            <div className="overflow-hidden rounded-xl">
              <video autoPlay loop muted playsInline className="w-full">
                <source
                  src="/assets/Video_Web_MAITIME_01.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <p className="mt-4 text-center text-[11px] text-white/30">
              Video concesso su autorizzazione della GIARDINI GROUP con dati
              reali
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          FEATURES
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedHeading>
            Perché le PMI Scelgono MAITIME
          </AnimatedHeading>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Integrazione",
                desc: "Si collega ai tuoi sistemi aziendali senza bisogno di cambiare software.",
              },
              {
                title: "Sicurezza",
                desc: "I tuoi dati sono al sicuro con la crittografia avanzata di Google.",
              },
              {
                title: "AI Avanzata",
                desc: "Un assistente AI che impara e migliora continuamente per supportarti.",
              },
              {
                title: "Velocità",
                desc: "Ottimizza il tuo tempo eseguendo attività ripetitive al posto tuo.",
              },
            ].map((f, i) => (
              <GlowCard key={f.title} delay={i * 0.1}>
                <h3 className="mb-2 text-base font-bold text-[#FF00FF]">
                  {f.title}
                </h3>
                <p className="text-sm text-white/60">{f.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          RISORSE PREVIEW
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Risorse per la Tua Impresa
              </h2>
              <p className="mt-2 text-white/50">
                eBook e materiali gratuiti per imprenditori.
              </p>
            </div>
            <Link
              href="/risorse"
              className="hidden text-[#FF00FF] underline underline-offset-4 sm:block"
            >
              Vedi tutte &rarr;
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-2xl mx-auto">
            <GlowCard delay={0}>
              <Link href="/risorse/guida-controllo-commerciale-pmi" className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-full sm:w-40 aspect-[3/4] flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/assets/resources/guida-controllo-commerciale-cover.webp"
                    alt="Guida Controllo Commerciale per PMI"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 rounded-full bg-[#FF00FF]/90 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                    ebook
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-[#FF00FF]">
                    La Guida Completa al Controllo Commerciale per PMI
                  </h3>
                  <p className="text-sm text-white/50">Dashboard, Clienti e Prodotti sotto un&apos;unica lente. Dalle decisioni &quot;a sensazione&quot; ai dati.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#FF00FF]">
                    Scarica gratis
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </span>
                </div>
              </Link>
            </GlowCard>
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/risorse"
              className="text-[#FF00FF] underline underline-offset-4"
            >
              Vedi tutte le risorse &rarr;
            </Link>
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
            Fai il Primo Passo Verso l&apos;AI
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Prenota una call gratuita di 30 minuti. Ti mostriamo come MAITIME
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
