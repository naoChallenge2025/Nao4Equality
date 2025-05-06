import { useState } from 'react';
import { BadgeCustom } from '@/components/ui/badge-custom';

export function ProjectSection() {
  const [activeTab, setActiveTab] = useState('ideation');
  
  const tabs = [
    {
      id: 'ideation',
      title: 'Ideazione',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      content: {
        title: 'Ideazione',
        description: "La fase di ideazione è dove tutto ha inizio. Il nostro team ha analizzato diverse sfide sociali legate all'uguaglianza e ha esplorato come la robotica NAO potrebbe aiutare ad affrontarle.",
        points: [
          'Ricerca sui problemi di accessibilità e inclusione',
          'Brainstorming di soluzioni innovative',
          'Definizione degli obiettivi del progetto',
          'Creazione di un piano di azione dettagliato'
        ]
      }
    },
    {
      id: 'development',
      title: 'Sviluppo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      content: {
        title: 'Sviluppo',
        description: "Durante la fase di sviluppo, trasformiamo le nostre idee in realtà attraverso la programmazione del robot NAO e la creazione di contenuti educativi.",
        points: [
          'Programmazione di comportamenti interattivi',
          'Sviluppo di algoritmi di riconoscimento',
          'Creazione di dialoghi e interazioni naturali',
          "Test continui per migliorare l'esperienza utente"
        ]
      }
    },
    {
      id: 'implementation',
      title: 'Implementazione',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      content: {
        title: 'Implementazione',
        description: "La fase di implementazione prevede il lancio del nostro progetto in contesti reali, collaborando con scuole, centri comunitari e organizzazioni partner.",
        points: [
          'Workshop interattivi nelle scuole',
          'Eventi dimostrativi aperti alla comunità',
          'Collaborazioni con associazioni locali',
          'Raccolta di feedback per miglioramenti continui'
        ]
      }
    },
    {
      id: 'evaluation',
      title: 'Valutazione',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      content: {
        title: 'Valutazione',
        description: "La valutazione ci permette di misurare l'impatto del nostro progetto e identificare aree di miglioramento per il futuro.",
        points: [
          "Raccolta dati sull'efficacia del programma",
          'Analisi del coinvolgimento dei partecipanti',
          'Documentazione dei risultati e degli apprendimenti',
          'Pianificazione di sviluppi futuri basati sui risultati'
        ]
      }
    }
  ];

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <section id="project" className="bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <BadgeCustom variant="orange" className="mb-4">NAO Challenge 2025</BadgeCustom>
          <h2 className="text-3xl md:text-4xl mb-4">Il Nostro Progetto</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Per la NAO Challenge 2025, stiamo sviluppando un programma innovativo che utilizza il robot umanoide NAO per promuovere l'uguaglianza e l'inclusione in contesti educativi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="mb-4 text-2xl text-nao-purple">La Nostra Visione</h3>
            <p className="mb-4">
              Il nostro obiettivo è creare un ambiente educativo dove tutti si sentano valorizzati e rappresentati, indipendentemente dalle loro caratteristiche o capacità.
            </p>
            <p className="mb-4">
              Utilizzando NAO come mediatore tecnologico, puntiamo a:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Sensibilizzare i giovani sui temi dell'uguaglianza</li>
              <li>Facilitare l'apprendimento inclusivo attraverso la robotica</li>
              <li>Abbattere stereotipi e pregiudizi con interazioni educative</li>
              <li>Creare esperienze accessibili a persone con diverse abilità</li>
            </ul>
            <p>
              Crediamo che la tecnologia, se usata con consapevolezza, possa essere un potente strumento per costruire una società più equa e inclusiva.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-3xl p-6 shadow-xl">
              <img 
                src="/lovable-uploads/53962aa9-085b-443f-ae24-7b3f4b923354.png" 
                alt="Progetto NAO per l'uguaglianza" 
                className="rounded-xl shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://miro.medium.com/v2/resize:fit:1400/1*-MIJYWv8A4Ta0TTGiXkOPg.jpeg';
                }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-200 rounded-full blur-xl opacity-70"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-200 rounded-full blur-xl opacity-70"></div>
          </div>
        </div>

        <div>
          <h3 className="text-center text-2xl mb-8">Fasi del Progetto</h3>
          <div className="max-w-4xl mx-auto">
            {/* Tabs navigation */}
            <div className="border-b flex flex-wrap mb-6">
              {tabs.map((tab) => (
                <button 
                  key={tab.id} 
                  className={`tab-button px-6 py-3 font-medium focus:outline-none flex items-center gap-2 ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span className="hidden md:inline">{tab.title}</span>
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <div className="mt-6">
              {activeTabContent && (
                <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 text-nao-blue">
                        {tabs.find(tab => tab.id === activeTab)?.icon}
                        {activeTabContent.title}
                      </h4>
                      <div className="w-20 h-1 bg-nao-blue rounded mb-4"></div>
                    </div>
                    <div className="md:w-3/4">
                      <div className="space-y-4">
                        <p>{activeTabContent.description}</p>
                        <ul className="list-disc pl-6 space-y-2">
                          {activeTabContent.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
