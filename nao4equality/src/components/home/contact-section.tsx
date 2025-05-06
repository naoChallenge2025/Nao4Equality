
import { useState } from 'react';
import { BadgeCustom } from '@/components/ui/badge-custom';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Messaggio inviato!",
      description: "Ti risponderemo il prima possibile.",
    });
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-nao-light">
      <div className="section-container">
        <div className="text-center mb-12">
          <BadgeCustom variant="blue" className="mb-4">Mettiti in contatto</BadgeCustom>
          <h2 className="text-3xl md:text-4xl mb-4">Contattaci</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hai domande sul nostro progetto o sei interessato a collaborare con noi? Non esitare a contattarci!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Inviaci un messaggio</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Il tuo nome" 
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-nao-blue"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="La tua email" 
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-nao-blue"
                />
              </div>
              <div>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Il tuo messaggio" 
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-nao-blue min-h-[120px]"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:opacity-90 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Invia messaggio
              </Button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-nao-blue to-nao-purple text-white rounded-3xl shadow-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informazioni di contatto</h3>
              <p className="mb-8">
                Siamo sempre aperti alle discussioni e alle collaborazioni. Contattaci utilizzando uno dei metodi sottostanti.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="opacity-80">nao4equality@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Indirizzo</h4>
                    <p className="opacity-80">IIS A. Volta - Via Alessandro Volta, 15 - 65129 Pescara (PE)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="bg-white/10 p-6 rounded-2xl">
                <p className="italic text-center">
                  "L'uguaglianza non è un concetto, non è una parola, è un'azione necessaria e un obiettivo da raggiungere."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}