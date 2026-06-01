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
    tags: ['LLM','LangChain', 'Prompt Eng.', 'AI Integration','Hugging Face','TensorFlow/Keras,'],
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
    featured: true,
    preview: 'forensics',
    screenshots: [
      {
        src: '/assets/projects/deepguard-analysis.png',
        alt: 'DeepGuard image analysis upload interface',
      },
      {
        src: '/assets/projects/deepguard-detail.png',
        alt: 'DeepGuard scan detail result dashboard',
      },
    ],
    outcome: 'CNN-powered image analysis with confidence scoring and visual insights.',
    icon: '🔍',
    iconBg: 'rgba(0,245,212,0.1)',
    type: 'AI Forensics Platform',
    title: 'DeepGuard – Deepfake Image Detection',
    desc: 'Designed and developed an AI-powered forensic analysis platform that detects whether an image is real or AI-generated. Built a custom CNN model for deepfake detection, integrated with a modern React frontend and Django backend. Includes confidence scoring, image analysis workflows, and visual insights for fake image identification.',
    stack: ['PyTorch', 'CNN', 'React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://github.com/Anand-Git07/Deepfake_image',
},
{
    preview: 'nlp',
    image: '/assets/projects/next-word-prediction.png',
    imageAlt: 'Real-time next word prediction Streamlit app preview',
    outcome: 'Real-time word predictions through a lightweight Streamlit interface.',
    icon: '🤖',
    iconBg: 'rgba(124,58,237,0.15)',
    type: 'AI / NLP Project',
    title: 'Next Word Prediction System',
    desc: 'Developed an AI-powered next-word prediction application using TensorFlow and Natural Language Processing techniques. Trained deep learning models on text datasets to predict contextually relevant words and deployed an interactive interface using Streamlit for real-time predictions.',
    stack: ['TensorFlow', 'Python', 'NLP', 'Streamlit'],
    link: 'https://github.com/Anand-Git07/NextGenText',
  },
{
    preview: 'commerce',
    image: '/assets/projects/the-orignals-store.png',
    imageAlt: 'The Orignals fashion e-commerce storefront preview',
    outcome: 'Full shopping flow with auth, catalog, cart, wishlist, and orders.',
    icon: '👕',
    iconBg: 'rgba(245,158,11,0.12)',
    type: 'Full Stack E-Commerce',
    title: 'The Orignals – Fashion Store',
    desc: 'Built a complete fashion e-commerce platform inspired by leading brands like Bewakoof and The Souled Store. Features include user authentication, product catalog, cart management, wishlist, order processing, responsive UI, and PostgreSQL-powered backend. Designed with a modern shopping experience and scalable architecture.',
    stack: ['React', 'Django', 'Django REST Framework', 'PostgreSQL'],
    link: 'https://github.com/Anand-Git07/TheOrignals',
  },
  
// {
//     preview: 'memory',
//     outcome: 'Playable browser game with level progression and audio feedback.',
//     icon: '🎮',
//     iconBg: 'rgba(0,245,212,0.1)',
//     type: 'Interactive Game',
//     title: 'Simon Memory Game',
//     desc: 'Classic colour memory game rebuilt from scratch. Features random sequence generation, level progression, audio feedback, and smooth animations. A deep dive into DOM manipulation and game state logic.',
//     stack: ['HTML5', 'CSS3', 'jQuery', 'JavaScript'],
//     link: './Simon Game/index.html',
//   },
  {
    preview: 'arcade',
    image: '/assets/projects/space-war-game.png',
    imageAlt: 'Space War arcade game boss fight screenshot',
    outcome: 'Canvas shooter with boss fights, power-ups, and collision logic.',
    icon: '🚀',
    iconBg: 'rgba(124,58,237,0.15)',
    type: 'Arcade Game',
    title: 'Space War Game',
    desc: 'Fully featured arcade shooter with boss fights, power-ups, multiple enemy types, real-time collision detection, and difficulty scaling. Built on the HTML5 Canvas API with pure JavaScript OOP patterns.',
    stack: ['HTML5 Canvas', 'JavaScript', 'OOP', 'Game Physics'],
    link: './game.html',
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
