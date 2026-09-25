import { useRef } from 'react';
import { m, useInView, useReducedMotion } from 'motion/react';
import { ease, duration } from '../../lib/motion';
import Card from '../ui/Card';

// One education record, with its score ring on the right.
//
// The 56px cap badge is gone: the section heading already says Education, so the
// icon was decoration competing with the ring. Two cells only, which lets the
// degree run to the full measure inside a 5-column section.
//
// The ring is scale-aware: `scoreMax` is 10 for a CGPA and 100 for a
// percentage, so both arcs read as "how full is this" rather than one of them
// pinning at either end. Each score is stated ONCE — inside its ring.

const RING = 88;
const RADIUS = 36;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ScoreRing = ({ score, label, max }) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = Math.max(0, Math.min(1, (Number.parseFloat(score) || 0) / max));
  const offset = CIRCUMFERENCE * (1 - value);

  return (
    <div ref={ref} className="relative shrink-0" style={{ width: RING, height: RING }}>
      <svg width={RING} height={RING} viewBox="0 0 88 88" focusable="false" aria-hidden="true">
        <g transform="rotate(-90 44 44)">
          <circle cx="44" cy="44" r={RADIUS} fill="none" stroke="rgb(var(--line))" strokeWidth="8" />
          <m.circle
            cx="44"
            cy="44"
            r={RADIUS}
            fill="none"
            stroke="rgb(var(--gold))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: reduce ? offset : CIRCUMFERENCE }}
            animate={{ strokeDashoffset: reduce || inView ? offset : CIRCUMFERENCE }}
            transition={reduce ? { duration: 0 } : { duration: duration.ring, ease: ease.outQuint }}
          />
        </g>
      </svg>

      <span className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
        <span aria-hidden="true" className="t-stat-lg text-fg">
          {score}
        </span>
        <span aria-hidden="true" className="t-micro text-muted">
          {label}
        </span>
        <span className="sr-only">
          {label === '%' ? 'Percentage' : label} {score} out of {max}
        </span>
      </span>
    </div>
  );
};

const CourseCard = ({ course, className = '' }) => (
  <Card padding={20} className={`grid grid-cols-[minmax(0,1fr)_88px] items-center gap-5 ${className}`}>
    <div className="min-w-0">
      <h3 className="t-h4 text-fg">{course.degree}</h3>
      <p className="t-body-sm mt-2 max-w-[62ch] text-muted">
        {course.school}, {course.place}
      </p>
      <p className="t-micro mt-1.5 text-muted">{course.period}</p>
    </div>

    <ScoreRing score={course.score} label={course.scoreLabel} max={course.scoreMax} />
  </Card>
);

export default CourseCard;
