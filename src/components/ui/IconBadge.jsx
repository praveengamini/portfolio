import { forwardRef } from 'react';

// Spec 4.4 — the rounded icon tile. Always decorative: the label it belongs to
// is always real text beside it.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const SOLID = {
  green: 'bg-green shadow-[0_3px_0_rgb(var(--green-lip))]',
  blue: 'bg-blue shadow-[0_3px_0_rgb(var(--blue-lip))]',
  purple: 'bg-purple shadow-[0_3px_0_rgb(var(--purple-lip))]',
  pink: 'bg-pink shadow-[0_3px_0_rgb(var(--pink-lip))]',
  gold: 'bg-gold shadow-[0_3px_0_rgb(var(--gold-lip))]',
  orange: 'bg-orange shadow-[0_3px_0_rgb(var(--orange-lip))]',
  red: 'bg-red shadow-[0_3px_0_rgb(var(--red-lip))]',
  neutral: 'bg-[#4B4B4B] shadow-[0_3px_0_#2B2B2B]',
};

const TINT = {
  green: 'bg-green-tint border-2 border-green-edge text-green-ink',
  blue: 'bg-blue-tint border-2 border-blue-edge text-blue-ink',
  purple: 'bg-purple-tint border-2 border-purple-edge text-purple-ink',
  pink: 'bg-pink-tint border-2 border-pink-edge text-pink-ink',
  gold: 'bg-gold-tint border-2 border-gold-edge text-gold-ink',
  orange: 'bg-orange-tint border-2 border-orange-edge text-orange-ink',
  red: 'bg-red-tint border-2 border-red-edge text-red-ink',
  neutral: 'bg-subtle border-2 border-line text-muted',
};

const IconBadge = forwardRef(
  ({ icon, hue = 'green', size = 40, style = 'solid', className = '', ...rest }, ref) => {
    const solid = style !== 'tint';
    const Icon = typeof icon === 'function' ? icon : null;

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cx(
          'inline-flex shrink-0 items-center justify-center',
          size >= 64 ? 'rounded-card' : 'rounded-tile',
          solid ? SOLID[hue] || SOLID.green : TINT[hue] || TINT.neutral,
          solid && 'text-white',
          className
        )}
        {...rest}
        style={{ width: size, height: size, fontSize: Math.round(size * 0.5) }}
      >
        {Icon ? <Icon /> : icon}
      </div>
    );
  }
);

IconBadge.displayName = 'IconBadge';

export default IconBadge;
