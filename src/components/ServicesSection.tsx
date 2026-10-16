import React from 'react';
import { CLINIC_SERVICES, buildWhatsAppUrl, ClinicConfig } from '../config/clinicData';
import { Stethoscope, Activity, UserCheck, ShieldCheck, HeartPulse, Users, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AmbientGlow } from './OrganicAccents';

interface ServicesSectionProps {
  config: ClinicConfig;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ config }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 stroke-[1.75]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 stroke-[1.75]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 stroke-[1.75]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 stroke-[1.75]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 stroke-[1.75]" />;
      case 'Users':
      default:
        return <Users className="w-6 h-6 stroke-[1.75]" />;
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white dark:bg-[#070A14] relative overflow-hidden transition-colors duration-200">
      <AmbientGlow color="blue" size="lg" className="-top-32 -right-32 opacity-35 dark:opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Simple & Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold text-[#0472FD]">
            <span className="w-2 h-2 rounded-full bg-[#0472FD]" />
            <span className="tracking-wide uppercase font-display text-[12px] sm:text-[13px]">
              02 · Servicios Médicos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight">
            Nuestros servicios
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-slate-300">
            Cuidado renal integral con un enfoque médico riguroso, preventivo y humano.
          </p>
        </div>

        {/* Clean, proportionate Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CLINIC_SERVICES.map((service, index) => {
            const serviceWhatsappUrl = buildWhatsAppUrl(
              config.whatsappNumber,
              `Hola, quisiera consultar sobre el servicio de "${service.name}" en HUMANIDAR.`
            );

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#0472FD] dark:hover:border-[#3B82F6] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-[#0472FD] group-hover:scale-105 transition-transform duration-200">
                      {getIcon(service.iconName)}
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#000069] dark:text-slate-100 group-hover:text-[#0472FD] dark:group-hover:text-[#3B82F6] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bottom Card Action: Direct WhatsApp consultation */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0472FD] dark:text-[#3B82F6] hover:text-[#035ECC] transition-colors group/btn"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#0472FD] dark:text-[#3B82F6]" />
                    <span>Consultar por WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle reassurance note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#64748B] dark:text-slate-400 max-w-xl mx-auto">
            * Cada plan de cuidado renal se establece mediante evaluación médica individualizada, considerando historia clínica y parámetros de cada persona.
          </p>
        </div>

      </div>
    </section>
  );
};
