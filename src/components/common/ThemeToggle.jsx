import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isLight}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      className={`relative inline-flex items-center h-9 w-16 rounded-full border border-ink-600 bg-ink-800 transition-colors ${className}`}
    >
      <span
        className={`absolute top-1 left-1 h-7 w-7 rounded-full bg-mint-500 flex items-center justify-center transition-transform duration-300 ease-out ${
          isLight ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isLight ? (
          <HiOutlineSun className="text-ink-900" size={16} aria-hidden="true" />
        ) : (
          <HiOutlineMoon className="text-ink-900" size={16} aria-hidden="true" />
        )}
      </span>
    </button>
  );
}
