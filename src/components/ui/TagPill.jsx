import { tagHues } from '../../data/skills';

// Spec 4.15 — the project tag. The hue comes from `tagHues` in skills.js and is
// resolved through a static class map, never by building a class name.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const HUE = {
  purple:
    'bg-purple-tint border-purple-edge text-purple-ink dark:bg-purple/[0.14] dark:border-purple/[0.35] dark:text-purple-ink',
  blue: 'bg-blue-tint border-blue-edge text-blue-ink dark:bg-blue/[0.14] dark:border-blue/[0.35] dark:text-blue-ink',
  pink: 'bg-pink-tint border-pink-edge text-pink-ink dark:bg-pink/[0.14] dark:border-pink/[0.35] dark:text-pink-ink',
  green:
    'bg-green-tint border-green-edge text-green-ink dark:bg-green/[0.14] dark:border-green/[0.35] dark:text-green-ink',
  gold: 'bg-gold-tint border-gold-edge text-gold-ink dark:bg-gold/[0.14] dark:border-gold/[0.35] dark:text-gold-ink',
  neutral: 'bg-subtle border-line text-muted',
};

const TagPill = ({ tag, as: Component = 'span', className = '', ...rest }) => (
  <Component
    className={cx(
      't-micro inline-flex items-center rounded-tag border-2 px-2.5',
      HUE[tagHues[tag]] || HUE.neutral,
      className
    )}
    style={{ height: 26 }}
    {...rest}
  >
    {tag}
  </Component>
);

export default TagPill;
