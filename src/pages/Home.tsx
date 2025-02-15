import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/react';
import { useState } from 'react';
import { IonModal, IonButton } from '@ionic/react';
import './Home.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="header">
          <div className="container">

            <div className="logo">
              <img src="/assets/MAITIME_Logo_Dark.png" alt="MaiTime Logo"/>
            </div>

            <a href="https://chat.maitime.it" target="_blank" rel="noopener noreferrer" className="ask-button">
              Chiedi a MAITIME
            </a>

          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="section-ai">
        <div className="text-content">
          <img src="/assets/MAITIME_Logo_Dark.png" alt="MaiTime Logo"/>
          <h2>L’AI per le Piccole Imprese</h2>
          <p>MAITIME è una piattaforma creata da un imprenditore per gli imprenditori. Ti aiuta a ottimizzare il tempo, ridurre gli errori e gestire al meglio la tua azienda.</p>
          <p>Si connette al tuo gestionale, analizza i dati e ti suggerisce le migliori strategie per far crescere il tuo business.</p>
          
          <div className="button-group">
            <a href="https://chat.maitime.it" target="_blank" rel="noopener noreferrer" className="ask-button">
              Chiedi a MAITIME
            </a>
            <a href="https://gg-nextgen.ai/meetings/egiardini" target="_blank" rel="noopener noreferrer" className="book-button">
              Prenota un Incontro
            </a>
          </div>
        </div>

          <div className="image-content">
            <p> Cosa puoi chiedere a MAITIME?</p>
            <img src="/assets/MAITIME_Chat_ScreenShot_2.png" alt="AI Illustration" />
          </div>
        </div>
          <div className="features-section">

          <div className="feature-box">
            <h3>INTEGRAZIONE</h3>
            <p>Si collega ai tuoi sistemi aziendali senza bisogno di cambiare software.</p>
          </div>

          <div className="feature-box">
            <h3>SICUREZZA</h3>
            <p>I tuoi dati sono al sicuro con la crittografia avanzata di Google.</p>
          </div>

          <div className="feature-box">
            <h3>AI</h3>
            <p>Un assistente AI che impara e migliora per supportarti al meglio.</p>
          </div>

          <div className="feature-box">
            <h3>TURBO</h3>
            <p>Ottimizza il tuo tempo eseguendo attività ripetitive per te.</p>
          </div>
        </div>

        <div className="video-section">
          <div className="video-description">
            <h2>Analizza i tuoi dati con MAITIME</h2>
            <p>MAITIME ti aiuta a comprendere le performance aziendali con report dettagliati, grafici interattivi e suggerimenti strategici per il tuo business. Il tutto con una semplice domanda.</p>
            <p style={{ fontSize: "0.8em" }}>(Il video è stato concesso su autorizzazione della GIARDINI GROUP con i dati reali)</p>
          </div>
          
          <div className="video-container">
            <video autoPlay loop muted playsInline onLoadedMetadata={(e) => e.currentTarget.play()}>
              <source src="/assets/Video_Web_MAITIME_01.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>



        </div>

        <div className="video-section">
          <div className="video-description">
            <h2>Mantieni Sotto Controllo i Tuoi Clienti</h2>
            <p>MAITIME ti aiuta a monitorare i clienti in ritardo nei pagamenti o nelle attività. Analizza i loro comportamenti e suggerisce azioni strategiche per mantenere alta la fidelizzazione.</p>
            <p>Inoltre, organizza le azioni da compiere e le assegna a chi di dovere.</p>
            <p style={{ fontSize: "0.8em" }}>(Il video è stato concesso su autorizzazione della GIARDINI GROUP con i dati reali)</p>
          </div>
          
          <div className="video-container">
            <video autoPlay loop muted playsInline onLoadedMetadata={(e) => e.currentTarget.play()}>
              <source src="/assets/Video_Web_MAITIME_02.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>
        </div>

        <div className="video-section">
          <div className="video-description">
            <h2>Un'Assistente Che Ricorda gli Impegni di Tutti</h2>
            <p>MAITIME Evita dimenticanze e ottimizza la comunicazione aziendale con promemoria personalizzati ed efficaci.</p>
            <p>Può anche inviare per conto tuo email ai tuoi clienti in maniera automatica o previa approvazione.</p>
            <p style={{ fontSize: "0.8em" }}>(Il video è stato concesso su autorizzazione della GIARDINI GROUP con i dati reali)</p>
          </div>
          
          <div className="video-container">
            <video autoPlay loop muted playsInline onLoadedMetadata={(e) => e.currentTarget.play()}>
              <source src="/assets/Video_Web_MAITIME_03.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>
        </div>
        <div className="video-section">
          <div className="video-description">
            <h2>Crea Email e Contenuti Multilingua</h2>
            <p>MAITIME ti aiuta a scrivere email professionali e contenuti in più lingue in pochi secondi. 
              Perfetto per comunicare con clienti internazionali e migliorare la tua presenza globale.</p>
            <p style={{ fontSize: "0.8em" }}>(Il video è stato concesso su autorizzazione della GIARDINI GROUP con i dati reali)</p>
          </div>
          
          <div className="video-container">
            <video autoPlay loop muted playsInline onLoadedMetadata={(e) => e.currentTarget.play()}>
              <source src="/assets/Video_Web_MAITIME_04.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>
        </div>

        <div className="cta-section">
          <h2>Fai il Tuo Primo Passo Verso l'AI</h2>
          <p>Risparmia tempo, ottimizza la gestione della tua azienda e lascia che MAITIME lavori per te.</p>
          
          <div className="cta-buttons">
            <a href="https://share-eu1.hsforms.com/246-FThWPR3eiEDoLbX6yrQ2eqozf" target="_blank" rel="noopener noreferrer" className="ask-button">Iscriviti alla Lista d'Attesa</a>
            <button className="cta-button secondary" onClick={() => setShowModal(true)}>
              Prova MaiTime
            </button>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <img src="/assets/MAITIME_Logo_Dark.png" alt="MaiTime Logo" />
            </div>
            
            <nav className="footer-nav">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </nav>

            <div className="social-icons">
              <a href="#https://www.linkedin.com/company/106171898" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://www.instagram.com/gg_nextgen" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://www.youtube.com/channel/UCVFFf175JbFs6isvkxsbbTw" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </a>
            </div>

            <p className="footer-legal">© 2025 G&G NextGen - P.IVA 02144530439</p>
          </div>
        </footer>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} className="custom-modal">
          <div className="modal-content">
            <h2>Prova MAITIME</h2>
            <p>MAITIME sarà disponibile da Marzo 2025.</p>
            <p>Iscriviti alla lista d'attesa per essere tra i primi a provarlo!</p>
            <a href="https://share-eu1.hsforms.com/246-FThWPR3eiEDoLbX6yrQ2eqozf" target="_blank" rel="noopener noreferrer" className="ask-button">
              Iscriviti Ora
            </a>
            <IonButton color="dark" onClick={() => setShowModal(false)}>Chiudi</IonButton>
          </div>
        </IonModal>


      </IonContent>
    </IonPage>
  );
};

export default Home;
