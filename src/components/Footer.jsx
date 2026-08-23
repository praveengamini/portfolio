import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileLines } from 'react-icons/fa6';
import { profile } from '../data/content';

const Footer = () => (
  <footer className="border-t border-line bg-card/50">
    <div className="container-narrow flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-fg">Praveen Gamini</p>
        <p className="mt-1 text-sm text-muted">Software Engineer · Bangalore</p>
      </div>
      <div className="flex gap-2">
        <a href={profile.mailUrl} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Email">
          <FaEnvelope size={15} />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
          <FaGithub size={16} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={15} />
        </a>
        <a href={profile.resume} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Resume">
          <FaFileLines size={14} />
        </a>
      </div>
    </div>
    <div className="container-narrow border-t border-line py-4 text-xs text-muted">
      © {new Date().getFullYear()} Praveen Gamini · Built with React, Vite &amp; Tailwind
    </div>
  </footer>
);

export default Footer;
