import React from 'react';
import { HumanidarLogo } from './HumanidarLogo';
import { buildWhatsAppUrl, ClinicConfig } from '../config/clinicData';
import { MessageCircle, Phone, Mail, MapPin, Clock, ExternalLink, Instagram, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  config: ClinicConfig;
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenConfig }) => {
  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    config.defaultWhatsappMessage
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Profesionales', href: '#profesionales' },
    { label: 'Preguntas frecuentes', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#000069] dark:bg-[#030514] text-white pt-16 pb-12 relative overflow-hidden transition-colors duration-200">
      {/* Subtle top gradient accent ribbon */}
      <div className="absolute top-0 inset-x-0 h-1 brand-gradient" />

      {/* Background glow spot */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0472FD]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-white/5 p-3 rounded-2xl border border-white/10">
              <HumanidarLogo variant="horizontal" size="md" isDark={true} />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Centro Médico Renal especializado en la prevención, diagnóstico y tratamiento integral de afecciones renales con excelencia científica y cercanía humana.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                Redes institucionales
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={config.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FC3868] flex items-center justify-center text-white transition-all duration-200"
                  aria-label="Instagram de HUMANIDAR"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={config.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0472FD] flex items-center justify-center text-white transition-all duration-200"
                  aria-label="Facebook de HUMANIDAR"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-all duration-200"
                  aria-label="WhatsApp oficial"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FC3868]" />
              <span>Navegación</span>
            </h3>

            <ul className="space-y-2.5 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-slate-300 hover:text-[#0472FD]"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0472FD]" />
              <span>Atención y Ubicación</span>
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#0472FD] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp:</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#0472FD] font-semibold transition-colors"
                  >
                    {config.whatsappNumber}
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#0472FD] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Teléfono:</span>
                  <span className="text-slate-200">{config.phone}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#0472FD] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Correo Electrónico:</span>
                  <span className="text-slate-200">{config.email}</span>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FC3868] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Dirección:</span>
                  <span className="text-slate-200">{config.address}</span>
                  <div className="mt-1">
                    <a
                      href={config.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#FC3868] hover:underline font-semibold"
                    >
                      <span>Ver en Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#0472FD] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Horarios:</span>
                  <span className="text-slate-200">{config.hours}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 HUMANIDAR. Todos los derechos reservados.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Centro Médico Renal · Medicina con mirada humana
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConfig}
              className="text-xs text-slate-400 hover:text-white transition-colors underline"
            >
              Configurar datos de contacto
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs"
              aria-label="Volver al principio de la página"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
