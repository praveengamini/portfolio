import { m, useReducedMotion } from 'motion/react';

/**
 * 32x32 flat navigation icons. Each shape carries a darker bottom "lip".
 * Colours are identical in both themes.
 * Hover: rotate [0, -8, 6, 0] over 400ms — driven by the `hovered` prop when the
 * parent owns the hover state, otherwise by the icon's own pointer hover.
 */

const WOBBLE = { rotate: [0, -8, 6, 0] };

const IconShell = ({ size = 32, hovered, label, className = '', children }) => {
  const reduce = useReducedMotion();
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' };
  const controlled = hovered !== undefined;

  const animate = controlled && hovered && !reduce ? WOBBLE : controlled ? { rotate: 0 } : undefined;

  return (
    <m.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      focusable="false"
      className={className}
      animate={animate}
      whileHover={controlled || reduce ? undefined : WOBBLE}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      {...a11y}
    >
      {children}
    </m.svg>
  );
};

export const HomeIcon = (props) => (
  <IconShell {...props}>
    <rect x="21" y="5" width="4" height="7" rx="1.5" fill="#EA2B2B" />
    <path d="M16 3 L29 13 H3 Z" fill="#FF4B4B" />
    <rect x="3" y="13" width="26" height="3" rx="1.5" fill="#EA2B2B" />
    <rect x="6" y="16" width="20" height="13" rx="3" fill="#FFE0A3" />
    <rect x="6" y="26" width="20" height="3" rx="1.5" fill="#E7A601" />
    <rect x="13" y="19" width="6" height="10" rx="2" fill="#1CB0F6" />
  </IconShell>
);

export const ProjectsIcon = (props) => (
  <IconShell {...props}>
    <rect x="3" y="6" width="26" height="21" rx="4" fill="#CE82FF" />
    <rect x="3" y="23" width="26" height="4" rx="2" fill="#A568CC" />
    <rect x="5" y="8" width="10" height="15" rx="2" fill="#FFFFFF" />
    <rect x="17" y="8" width="10" height="15" rx="2" fill="#FFFFFF" />
    <rect x="7" y="11" width="6" height="1.6" rx="0.8" fill="#E5E5E5" />
    <rect x="7" y="14.5" width="6" height="1.6" rx="0.8" fill="#E5E5E5" />
    <rect x="19" y="11" width="6" height="1.6" rx="0.8" fill="#E5E5E5" />
    <rect x="19" y="14.5" width="6" height="1.6" rx="0.8" fill="#E5E5E5" />
    <rect x="14.5" y="6" width="3" height="21" rx="1.5" fill="#A568CC" />
    <path d="M21 6 h4 v9 l-2 -2 -2 2 Z" fill="#FF4B4B" />
  </IconShell>
);

export const AboutIcon = (props) => (
  <IconShell {...props}>
    <circle cx="16" cy="16" r="13" fill="#FF86D0" />
    <path d="M3.6 19.5 A13 13 0 0 0 28.4 19.5 Z" fill="#E562B3" />
    <circle cx="16" cy="14" r="7" fill="#FFE0A3" />
    <path d="M9 14 C9 7.5 23 7.5 23 14 C23 10.6 20 9.4 16 9.4 C12 9.4 9 10.6 9 14 Z" fill="#4B4B4B" />
    <path d="M9 24 a7 7 0 0 1 14 0 Z" fill="#FFE0A3" />
  </IconShell>
);

export const ContactIcon = (props) => (
  <IconShell {...props}>
    <rect x="3" y="7" width="26" height="18" rx="4" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="2" />
    <rect x="4" y="21" width="24" height="4" rx="2" fill="#E5E5E5" />
    <path d="M3 11 a4 4 0 0 1 4 -4 h18 a4 4 0 0 1 4 4 l-13 8 Z" fill="#1CB0F6" />
    <path d="M3 11 l13 8 13 -8 v2 l-13 8 -13 -8 Z" fill="#1899D6" />
    <path
      d="M16 23 c-3 -2.4 -4.6 -3.8 -4.6 -5.6 a2.4 2.4 0 0 1 4.6 -1 a2.4 2.4 0 0 1 4.6 1 c0 1.8 -1.6 3.2 -4.6 5.6 Z"
      fill="#FF4B4B"
    />
  </IconShell>
);

export const ExperienceIcon = (props) => (
  <IconShell {...props}>
    <path
      d="M12.5 9 V8 A2.5 2.5 0 0 1 15 5.5 h2 A2.5 2.5 0 0 1 19.5 8 V9"
      fill="none"
      stroke="#58A700"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect x="3" y="9" width="26" height="20" rx="4" fill="#58CC02" />
    <rect x="3" y="25" width="26" height="4" rx="2" fill="#58A700" />
    <rect x="8" y="13" width="16" height="11" rx="2" fill="#FFFFFF" />
    <rect x="10.5" y="16" width="11" height="1.8" rx="0.9" fill="#E5E5E5" />
    <rect x="10.5" y="19.5" width="7" height="1.8" rx="0.9" fill="#E5E5E5" />
  </IconShell>
);

export const ResumeIcon = (props) => (
  <IconShell {...props}>
    <rect x="6" y="3" width="20" height="26" rx="4" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="2" />
    <rect x="7" y="25" width="18" height="4" rx="2" fill="#E5E5E5" />
    <rect x="10" y="8" width="12" height="2" rx="1" fill="#E5E5E5" />
    <rect x="10" y="12.5" width="12" height="2" rx="1" fill="#E5E5E5" />
    <rect x="10" y="17" width="8" height="2" rx="1" fill="#E5E5E5" />
    <rect x="3" y="19" width="26" height="5" rx="2.5" fill="#FFC800" />
    <rect x="3" y="22" width="26" height="2" rx="1" fill="#E7A601" />
  </IconShell>
);
