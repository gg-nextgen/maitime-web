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
  {
    slug: "segmentazione-clienti-pmi",
    title: "Segmentazione Clienti per PMI",
    subtitle: "Come Identificare i Clienti più Redditizi",
    description:
      "Il 20% dei tuoi clienti genera l'80% del fatturato. Sai quali sono? Scopri come segmentare il portafoglio clienti con il modello RFM, la matrice valore/marginalità e strategie d'azione per ogni cluster. Include checklist operative e un metodo in 4 step per partire in 2 settimane.",
    date: "2026-03-05",
    type: "ebook",
    tags: ["Gestione Clienti", "Vendite", "RFM", "PMI"],
    coverImage: "/assets/resources/segmentazione-clienti-pmi-cover.webp",
    pages: 16,
    highlights: [
      "Perché trattare tutti i clienti allo stesso modo è costoso",
      "Il modello RFM: Recency, Frequency, Monetary e i 5 cluster",
      "Segmentazione per marginalità, settore e comportamento",
      "Strategie d'azione specifiche per ogni cluster (Campioni, A rischio, Promettenti, Standard, Dormienti)",
      "Metodo in 4 step per segmentare il portafoglio in 2 settimane",
      "Checklist operative e piano d'azione per cluster",
    ],
    targetAudience:
      "Imprenditori e responsabili commerciali di PMI italiane che vogliono smettere di trattare tutti i clienti allo stesso modo e allocare tempo, budget e attenzione dove producono ritorno.",
    hubspotFormId: "8d8aa6b8-45a8-471a-bdfd-33cc9fe6905e",
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
