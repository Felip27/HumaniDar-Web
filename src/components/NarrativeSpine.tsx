import React, { useState, useEffect } from 'react';

interface Stage {
  id: string;
  name: string;
  targetId: string;
  desc: string;
}

const NARRATIVE_STAGES: Stage[] = [
  { id: 'persona', name: 'PERSONA', targetId: 'inicio', desc: 'El paciente en el centro' },
  { id: 'atencion', name: 'ATENCIÓN', targetId: 'servicios', desc: 'Rigor y diagnóstico' },
  { id: 'acompanamiento', name: 'ACOMPAÑAMIENTO', targetId: 'especialidades', desc: 'Continuidad y cercanía' },
  { id: 'cuidado', name: 'CUIDADO', targetId: 'contacto', desc: 'Compromiso constante' },
];

export const NarrativeSpine: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollProgress(progress);

      // Determine active stage based on section viewport offsets
      const sections = ['inicio', 'servicios', 'especialidades', 'contacto'];
      let foundIndex = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            foundIndex = i;
            break;
          }
        }
      }
      setActiveStageIndex(foundIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStage = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top subtle narrative progress line */}
      <div
        className="fixed top-0 inset-x-0 h-1 z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full brand-gradient transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating Storyline Ribbon for Desktop (discreet, right side or bottom) */}
      <aside
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 pointer-events-auto"
        aria-label="Progreso de la experiencia de cuidado"
      >
        <div className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col gap-2.5">
          <div className="px-2 pb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <span>HISTORIA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FC3868]" />
          </div>

          <nav className="flex flex-col gap-1.5" aria-label="Etapas de atención">
            {NARRATIVE_STAGES.map((stage, index) => {
              const isActive = index === activeStageIndex;
              const isPast = index < activeStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => scrollToStage(stage.targetId)}
                  className={`group flex items-center justify-end gap-2.5 text-right px-2 py-1.5 rounded-lg transition-all text-xs font-semibold ${
                    isActive
                      ? 'text-[#0472FD] dark:text-[#3B82F6] bg-blue-50/80 dark:bg-blue-950/50'
                      : isPast
                      ? 'text-slate-600 dark:text-slate-300 hover:text-[#000069] dark:hover:text-white'
                      : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                  title={stage.desc}
                >
                  <span className="text-[11px] tracking-wide transition-colors">
                    {stage.name}
                  </span>

                  {/* Node Dot with transition line */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'bg-[#0472FD] dark:bg-[#3B82F6] ring-4 ring-[#0472FD]/20 dark:ring-[#3B82F6]/30 scale-125'
                        : isPast
                        ? 'bg-[#FC3868]'
                        : 'bg-slate-200 dark:bg-slate-700 group-hover:bg-slate-300 dark:group-hover:bg-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};
