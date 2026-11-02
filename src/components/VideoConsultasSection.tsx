import React from 'react';
import { ClinicConfig, buildWhatsAppUrl } from '../config/clinicData';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  Video,
  FileText,
  CalendarCheck,
  Stethoscope,
  Smartphone,
} from 'lucide-react';
import { AmbientGlow } from './OrganicAccents';

interface VideoConsultasSectionProps {
  config: ClinicConfig;
}

export const VideoConsultasSection: React.FC<VideoConsultasSectionProps> = ({ config }) => {
  const videoConsultUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    'Hola HUMANIDAR, quisiera consultar y agendar un turno para una videoconsulta médica online.'
  );

  return (
    <section
      id="videoconsultas"
      className="py-16 md:py-24 bg-[#F8FAFD] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-200"
    >
      <AmbientGlow color="brand" size="lg" className="-top-32 -right-32 opacity-30 dark:opacity-15" />
      <AmbientGlow color="blue" size="md" className="bottom-10 -left-20 opacity-25 dark:opacity-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-start text-left space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-xs font-bold text-[#0472FD]">
            <Video className="w-3.5 h-3.5 text-[#0472FD]" />
            <span className="tracking-widest uppercase font-display text-[11px] sm:text-[12px]">
              Telemedicina & Consultas Online
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight leading-tight max-w-3xl">
            Videoconsultas médicas:{' '}
            <span className="brand-gradient-text">cuidá tu salud renal sin moverte de casa</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Si vivís en el interior de Catamarca, en otra provincia o preferís atenderte a distancia, podés acceder a consultas especializadas con nuestro equipo médico a través de videollamada desde tu celular o computadora.
          </p>

          {/* 4 Feature Points - Clean layout directly on the section without extra card containers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full pt-4">
            
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-100/70 dark:bg-blue-950/70 text-[#0472FD] flex items-center justify-center shrink-0 mt-0.5">
                <Stethoscope className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#000069] dark:text-white">
                  Atención médica directa
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Evaluación y diagnóstico cara a cara con nefrólogos especializados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-rose-100/70 dark:bg-rose-950/70 text-[#FC3868] flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#000069] dark:text-white">
                  Revisión de análisis
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Interpretación de laboratorios, ecografías y emisión de recetas digitales.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-100/70 dark:bg-purple-950/70 text-[#7A3DF0] flex items-center justify-center shrink-0 mt-0.5">
                <Smartphone className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#000069] dark:text-white">
                  Sin traslados innecesarios
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Ahorrá tiempo y costos de viaje con conexión rápida desde cualquier dispositivo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <CalendarCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#000069] dark:text-white">
                  Seguimiento y 2da opinión
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Control evolutivo y orientación previa antes de viajar para diálisis en tránsito.
                </p>
              </div>
            </div>

          </div>

          {/* CTA Action - Only the primary WhatsApp booking button */}
          <div className="pt-4">
            <a
              href={videoConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0472FD] hover:bg-[#035ECC] active:scale-[0.98] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0472FD]/25 hover:shadow-[#0472FD]/40 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0472FD]"
            >
              <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
              <span>Agendar Videoconsulta</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
