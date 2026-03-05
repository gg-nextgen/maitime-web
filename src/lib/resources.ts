export interface Resource {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  type: "ebook" | "whitepaper" | "checklist" | "guida";
  tags: string[];
  coverImage: string;
  /** Number of pages for ebooks/whitepapers */
  pages?: number;
  /** Key topics / table of contents items */
  highlights: string[];
  /** Who this resource is for */
  targetAudience: string;
  /** HubSpot form embed ID — leave empty until configured */
  hubspotFormId: string;
}

const resources: Resource[] = [
  {
    slug: "guida-controllo-commerciale-pmi",
    title: "La Guida Completa al Controllo Commerciale per PMI",
    subtitle: "Dashboard, Clienti e Prodotti sotto un'unica lente",
    description:
      "Dalle decisioni \"a sensazione\" ai dati. Scopri come costruire una dashboard vendite efficace, segmentare i clienti con il metodo RFM e analizzare i prodotti con la matrice BCG. Include checklist operative pronte all'uso.",
    date: "2026-03-01",
    type: "ebook",
    tags: ["Vendite", "KPI", "Dashboard", "PMI"],
    coverImage: "/assets/resources/guida-controllo-commerciale-cover.webp",
    pages: 20,
    highlights: [
      "I 5 problemi invisibili che costano fatturato alle PMI",
      "Come costruire una Dashboard Vendite con i KPI giusti",
      "Segmentazione clienti RFM: scopri chi ti fa davvero guadagnare",
      "Analisi prodotti con matrice BCG e ABC",
      "Metodo in 5 step da implementare in 30 giorni",
      "Checklist operative pronte all'uso",
    ],
    targetAudience:
      "Imprenditori e responsabili commerciali di PMI italiane che vogliono passare dalle decisioni \"a sensazione\" a un controllo commerciale basato sui dati.",
    hubspotFormId: "b17a54a3-c917-4481-90b6-cd38a15e5a7f",
  },
];

export function getAllResources(): Resource[] {
  return resources.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
