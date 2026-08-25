import { useEffect, useRef } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * DotGrid (React Bits style)
 * A quiet, canvas-drawn dot grid with a soft radial mask around the cursor.
 * Used once, as the hero background, per the "one subtle background" guidance.
 * Reads its colors from the current theme's CSS variables so it repaints
 * correctly when the light/dark toggle is used.
 */
export default function DotGrid({ className = '' }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const colors = useRef({ accent: '110, 231, 192', muted: '138, 147, 166' });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue('--c-accent').trim().split(/\s+/).join(', ');
      const muted = styles.getPropertyValue('--c-text-muted').trim().split(/\s+/).join(', ');
      colors.current = {
        accent: accent || colors.current.accent,
        muted: muted || colors.current.muted,
      };
    };
    readColors();

    const observer = new MutationObserver(readColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let width, height, dpr;

    const spacing = 26;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', () => (mouse.current = { x: -9999, y: -9999 }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dx = x - mouse.current.x;
          const dy = y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / 180);
          const radius = 1 + proximity * 1.6;
          const alpha = 0.14 + proximity * 0.5;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle =
            proximity > 0.05
              ? `rgba(${colors.current.accent}, ${alpha})`
              : `rgba(${colors.current.muted}, ${alpha * 0.6})`;
          ctx.fill();
        }
      }
      if (!reducedMotion) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
