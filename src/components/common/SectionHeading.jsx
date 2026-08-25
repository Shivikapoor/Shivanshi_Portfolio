import ScrollReveal from '../react-bits/ScrollReveal';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <ScrollReveal>
      <div className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="editorial-heading text-4xl sm:text-5xl font-semibold text-ink-100">
          {title}
        </h2>
        {subtitle && <p className="body-copy mt-4 sm:text-lg">{subtitle}</p>}
      </div>
    </ScrollReveal>
  );
}
