import { m, useReducedMotion } from 'motion/react';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import { ease, spring } from '../../lib/motion';

// Spec 4.18 — the lesson-style result bar pinned to the bottom of the Contact
// page. The live region is always mounted, so a result is announced the moment
// the status changes.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const SURFACE = {
  idle: 'bg-bg border-line',
  sending: 'bg-bg border-line',
  sent: 'bg-green-tint border-green-edge',
  error: 'bg-red-tint border-red-edge',
};

const FeedbackBar = ({
  status = 'idle',
  primary,
  secondary,
  title,
  body,
  detail,
  className = '',
  ...rest
}) => {
  const reduce = useReducedMotion();
  const result = status === 'sent' || status === 'error';
  const sent = status === 'sent';

  const row = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.12 } }
    : {
        initial: { y: '100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.2, ease: ease.overshoot },
      };

  return (
    <div
      className={cx(
        'feedback-bar no-print fixed z-[45] border-t-2 transition-colors duration-200',
        SURFACE[status] || SURFACE.idle,
        className
      )}
      style={{ left: 'var(--nav-w)', right: 0, bottom: 'var(--tabbar-h)' }}
      {...rest}
    >
      <div className="mx-auto flex max-w-[1000px] flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between md:min-h-[140px] md:px-10">
        <div aria-live="polite" className="min-w-0 flex-1 overflow-hidden">
          {result ? (
            <m.div
              key={status}
              role={sent ? 'status' : 'alert'}
              className="flex items-center gap-4"
              initial={row.initial}
              animate={row.animate}
              transition={row.transition}
            >
              <m.span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bg md:h-20 md:w-20',
                  sent ? 'text-green' : 'text-red',
                  '[&>svg]:h-8 [&>svg]:w-8 md:[&>svg]:h-10 md:[&>svg]:w-10'
                )}
                initial={reduce ? false : { scale: 0 }}
                animate={{ scale: reduce ? 1 : [0, 1.15, 1] }}
                transition={reduce ? { duration: 0 } : spring.jump}
              >
                {sent ? <FaCheck /> : <FaXmark />}
              </m.span>

              <div className={cx('min-w-0', sent ? 'text-green-ink' : 'text-red-ink')}>
                {title ? <h2 className="t-h2">{title}</h2> : null}
                {body ? <div className="t-body-sm mt-1 [&_a]:underline">{body}</div> : null}
                {detail ? (
                  <p
                    className="wrap-anywhere mt-2 overflow-auto font-mono opacity-[0.85]"
                    style={{ fontSize: 13, lineHeight: '18px', maxHeight: '4.5em' }}
                  >
                    {detail}
                  </p>
                ) : null}
              </div>
            </m.div>
          ) : (
            secondary && <span className="hidden min-[480px]:inline-flex">{secondary}</span>
          )}
        </div>

        <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          {result && secondary ? <span className="hidden min-[480px]:inline-flex">{secondary}</span> : null}
          {primary}
        </div>
      </div>
    </div>
  );
};

export default FeedbackBar;
