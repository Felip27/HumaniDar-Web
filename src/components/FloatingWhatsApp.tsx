import React, { useState, useEffect } from 'react';
import { buildWhatsAppUrl, ClinicConfig } from '../config/clinicData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { X } from 'lucide-react';

interface FloatingWhatsAppProps {
  config: ClinicConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide on Hero, show when user scrolls past Hero into next section
      const nosotrosSection = document.getElementById('nosotros');
      if (nosotrosSection) {
        const rect = nosotrosSection.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.75);
      } else {
        setIsVisible(window.scrollY > 350);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    config.defaultWhatsappMessage
  );

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
      role="complementary"
      aria-label="Atención rápida por WhatsApp"
    >
      {/* Tooltip prompt (dismissible or auto) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-white dark:bg-slate-900 text-[#000069] dark:text-slate-100 text-xs font-semibold rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 animate-fadeIn">
          <span>¿Necesitás ayuda? Escribinos por WhatsApp</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-0.5"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp con HUMANIDAR"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0472FD] hover:bg-[#035ECC] text-white shadow-xl shadow-[#0472FD]/30 transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#0472FD] focus-visible:outline-offset-4"
      >
        {/* Subtle breathing ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#0472FD]/20 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        <WhatsAppIcon className="w-7 h-7 text-white transition-transform group-hover:scale-105" />

        {/* Unread indicator dot with brand pink */}
        <span
          className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#FC3868] border-2 border-white dark:border-slate-900"
          aria-hidden="true"
        />
      </a>
    </div>
  );
};
