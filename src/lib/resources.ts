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
  {
    slug: "supply-chain-sotto-controllo",
    title: "Supply Chain sotto Controllo",
    subtitle: "Eliminare Sprechi e Ritardi",
    description:
      "Dalla merce in arrivo al magazzino: la guida operativa per PMI che vogliono tracciare tutto. Scopri come controllare fornitori, ordini clienti, distinta base e magazzino con un flusso integrato. Include checklist operative per ogni area e glossario.",
    date: "2026-03-06",
    type: "ebook",
    tags: ["Supply Chain", "Produzione", "Magazzino", "PMI"],
    coverImage: "/assets/resources/supply-chain-sotto-controllo-cover.webp",
    pages: 13,
    highlights: [
      "I 5 segnali d'allarme di una supply chain non tracciata",
      "Merce in arrivo: tracciamento consegne e storico fornitori",
      "Ordini clienti: tracciabilità digitale dal commerciale alla produzione",
      "Distinta base digitale e gestione magazzino integrata",
      "Il flusso integrato: dal fornitore al cliente in 5 step",
      "Checklist operative per merce, ordini, distinta e magazzino",
    ],
    targetAudience:
      "Imprenditori e responsabili di produzione di PMI manifatturiere italiane che vogliono eliminare ritardi, sprechi e perdite di informazioni nella supply chain.",
    hubspotFormId: "e0bb47af-8a32-4105-a89f-05d94fba3a2b",
  },
  {
    slug: "dead-stock-quanto-ti-costa",
    title: "Dead Stock: Quanto Ti Costa",
    subtitle: "Il Metodo in 5 Step per PMI Produttive",
    description:
      "Ogni metro quadro occupato da merce ferma è denaro che non lavora per te. Scopri cos'è il dead stock, quanto costa davvero (25-30% del valore ogni anno), come identificarlo con indice di rotazione e analisi ABC, e il metodo in 5 step per eliminarlo. Include checklist operative e esercizio pratico per calcolare il costo del tuo dead stock.",
    date: "2026-03-06",
    type: "ebook",
    tags: ["Magazzino", "Dead Stock", "Produzione", "PMI"],
    coverImage: "/assets/resources/dead-stock-quanto-ti-costa-cover.webp",
    pages: 17,
    highlights: [
      "Cos'è il dead stock e le 4 forme in cui si nasconde",
      "Il conto vero: capitale immobilizzato, stoccaggio, svalutazione e costo opportunità",
      "Come identificarlo: indice di rotazione, soglie di movimentazione e analisi ABC",
      "I 5 step per eliminarlo: censimento, triage, recupero, riutilizzo, smaltimento",
      "Prevenire è meglio: alert automatici, revisione catalogo e regole d'ingresso",
      "Checklist operative per identificazione, eliminazione, prevenzione e monitoraggio",
    ],
    targetAudience:
      "Imprenditori e responsabili di magazzino di PMI manifatturiere italiane che vogliono liberare spazio, recuperare capitale e smettere di pagare per merce che non si muove.",
    hubspotFormId: "9e16bf4c-748c-4f49-b669-606230c5a173",
  },
  {
    slug: "assistenza-clienti-ai",
    title: "Assistenza Clienti con l'AI",
    subtitle: "Chatbot, Lead e Customer Care Automatico",
    description:
      "Il tuo sito web lavora per te anche quando dormi? Il 70% dei visitatori se ne va senza lasciare traccia. Scopri come un chatbot AI trasforma il sito in un venditore attivo 24/7: assiste i visitatori, qualifica i lead e prenota appuntamenti. Include confronto form vs chatbot, pannello di configurazione e checklist operative.",
    date: "2026-03-07",
    type: "ebook",
    tags: ["Customer Care", "Chatbot AI", "Lead Generation", "PMI"],
    coverImage: "/assets/resources/assistenza-clienti-ai-cover.webp",
    pages: 16,
    highlights: [
      "Il problema del sito che non parla: il 70% dei visitatori se ne va in silenzio",
      "Chatbot AI che assiste, qualifica e converte: schede tecniche, listini, lead e prenotazioni",
      "Come funziona: dallo snippet alla conversazione configurata in 4 step",
      "Da visitatore a lead qualificato: riconoscimento intento e raccolta dati naturale",
      "Assistenza 24/7: ridurre i costi, liberare il team, misurare il ROI",
      "Checklist operative per setup, customer care, lead generation e monitoraggio",
    ],
    targetAudience:
      "Imprenditori e responsabili commerciali di PMI italiane che vogliono trasformare il proprio sito web da vetrina statica a strumento attivo di assistenza e generazione lead.",
    hubspotFormId: "ef1b79d3-b2c3-4f8f-9ab8-346e7f6f9866",
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
