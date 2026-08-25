import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineArrowUpRight, HiOutlineXMark, HiOutlineBars3 } from 'react-icons/hi2';
import { links, profile } from '../../data/profile';
import ThemeToggle from '../common/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'About', hash: '#about' },
  { label: 'Work', hash: '#work' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Education', hash: '#education' },
  { label: 'Certifications', hash: '#certifications' },
  { label: 'Contact', hash: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const goToSection = (hash) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-900/85 backdrop-blur-md border-b border-ink-700' : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16 sm:h-20" aria-label="Primary">
        <Link
          to="/"
          className="font-display font-semibold tracking-tight text-ink-100 text-sm sm:text-base"
          onClick={() => setOpen(false)}
        >
          {profile.name.split(' ')[0].toUpperCase()}
          <span className="text-mint-500">.</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.hash}>
              <button
                onClick={() => goToSection(item.hash)}
                className="text-sm text-ink-300 hover:text-mint-400 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={links.resumePdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-medium border border-ink-600 rounded-full px-4 py-2 text-ink-100 hover:border-mint-500 hover:text-mint-400 transition-colors ${
              theme === 'light' ? 'underline underline-offset-4' : ''
            }`}
          >
            Resume <HiOutlineArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="text-ink-100 p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <HiOutlineXMark size={26} /> : <HiOutlineBars3 size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-ink-900 border-t border-ink-700 px-6 pb-8 pt-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.hash}>
                <button
                  onClick={() => goToSection(item.hash)}
                  className="w-full text-left py-3 text-base text-ink-200 hover:text-mint-400 border-b border-ink-700/70"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={links.resumePdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-1.5 w-full text-sm font-medium border border-ink-600 rounded-full px-4 py-3 text-ink-100"
          >
            Resume <HiOutlineArrowUpRight aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}
