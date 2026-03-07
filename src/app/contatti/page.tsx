import type { Metadata } from "next";
import HubSpotForm from "@/components/HubSpotForm";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta il team MAITIME. Prenota una demo gratuita di 30 minuti o scrivici per qualsiasi domanda.",
  alternates: {
    canonical: "https://www.maitime.ai/contatti",
  },
  openGraph: {
    title: "Contatti — MAITIME",
    description:
      "Prenota una demo gratuita di 30 minuti o scrivici per qualsiasi domanda sulla piattaforma AI per PMI.",
    url: "https://www.maitime.ai/contatti",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contatta MAITIME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contatti — MAITIME",
    description:
      "Prenota una demo gratuita di 30 minuti o scrivici per qualsiasi domanda.",
    images: ["/assets/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "MAITIME — G&G NextGen",
    email: "maitime@maitime.ai",
    url: "https://www.maitime.ai",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Civitanova Marche",
      addressRegion: "MC",
      addressCountry: "IT",
    },
  },
};

export default function ContattiPage() {
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
            Parliamo del Tuo{" "}
            <span className="text-maitime-accent">Business</span>
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Prenota una call gratuita di 30 minuti. Ti mostriamo come MAITIME
            può aiutare la tua azienda.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Left - Book a Call */}
          <div className="rounded-2xl border border-maitime-accent/30 bg-maitime-card p-8 sm:p-10">
            <h2 className="mb-4 text-2xl font-bold">
              Prenota una Demo Gratuita
            </h2>
            <p className="mb-6 text-white/70">
              In 30 minuti ti mostriamo come MAITIME può integrarsi con il tuo
              gestionale e aiutarti nella gestione quotidiana.
            </p>
            <ul className="mb-8 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-maitime-accent">✓</span>
                Demo personalizzata con i tuoi casi d&apos;uso
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maitime-accent">✓</span>
                Risposta a tutte le tue domande
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maitime-accent">✓</span>
                Nessun impegno, nessun costo
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maitime-accent">✓</span>
                Valutazione della compatibilità con il tuo gestionale
              </li>
            </ul>
            <a
              href="https://gg-nextgen.ai/meetings/egiardini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white bg-gradient-to-r from-[#000062] to-maitime-accent px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
            >
              Scegli Data e Ora &rarr;
            </a>
          </div>

          {/* Right - Other contacts */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-maitime-border bg-maitime-card p-8">
              <h3 className="mb-3 text-xl font-bold">Scrivici</h3>
              <p className="mb-4 text-white/70">
                Per domande generali o partnership:
              </p>
              <HubSpotForm formId="400976a0-44c4-4275-bff2-7ce7cbc19de5" />
            </div>

            <div className="rounded-2xl border border-maitime-border bg-maitime-card p-8">
              <h3 className="mb-3 text-xl font-bold">Social</h3>
              <p className="mb-4 text-white/70">Seguici per aggiornamenti:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/106171898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-maitime-border px-4 py-2 text-sm text-white/80 transition-colors hover:border-maitime-accent hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/gg_nextgen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-maitime-border px-4 py-2 text-sm text-white/80 transition-colors hover:border-maitime-accent hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/channel/UCVFFf175JbFs6isvkxsbbTw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-maitime-border px-4 py-2 text-sm text-white/80 transition-colors hover:border-maitime-accent hover:text-white"
                >
                  YouTube
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-maitime-border bg-maitime-card p-8">
              <h3 className="mb-3 text-xl font-bold">Azienda</h3>
              <p className="text-white/70">
                G&G NextGen
                <br />
                Civitanova Marche (MC) - Italy
                <br />
                P.IVA 02144530439
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
