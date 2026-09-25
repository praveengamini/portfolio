/** @type {import('tailwindcss').Config} */

// Every colour resolves to an RGB triplet custom property defined in
// src/index.css, so a single token works in both themes and still supports
// Tailwind's alpha syntax (bg-green/20). theme.colors is REPLACED, not
// extended: the default palette (green-500 and friends) must not exist.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

const tokenNames = [
  'bg',
  'subtle',
  'line',
  'line-strong',
  'faint',
  'muted',
  'fg',
  'on-fill',
  'focus',
  'green',
  'green-lip',
  'green-tint',
  'green-edge',
  'green-ink',
  'blue',
  'blue-lip',
  'blue-tint',
  'blue-edge',
  'blue-ink',
  'red',
  'red-lip',
  'red-tint',
  'red-edge',
  'red-ink',
  'gold',
  'gold-lip',
  'gold-tint',
  'gold-edge',
  'gold-ink',
  'orange',
  'orange-lip',
  'orange-tint',
  'orange-edge',
  'orange-ink',
  'purple',
  'purple-lip',
  'purple-tint',
  'purple-edge',
  'purple-ink',
  'pink',
  'pink-lip',
  'pink-tint',
  'pink-edge',
  'pink-ink',
  'locked',
  'locked-lip',
  'locked-icon',
  // Unit ("always-light") tones, set by the .unit-* classes.
  'unit',
  'unit-lip',
  'unit-tint',
  'unit-ink',
];

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit',
  white: '#FFFFFF',
  black: '#000000',
};

for (const name of tokenNames) {
  colors[name] = token(name);
}

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-rounded', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Fredoka', 'Nunito', 'ui-rounded', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        tag: '8px',
        tile: '12px',
        logo: '14px',
        card: '16px',
        sheet: '24px',
      },
      boxShadow: {
        // Depth is a solid lip, never a blur.
        lip: '0 2px 0 rgb(var(--line))',
      },
      keyframes: {
        'ping-soft': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-8px)' },
          '30%': { transform: 'translateX(8px)' },
          '45%': { transform: 'translateX(-6px)' },
          '60%': { transform: 'translateX(6px)' },
          '75%': { transform: 'translateX(-3px)' },
          '90%': { transform: 'translateX(3px)' },
          '100%': { transform: 'translateX(0)' },
        },
        dots: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'ping-soft': 'ping-soft 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
        shine: 'shine 900ms ease-out',
        shake: 'shake 400ms ease-out',
        dots: 'dots 600ms ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
