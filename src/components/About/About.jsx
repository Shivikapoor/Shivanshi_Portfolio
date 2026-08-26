import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../react-bits/ScrollReveal';
import PlaceholderBadge from '../common/PlaceholderBadge';
import { profile } from '../../data/profile';
import { useTheme } from '../../context/ThemeContext';

const timeline = [
  { year: '2021', label: 'Started BCA', detail: 'Poonam Chand Gupta Vocational College (DAVV), Khandwa' },
  { year: '2024', label: 'Started MCA', detail: 'Shri G.S. Institute of Technology and Science, Indore' },
  { year: '2025', label: 'Virtual Software Engineering Experience', detail: 'J.P. Morgan Chase (Forage)' },
  { year: '2026', label: 'Associate Software Engineer', detail: 'Kavach Data Privacy Services' },
];

export default function About() {
  const { theme } = useTheme();

  if (theme === 'light') {
    return (
      <section id="about" className="section">
        <div className="container-content grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <div>
              <p className="eyebrow mb-3">about</p>
              <h2 className="editorial-heading text-4xl sm:text-5xl font-semibold text-ink-100">
                Product-minded <span className="font-accent-italic">by default</span>.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-8 -left-2 sm:-left-6 font-accent-italic text-coral text-[6rem] sm:text-[8rem] leading-none select-none opacity-90"
              >
                “
              </span>
              <p className="relative text-xl sm:text-2xl text-ink-100 leading-snug font-medium pl-6 sm:pl-8">
                {profile.summary}
              </p>
              <div className="mt-6 pl-6 sm:pl-8 flex items-start gap-2">
                <p className="text-ink-400 text-sm leading-relaxed">
                  I got into software because I love turning ideas into something real, interactive, and useful. I enjoy building things, solving problems, and figuring out why something broke at 2 AM 😭. Outside of code, I’m always curious, love learning new things, and enjoy exploring creative ideas and experiences that keep me inspired.

                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="section">
      <div className="container-content grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div>
          <SectionHeading eyebrow="about" title="About Me" />
          <ScrollReveal delay={100}>
            <p className="body-copy mt-6 sm:text-lg">{profile.summary}</p>
            <p className="body-copy mt-4">
              She's an MCA student at SGSITS, Indore, with a full-stack foundation in the MERN stack and a growing
              interest in AI-powered applications — currently exploring LLM integration on{' '}
              <span className="text-ink-100">Virtual CA</span>, an AI financial advisor.
            </p>
          </ScrollReveal>
        </div>

        <div className="border-l border-ink-700 pl-6 sm:pl-8">
          {timeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 90}>
              <div className="relative pb-9 last:pb-0">
                <span className="absolute -left-[29px] sm:-left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-mint-500 ring-4 ring-ink-900" />
                <p className="font-mono text-xs text-mint-500 mb-1">{item.year}</p>
                <p className="font-display text-ink-100 font-medium">{item.label}</p>
                <p className="text-sm text-ink-400 mt-0.5">{item.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
