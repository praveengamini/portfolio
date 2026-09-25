import { useEffect } from 'react';

// Route titles (spec 3.9).

export const SITE_NAME = 'Praveen Gamini';

export const ROUTE_TITLES = {
  '/': 'Praveen Gamini — Software Engineer',
  '/experience': 'Experience · Praveen Gamini',
  '/projects': 'Projects · Praveen Gamini',
  '/about': 'About · Praveen Gamini',
  '/contact': 'Contact · Praveen Gamini',
};

export const NOT_FOUND_TITLE = 'Page not found · Praveen Gamini';

/** titleForPath('/about') → 'About · Praveen Gamini'; anything unknown is the 404 title. */
export const titleForPath = (pathname) => {
  if (!pathname) return ROUTE_TITLES['/'];
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') || '/' : pathname;
  return ROUTE_TITLES[clean] || NOT_FOUND_TITLE;
};

/** Sets document.title while the component is mounted. */
export const useDocumentTitle = (title) => {
  useEffect(() => {
    if (typeof document === 'undefined' || !title) return;
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
