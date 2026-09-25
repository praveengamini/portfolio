import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// Spec 4.1 — the chunky 3D button. Depth is the solid lip drawn by `.btn3d`
// in index.css; this file only picks the right variant and size classes.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const VARIANT = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  blue: 'btn-blue',
  danger: 'btn-danger',
  gold: 'btn-gold',
  ghost: 'btn-ghost',
  onColor: 'btn-oncolor',
};

const SIZE = {
  lg: 'btn-lg',
  md: 'btn-md',
  sm: 'btn-sm',
};

const Glyph = ({ children, px = 16 }) => (
  <span
    className="inline-flex shrink-0 items-center justify-center"
    style={{ fontSize: px }}
    aria-hidden="true"
  >
    {children}
  </span>
);

const Button = forwardRef(
  (
    {
      as,
      to,
      href,
      external = false,
      variant = 'primary',
      size = 'lg',
      icon,
      iconRight,
      fullWidth = false,
      loading = false,
      disabled = false,
      className = '',
      children,
      onPointerDown,
      ...rest
    },
    ref
  ) => {
    const Component = as || (to ? Link : href ? 'a' : 'button');
    const isAnchor = Component === 'a';
    const isExternal = external || (typeof href === 'string' && /^https?:/i.test(href));

    const classes = cx(
      'btn3d',
      SIZE[size] || SIZE.lg,
      VARIANT[variant] || VARIANT.primary,
      fullWidth && 'w-full',
      className
    );

    const props = {
      ...rest,
      ref,
      className: classes,
      onPointerDown,
      'aria-busy': loading || undefined,
    };

    if (Component === 'button') {
      props.type = rest.type || 'button';
      if (disabled) props.disabled = true;
    } else {
      if (to) props.to = to;
      if (href) props.href = href;
      if (disabled) props['aria-disabled'] = 'true';
    }

    if (isAnchor && isExternal) {
      props.target = rest.target || '_blank';
      props.rel = rest.rel || 'noreferrer';
    }

    return (
      <Component {...props}>
        {icon ? <Glyph>{icon}</Glyph> : null}

        <span className={loading ? 'sr-only' : 't-label'}>{children}</span>

        {loading ? (
          <span className="inline-flex items-center gap-1.5" aria-hidden="true">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="h-1.5 w-1.5 animate-dots rounded-full bg-current"
                style={{ animationDelay: `${dot * 120}ms` }}
              />
            ))}
          </span>
        ) : null}

        {!loading && iconRight ? <Glyph>{iconRight}</Glyph> : null}

        {!loading && isExternal ? (
          <>
            <Glyph px={12}>
              <FaArrowUpRightFromSquare />
            </Glyph>
            <span className="sr-only"> (opens in new tab)</span>
          </>
        ) : null}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
