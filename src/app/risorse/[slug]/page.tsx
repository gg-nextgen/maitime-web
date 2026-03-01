import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Articolo Non Trovato" };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://www.maitime.ai/risorse/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: ["G&G NextGen"],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Article Header */}
      <article className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
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
            <span className="text-white/70">{article.title}</span>
          </nav>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-maitime-accent/10 px-3 py-1 text-xs text-maitime-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("it-IT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{article.readingTime} di lettura</span>
          </div>

          {/* Content */}
          <div className="prose-maitime mt-12">
            {article.content
              .trim()
              .split("\n")
              .map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return <br key={i} />;
                if (trimmed.startsWith("## "))
                  return (
                    <h2
                      key={i}
                      className="mb-4 mt-10 text-2xl font-bold text-white"
                    >
                      {trimmed.replace("## ", "")}
                    </h2>
                  );
                if (trimmed.startsWith("### "))
                  return (
                    <h3
                      key={i}
                      className="mb-3 mt-8 text-xl font-bold text-maitime-accent"
                    >
                      {trimmed.replace("### ", "")}
                    </h3>
                  );
                if (trimmed.startsWith("- "))
                  return (
                    <li key={i} className="ml-6 list-disc text-white/80">
                      {trimmed.replace("- ", "")}
                    </li>
                  );
                if (trimmed.startsWith("**") && trimmed.endsWith("**"))
                  return (
                    <p key={i} className="mt-4 font-bold text-white">
                      {trimmed.replace(/\*\*/g, "")}
                    </p>
                  );
                if (trimmed.startsWith("**"))
                  return (
                    <p key={i} className="mt-2 text-white/80 leading-relaxed">
                      <strong className="text-white">
                        {trimmed.match(/\*\*(.*?)\*\*/)?.[1]}
                      </strong>
                      {trimmed.replace(/\*\*.*?\*\*/, "")}
                    </p>
                  );
                return (
                  <p key={i} className="mt-2 text-white/80 leading-relaxed">
                    {trimmed}
                  </p>
                );
              })}
          </div>

          {/* CTA at end of article */}
          <div className="mt-16 rounded-xl border border-maitime-accent/30 bg-maitime-card p-8 text-center">
            <h3 className="text-xl font-bold">
              Vuoi Vedere Come MAITIME Può Aiutare la Tua Azienda?
            </h3>
            <p className="mt-2 text-white/70">
              Prenota una demo gratuita di 30 minuti.
            </p>
            <a
              href="https://gg-nextgen.ai/meetings/egiardini"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white bg-gradient-to-r from-[#000062] to-maitime-accent px-8 py-3 font-bold text-white transition-transform hover:scale-105"
            >
              Prenota una Demo Gratuita &rarr;
            </a>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/risorse"
              className="text-maitime-accent underline underline-offset-4 hover:text-maitime-accent-hover"
            >
              &larr; Tutte le risorse
            </Link>
          </div>
        </div>
      </article>

      {/* JSON-LD for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            author: {
              "@type": "Organization",
              name: "G&G NextGen",
            },
            publisher: {
              "@type": "Organization",
              name: "MAITIME",
              logo: {
                "@type": "ImageObject",
                url: "https://www.maitime.ai/assets/MAITIME_Logo_Dark.png",
              },
            },
          }),
        }}
      />
    </>
  );
}
