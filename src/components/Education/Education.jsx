import ScrollReveal from '../react-bits/ScrollReveal';
import PlaceholderBadge from '../common/PlaceholderBadge';
import { education } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="section bg-night border-y border-night-soft">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3" style={{ color: '#a9d7c8' }}>
            // education
          </p>
          <h2 className="editorial-heading text-4xl sm:text-5xl font-semibold text-night-text">
            Education
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 80}>
              <div className="rounded-lg border border-night-soft bg-white/5 p-6 h-full">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-night-text">{edu.degree}</h3>
                  {edu.isPlaceholder && <PlaceholderBadge>fill in</PlaceholderBadge>}
                </div>
                <p className="text-mint-500 text-sm mt-1.5" style={{ color: '#a9d7c8' }}>
                  {edu.institution}
                </p>
                <div className="flex items-center justify-between mt-4 text-sm text-night-muted">
                  <span>{edu.location}</span>
                  <span className="font-mono">{edu.dates}</span>
                </div>
                <p className="mt-3 font-mono text-sm text-night-text">{edu.score}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
