import { Link } from 'react-router-dom';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { FiGithub } from 'react-icons/fi';
import PlaceholderBadge from '../common/PlaceholderBadge';

// A rotating set of theme-wash panel colors for the stylized placeholder
// visual, echoing the palette's mint / peach / soft-blue accents.
const PANEL_COLORS = ['#a9d7c8', '#f2b69c', '#bad3da'];

export default function ProjectCardHorizontal({ project }) {
  const panelColor = PANEL_COLORS[Number(project.order) % PANEL_COLORS.length] || PANEL_COLORS[0];

  return (
    <div className="group rounded-lg border border-ink-700 bg-ink-800/60 overflow-hidden transition-transform duration-300 hover:translate-x-2">
      <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr]">
        {/* Colored visual panel — stylized placeholder until real screenshots are supplied */}
        <div
          className="relative h-48 md:h-full min-h-[220px] flex items-center justify-center overflow-hidden"
          style={
            project.image?.src && !project.image.isPlaceholder
              ? undefined
              : {
                  backgroundColor: panelColor,
                  backgroundImage:
                    'linear-gradient(rgba(16,32,29,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,32,29,0.08) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }
          }
        >
          {project.image?.src && !project.image.isPlaceholder ? (
            <img
              src={project.image.src}
              alt={`${project.name} cover screenshot`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="font-mono text-xs text-ink-900/70 bg-white/50 rounded-full px-3 py-1">
              screenshot placeholder
            </span>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-xs text-mint-500">{project.order}</span>
            {project.status && (
              <span className="font-mono text-[10px] uppercase tracking-wide text-amber-500 border border-amber-500/40 bg-amber-500/10 rounded-full px-2.5 py-1">
                {project.status}
              </span>
            )}
          </div>

          <h3 className="mt-3 font-display text-2xl font-semibold text-ink-100">{project.name}</h3>
          <p className="text-sm text-ink-400 mt-0.5">{project.tagline}</p>

          <p className="body-copy mt-4 text-sm sm:text-base max-w-2xl">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[11px] text-ink-300 border border-ink-600 rounded-full px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 text-mint-500 hover:text-mint-300 font-medium">
              Case Study <HiOutlineArrowUpRight aria-hidden="true" />
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
      </div>
    </div>
  );
}
