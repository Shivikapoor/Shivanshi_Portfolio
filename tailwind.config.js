/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--c-bg) / <alpha-value>)',
          50: 'rgb(var(--c-text) / <alpha-value>)',
          100: 'rgb(var(--c-text) / <alpha-value>)',
          200: 'rgb(var(--c-text-soft) / <alpha-value>)',
          300: 'rgb(var(--c-text-muted) / <alpha-value>)',
          400: 'rgb(var(--c-text-faint) / <alpha-value>)',
          500: 'rgb(var(--c-text-faint2) / <alpha-value>)',
          600: 'rgb(var(--c-border-strong) / <alpha-value>)',
          700: 'rgb(var(--c-border) / <alpha-value>)',
          800: 'rgb(var(--c-bg-elevated) / <alpha-value>)',
          900: 'rgb(var(--c-bg) / <alpha-value>)',
          950: 'rgb(var(--c-bg-deep) / <alpha-value>)',
        },
        mint: {
          DEFAULT: 'rgb(var(--c-accent) / <alpha-value>)',
          100: 'rgb(var(--c-accent-100) / <alpha-value>)',
          300: 'rgb(var(--c-accent-soft) / <alpha-value>)',
          400: 'rgb(var(--c-accent-mid) / <alpha-value>)',
          500: 'rgb(var(--c-accent) / <alpha-value>)',
          600: 'rgb(var(--c-accent-strong) / <alpha-value>)',
          700: 'rgb(var(--c-accent-deep) / <alpha-value>)',
        },
        amber: {
          DEFAULT: '#F0B429',
          400: '#F5C859',
          500: '#F0B429',
          600: '#C8930F',
        },
        // Theme-reactive secondary accent: amber in dark mode, coral in light
        // mode — used for the Resume CTA band and other warm highlights.
        coral: {
          DEFAULT: 'rgb(var(--c-accent2) / <alpha-value>)',
          soft: 'rgb(var(--c-accent2-soft) / <alpha-value>)',
        },
        // Always-dark "ink band" used for sections the light-theme spec
        // calls out as staying dark regardless of theme (credibility strip,
        // education, footer).
        night: {
          DEFAULT: '#10201d',
          soft: '#17302b',
          text: '#f4f1e9',
          muted: '#a9c9c0',
        },
        // Section wash: transparent in dark mode, a soft tint in light mode
        // (mint-green hero/skills sections per the light-theme spec).
        wash: 'rgb(var(--c-wash) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        accent: ['var(--font-accent)', 'serif'],
      },
      letterSpacing: {
        tight: '-0.06em',
        tighter: '-0.075em',
      },
      maxWidth: {
        content: '1240px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '12px',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-40px,-40px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        drift: 'drift 30s linear infinite',
      },
    },
  },
  plugins: [],
};
