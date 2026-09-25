import { createElement } from 'react';

// Small string helpers shared by the pages. No JSX here on purpose, so this stays a .js file.

const METRIC_RE = /~?\d+(\.\d+)?(%|\+|s\b)?/g;

/**
 * boldMetrics('Cut p95 latency by 40% across 3 services')
 * Wraps every number-ish run in <strong class="text-fg font-extrabold"> and returns an
 * array of React nodes. The full string is preserved verbatim, including the parts in
 * between, so nothing is ever dropped from the DOM.
 */
export const boldMetrics = (text) => {
  if (text == null) return [];
  const str = String(text);
  if (!str) return [];

  const nodes = [];
  let last = 0;
  let key = 0;
  METRIC_RE.lastIndex = 0;

  let match = METRIC_RE.exec(str);
  while (match) {
    if (match.index > last) nodes.push(str.slice(last, match.index));
    nodes.push(createElement('strong', { key: `m${key}`, className: 'text-fg font-extrabold' }, match[0]));
    key += 1;
    last = match.index + match[0].length;
    // Guard against a zero-length match looping forever.
    if (match[0].length === 0) METRIC_RE.lastIndex += 1;
    match = METRIC_RE.exec(str);
  }
  if (last < str.length) nodes.push(str.slice(last));
  return nodes;
};

/**
 * githubHandle('https://github.com/praveengamini') → 'praveengamini' (no leading '@').
 * Returns '' when the URL cannot be parsed.
 */
export const githubHandle = (url) => {
  if (!url) return '';
  try {
    return new URL(String(url)).pathname.slice(1).replace(/\/+$/, '');
  } catch {
    return '';
  }
};

/** isGithub(url) → true when the URL points at github.com. Used to pick FaGithub vs FaCode. */
export const isGithub = (url) => {
  if (!url) return false;
  try {
    const { hostname } = new URL(String(url));
    return hostname === 'github.com' || hostname.endsWith('.github.com');
  } catch {
    return false;
  }
};

const format = { boldMetrics, githubHandle, isGithub };

export default format;
