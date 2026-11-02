import React from 'react';
import { ClinicConfig, buildWhatsAppUrl } from '../config/clinicData';
import { ArgentinaTransitMap } from './ArgentinaTransitMap';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  FileCheck2,
  CalendarCheck,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { AmbientGlow } from './OrganicAccents';

interface TransitDialysisSectionProps {
  config: ClinicConfig;
}

export const TransitDialysisSection: React.FC<TransitDialysisSectionProps> = ({ config }) => {
  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    'Hola HUMANIDAR, viajaré a Catamarca y quisiera coordinar mis sesiones de diálisis en tránsito.'
  );

  return (
    <section
      id="transito"
      className="py-16 md:py-24 bg-[#F8FAFD] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-200"
    >
      <AmbientGlow color="blue" size="lg" className="-top-32 -left-32 opacity-35 dark:opacity-15" />
      <AmbientGlow color="pink" size="md" className="bottom-10 -right-20 opacity-25 dark:opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight leading-tight">
            Viajá con total tranquilidad:{' '}
            <span className="brand-gradient-text">tu tratamiento no se detiene</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Recibimos pacientes y turistas de todas las provincias argentinas para continuar sus sesiones de hemodiálisis con excelencia médica, confort y calidez humana.
          </p>
        </div>

        {/* 2-Column Layout: MAP ONLY on Left, Information & CTAs on Right (SIN TARJETAS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT: ONLY THE MAP */}
          <div className="lg:col-span-6 flex justify-center">
            <ArgentinaTransitMap />
          </div>

          {/* RIGHT: Pure text information and benefits directly on the section (no cards) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Mission Statement (Direct text, sin tarjeta) */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000069] dark:text-white leading-tight">
                ¿Venís por turismo, trabajo o visita familiar?
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                En <strong>HUMANIDAR</strong> te brindamos un espacio seguro, moderno y acogedor para realizar tus sesiones de hemodiálisis en tránsito. Nos encargamos de coordinar previamente con tu centro habitual y tu cobertura médica para que tu único plan sea disfrutar de tu estadía en Catamarca.
              </p>
            </div>

            {/* 3 Value Pillars (Direct layout, sin tarjetas) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full pt-1">
              {/* Item 1 */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-100/70 dark:bg-blue-950/70 text-[#0472FD] flex items-center justify-center mb-2.5">
                  <FileCheck2 className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-sm font-bold text-[#000069] dark:text-white">
                  Coordinación previa
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Contacto directo con tu médico de cabecera y envío de historia clínica.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-100/70 dark:bg-rose-950/70 text-[#FC3868] flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-sm font-bold text-[#000069] dark:text-white">
                  Obras Sociales
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Acompañamiento en autorizaciones con OSEP, PAMI y prepagas nacionales.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-100/70 dark:bg-purple-950/70 text-[#7A3DF0] flex items-center justify-center mb-2.5">
                  <CalendarCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-sm font-bold text-[#000069] dark:text-white">
                  Turnos flexibles
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Esquemas adaptados a tus horarios de viaje y excursiones.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-3 border-t border-slate-200/70 dark:border-slate-800/70">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0472FD] shrink-0" />
                <span>Salas climatizadas con Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0472FD] shrink-0" />
                <span>Sillones ergonómicos confortables</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0472FD] shrink-0" />
                <span>Monitoreo médico y enfermería permanente</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0472FD] shrink-0" />
                <span>Ubicación accesible en San Isidro</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0472FD] hover:bg-[#035ECC] active:scale-[0.98] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0472FD]/25 hover:shadow-[#0472FD]/40 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0472FD]"
              >
                <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                <span>Coordinar Diálisis en Tránsito</span>
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-[#000069] dark:text-slate-100 text-sm font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#FC3868]" />
                <span>Consultar requisitos</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
