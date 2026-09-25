import { forwardRef } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { popVariants } from '../../lib/motion';

// Original award art (spec 4.12): a rounded shield with a solid lip, a white
// glyph and a ribbon band carrying the rank. Decorative — the rank is repeated
// as text in the card beside it.

const cx = (...values) => values.filter(Boolean).join(' ');

const SHIELD = 'M8 3h56a5 5 0 0 1 5 5v40c0 11-10.5 18.5-33 27C13.5 66.5 3 59 3 48V8a5 5 0 0 1 5-5z';

// Always-light tones (spec 2.2 unit colours).
const TONES = {
  gold: { face: '#FFC800', lip: '#E7A601', ink: '#7A4F00' },
  silver: { face: '#CFD8DC', lip: '#A7B4BA', ink: '#FFFFFF' },
  purple: { face: '#CE82FF', lip: '#A568CC', ink: '#FFFFFF' },
};

const GLYPHS = {
  trophy: (
    <g fill="#FFFFFF">
      <path d="M-10-13h20v7c0 5.5-4.5 10-10 10s-10-4.5-10-10z" />
      <rect x="-2.5" y="3" width="5" height="6" />
      <rect x="-9" y="9" width="18" height="4" rx="1.5" />
      <path
        d="M-10-10h-4.5v3a6.5 6.5 0 0 0 6.5 6.5M10-10h4.5v3a6.5 6.5 0 0 1-6.5 6.5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  ),
  medal: (
    <g>
      <path d="M-7-14l4.5 8M7-14l-4.5 8" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <circle cx="0" cy="3" r="10" fill="#FFFFFF" />
    </g>
  ),
  spark: (
    <path
      d="M0-14c1.8 8.8 3.4 10.4 12.2 12.2C3.4 0 1.8 1.6 0 10.4-1.8 1.6-3.4 0-12.2-1.8-3.4-3.6-1.8-5.2 0-14z"
      fill="#FFFFFF"
    />
  ),
};

const AchievementBadge = forwardRef(
  ({ tone = 'gold', label = '1ST', glyph = 'trophy', size = 72, className = '', ...rest }, ref) => {
    const reduce = useReducedMotion();
    const colors = TONES[tone] || TONES.gold;
    const height = Math.round(size * 1.245);

    return (
      <m.div
        ref={ref}
        aria-hidden="true"
        className={cx('achievement-badge group relative inline-block shrink-0', className)}
        style={{ width: size, height }}
        variants={popVariants(reduce)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        {...rest}
      >
        <svg width={size} height={height} viewBox="0 0 72 90" focusable="false" aria-hidden="true">
          <path d={SHIELD} transform="translate(0 6)" fill={colors.lip} />
          <path d={SHIELD} fill={colors.face} />
          <g transform="translate(36 30)">{GLYPHS[glyph] || GLYPHS.trophy}</g>
          <rect x="6" y="62" width="60" height="20" rx="8" fill={colors.lip} />
          <text
            x="36"
            y="75.5"
            textAnchor="middle"
            fontFamily="Nunito, ui-rounded, system-ui, sans-serif"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.6"
            fill={colors.ink}
          >
            {label}
          </text>
        </svg>

        <span aria-hidden="true" className="pointer-events-none absolute inset-0 block overflow-hidden">
          <span className="absolute -inset-y-6 -left-1/2 block w-1/2 -skew-x-12 bg-white/25 opacity-0 [@media(hover:hover)]:group-hover:animate-shine [@media(hover:hover)]:group-hover:opacity-100" />
        </span>
      </m.div>
    );
  }
);

AchievementBadge.displayName = 'AchievementBadge';

export default AchievementBadge;
