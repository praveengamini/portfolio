import IconBadge from './IconBadge';

// The identity row: where I am and how to reach me, as one wrapped line.
//
// Home's masthead and the About byline render the same object here, with the
// same icons and the same hues the /contact rows use — email red, LinkedIn
// blue, GitHub neutral, location red — so the three pages read as one site
// rather than three takes on the same four facts.
//
// An item without an `href` (the location) is plain text with the same badge,
// so the row stays visually uniform.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const LINK_CLASS =
  't-body-sm wrap-anywhere text-muted [@media(hover:hover)]:hover:text-blue-ink [@media(hover:hover)]:hover:underline';

const MetaLinks = ({ items = [], label = 'Contact details', className = '' }) => (
  <ul aria-label={label} className={cx('flex min-w-0 flex-wrap items-center gap-x-6 gap-y-3', className)}>
    {items.map((item) => (
      <li key={item.key} className="flex min-w-0 items-center gap-2.5">
        <IconBadge icon={item.icon} hue={item.hue || 'neutral'} size={28} style="tint" />

        {item.href ? (
          <a href={item.href} target="_blank" rel="noreferrer" className={LINK_CLASS}>
            {item.text}
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        ) : (
          <span className="t-body-sm wrap-anywhere text-muted">{item.text}</span>
        )}
      </li>
    ))}
  </ul>
);

export default MetaLinks;
