import React from 'react';
import { AmbientGlow } from './OrganicAccents';

interface DoctorCardItem {
  id: string;
  name: string;
  title: string;
  image: string;
}

const DOCTOR_CARDS: DoctorCardItem[] = [
  {
    id: 'agustin-iriarte',
    name: 'Agustin Iriarte',
    title: 'Nefrólogo',
    image: '/tarjeta_agustin_iriarte.png',
  },
  {
    id: 'maria-marta-pernasetti',
    name: 'María Marta Pernasetti',
    title: 'Nefróloga',
    image: '/tarjeta_maria_marta_pernasetti.png',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="profesionales" className="py-20 md:py-28 bg-white dark:bg-[#070A14] relative overflow-hidden transition-colors duration-200">
      <AmbientGlow color="purple" size="md" className="top-1/2 -left-20 opacity-30 dark:opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
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

        {/* Solo las dos tarjetas de los doctores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-3xl mx-auto justify-items-center">
          {DOCTOR_CARDS.map((doctor) => (
            <div
              key={doctor.id}
              className="w-full max-w-[340px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 group"
            >
              <img
                src={doctor.image}
                alt={`${doctor.name} - ${doctor.title} en HumaniDar Centro Médico Renal`}
                className="w-full h-auto object-contain block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
