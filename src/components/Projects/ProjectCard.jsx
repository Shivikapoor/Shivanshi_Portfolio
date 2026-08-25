import { Link } from 'react-router-dom';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { FiGithub } from 'react-icons/fi';
import SpotlightCard from '../react-bits/SpotlightCard';
import PlaceholderBadge from '../common/PlaceholderBadge';

export default function ProjectCard({ project }) {
  return (
    <SpotlightCard className="rounded-lg border border-ink-700 bg-ink-800/60 hover:border-ink-500 transition-colors duration-300">
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-mint-500">{project.order}</span>
          {project.status && (
            <span className="font-mono text-[10px] uppercase tracking-wide text-amber-500 border border-amber-500/40 bg-amber-500/10 rounded-full px-2.5 py-1">
              {project.status}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold text-ink-100">{project.name}</h3>
        <p className="text-sm text-ink-400 mt-0.5">{project.tagline}</p>

        <p className="body-copy mt-4 text-sm sm:text-base">{project.description}</p>

        <ul className="mt-5 space-y-1.5">
          {project.highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="text-sm text-ink-300 flex gap-2">
              <span className="text-mint-500 mt-1" aria-hidden="true">›</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[11px] text-ink-300 border border-ink-600 rounded-full px-2.5 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 text-mint-500 hover:text-mint-300 font-medium">
            View Case Study <HiOutlineArrowUpRight aria-hidden="true" />
          </Link>
          <a
            href={project.links.live.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-300 hover:text-ink-100"
          >
            Live Demo
            {project.links.live.isPlaceholder && <PlaceholderBadge>link</PlaceholderBadge>}
          </a>
          <a
            href={project.links.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-300 hover:text-ink-100"
          >
            <FiGithub aria-hidden="true" /> GitHub
            {project.links.github.isPlaceholder && <PlaceholderBadge>link</PlaceholderBadge>}
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
}
