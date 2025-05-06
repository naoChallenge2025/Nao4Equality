
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { Button } from '@/components/ui/button';
import { BadgeCustom } from '@/components/ui/badge-custom';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-hero-pattern">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <BadgeCustom variant="blue" className="mb-4">NAO Challenge 2025</BadgeCustom>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Nao4Equality</span>
              <br />
              <span className="text-gray-800">Innovazione per l'inclusione</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Un progetto della squadra affiliata all'associazione sportiva 
              <br className="hidden md:inline" />
              <span className="font-semibold">"Uguali nello sport Giuliano Visini"</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <AnimatedGradient variant="blue" className="rounded-md">
                <Button className="border-none bg-transparent text-white" asChild>
                  <a href="#about">
                    Scopri di più
                  </a>
                </Button>
              </AnimatedGradient>
              
              <Button variant="outline" className="gap-2 group" asChild>
                <a href="https://www.naochallenge.it/" target="_blank" rel="noopener noreferrer">
                  NAO Challenge 2025
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="blob bg-gradient-to-r from-nao-blue to-nao-purple p-1 mx-auto max-w-md animate-pulse-slow">
              <div className="bg-white rounded-full w-full h-full aspect-square flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/3140949b-2a5c-498c-b390-7a73675a9cb1.png" 
                  alt="NAO Robot" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://www.softbankrobotics.com/emea/sites/default/files/2023-07/nao-power.webp';
                  }}
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-nao-blue/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-nao-purple/10 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#about" 
            className="flex flex-col items-center text-sm text-gray-500 hover:text-nao-blue transition-colors"
          >
            <span>Scorri verso il basso</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
