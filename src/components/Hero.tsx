import React, { useState, useEffect } from 'react';
import { buildWhatsAppUrl, ClinicConfig } from '../config/clinicData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ChevronRight, MapPin } from 'lucide-react';

interface HeroProps {
  config: ClinicConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
      className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-end pt-24 sm:pt-28 pb-14 sm:pb-20 lg:pb-24 overflow-hidden bg-slate-950 text-white"
    >
      {/* 1. Background Image: Official Humanidar Modern Building Facade */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/hero_humanidar_fachada.jpg"
          alt="Edificio y fachada oficial de HumaniDar Centro Médico Renal"
          className={`w-full h-full object-cover object-[center_28%] transition-transform duration-1000 ease-out will-change-transform ${
            isLoaded ? 'scale-100' : 'scale-105'
          }`}
          loading="eager"
        />

        {/* 2. Professional Cinematic Overlays */}
        <div className="absolute inset-0 bg-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>

      {/* 3. Hero Content Container: 2-Column Split (Centered on Mobile, Split on Desktop) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* LEFT: Grand Brand Name "HumaniDar" & Subtitle - CENTRADO EN MÓVIL, A LA IZQUIERDA EN DESKTOP */}
          <div
            className={`lg:col-span-7 xl:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-700 ease-out ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Official Logo Symbol from Image 2 */}
            <div className="mb-4 sm:mb-5">
              <img
                src="/logo_humanidar_symbol.png"
                alt="Símbolo HumaniDar"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_4px_20px_rgba(4,114,253,0.45)] transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Monumental Brand Typography with the exact font from image 1 */}
            <h1 className="font-['Poppins',sans-serif] font-extrabold tracking-tight leading-none text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] select-none drop-shadow-2xl">
              <span className="text-[#0472FD] drop-shadow-[0_2px_16px_rgba(4,114,253,0.55)]">Humani</span>
              <span className="text-[#FC3868] drop-shadow-[0_2px_18px_rgba(252,56,104,0.65)]">D</span>
              <span className="text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">ar</span>
            </h1>

            {/* Tagline Subtitle identical to Image 1 */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-[0.24em] sm:tracking-[0.28em] uppercase text-slate-100 drop-shadow-lg">
              CENTRO MÉDICO RENAL
            </p>

            {/* Brand Accent Ribbon Line */}
            <div className="mt-4 sm:mt-5 h-1.5 w-24 sm:w-32 bg-gradient-to-r from-[#0472FD] via-[#7A3DF0] to-[#FC3868] rounded-full shadow-md" />
          </div>

          {/* RIGHT: Main Headline, Description & Action Buttons - CENTRADO EN MÓVIL, A LA DERECHA EN DESKTOP */}
          <div
            className={`lg:col-span-5 xl:col-span-5 flex flex-col items-center text-center lg:items-end lg:text-right pb-1 transition-all duration-700 ease-out delay-150 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Main Headline - Mucho más grande y visible */}
            <div className="text-2xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
              <span>Cuidamos tu salud renal</span>{' '}
              <span className="text-slate-300 font-light hidden sm:inline">—</span>{' '}
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-[#FC3868] drop-shadow-[0_2px_14px_rgba(252,56,104,0.35)]">
                  cuidamos de vos.
                </span>
                
                {/* Curved underline */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 text-[#FC3868] overflow-visible pointer-events-none"
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

            {/* Supporting Medical Description - Tipografía más amplia y legible */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-[1.2rem] text-slate-100/95 max-w-xl leading-relaxed font-normal drop-shadow-md">
              Atención nefrológica de excelencia, tecnología médica especializada y acompañamiento humano y cercano en Catamarca.
            </p>

            {/* Action Buttons */}
            <div
              className={`mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto justify-center lg:justify-end transition-all duration-700 ease-out delay-300 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Primary Button: WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-[#0472FD] hover:bg-[#035ECC] active:scale-[0.98] text-white text-sm sm:text-base font-bold tracking-wide shadow-lg shadow-blue-900/50 hover:shadow-blue-900/70 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0472FD]"
              >
                <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                <span>Contactanos por WhatsApp</span>
              </a>

              {/* Secondary Button: Servicios */}
              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white text-sm sm:text-base font-semibold tracking-wide border border-white/25 hover:border-white/40 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span>Conocé nuestros servicios</span>
                <ChevronRight className="w-4 h-4 opacity-80" />
              </a>
            </div>

            {/* Quick Location badge */}
            <a
              href="#ubicacion"
              className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#FC3868]" />
              <span>Pedro Lobo S/N, San Isidro, Catamarca</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
