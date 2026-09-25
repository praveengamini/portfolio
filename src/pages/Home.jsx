import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PageSection from '../components/ui/PageSection';
import Masthead from '../components/home/Masthead';
import SkillsBand from '../components/home/SkillsBand';
import JobArticle from '../components/home/JobArticle';
import { experience } from '../data/content';
import { skillGroups } from '../data/skills';

// The recruiter's 30-second page: who I am, what I am doing right now, what I
// work with, and how to reach me. Four blocks, nothing else.
//
// "Only the current working one in home and skills" — so the full history moved
// to /experience and Home keeps exactly one record, TalentXO, rendered in full
// by the same JobArticle the /experience page uses. The two older roles are not
// summarised here, not teased here and not linked one by one; the band's "All
// experience" link is the single door to them.
//
// The selected-work strip that used to sit between Skills and the call to
// action is gone too. The masthead's "View projects" button already points at
// /projects, and a second pointer at the same page was the last thing on this
// page competing with the current role for a recruiter's first screen.
//
// The section id="skills" is load-bearing: /skills redirects to /#skills.

const current = experience[0];
const skillCount = skillGroups.reduce((total, group) => total + group.items.length, 0);

// The quiet band link, in the same muted-text-to-blue-on-hover treatment the
// masthead's meta row uses — not a second button style next to a heading.
const allExperienceLink = (
  <Link
    to="/experience"
    className="t-body-sm inline-flex shrink-0 items-center gap-1.5 rounded-[6px] text-muted transition-colors duration-150 motion-reduce:transition-none [@media(hover:hover)]:hover:text-blue-ink [@media(hover:hover)]:hover:underline"
  >
    All experience
    <FaArrowRight aria-hidden="true" size={12} className="shrink-0" />
  </Link>
);

const Home = () => (
  <div className="flex min-w-0 flex-col gap-10 md:gap-12 lg:gap-14">
    <Masthead />

    <PageSection id="experience" titleId="experience-title" title="Current role" actions={allExperienceLink}>
      <JobArticle job={current} index={0} current />
    </PageSection>

    <PageSection
      id="skills"
      titleId="skills-title"
      title="Skills"
      count={`${skillCount} across ${skillGroups.length} groups`}
    >
      <SkillsBand />
    </PageSection>

    <section aria-labelledby="cta-title" className="min-w-0">
      <Card
        padding={24}
        className="grid min-w-0 gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6"
      >
        <div className="min-w-0">
          <h2 id="cta-title" className="t-h2 text-fg">
            Get in touch
          </h2>
          <p className="t-body mt-1.5 max-w-[62ch] text-muted">
            Questions about any of the work above? Send me a message.
          </p>
        </div>

        <Button to="/contact" size="lg" variant="primary" iconRight={<FaArrowRight />}>
          Contact me
        </Button>
      </Card>
    </section>
  </div>
);

export default Home;
