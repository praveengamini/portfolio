import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import LogoTile from '../ui/LogoTile';
import { labelsFor } from '../../data/pathMeta';

// One role, as a résumé record — the centrepiece of the site.
//
// The record reads in three tiers and spends its hue in exactly two places.
// Tier 1 is the company name (fg); tier 2 is the label rail — the pathMeta
// label for each bullet, set as a real <h4> in unit-ink, sitting on one x-axis
// beside the prose from 1024 up and stacked above it below that; tier 3 is the
// prose itself, .t-body/text-muted, never interrupted. The label IS the list
// marker, so there are no dots, no icons and no rules between bullets.
//
// Technology is answered once, above the hairline, by a single row of at most
// seven neutral tags — not by bolding names inside the paragraphs, which only
// helps a reader already inside them and would be a second system doing the
// same job. Every bullet renders in full: no clamp, no accordion, no read-more.
//
// The two hue slots per record are the 6px top band and the labels. Nothing
// else is tinted.

const cx = (...parts) => parts.filter(Boolean).join(' ');

// The `unit-*` hues stay Duolingo without any new token: they drive --unit for
// the top band and --unit-ink for the label rail.
const UNIT = ['unit-green', 'unit-purple', 'unit-blue'];

// The stack each record shows, keyed by company, ordered by recruiter salience
// and hard-capped at seven. Derived from the bullet strings themselves; what is
// omitted is still in the prose and in the Skills band below. Neutral, never
// tinted — the record's hue budget is already spent.
const TAGS = {
  TalentXO: ['Python', 'Flask', 'MySQL', 'React', 'GCP', 'Nginx', 'Gemini & Claude'],
  'Code At Random': ['Python', 'FastAPI', 'LangChain', 'RAG', 'RabbitMQ', 'PostgreSQL', 'Qdrant'],
  'MADTIN Technologies': ['FastAPI', 'PostgreSQL', 'JWT', 'REST', 'AWS', 'Docker', 'CI/CD'],
};

const ExternalMark = () => (
  <FaArrowUpRightFromSquare aria-hidden="true" size={11} className="shrink-0 opacity-70" />
);

const JobArticle = ({ job, index = 0, current = false }) => {
  const labels = labelsFor(job.company);
  const tags = TAGS[job.company] || [];

  return (
    <article className={cx('card min-w-0 overflow-hidden', UNIT[index % UNIT.length])}>
      <div className="p-4 sm:p-5 lg:p-7">
        <header className="grid min-w-0 gap-x-8 gap-y-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,auto)] lg:items-start">
          <div className="flex min-w-0 items-start gap-3.5 sm:gap-4">
            <LogoTile src={job.logo} alt="" size={48} radius={14} pad={4} />

            <div className="min-w-0">
              <h3 className="t-h3 min-w-0 text-fg">
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[6px] transition-colors duration-150 motion-reduce:transition-none [@media(hover:hover)]:hover:text-blue-ink"
                  >
                    {job.company}
                    <ExternalMark />
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                ) : (
                  job.company
                )}
              </h3>

              <p className="t-body-sm mt-0.5 min-w-0 text-fg">{job.role}</p>

              <p className="t-micro mt-2 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 tabular text-muted">
                {current ? (
                  <>
                    <span className="sr-only">Current role. </span>
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-green" />
                  </>
                ) : null}
                <span>{job.period}</span>
                {job.location ? (
                  <>
                    <span aria-hidden="true" className="text-faint">
                      ·
                    </span>
                    <span>{job.location}</span>
                  </>
                ) : null}
              </p>

              {job.product ? (
                <p className="t-body-sm mt-1.5 min-w-0 text-muted">
                  Built{' '}
                  <a
                    href={job.product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[6px] text-blue-ink decoration-2 underline-offset-[3px] transition-colors duration-150 motion-reduce:transition-none [@media(hover:hover)]:hover:underline"
                  >
                    {job.product.name}
                    <ExternalMark />
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </p>
              ) : null}
            </div>
          </div>

          {tags.length ? (
            <ul
              role="list"
              aria-label={`Technologies at ${job.company}`}
              className="flex min-w-0 flex-wrap gap-1.5 lg:ml-auto lg:justify-end"
            >
              {tags.map((tag) => (
                <li
                  key={tag}
                  role="listitem"
                  style={{ height: 26 }}
                  className="t-eyebrow inline-flex items-center rounded-tag border-2 border-line bg-subtle px-2.5 normal-case tracking-normal text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        {job.summary ? (
          <p className="t-body mt-4 min-w-0 max-w-[576px] text-muted [text-wrap:pretty] lg:mt-5">
            {job.summary}
          </p>
        ) : null}

        <span aria-hidden="true" className="mt-5 block h-0.5 w-full bg-line" />

        <ul
          role="list"
          aria-label={`What I did at ${job.company}`}
          className="mt-5 min-w-0 space-y-7 lg:space-y-8"
        >
          {job.points.map((point, i) => (
            <li
              key={point}
              role="listitem"
              className="min-w-0 lg:grid lg:grid-cols-[176px_minmax(0,1fr)] lg:gap-x-7 xl:grid-cols-[192px_minmax(0,1fr)] xl:gap-x-8"
            >
              {labels[i] ? (
                <h4 className="t-h4 min-w-0 text-fg [text-wrap:balance] lg:pt-px">
                  {labels[i]}
                  <span className="sr-only">.</span>
                </h4>
              ) : null}

              <p
                className={cx(
                  't-body mt-1.5 min-w-0 max-w-[576px] text-muted [text-wrap:pretty] lg:mt-0',
                  !labels[i] && 'lg:col-span-2'
                )}
              >
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default JobArticle;
