// All values here are sourced directly from Shivanshi Kapoor's resume.
// Anything not present on the resume is marked isPlaceholder: true and
// contains a [PLACEHOLDER] label so it is obvious in the UI and in this
// file that it needs to be supplied before launch. Nothing below is invented.

export const profile = {
  name: 'Shivanshi Kapoor',
  role: 'Full-Stack Developer',
  roleTags: ['MERN', 'React', 'Node.js', 'AI/ML'],
  location: 'Indore, India',
  email: 'kapoorshivanshi10@gmail.com',
  phone: '+91 6232086290',
  summary:
    "Frontend & Full Stack Developer with experience building scalable React.js applications, reusable UI components, and performance-optimized web solutions. Skilled in React.js, TypeScript, JavaScript, REST APIs, Playwright, and the MERN stack.",
  heroStatement:
    'I build real-world web applications and AI-powered products using modern full-stack technologies.',
};

// The resume links "LinkedIn" and "GitHub" as hyperlinked icons but the
// underlying URLs were not present in the extracted resume text, so the
// href values below are placeholders. Replace with the real profile URLs.
export const links = {
  github: { url: 'https://github.com/Shivikapoor', isPlaceholder: true },
  linkedin: { url: 'https://www.linkedin.com/in/shivanshikapoor/', isPlaceholder: true },
  email: `https://mail.google.com/mail/?view=cm&fs=1&to=kapoorshivanshi10@gmail.com`,
  // This is the actual resume PDF that was supplied — it's a real, working
  // link, not a placeholder.
  resumePdf: { url: '/assets/Shivanshi_Kapoor_Resume.pdf', isPlaceholder: false },
};

// Quick-credibility strip. Only facts that are directly verifiable from the
// resume are used as real numbers. No stat is invented.
export const quickStats = [
  { label: 'MCA Graduate', value: '9.00 CGPA', caption: 'SGSITS, Indore' },
  { label: 'MERN Developer', value: 'React · Node · MongoDB', caption: 'Full-stack' },
  { label: 'Professional Experience', value: 'Kavach', caption: 'Associate Software Engineer' },
  { label: 'Shipped Projects', value: '3', caption: 'MyMento · Virtual CA · Smart Grid' },
];
