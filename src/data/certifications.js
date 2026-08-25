// No certifications were listed anywhere in the resume or spec source
// material, so this file intentionally ships with clearly marked
// placeholder entries rather than invented ones. Replace or remove them.
// The Certifications component also renders a proper empty state if this
// array is emptied out entirely.

export const certifications = [
  {
    id: 'placeholder-1',
    name: '[PLACEHOLDER] Certification Name',
    issuer: '[PLACEHOLDER] Issuing Organization',
    date: '[PLACEHOLDER]',
    category: 'Development',
    description: '[PLACEHOLDER] One-line description of what this certification covers.',
    credentialId: null,
    verifyUrl: null,
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    name: '[PLACEHOLDER] Certification Name',
    issuer: '[PLACEHOLDER] Issuing Organization',
    date: '[PLACEHOLDER]',
    category: 'AI / ML',
    description: '[PLACEHOLDER] One-line description of what this certification covers.',
    credentialId: null,
    verifyUrl: null,
    isPlaceholder: true,
  },
];

export const certificationFilters = ['All', 'Development', 'AI / ML', 'Cloud', 'Other'];
