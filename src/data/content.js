import talentxoLogo from '../assets/logos/talentxo.png';
import margdarshakLogo from '../assets/logos/margdarshak.png';
import madtinLogo from '../assets/logos/madtin.png';

export const profile = {
  name: 'Praveen Gamini',
  role: 'Software Engineer',
  company: 'TalentXO',
  location: 'Bangalore, India',
  email: 'praveengamini009@gmail.com',
  // Gmail compose link — works without a desktop mail client registered for mailto:
  mailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=praveengamini009@gmail.com',
  github: 'https://github.com/praveengamini',
  linkedin: 'https://www.linkedin.com/in/praveen-gamini-3bb729273',
  resume: 'https://drive.google.com/file/d/1yCu5KeB5hPDq2G-DjsDqymvAWVZFacid/view?usp=sharing',
  intro:
    'Backend engineer at TalentXO, where I work on an HR product built on Flask, MySQL and React and run its infrastructure on GCP. Before that I built the AI layer of Margdarshak AI — a RAG chatbot, a multi-source job-ingestion pipeline and a personalised roadmap engine — and shipped production LLM features on AWS.',
};

// Every skill renders from src/data/skills.js, which carries the same names
// plus their brand marks. There is no second plain-string copy here: two
// sources would print the whole list twice on one page.
export const experience = [
  {
    company: 'TalentXO',
    url: 'https://talentxo.com',
    logo: talentxoLogo,
    role: 'Software Engineer',
    period: 'Jul 2026 — Present',
    location: 'Bangalore',
    summary:
      'TalentXO builds hiring software for recruiters and employers. I work across the backend and frontend of the product and own a good part of its cloud infrastructure.',
    points: [
      'Develop and maintain the core product on an existing production codebase — Python/Flask services, a MySQL data layer and a React frontend — shipping features and fixes directly to customers.',
      'Integrate AI into existing product workflows with the Google Gemini and Anthropic Claude APIs: prompt design, structured outputs and guard-rails so model output fits into the product rather than sitting beside it.',
      'Run production infrastructure on GCP: Compute Engine VMs hosting MySQL, background job workers and the Flask services, Cloud Storage for assets, and an Nginx reverse proxy handling frontend serving and API routing.',
      'Work on a live system with real users, so changes are made with migrations, backwards compatibility and rollback in mind.',
    ],
  },
  {
    company: 'Code At Random',
    logo: margdarshakLogo,
    product: { name: 'Margdarshak AI', url: 'https://margdarshakai.com' },
    role: 'AI Engineer Intern',
    period: 'Feb 2026 — Jul 2026',
    location: 'Remote',
    points: [
      'Built the AI backend for Margdarshak AI, a learning and career-guidance platform — Python, FastAPI, LangChain and LLMs, with async REST APIs (Pydantic, SQLAlchemy), structured LLM outputs, validation, logging and production-grade error handling.',
      'Designed a scalable job-collection pipeline with RabbitMQ, APScheduler and worker processes — normalisation, deduplication and batch UPSERTs into PostgreSQL for automated multi-source ingestion.',
      'Architected a personalised roadmap engine: structured learning plans with resource discovery via YouTube Data API, Serper and DuckDuckGo, plus caching, retries, duplicate handling and fault-tolerant fallbacks.',
      'Developed a RAG chatbot on FastEmbed + Qdrant with semantic search, conversational memory and context-aware prompting to answer document-specific questions and suggest follow-ups.',
      'Shipped Resume Analysis and JD Matching services — ATS scoring, skill-gap analysis, keyword matching, resume optimisation, career forecasting and AI-generated cover letters — alongside project recommendation and AI quiz generation tied to each roadmap.',
      'Designed the data layer across PostgreSQL (Supabase), MongoDB for chat history, Qdrant for vectors and Upstash Redis for caching AI responses; containerised services with Docker for production deployment.',
    ],
  },
  {
    company: 'MADTIN Technologies',
    url: 'https://madtin.com',
    logo: madtinLogo,
    role: 'Full Stack & AI Engineer Intern',
    period: 'Oct 2025 — Nov 2025',
    location: 'Remote',
    points: [
      'Built Safe Climate Trip, a travel platform with AI destination recommendations; integrated LLM tool-calling for real-time climate, safety and itinerary data using FastAPI and PostgreSQL.',
      'Owned the backend end to end — REST API design, database schema, JWT authentication and authorisation.',
      'Deployed AI and backend services to AWS with Docker and CI/CD pipelines.',
    ],
  },
];

// Newest first. `score` is rendered in the ring; `scoreMax` scales the arc so a
// CGPA out of 10 and a percentage out of 100 both fill it correctly.
export const education = [
  {
    school: 'Maharaj Vijayaram Gajapathi Raj College of Engineering',
    place: 'Vizianagaram',
    degree: 'B.Tech, Computer Science Engineering',
    period: 'Nov 2022 — Apr 2026',
    score: '8.54',
    scoreLabel: 'CGPA',
    scoreMax: 10,
  },
  {
    school: 'Sriviswa Junior College',
    place: 'Visakhapatnam',
    degree: 'MPC (Physics, Chemistry, Maths)',
    period: 'Apr 2020 — Apr 2022',
    score: '97.5',
    scoreLabel: '%',
    scoreMax: 100,
  },
];

export const achievements = [
  {
    title: 'Winner-2, Aavishkar Season 2 (National Hackathon)',
    detail: 'Placed second among 50+ teams with a ticket-resale platform addressing refund-policy gaps.',
    badge: { label: '2ND', tone: 'silver', glyph: 'medal', rank: '2nd of 50+' },
  },
  {
    title: 'Winner, Sankalp 2025 — MVGR College of Engineering',
    detail: 'Secured the top position among 175+ teams.',
    badge: { label: '1ST', tone: 'gold', glyph: 'trophy', rank: '1st of 175+' },
  },
  {
    title: 'Finalist, NLP Challenge — IIT Kharagpur',
    detail: 'Reached the final round of the national NLP challenge.',
    badge: { label: 'FINAL', tone: 'purple', glyph: 'spark', rank: 'Final round' },
  },
];

export const certifications = [
  'NPTEL (Elite) — Cloud Computing',
  'NPTEL (Elite) — Programming in C',
  'Udemy — Web Development, MERN Stack',
  'Udemy — Machine Learning and Data Science with Python',
];
