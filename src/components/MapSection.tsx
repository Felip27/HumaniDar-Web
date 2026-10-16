import React, { useState } from 'react';
import { ClinicConfig } from '../config/clinicData';
import { MapPin, Navigation, ExternalLink, Compass, Clock } from 'lucide-react';
import { AmbientGlow } from './OrganicAccents';

interface MapSectionProps {
  config: ClinicConfig;
}

export const MapSection: React.FC<MapSectionProps> = ({ config }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-[#F8FAFD] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-200">
      <AmbientGlow color="blue" size="md" className="-bottom-20 right-10 opacity-30 dark:opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold text-[#0472FD]">
            <span className="w-2 h-2 rounded-full bg-[#0472FD]" />
            <span className="tracking-wide uppercase font-display text-[12px] sm:text-[13px]">
              Encontranos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight">
            Ubicación y accesos
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-slate-300">
            Instalaciones preparadas para tu tranquilidad, fácil acceso y comodidad en San Isidro, Catamarca.
          </p>
        </div>

        {/* Map Layout: MAP FIRST, then Directions & Logistics Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. FIRST: Embedded Google Maps Container */}
          <div className="order-1 lg:col-span-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden min-h-[380px] sm:min-h-[460px] relative flex flex-col">
            <iframe
              title="Ubicación exacta de HUMANIDAR Centro Médico Renal en Google Maps"
              src={config.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIframeLoaded(true)}
              className="w-full h-full flex-1"
            />

            {/* Fallback overlay if iframe is loading */}
            {!iframeLoaded && (
              <div className="absolute inset-0 bg-[#F1F5F9] dark:bg-slate-850 flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="w-10 h-10 text-[#0472FD] animate-bounce" />
                <p className="text-sm font-bold text-[#000069] dark:text-slate-100 mt-3">
                  Cargando mapa en San Isidro, Catamarca...
                </p>
                <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1 max-w-sm">
                  {config.address}
                </p>
                <a
                  href={config.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-[#0472FD] dark:text-[#3B82F6] shadow-xs hover:border-[#0472FD]"
                >
                  Abrir directamente en Google Maps
                </a>
              </div>
            )}
          </div>

          {/* 2. SECOND: Directions & Logistics Card ("Cómo llegar") */}
          <div className="order-2 lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FC3868]/10 text-[#FC3868] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 stroke-[1.75]" />
              </div>

              <h3 className="text-xl font-bold text-[#000069] dark:text-slate-100">
                HUMANIDAR
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0472FD] dark:text-[#3B82F6] mt-0.5">
                Centro Médico Renal
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider block">
                    Dirección exacta
                  </span>
                  <p className="font-bold text-[#000069] dark:text-slate-100 mt-1 text-base leading-snug">
                    {config.address}
                  </p>
                  <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1">
                    {config.addressDetail}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#0472FD]" />
                    <span>Horarios de Atención</span>
                  </div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {config.hours}
                  </p>
                  <p className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5">
                    {config.hoursSecondary}
                  </p>
                </div>
              </div>
            </div>

            {/* "Cómo llegar" Action Button */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0472FD] hover:bg-[#035ECC] active:scale-[0.98] text-white text-sm font-semibold shadow-md shadow-[#0472FD]/20 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0472FD]"
              >
                <Navigation className="w-4 h-4 text-white fill-white/20" />
                <span>Cómo llegar</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 text-white/80" />
              </a>
              <span className="block text-[11px] text-center text-[#64748B] dark:text-slate-400 mt-2">
                Abre las indicaciones GPS directamente en Google Maps
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
