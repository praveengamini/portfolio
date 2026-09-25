import { forwardRef } from 'react';

// The flat card: 2px line, radius 16, no blurred shadow. Every card on the site
// is this component, so padding and radius cannot drift between pages.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const PADDING = {
  16: 'p-4',
  20: 'p-4 sm:p-5',
  24: 'p-4 sm:p-6',
};

const TONE = {
  default: '',
  'tint-green': 'bg-green-tint border-green-edge',
  'tint-blue': 'bg-blue-tint border-blue-edge',
  'tint-red': 'bg-red-tint border-red-edge',
  'tint-gold': 'bg-gold-tint border-gold-edge',
  'tint-purple': 'bg-purple-tint border-purple-edge',
  'tint-orange': 'bg-orange-tint border-orange-edge',
  'tint-pink': 'bg-pink-tint border-pink-edge',
  subtle: 'bg-subtle',
};

const Card = forwardRef(
  ({ as: Component = 'div', padding = 20, tone = 'default', className = '', children, ...rest }, ref) => (
    <Component
      ref={ref}
      className={cx('card', PADDING[padding] || '', TONE[tone] || TONE.default, className)}
      {...rest}
    >
      {children}
    </Component>
  )
);

Card.displayName = 'Card';

export default Card;
