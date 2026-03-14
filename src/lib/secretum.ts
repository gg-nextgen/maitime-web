// ─── MAITIME SECRETUM — Data ──────────────────────────────────────────────────
// Piattaforma AI per la Gestione della Privacy e Compliance GDPR

export interface SecretumFeature {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: string;
}

export interface SecretumTarget {
  slug: string;
  name: string;
  description: string;
  problems: string[];
  solutions: string[];
  icon: string;
}

export interface SecretumStep {
  step: string;
  title: string;
  description: string;
}

export interface SecretumFAQ {
  question: string;
  answer: string;
}

// ─── Features ────────────────────────────────────────────────────────────────

export const secretumFeatures: SecretumFeature[] = [
  {
    slug: "generazione-documenti",
    title: "Generazione Documenti Privacy",
    subtitle: "Tutti i documenti obbligatori, generati automaticamente",
    description:
      "Secretum genera automaticamente tutti i documenti privacy obbligatori per legge, personalizzati con i dati specifici della tua organizzazione. Inserisci i dati una sola volta: Secretum produce l'intero fascicolo privacy.",
    details: [
      "Informativa privacy per clienti, dipendenti e fornitori (art. 13-14 GDPR)",
      "Nomina dei responsabili del trattamento (art. 28 GDPR)",
      "Registro dei trattamenti del titolare e del responsabile (art. 30 GDPR)",
      "Analisi dei rischi e Valutazione d'Impatto — DPIA (art. 35 GDPR)",
      "Nomina degli autorizzati al trattamento (art. 29 GDPR / art. 2-quaterdecies D.lgs. 196/2003)",
      "Procedura di gestione Data Breach (art. 33-34 GDPR)",
      "Registro delle violazioni (art. 33 GDPR)",
      "Informativa e regolamento videosorveglianza (art. 13 GDPR + Provv. Garante)",
      "Policy e istruzioni operative per gli incaricati del trattamento",
      "Contratti di contitolarità (art. 26 GDPR)",
    ],
    icon: "📄",
  },
  {
    slug: "assistente-ai",
    title: "Assistente AI Integrato",
    subtitle: "Un consulente privacy virtuale al tuo fianco",
    description:
      "Secretum integra un assistente basato su intelligenza artificiale che accompagna l'utente in ogni fase del lavoro. Non è un semplice chatbot: è un consulente privacy virtuale che conosce la normativa italiana ed europea e il contesto specifico di ogni organizzazione.",
    details: [
      "Tutore privacy — risponde a domande sulla normativa in linguaggio semplice e comprensibile",
      "Generazione documenti intelligente — genera contenuti personalizzati in base alle specificità dell'organizzazione",
      "Analisi compliance proattiva — segnala documenti mancanti, in scadenza o incongruenze",
      "Query in linguaggio naturale — interroga il database in italiano per ottenere risultati immediati",
    ],
    icon: "🤖",
  },
  {
    slug: "firma-elettronica",
    title: "Firma Elettronica OTP",
    subtitle: "Firma con validità legale, senza carta e senza penna",
    description:
      "Secretum integra la firma elettronica con verifica OTP (One Time Password), conforme al Regolamento eIDAS (UE n. 910/2014). I documenti firmati hanno piena validità legale, equivalente alla firma autografa.",
    details: [
      "Genera il documento, inserisci i dati del firmatario",
      "Il firmatario riceve il documento e un codice OTP via SMS o email",
      "Inserisce il codice per apporre la firma con audit trail completo",
      "Il documento firmato viene archiviato con marca temporale",
      "Audit trail conservato per 10 anni come previsto dalla normativa",
    ],
    icon: "✍️",
  },
  {
    slug: "dashboard-compliance",
    title: "Dashboard di Compliance",
    subtitle: "Lo stato di conformità a colpo d'occhio",
    description:
      "Il cuore di Secretum è la dashboard che offre una vista immediata sullo stato di conformità di ogni organizzazione gestita e dell'intero portfolio clienti.",
    details: [
      "Indicatori visivi (semaforo): verde (conforme), giallo (parziale), rosso (a rischio)",
      "Checklist documenti interattiva con stato per ogni documento obbligatorio",
      "Scadenzario con notifiche via email e in-app per rinnovi e aggiornamenti",
      "Statistiche aggregate: percentuale compliance, documenti generati, trend nel tempo",
    ],
    icon: "📊",
  },
  {
    slug: "gestione-organizzazioni",
    title: "Gestione Organizzazioni e Fornitori",
    subtitle: "Tutti i dati centralizzati in un unico ecosistema",
    description:
      "Secretum centralizza tutti i dati necessari per la gestione privacy: anagrafica organizzazioni, referenti, trattamenti e catalogo fornitori con generazione automatica delle nomine.",
    details: [
      "Anagrafica organizzazioni: ragione sociale, P.IVA/CF, sede, settore, referenti privacy",
      "Mappatura dei trattamenti: finalità, basi giuridiche, categorie di dati e interessati",
      "Gestione fornitori: tipologia, dati anagrafici, referente, stato contrattuale",
      "Generazione automatica nomine a responsabile del trattamento (art. 28) singole o in blocco",
    ],
    icon: "🏢",
  },
  {
    slug: "modulo-audit",
    title: "Modulo Audit Compliance",
    subtitle: "Audit digitali per Consulenti, Studi Legali e DPO",
    description:
      "Una piattaforma completa per effettuare audit di conformità GDPR sulle organizzazioni clienti, interamente digitale e potenziata dall'AI.",
    details: [
      "Aree di verifica personalizzabili: governance, mappatura dati, documentazione, sicurezza, data breach e altro",
      "Questionario intelligente personalizzato dall'AI in base al profilo dell'organizzazione",
      "Compilazione via link senza registrazione — il cliente compila in autonomia",
      "Scoring AI automatico con classificazione lacune per gravità",
      "Report PDF professionale con logo, scoring, gap analysis e piano di remediation",
      "Ciclo annuale con tracking progressi e confronto tra audit successivi",
    ],
    icon: "🔍",
  },
  {
    slug: "notifiche-invio",
    title: "Invio Documenti e Notifiche",
    subtitle: "Comunicazioni automatiche per non perdere nessuna scadenza",
    description:
      "Secretum gestisce l'invio dei documenti e le notifiche per mantenere ogni organizzazione sempre in regola.",
    details: [
      "Invio documenti via email direttamente dalla piattaforma",
      "Notifiche automatiche per scadenze imminenti",
      "Promemoria per documenti mancanti",
      "Alert di compliance per nuove linee guida o aggiornamenti normativi",
    ],
    icon: "🔔",
  },
];

