import { useState } from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../react-bits/ScrollReveal';
import PlaceholderBadge from '../common/PlaceholderBadge';
import { certifications, certificationFilters } from '../../data/certifications';

export default function Certifications() {
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All' ? certifications : certifications.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="section">
      <div className="container-content">
        <SectionHeading eyebrow="certifications" title="Certifications" />

        <div className="mt-8 flex flex-wrap gap-2">
          {certificationFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
                filter === f
                  ? 'border-mint-500 text-mint-500 bg-mint-500/10'
                  : 'border-ink-600 text-ink-300 hover:border-ink-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="mt-10 rounded-lg border border-dashed border-ink-600 p-10 text-center">
            <p className="text-ink-400">No certifications in this category yet.</p>
          </div>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((cert, i) => (
              <ScrollReveal key={cert.id} delay={i * 70}>
                <div className="rounded-lg border border-ink-700 bg-ink-800/60 p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-wide text-ink-400 border border-ink-600 rounded-full px-2 py-0.5">
                      {cert.category}
                    </span>
                    {cert.isPlaceholder && <PlaceholderBadge>placeholder</PlaceholderBadge>}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink-100 mt-4">{cert.name}</h3>
                  <p className="text-sm text-mint-500 mt-1">{cert.issuer}</p>
                  <p className="body-copy text-sm mt-3 flex-1">{cert.description}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                    <span className="font-mono">Completed: {cert.date}</span>
                    {cert.credentialId && <span className="font-mono">ID: {cert.credentialId}</span>}
                  </div>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-mint-500 hover:text-mint-300 font-medium"
                    >
                      Verify Credential <HiOutlineArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
