import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllModules, getModuleBySlug } from "@/lib/modules";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import GlowCard from "@/components/GlowCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllModules().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);

  if (!mod) return { title: "Modulo Non Trovato" };

  return {
    title: `${mod.title} — ${mod.tagline}`,
    description: mod.description,
    alternates: {
      canonical: `https://www.maitime.ai/piattaforma/${mod.slug}`,
    },
    openGraph: {
      title: `${mod.title} | MAITIME`,
      description: mod.description,
      type: "website",
    },
  };
}

const planColor = {
  Professional: "from-[#5B21B6] to-[#7C3AED]",
  Platinum: "from-[#FF00FF] to-[#EC4899]",
  "Tutti i piani": "from-[#059669] to-[#10B981]",
} as const;

export default async function ModulePage({ params }: PageProps) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);

  if (!mod) notFound();

  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════ */}
      <section className="section-dark relative overflow-hidden px-4 pt-32 pb-20 sm:px-6">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#FF00FF]/[0.04] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-white/50">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/piattaforma" className="hover:text-white/80">
              Piattaforma
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">{mod.title}</span>
          </nav>

          {/* Department + Plan */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/60">
              {mod.department.icon} {mod.department.name}
            </span>
            <span
              className={`rounded-full bg-gradient-to-r ${planColor[mod.plan]} px-3 py-1 text-xs font-bold tracking-wide text-white uppercase`}
            >
              Piano {mod.plan}
            </span>
          </div>

          <h1 className="glow-text text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {mod.title}
          </h1>
          <p className="mt-4 text-xl text-[#FF00FF]/80 sm:text-2xl">
            {mod.tagline}
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          COSA FA
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedHeading>Cosa Fa</AnimatedHeading>
          <div className="mx-auto max-w-3xl space-y-4">
            {mod.whatItDoes.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-white/70 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          PER CHI È PENSATO
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedHeading>Per Chi è Pensato</AnimatedHeading>
          <div className="mx-auto grid max-w-3xl gap-4">
            {mod.targetAudience.map((target, i) => (
              <GlowCard key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF00FF]/10 text-sm font-bold text-[#FF00FF]">
                    {i + 1}
                  </span>
                  <p className="text-sm text-white/70 sm:text-base">{target}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          FUNZIONALITÀ PRINCIPALI
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-light px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedHeading>Funzionalità Principali</AnimatedHeading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mod.features.map((feature, i) => (
              <GlowCard key={feature.title} delay={i * 0.08}>
                <h3 className="mb-2 text-base font-bold text-[#FF00FF]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {feature.desc}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          BENEFICI CHIAVE
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedHeading>Benefici Chiave</AnimatedHeading>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {mod.benefits.map((benefit, i) => (
              <GlowCard key={i} delay={i * 0.1}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg text-[#FF00FF]">
                    &#10003;
                  </span>
                  <p className="text-sm text-white/70">{benefit}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ════════════════════════════════════════════════
          INTEGRAZIONI
          ════════════════════════════════════════════════ */}
      {mod.integrations.length > 0 && (
        <AnimatedSection className="section-light px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <AnimatedHeading subtitle="Questo modulo si integra con gli altri moduli della piattaforma per offrirti un ecosistema completo.">
              Integrazioni
            </AnimatedHeading>
            <div className="grid gap-4 md:grid-cols-2">
              {mod.integrations.map((integration, i) => (
                <GlowCard key={integration.slug} delay={i * 0.1}>
                  <Link
                    href={`/piattaforma/${integration.slug}`}
                    className="block"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-lg text-[#FF00FF]">
                        🔗
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-white transition-colors group-hover:text-[#FF00FF]">
                          {integration.module}
                        </h3>
                        <p className="mt-1 text-sm text-white/50">
                          {integration.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </GlowCard>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* ════════════════════════════════════════════════
          ESEMPIO PRATICO
          ════════════════════════════════════════════════ */}
      <AnimatedSection className="section-dark px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedHeading>Esempio Pratico</AnimatedHeading>
          <div
            className="mx-auto max-w-3xl rounded-2xl border border-[#FF00FF]/20 p-8 sm:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,0,255,0.05) 0%, rgba(0,0,70,0.3) 50%, rgba(91,33,182,0.05) 100%)",
            }}
          >
            <p className="text-base leading-relaxed text-white/70 sm:text-lg italic">
              &ldquo;{mod.example}&rdquo;
            </p>
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
            Vuoi Vedere {mod.title} in Azione?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Prenota una demo gratuita di 30 minuti e scopri come questo modulo
            può trasformare il tuo modo di lavorare.
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

      {/* ════════════════════════════════════════════════
          BACK LINK + OTHER MODULES
          ════════════════════════════════════════════════ */}
      <section className="section-dark px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/piattaforma"
            className="text-[#FF00FF] underline underline-offset-4 hover:text-[#FF00FF]/80"
          >
            &larr; Tutti i moduli della piattaforma
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: `MAITIME — ${mod.title}`,
            description: mod.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: mod.plan === "Platinum" ? "899" : "499",
              priceCurrency: "EUR",
              priceValidUntil: "2026-12-31",
            },
            author: {
              "@type": "Organization",
              name: "G&G NextGen",
            },
            featureList: mod.features.map((f) => f.title).join(", "),
          }),
        }}
      />
    </>
  );
}
