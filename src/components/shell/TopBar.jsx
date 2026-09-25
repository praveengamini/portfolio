import { Link } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

// The mobile header: the wordmark, and the theme toggle on the right.
//
// The toggle lives here rather than in the page footer because the footer sits
// below the whole page — switching theme should not cost a full scroll. The
// off-site links stay in the footer, where reaching for them is deliberate.

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

    <ThemeToggle size={40} className="ml-auto shrink-0" />
  </header>
);

export default TopBar;
