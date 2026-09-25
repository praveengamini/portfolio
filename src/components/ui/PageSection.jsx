import { m, useReducedMotion } from 'motion/react';
import { riseVariants } from '../../lib/motion';
import SectionBand from './SectionBand';

// A top-level section: the header band, its content, and ONE entrance.
//
// Every band on every page is this component, so the four pages share one
// rhythm — the same heading, the same derived count, the same 2px rule, the
// same 20px to the content below it. Thirteen pop-ins on the way down a page
// is a large part of why scrolling felt irritating, so the entrance is per
// section, never per item, and it does not run at all under
// prefers-reduced-motion.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const PageSection = ({
  id,
  titleId,
  title,
  count,
  actions,
  className = '',
  contentClassName = '',
  children,
}) => {
  const reduce = useReducedMotion();

  return (
    <m.section
      id={id}
      aria-labelledby={titleId}
      className={cx('min-w-0', className)}
      variants={riseVariants(reduce, 12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionBand id={titleId} title={title} count={count} actions={actions} />
      <div className={cx('mt-5 min-w-0', contentClassName)}>{children}</div>
    </m.section>
  );
};

export default PageSection;
