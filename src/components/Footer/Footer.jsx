import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile, links } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-night-soft bg-night">
      <div className="container-content py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-night-text">{profile.name}</p>
          <p className="text-sm text-night-muted mt-0.5">Full-Stack Developer</p>
        </div>

        <div className="flex items-center gap-5 text-night-muted">
          <a href={links.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
            <FiGithub size={18} />
          </a>
          <a href={links.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <FiLinkedin size={18} />
          </a>
          <a href={links.email} target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:text-white">
            <FiMail size={18} />
          </a>
          <a href={links.resumePdf.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white">
            Resume
          </a>
        </div>

        <p className="text-xs text-night-muted font-mono">
          © {new Date().getFullYear()} {profile.name} · Built with{' '}
          <Link to="/" className="hover:text-white">
            React
          </Link>
        </p>
      </div>
    </footer>
  );
}
