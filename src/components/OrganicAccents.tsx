import React from 'react';

/**
 * Organic decorative curves and smooth connection lines inspired by the HUMANIDAR logo symbol.
 * Enforces the brand rule:
 * - Curvas suaves, líneas fluidas, formas orgánicas, conexiones, transiciones suaves.
 * - Degradado #0472FD -> #7A3DF0 -> #FC3868
 * - NO abusar, mantener el 60-70% blanco/neutro.
 */

export const ConnectionRibbon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 500 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none opacity-25 ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0472FD" />
        <stop offset="50%" stopColor="#7A3DF0" />
        <stop offset="100%" stopColor="#FC3868" />
      </linearGradient>
    </defs>
    <path
      d="M10,80 C120,10 240,110 360,40 C420,5 470,60 495,30"
      stroke="url(#ribbonGrad)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="4 8"
    />
    <circle cx="10" cy="80" r="5" fill="#0472FD" />
    <circle cx="495" cy="30" r="5" fill="#FC3868" />
  </svg>
);

export const AmbientGlow: React.FC<{
  color?: 'blue' | 'pink' | 'purple' | 'brand';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ color = 'brand', size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-80 h-80',
    lg: 'w-96 h-96 sm:w-[32rem] sm:h-[32rem]',
  };

  const bgClasses = {
    blue: 'bg-[#0472FD]/10',
    pink: 'bg-[#FC3868]/10',
    purple: 'bg-[#7A3DF0]/10',
    brand: 'bg-gradient-to-tr from-[#0472FD]/10 via-[#7A3DF0]/08 to-[#FC3868]/10',
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none -z-10 ${sizeClasses[size]} ${bgClasses[color]} ${className}`}
      aria-hidden="true"
    />
  );
};
