import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy di MAITIME ai sensi del GDPR e del Provvedimento del Garante 10 giugno 2021. Scopri come utilizziamo i cookie sul nostro sito.",
  alternates: {
    canonical: "https://www.maitime.ai/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Cookie <span className="text-maitime-accent">Policy</span>
          </h1>
          <p className="mt-4 text-sm text-white/50">
            ai sensi del Regolamento UE 2016/679 &ndash; GDPR e del
            Provvedimento del Garante 10 giugno 2021
          </p>
          <p className="mt-2 text-xs text-white/40">
            Ultimo aggiornamento: 03/03/2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-maitime-border bg-maitime-card p-8 sm:p-12">
            <div className="space-y-8 text-white/80 leading-relaxed">
              <p>
                La presente Cookie Policy descrive l&apos;utilizzo dei cookie e
                di tecnologie simili sul sito{" "}
                <a
                  href="https://maitime.ai"
                  className="text-maitime-accent hover:underline"
                >
                  maitime.ai
                </a>{" "}
                (di seguito, il &ldquo;Sito&rdquo;).
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

              {/* 2. Cosa sono i cookie */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  2. Cosa sono i cookie
                </h2>
                <p className="mb-3">
                  I cookie sono piccoli file di testo che i siti web visitati
                  inviano al dispositivo dell&apos;utente (computer, smartphone,
                  tablet), dove vengono memorizzati per poi essere ritrasmessi
                  agli stessi siti in occasione di visite successive.
                </p>
                <p className="mb-2">I cookie possono essere:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <strong className="text-white/90">di prima parte</strong>{" "}
                    (installati direttamente dal Sito)
                  </li>
                  <li>
                    <strong className="text-white/90">di terza parte</strong>{" "}
                    (installati da domini diversi tramite il Sito)
                  </li>
                </ul>
              </div>

              {/* 3. Tipologie */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  3. Tipologie di cookie utilizzati
                </h2>

                <h3 className="mb-2 font-semibold text-white/90">
                  3.1 Cookie tecnici (necessari)
                </h3>
                <p className="mb-2">
                  Sono cookie indispensabili per il corretto funzionamento del
                  Sito e per consentire la navigazione e l&apos;utilizzo dei
                  servizi richiesti (es. autenticazione, sicurezza, gestione
                  sessione).
                </p>
                <p className="mb-1">
                  Base giuridica: art. 6(1)(f) GDPR (legittimo interesse al
                  corretto funzionamento del sito).
                </p>
                <p className="mb-6">
                  Questi cookie non richiedono consenso.
                </p>

                <h3 className="mb-2 font-semibold text-white/90">
                  3.2 Cookie di analisi (analytics)
                </h3>
                <p className="mb-2">
                  Il Sito può utilizzare strumenti di analisi per raccogliere
                  informazioni aggregate e anonime sul numero degli utenti e su
                  come visitano il sito (es. pagine visitate, tempo di
                  permanenza).
                </p>
                <p className="mb-2">
                  Se configurati in modalità anonimizzata e senza incrocio con
                  altri dati, possono essere assimilati ai cookie tecnici.
                </p>
                <p className="mb-2">
                  Se non anonimizzati o utilizzati per profilazione → richiedono
                  consenso preventivo.
                </p>
                <p className="mb-1">Base giuridica:</p>
                <ul className="mb-6 list-disc space-y-1 pl-6">
                  <li>art. 6(1)(f) GDPR (se anonimizzati)</li>
                  <li>art. 6(1)(a) GDPR (se richiedono consenso)</li>
                </ul>

                <h3 className="mb-2 font-semibold text-white/90">
                  3.3 Cookie di profilazione o marketing (se presenti)
                </h3>
                <p className="mb-2">
                  Il Sito può utilizzare cookie di terze parti per:
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-6">
                  <li>analizzare il comportamento dell&apos;utente</li>
                  <li>personalizzare contenuti pubblicitari</li>
                  <li>misurare l&apos;efficacia delle campagne</li>
                </ul>
                <p className="mb-1">
                  Questi cookie sono installati solo previo consenso espresso
                  dell&apos;utente.
                </p>
                <p>Base giuridica: art. 6(1)(a) GDPR (consenso).</p>
              </div>

              {/* 4. Gestione del consenso */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  4. Modalità di gestione del consenso
                </h2>
                <p className="mb-3">
                  Al primo accesso al Sito, l&apos;utente può:
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-6">
                  <li>accettare tutti i cookie</li>
                  <li>rifiutare i cookie non necessari</li>
                  <li>personalizzare le preferenze</li>
                </ul>
                <p>
                  Il consenso può essere modificato o revocato in qualsiasi
                  momento tramite il link &ldquo;Gestisci Cookie&rdquo; presente
                  nel footer del Sito.
                </p>
              </div>

              {/* 5. Gestione browser */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  5. Gestione dei cookie tramite browser
                </h2>
                <p className="mb-3">
                  L&apos;utente può configurare il proprio browser per:
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-6">
                  <li>accettare o rifiutare tutti i cookie</li>
                  <li>cancellare i cookie già installati</li>
                  <li>essere avvisato prima dell&apos;installazione</li>
                </ul>
                <p>
                  La disabilitazione dei cookie tecnici può compromettere il
                  corretto funzionamento del Sito.
                </p>
              </div>

              {/* 6. Trasferimenti extra SEE */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  6. Trasferimenti verso Paesi extra SEE
                </h2>
                <p>
                  Qualora i cookie di terze parti comportino trasferimenti di
                  dati verso Paesi extra SEE, tali trasferimenti avvengono nel
                  rispetto del Capo V GDPR mediante adeguate garanzie (es.
                  Clausole Contrattuali Standard).
                </p>
              </div>

              {/* 7. Diritti */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-white">
                  7. Diritti dell&apos;interessato
                </h2>
                <p className="mb-3">
                  Gli utenti possono esercitare i diritti previsti dagli artt.
                  15&ndash;22 GDPR (accesso, rettifica, cancellazione,
                  limitazione, opposizione, portabilità) scrivendo a:
                </p>
                <p className="mb-3">
                  <a
                    href="mailto:privacy@gg-nextgen.ai"
                    className="text-maitime-accent hover:underline"
                  >
                    privacy@gg-nextgen.ai
                  </a>
                </p>
                <p>
                  È inoltre possibile proporre reclamo al Garante per la
                  protezione dei dati personali ai sensi dell&apos;art. 77 GDPR.
                </p>
              </div>

              {/* Back link */}
              <div className="border-t border-maitime-border pt-6 text-center">
                <Link
                  href="/privacy-policy"
                  className="text-maitime-accent hover:underline"
                >
                  Consulta la Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
