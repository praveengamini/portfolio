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
    'Software engineer at TalentXO, where I built the lead-generation and outreach engine that tripled the applications the platform receives — the LLM scoring behind it, the WhatsApp and email delivery that carries it, and the commission attribution that has to be exactly right because it decides what someone earns. I also build the AI agents that run inside the product and the MCP toolchain the team works with, and I measure models against held-out data before trusting them. Before that I built the AI layer of Margdarshak AI — a RAG chatbot, a multi-source job-ingestion pipeline and a personalised roadmap engine.',
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
      'TalentXO builds hiring software for recruiters and employers. I built the lead-generation engine that feeds it candidates, build the AI that runs inside the product, and work across the backend, frontend and cloud infrastructure.',
    points: [
      'Built the lead-generation engine end to end. Applications arriving from job boards were landing in the database unread while recruiters on the platform sourced candidates from scratch; the engine scores each incoming application with an LLM, ranks it, routes it into a pool recruiters draw from, and contacts the candidate about the role they already applied for. Applications received tripled. Shipped across 11 feature-flagged phases, the first of which changed nothing any user could see.',
      'Scored roughly 5,000 applications across 33 live jobs in batches inside a 12,000-call daily budget — backlog catch-up first, then a steady cycle, and later a five-minute job for new applications — tagging each lead with an AI quality mark, a lead quality score and an outreach priority score.',
      'Scaled multi-channel outreach from 50 to 1,000 messages a day in stages, with warm-up ramps, send windows, per-job and per-recipient caps and one message per lead — delivered over WhatsApp through WATI and Gallabox, alongside Zoho for scheduling and email for the rest.',
      'Built the commission and credit attribution engine behind it: which recruiter earns each submission, settle steps when work moves between them, six-month credit tails and repeat-candidate rates. Nothing may double-credit, because the output is someone’s income.',
      'Design and run multi-agent AI workflows in production: Claude agents with custom orchestration, MCP tool servers and tool calling, structured outputs and guard-rails, with retries and fallbacks so a wrong model answer degrades gracefully instead of breaking the flow.',
      'Built and hosted the team’s MCP toolchain — a read-only production database server on Cloud Run behind Google sign-in, a Slack server with a scheduled agent that posts metrics daily, and Postman plus a local read/write database server so an agent can exercise the API end to end before deploy. The risk with an agent on a database is not writes but a reasonable-looking read that is enormously expensive: a model-written analytics query once spiked the production database to 92%, so the servers are read-only with query timeouts and a harness that shapes the query.',
      'Measure models rather than trust reputation. Built and evaluated a ranking engine against 28 job pools graded by Claude Opus, split across training, check and two held-out test sets: ordering improved from 90.5% to 92.9% on the shared pools and good candidates wrongly dropped fell from 96 to 35 of 766. Frozen with a lock file and a verification script that reproduced all 7,528 rows exactly, and the known weaknesses are written down — two parses of the same job are never identical, so every result is reported twice.',
      'Chose the production model by benchmarking candidates on 200 real resumes across five domains and taking the one that won on quality per rupee, which was not the obvious pick, then routed each step through OpenRouter to the cheapest model that still does the job well.',
      'Built and evaluated a candidate-to-job matching engine on embeddings, matching people to roles by semantic similarity rather than keyword overlap. It sits behind a feature flag pending rollout and has not been in front of users.',
      'Develop and maintain the core product on an existing production codebase — Python/Flask services, a MySQL data layer and a React/TypeScript frontend — including the candidate portal, shipped dark behind feature flags so any step could be switched back off in a single config line. When one step went live before the previous one had finished testing, that is exactly what I did, then fixed seven production bugs and re-enabled it.',
      'Run production infrastructure on GCP: Compute Engine VMs hosting MySQL, background job workers and the Flask services, Cloud Storage for assets, and an Nginx reverse proxy handling frontend serving and API routing, including the Nginx go-live for the company’s main domain.',
      'Debug production issues to root cause. Found a database bottleneck by ranking queries on aggregate cost rather than per-call duration — one endpoint writing a row on every page view — and traced note saves crashing on pasted text to emoji travelling through a second database connection still on 3-byte utf8, which broke reads as well as writes. Also closed a session-token leak where legacy links handed tokens to a third-party host.',
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
