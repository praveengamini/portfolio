import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import IconButton from '../ui/IconButton';
import ThemeToggle from '../ui/ThemeToggle';
import { AboutIcon, ContactIcon, ExperienceIcon, HomeIcon, ProjectsIcon, ResumeIcon } from '../art/NavIcons';
import NavItem from './NavItem';
import { profile } from '../../data/content';

// The fixed left rail: 256px wide with labels at ≥1280px, 88px and icon-only on
// tablet and desktop. Six destinations, then a footer holding the theme toggle
// and the three off-site links.
//
// EXPERIENCE sits second, straight after HOME: Home now shows the current role
// only, so the rail is where the rest of the record is reached from. The mobile
// tab bar carries the same six minus RESUME, which stays here because the rail
// has the room the five-column tab bar does not.

const cx = (...parts) => parts.filter(Boolean).join(' ');

// The wordmark green is the same hex in both themes.
const WORDMARK_GREEN = '#58CC02';

const SOCIALS = [
  { key: 'github', label: 'GitHub', href: profile.github, icon: <FaGithub /> },
  { key: 'linkedin', label: 'LinkedIn', href: profile.linkedin, icon: <FaLinkedinIn /> },
  { key: 'email', label: 'Email', href: profile.mailUrl, icon: <FaEnvelope /> },
];

const SideNav = ({ collapsed = false, className = '' }) => (
  <nav
    aria-label="Primary"
    style={{ width: 'var(--nav-w)' }}
    className={cx(
      'no-scrollbar fixed left-0 top-0 z-40 flex h-screen flex-col gap-2 overflow-y-auto',
      // Six rows plus a stacked footer overflow a short window by ~14px on the
      // collapsed rail; trimming the block padding there closes it without
      // changing the rail at normal heights.
      'border-r-2 border-line bg-bg px-4 py-6 [@media(max-height:760px)]:py-4',
      className
    )}
  >
    <Link
      to="/"
      aria-label="Praveen Gamini, home"
      className={cx(
        'mb-6 flex h-12 shrink-0 items-center rounded-tile',
        collapsed ? 'justify-center' : 'gap-2'
      )}
    >
      {collapsed ? (
        // Collapsed rail: a plain monogram stands in for the wordmark.
        <span
          className="font-display grid h-10 w-10 place-items-center rounded-tile"
          style={{
            fontWeight: 700,
            fontSize: 17,
            letterSpacing: '-0.5px',
            color: WORDMARK_GREEN,
            border: '2px solid currentColor',
          }}
        >
          PG
        </span>
      ) : (
        <span
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: 30,
            lineHeight: '34px',
            letterSpacing: '-0.5px',
            color: WORDMARK_GREEN,
          }}
        >
          praveen
        </span>
      )}
    </Link>

    <NavItem to="/" end icon={HomeIcon} label="Home" collapsed={collapsed} />
    <NavItem to="/experience" icon={ExperienceIcon} label="Experience" collapsed={collapsed} />
    <NavItem to="/projects" icon={ProjectsIcon} label="Projects" collapsed={collapsed} />
    <NavItem to="/about" icon={AboutIcon} label="About" collapsed={collapsed} />
    <NavItem to="/contact" icon={ContactIcon} label="Contact" collapsed={collapsed} />
    <NavItem href={profile.resume} external icon={ResumeIcon} label="Resume" collapsed={collapsed} />

    <div
      className={cx(
        'mt-auto flex shrink-0 items-center gap-2 border-t-2 border-line pt-4',
        collapsed ? 'flex-col' : 'flex-wrap'
      )}
    >
      {SOCIALS.map((social) => (
        <IconButton
          key={social.key}
          as="a"
          href={social.href}
          external
          size={44}
          label={social.label}
          icon={social.icon}
        />
      ))}
      <ThemeToggle size={44} />
    </div>
  </nav>
);

export default SideNav;
