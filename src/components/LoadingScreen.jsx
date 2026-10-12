import React, { useState, useEffect } from 'react';
import { Sparkles as SparklesIcon } from 'lucide-react';

export const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(1); // 1: Star, 2: Orbiting, 3: Flower/Butterfly & Text, 4: Reveal
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete?.();
      setIsVisible(false);
      return;
    }

    const t1 = setTimeout(() => setPhase(2), 600);
    const t2 = setTimeout(() => setPhase(3), 1300);
    const t3 = setTimeout(() => {
      setPhase(4);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 700);
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    onComplete?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-700 ${
        phase === 4 ? 'opacity-0 backdrop-blur-none pointer-events-none' : 'opacity-100 backdrop-blur-xl'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #FFF9F3 0%, #F8DDE8 65%, #DCD5F7 100%)',
      }}
      role="dialog"
      aria-label="Welcome Loading Animation"
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 text-xs uppercase tracking-widest text-enchanted-plum/60 hover:text-enchanted-plum px-3 py-1.5 rounded-full border border-enchanted-rose/40 hover:border-enchanted-rose transition-colors bg-white/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-enchanted-rose"
      >
        Skip Intro ✦
      </button>

      {/* Central Morphing Animation */}
      <div className="relative w-36 h-36 flex items-center justify-center">
        {/* Orbiting sparkles */}
        {phase >= 2 && (
          <div className="absolute inset-0 pointer-events-none animate-spin-slow">
            <span
              className="absolute top-0 left-1/2 -translate-x-1/2 text-enchanted-gold text-lg animate-pulse"
              style={{ filter: 'drop-shadow(0 0 8px rgba(215, 183, 122, 0.9))' }}
            >
              ✦
            </span>
            <span
              className="absolute bottom-1 right-2 text-enchanted-rose text-sm animate-pulse"
              style={{ filter: 'drop-shadow(0 0 6px rgba(233, 167, 192, 0.9))' }}
            >
              ✧
            </span>
            <span
              className="absolute top-1/2 left-0 -translate-y-1/2 text-enchanted-lavenderDark text-sm"
            >
              ⋆
            </span>
          </div>
        )}

        {/* Center Star -> Butterfly / Flower */}
        <div
          className={`transition-all duration-700 transform flex items-center justify-center ${
            phase === 1
              ? 'scale-75 opacity-90'
              : phase === 2
              ? 'scale-110 opacity-100'
              : 'scale-125 opacity-100'
          }`}
        >
          {phase < 3 ? (
            /* Glowing Central Star */
            <div className="relative">
              <svg
                className="w-16 h-16 text-enchanted-gold animate-pulse-glow"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <div className="absolute inset-0 bg-enchanted-gold/30 rounded-full blur-xl animate-pulse" />
            </div>
          ) : (
            /* Transformed Delicate Flower & Butterfly */
            <div className="relative animate-float-medium">
              <svg
                className="w-20 h-20 text-enchanted-rose filter drop-shadow-[0_0_15px_rgba(233,167,192,0.7)]"
                viewBox="0 0 100 100"
                fill="none"
              >
                {/* Delicate Floral / Butterfly Wings */}
                <path
                  d="M50 50 C30 20, 10 30, 25 55 C35 70, 48 58, 50 50 Z"
                  fill="url(#petalGradient1)"
                  className="opacity-90"
                />
                <path
                  d="M50 50 C70 20, 90 30, 75 55 C65 70, 52 58, 50 50 Z"
                  fill="url(#petalGradient2)"
                  className="opacity-90"
                />
                <path
                  d="M50 50 C35 60, 20 80, 40 85 C50 82, 50 65, 50 50 Z"
                  fill="url(#petalGradient1)"
                  className="opacity-80"
                />
                <path
                  d="M50 50 C65 60, 80 80, 60 85 C50 82, 50 65, 50 50 Z"
                  fill="url(#petalGradient2)"
                  className="opacity-80"
                />
                {/* Center bud & antennae */}
                <circle cx="50" cy="50" r="4" fill="#D7B77A" />
                <path d="M50 48 Q44 38, 40 36 M50 48 Q56 38, 60 36" stroke="#D7B77A" strokeWidth="1.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="petalGradient1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F8DDE8" />
                    <stop offset="100%" stopColor="#E9A7C0" />
                  </linearGradient>
                  <linearGradient id="petalGradient2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DCD5F7" />
                    <stop offset="100%" stopColor="#E9A7C0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Gentle Poetic Text */}
      <div className="mt-6 text-center px-4 overflow-hidden h-14">
        <p
          className={`font-serif text-xl sm:text-2xl text-enchanted-plum italic transition-all duration-700 transform ${
            phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          “A little world of her own...”
        </p>
        <span
          className={`font-cursive text-sm text-enchanted-roseDark block mt-1 transition-all duration-500 delay-200 ${
            phase >= 3 ? 'opacity-90' : 'opacity-0'
          }`}
        >
          entering the enchanted garden ✦
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
