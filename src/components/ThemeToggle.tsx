import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={`relative inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#0472FD] focus-visible:outline-offset-2 ${
        isDark
          ? 'bg-slate-800 text-amber-300 hover:bg-slate-700 hover:text-amber-200 border border-slate-700 shadow-sm'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#000069] border border-slate-200/80 shadow-xs'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun Icon for switching to light mode */}
        <Sun
          className={`w-4 h-4 transition-all duration-300 transform ${
            isDark
              ? 'rotate-0 scale-100 opacity-100 text-amber-300'
              : 'rotate-90 scale-0 opacity-0 absolute'
          }`}
          aria-hidden="true"
        />

        {/* Moon Icon for switching to dark mode */}
        <Moon
          className={`w-4 h-4 transition-all duration-300 transform ${
            isDark
              ? '-rotate-90 scale-0 opacity-0 absolute'
              : 'rotate-0 scale-100 opacity-100 text-slate-700'
          }`}
          aria-hidden="true"
        />
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-semibold">
          {isDark ? 'Modo claro' : 'Modo oscuro'}
        </span>
      )}
    </button>
  );
};
