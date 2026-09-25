import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

// Spec 4.2 — square secondary button holding a single icon. `label` is required
// and becomes both the accessible name and the tooltip.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const PRESS = {
  transition: 'transform 60ms linear, box-shadow 60ms linear, background-color 150ms ease, color 150ms ease',
};

const IconButton = forwardRef(
  (
    {
      as,
      to,
      href,
      external = false,
      label,
      title,
      size = 44,
      iconSize,
      icon,
      variant = 'default',
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const Component = as || (to ? Link : href ? 'a' : 'button');
    const isAnchor = Component === 'a';
    const isExternal = external || (typeof href === 'string' && /^https?:/i.test(href));
    const plain = variant === 'plain' || variant === 'ghost';

    const classes = cx(
      'relative inline-flex shrink-0 items-center justify-center text-muted',
      size >= 44 ? 'rounded-logo' : 'rounded-tile',
      plain
        ? 'bg-transparent'
        : 'border-2 border-line bg-bg shadow-lip mb-0.5 active:translate-y-0.5 active:shadow-none',
      '[@media(hover:hover)]:hover:bg-subtle [@media(hover:hover)]:hover:text-fg',
      className
    );

    const props = {
      ...rest,
      ref,
      className: classes,
      style: { width: size, height: size, ...PRESS, ...(rest.style || {}) },
      'aria-label': label,
      title: title ?? label,
    };

    if (Component === 'button') {
      props.type = rest.type || 'button';
    } else {
      if (to) props.to = to;
      if (href) props.href = href;
    }

    if (isAnchor && isExternal) {
      props.target = rest.target || '_blank';
      props.rel = rest.rel || 'noreferrer';
    }

    return (
      <Component {...props}>
        <span
          className="inline-flex items-center justify-center"
          style={{ fontSize: iconSize ?? (size >= 40 ? 20 : Math.round(size * 0.5)) }}
          aria-hidden="true"
        >
          {icon ?? children}
        </span>
        {isExternal ? <span className="sr-only"> (opens in new tab)</span> : null}
      </Component>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
