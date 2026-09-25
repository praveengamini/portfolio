// Spec 4.15 / 4.7 — the neutral meta chip used by MetaRow and friends.
// 30px tall, 2px border, 13px/800 sentence-case text, 12px icon.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const TONE = {
  neutral: 'border-line text-fg',
  green: 'bg-green-tint border-green-edge text-green-ink',
  gold: 'bg-gold-tint border-gold-edge text-gold-ink',
  blue: 'bg-blue-tint border-blue-edge text-blue-ink',
};

const Chip = ({
  as: Component = 'span',
  icon,
  iconClassName = '',
  tone = 'neutral',
  className = '',
  children,
  ...rest
}) => (
  <Component
    className={cx(
      't-eyebrow inline-flex items-center gap-1.5 rounded-tag border-2 px-2.5 normal-case tracking-normal',
      TONE[tone] || TONE.neutral,
      className
    )}
    style={{ height: 30 }}
    {...rest}
  >
    {icon ? (
      <span
        aria-hidden="true"
        className={cx('inline-flex shrink-0 items-center', iconClassName)}
        style={{ fontSize: 12 }}
      >
        {icon}
      </span>
    ) : null}
    {children}
  </Component>
);

export default Chip;
