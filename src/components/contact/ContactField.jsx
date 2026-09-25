import { forwardRef, useEffect, useState } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { FaCheck } from 'react-icons/fa6';
import { springPop } from '../../lib/motion';

// A contact field: a visible caption, a chunky 56px control, a green check disc
// once it is valid, and a red hint once it is not.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const BASE =
  't-body-lg block w-full border-2 bg-subtle text-fg transition-colors placeholder:text-muted [@media(hover:hover)]:hover:border-line-strong';

const ContactField = forwardRef(
  (
    {
      id,
      name,
      label,
      hint,
      value,
      onChange,
      onBlur,
      placeholder,
      type = 'text',
      required = true,
      textarea = false,
      valid = false,
      invalid = false,
      shakeKey = 0,
      className = '',
      ...rest
    },
    ref
  ) => {
    const reduce = useReducedMotion();
    const [shaking, setShaking] = useState(false);

    // Re-trigger the CSS shake every time the parent bumps `shakeKey`.
    useEffect(() => {
      if (!shakeKey || reduce) return undefined;
      // Drop the class for one frame first, so a repeat attempt replays it.
      setShaking(false);
      const frame = requestAnimationFrame(() => setShaking(true));
      const timer = setTimeout(() => setShaking(false), 440);
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(timer);
      };
    }, [shakeKey, reduce]);

    const hintId = `${id}-hint`;

    const control = cx(
      BASE,
      textarea ? 'min-h-[180px] resize-y rounded-card px-4 py-3.5' : 'h-14 rounded-logo pl-4 pr-12',
      invalid ? 'border-red' : 'border-line focus:border-blue-edge',
      'focus:bg-bg focus:outline-none'
    );

    const fieldProps = {
      ...rest,
      id,
      name,
      value,
      onChange,
      onBlur,
      placeholder,
      required,
      className: control,
      'aria-invalid': invalid ? 'true' : undefined,
      'aria-describedby': invalid && hint ? hintId : undefined,
    };

    return (
      <div className={cx('min-w-0', className)}>
        <label htmlFor={id} className="t-eyebrow mb-2 block text-muted">
          {label}
        </label>

        <div className={cx('relative', shaking && 'animate-shake')}>
          {textarea ? (
            <textarea ref={ref} rows={6} {...fieldProps} />
          ) : (
            <input ref={ref} type={type} {...fieldProps} />
          )}

          {valid ? (
            <span
              aria-hidden="true"
              className={cx(
                'pointer-events-none absolute right-3 block',
                textarea ? 'top-3' : 'top-1/2 -translate-y-1/2'
              )}
            >
              <m.span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green text-on-fill"
                initial={reduce ? false : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={reduce ? { duration: 0 } : springPop}
              >
                <FaCheck size={12} />
              </m.span>
            </span>
          ) : null}
        </div>

        {invalid && hint ? (
          <p id={hintId} className="t-body-sm mt-2 text-red-ink">
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

ContactField.displayName = 'ContactField';

export default ContactField;
