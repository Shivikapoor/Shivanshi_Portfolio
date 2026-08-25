# Shivanshi Kapoor — Developer Portfolio

A production-quality React portfolio built from the design specification, using the
resume as the single source of truth for every real fact. Nothing on this site is
invented — anywhere the spec asked for information the resume didn't provide, you'll
find a clearly marked placeholder instead.

## Light / dark theme

A theme toggle (sun/moon switch) sits in the navbar on both desktop and mobile.

- **Dark theme** is the original design: ink/mint palette, Space Grotesk + Inter +
  JetBrains Mono, terminal-style hero eyebrow.
- **Light theme** follows the separate light-theme spec exactly: warm paper/mint/
  peach/ink palette (`#f4f1e9`, `#10201d`, `#a9d7c8`, `#f2b69c`, `#ed7757`),
  Manrope + italic Playfair Display + DM Mono, and the section-specific structure
  it calls for — "Built to be *useful*." with large horizontal project cards,
  "Product-minded by default" with a coral quote mark, an italicized "Kapoor" in
  the hero, and a dedicated coral Resume CTA band.

Implementation:

- `src/context/ThemeContext.jsx` — theme state, persisted to `localStorage`,
  defaults to the system's `prefers-color-scheme` on first visit.
- An inline script in `index.html` applies the saved/system theme to
  `<html data-theme="...">` before React mounts, so there's no flash of the
  wrong theme.
- Almost the entire color system is CSS-variable-driven: `tailwind.config.js`
  maps the `ink`/`mint` palettes to `rgb(var(--c-*) / <alpha-value>)`, and
  `src/index.css` defines the actual dark/light values under `:root` and
  `[data-theme='light']`. Because nearly every component already used
  `ink-*`/`mint-*` classes, toggling the theme recolors the whole site without
  touching component markup.
- Fonts follow the same pattern via `--font-display` / `--font-body` /
  `--font-mono` / `--font-accent`.
- `Stats`, `Education`, and `Footer` intentionally use a separate, always-dark
  `night` color set (not theme-reactive) since the light-theme spec calls these
  out as staying ink-dark regardless of theme.
- A handful of components (`Hero`, `Projects`, `About`, `Contact`) read
  `useTheme()` directly to switch copy/layout where the spec calls for a
  genuinely different structure in light mode (e.g. horizontal vs. grid project
  cards), not just different colors.

## Stack

- React 19 + Vite
- React Router (project case-study pages, e.g. `/work/mymento`)
- Tailwind CSS (custom design-token theme — see `tailwind.config.js`)
- Framer Motion (used inside the `react-bits` components)
- react-icons

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

Deploy the contents of `dist/` to Vercel, Netlify, or any static host. If you deploy
to Vercel, no configuration is needed beyond the default Vite preset.

## Architecture

```
src/
├── components/        # One folder per section, plus:
│   ├── common/         SectionHeading, PlaceholderBadge
│   └── react-bits/      Selectively-used animation components (see below)
├── pages/              Home, ProjectDetails (dynamic /work/:slug), NotFound
├── data/               All content lives here — edit these files, not the UI
│   ├── profile.js       Name, summary, links, quick-stats
│   ├── projects.js       Project data + full case-study content
│   ├── experience.js
│   ├── skills.js         Categorized skills + skill -> project evidence map
│   ├── education.js
│   ├── certifications.js
│   └── problemSolving.js
└── hooks/
    └── useReducedMotion.js
```

Because content lives in `src/data/*`, adding a fourth project or a new
certification doesn't require touching any component — just add an object to the
relevant array.

## React Bits-style effects used (6 total, per the "5–8 effects" guidance)

| Component | Where it's used | Purpose |
|---|---|---|
| `SplitText` | Hero headline | One-time word-stagger reveal on load |
| `DotGrid` | Hero background | Quiet animated dot grid, brightens near the cursor, colors follow the active theme |
| `SpotlightCard` | Project cards | Cursor-tracking glow on hover |
| `ScrollReveal` | Most sections | Fade-up on scroll into view |
| `Magnet` | Primary CTAs | Subtle magnetic pull toward the cursor |
| `LogoLoop` (adapted) | Skills | Hover-lift chips that reveal project evidence on click |

All of them check `prefers-reduced-motion` and degrade to a static, fully readable
state when it's set.

## ⚠️ Placeholders — read before publishing

Every placeholder is also marked in the UI with a small amber **badge** so it's
impossible to miss while browsing the live site. The full list:

1. **GitHub / LinkedIn URLs** (`src/data/profile.js`) — the resume's link icons
   didn't carry resolvable URLs, so both currently point at `#`/generic domains.
2. **Live demo & GitHub links for all 3 projects** (`src/data/projects.js`) — same
   issue, same fix: replace `url: '#'` with the real links per project.
3. **Case-study "Problem", "Solution", "My Contribution", "Challenges", "Solutions"
   copy** — these need your own words per project; scaffolded but not written for
   you, since only you know the real details.
4. **Certifications** — none were listed in the resume, so the section ships with
   two clearly-fake placeholder cards. Replace `src/data/certifications.js` with
   your real certifications, or empty the array to show the built-in empty state.
5. **10th / 12th schooling details** (`src/data/education.js`) — not on the resume;
   fill in or delete these two entries.
6. **AI/ML skills category** (`src/data/skills.js`) — the resume's Skills section
   doesn't list specific ML libraries even though the ML/LLM projects imply Python
   was used. Confirm the exact tools (e.g. pandas, scikit-learn, LangChain) before
   publishing this category.
7. **Problem-solving / DSA stats** (`src/data/problemSolving.js`) — no numbers or
   coding-profile link were available; currently renders as `—` until you add real
   values.
8. **Project screenshots** — every project card and case-study page currently shows
   a labeled placeholder box in place of real screenshots. Drop images into
   `public/assets/projects/` and update the `image`/`screenshots` fields.
9. **Contact form** — UI-complete but not wired to a backend (see the comment in
   `src/components/Contact/Contact.jsx`). Point it at a real endpoint (Formspree, a
   serverless function, etc.) before relying on it.
10. **Resume PDF** — this one is *not* a placeholder. The actual resume you
    provided is bundled at `public/assets/Shivanshi_Kapoor_Resume.pdf` and the
    "Download Resume" / "Resume" buttons link straight to it.

## One intentional deviation from the spec

The spec's example project list included **"Smart Wellness Advisor"** and
**"Diabetes Prediction Web App"**, neither of which appear on the resume. Rather
than inventing them, the real resume project **"Smart Grid Energy Optimizer"** is
used as the third featured project instead. If those other two are real projects,
add them to `src/data/projects.js` following the existing shape.

## Accessibility & performance notes

- Semantic landmarks, a "Skip to content" link, and visible focus rings throughout.
- All animation components respect `prefers-reduced-motion`.
- Only one canvas-based effect (`DotGrid`) runs at a time — no simultaneous heavy
  WebGL/canvas effects.
- Images are expected to be optimized before upload; none are bundled at full
  resolution by default since real screenshots weren't available.
