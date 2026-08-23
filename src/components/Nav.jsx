import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaXmark,
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaFileLines,
} from 'react-icons/fa6';
import { profile } from '../data/content';
import useTheme from './useTheme';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const desktopLink = ({ isActive }) =>
  [
    'relative py-1 text-sm transition-colors',
    'after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:rounded-full after:bg-accent after:transition-all',
    isActive ? 'text-fg after:w-full' : 'text-muted hover:text-fg after:w-0',
  ].join(' ');

const ThemeButton = ({ theme, toggle }) => (
  <button
    type="button"
    onClick={toggle}
    className="icon-btn"
    aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
  >
    {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
  </button>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-fg">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-bg">
            PG
          </span>
          <span>Praveen Gamini</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={desktopLink}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
            <FaGithub size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={15} />
          </a>
          <ThemeButton theme={theme} toggle={toggle} />
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-primary ml-2 !py-2">
            <FaFileLines size={13} /> Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeButton theme={theme} toggle={toggle} />
          <button
            type="button"
            className="icon-btn"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <FaBars size={16} />
          </button>
        </div>
      </div>

      {createPortal(
        <>
          {/* Backdrop */}
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className={[
              'fixed inset-0 z-[60] bg-black/60 transition-[opacity,visibility] duration-300 md:hidden',
              open ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0',
            ].join(' ')}
          />

          {/* Side drawer */}
          <aside
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className={[
              'fixed inset-y-0 right-0 z-[70] flex w-72 max-w-[85vw] flex-col border-l border-line bg-card shadow-2xl',
              'transition-[transform,visibility] duration-300 ease-out md:hidden',
              open ? 'visible translate-x-0' : 'invisible translate-x-full',
            ].join(' ')}
          >
            <div className="flex h-16 items-center justify-between border-b border-line px-5">
              <span className="font-semibold">Menu</span>
              <button
                type="button"
                className="icon-btn"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <FaXmark size={16} />
              </button>
            </div>

            <nav aria-label="Primary" className="flex flex-col px-3 py-3">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    [
                      'rounded-lg px-3 py-3 text-base transition-colors',
                      isActive
                        ? 'bg-accent/10 font-medium text-accent'
                        : 'text-muted hover:bg-line/60 hover:text-fg',
                    ].join(' ')
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base text-muted hover:bg-line/60 hover:text-fg"
              >
                <FaFileLines size={14} /> Resume
              </a>
            </nav>

            <div className="mt-auto flex items-center gap-2 border-t border-line px-5 py-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={15} />
              </a>
              <a
                href={profile.mailUrl}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="Email"
              >
                <FaEnvelope size={15} />
              </a>
            </div>
          </aside>
        </>,
        document.body
      )}
    </header>
  );
};

export default Nav;
