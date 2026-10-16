import React, { useState, useEffect, useRef } from 'react';
import { buildWhatsAppUrl, ClinicConfig } from '../config/clinicData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Settings2, ChevronDown } from 'lucide-react';

interface NavbarProps {
  config: ClinicConfig;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenConfig }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after user passes into the next section (Nosotros)
      const nosotrosSection = document.getElementById('nosotros');
      if (nosotrosSection) {
        const rect = nosotrosSection.getBoundingClientRect();
        // Visible when nosotros enters viewport
        setIsVisible(rect.top <= 120);
      } else {
        setIsVisible(window.scrollY > 380);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close dropdown on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsDropdownOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio', desc: 'Volver a la portada' },
    { label: 'Nosotros', href: '#nosotros', desc: 'Nuestra visión y valores' },
    { label: 'Servicios', href: '#servicios', desc: 'Tratamientos y hemodiálisis' },
    { label: 'Especialidades', href: '#especialidades', desc: 'Áreas de atención médica' },
    { label: 'Profesionales', href: '#profesionales', desc: 'Cuerpo médico especializado' },
    { label: 'Preguntas frecuentes', href: '#faq', desc: 'Respuestas a dudas comunes' },
    { label: 'Contacto', href: '#contacto', desc: 'Dirección, turnos y ubicación' },
  ];

  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    'Hola, quisiera realizar una consulta sobre los servicios de HUMANIDAR.'
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-out py-2.5 sm:py-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-b border-slate-100 dark:border-slate-800/80 ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo PNG de HumaniDar */}
          <a
            href="#inicio"
            className="group flex items-center focus-visible:ring-2 focus-visible:ring-[#0472FD] rounded-lg transition-transform hover:opacity-90"
            aria-label="HUMANIDAR Centro Médico Renal - Volver al inicio"
          >
            <img
              src="/logohumanidar.png"
              alt="HumaniDar Centro Médico Renal"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-xs"
              loading="eager"
            />
          </a>

          {/* Menú Dropdown y Acciones */}
          <div className="flex items-center gap-2 sm:gap-3" ref={dropdownRef}>
            
            {/* Botón Dropdown de Menú Delgado y Fino */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-[#0472FD] dark:hover:text-[#38BDF8] bg-slate-50 hover:bg-slate-100/90 dark:bg-slate-900/90 dark:hover:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm font-medium tracking-wide transition-all shadow-2xs active:scale-98 focus-visible:ring-2 focus-visible:ring-[#0472FD]"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-label="Abrir menú de navegación"
              >
                {isDropdownOpen ? (
                  <X className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                ) : (
                  <Menu className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                )}
                <span>Menú</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Panel Dropdown Flotante Fino y Elegante */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 sm:w-72 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200/90 dark:border-slate-800 py-2 z-50 animate-fadeIn"
                  role="menu"
                >
                  <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Navegación
                    </p>
                  </div>

                  <nav className="flex flex-col py-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsDropdownOpen(false)}
                        role="menuitem"
                        className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors flex flex-col group text-left"
                      >
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-[#0472FD] dark:group-hover:text-[#38BDF8] transition-colors">
                          {link.label}
                        </span>
                        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-normal">
                          {link.desc}
                        </span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-1 pt-2 border-t border-slate-100 dark:border-slate-800 px-3 pb-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#0472FD] hover:bg-[#035ECC] text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>Contactar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Alternador de Modo Claro / Oscuro */}
            <ThemeToggle />

            {/* Acceso a Configuración de Contacto */}
            <button
              onClick={onOpenConfig}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Configuración de datos de contacto"
              aria-label="Configuración de datos de contacto"
            >
              <Settings2 className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
