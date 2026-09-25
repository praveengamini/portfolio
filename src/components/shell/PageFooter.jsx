import { FaEnvelope, FaFileLines, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import IconButton from '../ui/IconButton';
import { profile } from '../../data/content';

// The one and only footer. Below `md` it also carries the off-site links,
// because there is no SideNav to hold them there. The theme toggle is NOT here:
// it sits in the mobile TopBar, so changing theme never costs a full scroll to
// the bottom of the page.
//
// It carries no nav row. Home / Projects / About / Contact / Resume were a
// fourth copy of the same five destinations already in the SideNav, the mobile
// BottomTabBar and the mobile TopBar — duplicated chrome at the bottom of every
// page. What is left is the reach-me row and the copyright, so the footer costs
// ~62px from `md` up instead of ~196.

const cx = (...parts) => parts.filter(Boolean).join(' ');

// Resume is here because the mobile tab bar holds five destinations and Resume
// is not one of them. Without this row it would be reachable only from the Home
// hero, so every other page on a phone would be a dead end for it.
const SOCIALS = [
  { key: 'resume', label: 'Resume', href: profile.resume, icon: <FaFileLines /> },
  { key: 'github', label: 'GitHub', href: profile.github, icon: <FaGithub /> },
  { key: 'linkedin', label: 'LinkedIn', href: profile.linkedin, icon: <FaLinkedinIn /> },
  { key: 'email', label: 'Email', href: profile.mailUrl, icon: <FaEnvelope /> },
];

const PageFooter = ({ className = '' }) => (
  <footer className={cx('mt-10 flex min-w-0 flex-col gap-5 border-t-2 border-line py-6', className)}>
    <div className="flex flex-wrap items-center gap-2 md:hidden">
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
    </div>

    <p className="t-micro wrap-anywhere normal-case text-muted">
      © {new Date().getFullYear()} {profile.name} · Built with React, Vite &amp; Tailwind
    </p>
  </footer>
);

export default PageFooter;
