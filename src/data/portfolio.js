// ─── data/portfolio.js ───
// All portfolio content lives here. Update this file to change any text/links.

export const personal = {
  name: 'Anand',
  role: 'Full Stack & AI Developer',
  email: 'anandrajsingh1432@gmail.com',
  phone: '9538746381',
  college: 'AMC Engineering College, Bangalore',
  year: 'Final Year BCA',
  tagline: 'Final-year BCA student building intelligent web applications using the MERN stack, Django, PostgreSQL, and Generative AI — turning ideas into real products.',
  about: [
    "I'm <strong>Anand Raj</strong>, a final-year BCA student at <strong>AMC Engineering College, Bangalore</strong> with a serious passion for building real-world software. I don't just learn frameworks — I build things with them.",
    'My journey started with HTML & CSS, and quickly evolved into full stack development. Today I work across the entire stack: designing UIs in React, building REST APIs with Node.js and Django, managing databases in <strong>PostgreSQL</strong> and MongoDB, and integrating <strong>Generative AI</strong> to make applications smarter.',
    'Currently seeking <strong>internships</strong> where I can contribute, grow, and ship real products.',
  ],
  socials: {
    github:    'https://github.com/Anand-Git07',
    linkedin:  'https://www.linkedin.com/in/anand-raj-362b01314',
    twitter:   'https://x.com/im_anand_07',
    instagram: 'https://www.instagram.com/im_anand_07',
  },
};

export const stats = [
  { num: '5+',    label: 'Projects Built' },
  { num: 'Final', label: 'Year BCA'       },
  { num: '6+',    label: 'Technologies'   },
  { num: '∞',     label: 'Curiosity'      },
];

export const stack = [
  { name: 'React / Node.js',        level: 'Advanced',  pct: 85 },
  { name: 'Django / Python',        level: 'Proficient', pct: 78 },
  { name: 'PostgreSQL',             level: 'Proficient', pct: 75 },
  { name: 'MongoDB',                level: 'Proficient', pct: 80 },
  { name: 'Generative AI',          level: 'Building',   pct: 70 },
  { name: 'JavaScript / HTML / CSS',level: 'Expert',     pct: 90 },
  { name: 'Git / GitHub',           level: 'Advanced',   pct: 82 },
];

export const skills = [
  {
    icon: '⚛️',
    title: 'Frontend Development',
    desc: 'Building responsive, interactive interfaces with React. Focus on performance, accessibility, and clean component architecture.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    color: 'cyan',
  },
  {
    icon: '🔧',
    title: 'Backend Development',
    desc: 'Designing and building REST APIs with Node.js/Express and Django. Clean architecture, proper auth, and efficient data handling.',
    tags: ['Node.js', 'Express', 'Django', 'Python', 'REST APIs'],
    color: 'purple',
  },
  {
    icon: '🗄️',
    title: 'Databases',
    desc: 'Working with both SQL and NoSQL databases. Schema design, query optimisation, and data modelling for real applications.',
    tags: ['PostgreSQL', 'MongoDB', 'SQL'],
    color: 'amber',
  },
  {
    icon: '🤖',
    title: 'Generative AI',
    desc: 'Integrating LLMs and AI APIs into real applications — chatbots, content generation, and intelligent assistants.',
    tags: ['LLM APIs', 'Prompt Eng.', 'AI Integration'],
    color: 'cyan',
  },
  // {
  //   icon: '🎨',
  //   title: 'UI / UX Design',
  //   desc: 'Creating intuitive, visually compelling interfaces. I care deeply about user experience, not just making things that work.',
  //   tags: ['Figma', 'Design Systems', 'Responsive'],
  //   color: 'purple',
  // },
  // {
  //   icon: '🚀',
  //   title: 'Dev Tools & Ops',
  //   desc: 'Version control, collaboration, and deployment. Building with the full developer workflow in mind from day one.',
  //   tags: ['Git', 'GitHub', 'VS Code', 'Linux'],
  //   color: 'amber',
  // },
];

export const projects = [
  {
    icon: '🎮',
    iconBg: 'rgba(0,245,212,0.1)',
    type: 'Interactive Game',
    title: 'Simon Memory Game',
    desc: 'Classic colour memory game rebuilt from scratch. Features random sequence generation, level progression, audio feedback, and smooth animations. A deep dive into DOM manipulation and game state logic.',
    stack: ['HTML5', 'CSS3', 'jQuery', 'JavaScript'],
    link: './Simon Game/index.html',
  },
  {
    icon: '🚀',
    iconBg: 'rgba(124,58,237,0.15)',
    type: 'Arcade Game',
    title: 'Space War Game',
    desc: 'Fully featured arcade shooter with boss fights, power-ups, multiple enemy types, real-time collision detection, and difficulty scaling. Built on the HTML5 Canvas API with pure JavaScript OOP patterns.',
    stack: ['HTML5 Canvas', 'JavaScript', 'OOP', 'Game Physics'],
    link: './game.html',
  },
  {
    icon: '🛒',
    iconBg: 'rgba(245,158,11,0.12)',
    type: 'Full Stack App',
    title: 'E-Commerce Platform',
    desc: 'Full-featured e-commerce website with product listings, cart management, user authentication, and order processing. Built with the MERN stack for a seamless shopping experience.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://github.com/Anand-Git07',
  },
  {
    icon: '⌚',
    iconBg: 'rgba(0,245,212,0.1)',
    type: 'Frontend Project',
    title: 'Smartwatch Website',
    desc: 'A polished product landing page for a smartwatch brand. Focused on smooth animations, modern UI design, and converting visitors through compelling visual storytelling.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Animation'],
    link: 'https://github.com/Anand-Git07',
  },
];

export const education = [
  {
    period: '2022 — Present',
    degree: 'Bachelor of Computer Applications (BCA)',
    org: 'AMC Engineering College, Bangalore',
    desc: 'Final-year student specialising in full stack web development and AI. Actively building projects and seeking internships in software development.',
  },
];
