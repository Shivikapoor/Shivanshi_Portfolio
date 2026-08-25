import { useRef } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * Magnet (React Bits style)
 * Wraps a CTA and nudges it toward the cursor within a small radius,
 * snapping back on mouse leave. Disabled under reduced-motion.
 */
export default function Magnet({ children, className = '', strength = 18 }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  const handleMove = (e) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
