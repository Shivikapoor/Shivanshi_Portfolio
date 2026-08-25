import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../react-bits/ScrollReveal';
import LogoLoop from '../react-bits/LogoLoop';
import PlaceholderBadge from '../common/PlaceholderBadge';
import { skillCategories, skillEvidence } from '../../data/skills';

export default function Skills() {
  const [active, setActive] = useState(null);

  const handleSelect = (skill) => setActive((prev) => (prev === skill ? null : skill));

  return (
    <section id="skills" className="section bg-wash">
      <div className="container-content">
        <SectionHeading
          eyebrow="skills"
          title="Skills"
          subtitle="Organized by category. Skills with a dot have shipped in a real project — click one to see where."
        />

        <div className="mt-14 space-y-9">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 60}>
              <div>
                <div className="flex items-center gap-2 mb-3.5">
                  <h3 className="font-mono text-xs uppercase tracking-wide text-ink-400">{cat.label}</h3>
                  {cat.isPlaceholder && <PlaceholderBadge>confirm tools</PlaceholderBadge>}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <LogoLoop
                      key={skill}
                      skill={skill}
                      active={active === skill}
                      onSelect={handleSelect}
                      hasEvidence={Boolean(skillEvidence[skill])}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div
          className={`mt-10 overflow-hidden transition-all duration-300 ${active ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          aria-live="polite"
        >
          {active && skillEvidence[active] && (
            <div className="rounded-lg border border-ink-700 bg-ink-800 p-5">
              <p className="font-mono text-xs text-mint-500 mb-2">used in //</p>
              <div className="flex flex-wrap gap-2">
                {skillEvidence[active].map((usage) => (
                  <span key={usage} className="text-sm text-ink-100 border border-ink-600 rounded-full px-3 py-1 bg-ink-900/40">
                    {usage}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
