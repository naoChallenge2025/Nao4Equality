
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { AnimatedGradient } from '@/components/ui/animated-gradient';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-16 md:h-20">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl text-nao-blue">Nao4Equality</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium text-gray-700 hover:text-nao-blue transition-colors">Home</a>
          <a href="#about" className="font-medium text-gray-700 hover:text-nao-blue transition-colors">Chi Siamo</a>
          <a href="#project" className="font-medium text-gray-700 hover:text-nao-blue transition-colors">Progetto</a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-nao-blue transition-colors">Contatti</a>
          <AnimatedGradient className="rounded-md">
            <Button className="border-none bg-transparent text-white">
              NAO Challenge 2025
            </Button>
          </AnimatedGradient>
        </nav>
        
        {/* Mobile Navigation Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white w-full absolute top-16 left-0 shadow-lg ${isMobileMenuOpen ? 'animate-fade-in' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a onClick={closeMobileMenu} href="#home" className="font-medium text-gray-700 hover:text-nao-blue transition-colors py-2">Home</a>
          <a onClick={closeMobileMenu} href="#about" className="font-medium text-gray-700 hover:text-nao-blue transition-colors py-2">Chi Siamo</a>
          <a onClick={closeMobileMenu} href="#project" className="font-medium text-gray-700 hover:text-nao-blue transition-colors py-2">Progetto</a>
          <a onClick={closeMobileMenu} href="#contact" className="font-medium text-gray-700 hover:text-nao-blue transition-colors py-2">Contatti</a>
          <AnimatedGradient className="rounded-md">
            <Button className="w-full border-none bg-transparent text-white">
              NAO Challenge 2025
            </Button>
          </AnimatedGradient>
        </div>
      </div>
    </header>
  );
}
