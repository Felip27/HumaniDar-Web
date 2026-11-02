import React from 'react';

interface HumanidarLogoProps {
  /**
   * Layout orientation:
   * - 'vertical': stacked lockup matching the original logo graphic (symbol top, text bottom)
   * - 'horizontal': compact lockup for navbar/footer (symbol left, typography right)
   * - 'symbol-only': only the connected infinity-human icon
   */
  variant?: 'vertical' | 'horizontal' | 'symbol-only';
  /**
   * Size presets or custom height
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * If true, adapts dark-blue text parts to white/light slate for navy or dark footers
   */
  isDark?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

export const HumanidarLogo: React.FC<HumanidarLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  isDark = false,
  className = '',
  showSubtitle = true,
}) => {
  // Sizing tokens for the official symbol image
  const symbolSizes = {
    sm: { width: 36, height: 26 },
    md: { width: 48, height: 34 },
    lg: { width: 68, height: 48 },
    xl: { width: 92, height: 65 },
  };

  const currentSymbolSize = symbolSizes[size] || symbolSizes.md;

  const renderSymbol = (scale: number = 1) => (
    <img
      src="/logo_humanidar_symbol.png"
      alt="HumaniDar Símbolo"
      style={{
        width: currentSymbolSize.width * scale,
        height: currentSymbolSize.height * scale,
      }}
      className="shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
      loading="eager"
    />
  );

  const navyTextColor = isDark ? '#FFFFFF' : 'var(--logo-navy-color, #000069)';
  const subtitleColor = isDark ? '#CBD5E1' : 'var(--logo-sub-color, #000069)';

  if (variant === 'symbol-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} title="HUMANIDAR">
        {renderSymbol(1)}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
        {renderSymbol(1.2)}

        {/* Wordmark HumaniDar using official Poppins font */}
        <div className="mt-2.5 flex items-baseline tracking-tight font-extrabold leading-none font-['Poppins',sans-serif]">
          <span style={{ color: '#0472FD' }} className="text-2xl sm:text-3xl font-extrabold">
            Humani
          </span>
          <span style={{ color: '#FC3868' }} className="text-2xl sm:text-3xl font-extrabold">
            D
          </span>
          <span style={{ color: navyTextColor }} className="text-2xl sm:text-3xl font-extrabold">
            ar
          </span>
        </div>

        {/* Tagline: CENTRO MÉDICO RENAL */}
        {showSubtitle && (
          <span
            style={{ color: subtitleColor }}
            className="mt-1.5 text-[9px] sm:text-[10.5px] font-bold tracking-[0.22em] uppercase leading-tight opacity-95 font-['Poppins',sans-serif]"
          >
            CENTRO MÉDICO RENAL
          </span>
        )}
      </div>
    );
  }

  // Horizontal variant (default, optimized for Navbar and Footer)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {renderSymbol(1)}

      <div className="flex flex-col justify-center">
        {/* Wordmark HumaniDar */}
        <div className="flex items-baseline tracking-tight font-extrabold leading-none font-['Poppins',sans-serif]">
          <span
            style={{ color: '#0472FD' }}
            className={`font-extrabold ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'}`}
          >
            Humani
          </span>
          <span
            style={{ color: '#FC3868' }}
            className={`font-extrabold ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'}`}
          >
            D
          </span>
          <span
            style={{ color: navyTextColor }}
            className={`font-extrabold ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'}`}
          >
            ar
          </span>
        </div>

        {/* Tagline */}
        {showSubtitle && (
          <span
            style={{ color: subtitleColor }}
            className={`font-bold tracking-[0.2em] uppercase leading-tight font-['Poppins',sans-serif] ${
              size === 'sm' ? 'text-[7.5px]' : size === 'lg' ? 'text-[10px]' : 'text-[8.5px]'
            }`}
          >
            CENTRO MÉDICO RENAL
          </span>
        )}
      </div>
    </div>
  );
};
