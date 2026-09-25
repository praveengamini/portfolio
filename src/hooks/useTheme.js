import { useCallback, useEffect, useState } from 'react';

// Theme state (spec 3.7 / 9.9). The pre-paint script in index.html has already put the
// right class on <html>, so the first render never flashes.
//
// LIGHT IS THE DEFAULT. Dark applies only when the visitor has explicitly chosen it and
// that choice is in localStorage; a dark OS setting does not decide for them. The system
// preference is therefore not read at all, and not followed after load.
//
// localStorage is written ONLY inside toggle().

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
  return readStored() === 'dark' ? 'dark' : 'light';
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
