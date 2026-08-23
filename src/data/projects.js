import aiTaskFlow from '../assets/images/AiTaskFlowImage.webp';
import chatPdf from '../assets/images/ChatPdf.webp';
import qmart from '../assets/images/q-mart.webp';
import meeting from '../assets/images/meetingExtensionImg.webp';
import bodyMetric from '../assets/images/measurements.webp';
import javaEcom from '../assets/images/javapbl.webp';
import smartStudy from '../assets/images/smartStudy.webp';
import portfolio from '../assets/images/portfolioproject.webp';
import clock from '../assets/images/clock.webp';

export const projects = [
  {
    slug: 'ai-taskflow',
    title: 'AI-TaskFlow',
    period: 'Jul — Aug 2025',
    summary: 'AI task planner that turns a goal and a deadline into structured weekly and daily plans.',
    detail:
      'Microservices-based MERN backend with Redis caching and a FastAPI AI service, secured with Firebase JWT auth. Cut manual planning effort by ~70% and improved API response time by ~40% at 100+ tasks per user.',
    stack: ['MERN', 'Redux Toolkit', 'Redis', 'FastAPI', 'Microservices'],
    tags: ['AI', 'Full Stack'],
    image: aiTaskFlow,
    code: 'https://github.com/praveengamini/Ai-TaskFlow',
    live: 'https://ai-taskflow-frontend.onrender.com/',
    featured: true,
  },
  {
    slug: 'chatpdf',
    title: 'ChatPDF',
    period: 'May — Jul 2025',
    summary: 'RAG-based document Q&A — upload PDFs and ask questions in natural language.',
    detail:
      'Document ingestion, Hugging Face embeddings and semantic retrieval with LangChain on a JWT-secured MERN backend. Tuned the retrieval pipeline to ~1s query latency with 50+ PDFs loaded concurrently in testing.',
    stack: ['MERN', 'LangChain', 'Hugging Face', 'JWT', 'Redux'],
    tags: ['AI', 'Full Stack'],
    image: chatPdf,
    code: 'https://github.com/praveengamini/ChatPdf',
    live: 'https://chatpdf-frontend.onrender.com',
    featured: true,
  },
  {
    slug: 'body-metric',
    title: 'Body-Metric',
    summary: 'Computer-vision body measurement with fit recommendations.',
    detail: 'Estimates body measurements from camera input and maps them to sizing recommendations.',
    stack: ['Python', 'OpenCV', 'React'],
    tags: ['AI'],
    image: bodyMetric,
    code: 'https://github.com/praveengamini/Body-Metric',
    live: 'https://body-metric-zfey.vercel.app/',
  },
  {
    slug: 'meeting-summarizer',
    title: 'Meeting Summarizer',
    summary:
      'Chrome extension that records meetings, summarises them with AI, and emails a PDF to participants.',
    detail:
      'Captures audio from the tab, transcribes and summarises it with an LLM, renders the summary to PDF and sends it to attendees automatically.',
    stack: ['JavaScript', 'Chrome APIs', 'LLM'],
    tags: ['AI', 'Extension'],
    image: meeting,
    code: 'https://github.com/praveengamini/MeetingExtension',
    featured: true,
  },
  {
    slug: 'quick-mart',
    title: 'Quick Mart',
    summary: 'E-commerce application with a customer storefront and an admin panel.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    tags: ['Full Stack'],
    image: qmart,
    code: 'https://github.com/praveengamini/q-mart',
  },
  {
    slug: 'smart-study',
    early: true,
    title: 'Smart Study',
    summary: 'Front-end study companion for students.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    tags: ['Frontend'],
    image: smartStudy,
    code: 'https://github.com/praveengamini/SmartStudy',
    live: 'https://praveengamini.github.io/SmartStudy/',
  },
  {
    slug: 'java-ecommerce',
    early: true,
    title: 'Java E-Commerce',
    summary: 'Simple e-commerce app with a Java/MySQL backend.',
    stack: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    tags: ['Backend'],
    image: javaEcom,
    code: 'https://github.com/praveengamini/JavaEcommerce',
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    summary: 'This site. React, Vite and Tailwind.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    tags: ['Frontend'],
    image: portfolio,
    code: 'https://github.com/praveengamini/portfolio',
    live: 'https://praveengamini.netlify.app',
  },
  {
    slug: 'clock',
    early: true,
    title: 'Clock',
    summary: 'Timer, stopwatch and digital clock in C.',
    stack: ['C'],
    tags: ['Systems'],
    image: clock,
    code: 'https://onlinegdb.com/pHVyzhK5T',
  },
];

export const projectTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
