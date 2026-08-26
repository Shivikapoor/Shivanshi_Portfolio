import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineArrowUpRight, HiOutlineArrowRight } from 'react-icons/hi2';
import { FiGithub } from 'react-icons/fi';
import ScrollReveal from '../components/react-bits/ScrollReveal';
import PlaceholderBadge from '../components/common/PlaceholderBadge';
import { getProjectBySlug, projects } from '../data/projects';

const isPlaceholderText = (text) => {
  if (Array.isArray(text)) {
    return text.some((item) => typeof item === 'string' && item.startsWith('[PLACEHOLDER]'));
  }

  return typeof text === 'string' && text.startsWith('[PLACEHOLDER]');
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const cs = project.caseStudy;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-28 sm:pt-32 pb-24">
      <div className="container-content">
        <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-mint-400">
          <HiOutlineArrowLeft aria-hidden="true" /> Back to work
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="eyebrow mb-3">{project.order} — case study</p>
          <h1 className="editorial-heading text-4xl sm:text-6xl font-semibold text-ink-100">
            {project.name}
          </h1>
          <p className="body-copy mt-4 sm:text-lg">{project.tagline}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-ink-400">{project.period}</span>
            {project.status && (
              <span className="font-mono text-[10px] uppercase tracking-wide text-amber-500 border border-amber-500/40 bg-amber-500/10 rounded-full px-2.5 py-1">
                {project.status}
              </span>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.links.live.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm border border-ink-600 rounded-full px-4 py-2 text-ink-100 hover:border-mint-500 hover:text-mint-400"
            >
              Live Demo <HiOutlineArrowUpRight />
              {project.links.live.isPlaceholder && <PlaceholderBadge>link</PlaceholderBadge>}
            </a>
            <a
              href={project.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm border border-ink-600 rounded-full px-4 py-2 text-ink-100 hover:border-mint-500 hover:text-mint-400"
            >
              <FiGithub /> GitHub
              {project.links.github.isPlaceholder && <PlaceholderBadge>link</PlaceholderBadge>}
            </a>
          </div>
        </header>

        {/* Cover image */}
        <ScrollReveal delay={80}>
          <div className="mt-12 aspect-video rounded-lg border border-ink-700 bg-ink-800/60 overflow-hidden">
            {project.image?.src && !project.image.isPlaceholder ? (
              <img
                src={project.image.src}
                alt={`${project.name} cover screenshot`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-center px-6">
                <div>
                  <p className="font-mono text-xs text-ink-500">cover screenshot</p>
                  <PlaceholderBadge>add real screenshot</PlaceholderBadge>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        <div className="mt-16 grid lg:grid-cols-[1fr_320px] gap-14">
          <div className="space-y-14">
            <Section title="Overview" text={cs.overview} />
            <Section title="Problem" text={cs.problem} isPlaceholder={isPlaceholderText(cs.problem)} />
            <Section title="Solution" text={cs.solution} isPlaceholder={isPlaceholderText(cs.solution)} />

            <div>
              <h2 className="font-display text-xl font-semibold text-ink-100 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {cs.keyFeatures.map((f, i) => (
                  <li key={i} className="text-ink-300 flex gap-2.5">
                    <span className="text-mint-500 mt-1 shrink-0">›</span>
                    <span>
                      {f}
                      {f.startsWith('[PLACEHOLDER]') && <PlaceholderBadge> </PlaceholderBadge>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink-100 mb-5">Technical Architecture</h2>
              <div className="rounded-lg border border-ink-700 bg-ink-800/50 p-6 sm:p-8">
                <div className="flex flex-col items-center gap-3">
                  {cs.architecture.map((step, i) => (
                    <div key={step} className="flex flex-col items-center gap-3 w-full">
                      <div className="font-mono text-sm text-ink-100 border border-ink-600 rounded-md px-4 py-2 text-center">
                        {step}
                      </div>
                      {i < cs.architecture.length - 1 && (
                        <span className="text-ink-500 text-lg" aria-hidden="true">↓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Section title="My Contribution" text={cs.contribution} isPlaceholder={isPlaceholderText(cs.contribution)} />

            <div>
              <h2 className="font-display text-xl font-semibold text-ink-100 mb-4">Challenges</h2>
              <ul className="space-y-2">
                {cs.challenges.map((c, i) => (
                  <li key={i} className="text-ink-300 flex gap-2.5">
                    <span className="text-amber-500 mt-1 shrink-0">!</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink-100 mb-4">Solutions</h2>
              <ul className="space-y-2">
                {cs.solutions.map((s, i) => (
                  <li key={i} className="text-ink-300 flex gap-2.5">
                    <span className="text-mint-500 mt-1 shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 self-start">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink-400 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] text-ink-300 border border-ink-600 rounded-full px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink-400 mb-3">Links</h3>
              <div className="flex flex-col gap-2 text-sm">
                <a href={project.links.live.url} target="_blank" rel="noopener noreferrer" className="text-mint-500 hover:text-mint-300">
                  Live Demo →
                </a>
                <a href={project.links.github.url} target="_blank" rel="noopener noreferrer" className="text-mint-500 hover:text-mint-300">
                  GitHub Repository →
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20 border-t border-ink-700 pt-10 flex items-center justify-between">
          <Link to="/#work" className="text-sm text-ink-300 hover:text-mint-400">
            All Projects
          </Link>
          <Link to={`/work/${nextProject.slug}`} className="inline-flex items-center gap-2 text-sm text-mint-500 hover:text-mint-300 font-medium">
            Next: {nextProject.name} <HiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

function Section({ title, text, isPlaceholder }) {
  const items = Array.isArray(text) ? text : [text];

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <h2 className="font-display text-xl font-semibold text-ink-100">{title}</h2>
        {isPlaceholder && <PlaceholderBadge>fill in</PlaceholderBadge>}
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <p key={`${title}-${index}`} className="body-copy">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
