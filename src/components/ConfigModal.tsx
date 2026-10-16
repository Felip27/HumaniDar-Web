import React, { useState } from 'react';
import { ClinicConfig, INITIAL_CLINIC_CONFIG } from '../config/clinicData';
import { X, Check, RotateCcw, Settings, Info } from 'lucide-react';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ClinicConfig;
  onSave: (newConfig: ClinicConfig) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [form, setForm] = useState<ClinicConfig>({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof ClinicConfig, val: string) => {
    setForm((prev) => ({ ...prev, [field]: val }));
    setSavedSuccess(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setForm({ ...INITIAL_CLINIC_CONFIG });
    setSavedSuccess(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-modal-title"
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-[#F8FAFD] dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0472FD]/10 text-[#0472FD] dark:text-[#3B82F6] flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 id="config-modal-title" className="text-lg font-bold text-[#000069] dark:text-slate-100">
                Configuración de Datos de HUMANIDAR
              </h2>
              <p className="text-xs text-[#64748B] dark:text-slate-400">
                Actualizá los datos de contacto y enlaces en tiempo real
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-xl hover:bg-slate-200/50 dark:hover:bg-slate-800"
            aria-label="Cerrar ventana de configuración"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info banner */}
        <div className="bg-blue-50/70 dark:bg-blue-950/40 px-6 py-3 border-b border-blue-100 dark:border-blue-900/40 flex items-center gap-2 text-xs text-blue-800 dark:text-blue-300">
          <Info className="w-4 h-4 text-[#0472FD] dark:text-[#3B82F6] shrink-0" />
          <span>
            Los cambios se guardan localmente en tu navegador para que puedas probar enlaces reales de WhatsApp y Google Maps.
          </span>
        </div>

        {/* Modal Body: Form */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* WhatsApp Number */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Número de WhatsApp (con código de país sin +)
              </label>
              <input
                type="text"
                value={form.whatsappNumber}
                onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                placeholder="Ej. 5491112345678 o 549XXXXXXXXXX"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
              <span className="text-[11px] text-[#64748B] dark:text-slate-400 mt-1 block">
                Todos los botones de WhatsApp de la web se actualizan automáticamente con este número.
              </span>
            </div>

            {/* Mensaje default WhatsApp */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Mensaje predeterminado de WhatsApp
              </label>
              <input
                type="text"
                value={form.defaultWhatsappMessage}
                onChange={(e) => handleChange('defaultWhatsappMessage', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Teléfono
              </label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Correo Electrónico
              </label>
              <input
                type="text"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
            </div>

            {/* Dirección */}
            <div>
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Dirección
              </label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
            </div>

            {/* Piso / Detalle Dirección */}
            <div>
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Detalle de ubicación / piso
              </label>
              <input
                type="text"
                value={form.addressDetail}
                onChange={(e) => handleChange('addressDetail', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
            </div>

            {/* Horarios */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Horarios de Atención
              </label>
              <input
                type="text"
                value={form.hours}
                onChange={(e) => handleChange('hours', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
            </div>

            {/* Google Maps Directions URL */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Enlace de Google Maps (GOOGLE_MAPS_DIRECTIONS_URL)
              </label>
              <input
                type="text"
                value={form.googleMapsDirectionsUrl}
                onChange={(e) => handleChange('googleMapsDirectionsUrl', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
            </div>

            {/* Instagram URL */}
            <div>
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Instagram URL
              </label>
              <input
                type="text"
                value={form.instagramUrl}
                onChange={(e) => handleChange('instagramUrl', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
            </div>

            {/* Facebook URL */}
            <div>
              <label className="block text-xs font-bold text-[#000069] dark:text-slate-200 uppercase tracking-wider mb-1">
                Facebook URL
              </label>
              <input
                type="text"
                value={form.facebookUrl}
                onChange={(e) => handleChange('facebookUrl', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:border-[#0472FD] focus:ring-1 focus:ring-[#0472FD]"
              />
            </div>

          </div>

          {/* Modal Footer Controls */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer iniciales</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0472FD] hover:bg-[#035ECC] text-white text-xs font-bold rounded-xl shadow-md transition-all"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>¡Guardado con éxito!</span>
                  </>
                ) : (
                  <span>Guardar cambios</span>
                )}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
