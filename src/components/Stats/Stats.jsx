import ScrollReveal from '../react-bits/ScrollReveal';
import { quickStats } from '../../data/profile';

export default function Stats() {
  return (
    <section className="border-y border-night-soft bg-night">
      <div className="container-content py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {quickStats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div className="lg:border-l lg:border-night-soft lg:pl-6 first:lg:border-l-0 first:lg:pl-0">
                <p className="font-mono text-[11px] uppercase tracking-wide text-night-muted mb-1.5">{stat.label}</p>
                <p className="font-display text-lg sm:text-xl font-semibold text-night-text">{stat.value}</p>
                <p className="text-xs text-night-muted mt-1">{stat.caption}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
