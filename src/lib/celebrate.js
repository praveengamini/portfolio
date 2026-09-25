// Confetti (spec 8.4). canvas-confetti is imported lazily on first use and draws on a
// single fixed, aria-hidden canvas that is removed again once the last burst has settled.

export const CONFETTI_COLORS = ['#58CC02', '#1CB0F6', '#FFC800', '#FF4B4B', '#CE82FF', '#FF9600'];

const BASE = {
  colors: CONFETTI_COLORS,
  shapes: ['square', 'circle'],
  gravity: 1.1,
  ticks: 200,
  scalar: 1,
  disableForReducedMotion: true,
};

const CLEANUP_DELAY = 4000;

let canvas = null;
let fire = null;
let pending = null;
let cleanupTimer = null;

const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
};

const mountCanvas = () => {
  if (canvas && canvas.isConnected) return canvas;
  canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:90;pointer-events:none;';
  document.body.appendChild(canvas);
  return canvas;
};

// Removes the canvas and forgets the instance, so the next burst starts clean.
export const cleanup = () => {
  if (cleanupTimer) {
    clearTimeout(cleanupTimer);
    cleanupTimer = null;
  }
  try {
    if (fire && typeof fire.reset === 'function') fire.reset();
  } catch {
    /* ignore */
  }
  if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
  canvas = null;
  fire = null;
  pending = null;
};

const scheduleCleanup = () => {
  if (typeof window === 'undefined') return;
  if (cleanupTimer) clearTimeout(cleanupTimer);
  cleanupTimer = window.setTimeout(cleanup, CLEANUP_DELAY);
};

const getFire = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return Promise.resolve(null);
  if (prefersReducedMotion()) return Promise.resolve(null);
  if (fire && canvas && canvas.isConnected) return Promise.resolve(fire);
  if (!pending) {
    pending = import('canvas-confetti')
      .then((mod) => {
        const confetti = mod.default || mod;
        fire = confetti.create(mountCanvas(), { resize: true, useWorker: true, ...BASE });
        return fire;
      })
      .catch(() => {
        pending = null;
        return null;
      });
  }
  return pending;
};

const burst = async (options) => {
  const run = await getFire();
  if (!run) return;
  try {
    run({ ...BASE, ...options });
  } catch {
    /* a burst should never break the page */
  }
  scheduleCleanup();
};

const originFromRect = (rect) => {
  if (!rect || typeof window === 'undefined') return { x: 0.5, y: 0.5 };
  const w = window.innerWidth || 1;
  const h = window.innerHeight || 1;
  return {
    x: Math.min(Math.max((rect.left + rect.width / 2) / w, 0), 1),
    y: Math.min(Math.max((rect.top + rect.height / 2) / h, 0), 1),
  };
};

// Contact form sent: two bursts from the bottom corners.
export const celebrateSend = () => {
  burst({ particleCount: 120, spread: 80, startVelocity: 45, angle: 60, origin: { x: 0.1, y: 0.9 } });
  burst({ particleCount: 120, spread: 80, startVelocity: 45, angle: 120, origin: { x: 0.9, y: 0.9 } });
};

// Small puff out of the bonus chest.
export const puff = (rect) =>
  burst({
    particleCount: 40,
    spread: 55,
    startVelocity: 30,
    ticks: 120,
    origin: originFromRect(rect),
  });

// All daily quests complete.
export const celebrateQuests = (rect) =>
  burst({ particleCount: 60, spread: 70, origin: originFromRect(rect) });

const celebrate = { celebrateSend, puff, celebrateQuests, cleanup };

export default celebrate;
