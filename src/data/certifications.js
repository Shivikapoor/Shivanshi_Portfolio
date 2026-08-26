// No certifications were listed anywhere in the resume or spec source
// material, so this file intentionally ships with clearly marked
// placeholder entries rather than invented ones. Replace or remove them.
// The Certifications component also renders a proper empty state if this
// array is emptied out entirely.

export const certifications = [
  {
    id: 'placeholder-1',
    name: 'Full-Stack Development',
    issuer: '100x Devs by Hakirat Singh',
    date: '2025',
    category: 'Development',
    description: 'This certification course covers in-depth technical knowledge and hands on practice on technologies like JavaScript, ReactJs, TypeScript, Tailwind CSS, NodeJs, ExpressJs, MongoDB, NextJs and UI designing',
    credentialId: null,
    verifyUrl: 'https://lnkd.in/p/gUZQsnCp',
    isPlaceholder: false,
  },
  {
    id: 'placeholder-2',
    name: 'Google Gen AI',
    issuer: 'Google',
    date: '2025',
    category: 'AI / ML',
    description: 'Earned Google’s Generative AI skill badge, demonstrating foundational knowledge of Generative AI concepts, applications, and responsible AI practices.',
    credentialId: null,
    verifyUrl: 'https://cdn.qwiklabs.com/1IjA1paFzxAwvhaEuCNYzcrZkNyM%2FRWnfSQue%2BwKv3M%3D',
    isPlaceholder: false,
  },
];

export const certificationFilters = ['All', 'Development', 'AI / ML', 'Cloud', 'Other'];
