import React from 'react';

interface HumanidarLogoProps {
  /**
   * Layout orientation:
   * - 'vertical': stacked lockup matching the original logo graphic (symbol top, text bottom)
   * - 'horizontal': compact lockup for navbar (symbol left, typography right)
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
  // Gradient definitions unique ID to prevent SVG gradient collision
  const gradientId = React.useId().replace(/:/g, '');

  // Sizing tokens
  const symbolSizes = {
    sm: { width: 36, height: 26 },
    md: { width: 48, height: 34 },
    lg: { width: 68, height: 48 },
    xl: { width: 92, height: 65 },
  };

  const currentSymbolSize = symbolSizes[size] || symbolSizes.md;

  /**
   * Vector graphic of the official Humanidar symbol:
   * - Two human heads (left: #0472FD, right: #FC3868)
   * - An interconnected infinity ribbon flowing smoothly from #0472FD through #7A3DF0 to #FC3868
   */
  const renderSymbol = (scale: number = 1) => (
    <svg
      width={currentSymbolSize.width * scale}
      height={currentSymbolSize.height * scale}
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      <defs>
        {/* Official 3-color brand ribbon gradient */}
        <linearGradient
          id={`humanidar-grad-${gradientId}`}
          x1="15"
          y1="50"
          x2="125"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0472FD" />
          <stop offset="50%" stopColor="#7A3DF0" />
          <stop offset="100%" stopColor="#FC3868" />
        </linearGradient>

        <linearGradient
          id={`humanidar-cross-${gradientId}`}
          x1="50"
          y1="35"
          x2="90"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2E5BF8" />
          <stop offset="50%" stopColor="#7A3DF0" />
          <stop offset="100%" stopColor="#E0328E" />
        </linearGradient>
      </defs>

      {/* Left Human Head: Institutional Blue #0472FD */}
      <circle cx="46" cy="18" r="9.5" fill="#0472FD" />

      {/* Right Human Head: Vibrant Pink #FC3868 */}
      <circle cx="94" cy="18" r="9.5" fill="#FC3868" />

      {/*
        The Connected Infinity Ribbon:
        Constructed with precise cubic Bézier curves forming the smooth, balanced
        figure-eight ribbon that embraces both human figures.
      */}
      <path
        d="M 46 36 
           C 25 36 12 50 12 66 
           C 12 82 27 94 46 94 
           C 62 94 72 82 82 72 
           L 94 60 
           C 104 50 114 36 126 50
           C 134 60 134 76 122 88
           C 112 96 98 94 88 84
           L 70 66
           C 58 54 48 40 34 40"
        stroke={`url(#humanidar-grad-${gradientId})`}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ display: 'none' }}
      />

      {/* Refined primary infinity path with balanced loops */}
      <path
        d="M 46,38
           C 26,38 14,50 14,66
           C 14,81 27,92 45,92
           C 61,92 72,81 83,70
           C 95,58 107,46 122,58
           C 131,65 131,77 122,86
           C 111,94 97,92 86,81
           C 74,69 63,58 48,46
           C 39,39 28,42 22,50"
        stroke={`url(#humanidar-grad-${gradientId})`}
        strokeWidth="11.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
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

        {/* Wordmark HumaniDar */}
        <div className="mt-2.5 flex items-baseline tracking-tight font-bold leading-none font-display">
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
            className="mt-1.5 text-[9px] sm:text-[10.5px] font-semibold tracking-[0.22em] uppercase leading-tight opacity-95"
          >
            CENTRO MÉDICO RENAL
          </span>
        )}
      </div>
    );
  }

  // Horizontal variant (default, optimized for sticky Navbar and clean top headers)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {renderSymbol(1)}

      <div className="flex flex-col justify-center">
        {/* Wordmark HumaniDar */}
        <div className="flex items-baseline tracking-tight font-bold leading-none font-display">
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
            className={`font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase leading-tight ${
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
