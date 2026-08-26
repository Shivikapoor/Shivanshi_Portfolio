// Source of truth: resume "PROJECTS" section.
//
// NOTE ON RECONCILIATION WITH THE DESIGN SPEC:
// The design spec referenced two additional projects — "Smart Wellness
// Advisor" and "Diabetes Prediction Web App" — that do not appear anywhere
// on the resume that was provided. Per instructions not to invent projects,
// they have been left out entirely rather than fabricated. If these are
// real projects, add them here following the same shape.
//
// Live demo / GitHub / case-study links were shown only as unlabeled link
// icons in the resume PDF (the underlying URLs weren't extractable), so
// every url field below is a marked placeholder — swap in the real links.

export const projects = [
  {
    slug: 'mymento',
    order: '01',
    name: 'MyMento',
    tagline: 'Mental Wellness Platform',
    description:
      'A full-stack platform connecting users, listeners and therapists through real-time messaging, secure authentication and appointment management.',
    period: 'Jan 2026 – Mar 2026',
    tech: ['MERN', 'Socket.io', 'JWT', 'RBAC'],
    featured: true,
    highlights: [
      '5+ core modules covering messaging, scheduling and account management.',
      'Reduced scheduling conflicts by 90% through intelligent appointment validation.',
      'Increased user engagement by 40% and retention by 35% using analytics and real-time notifications.',
      'Implemented JWT authentication, role-based access control (RBAC) and OTP-based account recovery.',
    ],
    links: {
      live: { url: 'https://my-mento.vercel.app/', isPlaceholder: true },
      github: { url: 'https://github.com/Shivikapoor/MyMento', isPlaceholder: true },
    },
    image: { src: '/assets/projects/mymento-cover.png', isPlaceholder: false },
    caseStudy: {
      overview:
        'MyMento is a scalable MERN platform built to connect people seeking mental-wellness support with listeners and therapists through anonymous, secure communication.',
      problem: [
        'Many people struggle to find accessible and supportive spaces to discuss their personal or mental-health concerns.',
        'Fear of judgment, social discomfort, or not knowing whom to approach can prevent people from openly sharing what they are going through or seeking appropriate guidance. This can leave them feeling isolated without an easy way to connect with supportive people or mentors.'],
      solution: [
        'Mymento addresses this by combining a supportive online community with mentor-based guidance in one platform. Users can share their experiences and concerns within the community, connect with others who may relate to their experiences, and seek personalized guidance from mentors.',
        'The platform uses authentication, role-based access, and a centralized application architecture to provide a structured and secure experience from user registration through community interaction and mentor support.'
      ],
        keyFeatures: [
        'Real-time messaging between users and listeners/therapists (Socket.io)',
        'Appointment booking with conflict-aware scheduling',
        'JWT authentication with role-based access control',
        'OTP-based account recovery',
        'Counsellor dashboard for managing appointments',
        'Client appointment history',
        'Wellness tools for breathing, grounding, sleep, relaxation, and stress relief',
        'Ratings and reviews for counselling sessions and email notifications for bookings and confirmations',
        'Responsive React frontend with Node.js, Express, MongoDB, and Vite'
      ],
      architecture: ['React', 'REST API', 'Express / Node', 'MongoDB'],
      contribution:
        'My Personal Contributions, I primarily worked on the frontend development, API integration, authentication flows, deployment, and production debugging of Mymento. I built and refined the React-based user interface, integrated the frontend with backend APIs, and implemented user-facing flows such as login, registration, forgot password, and OTP verification. I also handled deployment and resolved production issues, including the CORS error between the deployed frontend and backend and the OTP delivery issue after deploying the backend on Render. Team Contributions Mymento was developed collaboratively. A teammate handled parts of the backend development, including some server-side functionality and API implementation. I worked with those APIs from the frontend and collaborated on integrating the different parts of the application into a functional product.Overall, my primary ownership was the frontend, frontend-backend integration, deployment, and production-level debugging, while the backend was developed collaboratively.',
      challenges: [
        'CORS Error After Deployment: After deploying Mymento, the frontend and backend were hosted on different domains, causing API requests to be blocked by CORS restrictions even though everything worked locally.',
        'OTP delivery issue: The Forgot Password flow worked locally, but after deploying the backend on Render, OTP emails were not being delivered correctly, making the password-reset flow unreliable in production.'
      ],
      solutions: [
        'Resolving CORS: I investigated the browser console and network requests, identified the production origin issue, and updated the backend CORS configuration to allow requests from the deployed frontend.',
        'Fixing OTP Delivery: I compared the local and production configurations, checked the email-service setup and environment variables, and adjusted the production configuration to ensure the OTP service could communicate correctly with the email provider.'
      ],
      screenshots: [{ src: '/assets/projects/mymento-1.png', isPlaceholder: true }],
    },
  },
  {
    slug: 'virtual-ca',
    order: '02',
    name: 'Virtual CA',
    tagline: 'AI Financial Advisor',
    description:
      'An AI-powered financial advisory platform built on the MERN stack and LLMs to automate tax planning and generate personalized financial recommendations.',
    period: 'Mar 2026 – Present',
    tech: ['MERN', 'LLMs', 'REST APIs', 'JWT'],
    status: 'In Progress',
    featured: true,
    highlights: [
      'Building an AI-powered financial advisory platform using the MERN stack and LLMs to automate tax planning and personalized financial recommendations.',
      'Designing secure REST APIs and authentication mechanisms for financial data management.',
    ],
    links: {
      live: { url: '#', isPlaceholder: true },
      github: { url: '#', isPlaceholder: true },
    },
    image: { src: '/assets/projects/virtual-ca-cover.png', isPlaceholder: true },
    caseStudy: {
      overview:
        'Virtual CA is an in-progress AI financial assistant that uses large language models to help users with tax planning and personalized financial guidance.',
      problem:
        '[PLACEHOLDER] Describe the problem this tool solves for its users (e.g. manual tax planning is slow / opaque / expensive).',
      solution:
        '[PLACEHOLDER] Summarize how the MERN + LLM architecture addresses that problem.',
      keyFeatures: [
        'LLM-driven tax planning and recommendation engine',
        'Secure REST APIs for financial data handling',
        'JWT-based authentication',
        '[PLACEHOLDER] Add any RAG / document-ingestion features once implemented',
      ],
      architecture: ['React', 'Node / Express', 'AI Service', 'RAG / Vector DB', 'LLM'],
      contribution: '[PLACEHOLDER] Describe your specific role and ownership on this project.',
      challenges: ['[PLACEHOLDER] Note any real challenges encountered with LLM integration, data security, or accuracy.'],
      solutions: ['[PLACEHOLDER] Explain how those challenges were or are being addressed.'],
      screenshots: [{ src: '/assets/projects/virtual-ca-1.png', isPlaceholder: true }],
    },
  },
  {
    slug: 'smart-grid-energy-optimizer',
    order: '03',
    name: 'Smart Grid Energy Optimizer',
    tagline: 'ML-powered energy forecasting app',
    description:
      'A machine-learning powered web application that forecasts electricity usage and recommends ways to cut costs.',
    period: 'Oct 2025 – Dec 2025',
    tech: ['Python', 'Machine Learning', 'Web App'],
    featured: true,
    highlights: [
      'Built an ML-powered web application using 1,500+ records and 12 features.',
      'Achieved 92% prediction accuracy for electricity usage forecasting.',
      'Generated recommendations capable of reducing electricity costs by 15–30%.',
    ],
    links: {
      live: { url: '#', isPlaceholder: true },
      github: { url: '#', isPlaceholder: true },
    },
    image: { src: '/assets/projects/smart-grid-cover.png', isPlaceholder: true },
    caseStudy: {
      overview:
        'An ML-powered application that forecasts household/grid electricity usage and surfaces cost-saving recommendations.',
      problem: '[PLACEHOLDER] Describe the forecasting or cost problem this project addresses.',
      solution: '[PLACEHOLDER] Summarize the modeling and application approach in your own words.',
      keyFeatures: [
        'Electricity usage forecasting model (92% accuracy)',
        'Cost-saving recommendation engine',
        '[PLACEHOLDER] Note the exact ML library/framework used (e.g. scikit-learn)',
      ],
      architecture: ['React / Web Frontend', 'REST API', 'Python ML Service', 'Trained Model'],
      contribution: '[PLACEHOLDER] Describe what you personally built, including data prep, model training, or the web app layer.',
      challenges: ['[PLACEHOLDER] Note a real modeling or data-quality challenge you faced.'],
      solutions: ['[PLACEHOLDER] Explain how it was resolved.'],
      screenshots: [{ src: '/assets/projects/smart-grid-1.png', isPlaceholder: true }],
    },
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
