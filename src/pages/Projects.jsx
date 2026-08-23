import { useState } from 'react';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import ProjectCard from '../components/ProjectCard';
import { projects, projectTags } from '../data/projects';

const main = projects.filter((p) => !p.early);
const early = projects.filter((p) => p.early);

const Projects = () => {
  const [tag, setTag] = useState('All');
  const visible = tag === 'All' ? main : main.filter((p) => p.tags.includes(tag));
  const tags = projectTags.filter((t) => t === 'All' || main.some((p) => p.tags.includes(t)));

  return (
    <section className="container-narrow pb-20 pt-14 sm:pt-20">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-fg sm:text-4xl">Projects</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        Things I&apos;ve built outside work — most with a live deployment. Source is linked for each.
      </p>

      <div role="tablist" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
        {tags.map((t) => {
          const active = t === tag;
          const count = t === 'All' ? main.length : main.filter((p) => p.tags.includes(t)).length;
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTag(t)}
              className={[
                'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                active
                  ? 'border-fg bg-fg text-bg'
                  : 'border-line bg-card text-muted hover:border-fg/40 hover:text-fg',
              ].join(' ')}
            >
              {t}
              <span className={`font-mono text-xs ${active ? 'text-bg/70' : 'text-muted/70'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {early.length > 0 && (
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-fg">Earlier projects</h2>
          <p className="mt-1 text-sm text-muted">
            From my first couple of years learning to code. Kept for the record.
          </p>
          <ul className="mt-5 divide-y divide-line rounded-xl border border-line bg-card">
            {early.map((p) => (
              <li
                key={p.slug}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3 sm:flex-nowrap"
              >
                <span className="font-medium text-fg">{p.title}</span>
                <span className="min-w-0 flex-1 text-sm text-muted">{p.summary}</span>
                <span className="hidden font-mono text-xs text-muted sm:inline">{p.stack.join(' · ')}</span>
                <span className="flex gap-3 text-sm">
                  {p.live && (
                    <a
                      className="link inline-flex items-center gap-1"
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaArrowUpRightFromSquare size={10} /> Live
                    </a>
                  )}
                  <a
                    className="link inline-flex items-center gap-1"
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={12} /> Source
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Projects;
