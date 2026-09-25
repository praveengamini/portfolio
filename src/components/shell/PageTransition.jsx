import { useEffect } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import { pageVariants } from '../../lib/motion';

// Spec 3.9 — route transitions. This lives inside <main>, so the shell chrome
// never re-animates. After the outgoing page has left we either scroll to the
// hash target (and focus its heading) or go back to the top of the document.

const HEADINGS = 'h1, h2, h3, [data-heading]';

const scrollToHash = (hash, reduce) => {
  if (typeof document === 'undefined') return false;
  if (!hash || hash.length < 2) return false;

  let target = null;
  try {
    target = document.querySelector(hash);
  } catch {
    target = null;
  }
  if (!target) return false;

  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });

  const heading = target.matches(HEADINGS) ? target : target.querySelector(HEADINGS);
  const focusTarget = heading || target;
  if (focusTarget && typeof focusTarget.focus === 'function') {
    if (!focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');
    focusTarget.focus({ preventScroll: true });
  }
  return true;
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  const reduce = useReducedMotion();
  const variants = pageVariants(reduce);

  // Hash targets are owned here, for every way one can arrive: a cold load of
  // /#skills, an in-app /projects#slug link, and the /skills → /#skills
  // redirect. That last one is why this is an effect keyed on the hash rather
  // than work done in `onExitComplete`: on a cold load of /skills the first
  // render has no hash at all, the redirect supplies it a tick later, and a
  // one-shot mount effect had already given up by then — measured, the page
  // landed on /#skills without ever scrolling.
  //
  // `mode="wait"` means the incoming page has not mounted when the location
  // changes, so the target does not exist yet either. Retry across ~1s of
  // frames and only fall back to the top once it has really failed to appear.
  // No "already handled" ref here on purpose. StrictMode mounts, tears down and
  // re-mounts effects in development: a ref latched on the first run makes the
  // second run a no-op while the first run's frame has already been cancelled by
  // the teardown, so nothing scrolls at all. `location.key` changes on every
  // navigation, which is exactly when this should run again.
  useEffect(() => {
    if (!location.hash) return undefined;

    // Timer, not requestAnimationFrame: rAF does not run at all while the
    // document is hidden, and a deep link opened in a background tab is the
    // normal case, not an edge case. Measured with document.hidden === true, no
    // frame ever fired and the anchor was never reached. A timeout runs either
    // way, so the target is resolved whether or not the tab is in front.
    let tries = 60;
    let timer = 0;
    const attempt = () => {
      if (scrollToHash(location.hash, reduce)) return;
      tries -= 1;
      if (tries > 0) timer = setTimeout(attempt, 16);
      else window.scrollTo(0, 0);
    };
    attempt();
    return () => clearTimeout(timer);
  }, [location.key, location.hash, reduce]);

  // A route change with no hash always goes back to the top of the document.
  const onExitComplete = () => {
    if (!location.hash) window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={onExitComplete}>
      <m.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-w-0"
      >
        <Routes location={location}>{children}</Routes>
      </m.div>
    </AnimatePresence>
  );
};

export default PageTransition;
