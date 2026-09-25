import { FaArrowRight, FaFileLines } from 'react-icons/fa6';
import Button from '../ui/Button';
import MetaLinks from '../ui/MetaLinks';
import Portrait from '../ui/Portrait';
import identity from '../../lib/identity';
import { profile } from '../../data/content';

// The compact introduction — an introduction, not a section.
//
// The user's ruling: "experience should be only top only. 1) experience
// 2) skills." So this block states who I am and gets out of the way in roughly
// a third of a 900px viewport: name, role, the intro paragraph, then one meta
// row carrying the location and the three ways to reach me, and two buttons.
// There is no hero card and no stat strip — the 196px facts-rail card and the
// separate location line are folded into that single row, which is where the
// height came off.
//
// The meta row is the same MetaLinks object the About byline uses, so the two
// pages state the same four facts the same way.
//
// Every fact appears exactly once on this page: location, email, the GitHub
// handle and LinkedIn are here and nowhere else on it.

const META = [identity.location, identity.github, identity.linkedin, identity.email];

const Masthead = () => (
  <section aria-labelledby="home-title" className="min-w-0">
    <div className="flex min-w-0 flex-col-reverse items-start gap-5 sm:flex-row sm:justify-between sm:gap-8">
      <div className="min-w-0 flex-1">
        <p className="t-eyebrow text-muted">
          {profile.role} · {profile.company}
        </p>

        <h1 id="home-title" className="t-hero mt-2 text-fg">
          {profile.name}
        </h1>

        <p className="t-body-lg mt-3 max-w-[58ch] text-fg">{profile.intro}</p>

        <MetaLinks items={META} label="Where I am and how to reach me" className="mt-5" />

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button
            href={profile.resume}
            external
            size="lg"
            variant="primary"
            icon={<FaFileLines />}
            className="max-sm:flex-[1_1_150px]"
          >
            Resume
          </Button>

          <Button
            to="/projects"
            size="lg"
            variant="secondary"
            iconRight={<FaArrowRight />}
            className="max-sm:flex-[1_1_150px]"
          >
            View projects
          </Button>
        </div>
      </div>

      <Portrait
        className="w-24 sm:w-32 lg:w-40"
        sizes="(min-width: 1024px) 160px, (min-width: 640px) 128px, 96px"
        priority
      />
    </div>

    <span aria-hidden="true" className="mt-6 block h-0.5 w-full bg-line" />
  </section>
);

export default Masthead;
