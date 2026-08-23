import {
  SiPython,
  SiJavascript,
  SiC,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiLangchain,
  SiRabbitmq,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiQdrant,
  SiGooglecloud,
  SiDocker,
  SiNginx,
  SiGit,
  SiGithubactions,
} from 'react-icons/si';
import { FaJava, FaAws, FaRobot, FaDiagramProject, FaKey, FaMagnifyingGlass, FaPlug } from 'react-icons/fa6';

// Brand colours are used for the icons — they give the section colour without inventing a palette.
export const skillGroups = [
  {
    group: 'Languages',
    items: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: 'C', icon: SiC, color: '#5C8DBC' },
      { name: 'JavaScript', icon: SiJavascript, color: '#E8C300' },
      { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    group: 'Backend & AI',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress, color: null },
      { name: 'Flask', icon: SiFlask, color: null },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'LangGraph', icon: FaDiagramProject, color: '#1C3C3C' },
      { name: 'LLM APIs', icon: FaRobot, color: '#D97757' },
      { name: 'RAG', icon: FaMagnifyingGlass, color: '#7C3AED' },
      { name: 'MCP', icon: FaPlug, color: '#D97757' },
      { name: 'OAuth', icon: FaKey, color: '#2563EB' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss, color: '#663399' },
    ],
  },
  {
    group: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' },
      { name: 'Qdrant', icon: SiQdrant, color: '#DC244C' },
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
    ],
  },
];

export const tagStyles = {
  AI: 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300',
  'Full Stack': 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300',
  Frontend: 'border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-300',
  Backend: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  Extension: 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  Systems: 'border-zinc-500/30 bg-zinc-500/10 text-zinc-600 dark:text-zinc-300',
};
