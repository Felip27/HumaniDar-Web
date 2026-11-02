import React from 'react';
import { ClinicConfig, buildWhatsAppUrl } from '../config/clinicData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AmbientGlow } from './OrganicAccents';

interface OsepSectionProps {
  config: ClinicConfig;
}

export const OsepSection: React.FC<OsepSectionProps> = ({ config }) => {
  const osepWhatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    'Hola HUMANIDAR, soy afiliado de OSEP y quisiera consultar por atención nefrológica / diálisis con mi cobertura.'
  );

  return (
    <section
      id="obra-social-osep"
      className="py-10 sm:py-14 bg-white dark:bg-[#070A14] relative overflow-hidden transition-colors duration-200 border-y border-slate-100 dark:border-slate-800/80"
    >
      <AmbientGlow color="blue" size="md" className="top-1/2 -left-24 opacity-25 dark:opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* LEFT: OSEP Official Logo */}
            <div className="md:col-span-5 lg:col-span-4 flex items-center justify-center">
              <div className="w-full max-w-[280px] sm:max-w-[320px] p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/90 shadow-sm border border-slate-100 dark:border-slate-700/60 flex items-center justify-center transition-transform hover:scale-[1.02]">
                <img
                  src="/logo_osep.png"
                  alt="Obra Social de los Empleados Públicos de Catamarca (OSEP)"
                  className="w-full h-auto object-contain max-h-20 sm:max-h-24"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT: Clear and concise message */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col items-start text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-xs font-bold text-[#0472FD]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0472FD]" />
                <span className="tracking-wide uppercase font-display text-[11px] sm:text-[12px]">
                  Cobertura médica
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight leading-snug">
                Trabajamos con Obra Social <span className="text-[#0472FD]">OSEP</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                En <strong>HUMANIDAR</strong> atendemos a afiliados de la Obra Social de los Empleados Públicos de Catamarca para consultas nefrológicas, controles periódicos y tratamientos de hemodiálisis. Gestionamos tu atención con cobertura directa y acompañamiento en cada trámite.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={osepWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0472FD] hover:bg-[#035ECC] active:scale-[0.98] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#0472FD]/20 transition-all duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                  <span>Consultar por OSEP</span>
                </a>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Atención programada y diálisis</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