// ─── Target Audiences ────────────────────────────────────────────────────────

export const secretumTargets: SecretumTarget[] = [
  {
    slug: "aziende-attivita",
    name: "Aziende e Attività Commerciali",
    description:
      "Per imprese, PMI, esercizi commerciali e qualsiasi organizzazione soggetta al GDPR, Secretum è il centro di controllo della compliance privacy. Una dashboard unica per monitorare lo stato di conformità, generare i documenti obbligatori e gestire le scadenze senza bisogno di competenze legali specifiche.",
    problems: [
      "Non sai quali documenti privacy servono alla tua attività e quali hai già",
      "Gestisci la privacy con modelli Word generici o fogli Excel non aggiornati",
      "Non hai un processo strutturato per la gestione dei Data Breach",
      "I dipendenti non hanno ricevuto istruzioni operative sul trattamento dei dati",
      "Temi un'ispezione del Garante senza sapere se sei in regola",
    ],
    solutions: [
      "La dashboard ti mostra immediatamente cosa è conforme (verde), parziale (giallo) o a rischio (rosso)",
      "Genera tutti i documenti obbligatori in automatico partendo dai dati della tua organizzazione",
      "L'AI ti avvisa proattivamente di documenti mancanti o in scadenza",
      "Ogni documento è versionato, tracciato e archiviato in modo sicuro",
      "Procedura Data Breach integrata: dall'identificazione alla notifica al Garante",
    ],
    icon: "🏢",
  },
  {
    slug: "consulenti-privacy",
    name: "Consulenti Privacy e DPO",
    description:
      "Per i Data Protection Officer e i consulenti privacy che gestiscono la compliance di più organizzazioni, Secretum offre un ecosistema multi-cliente per gestire audit, documentazione e monitoraggio continuo da un'unica piattaforma.",
    problems: [
      "Gestisci decine di clienti con strumenti diversi e procedure manuali",
      "Gli audit vengono fatti con checklist cartacee o PDF statici",
      "La stesura dei report di conformità è lunga e ripetitiva",
      "Non hai modo di tracciare i progressi tra un audit e il successivo",
      "Ogni cliente richiede un approccio diverso e documentazione personalizzata",
    ],
    solutions: [
      "Dashboard multi-cliente: vedi lo stato di compliance di tutti i tuoi clienti in un colpo d'occhio",
      "Crei audit personalizzati con questionari interattivi online",
      "L'AI analizza le risposte e pre-compila lo scoring di conformità",
      "Report professionali generati automaticamente con il tuo logo e branding",
      "Ciclo annuale con tracking progressi e programmazione re-audit",
    ],
    icon: "🛡️",
  },
  {
    slug: "studi-legali",
    name: "Studi Legali",
    description:
      "Per gli avvocati e gli studi legali che offrono servizi di consulenza privacy, Secretum è lo strumento per digitalizzare l'intero processo: dall'acquisizione del cliente all'audit iniziale, dalla generazione della documentazione al monitoraggio continuo della compliance.",
    problems: [
      "La consulenza privacy richiede molto tempo per la produzione documentale",
      "La compilazione degli audit richiede incontri in presenza e scambio di email",
      "Non hai un modo strutturato per monitorare la compliance dei clienti nel tempo",
      "La redazione di pareri e report è ripetitiva e time-consuming",
      "Difficile scalare il servizio mantenendo la qualità",
    ],
    solutions: [
      "Genera tutta la documentazione privacy in pochi minuti per ogni cliente",
      "Invii un link sicuro al cliente che compila l'audit online in autonomia",
      "Il report professionale viene generato automaticamente con il tuo logo",
      "Puoi tracciare la remediation e monitorare la compliance nel tempo",
      "Scali il servizio senza aumentare le ore: l'AI fa il lavoro pesante",
    ],
    icon: "⚖️",
  },
];

