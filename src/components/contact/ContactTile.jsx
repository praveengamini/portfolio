import { FaChevronRight } from 'react-icons/fa6';
import IconBadge from '../ui/IconBadge';

// Spec 5.1 — one row of the "Reach me directly" card.
//
// Four identical 72px rows inside a single card, separated by `divide-y-2`.
// Every row has the same three cells (badge, label over value, chevron), so the
// list is uniform by construction. The location row passes no `href`: it renders
// the same three cells with an empty chevron cell and is not a link.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const ROW = 'grid h-[72px] grid-cols-[36px_minmax(0,1fr)_20px] items-center gap-3 px-4';

const ContactTile = ({ href, label, value, icon, hue = 'blue', className = '', ...rest }) => {
  const cells = (
    <>
      <IconBadge icon={icon} hue={hue} size={36} />

      <span className="min-w-0">
        <span className="t-micro block text-muted">{label}</span>
        <span className="t-body-sm wrap-anywhere block text-fg">
          {value}
          {href ? <span className="sr-only"> (opens in new tab)</span> : null}
        </span>
      </span>

      {href ? (
        <span
          aria-hidden="true"
          className="inline-flex shrink-0 justify-end text-faint transition-transform duration-150 [@media(hover:hover)]:group-hover:translate-x-1"
        >
          <FaChevronRight size={14} />
        </span>
      ) : (
        <span aria-hidden="true" />
      )}
    </>
  );

  return (
    <li className={cx('min-w-0', className)}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={cx(ROW, 'group no-underline [@media(hover:hover)]:hover:bg-subtle')}
          {...rest}
        >
          {cells}
        </a>
      ) : (
        <div className={ROW} {...rest}>
          {cells}
        </div>
      )}
    </li>
  );
};

export default ContactTile;
