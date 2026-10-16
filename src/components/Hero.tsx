import React, { useState, useEffect } from 'react';
import { buildWhatsAppUrl, ClinicConfig } from '../config/clinicData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  config: ClinicConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Subtle, elegant entrance animation triggered smoothly on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    config.defaultWhatsappMessage
  );

  return (
    <section
      id="inicio"
      className="relative min-h-[82vh] sm:min-h-[86vh] lg:min-h-[88vh] flex flex-col justify-end pt-20 pb-14 sm:pb-20 lg:pb-24 overflow-hidden bg-slate-950 text-white"
    >
      {/* 1. Background Image with Architectural Facade & Building Signage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/fondo_hero_humanidar.jfif?v=20261016"
          onError={(e) => {
            // Fallback in case browser does not support jfif extension
            (e.currentTarget as HTMLImageElement).src = '/fondo_hero_humanidar.jpg?v=20261016';
          }}
          alt="Edificio y fachada oficial de HumaniDar Centro Médico Renal"
          className={`w-full h-full object-cover object-[center_25%] transition-transform duration-1000 ease-out will-change-transform ${
            isLoaded ? 'scale-100' : 'scale-105'
          }`}
          loading="eager"
        />

        {/* 2. Softened Dark Overlay Filter so the photo is seen vividly and clearly */}
        {/* Very light dark tint so the building architecture is clearly visible */}
        <div className="absolute inset-0 bg-slate-950/25" />

        {/* Delicate vertical gradient for text contrast at the bottom while letting the building shine */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/10 to-slate-950/40" />
      </div>

      {/* 3. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* LEFT: Grand Brand Name "HumaniDar" & Subtitle - Abajo a la izquierda */}
          <div
            className={`lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left transition-all duration-700 ease-out ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Monumental Brand Typography */}
            <h1 className="font-display font-black tracking-tight leading-none text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] select-none drop-shadow-md">
              <span className="text-white">Humani</span>
              <span className="text-[#FC3868] drop-shadow-[0_2px_14px_rgba(252,56,104,0.45)]">D</span>
              <span className="text-white">ar</span>
            </h1>

            {/* Tagline Subtitle */}
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base font-bold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-slate-200/90 drop-shadow-sm">
              CENTRO MÉDICO RENAL
            </p>

            {/* Subtle Brand Accent Line */}
            <div className="mt-3.5 h-1 w-20 sm:w-24 bg-gradient-to-r from-[#0472FD] via-[#7A3DF0] to-[#FC3868] rounded-full" />
          </div>

          {/* RIGHT: Headline, Description & Action Buttons - A la derecha */}
          <div
            className={`lg:col-span-6 xl:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right pb-1 transition-all duration-700 ease-out delay-150 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Main Headline with dash and animated curved underline */}
            <div className="text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-[2.6rem] font-bold text-white tracking-tight leading-snug drop-shadow-sm">
              <span>Cuidamos tu salud renal</span>{' '}
              <span className="text-slate-300 font-light">—</span>{' '}
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="text-[#38BDF8] drop-shadow-[0_2px_10px_rgba(56,189,248,0.35)]">
                  cuidamos de vos.
                </span>
                {/* Curved underline / guión animado */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-[#FC3868] overflow-visible pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="animate-draw-underline"
                  />
                </svg>
              </span>
            </div>

            {/* Supporting Medical Description */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-200 max-w-xl leading-relaxed font-normal drop-shadow-sm">
              Atención nefrológica de excelencia, tecnología médica especializada y acompañamiento humano y cercano en Catamarca.
            </p>

            {/* Action Buttons: Pequeños y finos con bordes sutiles */}
            <div
              className={`mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto lg:justify-end transition-all duration-700 ease-out delay-300 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Primary Button: WhatsApp - Pequeño y fino */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#0472FD] hover:bg-[#035ECC] active:scale-[0.98] text-white text-xs sm:text-sm font-medium tracking-wide shadow-md shadow-blue-900/40 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0472FD]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                <span>Contactanos por WhatsApp</span>
              </a>

              {/* Secondary Button: Servicios - Pequeño, fino y elegante */}
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white text-xs sm:text-sm font-medium tracking-wide border border-white/20 hover:border-white/35 backdrop-blur-sm transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span>Conocé nuestros servicios</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
