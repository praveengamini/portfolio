/**
 * Chunky flat icons in the same visual language as the rest of the art:
 * solid fills, rounded forms, no gradients. Every icon takes `size` and is
 * aria-hidden unless a `label` is passed.
 */

const Svg = ({ size = 24, label, className = '', children, ...rest }) => {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      focusable="false"
      className={className}
      {...a11y}
      {...rest}
    >
      {children}
    </svg>
  );
};

export const SunIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="5.2" fill="#FFC800" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <rect
        key={deg}
        x="11"
        y="0.8"
        width="2"
        height="4"
        rx="1"
        fill="#FFC800"
        transform={`rotate(${deg} 12 12)`}
      />
    ))}
  </Svg>
);

export const MoonIcon = (props) => (
  <Svg {...props}>
    <path d="M20.2 14.6A8.6 8.6 0 0 1 9.4 3.8a8.6 8.6 0 1 0 10.8 10.8Z" fill="#CE82FF" />
    <circle cx="17.4" cy="5.2" r="1.5" fill="#CE82FF" />
    <circle cx="20.6" cy="9.2" r="1" fill="#CE82FF" />
  </Svg>
);
