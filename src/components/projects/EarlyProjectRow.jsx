import { FaCode, FaGithub } from 'react-icons/fa6';
import Button from '../ui/Button';
import TagPill from '../ui/TagPill';
import { isGithub } from '../../lib/format';

// Spec 4.6 — a row in the compact "Earlier projects" list.
//
// From 1024 up the row is four cells on one line: thumbnail | title + tag +
// summary | the full stack | the actions. Below that the stack and the actions
// drop under the summary. Every field the project carries is visible in both
// shapes, and a project without a live link keeps the same structure.

const EarlyProjectRow = ({ project }) => {
  const { slug, title, summary, stack = [], tags = [], image, code, live } = project;
  const SourceIcon = isGithub(code) ? FaGithub : FaCode;

  return (
    <li
      id={slug}
      className="grid grid-cols-[64px_minmax(0,1fr)] items-start gap-x-4 gap-y-3 p-4 lg:grid-cols-[72px_minmax(0,1fr)_240px_auto] lg:items-center lg:gap-4"
    >
      <img
        src={image}
        alt={`${title} screenshot`}
        loading="lazy"
        decoding="async"
        width={72}
        height={72}
        className="h-16 w-16 rounded-tile border-2 border-line bg-subtle object-contain p-1 lg:h-[72px] lg:w-[72px]"
      />

      <div className="min-w-0">
        <h3 className="t-h4 flex flex-wrap items-center gap-2 text-fg">
          {title}
          {tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </h3>
        <p className="t-body-sm mt-1 text-muted">{summary}</p>
      </div>

      <p className="t-micro col-start-2 text-muted lg:col-start-3">{stack.join(' · ')}</p>

      <div className="col-start-2 flex flex-wrap gap-2 lg:col-start-4 lg:justify-end">
        {live ? (
          <Button href={live} external variant="secondary" size="sm" aria-label={`${title} live site`}>
            Live
          </Button>
        ) : null}

        <Button
          href={code}
          external
          variant="secondary"
          size="sm"
          icon={<SourceIcon />}
          aria-label={`${title} source code`}
        >
          Source
        </Button>
      </div>
    </li>
  );
};

export default EarlyProjectRow;
