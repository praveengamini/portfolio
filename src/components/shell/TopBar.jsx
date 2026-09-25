import { Link } from 'react-router-dom';

// The mobile header: the logo mark and the wordmark, nothing else. The theme
// toggle and the off-site links live in the page footer on mobile.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const WORDMARK_GREEN = '#58CC02';

const TopBar = ({ className = '' }) => (
  <header
    className={cx('sticky top-0 z-30 flex h-14 items-center border-b-2 border-line bg-bg px-4', className)}
  >
    <Link
      to="/"
      aria-label="Praveen Gamini, home"
      className="inline-flex h-11 shrink-0 items-center gap-2 rounded-tile"
    >
      <span
        className="font-display"
        style={{
          fontWeight: 700,
          fontSize: 24,
          lineHeight: '28px',
          letterSpacing: '-0.5px',
          color: WORDMARK_GREEN,
        }}
      >
        praveen
      </span>
    </Link>
  </header>
);

export default TopBar;
