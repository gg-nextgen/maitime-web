import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import GlowCard from "@/components/GlowCard";
import { secretumFeatures, secretumTargets } from "@/lib/secretum";

export const metadata: Metadata = {
  title: "MAITIME SECRETUM — Privacy Condominiale, Finalmente Semplice",
  description:
    "Secretum è la piattaforma AI che genera, gestisce e firma i documenti privacy obbligatori per i condomini. GDPR, firma elettronica OTP, dashboard compliance e audit digitali.",
  alternates: { canonical: "https://maitime.ai/secretum" },
  openGraph: {
    title: "MAITIME SECRETUM — Privacy Condominiale, Finalmente Semplice",
    description:
      "La piattaforma intelligente per la gestione della documentazione privacy (GDPR) nel contesto condominiale italiano.",
    url: "https://maitime.ai/secretum",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAITIME SECRETUM — Privacy Condominiale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAITIME SECRETUM — Privacy Condominiale, Finalmente Semplice",
    description:
      "Genera, gestisce e firma i documenti privacy obbligatori per i condomini. Con l'intelligenza artificiale al tuo fianco.",
    images: ["/assets/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MAITIME SECRETUM",
  description:
    "Piattaforma SaaS per la gestione della documentazione privacy (GDPR) nel contesto condominiale italiano. Generazione documenti, firma elettronica, dashboard compliance e audit digitali.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://maitime.ai/secretum",
  author: {
    "@type": "Organization",
    name: "G&G NextGen",
  },
};

export default function SecretumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section-dark relative overflow-hidden px-4 pt-32 pb-20 sm:px-6">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#06B6D4]/[0.06] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#06B6D4] uppercase">
            MAITIME SECRETUM
          </p>
          <h1 className="glow-text text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            La Privacy Condominiale,{" "}
            <span className="bg-gradient-to-r from-white via-[#06B6D4] to-[#0891B2] bg-clip-text text-transparent">
              Finalmente Semplice.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            La piattaforma intelligente che genera, gestisce e firma i documenti
            privacy obbligatori per i condomini. Con l&apos;intelligenza
            artificiale al tuo fianco.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40">
            Pensata per Studi di Amministrazione, Amministratori di Condominio e
            Studi Legali / DPO.
          </p>

          {/* Coming Soon Badge */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-5 py-2 text-sm font-semibold text-[#06B6D4]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06B6D4]" />
              </span>
              Coming Soon
            </span>
            <Link
              href="#iscriviti"
              className="rounded-xl bg-gradient-to-r from-[#0891B2] to-[#06B6D4] px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
            >
              Iscriviti per gli Aggiornamenti
            </Link>
          </div>
        </div>
      </section>

      {/* What is Secretum */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedHeading>
            Cos&apos;è{" "}
            <span className="text-[#06B6D4]">MAITIME SECRETUM</span>
          </AnimatedHeading>
          <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              Maitime Secretum è una piattaforma SaaS progettata per
              digitalizzare e semplificare la gestione della documentazione
              privacy (GDPR) nel contesto condominiale italiano.
            </p>
            <p>
              Ogni condominio ha l&apos;obbligo di produrre e mantenere
              aggiornata una serie di documenti privacy: informative per i
              condomini, atti di nomina dell&apos;amministratore, contratti con i
              fornitori, registri dei trattamenti, procedure per la gestione di
              violazioni dei dati e molto altro.
            </p>
            <p>
              Fino ad oggi, questa documentazione veniva gestita manualmente —
              spesso con modelli Word generici, fogli Excel e archivi cartacei —
              con il rischio concreto di errori, dimenticanze e{" "}
              <strong className="text-[#06B6D4]">
                sanzioni che possono arrivare fino a 20 milioni di euro
              </strong>
              .
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Key Features Preview */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedHeading subtitle="Un ecosistema completo per la compliance privacy condominiale.">
            Cosa Offre Secretum
          </AnimatedHeading>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {secretumFeatures.slice(0, 6).map((feature, i) => (
              <GlowCard key={feature.slug} delay={i * 0.1}>
                <span className="mb-3 inline-block text-3xl">
                  {feature.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold text-[#06B6D4]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {feature.subtitle}
                </p>
              </GlowCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/secretum/funzionalita"
              className="text-[#06B6D4] underline underline-offset-4 transition-colors hover:text-[#06B6D4]/80"
            >
              Scopri tutte le funzionalità &rarr;
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Target Audiences */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedHeading subtitle="Una piattaforma, tre prospettive diverse. Ognuno vede ciò che gli serve.">
            A Chi Si Rivolge
          </AnimatedHeading>

          <div className="grid gap-6 md:grid-cols-3">
            {secretumTargets.map((target, i) => (
              <GlowCard key={target.slug} delay={i * 0.15}>
                <span className="mb-3 inline-block text-4xl">
                  {target.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold text-[#06B6D4]">
                  {target.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-white/60">
                  {target.description.substring(0, 150)}...
                </p>
                <Link
                  href="/secretum/a-chi-si-rivolge"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#06B6D4]"
                >
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
                </Link>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Normativa */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedHeading>Conformità Normativa Garantita</AnimatedHeading>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "GDPR (UE 2016/679)",
                desc: "Regolamento europeo sulla protezione dei dati personali",
              },
              {
                title: "Codice Privacy (D.lgs. 196/2003)",
                desc: "Normativa italiana aggiornata dal D.lgs. 101/2018",
              },
              {
                title: "Linee Guida 2025 del Garante",
                desc: "Indicazioni specifiche per il contesto condominiale",
              },
              {
                title: "Regolamento eIDAS",
                desc: "Validità legale della firma elettronica OTP",
              },
            ].map((norm, i) => (
              <GlowCard key={norm.title} delay={i * 0.1}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg text-[#06B6D4]">
                    &#10003;
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {norm.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">{norm.desc}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Secretum */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedHeading>Perché Scegliere Secretum</AnimatedHeading>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Risparmio di Tempo",
                desc: "Genera l'intero fascicolo privacy di un condominio con un click. Da ore di lavoro a pochi minuti.",
              },
              {
                title: "Conformità Garantita",
                desc: "Documenti sempre aggiornati alla normativa vigente. Quando il Garante pubblica nuove linee guida, Secretum aggiorna i template.",
              },
              {
                title: "AI al Servizio della Privacy",
                desc: "L'AI non sostituisce il professionista: lo affianca. Suggerisce, genera, analizza e avvisa.",
              },
              {
                title: "Firma con Validità Legale",
                desc: "Firma elettronica OTP con lo stesso valore della firma autografa. Completata in pochi secondi da qualsiasi dispositivo.",
              },
              {
                title: "Ecosistema Completo",
                desc: "Non solo un generatore di documenti: una piattaforma che connette studi, amministratori e legali.",
              },
              {
                title: "Sicurezza dei Dati",
                desc: "Crittografia end-to-end, autenticazione forte, isolamento dati tra clienti e audit trail completo.",
              },
            ].map((item, i) => (
              <GlowCard key={item.title} delay={i * 0.1}>
                <h3 className="mb-2 text-base font-bold text-[#06B6D4]">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA - Coming Soon / Mailing List */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div
          id="iscriviti"
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#06B6D4]/20 p-10 text-center sm:p-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(0,0,70,0.5) 50%, rgba(8,145,178,0.08) 100%)",
            boxShadow:
              "0 0 60px rgba(6,182,212,0.1), inset 0 0 60px rgba(6,182,212,0.03)",
          }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-4 py-1.5 text-xs font-semibold text-[#06B6D4]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06B6D4]" />
            </span>
            Coming Soon
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Resta Aggiornato su Secretum
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Secretum è in fase di lancio. Iscriviti per essere tra i primi a
            provarlo e ricevere aggiornamenti esclusivi.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <form
              action="https://maitime.ai/contatti"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="La tua email aziendale"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#06B6D4]/50"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-[#0891B2] to-[#06B6D4] px-6 py-3 font-bold text-white transition-transform hover:scale-105"
              >
                Iscriviti
              </button>
            </form>
            <p className="mt-3 text-xs text-white/30">
              Nessuno spam. Solo aggiornamenti sul lancio e accesso anticipato.
            </p>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6">
            <p className="text-sm text-white/40">
              Hai domande? Scrivici a{" "}
              <a
                href="mailto:info@maitime.ai"
                className="text-[#06B6D4] hover:underline"
              >
                info@maitime.ai
              </a>
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Navigation Links */}
      <section className="section-light px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 text-sm">
          <Link
            href="/secretum/funzionalita"
            className="text-[#06B6D4] underline underline-offset-4 hover:text-[#06B6D4]/80"
          >
            Funzionalità
          </Link>
          <Link
            href="/secretum/a-chi-si-rivolge"
            className="text-[#06B6D4] underline underline-offset-4 hover:text-[#06B6D4]/80"
          >
            A Chi Si Rivolge
          </Link>
          <Link
            href="/secretum/come-funziona"
            className="text-[#06B6D4] underline underline-offset-4 hover:text-[#06B6D4]/80"
          >
            Come Funziona
          </Link>
          <Link
            href="/secretum/faq"
            className="text-[#06B6D4] underline underline-offset-4 hover:text-[#06B6D4]/80"
          >
            Domande Frequenti
          </Link>
        </div>
      </section>
    </>
  );
}
