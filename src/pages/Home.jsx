import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
  FaFileLines,
  FaBriefcase,
  FaCode,
  FaLayerGroup,
} from 'react-icons/fa6';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { profile, experience } from '../data/content';
import { skillGroups } from '../data/skills';
import { projects } from '../data/projects';
import profileImg from '../assets/images/praveen-profile.png';

const featured = projects.filter((p) => p.featured);

const stats = [
  { value: '1+', label: 'year building AI/backend systems' },
  { value: '3', label: 'companies' },
  { value: '9', label: 'shipped projects' },
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="container-narrow pb-12 pt-14 sm:pb-20 sm:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.role} at {profile.company}
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-fg sm:text-5xl">
            Hi, I&apos;m Praveen.
            <br />
            <span className="text-muted">I build backend &amp; AI systems.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-fg/80 sm:text-lg">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-primary">
              View projects <FaArrowRight size={12} />
            </Link>
            <a className="btn-secondary" href={profile.resume} target="_blank" rel="noreferrer">
              <FaFileLines size={13} /> Resume
            </a>
            <div className="ml-1 flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="GitHub"
              >
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
              <a
                href={profile.mailUrl}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="Email"
              >
                <FaEnvelope size={15} />
              </a>
            </div>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <FaLocationDot size={12} className="text-accent" /> {profile.location}
          </p>
        </div>

        <div className="relative mx-auto w-56 sm:w-64">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-accent/15 blur-2xl" aria-hidden />
          <img
            src={profileImg}
            alt="Praveen Gamini"
            width={1200}
            height={1600}
            fetchPriority="high"
            className="aspect-square w-full rounded-2xl border border-line object-cover shadow-card"
          />
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-card">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-5 text-center sm:px-6">
            <dt className="order-2 text-xs text-muted">{s.label}</dt>
            <dd className="font-mono text-2xl font-semibold text-accent sm:text-3xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>

    {/* Experience */}
    <Section
      eyebrow="Where I've worked"
      title="Experience"
      icon={FaBriefcase}
      className="border-t border-line"
    >
      <ol className="relative ml-2 border-l border-line">
        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-10 pl-8 last:pb-0">
            <span
              className={[
                'absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg',
                i === 0 ? 'bg-accent' : 'bg-muted',
              ].join(' ')}
            />
            <div className="card p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-white">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-fg">{job.role}</h3>
                    <p className="mt-0.5 text-sm font-medium text-accent">
                      {job.url ? (
                        <a href={job.url} target="_blank" rel="noreferrer" className="hover:underline">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                      {job.product && (
                        <span className="text-muted">
                          {' '}
                          · built{' '}
                          <a
                            href={job.product.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-fg hover:underline"
                          >
                            {job.product.name} ↗
                          </a>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                  <p className="mt-0.5 text-xs text-muted">{job.location}</p>
                </div>
              </div>
              {job.summary && <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>}
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-fg/80">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>

    {/* Selected work */}
    <Section
      eyebrow="Things I've built"
      title="Selected work"
      icon={FaCode}
      className="border-t border-line"
      action={
        <Link to="/projects" className="link inline-flex items-center gap-1.5 text-sm font-medium">
          All projects <FaArrowRight size={11} />
        </Link>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>

    {/* Skills */}
    <Section eyebrow="What I work with" title="Skills" icon={FaLayerGroup} className="border-t border-line">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.group} className="card p-5">
            <h3 className="text-sm font-semibold text-fg">{g.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg px-2.5 py-1.5 text-sm text-fg/90"
                >
                  <Icon size={14} style={color ? { color } : undefined} className={color ? '' : 'text-fg'} />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  </>
);

export default Home;
