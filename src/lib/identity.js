import { FaEnvelope, FaGithub, FaLinkedinIn, FaLocationDot } from 'react-icons/fa6';
import { profile } from '../data/content';
import { githubHandle } from './format';

// The four identity facts — where I am and the three ways to reach me — defined
// once for the whole site: same icon, same hue, same display string on Home,
// /about and /contact. Before this they were written out in three files and
// drifted (three different GitHub labels, two different LinkedIn ones).
//
// Icons are passed as components, not elements, which is what IconBadge and
// ContactTile both take — so this stays a plain .js module.

export const GITHUB_HANDLE = githubHandle(profile.github) || 'praveengamini';

// The LinkedIn URL ends in an opaque member id; this is the readable name to
// print for it, stated once.
export const LINKEDIN_HANDLE = 'praveen-gamini';

export const identity = {
  location: {
    key: 'location',
    icon: FaLocationDot,
    hue: 'red',
    label: 'Based in',
    value: profile.location,
    text: profile.location,
  },
  email: {
    key: 'email',
    icon: FaEnvelope,
    hue: 'red',
    label: 'Email',
    value: profile.email,
    text: profile.email,
    href: profile.mailUrl,
  },
  github: {
    key: 'github',
    icon: FaGithub,
    hue: 'neutral',
    label: 'GitHub',
    value: GITHUB_HANDLE,
    text: `github.com/${GITHUB_HANDLE}`,
    href: profile.github,
  },
  linkedin: {
    key: 'linkedin',
    icon: FaLinkedinIn,
    hue: 'blue',
    label: 'LinkedIn',
    value: LINKEDIN_HANDLE,
    text: LINKEDIN_HANDLE,
    href: profile.linkedin,
  },
};

export default identity;
