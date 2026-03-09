import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllResources, getResourceBySlug } from "@/lib/resources";
import HubSpotForm from "@/components/HubSpotForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const resources = getAllResources();
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return { title: "Risorsa Non Trovata" };
  }

  return {
    title: `${resource.title} | Risorsa Gratuita`,
    description: resource.description,
    alternates: {
      canonical: `https://maitime.ai/risorse/${resource.slug}`,
    },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `https://maitime.ai/risorse/${resource.slug}`,
      type: "article",
      publishedTime: resource.date,
      authors: ["G&G NextGen"],
      images: [
        {
          url: `https://maitime.ai${resource.coverImage}`,
          width: 1200,
          height: 630,
          alt: resource.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resource.title,
      description: resource.description,
      images: [`https://maitime.ai${resource.coverImage}`],
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return (
    <>
      <article className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-white/50">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/risorse" className="hover:text-white/80">
              Risorse
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">{resource.title}</span>
          </nav>

          {/* Main Layout: 2 columns on desktop */}
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left: Cover + Info */}
            <div className="lg:col-span-2">
              {/* Cover */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-maitime-border shadow-2xl shadow-maitime-accent/10">
                <Image
                  src={resource.coverImage}
                  alt={resource.title}
                  fill
                  className="object-cover object-left"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>

              {/* Quick Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <svg
                    className="h-5 w-5 text-maitime-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span className="uppercase tracking-wide">
                    {resource.type}
                  </span>
                  {resource.pages && (
                    <>
                      <span className="text-white/30">|</span>
                      <span>{resource.pages} pagine</span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-3 text-sm text-white/60">
                  <svg
                    className="h-5 w-5 text-maitime-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <span>
                    {new Date(resource.date).toLocaleDateString("it-IT", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-maitime-accent/10 px-3 py-1 text-xs text-maitime-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Content + Form */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                {resource.title}
              </h1>
              <p className="mt-2 text-lg text-maitime-accent">
                {resource.subtitle}
              </p>

              <p className="mt-6 leading-relaxed text-white/80">
                {resource.description}
              </p>

              {/* Target Audience */}
              <div className="mt-8 rounded-lg border border-maitime-accent/20 bg-maitime-accent/5 p-5">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-maitime-accent">
                  Per chi è questa guida
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {resource.targetAudience}
                </p>
              </div>

              {/* What you'll learn */}
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold">
                  Cosa troverai all&apos;interno
                </h3>
                <ul className="space-y-3">
                  {resource.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-maitime-accent/20 text-xs font-bold text-maitime-accent">
                        {i + 1}
                      </span>
                      <span className="text-white/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* HubSpot Form Placeholder */}
              <div
                id="download-form"
                className="mt-10 rounded-xl border border-maitime-accent/30 bg-gradient-to-br from-maitime-accent/5 to-transparent p-8"
              >
                <h3 className="mb-2 text-xl font-bold">
                  Scarica l&apos;eBook Gratuito
                </h3>
                <p className="mb-6 text-sm text-white/60">
                  Inserisci la tua email e riceverai subito il link per il
                  download.
                </p>

                <HubSpotForm formId={resource.hubspotFormId} />
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/risorse"
              className="text-maitime-accent underline underline-offset-4 hover:text-maitime-accent-hover"
            >
              &larr; Tutte le risorse
            </Link>
          </div>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: resource.title,
            description: resource.description,
            datePublished: resource.date,
            author: {
              "@type": "Organization",
              name: "G&G NextGen",
            },
            publisher: {
              "@type": "Organization",
              name: "MAITIME",
              logo: {
                "@type": "ImageObject",
                url: "https://maitime.ai/assets/MAITIME_Logo_Dark.png",
              },
            },
            image: `https://maitime.ai${resource.coverImage}`,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  );
}
