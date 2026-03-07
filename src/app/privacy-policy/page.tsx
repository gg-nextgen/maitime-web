import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sulla privacy di MAITIME ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR). Scopri come trattiamo i tuoi dati personali.",
  alternates: {
    canonical: "https://www.maitime.ai/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — MAITIME",
    description:
      "Informativa sulla privacy ai sensi del GDPR. Scopri come trattiamo i tuoi dati personali.",
    url: "https://www.maitime.ai/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Privacy <span className="text-maitime-accent">Policy</span>
          </h1>
          <p className="mt-4 text-sm text-white/50">
            ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 &ndash; GDPR
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-maitime-border bg-maitime-card p-8 sm:p-12">
            <div className="space-y-8 text-white/80 leading-relaxed">
              <p>
                La presente informativa descrive le modalità di trattamento dei
                dati personali effettuato da G&G NextGen SRLS nell&apos;ambito
                del sito web maitime.ai, della piattaforma MAITIME e delle
                pagine di prenotazione meeting collegate.
              </p>

              {/* 1. Titolare */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  1. Titolare del trattamento
                </h2>
                <p>
                  G&G NextGen SRLS
                  <br />
                  Via Andrea Doria 10
                  <br />
                  62012 Civitanova Marche (MC)
                  <br />
                  P.IVA 02144530439
                </p>
                <p className="mt-2">
                  E-mail:{" "}
                  <a
                    href="mailto:privacy@gg-nextgen.ai"
                    className="text-maitime-accent hover:underline"
                  >
                    privacy@gg-nextgen.ai
                  </a>
                </p>
              </div>

              {/* 2. Tipologie di dati */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  2. Tipologie di dati trattati
                </h2>

                <h3 className="mb-2 font-semibold text-white/90">
                  A) Dati forniti volontariamente dall&apos;utente
                </h3>
                <ul className="mb-4 list-disc space-y-1 pl-6">
                  <li>Nome e cognome</li>
                  <li>Indirizzo e-mail</li>
                  <li>Azienda / organizzazione</li>
                  <li>Ruolo professionale</li>
                  <li>Numero di telefono (se fornito)</li>
                  <li>
                    Contenuti inseriti nei campi &ldquo;note&rdquo; o nei form
                  </li>
                  <li>Dati inseriti nei moduli di prenotazione meeting</li>
                </ul>

                <h3 className="mb-2 font-semibold text-white/90">
                  B) Dati relativi all&apos;utilizzo della piattaforma MAITIME
                </h3>
                <ul className="mb-4 list-disc space-y-1 pl-6">
                  <li>Dati account (nome, e-mail, ruolo)</li>
                  <li>Thread conversazionali e richieste inserite</li>
                  <li>Metadati tecnici</li>
                  <li>Dati di utilizzo e telemetria</li>
                  <li>
                    Log di accesso, timestamp, eventi di autenticazione
                  </li>
                </ul>

                <h3 className="mb-2 font-semibold text-white/90">
                  C) Dati tecnici di navigazione
                </h3>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Indirizzo IP</li>
                  <li>Log di sistema</li>
                  <li>
                    Informazioni tecniche necessarie al funzionamento del sito e
                    alla sicurezza
                  </li>
                </ul>
              </div>

              {/* 3. Finalità */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  3. Finalità del trattamento e basi giuridiche
                </h2>
                <p className="mb-3">I dati personali sono trattati per:</p>
                <ol className="list-[lower-alpha] space-y-3 pl-6">
                  <li>
                    <strong className="text-white/90">
                      Gestione delle richieste di contatto e prenotazione meeting
                    </strong>
                    <br />
                    Base giuridica: art. 6(1)(b) GDPR (misure precontrattuali
                    richieste dall&apos;interessato)
                  </li>
                  <li>
                    <strong className="text-white/90">
                      Erogazione dei servizi della piattaforma MAITIME
                    </strong>
                    <br />
                    Base giuridica: art. 6(1)(b) GDPR (esecuzione di contratto)
                  </li>
                  <li>
                    <strong className="text-white/90">
                      Gestione tecnica, sicurezza dei sistemi, prevenzione abusi,
                      audit e troubleshooting
                    </strong>
                    <br />
                    Base giuridica: art. 6(1)(f) GDPR (legittimo interesse alla
                    sicurezza e alla protezione dei sistemi)
                  </li>
                  <li>
                    <strong className="text-white/90">
                      Miglioramento tecnico del servizio e analisi delle
                      performance
                    </strong>
                    <br />
                    Base giuridica: art. 6(1)(f) GDPR (legittimo interesse al
                    miglioramento del servizio), con applicazione dei principi di
                    minimizzazione e, ove possibile, pseudonimizzazione.
                  </li>
                </ol>
                <p className="mt-3">
                  I dati raccolti tramite form di contatto o meeting non sono
                  utilizzati per finalità di marketing senza un consenso
                  specifico e separato.
                </p>
              </div>

              {/* 4. Natura del conferimento */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  4. Natura del conferimento
                </h2>
                <p>
                  Il conferimento dei dati nei moduli di contatto o prenotazione
                  è necessario per gestire la richiesta. Il mancato conferimento
                  può impedire la risposta o l&apos;erogazione del servizio
                  richiesto.
                </p>
              </div>

              {/* 5. Regole di utilizzo */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  5. Regole di utilizzo e minimizzazione
                </h2>
                <p className="mb-3">
                  Gli utenti sono tenuti a non inserire nei campi liberi o nei
                  prompt:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>dati personali non necessari</li>
                  <li>categorie particolari di dati (art. 9 GDPR)</li>
                  <li>dati relativi a condanne penali (art. 10 GDPR)</li>
                </ul>
                <p className="mt-2">salvo diverso accordo contrattuale.</p>
              </div>

              {/* 6. Destinatari */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  6. Destinatari dei dati
                </h2>
                <p className="mb-3">I dati possono essere trattati:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>da personale autorizzato di G&G NextGen</li>
                  <li>
                    da fornitori tecnici nominati Responsabili del trattamento ai
                    sensi dell&apos;art. 28 GDPR (es. infrastruttura cloud,
                    servizi di sicurezza, servizi LLM via API, supporto
                    tecnico), nei limiti strettamente necessari
                  </li>
                </ul>
              </div>

              {/* 7. Trasferimenti extra SEE */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  7. Trasferimenti verso Paesi extra SEE
                </h2>
                <p>
                  Qualora l&apos;utilizzo di fornitori tecnici comporti
                  trasferimenti di dati verso Paesi extra SEE, tali
                  trasferimenti avvengono nel rispetto del Capo V GDPR mediante
                  adeguate garanzie (es. Clausole Contrattuali Standard).
                </p>
              </div>

              {/* 8. Periodi di conservazione */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  8. Periodi di conservazione
                </h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="text-white/90">
                      Dati meeting / contatto:
                    </strong>{" "}
                    fino a 12 mesi dalla richiesta, salvo instaurazione di
                    rapporto contrattuale
                  </li>
                  <li>
                    <strong className="text-white/90">Dati account:</strong> per
                    la durata del rapporto contrattuale
                  </li>
                  <li>
                    <strong className="text-white/90">
                      Log di sicurezza:
                    </strong>{" "}
                    fino a 12 mesi
                  </li>
                  <li>
                    <strong className="text-white/90">
                      Dati di utilizzo e metriche:
                    </strong>{" "}
                    fino a 12 mesi, preferibilmente in forma aggregata o
                    pseudonimizzata
                  </li>
                  <li>
                    <strong className="text-white/90">
                      Thread conversazionali:
                    </strong>{" "}
                    per la durata del rapporto contrattuale, con applicazione dei
                    principi di minimizzazione
                  </li>
                </ul>
                <p className="mt-3">
                  Decorso il termine, i dati sono cancellati o anonimizzati,
                  salvo obblighi di legge o esigenze di difesa in giudizio.
                </p>
              </div>

              {/* 9. Diritti */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  9. Diritti degli interessati
                </h2>
                <p className="mb-3">
                  Gli interessati possono esercitare i diritti previsti dagli
                  artt. 15&ndash;22 GDPR:
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-6">
                  <li>accesso</li>
                  <li>rettifica</li>
                  <li>cancellazione</li>
                  <li>limitazione</li>
                  <li>opposizione</li>
                  <li>portabilità (ove applicabile)</li>
                </ul>
                <p>
                  scrivendo a:{" "}
                  <a
                    href="mailto:privacy@gg-nextgen.ai"
                    className="text-maitime-accent hover:underline"
                  >
                    privacy@gg-nextgen.ai
                  </a>
                </p>
              </div>

              {/* 10. Reclamo */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  10. Reclamo
                </h2>
                <p>
                  L&apos;interessato ha diritto di proporre reclamo al Garante
                  per la protezione dei dati personali ai sensi dell&apos;art.
                  77 GDPR.
                </p>
              </div>

              {/* 11. No LLM training */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  11. Nessun addestramento dei modelli LLM sui dati degli utenti
                </h2>
                <p>
                  I dati trattati nell&apos;ambito dell&apos;utilizzo della
                  piattaforma non sono utilizzati per l&apos;addestramento o il
                  miglioramento di modelli LLM, salvo diverso accordo
                  contrattuale esplicito.
                </p>
              </div>

              {/* 12. Aggiornamenti */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  12. Aggiornamenti
                </h2>
                <p>
                  La presente Privacy Policy può essere aggiornata. La versione
                  aggiornata sarà pubblicata su questa pagina con indicazione
                  della data di revisione.
                </p>
              </div>

              {/* Back link */}
              <div className="border-t border-maitime-border pt-6 text-center">
                <Link
                  href="/cookie-policy"
                  className="text-maitime-accent hover:underline"
                >
                  Consulta la Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
