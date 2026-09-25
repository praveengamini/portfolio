import { forwardRef } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { springPop } from '../../lib/motion';

// The projects filter (spec 4.14). A toggle-button group, not tabs: there is no
// single tabpanel, so each option is an aria-pressed button inside role="group",
// and a polite live region announces the resulting count.

const cx = (...values) => values.filter(Boolean).join(' ');

const PILL_BASE =
  'inline-flex h-10 items-center gap-2 rounded-tile border-2 px-3.5 mb-0.5 t-label text-[14px] active:translate-y-[2px] active:shadow-none transition-[transform,box-shadow] duration-[60ms]';

const PILL_STATE = {
  on: 'border-blue-edge bg-blue-tint text-blue-ink shadow-[0_2px_0_rgb(var(--blue-edge))]',
  off: 'border-line bg-bg text-muted shadow-[0_2px_0_rgb(var(--line))] [@media(hover:hover)]:hover:bg-subtle',
};

const BADGE_STATE = {
  on: 'bg-blue text-on-fill',
  off: 'bg-subtle text-muted',
};

const badgeVariants = {
  on: { scale: [1, 1.2, 1], transition: springPop },
  off: { scale: 1 },
};

const FilterPills = forwardRef(
  ({ label = 'Filter', options = [], value, onChange, controls, className = '', ...rest }, ref) => {
    const reduce = useReducedMotion();
    const selected = options.find((option) => option.value === value);
    const count = selected ? selected.count : 0;
    const announcement =
      value && value !== 'All' ? `Showing ${count} ${value} projects` : `Showing ${count} projects`;

    const select = (next) => {
      if (next === value) return;
      if (onChange) onChange(next);
    };

    return (
      <div ref={ref} className={cx('min-w-0', className)} {...rest}>
        <div role="group" aria-label={label} className="flex flex-wrap gap-2.5">
          {options.map((option) => {
            const on = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={on}
                aria-controls={controls}
                onClick={() => select(option.value)}
                className={cx(PILL_BASE, on ? PILL_STATE.on : PILL_STATE.off)}
              >
                {option.value}
                <m.span
                  aria-hidden="true"
                  variants={badgeVariants}
                  initial={false}
                  animate={reduce ? 'off' : on ? 'on' : 'off'}
                  className={cx(
                    'tabular inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-full px-1 text-[12px] font-black leading-none',
                    on ? BADGE_STATE.on : BADGE_STATE.off
                  )}
                >
                  {option.count}
                </m.span>
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="sr-only">
          {announcement}
        </p>
      </div>
    );
  }
);

FilterPills.displayName = 'FilterPills';

export default FilterPills;
