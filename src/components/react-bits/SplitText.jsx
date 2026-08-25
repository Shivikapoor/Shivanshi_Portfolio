import { motion } from 'framer-motion';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * SplitText (React Bits style)
 * Splits the given text into words and staggers them in on mount.
 * Used once, in the hero, per the "one subtle text animation" guidance.
 */
export default function SplitText({ text, className = '', delay = 0, as: Tag = 'span' }) {
  const reducedMotion = useReducedMotion();
  const words = text.split(' ');

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.06,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
