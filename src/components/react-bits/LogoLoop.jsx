/**
 * LogoLoop (React Bits style, adapted)
 * Rather than a marquee of logos, this renders skill chips that lift and
 * highlight on hover/focus — the "subtle hover / magnetic effect" called
 * for in the skills section. When a skill is active it also drives the
 * "skills -> evidence" panel (see Skills.jsx).
 */
export default function LogoLoop({ skill, active, onSelect, hasEvidence }) {
  return (
    <button
      type="button"
      onClick={() => hasEvidence && onSelect(skill)}
      aria-pressed={active}
      className={`group relative px-3.5 py-1.5 rounded-full font-mono text-xs sm:text-sm border transition-all duration-200
        ${active ? 'border-mint-500 text-mint-500 bg-mint-500/10' : 'border-ink-600 text-ink-200 hover:border-mint-600 hover:text-mint-300 hover:-translate-y-0.5'}
        ${hasEvidence ? 'cursor-pointer' : 'cursor-default'}
      `}
    >
      {skill}
      {hasEvidence && (
        <span className="ml-1.5 text-ink-400 group-hover:text-mint-500 text-[10px] align-super">●</span>
      )}
    </button>
  );
}
