import React, { useState } from 'react';
import { INITIAL_CLINIC_CONFIG, ClinicConfig } from './config/clinicData';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TeamSection } from './components/TeamSection';
import { CTASection } from './components/CTASection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConfigModal } from './components/ConfigModal';
import {
  HeroToAboutConnector,
  AboutToServicesConnector,
  SectionWaveConnector,
  ContactToFooterConnector,
} from './components/SectionConnectors';

export default function App() {
  const [config, setConfig] = useState<ClinicConfig>(() => {
    try {
      const stored = localStorage.getItem('humanidar_clinic_config');
      if (stored) {
        return { ...INITIAL_CLINIC_CONFIG, ...JSON.parse(stored) };
      }
    } catch {
      // Fallback to initial
    }
    return INITIAL_CLINIC_CONFIG;
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const handleSaveConfig = (newConfig: ClinicConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('humanidar_clinic_config', JSON.stringify(newConfig));
    } catch {
      // Handle storage quota or private mode safely
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#070A14] text-[#000069] dark:text-slate-100 selection:bg-[#0472FD]/15 selection:text-[#0472FD] relative transition-colors duration-200">
        {/* Sticky Header / Navbar */}
        <Navbar config={config} onOpenConfig={() => setIsConfigOpen(true)} />

        {/* Continuous Narrative Flow of Sections */}
        <main className="flex-1">
          {/* CHAPTER 1: PERSONA & IDENTIDAD */}
          <Hero config={config} />
          
          {/* Seamless organic ribbon bridge from Hero into Nosotros */}
          <HeroToAboutConnector />
          <AboutSection />
          
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
        <Footer config={config} onOpenConfig={() => setIsConfigOpen(true)} />

        {/* Persistent Floating WhatsApp Action */}
        <FloatingWhatsApp config={config} />

        {/* Client Configuration Utility Modal */}
        <ConfigModal
          isOpen={isConfigOpen}
          onClose={() => setIsConfigOpen(false)}
          config={config}
          onSave={handleSaveConfig}
        />
      </div>
    </ThemeProvider>
  );
}
