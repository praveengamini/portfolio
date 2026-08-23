import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { tagStyles } from '../data/skills';

const ProjectCard = ({ project }) => (
  <article className="card group flex flex-col overflow-hidden transition-colors hover:border-fg/30">
    <a
      href={project.live || project.code}
      target="_blank"
      rel="noreferrer"
      className="relative block aspect-[16/9] overflow-hidden border-b border-line bg-bg"
      aria-label={`Open ${project.title}`}
    >
      {/* Blurred copy fills the frame so non-16:9 screenshots don't leave empty bands. */}
      <img
        src={project.image}
        alt=""
        aria-hidden
        loading="lazy"
        width={1200}
        height={675}
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-50 blur-xl"
      />
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        width={1200}
        height={675}
        className="relative h-full w-full object-contain p-2"
      />
    </a>

    <div className="flex flex-1 flex-col p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-snug text-fg">{project.title}</h3>
        <div className="flex shrink-0 gap-1">
          {project.live && (
            <a
              className="icon-btn !h-8 !w-8"
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              title="Live"
            >
              <FaArrowUpRightFromSquare size={12} />
            </a>
          )}
          <a
            className="icon-btn !h-8 !w-8"
            href={project.code}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source`}
            title="Source"
          >
            <FaGithub size={14} />
          </a>
        </div>
      </div>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-fg/80">{project.summary}</p>

      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
        {project.tags.map((t) => (
          <span key={t} className={`chip ${tagStyles[t] || 'border-line text-muted'}`}>
            {t}
          </span>
        ))}
        <span className="ml-auto font-mono text-[11px] text-muted">
          {project.stack.slice(0, 3).join(' · ')}
        </span>
      </div>
    </div>
  </article>
);

export default ProjectCard;
