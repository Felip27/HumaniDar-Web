import React, { useState } from 'react';
import { CLINIC_FAQS } from '../config/clinicData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // Allow toggling accordions, first one open by default
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8FAFD] dark:bg-[#0B1120] relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold text-[#0472FD]">
            <HelpCircle className="w-4 h-4 text-[#0472FD]" />
            <span className="tracking-wide uppercase font-display text-[12px] sm:text-[13px]">
              Dudas Habituales
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight">
            Preguntas frecuentes
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-slate-300">
            Respuestas claras a las consultas más comunes sobre nuestros canales de atención y servicios.
          </p>
        </div>

        {/* Clean Accordions without boxy card borders */}
        <div className="divide-y divide-slate-200 dark:divide-slate-800/80 max-w-3xl mx-auto">
          {CLINIC_FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="py-5 sm:py-6 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  className="w-full flex items-center justify-between gap-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-[#0472FD] cursor-pointer group"
                >
                  <span className="text-base sm:text-lg font-bold text-[#000069] dark:text-slate-100 group-hover:text-[#0472FD] dark:group-hover:text-[#3B82F6] transition-colors leading-snug">
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#0472FD] text-white rotate-180 shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-[#0472FD]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2]" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${faq.id}`}
                    role="region"
                    className="pt-3 pb-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed animate-fadeIn"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote encouraging direct contact */}
        <div className="mt-10 text-center text-sm text-[#64748B] dark:text-slate-400">
          ¿Tenés otra duda específica?{' '}
          <a
            href="#contacto"
            className="text-[#0472FD] dark:text-[#3B82F6] font-semibold hover:underline focus-visible:ring-1 focus-visible:ring-[#0472FD] rounded"
          >
            Escribinos a través de nuestros canales de contacto
          </a>
          .
        </div>

      </div>
    </section>
  );
};
