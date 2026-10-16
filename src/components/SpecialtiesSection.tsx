import React from 'react';
import { CLINIC_SPECIALTIES } from '../config/clinicData';
import { Microscope, Sparkles, CalendarCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { ConnectionRibbon } from './OrganicAccents';

export const SpecialtiesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Microscope':
        return <Microscope className="w-5 h-5 stroke-[1.75]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 stroke-[1.75]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 stroke-[1.75]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-5 h-5 stroke-[1.75]" />;
    }
  };

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-[#F8FAFD] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-200">
      <ConnectionRibbon className="absolute top-1/2 left-0 w-full opacity-25 dark:opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Asymmetric Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold text-[#0472FD]">
            <span className="w-2 h-2 rounded-full bg-[#FC3868]" />
            <span className="tracking-wide uppercase font-display text-[12px] sm:text-[13px]">
              03 · Ruta de Atención y Cuidado
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight">
            Especialidades y áreas de atención
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-slate-300">
            Abordaje interdisciplinario conectado en una secuencia lógica de prevención, diagnóstico y acompañamiento continuo.
          </p>
        </div>

        {/* Interconnected Pathway: 4 Connected Nodes */}
        <div className="relative">
          
          {/* Subtle connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 brand-gradient -translate-y-12 opacity-30 dark:opacity-20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {CLINIC_SPECIALTIES.map((item, idx) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#FC3868] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Top node indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-100 dark:border-rose-900/50 text-[#FC3868] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      {getIcon(item.iconName)}
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#000069] dark:text-slate-100 mb-1.5 leading-snug group-hover:text-[#FC3868] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-[#FC3868]">
                  <span>{item.focus}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
