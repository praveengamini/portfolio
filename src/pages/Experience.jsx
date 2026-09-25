import JobArticle from '../components/home/JobArticle';
import { experience } from '../data/content';

// /experience — the full work record, and nothing else.
//
// It used to be the top band of Home. Home now keeps only the current role, so
// the other two had nowhere to live: a recruiter who wants the whole history
// comes here and reads it in one column, newest first.
//
// The page opens exactly the way /projects and /about do — one `t-h1 text-fg`
// heading on its own header row, then a muted lead at the same measure — so the
// five pages share one opening. There is no PageSection band under it: the <h1>
// already says "Experience", and a rule with the same word under it would be
// the heading twice.
//
// The roles render through the same <JobArticle> Home uses, at the same index
// and with the same `flex flex-col gap-5 md:gap-6` wrapper Home gives its
// experience band, so a role looks identical in both places. The component is
// not touched, not wrapped and not restyled here.
//
// The page sets no container width — AppShell owns that.

// Derived, never hard-coded — the same rule the section counts follow.
const LEAD = `The full record — ${experience.length} roles, newest first, with what I built in each.`;

const Experience = () => (
  <div className="flex min-w-0 flex-col gap-10 md:gap-12 lg:gap-14">
    <header className="min-w-0">
      <h1 className="t-h1 text-fg">Experience</h1>
      <p className="t-body-lg mt-2 max-w-[58ch] text-muted">{LEAD}</p>
    </header>

    <div className="flex min-w-0 flex-col gap-5 md:gap-6">
      {experience.map((job, index) => (
        <JobArticle key={job.company} job={job} index={index} current={index === 0} />
      ))}
    </div>
  </div>
);

export default Experience;
