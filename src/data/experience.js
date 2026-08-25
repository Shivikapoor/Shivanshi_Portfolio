// Source of truth: resume "WORK EXPERIENCE" section.
// The design spec described this role as a "QA / Software Engineering
// Intern" — the resume's actual title, "Associate Software Engineer", is
// used here instead since the resume is the source of truth.

export const experience = [
  {
    company: 'Kavach Data Privacy Services',
    role: 'Associate Software Engineer',
    dates: 'Jan 2026 – Mar 2026',
    location: 'Remote',
    tech: ['React.js', 'TypeScript', 'Playwright', 'REST APIs', 'JWT'],
    bullets: [
      'Engineered reusable React.js + TypeScript components that improved frontend performance by 30%, reducing rendering overhead and increasing application responsiveness.',
      'Built responsive DPDP-compliant consent workflows, enhancing security and user experience.',
      'Achieved 85%+ Playwright test coverage, reducing manual testing by 60% and production bugs by 40%.',
      'Developed reusable UI components and integrated REST APIs with JWT authentication to deliver secure, scalable frontend functionality.',
    ],
  },
  {
    company: 'J.P. Morgan Chase (Forage)',
    role: 'Software Engineering Virtual Experience',
    dates: 'Nov 2025 – Jan 2026',
    location: 'Remote',
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'REST APIs', 'JPA'],
    bullets: [
      'Built an event-driven transaction processing system using Kafka and Spring Boot.',
      'Designed REST APIs for secure transaction validation and persistence.',
      'Improved backend reliability through fault-tolerant architecture and integration testing.',
    ],
  },
];
