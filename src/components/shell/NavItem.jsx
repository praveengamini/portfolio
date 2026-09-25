import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { m, useReducedMotion } from 'motion/react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { springNav } from '../../lib/motion';

// Spec 3.3 — one row of the SideNav. It is a NavLink for internal routes, an
// anchor for RESUME and a button for MORE. Collapsed (tablet / desktop) the
// label becomes sr-only and a tooltip appears after 300ms of hover or focus.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const TOOLTIP_DELAY = 300;

const NavItem = forwardRef(
  (
    {
      icon: Icon,
      label,
      to,
      href,
      end = false,
      external = false,
      collapsed = false,
      className = '',
      onClick,
      ...rest
    },
    ref
  ) => {
    const reduce = useReducedMotion();
    const itemRef = useRef(null);
    const timer = useRef(null);
    const [hovered, setHovered] = useState(false);
    const [tipTop, setTipTop] = useState(null);

    const setRefs = useCallback(
      (node) => {
        itemRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    const clearTimer = () => {
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = null;
    };

    useEffect(() => clearTimer, []);

    const openTip = () => {
      if (!collapsed) return;
      clearTimer();
      timer.current = window.setTimeout(() => {
        const node = itemRef.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        setTipTop(rect.top + rect.height / 2);
      }, TOOLTIP_DELAY);
    };

    const closeTip = () => {
      clearTimer();
      setTipTop(null);
    };

    const handlers = {
      onPointerEnter: () => {
        setHovered(true);
        openTip();
      },
      onPointerLeave: () => {
        setHovered(false);
        closeTip();
      },
      onFocus: () => {
        setHovered(true);
        openTip();
      },
      onBlur: () => {
        setHovered(false);
        closeTip();
      },
      onClick,
    };

    const base = cx(
      'relative flex shrink-0 items-center rounded-tile border-2 border-transparent',
      collapsed ? 'h-[52px] w-14 justify-center' : 'h-[52px] gap-5 px-4',
      '[@media(hover:hover)]:hover:bg-subtle',
      className
    );

    const tooltip =
      collapsed && tipTop !== null ? (
        <span
          aria-hidden="true"
          className="t-eyebrow pointer-events-none fixed z-50 whitespace-nowrap rounded-tag bg-fg px-2.5 py-1.5 text-bg"
          style={{ left: 'calc(var(--nav-w) + 8px)', top: tipTop, transform: 'translateY(-50%)' }}
        >
          <span
            aria-hidden="true"
            className="absolute -left-1 top-1/2 block h-2 w-2 -translate-y-1/2 rotate-45 bg-fg"
          />
          {label}
        </span>
      ) : null;

    const body = (active) => (
      <>
        {active ? (
          <m.span
            aria-hidden="true"
            layoutId="nav-active"
            transition={reduce ? { duration: 0 } : springNav}
            className="absolute inset-0 rounded-tile border-2 border-blue-edge bg-blue-tint"
          />
        ) : null}

        <span aria-hidden="true" className="relative z-10 inline-flex shrink-0 items-center justify-center">
          <Icon size={32} hovered={hovered} />
        </span>

        <span
          className={
            collapsed
              ? 'sr-only'
              : cx('t-label relative z-10 min-w-0', active ? 'text-blue-ink' : 'text-muted')
          }
        >
          {label}
        </span>

        {external && !collapsed ? (
          <span
            aria-hidden="true"
            className="relative z-10 inline-flex shrink-0 items-center text-muted"
            style={{ fontSize: 12 }}
          >
            <FaArrowUpRightFromSquare />
          </span>
        ) : null}

        {external ? <span className="sr-only"> (opens in new tab)</span> : null}

        {tooltip}
      </>
    );

    if (to) {
      return (
        <NavLink ref={setRefs} to={to} end={end} className={base} {...handlers} {...rest}>
          {({ isActive }) => body(isActive)}
        </NavLink>
      );
    }

    if (href) {
      return (
        <a
          ref={setRefs}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          className={base}
          {...handlers}
          {...rest}
        >
          {body(false)}
        </a>
      );
    }

    return (
      <button ref={setRefs} type="button" className={base} {...handlers} {...rest}>
        {body(false)}
      </button>
    );
  }
);

NavItem.displayName = 'NavItem';

export default NavItem;
