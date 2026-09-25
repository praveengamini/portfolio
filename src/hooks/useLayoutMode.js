import { useEffect, useState } from 'react';

// Layout mode (spec 3.1). The same numbers live in index.css media queries, so the page
// is already correct before JS runs; this hook keeps them in sync once it does and gives
// components a plain string to branch on.

// `wide` — the labelled 256px rail — opens at 1280. The rail is the primary
// navigation, and an icon-only rail is only a fallback for widths that cannot
// spare 256px; a 1440px viewport can (it still leaves ~1120px of content), so
// the labels are back at every desktop size.
//
// These numbers are not merely "kept in sync" with index.css as a nicety:
// applyVars writes --nav-w INLINE on <html>, which outranks every media query
// in the stylesheet. If the two lists disagree, the inline value silently wins
// and the CSS breakpoint becomes dead code. 0 / 88 / 88 / 256 at 0 / 768 /
// 1024 / 1280 must match the :root blocks in index.css exactly.
export const BREAKPOINTS = { tablet: 768, desktop: 1024, wide: 1280 };

export const LAYOUT_VARS = {
  mobile: {
    '--nav-w': '0px',
    '--topbar-h': '56px',
    '--tabbar-h': 'calc(64px + env(safe-area-inset-bottom))',
    '--sticky-top': '56px',
    '--banner-gap': '0px',
  },
  tablet: {
    '--nav-w': '88px',
    '--topbar-h': '64px',
    '--tabbar-h': '0px',
    '--sticky-top': '72px',
    '--banner-gap': '8px',
  },
  desktop: {
    '--nav-w': '88px',
    '--topbar-h': '0px',
    '--tabbar-h': '0px',
    // No top chrome here, so sticky elements meet the viewport edge. Must stay
    // in step with the matching :root block in index.css — these inline vars
    // override it.
    '--sticky-top': '0px',
    '--banner-gap': '16px',
  },
  wide: {
    '--nav-w': '256px',
    '--topbar-h': '0px',
    '--tabbar-h': '0px',
    '--sticky-top': '0px',
    '--banner-gap': '16px',
  },
};

export const modeFromWidth = (width) => {
  if (width >= BREAKPOINTS.wide) return 'wide';
  if (width >= BREAKPOINTS.desktop) return 'desktop';
  if (width >= BREAKPOINTS.tablet) return 'tablet';
  return 'mobile';
};

const getMode = () => {
  if (typeof window === 'undefined') return 'desktop';
  return modeFromWidth(window.innerWidth || 0);
};

const applyVars = (mode) => {
  if (typeof document === 'undefined') return;
  const vars = LAYOUT_VARS[mode];
  if (!vars) return;
  const root = document.documentElement;
  Object.keys(vars).forEach((name) => root.style.setProperty(name, vars[name]));
  root.dataset.layout = mode;
};

export const useLayoutMode = () => {
  const [mode, setMode] = useState(getMode);

  useEffect(() => {
    applyVars(mode);
  }, [mode]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const update = () => setMode(getMode());

    // `applyVars` writes these custom properties INLINE on <html>, which beats
    // the media queries in index.css. So a missed update does not degrade to
    // the CSS default — it leaves the whole shell at the wrong nav width until
    // the next reload. The resize listener is therefore not redundant with
    // matchMedia: it is the backstop that guarantees the inline values can
    // never outlive the width that produced them.
    window.addEventListener('resize', update);

    if (typeof window.matchMedia !== 'function') {
      return () => window.removeEventListener('resize', update);
    }

    const queries = [BREAKPOINTS.tablet, BREAKPOINTS.desktop, BREAKPOINTS.wide].map((px) =>
      window.matchMedia(`(min-width: ${px}px)`)
    );
    queries.forEach((mq) => {
      if (typeof mq.addEventListener === 'function') mq.addEventListener('change', update);
      else mq.addListener(update);
    });
    update();
    return () => {
      window.removeEventListener('resize', update);
      queries.forEach((mq) => {
        if (typeof mq.removeEventListener === 'function') mq.removeEventListener('change', update);
        else mq.removeListener(update);
      });
    };
  }, []);

  return mode;
};

export default useLayoutMode;
