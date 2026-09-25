import { useCallback, useEffect, useState } from 'react';

// Theme state (spec 3.7 / 9.9). The pre-paint script in index.html has already put the
// right class on <html>, so the first render never flashes.
//
// localStorage is written ONLY inside toggle(). While nothing is stored, the theme keeps
// following the system, exactly as the accessibility section asks.

const STORAGE_KEY = 'theme';

const META_COLOR = { light: '#FFFFFF', dark: '#131F24' };

const readStored = () => {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
};

const getInitial = () => {
  if (typeof document === 'undefined') return 'light';
  if (document.documentElement.classList.contains('dark')) return 'dark';
  const stored = readStored();
  if (stored) return stored;
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

const applyTheme = (theme) => {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', META_COLOR[theme] || META_COLOR.light);
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow the system while the visitor has not picked explicitly.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;
    let mq;
    try {
      mq = window.matchMedia('(prefers-color-scheme: dark)');
    } catch {
      return undefined;
    }
    const onChange = (event) => {
      if (!readStored()) setTheme(event.matches ? 'dark' : 'light');
    };
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private mode: the choice simply lasts for this page only */
      }
      return next;
    });
  }, []);

  return { theme, toggle, isDark: theme === 'dark' };
};

export default useTheme;
