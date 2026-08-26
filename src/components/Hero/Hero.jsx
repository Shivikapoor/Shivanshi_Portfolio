import { HiOutlineArrowUpRight, HiOutlineArrowDown } from 'react-icons/hi2';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import SplitText from '../react-bits/SplitText';
import DotGrid from '../react-bits/DotGrid';
import Magnet from '../react-bits/Magnet';
import { profile, links } from '../../data/profile';
import { useTheme } from '../../context/ThemeContext';

export default function Hero() {
  const scrollToWork = () => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [firstName, ...rest] = profile.name.split(' ');
  const lastName = rest.join(' ');

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 pb-16 bg-wash">
      <DotGrid className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900 pointer-events-none" />

      <div className="container-content relative z-10">
        {/* Signature eyebrow: terminal-style prompt in dark theme, a plain
            editorial label in light theme per the light-theme spec. */}
        {isLight ? (
          <p className="eyebrow mb-6">Full-stack developer / India</p>
        ) : (
          <div className="eyebrow mb-6">
            <span aria-hidden="true">~/shivanshi-kapoor</span>
            <span className="text-ink-100">whoami</span>
            <span className="inline-block w-[7px] h-[15px] bg-mint-500 animate-blink" aria-hidden="true" />
          </div>
        )}

        <h1 className="editorial-heading font-semibold text-ink-100 text-[clamp(2.6rem,8vw,6rem)]">
          <SplitText text={firstName} />{' '}
          <SplitText text={lastName} className="font-accent-italic" delay={0.08} />
          <br />
          <span className="text-mint-500">
            <SplitText text="Full-Stack" delay={0.2} />
          </span>{' '}
          <SplitText text="Developer" delay={0.32} />
        </h1>

        <p className="mt-5 font-mono text-xs sm:text-sm text-ink-300 tracking-wide">
          {profile.roleTags.join('  ·  ')}
        </p>

        <p className="body-copy mt-6 max-w-xl sm:text-lg">
          {profile.heroStatement}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Magnet>
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 bg-mint-500 text-ink-900 font-medium text-sm rounded-full px-6 py-3.5 hover:bg-mint-300 transition-colors"
            >
              Explore My Work <HiOutlineArrowDown aria-hidden="true" />
            </button>
          </Magnet>
          <Magnet>
            <a
              href={links.resumePdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink-600 text-ink-100 font-medium text-sm rounded-full px-6 py-3.5 hover:border-mint-500 hover:text-mint-400 transition-colors"
            >
              Download Resume <HiOutlineArrowUpRight aria-hidden="true" />
            </a>
          </Magnet>
        </div>

        <div className="mt-12 flex items-center gap-5 text-ink-300">
          <a href={links.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-mint-400 transition-colors">
            <FiGithub size={20} />
          </a>
          <a href={links.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-mint-400 transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href={links.email} target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:text-mint-400 transition-colors">
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
