import { useRef } from 'react';

/**
 * SpotlightCard (React Bits style)
 * Tracks the cursor over a card and paints a soft radial highlight at
 * that position via a CSS custom property, read by the ::before layer.
 * Falls back gracefully on touch devices (no pointer movement = no glow).
 */
export default function SpotlightCard({ children, className = '', spotlightColor = '110, 231, 192' }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card group relative overflow-hidden ${className}`}
      style={{ '--spot-color': spotlightColor }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(var(--spot-color), 0.12), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
