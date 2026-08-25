import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../react-bits/ScrollReveal';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section bg-ink-800/30 border-y border-ink-700">
      <div className="container-content">
        <SectionHeading eyebrow="experience" title="Experience" subtitle="Where I've worked and what I built while there." />

        <div className="mt-14 space-y-10">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 100}>
              <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-10 border-t border-ink-700 pt-8">
                <div>
                  <p className="font-mono text-xs text-ink-400">{job.dates}</p>
                  <p className="text-xs text-ink-500 mt-1">{job.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink-100">{job.role}</h3>
                  <p className="text-mint-500 text-sm mt-1">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b, idx) => (
                      <li key={idx} className="body-copy text-sm sm:text-base flex gap-2.5">
                        <span className="text-mint-500 mt-1 shrink-0" aria-hidden="true">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="font-mono text-[11px] text-ink-300 border border-ink-600 rounded-full px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
