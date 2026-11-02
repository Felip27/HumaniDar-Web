import React, { useEffect } from 'react';
import { INITIAL_CLINIC_CONFIG } from './config/clinicData';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TransitDialysisSection } from './components/TransitDialysisSection';
import { OsepSection } from './components/OsepSection';
import { VideoConsultasSection } from './components/VideoConsultasSection';
import { ServicesSection } from './components/ServicesSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TeamSection } from './components/TeamSection';
import { CTASection } from './components/CTASection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import {
  HeroToAboutConnector,
  AboutToServicesConnector,
  SectionWaveConnector,
  ContactToFooterConnector,
} from './components/SectionConnectors';

export default function App() {
  const config = INITIAL_CLINIC_CONFIG;

  // Clean up any stale localStorage from previous config modal
  useEffect(() => {
    try {
      localStorage.removeItem('humanidar_clinic_config');
    } catch {
      // Safe fallback
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#070A14] text-[#000069] dark:text-slate-100 selection:bg-[#0472FD]/15 selection:text-[#0472FD] relative transition-colors duration-200">
        {/* Sticky Header / Navbar */}
        <Navbar config={config} />

        {/* Continuous Narrative Flow of Sections */}
        <main className="flex-1">
          {/* CHAPTER 1: PERSONA & IDENTIDAD */}
          <Hero config={config} />
          
          {/* Seamless organic ribbon bridge from Hero into Transit Dialysis */}
          <HeroToAboutConnector />

          <TransitDialysisSection config={config} />

          {/* Cobertura Médica OSEP */}
          <OsepSection config={config} />

          {/* Telemedicina & Videoconsultas */}
          <VideoConsultasSection config={config} />
          
          {/* Organic wave transition into Servicios */}
          <AboutToServicesConnector />

          {/* CHAPTER 2: ATENCIÓN & SERVICIOS */}
          <ServicesSection config={config} />
          <SectionWaveConnector fromType="plain" toType="alt" />

          {/* CHAPTER 3: ACOMPAÑAMIENTO, EQUIPO Y VALORES */}
          <SpecialtiesSection />
          <SectionWaveConnector fromType="alt" toType="plain" flip={true} />

          <TeamSection />
          <SectionWaveConnector fromType="plain" toType="plain" />

          <CTASection config={config} />
          <SectionWaveConnector fromType="plain" toType="alt" />

          <FAQSection />
          <SectionWaveConnector fromType="alt" toType="plain" />

          {/* CHAPTER 4: CUIDADO, CONTACTO & UBICACIÓN */}
          <ContactSection config={config} />
          <MapSection config={config} />

          {/* Wave transition into dark institutional footer */}
          <ContactToFooterConnector />
        </main>

        {/* Institutional Dark Footer */}
        <Footer config={config} />

        {/* Persistent Floating WhatsApp Action */}
        <FloatingWhatsApp config={config} />
      </div>
    </ThemeProvider>
  );
}