// ─── How It Works Steps ──────────────────────────────────────────────────────

export const secretumStepsOrganization: SecretumStep[] = [
  {
    step: "01",
    title: "Registrati e Inserisci la Tua Organizzazione",
    description:
      "Crea il tuo account e inserisci i dati della tua azienda o attività. L'AI ti guida nella mappatura dei trattamenti e nell'identificazione dei documenti necessari.",
  },
  {
    step: "02",
    title: "Verifica lo Stato di Compliance",
    description:
      "La dashboard ti mostra immediatamente quali documenti sono presenti, quali mancano e quali necessitano di aggiornamento.",
  },
  {
    step: "03",
    title: "Genera i Documenti Mancanti",
    description:
      "Con un click generi i documenti privacy obbligatori per la tua organizzazione. L'AI personalizza il contenuto in base ai tuoi dati e trattamenti specifici.",
  },
  {
    step: "04",
    title: "Firma, Invia e Archivia",
    description:
      "Fai firmare i documenti con firma elettronica OTP, inviali via email ai destinatari e archiviali automaticamente su Secretum.",
  },
];

export const secretumStepsConsultant: SecretumStep[] = [
  {
    step: "01",
    title: "Crea l'Audit",
    description:
      "Seleziona il template (o creane uno personalizzato), inserisci i dati dell'organizzazione da auditare, lascia che l'AI personalizzi il questionario.",
  },
  {
    step: "02",
    title: "Invia il Link",
    description:
      "Il cliente riceve un link sicuro e compila il questionario online, in autonomia, quando vuole. Può salvare e riprendere in qualsiasi momento.",
  },
  {
    step: "03",
    title: "Revisiona con AI Scoring",
    description:
      "L'AI analizza le risposte e pre-compila il punteggio di conformità. Tu revisioni, aggiusti e aggiungi le tue note professionali.",
  },
  {
    step: "04",
    title: "Genera e Consegna il Report",
    description:
      "Secretum genera un report PDF professionale con il tuo logo, completo di scoring, gap analysis e piano di remediation.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const secretumFAQs: SecretumFAQ[] = [
  {
    question: "Secretum è adatto anche a piccole attività?",
    answer:
      "Assolutamente sì. Secretum è pensato per scalare: funziona perfettamente sia per un piccolo studio professionale che per un'azienda con centinaia di dipendenti. L'interfaccia è semplice e intuitiva, non serve essere esperti di tecnologia.",
  },
  {
    question: "I documenti generati sono conformi alla normativa vigente?",
    answer:
      "Sì. I template sono redatti in conformità al GDPR (Reg. UE 2016/679), al Codice Privacy italiano (D.lgs. 196/2003 aggiornato dal D.lgs. 101/2018) e alle più recenti indicazioni del Garante. Vengono aggiornati regolarmente quando la normativa evolve.",
  },
  {
    question: "La firma elettronica OTP ha valore legale?",
    answer:
      "Sì. La firma OTP è riconosciuta come Firma Elettronica Avanzata (FEA) dal Regolamento eIDAS (UE n. 910/2014) e ha lo stesso valore della firma autografa. L'audit trail completo viene conservato per 10 anni.",
  },
  {
    question: "Devo essere un esperto di privacy per usare Secretum?",
    answer:
      "No. L'assistente AI è progettato proprio per guidare anche chi non ha competenze specifiche in materia di privacy. Spiega la normativa in linguaggio semplice e suggerisce le azioni da compiere passo dopo passo.",
  },
  {
    question:
      "Il mio cliente deve essere registrato su Secretum per compilare un audit?",
    answer:
      "No. Puoi inviare un link di compilazione a qualsiasi organizzazione, che può completare l'audit senza registrarsi. Se poi il cliente decide di registrarsi, i dati inseriti vengono importati automaticamente.",
  },
  {
    question: "I miei dati sono al sicuro?",
    answer:
      "La sicurezza è la nostra priorità assoluta. I dati sono cifrati sia in transito che a riposo, ogni cliente ha i propri dati completamente isolati dagli altri, e ogni operazione viene registrata in un audit trail inalterabile. L'infrastruttura è ospitata su Google Cloud Platform.",
  },
  {
    question: "Posso personalizzare i template dei documenti?",
    answer:
      "Sì. Puoi partire dai template standard di Secretum e personalizzarli con il tuo stile, il tuo logo e le tue specificità. Per consulenti e studi legali, anche i template di audit e i report sono completamente personalizzabili.",
  },
  {
    question: "Come funziona l'assistente AI?",
    answer:
      "L'AI di Secretum è basata su tecnologia Claude di Anthropic e ha una conoscenza approfondita della normativa privacy italiana ed europea. Puoi chiederle qualsiasi cosa: dalla spiegazione di un articolo del GDPR alla generazione di un documento specifico, fino a interrogare il tuo database in linguaggio naturale.",
  },
  {
    question: "Secretum sostituisce il mio consulente privacy?",
    answer:
      "Secretum è uno strumento che rende più efficiente il lavoro del professionista, non lo sostituisce. L'AI suggerisce e genera, ma l'utente ha sempre il controllo finale. Per studi legali e DPO, Secretum potenzia il servizio di consulenza rendendolo più rapido, scalabile e professionale.",
  },
];
