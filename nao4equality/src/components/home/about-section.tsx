
import { BadgeCustom } from '@/components/ui/badge-custom';

export function AboutSection() {
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-nao-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaborazione",
      description: "Lavoriamo insieme combinando competenze diverse per raggiungere obiettivi comuni.",
      color: "text-nao-blue"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-nao-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Inclusività",
      description: "Crediamo che la diversità sia una forza e che ognuno meriti pari opportunità.",
      color: "text-nao-purple"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-nao-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 012.184 1.208 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-1.208 2.184 3.42 3.42 0 00-4.438 0 3.42 3.42 0 01-1.946.806 3.42 3.42 0 00-2.184 1.208 3.42 3.42 0 010 4.438 3.42 3.42 0 00.806 1.946 3.42 3.42 0 011.208 2.184 3.42 3.42 0 004.438 0 3.42 3.42 0 011.946-.806 3.42 3.42 0 012.184-1.208 3.42 3.42 0 010-4.438 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 01-1.208-2.184 3.42 3.42 0 00-4.438 0 3.42 3.42 0 01-1.946.806 3.42 3.42 0 00-2.184 1.208 3.42 3.42 0 010 4.438 3.42 3.42 0 00.806 1.946 3.42 3.42 0 011.208 2.184" />
        </svg>
      ),
      title: "Eccellenza",
      description: "Ci impegniamo per raggiungere i massimi standard in tutto ciò che facciamo.",
      color: "text-nao-orange"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-nao-lightblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Innovazione",
      description: "Esploriamo nuove idee e tecnologie per affrontare le sfide sociali.",
      color: "text-nao-lightblue"
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <BadgeCustom variant="purple" className="mb-4">La nostra squadra</BadgeCustom>
          <h2 className="text-3xl md:text-4xl mb-4">Chi Siamo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Siamo il team Nao4Equality, un gruppo appassionato di studenti che partecipa alla NAO Challenge 2025 con l'obiettivo di promuovere l'uguaglianza attraverso la tecnologia robotica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 shadow-lg order-2 md:order-1">
            <h3 className="mb-4 text-2xl text-nao-blue">La Nostra Affiliazione</h3>
            <p className="mb-4">
              Siamo orgogliosamente affiliati all'associazione sportiva "Uguali nello sport Giuliano Visini", un'organizzazione dedicata a promuovere l'inclusività e le pari opportunità nello sport e nella vita.
            </p>
            <p className="mb-4">
              L'associazione opera da anni per abbattere barriere e pregiudizi, creando un ambiente dove tutti possono partecipare e crescere insieme attraverso lo sport e altre attività educative.
            </p>
            <p>
              Questa affiliazione rafforza la nostra missione di utilizzare la tecnologia come strumento di uguaglianza e inclusione sociale.
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-xl order-1 md:order-2 transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/lovable-uploads/eccbb8f8-78e1-4e06-93e8-2c767c04c810.png" 
              alt="Il team Nao4Equality" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
              }}
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-2xl mb-8">I Nostri Valori</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-center border border-gray-100">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${value.color}`}>{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
