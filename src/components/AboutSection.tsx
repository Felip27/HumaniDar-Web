import React, { useState } from 'react';
import { Heart, Shield, Check, Sparkles, MessageCircle, Quote } from 'lucide-react';
import { HumanidarLogo } from './HumanidarLogo';
import { AmbientGlow, ConnectionRibbon } from './OrganicAccents';

export const AboutSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      title: 'Compromiso',
      tagline: 'Presencia activa',
      desc: 'Dedicación absoluta a la salud y bienestar de quienes confían en nosotros, con seguimiento regular y responsable.',
    },
    {
      title: 'Profesionalismo',
      tagline: 'Rigor médico',
      desc: 'Rigor científico y actualización médica continua al servicio del paciente y su familia.',
    },
    {
      title: 'Cercanía',
      tagline: 'Escucha atenta',
      desc: 'Un trato empático, accesible y de diálogo abierto en cada consulta y control evolutivo.',
    },
    {
      title: 'Acompañamiento',
      tagline: 'Continuidad',
      desc: 'Presencia constante junto al paciente en todas las etapas de su plan de cuidado renal.',
    },
    {
      title: 'Calidad humana',
      tagline: 'Persona integral',
      desc: 'Mirada integral que prioriza a la persona, sus emociones y su entorno más allá de los estudios clínicos.',
    },
  ];

  return (
    <section id="nosotros" className="pt-10 pb-20 md:py-28 bg-[#F8FAFD] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-200">
      <AmbientGlow color="brand" size="lg" className="-bottom-32 -left-32 opacity-40 dark:opacity-20" />

      {/* Narrative Section Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Asymmetric Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold text-[#0472FD]">
            <span className="w-2 h-2 rounded-full bg-[#0472FD]" />
            <span className="tracking-wide uppercase font-display text-[12px] sm:text-[13px]">
              01 · Identidad Institucional
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight leading-tight text-balance">
            Humanidar, una forma{' '}
            <span className="brand-gradient-text">humana de cuidar</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-[#000069] dark:text-white font-bold">HUMANIDAR</strong> es una institución dedicada al cuidado de la salud renal, enfocada en brindar atención profesional, personalizada y cercana a cada paciente.
          </p>
        </div>

        {/* Asymmetric Overlapping Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Doctor attending patient & Brand Vision Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Photography Card: Real clinic facade with floating badge */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-[#0472FD]/40 transition-all duration-300">
              <div className="relative w-full h-[320px] sm:h-[370px] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src="/fachada_clinica_humanidar.jpg"
                  alt="Fachada oficial de HUMANIDAR Centro Médico Renal en San Isidro, Catamarca"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge: 'La medicina con una mirada humana' */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg">
                    <div className="shrink-0 p-1 bg-white dark:bg-slate-800 rounded-xl shadow-xs">
                      <HumanidarLogo variant="symbol-only" size="sm" />
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-xs font-bold text-[#0472FD]">
                        La medicina con
                      </span>
                      <span className="text-xs font-bold text-[#000069] dark:text-slate-100">
                        una mirada humana
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote from the medical vision */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-l-[#FC3868] border border-slate-200/90 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <Quote className="w-6 h-6 text-[#FC3868]/20 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
                "El cuidado de la salud renal adquiere su verdadero valor cuando la ciencia médica se une a la calidez y a la escucha honesta de cada persona."
              </p>
              <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-[#FC3868]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FC3868]" />
                <span>HUMANIDAR · Centro Médico Renal</span>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Pillars Journey */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-2.5">
              <div className="px-1 pb-3 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-[#000069] dark:text-slate-300 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0472FD]" />
                  Pilares de Nuestra Atención
                </span>
              </div>

              {pillars.map((pillar, idx) => {
                const isSelected = selectedPillar === idx;

                return (
                  <div
                    key={pillar.title}
                    onClick={() => setSelectedPillar(idx)}
                    className={`cursor-pointer p-3.5 sm:p-4 rounded-xl transition-all duration-200 border ${
                      isSelected
                        ? 'bg-blue-50/80 dark:bg-blue-950/50 border-[#0472FD] dark:border-blue-500 shadow-xs'
                        : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors ${
                            isSelected
                              ? 'bg-[#0472FD] text-white'
                              : 'bg-white dark:bg-slate-800 text-[#0472FD] dark:text-blue-300 border border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          0{idx + 1}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-[#000069] dark:text-slate-100">
                            {pillar.title}
                          </h4>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {pillar.tagline}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                          isSelected ? 'bg-[#FC3868] text-white font-bold' : 'text-slate-300 dark:text-slate-600'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    </div>

                    {isSelected && (
                      <p className="mt-2.5 pt-2.5 border-t border-blue-200/70 dark:border-slate-700/60 text-xs sm:text-sm text-[#000069] dark:text-slate-200 font-medium leading-relaxed animate-fadeIn">
                        {pillar.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
