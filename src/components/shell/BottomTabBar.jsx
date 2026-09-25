import { NavLink } from 'react-router-dom';
import { m, useReducedMotion } from 'motion/react';
import { AboutIcon, ContactIcon, ExperienceIcon, HomeIcon, ProjectsIcon } from '../art/NavIcons';
import { springNav, springPop } from '../../lib/motion';

// The mobile nav landmark: five routed destinations in five equal icon-only
// columns. The active one wears a 48×40 blue box that slides with a shared
// layoutId.
//
// EXPERIENCE takes the second column, matching the sidebar order. The bar stays
// at five columns rather than growing to six — at 375px a sixth 56px hit target
// leaves the icons touching — so RESUME comes out of it. Resume is an off-site
// link, not a page, and it is still reachable on mobile from the Home hero; on
// tablet and up the sidebar keeps it.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const TABS = [
  { key: 'home', to: '/', end: true, label: 'Home', Icon: HomeIcon },
  { key: 'experience', to: '/experience', label: 'Experience', Icon: ExperienceIcon },
  { key: 'projects', to: '/projects', label: 'Projects', Icon: ProjectsIcon },
  { key: 'about', to: '/about', label: 'About', Icon: AboutIcon },
  { key: 'contact', to: '/contact', label: 'Contact', Icon: ContactIcon },
];

const HIT = 'relative inline-flex h-12 w-14 items-center justify-center';
const CELL = 'flex h-16 min-w-0 flex-1 items-center justify-center';

const BottomTabBar = ({ className = '' }) => {
  const reduce = useReducedMotion();

  const pill = (
    <m.span
      aria-hidden="true"
      layoutId="tab-active"
      transition={reduce ? { duration: 0 } : springNav}
      className="absolute inset-x-1 inset-y-1 rounded-tile border-2 border-blue-edge bg-blue-tint"
    />
  );

  const icon = (Icon) => (
    <m.span
      aria-hidden="true"
      className="relative z-10 inline-flex items-center justify-center"
      whileTap={reduce ? undefined : { scale: 0.9 }}
      transition={springPop}
    >
      <Icon size={30} />
    </m.span>
  );

  return (
    <nav
      aria-label="Primary"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      className={cx('fixed inset-x-0 bottom-0 z-40 border-t-2 border-line bg-bg', className)}
    >
      <div className="flex h-16 items-center">
        {TABS.map((tab) => (
          <NavLink
            key={tab.key}
            to={tab.to}
            end={tab.end}
            aria-label={tab.label}
            title={tab.label}
            className={CELL}
          >
            {({ isActive }) => (
              <span className={HIT}>
                {isActive ? pill : null}
                {icon(tab.Icon)}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomTabBar;
