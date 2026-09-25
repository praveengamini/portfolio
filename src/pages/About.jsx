import { achievements, education, profile } from '../data/content';
import PageSection from '../components/ui/PageSection';
import CourseCard from '../components/about/CourseCard';
import AchievementRow from '../components/about/AchievementRow';
import StagesPath from '../components/about/StagesPath';

// /about — the longer story, and nothing Home already says.
//
// The identity block that used to open this page (portrait, name, "Software
// Engineer · TalentXO", location, and the email/GitHub/LinkedIn byline) is
// gone. Home's hero carries all five of those facts, and repeating them here
// made /about read as a second landing page instead of an article. Home
// introduces him; this page continues.
//
// What is left is a plain page heading — the same `t-h1 text-fg` on its own
// header row that /projects and /contact use, so the three pages open the same
// way — then Achievements, Education, and the bio last.
//
// The bio closes the page rather than opening it: awards and qualifications are
// what a recruiter scans for, and the prose is the longer read for whoever is
// still going. It wears a section band like every other block so the rhythm
// down the page does not break.
//
// No lead paragraph in the /projects and /contact sense: the bio is the
// author's own copy and its first paragraph is the lead. It is left exactly as
// written, at the same weight as the two that follow, rather than split off
// into a muted one-liner.
//
// No manual rule under the header either — every section below wears the
// SectionBand rule, and a second one here only made the top look bandaged.
//
// No experience content lives on this page; experience is the top of Home and
// appears nowhere else on the site.
//
// Every fact still appears exactly once here:
//   each score                    → inside its own ring (CourseCard)
//   degree, school, place, period → the education cards
//   awards                        → the achievement cards
// Where the bio mentions the city or the degree it is doing so as prose, which
// is not the duplicated-chip problem this list guards against.

const BIO = [
  `I'm a software engineer based in ${profile.location}. I graduated in Computer Science from MVGR College of Engineering in 2026 and now work at ${profile.company}, building and running an HR product on Python, React and GCP.`,
  'Most of my recent work has been on the backend and AI side — ingestion pipelines, RAG services, LLM tool-calling, and the infrastructure to keep them running in production. I care about systems that are simple to operate and easy for the next person to understand.',
  'Outside work I build side projects, most of them on this site, and I’m usually happy to talk about backend architecture, LLM tooling, or what I’m currently learning.',
];

const About = () => (
  <div className="flex min-w-0 flex-col gap-10 md:gap-12 lg:gap-14">
    <header className="min-w-0">
      <h1 className="t-h1 text-fg">About</h1>
    </header>

    <PageSection titleId="achievements-title" title="Achievements" count={`${achievements.length} awards`}>
      <ul className="grid-12 auto-rows-fr" aria-label="Awards and placements">
        {achievements.map((achievement, index) => (
          <AchievementRow
            key={achievement.title}
            achievement={achievement}
            index={index}
            className="col-span-4 sm:last:col-span-8 lg:col-span-4 lg:last:col-span-4"
          />
        ))}
      </ul>
    </PageSection>

    {/* Education used to share a 5/7 row with Certifications. Certifications
        are gone, so the cards take the full band rather than sitting at 5/12
        under a 12-column rule with a hole beside it. Both records use the same
        card, so the degree and the intermediate line up exactly. */}
    <PageSection titleId="education-title" title="Education" count={`${education.length} qualifications`}>
      <ul className="flex min-w-0 flex-col gap-4" aria-label="Education">
        {education.map((course) => (
          <li key={course.school} className="min-w-0">
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </PageSection>

    {/* The prose closes the page. Awards and qualifications are the facts a
        recruiter scans for, so they come first; this is the longer read for
        whoever is still going. */}
    <PageSection titleId="background-title" title="Background">
      {/* The band sits on the site's own .grid-12 rather than a page-local
          grid; the prose keeps its 68ch cap and simply moves into a cell.
          The empty right of the band takes the stages timeline.

          StagesPath is content, not decoration, so the cell is NOT aria-hidden
          — it is an ordered list named by its own heading. It carries one line
          per stage and nothing else: no bullets, no summaries, no roles, no
          CGPA. Those live on /experience and in the Education cards above.

          The 1400px threshold is measured, not chosen: 68ch of t-body-lg is
          693.6px here, and an 8-of-12 cell only clears that once the grid is
          ~1052px wide, i.e. from a ~1373px viewport up. At 1400 the prose cell
          is 712px, so the paragraphs still render at the full 68ch they render
          at today. Below 1400 the cell does not exist and StagesPath returns
          null, so on phone, tablet and narrow laptops this section is
          byte-for-byte what it was: one full-width column of prose. The
          timeline can never cramp the measure at any width. */}
      <div className="grid-12 items-start">
        <div className="col-span-4 flex min-w-0 flex-col gap-4 sm:col-span-8 min-[1400px]:col-span-8">
          {BIO.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="t-body-lg max-w-[68ch] text-fg">
              {paragraph}
            </p>
          ))}
        </div>

        <div data-print-hide className="hidden min-[1400px]:col-span-4 min-[1400px]:block">
          <StagesPath />
        </div>
      </div>
    </PageSection>
  </div>
);

export default About;
