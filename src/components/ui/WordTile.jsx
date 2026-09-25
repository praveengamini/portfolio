import { useState } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { darkIconOverrides } from '../../data/skills';
import { springJump } from '../../lib/motion';

// Spec 4.16 — a "word" from the word bank. Decorative as a control (it is not
// focusable), but the skill name itself is always real text in the DOM.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const SIZES = {
  md: { height: 44, padding: '0 14px', radius: 12, icon: 18, text: 't-body font-bold' },
  sm: { height: 30, padding: '0 10px', radius: 10, icon: 14, text: 't-eyebrow normal-case tracking-normal' },
};

const Mark = ({ icon, color, className = '', px }) => {
  const Icon = typeof icon === 'function' ? icon : null;
  return (
    <span
      aria-hidden="true"
      className={cx('inline-flex shrink-0 items-center', className)}
      style={{ fontSize: px, color: color || 'currentColor' }}
    >
      {Icon ? <Icon /> : icon}
    </span>
  );
};

const WordTile = ({ name, icon, color, size = 'md', className = '', ...rest }) => {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState('rest');
  const spec = SIZES[size] || SIZES.md;
  const dark = darkIconOverrides[name];
  const toy = size === 'md' && !reduce;

  const animate =
    phase === 'down'
      ? { y: 2, scale: 1 }
      : phase === 'hop'
        ? { y: [0, -10, 0], scale: [1, 1.05, 1] }
        : { y: 0, scale: 1 };

  const press = toy
    ? {
        onPointerDown: () => setPhase('down'),
        onPointerUp: () => setPhase('hop'),
        onPointerLeave: () => setPhase((current) => (current === 'down' ? 'rest' : current)),
        onPointerCancel: () => setPhase('rest'),
        onAnimationComplete: () => setPhase((current) => (current === 'hop' ? 'rest' : current)),
      }
    : {};

  return (
    <m.li
      className={cx(
        'mb-0.5 inline-flex select-none items-center gap-2 border-2 border-line bg-bg text-fg shadow-lip',
        spec.text,
        className
      )}
      style={{ height: spec.height, padding: spec.padding, borderRadius: spec.radius }}
      animate={animate}
      transition={phase === 'hop' ? springJump : { duration: 0.06, ease: 'linear' }}
      {...press}
      {...rest}
    >
      {icon ? (
        <>
          <Mark icon={icon} color={color} px={spec.icon} className={dark ? 'dark:hidden' : ''} />
          {dark ? <Mark icon={icon} color={dark} px={spec.icon} className="hidden dark:inline-flex" /> : null}
        </>
      ) : null}
      {name}
    </m.li>
  );
};

export default WordTile;
