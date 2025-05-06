
import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { ProjectSection } from '@/components/home/project-section';
import { ContactSection } from '@/components/home/contact-section';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Nao4Equality - NAO Challenge 2025";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
