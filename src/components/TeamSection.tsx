import React from 'react';
import { CLINIC_TEAM } from '../config/clinicData';
import { Award, FileText, CheckCircle2 } from 'lucide-react';
import { AmbientGlow } from './OrganicAccents';

export const TeamSection: React.FC = () => {
  return (
    <section id="profesionales" className="py-20 md:py-28 bg-white dark:bg-[#070A14] relative overflow-hidden transition-colors duration-200">
      <AmbientGlow color="purple" size="md" className="top-1/2 -left-20 opacity-30 dark:opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold text-[#0472FD]">
            <span className="w-2 h-2 rounded-full bg-[#0472FD]" />
            <span className="tracking-wide uppercase font-display text-[12px] sm:text-[13px]">
              Cuerpo Médico
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight">
            Nuestro equipo profesional
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-slate-300">
            Especialistas dedicados al diagnóstico certero, la actualización médica permanente y el trato cálido y humano para cada paciente.
          </p>
        </div>

        {/* Team Cards Grid with Real Portraits & Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_TEAM.map((member) => (
            <div
              key={member.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden hover:border-[#0472FD]/40 shadow-sm transition-all duration-300 group"
            >
              {/* Doctor Portrait Photo */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={member.imageUrl}
                  alt={`Retrato profesional de ${member.name} en HUMANIDAR`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000069]/40 via-transparent to-transparent pointer-events-none" />

                {/* Medical specialty pill badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[11px] font-bold text-[#0472FD] border border-blue-100 dark:border-slate-700 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0472FD]" />
                    {member.specialty}
                  </span>
                </div>
              </div>

              {/* Information Area */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-[#000069] dark:text-slate-100 group-hover:text-[#0472FD] dark:group-hover:text-[#3B82F6] transition-colors leading-tight">
                    {member.name}
                  </h3>

                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#FC3868] font-bold">
                    <Award className="w-4 h-4 shrink-0" />
                    <span>{member.role}</span>
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed font-normal">
                    {member.description}
                  </p>
                </div>

                {/* Medical License Registration */}
                {member.license && (
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{member.license}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
