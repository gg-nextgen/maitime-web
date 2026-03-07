import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "MAITIME è un progetto di G&G NextGen. Creata da un imprenditore per gli imprenditori, la piattaforma AI aiuta le PMI a ottimizzare la gestione aziendale.",
  alternates: {
    canonical: "https://www.maitime.ai/chi-siamo",
  },
  openGraph: {
    title: "Chi Siamo — MAITIME by G&G NextGen",
    description:
      "Creata da un imprenditore per gli imprenditori. MAITIME è la piattaforma AI che aiuta le PMI a ottimizzare la gestione aziendale.",
    url: "https://www.maitime.ai/chi-siamo",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAITIME — Chi Siamo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi Siamo — MAITIME by G&G NextGen",
    description:
      "Creata da un imprenditore per gli imprenditori. La piattaforma AI che aiuta le PMI italiane.",
    images: ["/assets/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "G&G NextGen",
    brand: {
      "@type": "Brand",
      name: "MAITIME",
    },
    url: "https://www.maitime.ai",
    logo: "https://www.maitime.ai/assets/MAITIME_Logo_Dark.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Civitanova Marche",
      addressRegion: "MC",
      addressCountry: "IT",
    },
    taxID: "02144530439",
    sameAs: [
      "https://www.linkedin.com/company/106171898",
      "https://www.instagram.com/gg_nextgen",
      "https://www.youtube.com/channel/UCVFFf175JbFs6isvkxsbbTw",
    ],
  },
};

export default function ChiSiamoPage() {
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
            Creata da un{" "}
            <span className="text-maitime-accent">Imprenditore</span>
            <br />
            per gli Imprenditori
          </h1>
          <p className="mt-6 text-lg text-white/70">
            MAITIME nasce dall&apos;esperienza reale di chi ogni giorno affronta
            le sfide della gestione aziendale.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-maitime-border bg-maitime-card p-8 sm:p-12">
            <h2 className="mb-6 text-2xl font-bold">La Nostra Storia</h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                MAITIME è un progetto di <strong>G&G NextGen</strong>, nato
                dalla necessità di un imprenditore di trovare uno strumento che
                lo aiutasse nella gestione quotidiana della propria azienda.
              </p>
              <p>
                Dopo anni passati a gestire report, inseguire clienti in
                ritardo, scrivere email e coordinare team, la domanda è diventata
                inevitabile: <em>&ldquo;E se l&apos;AI potesse fare tutto questo per me?&rdquo;</em>
              </p>
              <p>
                Così è nata MAITIME: una piattaforma AI che si collega ai
                gestionali aziendali, comprende i dati e fornisce risposte
                concrete, suggerimenti operativi e azioni automatiche.
              </p>
              <p>
                Non è un prodotto pensato in un laboratorio. È nato sul campo,
                testato con dati reali, progettato per chi non ha tempo da
                perdere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            I Nostri Valori
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Semplicità",
                desc: "L'AI deve essere accessibile a tutti, non solo agli esperti di tecnologia. MAITIME funziona con il linguaggio naturale.",
              },
              {
                title: "Sicurezza",
                desc: "I dati aziendali sono sacri. Utilizziamo crittografia avanzata e infrastruttura Google Cloud per la massima protezione.",
              },
              {
                title: "Risultati Concreti",
                desc: "Non promettiamo magia. Offriamo uno strumento che fa risparmiare tempo reale e migliora decisioni reali.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-maitime-accent/30 bg-maitime-card p-8 text-center"
              >
                <h3 className="mb-3 text-xl font-bold text-maitime-accent">
                  {value.title}
                </h3>
                <p className="text-white/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="/assets/MAITIME_Logo_Dark.png"
            alt="MAITIME Logo"
            width={200}
            height={50}
            className="mx-auto mb-6"
          />
          <p className="text-white/50">
            Un progetto di <strong className="text-white/80">G&G NextGen</strong>
            <br />
            P.IVA 02144530439
          </p>
        </div>
      </section>
    </>
  );
}
