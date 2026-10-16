import React from 'react';

/**
 * Visual connectors between sections inspired by the HUMANIDAR logo's infinity ribbon.
 * Color transition: #0472FD -> #7A3DF0 -> #FC3868
 * Ensures smooth, organic continuity between sections so the page feels like a single narrative.
 */

export const SectionWaveConnector: React.FC<{
  fromBg?: string;
  toBg?: string;
  fromType?: 'plain' | 'alt';
  toType?: 'plain' | 'alt';
  flip?: boolean;
  className?: string;
}> = ({
  fromBg,
  toBg,
  fromType = 'plain',
  toType = 'alt',
  flip = false,
  className = '',
}) => {
  const gradientId = React.useId().replace(/:/g, '');

  const fromClass =
    fromType === 'alt'
      ? 'bg-[#F8FAFD] dark:bg-[#0B1120]'
      : 'bg-white dark:bg-[#070A14]';

  const toColorClass =
    toType === 'alt'
      ? 'text-[#F8FAFD] dark:text-[#0B1120]'
      : 'text-white dark:text-[#070A14]';

  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none pointer-events-none -my-1 transition-colors duration-200 ${fromClass} ${className}`}
      style={fromBg ? { backgroundColor: fromBg } : undefined}
      aria-hidden="true"
    >
      <svg
        className={`w-full h-12 sm:h-20 lg:h-24 ${toColorClass} ${flip ? 'scale-x-[-1]' : ''}`}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`grad-connector-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0472FD" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#7A3DF0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FC3868" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Transition shape filled with the target section background */}
        <path
          d="M0,40 C320,110 480,10 760,70 C1040,130 1240,30 1440,60 L1440,120 L0,120 Z"
          fill={toBg || 'currentColor'}
        />

        {/* Delicate organic ribbon line floating on the wave border */}
        <path
          d="M0,40 C320,110 480,10 760,70 C1040,130 1240,30 1440,60"
          stroke={`url(#grad-connector-${gradientId})`}
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="6 8"
        />
      </svg>
    </div>
  );
};

export const HeroToAboutConnector: React.FC = () => {
  return (
    <div className="relative w-full -mt-1 overflow-hidden pointer-events-none select-none z-10 bg-slate-950">
      <svg
        className="w-full h-16 sm:h-24 lg:h-28 text-[#F8FAFD] dark:text-[#0B1120] transition-colors duration-200"
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroAboutRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0472FD" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7A3DF0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FC3868" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Seamless fill into About section bg */}
        <path
          d="M0,60 C380,140 720,20 1080,90 C1260,125 1380,80 1440,70 L1440,160 L0,160 Z"
          fill="currentColor"
        />

        {/* Fluid connection ribbon */}
        <path
          d="M0,60 C380,140 720,20 1080,90 C1260,125 1380,80 1440,70"
          stroke="url(#heroAboutRibbon)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Subtle accent dots */}
        <circle cx="380" cy="118" r="4.5" fill="#0472FD" />
        <circle cx="1080" cy="90" r="4.5" fill="#FC3868" />
      </svg>
    </div>
  );
};

export const AboutToServicesConnector: React.FC = () => {
  return (
    <div className="relative w-full -mt-2 overflow-hidden pointer-events-none select-none">
      <svg
        className="w-full h-20 sm:h-28 text-white dark:text-[#070A14] transition-colors duration-200"
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="aboutServicesRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FC3868" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#7A3DF0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0472FD" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <path
          d="M0,80 C260,20 600,120 940,50 C1180,0 1360,70 1440,60 L1440,140 L0,140 Z"
          fill="currentColor"
        />

        <path
          d="M0,80 C260,20 600,120 940,50 C1180,0 1360,70 1440,60"
          stroke="url(#aboutServicesRibbon)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
};

export const ContactToFooterConnector: React.FC = () => {
  return (
    <div className="relative w-full -mt-1 overflow-hidden pointer-events-none select-none">
      <svg
        className="w-full h-16 sm:h-24 text-[#000069] dark:text-[#030514] transition-colors duration-200"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="footerRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0472FD" />
            <stop offset="50%" stopColor="#7A3DF0" />
            <stop offset="100%" stopColor="#FC3868" />
          </linearGradient>
        </defs>

        <path
          d="M0,50 C360,110 720,10 1080,70 C1260,100 1380,50 1440,40 L1440,120 L0,120 Z"
          fill="currentColor"
        />

        <path
          d="M0,50 C360,110 720,10 1080,70 C1260,100 1380,50 1440,40"
          stroke="url(#footerRibbon)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};
