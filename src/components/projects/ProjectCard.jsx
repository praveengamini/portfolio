import { FaCode, FaGithub } from 'react-icons/fa6';
import Button from '../ui/Button';
import TagPill from '../ui/TagPill';
import { isGithub } from '../../lib/format';

// Spec 4.3 — the project card, near-square rather than a slab.
//
// Five parts in the same order on every card: an image band, title, summary,
// tags, stack, actions. The grid pins a uniform row height (see Projects.jsx)
// and `mt-auto` pins the action band to the bottom, so a project with a short
// summary shows slack above its buttons instead of a shorter card. The period
// chip is absolutely positioned, so the four projects without a period reserve
// nothing and shift nothing.
//
// The long `detail` paragraph is deliberately NOT rendered here. It was the
// single biggest contributor to card height and kept pushing the card back into
// the tall, thin slab this redesign exists to kill. The one-line summary plus
// the stack tiles answer "what is it, what is it built with" at a glance.

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const { slug, title, period, summary, stack = [], tags = [], image, code, live } = project;
  const sourceIcon = isGithub(code) ? <FaGithub /> : <FaCode />;

  return (
    <article id={slug} className="card mb-0.5 flex h-full flex-col overflow-hidden shadow-lip">
      {/* Padded neutral tile: the screenshot is contained, never cropped or stretched. */}
      <div className="relative aspect-[16/9] shrink-0 border-b-2 border-line bg-subtle sm:aspect-[16/7]">
        <img
          src={image}
          alt={`${title} screenshot`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-contain p-3"
        />

        {period ? (
          <span className="t-micro absolute right-3 top-3 inline-flex h-[26px] items-center rounded-tag border-2 border-line bg-bg px-2.5 tabular text-muted">
            {period}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="t-h3 text-fg">{title}</h3>
        {/* Summary only. The longer `detail` paragraph was what made these cards
            tall and thin; the one-line summary plus the stack carries the card. */}
        <p className="t-body-sm text-fg">{summary}</p>

        {tags.length ? (
          <ul aria-label={`${title} categories`} className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagPill key={tag} as="li" tag={tag} />
            ))}
          </ul>
        ) : null}

        {stack.length ? (
          // A compact separated line, not tiles. Tile rows ran to 72px on the
          // busiest cards, and the grid equalises every card to the tallest, so
          // those two rows were setting the height of all six. This shows the
          // FULL stack in roughly a third of the space — nothing is dropped.
          <p className="t-micro normal-case tracking-normal text-muted">
            <span className="sr-only">Built with: </span>
            {stack.join(' · ')}
          </p>
        ) : null}

        {/* Never fullWidth: a card with no live link keeps an identical band. */}
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {live ? (
            <Button href={live} external variant="primary" size="sm" aria-label={`${title} live site`}>
              Live
            </Button>
          ) : null}

          <Button
            href={code}
            external
            variant="secondary"
            size="sm"
            icon={sourceIcon}
            aria-label={`${title} source code`}
          >
            Source
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
