import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Come Funziona",
  description:
    "Scopri come MAITIME si integra con il tuo gestionale e ti aiuta ad analizzare dati, gestire clienti e automatizzare le comunicazioni.",
  alternates: {
    canonical: "https://maitime.ai/opera/come-funziona",
  },
  openGraph: {
    title: "Come Funziona MAITIME OPERA — AI per la Tua Azienda",
    description:
      "Collega il tuo gestionale, fai una domanda in linguaggio naturale, ricevi analisi e suggerimenti pronti all'uso.",
    url: "https://maitime.ai/opera/come-funziona",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Come Funziona MAITIME OPERA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Come Funziona MAITIME OPERA — AI per la Tua Azienda",
    description:
      "Collega il tuo gestionale, fai una domanda in linguaggio naturale, ricevi analisi e suggerimenti pronti all'uso.",
    images: ["/assets/og-image.png"],
  },
};

const videos = [
  {
    title: "Analizza i Tuoi Dati con MAITIME",
    description:
      "MAITIME ti aiuta a comprendere le performance aziendali con report dettagliati, grafici interattivi e suggerimenti strategici per il tuo business. Il tutto con una semplice domanda.",
    src: "/assets/Video_Web_MAITIME_01.mp4",
  },
  {
    title: "Mantieni Sotto Controllo i Tuoi Clienti",
    description:
      "MAITIME monitora i clienti in ritardo nei pagamenti o nelle attività. Analizza i loro comportamenti e suggerisce azioni strategiche per mantenere alta la fidelizzazione. Inoltre, organizza le azioni da compiere e le assegna a chi di dovere.",
    src: "/assets/Video_Web_MAITIME_02.mp4",
  },
  {
    title: "Un'Assistente Che Ricorda gli Impegni di Tutti",
    description:
      "MAITIME evita dimenticanze e ottimizza la comunicazione aziendale con promemoria personalizzati ed efficaci. Può anche inviare per conto tuo email ai tuoi clienti in maniera automatica o previa approvazione.",
    src: "/assets/Video_Web_MAITIME_03.mp4",
  },
  {
    title: "Crea Email e Contenuti Multilingua",
    description:
      "MAITIME ti aiuta a scrivere email professionali e contenuti in più lingue in pochi secondi. Perfetto per comunicare con clienti internazionali e migliorare la tua presenza globale.",
    src: "/assets/Video_Web_MAITIME_04.mp4",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Come Funziona MAITIME OPERA",
  description:
    "Tre passaggi per trasformare la gestione della tua azienda con l'AI.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Collega il Tuo Gestionale",
      text: "MAITIME si integra con i tuoi sistemi aziendali esistenti. Non devi cambiare software: ci colleghiamo noi ai tuoi dati, in modo sicuro e crittografato.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Fai una Domanda",
      text: "Scrivi in linguaggio naturale quello che vuoi sapere. MAITIME capisce e risponde con dati reali.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Ricevi Risposte e Agisci",
      text: "Ottieni analisi dettagliate, report grafici e suggerimenti operativi. MAITIME può anche agire per te.",
    },
  ],
};

export default function ComeFunzionaPage() {
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
            Come Funziona{" "}
            <span className="text-maitime-accent">MAITIME OPERA</span>
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Tre passaggi per trasformare la gestione della tua azienda. Nessuna
            competenza tecnica richiesta.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Collega il Tuo Gestionale",
              desc: "MAITIME si integra con i tuoi sistemi aziendali esistenti. Non devi cambiare software: ci colleghiamo noi ai tuoi dati, in modo sicuro e crittografato.",
            },
            {
              step: "02",
              title: "Fai una Domanda",
              desc: "Scrivi in linguaggio naturale quello che vuoi sapere. 'Quali clienti sono in ritardo con i pagamenti?' — MAITIME capisce e risponde con dati reali.",
            },
            {
              step: "03",
              title: "Ricevi Risposte e Agisci",
              desc: "Ottieni analisi dettagliate, report grafici e suggerimenti operativi. MAITIME può anche agire per te: inviare email, assegnare task, creare promemoria.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-maitime-accent/30 bg-maitime-card p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-maitime-accent to-[#000062] text-xl font-bold">
                {item.step}
              </div>
              <h2 className="mb-3 text-xl font-bold">{item.title}</h2>
              <p className="text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Demos */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Guarda MAITIME in Azione
          </h2>

          <div className="flex flex-col gap-16">
            {videos.map((video) => (
              <div
                key={video.title}
                className="rounded-2xl border border-maitime-accent/30 bg-maitime-card p-8"
              >
                <h3 className="mb-3 text-2xl font-bold">{video.title}</h3>
                <p className="mb-6 text-white/70">{video.description}</p>
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <p className="mt-3 text-xs text-white/40">
                  Video concesso su autorizzazione della GIARDINI GROUP con dati
                  reali
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-maitime-accent/20 to-[#000062] p-12 text-center">
          <h2 className="text-3xl font-bold">Vuoi Vederlo dal Vivo?</h2>
          <p className="mt-4 text-lg text-white/80">
            Prenota una demo gratuita di 30 minuti. Ti mostriamo MAITIME con i
            tuoi dati reali.
          </p>
          <a
            href="https://gg-nextgen.ai/meetings/egiardini"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white bg-gradient-to-r from-[#000062] to-maitime-accent px-10 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
          >
            Prenota una Demo Gratuita &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
