export interface ModuleData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  plan: "Professional" | "Platinum" | "Tutti i piani";
  department: Department;
  whatItDoes: string;
  targetAudience: string[];
  features: { title: string; desc: string }[];
  benefits: string[];
  integrations: { module: string; slug: string; desc: string }[];
  example: string;
}

export interface Department {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const departments: Department[] = [
  {
    id: "vendite",
    name: "Reparto Vendite",
    icon: "📈",
    description:
      "Visione completa e data-driven delle performance commerciali, dei clienti e dei prodotti.",
  },
  {
    id: "produzione",
    name: "Reparto Produzione",
    icon: "🏭",
    description:
      "Dall'approvvigionamento al magazzino, dalla gestione ordini alla distinta base.",
  },
  {
    id: "amministrazione",
    name: "Reparto Amministrazione",
    icon: "📄",
    description:
      "Gestione documentale ufficiale con coerenza, professionalità e ordine.",
  },
  {
    id: "customer-care",
    name: "Reparto Customer Care",
    icon: "💬",
    description:
      "AI e automazione per trasformare il sito web in un canale attivo di assistenza e acquisizione.",
  },
  {
    id: "risorse-umane",
    name: "Reparto Risorse Umane",
    icon: "👥",
    description:
      "Analisi data-driven nella gestione delle persone, dalla selezione alla profilazione.",
  },
  {
    id: "strategie",
    name: "Reparto Strategie e Azioni",
    icon: "🎯",
    description:
      "Dalla definizione degli obiettivi alla gestione operativa: visione che diventa risultato.",
  },
];

const deptVendite = departments[0];
const deptProduzione = departments[1];
const deptAmministrazione = departments[2];
const deptCustomerCare = departments[3];
const deptRisorseUmane = departments[4];
const deptStrategie = departments[5];

export const modules: ModuleData[] = [
  // ═══════════════════════════════════════════════
  // REPARTO VENDITE
  // ═══════════════════════════════════════════════
  {
    slug: "dashboard-vendite",
    title: "Dashboard Vendite",
    tagline: "Tutti i numeri delle tue vendite, in un colpo d'occhio.",
    description:
      "Panoramica completa e in tempo reale delle performance commerciali con KPI, grafici comparativi e filtri avanzati.",
    plan: "Professional",
    department: deptVendite,
    whatItDoes:
      "La Dashboard Vendite offre una panoramica completa e in tempo reale delle performance commerciali della tua azienda. Attraverso un'interfaccia intuitiva e visuale, puoi monitorare i principali indicatori di vendita senza dover navigare tra fogli di calcolo o report manuali.\n\nIl modulo aggrega automaticamente i dati provenienti dal gestionale e li presenta sotto forma di grafici, tabelle riassuntive e KPI dinamici, permettendoti di capire in pochi secondi come sta andando il business.",
    targetAudience: [
      "Imprenditori e titolari che vogliono avere il polso delle vendite ogni giorno",
      "Direttori commerciali che devono monitorare il team e gli obiettivi",
      "Responsabili vendite che necessitano di dati aggiornati per prendere decisioni rapide",
    ],
    features: [
      {
        title: "KPI in tempo reale",
        desc: "Fatturato totale, fatturato medio per cliente, numero ordini, variazione percentuale rispetto al periodo precedente.",
      },
      {
        title: "Grafici comparativi",
        desc: "Confronto tra periodi (mese su mese, anno su anno) con visualizzazione immediata dei trend.",
      },
      {
        title: "Filtri avanzati",
        desc: "Analisi per periodo, agente, zona geografica, categoria prodotto.",
      },
      {
        title: "Alert e variazioni",
        desc: "Evidenziazione automatica di scostamenti significativi rispetto ai target o ai periodi precedenti.",
      },
      {
        title: "Esportazione dati",
        desc: "Possibilità di esportare i report per condivisione o analisi approfondita.",
      },
    ],
    benefits: [
      "Decisioni commerciali più rapide grazie a dati sempre aggiornati",
      "Riduzione del tempo dedicato alla reportistica manuale",
      "Visibilità immediata su cali o picchi di fatturato",
      "Allineamento di tutto il team commerciale su obiettivi e risultati",
    ],
    integrations: [
      {
        module: "Panoramica Clienti",
        slug: "panoramica-clienti",
        desc: "Per approfondire i dati di vendita di un singolo cliente direttamente dalla dashboard.",
      },
      {
        module: "Panoramica Prodotti",
        slug: "panoramica-prodotti",
        desc: "Per analizzare quali prodotti stanno trainando (o frenando) le performance.",
      },
      {
        module: "Obiettivi e Piani Strategici",
        slug: "obiettivi-piani-strategici",
        desc: "Per verificare l'allineamento tra risultati di vendita e obiettivi aziendali.",
      },
    ],
    example:
      "Il direttore commerciale di un'azienda manifatturiera apre la dashboard il lunedì mattina e nota un calo del 12% rispetto alla settimana precedente. Filtra per zona e scopre che il calo è concentrato nell'area Nord-Est. In pochi click, accede alla Panoramica Clienti della zona per capire quali clienti hanno ridotto gli ordini e attiva un piano di ricontatto mirato.",
  },
  {
    slug: "panoramica-clienti",
    title: "Panoramica Clienti",
    tagline: "Conosci i tuoi clienti come mai prima d'ora.",
    description:
      "Visualizza, analizza e gestisci l'intero portafoglio clienti con segmentazione automatica e indicatori di rischio.",
    plan: "Professional",
    department: deptVendite,
    whatItDoes:
      "Il modulo Panoramica Clienti ti permette di visualizzare, analizzare e gestire l'intero portafoglio clienti da un unico punto di accesso. Non è un semplice elenco: è uno strumento strategico che segmenta i clienti in base ai comportamenti di acquisto e ti fornisce tutte le informazioni necessarie per prendere decisioni mirate.\n\nPer ogni cliente puoi accedere a una scheda completa con storico vendite, documenti, prodotti acquistati, dati anagrafici, assegnazioni interne e un indicatore di rischio che segnala i clienti che richiedono attenzione.",
    targetAudience: [
      "Responsabili commerciali che gestiscono un portafoglio clienti ampio",
      "Agenti di vendita che vogliono prepararsi prima di una visita o una chiamata",
      "Imprenditori che vogliono capire la composizione e la salute del proprio parco clienti",
    ],
    features: [
      {
        title: "Segmentazione automatica",
        desc: "I clienti vengono classificati per frequenza di acquisto, valore generato, trend di crescita o calo.",
      },
      {
        title: "Scheda cliente completa",
        desc: "Anagrafica, storico ordini, documenti, prodotti acquistati, note interne e assegnazioni.",
      },
      {
        title: "Indicatore di rischio",
        desc: "Segnala i clienti con calo significativo o inattivi da troppo tempo.",
      },
      {
        title: "Ricerca rapida",
        desc: "Barra di ricerca intelligente per trovare qualsiasi cliente in pochi secondi.",
      },
      {
        title: "Filtri e ordinamento",
        desc: "Per categoria, zona, agente assegnato, volume d'acquisto e altro.",
      },
    ],
    benefits: [
      "Visione completa di ogni relazione commerciale in un unico punto",
      "Identificazione proattiva dei clienti a rischio di abbandono",
      "Preparazione più efficace di visite e trattative commerciali",
      "Segmentazione data-driven per azioni commerciali mirate",
    ],
    integrations: [
      {
        module: "Dashboard Vendite",
        slug: "dashboard-vendite",
        desc: "Per contestualizzare i dati di vendita a livello di singolo cliente.",
      },
      {
        module: "Panoramica Prodotti",
        slug: "panoramica-prodotti",
        desc: "Per verificare cosa ha acquistato ogni cliente e identificare opportunità di cross-selling.",
      },
      {
        module: "Ordini Clienti",
        slug: "ordini-clienti",
        desc: "Per visualizzare lo stato degli ordini attivi di un cliente specifico.",
      },
    ],
    example:
      "Un agente commerciale sta per visitare un cliente storico. Apre la scheda del cliente sulla piattaforma e vede che negli ultimi 3 mesi gli ordini si sono dimezzati, con un indicatore di rischio \"alto\". Consulta i prodotti acquistati, nota che il cliente ha smesso di ordinare una linea specifica e prepara una proposta commerciale mirata per il recupero.",
  },
  {
    slug: "panoramica-prodotti",
    title: "Panoramica Prodotti",
    tagline: "Scopri quali prodotti fanno crescere il tuo business.",
    description:
      "Analizza in profondità le performance commerciali di ogni articolo del catalogo con KPI, trend e comportamenti ricorrenti.",
    plan: "Professional",
    department: deptVendite,
    whatItDoes:
      "Il modulo Panoramica Prodotti ti consente di analizzare in profondità le performance commerciali di ogni articolo del tuo catalogo. Vai oltre il semplice fatturato: analizza trend di acquisto, stagionalità, frequenza di riordino e comportamenti ricorrenti dei clienti su ciascun prodotto.\n\nOgni prodotto ha la propria scheda dettagliata con KPI dedicati, storico vendite, documenti associati e dati utili per ottimizzare l'offerta commerciale e le strategie di pricing.",
    targetAudience: [
      "Responsabili commerciali che vogliono ottimizzare il catalogo e le strategie di vendita",
      "Product manager che devono prendere decisioni su assortimento e pricing",
      "Imprenditori che vogliono capire quali prodotti meritano investimento e quali vanno rivisti",
    ],
    features: [
      {
        title: "KPI per prodotto",
        desc: "Fatturato generato, quantità vendute, margine, trend di crescita o calo.",
      },
      {
        title: "Analisi dei trend",
        desc: "Grafici temporali che mostrano la stagionalità e l'evoluzione delle vendite.",
      },
      {
        title: "Comportamenti ricorrenti",
        desc: "Identifica pattern di acquisto come la frequenza di riordino e i clienti abituali per prodotto.",
      },
      {
        title: "Scheda prodotto",
        desc: "Dettagli completi con documenti associati, storico e reportistica dedicata.",
      },
      {
        title: "Report esportabili",
        desc: "Genera report per categoria, linea di prodotto o singolo articolo.",
      },
    ],
    benefits: [
      "Identificazione dei prodotti ad alto e basso rendimento",
      "Decisioni di assortimento basate su dati reali, non su intuizioni",
      "Ottimizzazione delle strategie di pricing e promozione",
      "Prevenzione dell'accumulo di scorte su prodotti in calo",
    ],
    integrations: [
      {
        module: "Dashboard Vendite",
        slug: "dashboard-vendite",
        desc: "Per correlare le performance di prodotto con l'andamento generale del fatturato.",
      },
      {
        module: "Panoramica Clienti",
        slug: "panoramica-clienti",
        desc: "Per capire quali clienti acquistano determinati prodotti e targetizzare le azioni commerciali.",
      },
      {
        module: "Magazzino",
        slug: "magazzino",
        desc: "Per verificare la disponibilità e il livello di scorte dei prodotti più performanti.",
      },
    ],
    example:
      "Il responsabile commerciale nota dalla Panoramica Prodotti che un articolo ha avuto un picco di vendite del 40% negli ultimi due mesi. Verifica nel modulo Magazzino che le scorte siano sufficienti e, tramite la Panoramica Clienti, identifica i 10 clienti principali di quel prodotto per proporre un bundle promozionale.",
  },

  // ═══════════════════════════════════════════════
  // REPARTO PRODUZIONE
  // ═══════════════════════════════════════════════
  {
    slug: "merce-in-arrivo",
    title: "Merce in Arrivo",
    tagline: "Sai sempre cosa sta arrivando e quando.",
    description:
      "Monitora in tempo reale tutti gli articoli ordinati ai fornitori con tracking, alert su ritardi e storico consegne.",
    plan: "Platinum",
    department: deptProduzione,
    whatItDoes:
      "Il modulo Merce in Arrivo ti permette di monitorare in tempo reale tutti gli articoli ordinati ai fornitori che sono ancora in fase di consegna. Integrato direttamente con il sistema ordini, offre una visione chiara e aggiornata dello stato della merce attesa.\n\nNon dovrai più incrociare email, telefonate e fogli Excel per sapere quando arriverà un materiale: tutto è tracciato e visibile in un'unica schermata.",
    targetAudience: [
      "Responsabili acquisti che gestiscono ordini con più fornitori",
      "Responsabili di produzione che devono pianificare le lavorazioni in base alla disponibilità dei materiali",
      "Magazzinieri che preparano lo spazio e l'organizzazione per i materiali in arrivo",
    ],
    features: [
      {
        title: "Tracking in tempo reale",
        desc: "Stato aggiornato di ogni ordine fornitore con date previste di consegna.",
      },
      {
        title: "Integrazione con ordini",
        desc: "Collegamento automatico tra ordini di acquisto e merce attesa.",
      },
      {
        title: "Filtri per fornitore e data",
        desc: "Visualizzazione rapida per fornitore, categoria merceologica o finestra temporale.",
      },
      {
        title: "Alert su ritardi",
        desc: "Notifiche automatiche quando una consegna supera la data prevista.",
      },
      {
        title: "Storico consegne",
        desc: "Registro completo delle consegne passate per valutare l'affidabilità dei fornitori.",
      },
    ],
    benefits: [
      "Pianificazione della produzione più accurata e puntuale",
      "Riduzione dei fermi produttivi causati da mancanza di materiali",
      "Maggiore controllo sui fornitori e sui tempi di consegna",
      "Eliminazione della gestione manuale e frammentata delle informazioni di approvvigionamento",
    ],
    integrations: [
      {
        module: "Ordini Clienti",
        slug: "ordini-clienti",
        desc: "Per verificare se i materiali necessari a evadere un ordine cliente sono già in arrivo.",
      },
      {
        module: "Magazzino",
        slug: "magazzino",
        desc: "Per confrontare la merce attesa con le scorte attuali e prevenire rotture di stock.",
      },
      {
        module: "Distinta Base",
        slug: "distinta-base",
        desc: "Per sapere se le materie prime di un prodotto specifico sono in fase di consegna.",
      },
    ],
    example:
      "Il responsabile di produzione riceve un ordine urgente ma un componente chiave non è in magazzino. Accede al modulo Merce in Arrivo, verifica che il componente è stato ordinato e arriverà in 3 giorni. Pianifica la lavorazione di conseguenza, evitando di bloccare l'intera linea produttiva.",
  },
  {
    slug: "ordini-clienti",
    title: "Ordini Clienti",
    tagline: "Ogni ordine tracciato, dal click alla consegna.",
    description:
      "Registra e gestisci tutti gli ordini con tracciamento QR Code, monitoraggio stato in tempo reale e tempi di lavorazione.",
    plan: "Platinum",
    department: deptProduzione,
    whatItDoes:
      "Il modulo Ordini Clienti è il cuore operativo del reparto produzione. Permette di registrare e gestire tutti gli ordini in arrivo dai clienti, sia in modalità autonoma che integrata con il gestionale aziendale.\n\nOgni ordine viene tracciato lungo l'intero processo produttivo grazie all'uso di QR Code univoci. Dalla ricezione dell'ordine alla spedizione, ogni passaggio viene registrato con tempi e responsabilità, garantendo tracciabilità completa e trasparenza.",
    targetAudience: [
      "Responsabili di produzione che devono coordinare le lavorazioni",
      "Operatori che gestiscono le fasi di lavorazione quotidiane",
      "Direzione aziendale che vuole visibilità sui tempi di evasione e sulla capacità produttiva",
    ],
    features: [
      {
        title: "Registrazione ordini",
        desc: "Inserimento manuale o importazione automatica dal gestionale.",
      },
      {
        title: "Tracciamento con QR Code",
        desc: "Ogni ordine genera un codice QR che accompagna il prodotto in tutte le fasi di lavorazione.",
      },
      {
        title: "Monitoraggio stato",
        desc: "Visualizzazione in tempo reale dello stato di avanzamento di ogni ordine (ricevuto, in lavorazione, pronto, spedito).",
      },
      {
        title: "Tempi di lavorazione",
        desc: "Registrazione automatica dei tempi per ogni fase, utile per analisi di efficienza.",
      },
      {
        title: "Storico ordini",
        desc: "Archivio completo consultabile per cliente, periodo o prodotto.",
      },
    ],
    benefits: [
      "Tracciabilità completa di ogni ordine dall'ingresso alla spedizione",
      "Riduzione degli errori e delle dimenticanze nella gestione degli ordini",
      "Dati oggettivi sui tempi di produzione per ottimizzare i processi",
      "Sincronizzazione efficace tra reparto commerciale e produttivo",
    ],
    integrations: [
      {
        module: "Panoramica Clienti",
        slug: "panoramica-clienti",
        desc: "Per vedere gli ordini attivi di un cliente specifico direttamente dalla sua scheda.",
      },
      {
        module: "Merce in Arrivo",
        slug: "merce-in-arrivo",
        desc: "Per verificare se i materiali necessari a un ordine sono disponibili o in consegna.",
      },
      {
        module: "Distinta Base",
        slug: "distinta-base",
        desc: "Per consultare la composizione del prodotto ordinato e pianificare le lavorazioni.",
      },
    ],
    example:
      "Un cliente chiama per sapere a che punto è il suo ordine. L'operatore scansiona il QR Code e vede che l'ordine è in fase di assemblaggio finale, con consegna prevista entro 2 giorni. Comunica l'informazione al cliente in tempo reale, senza dover chiedere ad altri reparti.",
  },
  {
    slug: "distinta-base",
    title: "Distinta Base",
    tagline: "La struttura dei tuoi prodotti, chiara e gestibile.",
    description:
      "Definisci la composizione di ogni prodotto con distinte base multilivello, calcolo fabbisogni e versioning.",
    plan: "Platinum",
    department: deptProduzione,
    whatItDoes:
      "Il modulo Distinta Base (BOM – Bill of Materials) permette di definire con precisione la composizione di ogni prodotto finito, associando materie prime, semilavorati e componenti a ciascun articolo del catalogo.\n\nSupporta la creazione di distinte base multilivello, rendendo tracciabile la struttura produttiva anche per prodotti complessi che richiedono più fasi di assemblaggio o trasformazione.",
    targetAudience: [
      "Responsabili di produzione che devono pianificare le lavorazioni e i fabbisogni di materiali",
      "Ufficio tecnico che definisce la composizione dei prodotti",
      "Responsabili acquisti che devono calcolare i fabbisogni di materie prime",
    ],
    features: [
      {
        title: "Creazione distinte base",
        desc: "Associazione di materie prime, semilavorati e componenti a ogni prodotto finito.",
      },
      {
        title: "Multilivello",
        desc: "Gestione di distinte base con più livelli di composizione (semilavorati composti da altri semilavorati).",
      },
      {
        title: "Calcolo fabbisogni",
        desc: "Determinazione automatica delle quantità di materiali necessari per un dato volume produttivo.",
      },
      {
        title: "Versioning",
        desc: "Gestione delle revisioni della distinta base nel tempo.",
      },
      {
        title: "Collegamento al magazzino",
        desc: "Verifica della disponibilità dei componenti rispetto alle scorte attuali.",
      },
    ],
    benefits: [
      "Pianificazione produttiva precisa e senza errori di calcolo",
      "Riduzione degli sprechi di materiale grazie a distinte accurate",
      "Velocizzazione del processo di preventivazione",
      "Tracciabilità della composizione di ogni prodotto per controllo qualità",
    ],
    integrations: [
      {
        module: "Ordini Clienti",
        slug: "ordini-clienti",
        desc: "Per associare automaticamente la distinta base a ogni ordine e pianificare le lavorazioni.",
      },
      {
        module: "Merce in Arrivo",
        slug: "merce-in-arrivo",
        desc: "Per verificare se le materie prime previste nella distinta sono in consegna.",
      },
      {
        module: "Magazzino",
        slug: "magazzino",
        desc: "Per confrontare i fabbisogni della distinta con le giacenze disponibili.",
      },
    ],
    example:
      "L'ufficio tecnico aggiorna la distinta base di un prodotto, sostituendo un componente con un'alternativa più economica. Il sistema ricalcola automaticamente i fabbisogni per gli ordini in corso e segnala al responsabile acquisti le quantità del nuovo componente da ordinare.",
  },
  {
    slug: "magazzino",
    title: "Magazzino",
    tagline: "Il tuo magazzino sotto controllo, sempre.",
    description:
      "Visione completa delle scorte con analisi dead stock, prodotti a lenta movimentazione e alert scorte minime.",
    plan: "Professional",
    department: deptProduzione,
    whatItDoes:
      "Il modulo Magazzino offre una visione completa e aggiornata della situazione delle scorte aziendali. Non si limita a mostrare le giacenze: analizza il dead stock, identifica i prodotti a lenta movimentazione, calcola il valore complessivo del magazzino e fornisce indicatori utili per ottimizzare gli approvvigionamenti.\n\nÈ lo strumento ideale per chi vuole trasformare il magazzino da centro di costo a leva strategica, riducendo gli sprechi e migliorando la rotazione delle scorte.",
    targetAudience: [
      "Responsabili di magazzino che gestiscono giacenze e movimentazioni quotidiane",
      "Responsabili acquisti che devono decidere cosa e quanto ordinare",
      "Direzione aziendale che vuole monitorare il valore immobilizzato in scorte",
    ],
    features: [
      {
        title: "Situazione giacenze",
        desc: "Visualizzazione in tempo reale delle quantità disponibili per ogni articolo.",
      },
      {
        title: "Analisi dead stock",
        desc: "Identificazione automatica dei prodotti fermi in magazzino da troppo tempo.",
      },
      {
        title: "Prodotti a lenta movimentazione",
        desc: "Segnalazione degli articoli con rotazione inferiore alle aspettative.",
      },
      {
        title: "Valore del magazzino",
        desc: "Calcolo aggiornato del valore economico delle scorte, con dettaglio per categoria.",
      },
      {
        title: "Alert scorte minime",
        desc: "Notifiche automatiche quando un articolo scende sotto la soglia di riordino.",
      },
    ],
    benefits: [
      "Riduzione del capitale immobilizzato in scorte inutili",
      "Prevenzione delle rotture di stock sui prodotti più venduti",
      "Decisioni di acquisto basate su dati oggettivi di movimentazione",
      "Identificazione tempestiva del dead stock per azioni correttive",
    ],
    integrations: [
      {
        module: "Merce in Arrivo",
        slug: "merce-in-arrivo",
        desc: "Per avere una visione completa tra scorte attuali e merce in consegna.",
      },
      {
        module: "Panoramica Prodotti",
        slug: "panoramica-prodotti",
        desc: "Per correlare le giacenze con le performance di vendita di ogni articolo.",
      },
      {
        module: "Distinta Base",
        slug: "distinta-base",
        desc: "Per verificare la disponibilità dei componenti necessari alla produzione.",
      },
    ],
    example:
      "Il responsabile acquisti consulta il modulo Magazzino e scopre che 15 articoli sono classificati come dead stock, con un valore complessivo di 45.000\u20AC. Incrocia i dati con la Panoramica Prodotti per capire se si tratta di un calo di domanda strutturale o stagionale, e decide di lanciare una promozione mirata per smaltire le giacenze.",
  },

  // ═══════════════════════════════════════════════
  // REPARTO AMMINISTRAZIONE
  // ═══════════════════════════════════════════════
  {
    slug: "documenti-ufficiali",
    title: "Documenti Ufficiali",
    tagline: "Comunicazioni professionali, sempre coerenti con il tuo brand.",
    description:
      "Crea, gestisci e archivia documenti formali su carta intestata aziendale con template personalizzabili.",
    plan: "Professional",
    department: deptAmministrazione,
    whatItDoes:
      "Il modulo Documenti Ufficiali consente di creare, gestire e archiviare documenti formali su carta intestata aziendale direttamente dalla piattaforma. Lettere, comunicazioni, dichiarazioni e atti amministrativi vengono generati con un layout professionale e coerente con l'identità visiva dell'azienda.\n\nTutto è centralizzato in un unico archivio digitale, eliminando la dispersione di documenti tra cartelle locali, email e server condivisi.",
    targetAudience: [
      "Ufficio amministrativo che produce comunicazioni ufficiali",
      "Direzione aziendale che firma lettere e dichiarazioni",
      "Responsabili di reparto che necessitano di documenti formalizzati",
    ],
    features: [
      {
        title: "Editor integrato",
        desc: "Creazione di documenti direttamente in piattaforma con carta intestata preconfigurata.",
      },
      {
        title: "Template personalizzabili",
        desc: "Modelli per lettere, comunicazioni, dichiarazioni e altri atti ricorrenti.",
      },
      {
        title: "Archivio centralizzato",
        desc: "Tutti i documenti ufficiali in un unico punto, ricercabili per data, tipo o destinatario.",
      },
      {
        title: "Gestione versioni",
        desc: "Storico delle modifiche per ogni documento.",
      },
      {
        title: "Esportazione e condivisione",
        desc: "Download in PDF e invio diretto via email.",
      },
    ],
    benefits: [
      "Coerenza visiva e professionale su tutte le comunicazioni ufficiali",
      "Risparmio di tempo nella creazione di documenti ricorrenti",
      "Archivio digitale consultabile e sempre accessibile",
      "Eliminazione della dispersione documentale tra strumenti diversi",
    ],
    integrations: [
      {
        module: "Panoramica Clienti",
        slug: "panoramica-clienti",
        desc: "Per generare comunicazioni ufficiali destinate a un cliente specifico, con dati precompilati.",
      },
      {
        module: "Gestione Progetti e Task",
        slug: "gestione-progetti-task",
        desc: "Per allegare documenti ufficiali ai progetti in corso.",
      },
    ],
    example:
      "L'ufficio amministrativo deve inviare una lettera di conferma contrattuale a un nuovo cliente. Seleziona il template \"Conferma contratto\", i dati del cliente vengono precompilati dalla Panoramica Clienti, il documento viene generato su carta intestata e archiviato automaticamente. In 2 minuti, ciò che prima richiedeva 20 minuti.",
  },

  // ═══════════════════════════════════════════════
  // REPARTO CUSTOMER CARE
  // ═══════════════════════════════════════════════
  {
    slug: "conversazioni-ai",
    title: "Conversazioni AI",
    tagline: "Il tuo assistente virtuale, attivo 24 ore su 24.",
    description:
      "Chatbot AI personalizzabile per il tuo sito web con knowledge base aziendale e qualificazione contatti automatica.",
    plan: "Platinum",
    department: deptCustomerCare,
    whatItDoes:
      "Il modulo Conversazioni AI ti permette di integrare un assistente virtuale intelligente direttamente sul tuo sito web. Basta inserire uno snippet di codice personalizzabile e il chatbot è operativo: interagisce con i visitatori in tempo reale, risponde alle domande più frequenti, fornisce informazioni su prodotti e servizi e qualifica i contatti.\n\nIl chatbot è addestrato su una knowledge base aziendale personalizzata, quindi le risposte sono sempre pertinenti e allineate al tuo business. Non è un generico bot: è il tuo assistente, con la tua voce.",
    targetAudience: [
      "Responsabili marketing che vogliono massimizzare le conversioni del sito web",
      "Team di customer care che vogliono ridurre il carico delle richieste ripetitive",
      "Imprenditori che cercano un modo scalabile per assistere i visitatori del sito",
    ],
    features: [
      {
        title: "Chatbot personalizzabile",
        desc: "Aspetto grafico, tono di voce e comportamento configurabili in base al brand.",
      },
      {
        title: "Knowledge base aziendale",
        desc: "Il bot viene addestrato sui tuoi contenuti: prodotti, servizi, FAQ, documentazione.",
      },
      {
        title: "Risposte in tempo reale",
        desc: "Interazione naturale con i visitatori del sito, 24 ore su 24, 7 giorni su 7.",
      },
      {
        title: "Qualificazione contatti",
        desc: "Raccolta di informazioni chiave dal visitatore durante la conversazione per generare lead qualificati.",
      },
      {
        title: "Snippet di integrazione",
        desc: "Inserimento sul sito con una sola riga di codice, senza interventi tecnici complessi.",
      },
    ],
    benefits: [
      "Assistenza automatica continua, anche fuori dall'orario lavorativo",
      "Riduzione del carico di lavoro del team di supporto",
      "Aumento del tasso di conversione dei visitatori in contatti",
      "Esperienza utente moderna e immediata per i visitatori del sito",
    ],
    integrations: [
      {
        module: "Lead Generati",
        slug: "lead-generati",
        desc: "I contatti acquisiti durante le conversazioni confluiscono automaticamente nel modulo Lead Generati per il follow-up.",
      },
      {
        module: "Panoramica Clienti",
        slug: "panoramica-clienti",
        desc: "Se il visitatore è un cliente esistente, il chatbot può accedere a informazioni contestuali per fornire risposte più precise.",
      },
    ],
    example:
      "Un visitatore atterra sul sito alle 22:30 e ha una domanda specifica su un prodotto. Il chatbot risponde immediatamente, fornisce le informazioni richieste dalla knowledge base e raccoglie nome, email e interesse del visitatore. Il giorno dopo, il team commerciale trova il lead già qualificato nel modulo Lead Generati, pronto per un follow-up.",
  },
  {
    slug: "lead-generati",
    title: "Lead Generati",
    tagline: "Da visitatore anonimo a contatto qualificato, automaticamente.",
    description:
      "Raccolta, organizzazione e gestione automatica dei lead con follow-up personalizzato e segmentazione avanzata.",
    plan: "Platinum",
    department: deptCustomerCare,
    whatItDoes:
      "Il modulo Lead Generati raccoglie, organizza e rende azionabili tutti i contatti acquisiti attraverso le Conversazioni AI e altri touchpoint digitali. Ogni lead viene arricchito con le informazioni raccolte durante l'interazione: interessi, domande poste, pagine visitate e livello di qualificazione.\n\nIl modulo offre strumenti per gestire il follow-up, sia manuale che automatizzato, trasformando i contatti in opportunità commerciali concrete.",
    targetAudience: [
      "Team commerciale che riceve lead dal sito e deve gestire il primo contatto",
      "Responsabili marketing che vogliono misurare l'efficacia delle campagne digitali",
      "Imprenditori che cercano un processo strutturato per non perdere nessun contatto",
    ],
    features: [
      {
        title: "Raccolta automatica",
        desc: "I lead vengono catturati dalle Conversazioni AI e organizzati automaticamente.",
      },
      {
        title: "Scheda lead completa",
        desc: "Informazioni di contatto, interessi dichiarati, storico della conversazione, livello di qualificazione.",
      },
      {
        title: "Follow-up automatizzato",
        desc: "Invio di email di riconnessione personalizzate basate sul comportamento del lead.",
      },
      {
        title: "Gestione manuale",
        desc: "Possibilità di assegnare lead a specifici commerciali e tracciare le attività di follow-up.",
      },
      {
        title: "Filtri e segmentazione",
        desc: "Ordinamento per data, fonte, livello di interesse e stato di gestione.",
      },
    ],
    benefits: [
      "Nessun contatto perso grazie alla raccolta automatica",
      "Tempi di risposta ridotti con il follow-up automatizzato",
      "Pipeline commerciale sempre alimentata da lead qualificati",
      "Visibilità completa sul funnel di acquisizione digitale",
    ],
    integrations: [
      {
        module: "Conversazioni AI",
        slug: "conversazioni-ai",
        desc: "Fonte primaria dei lead, con storico completo della conversazione.",
      },
      {
        module: "Panoramica Clienti",
        slug: "panoramica-clienti",
        desc: "Quando un lead diventa cliente, il passaggio è tracciato e le informazioni confluiscono nella scheda cliente.",
      },
      {
        module: "Azioni Guidate",
        slug: "azioni-guidate",
        desc: "Possibilità di collegare la gestione dei lead a piani operativi strutturati.",
      },
    ],
    example:
      "Il modulo mostra 12 nuovi lead generati nella settimana. Il responsabile commerciale filtra per livello di interesse \"alto\" e ne individua 4 particolarmente promettenti. Per 2 di loro attiva un'email di follow-up automatica personalizzata; per gli altri 2, assegna il contatto a un commerciale senior per una chiamata diretta.",
  },

  // ═══════════════════════════════════════════════
  // REPARTO RISORSE UMANE
  // ═══════════════════════════════════════════════
  {
    slug: "curriculum-ricevuti",
    title: "Curriculum Ricevuti",
    tagline: "Selezione del personale intelligente, dalla ricezione alla profilazione.",
    description:
      "Archivia, organizza e analizza i CV con strumenti di profilazione comportamentale basati su enneagramma e biotipi ippocratici.",
    plan: "Platinum",
    department: deptRisorseUmane,
    whatItDoes:
      "Il modulo Curriculum Ricevuti trasforma il processo di selezione del personale. Archivia, organizza e rende interrogabili tutti i CV ricevuti, eliminando la gestione caotica via email o cartelle condivise.\n\nMa non si ferma qui: integra uno strumento di analisi comportamentale basato su un questionario dedicato, da cui vengono elaborati l'enneagramma e i biotipi ippocratici dei candidati. Questo offre un primo livello di profilazione psicologica e attitudinale che supporta la pre-valutazione in modo oggettivo e strutturato.",
    targetAudience: [
      "HR manager e responsabili del personale",
      "Imprenditori di PMI che gestiscono direttamente le selezioni",
      "Recruiter interni che vogliono strumenti di valutazione più avanzati",
    ],
    features: [
      {
        title: "Archivio CV digitale",
        desc: "Tutti i curriculum in un unico punto, ricercabili per competenze, ruolo, data e altri criteri.",
      },
      {
        title: "Ricerca intelligente",
        desc: "Interroga l'archivio con filtri avanzati per trovare il candidato giusto in pochi secondi.",
      },
      {
        title: "Questionario comportamentale",
        desc: "Somministrazione di un test dedicato ai candidati per la profilazione attitudinale.",
      },
      {
        title: "Enneagramma",
        desc: "Elaborazione del profilo di personalità del candidato basato sull'enneagramma.",
      },
      {
        title: "Biotipi ippocratici",
        desc: "Analisi del biotipo per comprendere le predisposizioni comportamentali del candidato.",
      },
    ],
    benefits: [
      "Processo di selezione più veloce e organizzato",
      "Valutazione oggettiva dei candidati con strumenti di profilazione",
      "Archivio consultabile per future ricerche senza ripartire da zero",
      "Riduzione del rischio di assunzioni non adatte al ruolo o al team",
    ],
    integrations: [
      {
        module: "Profilazione Dipendenti",
        slug: "profilazione-dipendenti",
        desc: "Quando il candidato viene assunto, il profilo comportamentale confluisce nel modulo per l'analisi dei team.",
      },
    ],
    example:
      "L'HR manager cerca un profilo tecnico-commerciale. Interroga l'archivio CV per competenze e trova 8 candidati. Di questi, 5 hanno completato il questionario comportamentale: l'enneagramma evidenzia 2 candidati con profili particolarmente adatti a un ruolo di relazione con il cliente. Vengono convocati per un colloquio con una base di valutazione già strutturata.",
  },
  {
    slug: "profilazione-dipendenti",
    title: "Profilazione Dipendenti",
    tagline: "Conosci il tuo team. Migliora le dinamiche. Cresci insieme.",
    description:
      "Analisi strutturata delle caratteristiche individuali e di team con suggerimenti organizzativi basati sui dati.",
    plan: "Platinum",
    department: deptRisorseUmane,
    whatItDoes:
      "Il modulo Profilazione Dipendenti permette di analizzare in modo strutturato le caratteristiche individuali di ogni membro del team, previo consenso. Attraverso strumenti di valutazione psicologica e comportamentale, genera profili dettagliati che aiutano a comprendere punti di forza, aree di sviluppo e predisposizioni di ciascun dipendente.\n\nLa vera potenza del modulo emerge nell'analisi dei team: il sistema valuta la composizione dei gruppi di lavoro, evidenzia le dinamiche positive e le criticità, e suggerisce possibili miglioramenti nella struttura dei team per massimizzare le performance collettive.",
    targetAudience: [
      "HR manager e responsabili dello sviluppo organizzativo",
      "Direzione aziendale che vuole investire nel capitale umano in modo consapevole",
      "Team leader che vogliono capire come migliorare le dinamiche del proprio gruppo",
    ],
    features: [
      {
        title: "Profilo individuale",
        desc: "Analisi dettagliata delle caratteristiche comportamentali, attitudinali e motivazionali di ogni dipendente.",
      },
      {
        title: "Analisi dei team",
        desc: "Valutazione della composizione dei gruppi di lavoro con evidenziazione di punti di forza e criticità.",
      },
      {
        title: "Suggerimenti organizzativi",
        desc: "Il sistema propone possibili connessioni, spostamenti e miglioramenti nelle dinamiche di gruppo.",
      },
      {
        title: "Confronto profili",
        desc: "Possibilità di confrontare i profili di più dipendenti per decisioni di assegnazione.",
      },
      {
        title: "Report di team",
        desc: "Documentazione delle analisi per supportare decisioni HR e piani di sviluppo.",
      },
    ],
    benefits: [
      "Decisioni di team building basate su dati, non su intuizioni",
      "Identificazione precoce di potenziali conflitti o squilibri nei gruppi",
      "Valorizzazione delle competenze individuali all'interno dei team",
      "Strumento strategico per piani di sviluppo e crescita professionale",
    ],
    integrations: [
      {
        module: "Curriculum Ricevuti",
        slug: "curriculum-ricevuti",
        desc: "Il profilo comportamentale elaborato in fase di selezione confluisce automaticamente.",
      },
      {
        module: "Gestione Progetti e Task",
        slug: "gestione-progetti-task",
        desc: "Per assegnare i task considerando i profili comportamentali e le predisposizioni.",
      },
    ],
    example:
      "L'HR manager analizza il team di sviluppo prodotto e nota che i profili sono sbilanciati verso personalità analitiche, con poca presenza di profili creativi e relazionali. Il sistema suggerisce di inserire nel team una risorsa dal reparto marketing con un profilo complementare. Dopo la riorganizzazione, il team mostra maggiore equilibrio e produttività.",
  },

  // ═══════════════════════════════════════════════
  // REPARTO STRATEGIE E AZIONI
  // ═══════════════════════════════════════════════
  {
    slug: "obiettivi-piani-strategici",
    title: "Obiettivi e Piani Strategici",
    tagline: "Dalla visione all'obiettivo: definisci la rotta con l'AI.",
    description:
      "Definizione, strutturazione e archiviazione degli obiettivi aziendali con supporto AI per strategie efficaci.",
    plan: "Professional",
    department: deptStrategie,
    whatItDoes:
      "Il modulo Obiettivi & Piani Strategici è il punto di partenza della gestione strategica aziendale. Ti supporta nella definizione, strutturazione e archiviazione degli obiettivi aziendali e dei relativi piani d'azione.\n\nGrazie all'integrazione con l'intelligenza artificiale, non sei solo davanti a un foglio bianco: il sistema ti guida nella formulazione di strategie efficaci, fornisce suggerimenti personalizzati basati sul contesto aziendale e ti aiuta a mantenere coerenza tra visione, obiettivi e operatività.",
    targetAudience: [
      "Imprenditori e CEO che definiscono la direzione strategica dell'azienda",
      "Manager e responsabili di area che devono tradurre la strategia in obiettivi di reparto",
      "Consulenti aziendali che supportano i clienti nella pianificazione strategica",
    ],
    features: [
      {
        title: "Definizione obiettivi",
        desc: "Creazione strutturata di obiettivi con descrizione, metriche, scadenze e responsabili.",
      },
      {
        title: "AI strategica",
        desc: "Suggerimenti personalizzati per la formulazione di obiettivi SMART e piani d'azione coerenti.",
      },
      {
        title: "Piani d'azione collegati",
        desc: "Ogni obiettivo può essere collegato a uno o più piani operativi.",
      },
      {
        title: "Archiviazione storica",
        desc: "Registro completo degli obiettivi passati e attuali per analisi di lungo periodo.",
      },
      {
        title: "Coerenza strategica",
        desc: "Il sistema verifica l'allineamento tra visione, obiettivi e azioni operative.",
      },
    ],
    benefits: [
      "Pianificazione strategica guidata e accessibile anche a chi non ha formazione specifica",
      "Riduzione del divario tra strategia e operatività quotidiana",
      "Obiettivi più chiari, misurabili e condivisi con il team",
      "Supporto AI che accelera il processo e migliora la qualità delle decisioni",
    ],
    integrations: [
      {
        module: "Azioni Guidate",
        slug: "azioni-guidate",
        desc: "Gli obiettivi definiti vengono trasformati in piani operativi concreti.",
      },
      {
        module: "Gestione Progetti e Task",
        slug: "gestione-progetti-task",
        desc: "Le azioni derivate dagli obiettivi si traducono in progetti e task assegnabili.",
      },
      {
        module: "Dashboard Vendite",
        slug: "dashboard-vendite",
        desc: "Per verificare se gli obiettivi commerciali stanno producendo i risultati attesi.",
      },
    ],
    example:
      "L'imprenditore vuole aumentare il fatturato del 20% nel prossimo anno. Inserisce l'obiettivo nel modulo e l'AI suggerisce di strutturarlo in sotto-obiettivi trimestrali, propone metriche di monitoraggio e indica le aree commerciali con maggiore potenziale di crescita. In 30 minuti, quello che normalmente richiede una giornata di lavoro è pronto e condivisibile con il team.",
  },
  {
    slug: "azioni-guidate",
    title: "Azioni Guidate",
    tagline: "Dall'obiettivo all'azione concreta, automaticamente.",
    description:
      "Trasforma gli obiettivi in piani operativi strutturati con responsabilità, scadenze e monitoraggio avanzamento.",
    plan: "Professional",
    department: deptStrategie,
    whatItDoes:
      "Il modulo Azioni Guidate è il ponte tra la strategia e l'operatività quotidiana. Prende gli obiettivi definiti nel modulo Obiettivi & Piani Strategici e li trasforma automaticamente in una lista strutturata di azioni concrete da intraprendere.\n\nOgni azione viene generata con responsabilità, scadenze e priorità, creando un piano operativo immediatamente eseguibile. Non devi più chiederti \"e adesso cosa faccio?\": il sistema te lo dice.",
    targetAudience: [
      "Manager che devono tradurre le strategie aziendali in attività operative",
      "Team leader che coordinano l'esecuzione delle azioni nei propri reparti",
      "Imprenditori che vogliono passare rapidamente dalla pianificazione all'azione",
    ],
    features: [
      {
        title: "Generazione automatica",
        desc: "A partire da un obiettivo, il sistema genera un piano operativo strutturato con azioni specifiche.",
      },
      {
        title: "Responsabilità e scadenze",
        desc: "Ogni azione include un responsabile assegnato e una data di completamento.",
      },
      {
        title: "Prioritizzazione",
        desc: "Le azioni vengono ordinate per priorità, evidenziando cosa fare prima.",
      },
      {
        title: "Monitoraggio avanzamento",
        desc: "Tracciamento dello stato di completamento di ogni azione.",
      },
      {
        title: "Ricalcolo dinamico",
        desc: "Se un obiettivo cambia, le azioni vengono ricalcolate e aggiornate.",
      },
    ],
    benefits: [
      "Eliminazione del gap tra \"cosa vogliamo fare\" e \"cosa facciamo davvero\"",
      "Piani operativi pronti in minuti, non in giorni",
      "Responsabilità chiare per ogni azione, riducendo ambiguità e sovrapposizioni",
      "Adattabilità: le azioni si aggiornano al cambiare degli obiettivi",
    ],
    integrations: [
      {
        module: "Obiettivi e Piani Strategici",
        slug: "obiettivi-piani-strategici",
        desc: "Fonte degli obiettivi da cui vengono generate le azioni.",
      },
      {
        module: "Gestione Progetti e Task",
        slug: "gestione-progetti-task",
        desc: "Le azioni possono essere trasformate in task all'interno di progetti specifici.",
      },
      {
        module: "Promemoria",
        slug: "promemoria",
        desc: "Notifiche automatiche per le scadenze delle azioni.",
      },
    ],
    example:
      "Dopo aver definito l'obiettivo \"ridurre i tempi di evasione ordini del 15%\", il modulo genera 8 azioni specifiche: dalla mappatura del processo attuale, all'identificazione dei colli di bottiglia, alla formazione del personale. Ogni azione ha un responsabile e una scadenza. Il team sa esattamente cosa fare e quando.",
  },
  {
    slug: "gestione-progetti-task",
    title: "Gestione Progetti e Task",
    tagline: "Organizza, assegna, monitora. Tutto in un unico spazio.",
    description:
      "Pianifica, organizza e monitora progetti e task con assegnazioni, scadenze, dipendenze e collaborazione in team.",
    plan: "Professional",
    department: deptStrategie,
    whatItDoes:
      "Il modulo Gestione Progetti & Task è lo spazio operativo dove pianificare, organizzare e monitorare tutte le attività aziendali. Che si tratti di un progetto strategico o delle attività quotidiane del team, tutto viene gestito in un'unica piattaforma con strumenti intuitivi e collaborativi.\n\nOgni progetto può contenere task con assegnazioni, scadenze, priorità e stati di avanzamento, garantendo visibilità a tutti i livelli dell'organizzazione.",
    targetAudience: [
      "Team leader e project manager che coordinano attività e risorse",
      "Dipendenti che devono avere chiarezza sulle proprie priorità quotidiane",
      "Direzione aziendale che vuole visibilità sull'avanzamento dei progetti strategici",
    ],
    features: [
      {
        title: "Creazione progetti",
        desc: "Strutturazione di progetti con descrizione, obiettivi, scadenze e team assegnato.",
      },
      {
        title: "Gestione task",
        desc: "Creazione, assegnazione e monitoraggio di task con priorità, scadenze e stati personalizzabili.",
      },
      {
        title: "Collaborazione in team",
        desc: "Visibilità condivisa sulle attività, commenti e aggiornamenti in tempo reale.",
      },
      {
        title: "Vista avanzamento",
        desc: "Dashboard di progetto con percentuale di completamento e attività in ritardo.",
      },
      {
        title: "Dipendenze tra task",
        desc: "Definizione di relazioni tra attività per gestire le sequenze operative.",
      },
    ],
    benefits: [
      "Tutti i progetti e le attività in un unico punto, accessibile a tutti",
      "Riduzione delle attività dimenticate o fuori scadenza",
      "Collaborazione più fluida tra reparti e team",
      "Visibilità chiara per il management sull'operatività aziendale",
    ],
    integrations: [
      {
        module: "Azioni Guidate",
        slug: "azioni-guidate",
        desc: "Le azioni strategiche diventano task all'interno dei progetti.",
      },
      {
        module: "Agenda e Scadenze Strategiche",
        slug: "agenda-scadenze-strategiche",
        desc: "Le scadenze dei task si sincronizzano con il calendario.",
      },
      {
        module: "Profilazione Dipendenti",
        slug: "profilazione-dipendenti",
        desc: "Per considerare i profili comportamentali nell'assegnazione dei task.",
      },
      {
        module: "Promemoria",
        slug: "promemoria",
        desc: "Per inviare notifiche sui task in scadenza.",
      },
    ],
    example:
      "Il team marketing sta lavorando al lancio di un nuovo prodotto. Il project manager crea il progetto, definisce 15 task con assegnazioni e scadenze distribuite su 4 settimane. Ogni membro del team vede le proprie attività, le priorità e le dipendenze. Il direttore commerciale ha visibilità sull'avanzamento senza dover chiedere aggiornamenti.",
  },
  {
    slug: "agenda-scadenze-strategiche",
    title: "Agenda e Scadenze Strategiche",
    tagline: "Il tuo calendario strategico, sincronizzato e condiviso.",
    description:
      "Integrazione con Google Calendar, scadenze condivise e collegamento diretto tra calendario operativo e strategia.",
    plan: "Professional",
    department: deptStrategie,
    whatItDoes:
      "Il modulo Agenda & Scadenze Strategiche integra il tuo Google Calendar con la piattaforma, centralizzando appuntamenti personali e scadenze aziendali in un'unica vista. Non è un semplice calendario: è uno strumento strategico che collega le scadenze agli obiettivi aziendali.\n\nPuoi creare, assegnare e gestire scadenze personali o condivise con il team, con notifiche automatiche che garantiscono il rispetto delle tempistiche. Tutto sincronizzato, niente più dimenticato.",
    targetAudience: [
      "Manager e dirigenti con agende fitte e scadenze strategiche",
      "Team leader che devono coordinare impegni e scadenze di più persone",
      "Chiunque utilizzi Google Calendar e voglia integrarlo nella gestione aziendale",
    ],
    features: [
      {
        title: "Integrazione Google Calendar",
        desc: "Sincronizzazione bidirezionale con il tuo calendario Google.",
      },
      {
        title: "Scadenze condivise",
        desc: "Creazione e assegnazione di scadenze a membri del team con notifiche.",
      },
      {
        title: "Vista centralizzata",
        desc: "Appuntamenti personali e scadenze aziendali in un'unica interfaccia.",
      },
      {
        title: "Notifiche automatiche",
        desc: "Promemoria configurabili per assicurare il rispetto delle tempistiche.",
      },
      {
        title: "Collegamento strategico",
        desc: "Le scadenze possono essere collegate a obiettivi e progetti attivi.",
      },
    ],
    benefits: [
      "Nessuna scadenza dimenticata grazie a notifiche e sincronizzazione",
      "Coordinamento più efficace tra membri del team",
      "Collegamento diretto tra calendario operativo e strategia aziendale",
      "Eliminazione della frammentazione tra strumenti di pianificazione",
    ],
    integrations: [
      {
        module: "Gestione Progetti e Task",
        slug: "gestione-progetti-task",
        desc: "Le scadenze dei task si riflettono nel calendario.",
      },
      {
        module: "Obiettivi e Piani Strategici",
        slug: "obiettivi-piani-strategici",
        desc: "Le milestone degli obiettivi vengono visualizzate nell'agenda.",
      },
      {
        module: "Promemoria",
        slug: "promemoria",
        desc: "Per aggiungere notifiche personalizzate alle scadenze più importanti.",
      },
    ],
    example:
      "Il CEO ha una riunione strategica trimestrale in arrivo. L'agenda mostra automaticamente le scadenze collegate agli obiettivi Q1, lo stato dei task in corso e gli appuntamenti preparatori. Tutto in una schermata, senza dover consultare 3 strumenti diversi.",
  },
  {
    slug: "promemoria",
    title: "Promemoria",
    tagline: "Non dimenticare mai più le attività importanti.",
    description:
      "Sistema di notifiche personalizzabili per attività ricorrenti, scadenze e impegni con invio al team e ricorrenza.",
    plan: "Professional",
    department: deptStrategie,
    whatItDoes:
      "Il modulo Promemoria è uno strumento semplice ma potente per garantire la continuità operativa. Consente di inviare promemoria al personale interno e a se stessi, assicurando che le attività ricorrenti, le scadenze e gli impegni vengano rispettati senza eccezioni.\n\nDall'attività quotidiana alla scadenza mensile, il modulo ti permette di creare un sistema di notifiche personalizzato che si adatta ai ritmi della tua organizzazione.",
    targetAudience: [
      "Manager che vogliono assicurarsi che il team rispetti le scadenze operative",
      "Imprenditori che gestiscono molte attività in parallelo",
      "Chiunque abbia bisogno di un sistema affidabile di promemoria interni",
    ],
    features: [
      {
        title: "Promemoria personalizzabili",
        desc: "Creazione di notifiche per qualsiasi attività, con testo, data e destinatari.",
      },
      {
        title: "Invio al team",
        desc: "Possibilità di inviare promemoria a uno o più membri del personale.",
      },
      {
        title: "Ricorrenza",
        desc: "Impostazione di promemoria ricorrenti (giornalieri, settimanali, mensili).",
      },
      {
        title: "Auto-promemoria",
        desc: "Creazione di notifiche personali per le proprie attività.",
      },
      {
        title: "Storico",
        desc: "Registro dei promemoria inviati per verifiche e analisi.",
      },
    ],
    benefits: [
      "Attività ricorrenti mai dimenticate",
      "Comunicazione interna più strutturata ed efficace",
      "Riduzione degli errori operativi legati a dimenticanze",
      "Semplicità d'uso che non richiede formazione",
    ],
    integrations: [
      {
        module: "Gestione Progetti e Task",
        slug: "gestione-progetti-task",
        desc: "Per aggiungere promemoria ai task più critici.",
      },
      {
        module: "Azioni Guidate",
        slug: "azioni-guidate",
        desc: "Per notificare le scadenze delle azioni strategiche.",
      },
      {
        module: "Agenda e Scadenze Strategiche",
        slug: "agenda-scadenze-strategiche",
        desc: "Per rafforzare le notifiche sulle scadenze più importanti.",
      },
    ],
    example:
      "Ogni venerdì alle 16:00, il sistema invia automaticamente un promemoria al team di produzione per la compilazione del report settimanale. Il responsabile riceve un auto-promemoria il lunedì mattina per verificare che tutti i report siano stati compilati. Zero dimenticanze, zero solleciti manuali.",
  },

  // ═══════════════════════════════════════════════
  // CHAT CON IL DIRETTORE
  // ═══════════════════════════════════════════════
  {
    slug: "chat-direttore",
    title: "Chat con il Direttore",
    tagline: "Gestisci la tua azienda con il linguaggio naturale.",
    description:
      "Interfaccia conversazionale AI per interagire con tutti i moduli e i dati aziendali in linguaggio naturale.",
    plan: "Tutti i piani",
    department: {
      id: "chat-direttore",
      name: "Il Cuore della Piattaforma",
      icon: "🤖",
      description:
        "L'interfaccia che unisce tutti i moduli: il modo più naturale per gestire la tua azienda.",
    },
    whatItDoes:
      "La Chat con il Direttore è il cuore intelligente della piattaforma. È un'interfaccia conversazionale in linguaggio naturale (NLP) che ti permette di interagire con tutti i moduli e i dati aziendali semplicemente scrivendo o parlando, come faresti con un collega.\n\nNon devi navigare tra menu, filtri e schermate: chiedi quello che ti serve e il Direttore lo trova, lo analizza o lo esegue per te. Dalla consultazione dei dati di vendita alla creazione di un task, dalla verifica dello stato di un ordine alla generazione di un report: tutto avviene in modo conversazionale, immediato e intuitivo.\n\nIl Direttore conosce la tua azienda, i tuoi dati e il contesto operativo. Più lo usi, più diventa efficace.",
    targetAudience: [
      "Imprenditori e CEO che vogliono accedere ai dati aziendali senza complessità",
      "Manager sempre in movimento che necessitano di risposte rapide",
      "Qualsiasi utente della piattaforma che preferisce un'interazione naturale ai menu tradizionali",
    ],
    features: [
      {
        title: "Interazione in linguaggio naturale",
        desc: "Scrivi la tua richiesta come in una chat e il sistema interpreta, esegue e risponde.",
      },
      {
        title: "Accesso trasversale ai moduli",
        desc: "Il Direttore può interrogare qualsiasi modulo della piattaforma: vendite, produzione, clienti, progetti e altro.",
      },
      {
        title: "Azioni esecutive",
        desc: "Non solo consulta: può creare task, inviare promemoria, generare report e avviare processi.",
      },
      {
        title: "Contestualità",
        desc: "Comprende il contesto della conversazione e dell'azienda per fornire risposte pertinenti.",
      },
      {
        title: "Disponibilità continua",
        desc: "Sempre accessibile, da qualsiasi dispositivo, senza necessità di formazione.",
      },
    ],
    benefits: [
      "Accesso ai dati aziendali in secondi, senza navigare tra moduli",
      "Curva di apprendimento praticamente azzerata: basta saper scrivere",
      "Aumento della produttività per utenti non tecnici",
      "Esperienza d'uso moderna e naturale che semplifica la gestione quotidiana",
    ],
    integrations: [
      {
        module: "Dashboard Vendite",
        slug: "dashboard-vendite",
        desc: "Interroga dati di vendita e fatturato.",
      },
      {
        module: "Panoramica Clienti",
        slug: "panoramica-clienti",
        desc: "Accedi alle informazioni su clienti specifici.",
      },
      {
        module: "Gestione Progetti e Task",
        slug: "gestione-progetti-task",
        desc: "Crea task e monitora progetti con comandi vocali.",
      },
      {
        module: "Promemoria",
        slug: "promemoria",
        desc: "Imposta promemoria e notifiche in linguaggio naturale.",
      },
    ],
    example:
      "L'imprenditore è in viaggio e dal telefono scrive al Direttore: \"Com'è andato il fatturato questa settimana?\". In pochi secondi riceve il dato aggiornato con la variazione rispetto alla settimana precedente. Poi chiede: \"Mostrami i 5 clienti che hanno ordinato di più\". Infine: \"Crea un promemoria per chiamare il primo della lista domani mattina\". Tre richieste, tre risultati, zero navigazione.",
  },
];

// ── Helper functions ──

export function getAllModules(): ModuleData[] {
  return modules;
}

export function getModuleBySlug(slug: string): ModuleData | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByDepartment(departmentId: string): ModuleData[] {
  return modules.filter((m) => m.department.id === departmentId);
}
