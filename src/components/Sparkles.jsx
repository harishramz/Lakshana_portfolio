import React, { useEffect, useState, useRef } from 'react';

export const Sparkles = ({ isAmbientActive = true }) => {
  const [cursorSparkles, setCursorSparkles] = useState([]);
  const [petals, setPetals] = useState([]);
  const canvasRef = useRef(null);

  // Initialize gentle background petals
  useEffect(() => {
    const generatedPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      color: i % 3 === 0 ? '#F8DDE8' : i % 3 === 1 ? '#E9A7C0' : '#DCD5F7',
    }));
    setPetals(generatedPetals);
  }, []);

  // Desktop cursor trail sparkles
  useEffect(() => {
    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = performance.now();
      // Throttle sparkle creation to once every 65ms
      if (now - lastTime < 65) return;
      lastTime = now;

      // Don't spawn if window is small (mobile touch)
      if (window.innerWidth < 768) return;

      const newSparkle = {
        id: Math.random() + now,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 7 + 4,
        color: ['#E9A7C0', '#DCD5F7', '#D7B77A', '#FFF9F3'][Math.floor(Math.random() * 4)],
        symbol: ['✦', '✧', '⋆', '•'][Math.floor(Math.random() * 4)],
      };

      setCursorSparkles((prev) => [...prev.slice(-14), newSparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cleanup old cursor sparkles
  useEffect(() => {
    if (cursorSparkles.length === 0) return;
    const timer = setTimeout(() => {
      setCursorSparkles((prev) => prev.slice(1));
    }, 600);
    return () => clearTimeout(timer);
  }, [cursorSparkles]);

  // Canvas starfield with gentle twinking particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create 35 twinkling ambient stars
    const stars = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.008,
      color: Math.random() > 0.4 ? '233, 167, 192' : '215, 183, 122', // Rose or Gold
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.1) {
          star.speed = -star.speed;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${Math.abs(star.alpha) * 0.7})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${star.color}, 0.8)`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {/* Canvas ambient starfield */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating Rose & Lavender Petals */}
      {isAmbientActive &&
        petals.map((petal) => (
          <div
            key={petal.id}
            className="petal-particle"
            style={{
              left: `${petal.left}vw`,
              top: '-20px',
              width: `${petal.size}px`,
              height: `${petal.size * 1.25}px`,
              backgroundColor: petal.color,
              animation: `driftPetal ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
              transform: `rotate(${petal.rotation}deg)`,
            }}
          />
        ))}

      {/* Cursor trailing sparkles (Desktop only) */}
      {cursorSparkles.map((sp) => (
        <span
          key={sp.id}
          className="fixed pointer-events-none transition-all duration-500 ease-out select-none"
          style={{
            left: `${sp.x}px`,
            top: `${sp.y}px`,
            fontSize: `${sp.size * 2}px`,
            color: sp.color,
            textShadow: `0 0 8px ${sp.color}`,
            transform: 'translate(-50%, -50%)',
            opacity: 0.9,
          }}
        >
          {sp.symbol}
        </span>
      ))}
    </div>
  );
};

export default Sparkles;
