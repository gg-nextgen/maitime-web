import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import { secretumFAQs } from "@/lib/secretum";

export const metadata: Metadata = {
  title: "FAQ MAITIME SECRETUM — Domande Frequenti su Privacy e GDPR",
  description:
    "Risposte alle domande più frequenti su MAITIME SECRETUM: conformità GDPR, firma elettronica, assistente AI, audit di compliance e sicurezza dei dati.",
  alternates: { canonical: "https://maitime.ai/secretum/faq" },
  openGraph: {
    title: "FAQ MAITIME SECRETUM — Domande Frequenti",
    description:
      "Tutto quello che devi sapere su Secretum: conformità, firma elettronica, AI, audit e sicurezza.",
    url: "https://maitime.ai/secretum/faq",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "FAQ MAITIME SECRETUM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ MAITIME SECRETUM — Domande Frequenti",
    description:
      "Conformità GDPR, firma elettronica, AI, audit e sicurezza. Le risposte alle domande più frequenti.",
    images: ["/assets/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: secretumFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SecretumFAQPage() {
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
            <span className="text-white/70">FAQ</span>
          </nav>

          <p className="mb-4 text-sm font-semibold tracking-widest text-[#06B6D4] uppercase">
            MAITIME SECRETUM
          </p>
          <h1 className="glow-text text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Domande{" "}
            <span className="bg-gradient-to-r from-white via-[#06B6D4] to-[#0891B2] bg-clip-text text-transparent">
              Frequenti
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Tutto quello che devi sapere su MAITIME SECRETUM. Se non trovi la
            risposta che cerchi, scrivici a{" "}
            <a
              href="mailto:info@maitime.ai"
              className="text-[#06B6D4] hover:underline"
            >
              info@maitime.ai
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {secretumFAQs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#06B6D4]/30"
              >
                <h2 className="text-lg font-bold text-white">{faq.question}</h2>
                <p className="mt-3 leading-relaxed text-white/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

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
          <h2 className="text-3xl font-bold sm:text-4xl">
            Hai Altre Domande?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Scrivici e ti rispondiamo in giornata.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:info@maitime.ai"
              className="rounded-xl border border-[#06B6D4]/30 px-8 py-4 font-bold text-[#06B6D4] transition-colors hover:bg-[#06B6D4]/10"
            >
              Scrivici
            </a>
            <Link
              href="/secretum#iscriviti"
              className="rounded-xl bg-gradient-to-r from-[#0891B2] to-[#06B6D4] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
            >
              Iscriviti per gli Aggiornamenti
            </Link>
          </div>
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
