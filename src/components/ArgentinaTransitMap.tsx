import React, { useEffect, useRef, useCallback } from 'react';
import geoData from '@/provincias_svg.json';

export interface ArgentinaTransitMapProps {
  className?: string;
}

const CATAMARCA_DEST = {
  id: 'catamarca',
  name: 'Catamarca',
  x: 170,
  y: 132,
};

// Key provincial origin points across Argentina (used exclusively for particle departure coordinates)
const PROVINCE_ORIGINS = [
  { id: 'jujuy', x: 194.5, y: 55.1 },
  { id: 'salta', x: 198.6, y: 67.5 },
  { id: 'formosa', x: 295.4, y: 85.8 },
  { id: 'chaco', x: 290.8, y: 100.2 },
  { id: 'misiones', x: 387.6, y: 120.9 },
  { id: 'tucuman', x: 198.4, y: 122.2 },
  { id: 'corrientes', x: 334, y: 155.6 },
  { id: 'santiago', x: 221.9, y: 148.7 },
  { id: 'larioja', x: 152.8, y: 168.6 },
  { id: 'sanjuan', x: 131.5, y: 200.2 },
  { id: 'cordoba', x: 230.2, y: 217.6 },
  { id: 'santafe', x: 284.5, y: 212 },
  { id: 'entrerios', x: 309, y: 225.7 },
  { id: 'sanluis', x: 180.5, y: 254.3 },
  { id: 'mendoza', x: 137.9, y: 273.7 },
  { id: 'caba', x: 320.5, y: 279.3 },
  { id: 'buenosaires', x: 276, y: 336 },
  { id: 'lapampa', x: 188.4, y: 361.9 },
  { id: 'neuquen', x: 107.7, y: 369.1 },
  { id: 'rionegro', x: 162.1, y: 395.7 },
  { id: 'chubut', x: 143.9, y: 490.9 },
  { id: 'santacruz', x: 113.2, y: 626.5 },
  { id: 'tierradelfuego', x: 169, y: 774 },
];

