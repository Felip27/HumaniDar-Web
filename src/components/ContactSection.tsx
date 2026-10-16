import React, { useState } from 'react';
import { buildWhatsAppUrl, ClinicConfig } from '../config/clinicData';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AmbientGlow } from './OrganicAccents';

interface ContactSectionProps {
  config: ClinicConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [patientName, setPatientName] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Consulta médica renal');
  const [patientQuery, setPatientQuery] = useState('');

  const handleCustomWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      `Hola HUMANIDAR, mi nombre es ${patientName.trim() || 'un paciente'}.`,
      `Motivo de consulta: ${selectedTopic}.`,
    ];
    if (patientQuery.trim()) {
      parts.push(`Detalle: ${patientQuery.trim()}`);
    }
    const finalMsg = parts.join('\n');
    const targetUrl = buildWhatsAppUrl(config.whatsappNumber, finalMsg);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-white dark:bg-[#070A14] relative overflow-hidden transition-colors duration-200">
      <AmbientGlow color="blue" size="lg" className="-top-32 left-1/2 -translate-x-1/2 opacity-30 dark:opacity-15" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header (Centered & Minimalist) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold text-[#0472FD]">
            <span className="w-2 h-2 rounded-full bg-[#FC3868]" />
            <span className="tracking-wide uppercase font-display text-[12px] sm:text-[13px]">
              Contacto y Consultas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000069] dark:text-slate-100 tracking-tight">
            Estamos para ayudarte
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-slate-300">
            Escribinos directamente para coordinar turnos o recibir orientación personalizada.
          </p>
        </div>

        {/* 1. CENTER: Consultation Form with clean, elegant styling */}
        <div className="max-w-xl mx-auto">
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md">
            <div className="pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold text-[#000069] dark:text-slate-100">
                Enviar consulta
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5 font-normal">
                Completá tus datos y se abrirá WhatsApp con el mensaje formateado
              </p>
            </div>

            <form onSubmit={handleCustomWhatsAppSend} className="space-y-4">
              <div>
                <label htmlFor="patientName" className="block text-xs font-semibold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                  Nombre y Apellido
                </label>
                <input
                  id="patientName"
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Ej. María González"
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-[#000069] dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD] transition-all"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-xs font-semibold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                  Motivo de la Consulta
                </label>
                <select
                  id="topic"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-[#000069] dark:text-slate-100 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD] transition-all"
                >
                  <option value="Consulta médica renal">Consulta médica renal</option>
                  <option value="Solicitud de turno nefrológico">Solicitud de turno nefrológico</option>
                  <option value="Evaluación preventiva de salud renal">Evaluación preventiva de salud renal</option>
                  <option value="Seguimiento evolutivo de paciente">Seguimiento evolutivo de paciente</option>
                  <option value="Información general sobre servicios">Información general sobre servicios</option>
                </select>
              </div>

              <div>
                <label htmlFor="queryDetails" className="block text-xs font-semibold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                  Mensaje o Consulta Específica (Opcional)
                </label>
                <textarea
                  id="queryDetails"
                  rows={3}
                  value={patientQuery}
                  onChange={(e) => setPatientQuery(e.target.value)}
                  placeholder="Escribí brevemente tu duda o requerimiento..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-[#000069] dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#0472FD] hover:bg-[#035ECC] active:scale-[0.98] text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Continuar y Enviar por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

        {/* 2. DEBAJO: Toda la otra información institucional (Dirección, Teléfono, Email, Horarios) */}
        <div className="mt-14 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0472FD] dark:text-[#3B82F6]">
              Información de Contacto Institucional
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Ubicación / Dirección exacta */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#FC3868] mb-3">
                <MapPin className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                Dirección
              </h4>
              <p className="mt-1 text-sm font-bold text-[#000069] dark:text-slate-100 leading-snug">
                {config.address}
              </p>
              <span className="mt-1 text-[11px] text-[#64748B] dark:text-slate-400 block">
                {config.addressDetail}
              </span>
            </div>

            {/* Teléfono */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#0472FD] mb-3">
                <Phone className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                Teléfono
              </h4>
              <p className="mt-1 text-sm font-bold text-[#000069] dark:text-slate-100">
                {config.phone}
              </p>
              <span className="mt-1 text-[11px] text-[#64748B] dark:text-slate-400 block">
                Atención en días hábiles
              </span>
            </div>

            {/* Correo Electrónico */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#7A3DF0] mb-3">
                <Mail className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                Correo Electrónico
              </h4>
              <p className="mt-1 text-sm font-bold text-[#000069] dark:text-slate-100 break-all">
                {config.email}
              </p>
              <span className="mt-1 text-[11px] text-[#64748B] dark:text-slate-400 block">
                Consultas generales y trámites
              </span>
            </div>

            {/* Horarios */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#0472FD] mb-3">
                <Clock className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                Horarios
              </h4>
              <p className="mt-1 text-sm font-bold text-[#000069] dark:text-slate-100 leading-snug">
                {config.hours}
              </p>
              <span className="mt-1 text-[11px] text-[#64748B] dark:text-slate-400 block">
                {config.hoursSecondary}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
