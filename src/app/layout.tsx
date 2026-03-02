import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FloatingChat } from "@/components/ClientHome";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maitime.ai"),
  title: {
    default: "MAITIME - L'AI per le Piccole Imprese",
    template: "%s | MAITIME",
  },
  description:
    "MAITIME è la piattaforma AI per le piccole imprese che ottimizza il tempo, riduce gli errori e migliora la gestione aziendale.",
  keywords: [
    "MAITIME",
    "AI per imprese",
    "automazione aziendale",
    "gestione clienti",
    "assistente virtuale",
    "software gestionale AI",
    "AI business",
    "PMI",
    "intelligenza artificiale",
  ],
  authors: [{ name: "G&G NextGen" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.maitime.ai",
    siteName: "MAITIME",
    title: "MAITIME - L'AI per le Piccole Imprese",
    description:
      "Scopri come MAITIME può automatizzare le attività della tua impresa e migliorare la gestione aziendale.",
    images: [
      {
        url: "/assets/MAITIME_Logo_Dark.png",
        width: 1200,
        height: 630,
        alt: "MAITIME - L'AI per le Piccole Imprese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAITIME - L'AI per le Piccole Imprese",
    description:
      "Scopri come MAITIME può automatizzare la tua impresa e migliorare la gestione aziendale.",
    images: ["/assets/MAITIME_Logo_Dark.png"],
    site: "@gg_nextgen",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V7L3SGZNLB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V7L3SGZNLB');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "MAITIME",
              image: "https://www.maitime.ai/assets/MAITIME_Logo_Dark.png",
              description:
                "MAITIME è la piattaforma AI per le piccole imprese che ottimizza il tempo e migliora la gestione aziendale.",
              operatingSystem: "Web",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              author: {
                "@type": "Organization",
                name: "G&G NextGen",
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