function buildCurvePath(x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  const bend = dist * 0.16;
  const nx = -dy / (dist || 1);
  const ny = dx / (dist || 1);
  const dir = x1 < x2 ? 1 : -1;

  const cx = midX + nx * bend * dir;
  const cy = midY + ny * bend * dir;

  return `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;
}

export const ArgentinaTransitMap: React.FC<ArgentinaTransitMapProps> = ({
  className = '',
}) => {
  const particlesGroupRef = useRef<SVGGElement>(null);
  const catamarcaHubRef = useRef<SVGGElement>(null);

  // Ripple effect at Catamarca when particle arrives
  const createCatamarcaRipple = useCallback(() => {
    const hub = catamarcaHubRef.current;
    if (!hub) return;

    const svgNS = 'http://www.w3.org/2000/svg';
    const ripple = document.createElementNS(svgNS, 'circle');
    ripple.setAttribute('cx', String(CATAMARCA_DEST.x));
    ripple.setAttribute('cy', String(CATAMARCA_DEST.y));
    ripple.setAttribute('r', '6');
    ripple.setAttribute('fill', 'none');
    ripple.setAttribute('stroke', '#FC3868');
    ripple.setAttribute('stroke-width', '2');
    hub.appendChild(ripple);

    const start = performance.now();
    const dur = 1400; // gentle slow ripple

    function animateRipple(now: number) {
      const t = Math.min((now - start) / dur, 1);
      const radius = 6 + t * 24;
      ripple.setAttribute('r', radius.toFixed(1));
      ripple.style.opacity = (1 - t).toFixed(2);

      if (t < 1) {
        requestAnimationFrame(animateRipple);
      } else {
        ripple.remove();
      }
    }

    requestAnimationFrame(animateRipple);
  }, []);

  // Send single particle dot travelling toward Catamarca at a very calm, slow speed
  const sendSlowParticle = useCallback(
    (startX: number, startY: number, duration = 7500) => {
      const particlesGroup = particlesGroupRef.current;
      if (!particlesGroup) return;

      const svgNS = 'http://www.w3.org/2000/svg';
      const dPath = buildCurvePath(startX, startY, CATAMARCA_DEST.x, CATAMARCA_DEST.y);

      // Create subtle glowing trail path
      const trail = document.createElementNS(svgNS, 'path');
      trail.setAttribute('d', dPath);
      trail.setAttribute('fill', 'none');
      trail.setAttribute('stroke', 'url(#transitTrailGradient)');
      trail.setAttribute('stroke-width', '2.5');
      trail.setAttribute('stroke-linecap', 'round');
      trail.setAttribute('pointer-events', 'none');
      particlesGroup.appendChild(trail);

      const totalLen = trail.getTotalLength();
      const segmentLen = Math.min(65, totalLen * 0.3);

      trail.style.strokeDasharray = `${segmentLen} ${totalLen}`;
      trail.style.strokeDashoffset = `${totalLen}`;

      // Create moving dot in brand pink with soft glow
      const dot = document.createElementNS(svgNS, 'circle');
      dot.setAttribute('r', '4.5');
      dot.setAttribute('fill', '#FC3868');
      dot.setAttribute('stroke', '#FFFFFF');
      dot.setAttribute('stroke-width', '1.6');
      dot.setAttribute('filter', 'url(#transitPinkGlow)');
      dot.setAttribute('pointer-events', 'none');
      particlesGroup.appendChild(dot);

      const startTime = performance.now();

      function step(now: number) {
        const elapsed = now - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);
        // Smooth ease-in-out curve for gentle, relaxed motion
        const ease = -(Math.cos(Math.PI * rawProgress) - 1) / 2;
        const currentDist = ease * totalLen;
        const pt = trail.getPointAtLength(currentDist);

        dot.setAttribute('cx', String(pt.x));
        dot.setAttribute('cy', String(pt.y));
        trail.style.strokeDashoffset = String(totalLen - currentDist);

        if (rawProgress < 1) {
          requestAnimationFrame(step);
        } else {
          dot.remove();
          trail.remove();
          createCatamarcaRipple();
        }
      }

      requestAnimationFrame(step);
    },
    [createCatamarcaRipple]
  );

  // Smooth, continuous and relaxed particle loop (slow motion)
  useEffect(() => {
    let index = 0;

    // Launch initial gentle wave
    const initialTimer = setTimeout(() => {
      sendSlowParticle(PROVINCE_ORIGINS[0].x, PROVINCE_ORIGINS[0].y, 7500);
      setTimeout(() => {
        sendSlowParticle(PROVINCE_ORIGINS[16].x, PROVINCE_ORIGINS[16].y, 8000); // Buenos Aires
      }, 1200);
      setTimeout(() => {
        sendSlowParticle(PROVINCE_ORIGINS[22].x, PROVINCE_ORIGINS[22].y, 8500); // Tierra del Fuego
      }, 2400);
    }, 400);

    // Continuous calm flow: launches a new slow particle every ~2.5 seconds
    const intervalTimer = setInterval(() => {
      const prov = PROVINCE_ORIGINS[index % PROVINCE_ORIGINS.length];
      sendSlowParticle(prov.x, prov.y, 7500);
      index++;
    }, 2400);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [sendSlowParticle]);

  // Province vector geometries from official IGN Georef
  const paths = (geoData as { provincePaths: Record<string, string> }).provincePaths || {};

  return (
    <div
      className={`relative w-full max-w-[480px] mx-auto flex items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 460 830"
        className="w-full h-auto max-h-[680px] drop-shadow-md"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Mapa de la República Argentina con rutas hacia Catamarca"
      >
        <defs>
          {/* Subtle guide trajectory gradient */}
          <linearGradient id="transitGuideGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FC3868" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#7A3DF0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0472FD" stopOpacity="0.55" />
          </linearGradient>

          {/* Soft glowing trail gradient for the moving particle */}
          <linearGradient id="transitTrailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FC3868" stopOpacity="0.05" />
            <stop offset="60%" stopColor="#7A3DF0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FC3868" stopOpacity="0.9" />
          </linearGradient>

          {/* Soft pink glow filter for particles */}
          <filter id="transitPinkGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Catamarca beacon glow filter */}
          <filter id="catamarcaBeaconFilter" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* LAYER 1: Pure Vector Province Shapes (Accurate IGN Geometries) */}
        <g id="layer-provinces-geo">
          {Object.entries(paths).map(([provName, pathD]) => {
            const isCatamarca = provName === 'Catamarca';
            return (
              <path
                key={provName}
                d={pathD}
                className={`transition-colors duration-300 ${
                  isCatamarca
                    ? 'fill-[#0472FD] dark:fill-[#0472FD] stroke-[#000069] dark:stroke-white stroke-[2px]'
                    : 'fill-[#E0F2FE] dark:fill-[#131F37] stroke-[#0284C7] dark:stroke-[#38BDF8]/60 stroke-[1.1px]'
                }`}
              />
            );
          })}
        </g>

        {/* LAYER 2: Delicate Curved Trajectory Guides toward Catamarca */}
        <g id="layer-transit-guides">
          {PROVINCE_ORIGINS.map((prov) => (
            <path
              key={`guide-${prov.id}`}
              d={buildCurvePath(prov.x, prov.y, CATAMARCA_DEST.x, CATAMARCA_DEST.y)}
              fill="none"
              stroke="url(#transitGuideGradient)"
              strokeWidth="1"
              strokeDasharray="2 3"
              className="opacity-30 pointer-events-none"
            />
          ))}
        </g>

        {/* LAYER 3: Animated Travelling Particles (Slow, graceful motion) */}
        <g ref={particlesGroupRef} id="layer-transit-particles" />

        {/* LAYER 4: Destination Hub at Catamarca (Subtle beacon, no clunky badges) */}
        <g ref={catamarcaHubRef} id="layer-catamarca-hub" className="pointer-events-none">
          {/* Subtle pulsating outer ring */}
          <circle
            cx={CATAMARCA_DEST.x}
            cy={CATAMARCA_DEST.y}
            r="12"
            fill="#0472FD"
            opacity="0.2"
            className="animate-ping"
            style={{ animationDuration: '3.5s' }}
          />

          {/* Main beacon circle */}
          <circle
            cx={CATAMARCA_DEST.x}
            cy={CATAMARCA_DEST.y}
            r="6"
            fill="#0472FD"
            stroke="#FFFFFF"
            strokeWidth="2"
            filter="url(#catamarcaBeaconFilter)"
          />

          {/* Glowing core dot */}
          <circle cx={CATAMARCA_DEST.x} cy={CATAMARCA_DEST.y} r="2.8" fill="#FC3868" />
        </g>
      </svg>
    </div>
  );
};
