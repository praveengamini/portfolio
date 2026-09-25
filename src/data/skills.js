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
import {
  FaJava,
  FaAws,
  FaRobot,
  FaDiagramProject,
  FaKey,
  FaMagnifyingGlass,
  FaPlug,
  FaCubes,
  FaCode,
  FaPalette,
  FaDatabase,
  FaCloud,
} from 'react-icons/fa6';

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
      { name: 'Microservices', icon: FaCubes, color: '#8E44C9' },
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

// Project tags map to a token hue, never to a class string — the consuming
// component holds the static hue → class map.
export const tagHues = {
  AI: 'purple',
  'Full Stack': 'blue',
  Frontend: 'pink',
  Backend: 'green',
  Extension: 'gold',
  Systems: 'neutral',
};

// Brand marks that go muddy or invisible on the dark page background.
export const darkIconOverrides = {
  LangChain: '#F1F7FB',
  LangGraph: '#F1F7FB',
  'Redux Toolkit': '#A98BE0',
  CSS: '#A57BD6',
  Python: '#5A9BD5',
  MySQL: '#6FA3CC',
  SQL: '#7C9CF0',
  PostgreSQL: '#7C9CF0',
  Microservices: '#CE82FF',
};

export const groupMeta = {
  Languages: { hue: 'blue', icon: FaCode },
  'Backend & AI': { hue: 'purple', icon: FaRobot },
  Frontend: { hue: 'pink', icon: FaPalette },
  Databases: { hue: 'green', icon: FaDatabase },
  'Cloud & DevOps': { hue: 'orange', icon: FaCloud },
};
