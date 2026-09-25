// Shared motion presets. Import these instead of writing inline springs,
// so every surface in the app eases the same way.
//
// NOTE: App.jsx mounts <LazyMotion strict>, so animated elements must use the `m`
// component from 'motion/react'. These presets are plain objects and are safe anywhere.

export const spring = {
  pop: { type: 'spring', stiffness: 500, damping: 22, mass: 0.8 },
  soft: { type: 'spring', stiffness: 260, damping: 26 },
  juicy: { type: 'spring', stiffness: 400, damping: 15 },
  jump: { type: 'spring', stiffness: 600, damping: 14 },
  nav: { type: 'spring', stiffness: 600, damping: 40 },
};

export const ease = {
  outQuint: [0.22, 1, 0.36, 1],
  overshoot: [0.35, 1.8, 0.35, 0.83],
};

// Flat aliases, for call sites that read better without the namespace.
export const springPop = spring.pop;
export const springJump = spring.jump;
export const springNav = spring.nav;

// Durations, in seconds, for the tween-based transitions.
export const duration = {
  exit: 0.15,
  reduced: 0.12,
  ring: 0.9,
};

export const stagger = {
  badge: 0.1,
};

/* ------------------------------------------------------------------ */
/* Shared variants                                                     */
/* ------------------------------------------------------------------ */

// Route change. `reduce` comes from useReducedMotion().
export const pageVariants = (reduce) =>
  reduce
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: duration.reduced } },
        exit: { opacity: 0, transition: { duration: duration.reduced } },
      }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0, transition: spring.soft },
        exit: { opacity: 0, y: -8, transition: { duration: duration.exit, ease: 'easeIn' } },
      };

// The one section entrance, used by every band on every page.
export const riseVariants = (reduce, distance = 16) =>
  reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: distance },
        show: { opacity: 1, y: 0, transition: spring.soft },
      };

// Scale-in used by the achievement badges.
export const popVariants = (reduce) =>
  reduce
    ? { hidden: { opacity: 1, scale: 1, y: 0 }, show: { opacity: 1, scale: 1, y: 0 } }
    : {
        hidden: { opacity: 0, scale: 0.6, y: 16 },
        show: { opacity: 1, scale: 1, y: 0, transition: spring.pop },
      };

const motionPresets = { spring, ease, duration, stagger };

export default motionPresets;
