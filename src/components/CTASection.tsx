import React from 'react';
import { buildWhatsAppUrl, ClinicConfig } from '../config/clinicData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MapPin } from 'lucide-react';
import { AmbientGlow } from './OrganicAccents';

interface CTASectionProps {
  config: ClinicConfig;
}

export const CTASection: React.FC<CTASectionProps> = ({ config }) => {
  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    'Hola, quisiera realizar una consulta sobre los servicios de HUMANIDAR.'
  );

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#070A14] relative overflow-hidden transition-colors duration-200">
      <AmbientGlow color="brand" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 dark:opacity-15" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#F8FAFD] to-white dark:from-slate-900 dark:to-[#0F172A] border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none text-center overflow-hidden">
          
          {/* Subtle top gradient accent line */}
          <div className="absolute top-0 inset-x-0 h-1.5 brand-gradient" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-bold text-[#0472FD]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FC3868]" />
            <span className="tracking-wide uppercase font-display text-[12px] sm:text-[13px]">
              Atención y Consultas
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight text-balance">
            ¿Necesitás realizar una consulta?
          </h2>

          {/* Text */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#475569] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Estamos para ayudarte. Comunicate con HUMANIDAR y recibí información sobre nuestros servicios y formas de atención.
          </p>

          {/* Buttons: WhatsApp + Ver ubicación */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0472FD] hover:bg-[#035ECC] active:scale-[0.98] text-white text-base font-bold shadow-md shadow-[#0472FD]/25 hover:shadow-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0472FD]"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Hablar por WhatsApp</span>
            </a>

            <a
              href="#mapa"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 active:scale-[0.98] text-[#000069] dark:text-slate-100 text-base font-bold border-2 border-[#0472FD]/60 dark:border-slate-600 hover:border-[#0472FD] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0472FD]"
            >
              <MapPin className="w-4 h-4 text-[#FC3868]" />
              <span>Ver ubicación</span>
            </a>
          </div>

          {/* Subtle reassurance note */}
          <p className="mt-6 text-xs text-[#64748B] dark:text-slate-400">
            Horarios de atención: {config.hours}
          </p>
        </div>
      </div>
    </section>
  );
};
