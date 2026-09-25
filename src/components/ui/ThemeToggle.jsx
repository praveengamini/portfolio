import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import { MoonIcon, SunIcon } from '../art/Icons';
import { useTheme } from '../../hooks/useTheme';
import { springPop } from '../../lib/motion';
import IconButton from './IconButton';

// Spec 4.20 — the theme switch. Light shows the moon you can switch to dark
// with; dark shows the sun.

const ThemeToggle = ({ size = 40, className = '', ...rest }) => {
  const reduce = useReducedMotion();
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <IconButton
      size={size}
      className={className}
      onClick={toggle}
      label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
      icon={
        <AnimatePresence initial={false} mode="wait">
          <m.span
            key={theme}
            className="inline-flex items-center justify-center"
            initial={reduce ? false : { rotate: -90, scale: 0.6, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { rotate: 90, scale: 0.6, opacity: 0 }}
            transition={reduce ? { duration: 0.12 } : springPop}
          >
            {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </m.span>
        </AnimatePresence>
      }
      {...rest}
    />
  );
};

export default ThemeToggle;
