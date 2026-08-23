import {
  FaGraduationCap,
  FaTrophy,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
} from 'react-icons/fa6';
import profileImg from '../assets/images/praveen-profile.png';
import { profile, education, achievements, certifications } from '../data/content';

const About = () => (
  <>
    <section className="container-narrow pt-14 sm:pt-20">
      <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <div className="md:sticky md:top-24 md:self-start">
          <img
            src={profileImg}
            alt="Praveen Gamini"
            width={1200}
            height={1600}
            className="aspect-[4/5] w-full max-w-[16rem] rounded-2xl border border-line object-cover shadow-card md:w-64"
          />
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p className="flex items-center gap-2">
              <FaLocationDot size={12} className="text-accent" /> {profile.location}
            </p>
            <a
              className="flex items-center gap-2 hover:text-fg"
              href={profile.mailUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope size={12} className="text-accent" /> {profile.email}
            </a>
            <a
              className="flex items-center gap-2 hover:text-fg"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={12} className="text-accent" /> github.com/praveengamini
            </a>
            <a
              className="flex items-center gap-2 hover:text-fg"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={12} className="text-accent" /> LinkedIn
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">About me</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Engineer who likes systems that are simple to run.
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-fg/80">
            <p>
              I&apos;m a software engineer based in {profile.location}. I graduated in Computer Science from
              MVGR College of Engineering in 2026 and now work at {profile.company}, building and running an
              HR product on Python, React and GCP.
            </p>
            <p>
              Most of my recent work has been on the backend and AI side — ingestion pipelines, RAG services,
              LLM tool-calling, and the infrastructure to keep them running in production. I care about
              systems that are simple to operate and easy for the next person to understand.
            </p>
            <p>
              Outside work I build side projects, most of them on this site, and I&apos;m usually happy to
              talk about backend architecture, LLM tooling, or what I&apos;m currently learning.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            <div>
              <h2 className="flex items-center gap-2.5 text-xl font-semibold text-fg">
                <FaGraduationCap className="text-accent" size={18} /> Education
              </h2>
              <div className="card mt-4 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-fg">{education.degree}</h3>
                  <span className="font-mono text-xs text-muted">{education.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {education.school}, {education.place}
                </p>
                <p className="mt-2 inline-block rounded-md bg-accent/10 px-2 py-0.5 font-mono text-xs font-medium text-accent">
                  CGPA {education.cgpa}
                </p>
              </div>
            </div>

            <div>
              <h2 className="flex items-center gap-2.5 text-xl font-semibold text-fg">
                <FaTrophy className="text-accent" size={18} /> Achievements
              </h2>
              <ul className="mt-4 space-y-3">
                {achievements.map((a) => (
                  <li key={a.title} className="card p-5">
                    <p className="font-medium text-fg">{a.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{a.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-2.5 text-xl font-semibold text-fg">
                <FaCertificate className="text-accent" size={18} /> Certifications
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {certifications.map((c) => (
                  <li key={c} className="card px-4 py-3 text-sm text-fg/90">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="h-16" />
  </>
);

export default About;
