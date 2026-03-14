// ─── MAITIME SECRETUM — Data ──────────────────────────────────────────────────
// Piattaforma di Gestione Privacy per il Mondo Condominiale

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
      "Secretum genera automaticamente tutti i documenti privacy obbligatori per legge, personalizzati con i dati specifici di ogni condominio. Basta inserire i dati una sola volta: Secretum produce l'intero fascicolo privacy.",
    details: [
      "Informativa privacy per i condomini (art. 13-14 GDPR)",
      "Atto di nomina dell'amministratore come responsabile del trattamento (art. 28 GDPR)",
      "Nomina dei fornitori come responsabili del trattamento (art. 28 GDPR)",
      "Registro dei trattamenti (art. 30 GDPR)",
      "Analisi dei rischi e DPIA (art. 35 GDPR)",
      "Nomina degli autorizzati al trattamento (art. 29 GDPR)",
      "Procedura di gestione Data Breach (art. 33-34 GDPR)",
      "Registro delle violazioni (art. 33 GDPR)",
      "Informativa videosorveglianza (art. 13 GDPR + Provv. Garante)",
      "Istruzioni operative per chi tratta i dati",
    ],
    icon: "📄",
  },
  {
    slug: "assistente-ai",
    title: "Assistente AI Integrato",
    subtitle: "Un consulente privacy virtuale al tuo fianco",
    description:
      "Secretum integra un assistente basato su intelligenza artificiale che accompagna l'utente in ogni fase del lavoro. Non è un semplice chatbot: è un consulente privacy virtuale che conosce la normativa italiana, le Linee Guida del Garante e il contesto specifico di ogni condominio.",
    details: [
      "Tutore privacy — risponde a domande sulla normativa in linguaggio semplice e comprensibile",
      "Generazione documenti intelligente — genera contenuti personalizzati in base alle specificità del condominio",
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
      "Il cuore di Secretum è la dashboard che offre una vista immediata sullo stato di conformità di ogni condominio e dell'intero portfolio.",
    details: [
      "Indicatori visivi (semaforo): verde (conforme), giallo (parziale), rosso (a rischio)",
      "Checklist documenti interattiva con stato per ognuno dei 10 documenti obbligatori",
      "Scadenzario con notifiche via email e in-app per rinnovi e aggiornamenti",
      "Statistiche aggregate: percentuale compliance, documenti generati, trend nel tempo",
    ],
    icon: "📊",
  },
  {
    slug: "gestione-condomini",
    title: "Gestione Condomini e Fornitori",
    subtitle: "Tutti i dati centralizzati in un unico ecosistema",
    description:
      "Secretum centralizza tutti i dati necessari per la gestione privacy: anagrafica condomini, dati dei residenti e catalogo fornitori con generazione automatica delle nomine.",
    details: [
      "Anagrafica condomini: denominazione, CF, indirizzo, unità, videosorveglianza, portineria",
      "Anagrafica residenti: nome, CF, unità immobiliare, contatti per informative e diritti",
      "Gestione fornitori: tipologia, dati anagrafici, associazione fornitore-condominio",
      "Generazione automatica nomine a responsabile del trattamento (art. 28) in blocco",
    ],
    icon: "🏢",
  },
  {
    slug: "modulo-audit",
    title: "Modulo Audit Compliance",
    subtitle: "Audit digitali per Studi Legali e DPO",
    description:
      "Una piattaforma completa per effettuare audit di conformità GDPR sugli studi di amministrazione condominiale, interamente digitale e potenziata dall'AI.",
    details: [
      "12 aree di verifica: governance, mappatura dati, documentazione, sicurezza, data breach e altro",
      "Questionario intelligente personalizzato dall'AI in base al profilo dello studio",
      "Compilazione via link senza registrazione — lo studio compila in autonomia",
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
      "Secretum gestisce l'invio dei documenti e le notifiche per mantenere lo studio sempre in regola.",
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
    slug: "studi-amministrazione",
    name: "Studi di Amministrazione Condominiale",
    description:
      "Per chi gestisce decine o centinaia di condomini, Secretum è il centro di controllo della compliance privacy. Una dashboard unica per tutti i condomini dello studio, con stato di conformità in tempo reale, scadenze monitorate e generazione documenti in pochi click.",
    problems: [
      "Perdi ore a creare documenti privacy manualmente per ogni condominio",
      "Non sai mai quali documenti mancano o sono scaduti",
      "I tuoi collaboratori non sanno dove trovare i documenti aggiornati",
      "Hai il timore di un'ispezione del Garante senza essere preparato",
      "Gestire le nomine dei fornitori per ogni condominio è un incubo",
    ],
    solutions: [
      "Genera tutti i documenti obbligatori in automatico partendo dai dati del condominio",
      "La dashboard ti mostra immediatamente quali condomini sono conformi (verde), parzialmente conformi (giallo) o a rischio (rosso)",
      "L'AI ti avvisa proattivamente di documenti mancanti o in scadenza",
      "Ogni documento è versionato, tracciato e archiviato in modo sicuro",
      "Puoi gestire tutti i fornitori e generare le nomine art. 28 in blocco",
    ],
    icon: "🏛️",
  },
  {
    slug: "amministratori-condominio",
    name: "Amministratori di Condominio",
    description:
      "Per l'amministratore che gestisce i propri condomini, Secretum offre una vista dedicata con tutti gli strumenti per essere in regola con il GDPR senza essere un esperto di privacy.",
    problems: [
      "Non sei sicuro di quali documenti privacy servano per ogni condominio",
      "Non sai come redigere un'informativa o un atto di nomina correttamente",
      "I condomini ti chiedono informazioni sulla privacy e non sai rispondere",
      "Devi gestire la videosorveglianza ma non conosci tutti gli adempimenti",
    ],
    solutions: [
      "Una checklist visiva ti dice esattamente cosa manca per ogni condominio",
      "L'assistente AI ti spiega la normativa in linguaggio semplice",
      "I documenti vengono generati con i dati corretti del condominio, pronti per essere firmati",
      "Per condomini con videosorveglianza, Secretum attiva automaticamente i documenti specifici (informativa, DPIA, cartelli)",
    ],
    icon: "👤",
  },
  {
    slug: "studi-legali-dpo",
    name: "Studi Legali e DPO",
    description:
      "Per i professionisti della privacy che effettuano audit di conformità sugli studi di amministrazione, Secretum offre un modulo dedicato per digitalizzare l'intero processo di audit: dalla creazione del questionario personalizzato alla generazione automatica del report di compliance.",
    problems: [
      "Gli audit vengono fatti con checklist cartacee o PDF statici",
      "La compilazione richiede incontri in presenza e scambio di email",
      "La stesura del report finale è lunga e ripetitiva",
      "Non hai modo di tracciare i progressi tra un audit e il successivo",
      "Ogni cliente richiede un approccio diverso",
    ],
    solutions: [
      "Crei audit personalizzati con un questionario interattivo online",
      "Invii un link sicuro allo studio di amministrazione che compila in autonomia",
      "L'AI analizza le risposte e pre-compila lo scoring di conformità",
      "Il report professionale viene generato automaticamente con il tuo logo",
      "Puoi tracciare la remediation e programmare re-audit annuali",
    ],
    icon: "⚖️",
  },
];

// ─── How It Works Steps ──────────────────────────────────────────────────────

export const secretumStepsStudio: SecretumStep[] = [
  {
    step: "01",
    title: "Registrati e Inserisci i Tuoi Condomini",
    description:
      "Crea il tuo account, inserisci i dati dello studio e aggiungi i condomini che amministri. Puoi importarli in blocco o aggiungerli uno alla volta.",
  },
  {
    step: "02",
    title: "Verifica lo Stato di Compliance",
    description:
      "La dashboard ti mostra immediatamente quali condomini sono in regola e quali hanno documenti mancanti o scaduti.",
  },
  {
    step: "03",
    title: "Genera i Documenti Mancanti",
    description:
      "Con un click generi i documenti privacy per ogni condominio. L'AI personalizza il contenuto in base ai dati del condominio.",
  },
  {
    step: "04",
    title: "Firma, Invia e Archivia",
    description:
      "Fai firmare i documenti con firma elettronica OTP, inviali via email ai destinatari e archiviali automaticamente su Secretum.",
  },
];

export const secretumStepsDPO: SecretumStep[] = [
  {
    step: "01",
    title: "Crea l'Audit",
    description:
      "Seleziona il template (o creane uno personalizzato), inserisci i dati dello studio da auditare, lascia che l'AI personalizzi il questionario.",
  },
  {
    step: "02",
    title: "Invia il Link",
    description:
      "Lo studio di amministrazione riceve un link sicuro e compila il questionario online, in autonomia, quando vuole.",
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
    question: "Secretum è adatto anche a studi piccoli con pochi condomini?",
    answer:
      "Assolutamente sì. Secretum è pensato per scalare: funziona perfettamente sia per uno studio con 5 condomini che per uno con 500. L'interfaccia è semplice e intuitiva, non serve essere esperti di tecnologia.",
  },
  {
    question: "I documenti generati sono conformi alla normativa vigente?",
    answer:
      "Sì. I template sono redatti in conformità al GDPR, al Codice Privacy italiano e alle Linee Guida 2025 del Garante. Vengono aggiornati regolarmente quando la normativa evolve.",
  },
  {
    question: "La firma elettronica OTP ha valore legale?",
    answer:
      "Sì. La firma OTP è riconosciuta come Firma Elettronica Avanzata (FEA) dal Regolamento eIDAS (UE n. 910/2014) e ha lo stesso valore della firma autografa. L'audit trail completo viene conservato per 10 anni.",
  },
  {
    question: "Devo essere un esperto di privacy per usare Secretum?",
    answer:
      "No. L'assistente AI è progettato proprio per guidare anche chi non ha competenze specifiche in materia di privacy. Spiega la normativa in linguaggio semplice e suggerisce le azioni da compiere.",
  },
  {
    question:
      "Lo studio di amministrazione deve essere registrato su Secretum per compilare un audit?",
    answer:
      "No. Lo studio legale può inviare un link di compilazione a qualsiasi studio di amministrazione, che può completare l'audit senza registrarsi. Se poi lo studio decide di registrarsi, i dati inseriti vengono importati automaticamente.",
  },
  {
    question: "I miei dati sono al sicuro?",
    answer:
      "La sicurezza è la nostra priorità assoluta. I dati sono cifrati sia in transito che a riposo, ogni cliente ha i propri dati completamente isolati dagli altri, e ogni operazione viene registrata in un audit trail inalterabile. L'infrastruttura è ospitata su Google Cloud Platform.",
  },
  {
    question: "Posso personalizzare i template dei documenti?",
    answer:
      "Sì. Puoi partire dai template standard di Secretum e personalizzarli con il tuo stile, il tuo logo e le tue specificità. Per gli studi legali, i template di audit sono completamente personalizzabili.",
  },
  {
    question: "Come funziona l'assistente AI?",
    answer:
      "L'AI di Secretum è basata su tecnologia Claude di Anthropic e ha una conoscenza approfondita della normativa privacy italiana. Puoi chiederle qualsiasi cosa: dalla spiegazione di un articolo del GDPR alla generazione di un documento specifico, fino a interrogare il tuo database in linguaggio naturale.",
  },
  {
    question: "Secretum sostituisce il mio consulente privacy?",
    answer:
      "Secretum è uno strumento che rende più efficiente il lavoro del professionista, non lo sostituisce. L'AI suggerisce e genera, ma l'utente ha sempre il controllo finale. Per gli studi legali, Secretum potenzia il servizio di audit rendendolo più rapido e professionale.",
  },
];
