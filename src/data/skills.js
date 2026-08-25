// Source of truth: resume "TECHNICAL SKILLS" section, mapped onto project
// evidence for the interactive "skills -> projects" feature.
//
// The AI/ML category is flagged as a placeholder: the resume's Skills
// section doesn't list specific ML libraries, even though the Smart Grid
// Energy Optimizer and Virtual CA projects clearly involve Python/ML/LLMs.
// Rather than guessing which exact libraries were used (spec mentions
// Pandas/Scikit-learn/LangChain as *examples only*), those are marked as
// placeholders to confirm before publishing.

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design', 'Bootstrap', 'Material UI'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    id: 'testing',
    label: 'Testing',
    skills: ['Playwright', 'API Testing', 'Unit Testing'],
  },
  {
    id: 'database',
    label: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    isPlaceholder: true,
    skills: ['Python [confirm]', 'Machine Learning [confirm libraries]', 'LLM Integration [confirm]'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Render', 'Linux'],
  },
];

// Evidence map for the interactive "click a skill, see where it was used"
// feature (spec section 15). Only maps to projects/experience that are
// genuinely backed by the resume content.
export const skillEvidence = {
  'React.js': ['MyMento', 'Virtual CA', 'Kavach — Associate Software Engineer'],
  TypeScript: ['Kavach — Associate Software Engineer'],
  'JavaScript (ES6+)': ['MyMento', 'Virtual CA'],
  'Node.js': ['MyMento', 'Virtual CA'],
  'Express.js': ['MyMento', 'Virtual CA'],
  'REST APIs': ['MyMento', 'Virtual CA', 'Kavach — Associate Software Engineer', 'J.P. Morgan Chase (Forage)'],
  'JWT Authentication': ['MyMento', 'Virtual CA', 'Kavach — Associate Software Engineer'],
  MongoDB: ['MyMento', 'Virtual CA'],
  Playwright: ['Kavach — Associate Software Engineer'],
  'Socket.io': ['MyMento'],
};
