import { useEffect, useRef, useState } from 'react';
import { m, useInView, useReducedMotion } from 'motion/react';
import { ease, spring } from '../../lib/motion';
import useMediaQuery from '../../hooks/useMediaQuery';
import { education, experience } from '../../data/content';

// The Background band's right column: his five stages, hung on the Duolingo
// lesson path.
//
// This replaces the abstract margin mark that sat here. The mark showed
// nothing on purpose; the ask was for his own stages, and a career genuinely is
// a sequence of nodes, so the path stops being ornament and starts being a
// timeline. Geometry and motion are the ones the mark already used — a
// serpentine with vertical tangents at every node, a 1.15s draw led by a green
// head, beads that pop in just behind it — with the labels hung off the side.
//
// It is CONTENT, so it is not aria-hidden: an <ol> (it is a sequence), named by
// its own heading, with every label a real string read from src/data/content.js.
// Nothing is retyped and nothing is invented.
//
// What it deliberately does NOT carry: job bullets, job summaries, roles,
// locations, the CGPA or the percentage. Those live on /experience and in the
// Education cards higher up this page, and repeating them here is exactly the
// clutter that has been rejected before. One line of organisation (or
// qualification) and one line of dates. That is the whole payload.
//
// Colour budget is one: the current role's node is --green, the same quiet
// "this is now" signal JobArticle uses for its 8px dot. Everything else is the
// neutral ramp.

// NEWEST FIRST: the current role at the top, the intermediate at the bottom.
// That is the direction the rest of the site already reads — /experience is
// labelled "newest first" and the Education cards above put the degree above
// the intermediate — so the timeline matches its neighbours instead of
// arguing with them. It is also the direction the trail draws and the nodes
// stagger, so the path starts at "Present" and runs back into the past.
//
// Education carries the qualification, work carries the organisation; both
// carry the period, verbatim from src/data/content.js. Nothing is retyped.
const STAGES = [
  // experience[0] — TalentXO, Jul 2026 — Present
  {
    key: 'job-talentxo',
    label: experience[0].company,
    period: experience[0].period,
    work: true,
    current: true,
  },
  // experience[1] — Code At Random, Feb 2026 — Jul 2026
  { key: 'job-car', label: experience[1].company, period: experience[1].period, work: true },
  // experience[2] — MADTIN Technologies, Oct 2025 — Nov 2025
  { key: 'job-madtin', label: experience[2].company, period: experience[2].period, work: true },
  // education[0] — MVGR, Nov 2022 — Apr 2026
  { key: 'edu-degree', label: education[0].degree, period: education[0].period },
  // education[1] — Sriviswa Junior College, Apr 2020 — Apr 2022
  { key: 'edu-intermediate', label: education[1].degree, period: education[1].period },
];

// The rail is its own fixed-width column and the labels are a grid of five
// equal rows, so node i sits at the exact vertical centre of label row i:
// ROW_H/2 + i*ROW_H. The SVG is exactly as tall as the list (5 x 68 = 340).
const RAIL_W = 56;
const ROW_H = 68;
const HEIGHT = ROW_H * STAGES.length;
const NODE_R = 12;
const STROKE = 6;

// Centre x=28, amplitude 12 — the same four-phase serpentine as before, scaled
// to a rail that has to share its cell with the labels. Cubic control offset is
// ROW_H/3, so the tangent is vertical at every node and the curve is
// C1-continuous. Widest point 40 + 12 + 1.25 = 53.25, inside the 56 box.
const D =
  'M 28 34 C 28 56.7 40 79.3 40 102 C 40 124.7 28 147.3 28 170 C 28 192.7 16 215.3 16 238 C 16 260.7 28 283.3 28 306';

const NODE_X = [28, 40, 28, 16, 28];
const nodeY = (index) => ROW_H / 2 + index * ROW_H;

// Each node lands just behind the passing head, so the sequence reads in order.
const stageDelay = (index) => 0.1 + index * 0.26;

const DRAW = { duration: 1.15, ease: ease.outQuint };

// Load-bearing: without it the spring scales about the viewBox origin and the
// nodes fly in from the top-left.
const NODE_TRANSFORM = { transformBox: 'fill-box', transformOrigin: 'center' };

// Education is outlined, work is filled. That is the only signal separating the
// two kinds of stage — no second colour, no legend, no per-node icon. The
// current role is the one exception and the only colour on the piece.
const NodeShapes = ({ stage, index }) => {
  const cx = NODE_X[index];
  const cy = nodeY(index);

  if (stage.current) {
    return (
      <>
        <circle cx={cx} cy={cy + 2} r={NODE_R} fill="rgb(var(--green-lip))" />
        <circle cx={cx} cy={cy} r={NODE_R} fill="rgb(var(--green))" />
      </>
    );
  }

  if (stage.work) {
    return (
      <>
        <circle cx={cx} cy={cy + 2} r={NODE_R} fill="rgb(var(--faint))" />
        <circle cx={cx} cy={cy} r={NODE_R} fill="rgb(var(--line-strong))" />
      </>
    );
  }

  return (
    <>
      <circle cx={cx} cy={cy + 2} r={NODE_R} fill="rgb(var(--line-strong))" />
      <circle
        cx={cx}
        cy={cy}
        r={NODE_R}
        fill="rgb(var(--bg))"
        stroke="rgb(var(--line-strong))"
        strokeWidth={2.5}
      />
    </>
  );
};

const StageLabel = ({ stage }) => (
  <>
    {stage.current ? <span className="sr-only">Current role. </span> : null}
    <p className="t-body-sm min-w-0 text-fg">{stage.label}</p>
    <p className="t-micro mt-1 min-w-0 tabular text-muted">{stage.period}</p>
  </>
);

const StagesPath = ({ headingId = 'stages-title' }) => {
  const reduce = useReducedMotion();
  // Measured, not chosen: 68ch of t-body-lg is 693.6px, and the 8-of-12 prose
  // cell only clears that from a ~1373px viewport up. Below 1400 this component
  // does not exist at all — no SVG, no observer, no animation frames — so the
  // Background band is byte-for-byte the single full-width column of prose it
  // has always been on phones, tablets and narrow laptops. It can never cramp
  // the measure at any width.
  const wide = useMediaQuery('(min-width: 1400px)');
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (inView) setRun(true);
  }, [inView]);

  // Safety net, and the reason this is safe for content. If
  // IntersectionObserver never fires — a background tab, a hidden document, a
  // throttled preview — the trail and the labels must still end up on screen
  // rather than sitting at pathLength 0 and opacity 0.
  useEffect(() => {
    const timer = window.setTimeout(() => setRun(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!wide) return null;

  const shown = reduce || run;

  return (
    <div className="min-w-0">
      {/* The heading is screen-reader only. Visually the sequence explains
          itself — the nodes run newest to oldest with the current role at the
          head — and a caption over it was one label too many. The <ol> still
          needs an accessible name, so it keeps one here. */}
      <h3 id={headingId} className="sr-only">
        Stages, newest first
      </h3>

      <div className="flex min-w-0 items-start gap-3">
        <svg
          ref={ref}
          viewBox={`0 0 ${RAIL_W} ${HEIGHT}`}
          width={RAIL_W}
          height={HEIGHT}
          focusable="false"
          aria-hidden="true"
          className="h-[340px] w-[56px] shrink-0"
        >
          {/* Reduced motion draws a plain path with no pathLength attribute at
              all, so there is no sub-pixel dash seam — the static pose is the
              finished pose. */}
          {reduce ? (
            <path d={D} fill="none" stroke="rgb(var(--line))" strokeWidth={STROKE} strokeLinecap="round" />
          ) : (
            <m.path
              d={D}
              fill="none"
              stroke="rgb(var(--line))"
              strokeWidth={STROKE}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: run ? 1 : 0 }}
              transition={DRAW}
            />
          )}

          {/* The green head. It rides the drawing tip for 1.15s and is gone by
              1.4s, so the piece is neutral again before anyone has finished the
              first paragraph. pathLength has to appear in `animate` as well as
              `initial`, or motion leaves stroke-dasharray at `none` and paints
              the whole trail green for the length of the entrance. */}
          {reduce ? null : (
            <m.path
              d={D}
              fill="none"
              stroke="rgb(var(--green))"
              strokeWidth={STROKE}
              strokeLinecap="round"
              initial={{ pathLength: 0.1, pathOffset: -0.1, opacity: 1 }}
              animate={{ pathLength: 0.1, pathOffset: run ? 1 : -0.1, opacity: run ? 0 : 1 }}
              transition={{
                pathLength: { duration: 0 },
                pathOffset: DRAW,
                opacity: { duration: 0.35, delay: 1, ease: 'easeOut' },
              }}
            />
          )}

          {STAGES.map((stage, index) =>
            reduce ? (
              <g key={stage.key}>
                <NodeShapes stage={stage} index={index} />
              </g>
            ) : (
              <m.g
                key={stage.key}
                style={NODE_TRANSFORM}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: run ? 1 : 0.6, opacity: run ? 1 : 0 }}
                transition={{ ...spring.pop, delay: stageDelay(index) }}
              >
                <NodeShapes stage={stage} index={index} />
              </m.g>
            )
          )}

          {/* The only loop, and the only thing that moves after 1.4s: a 7%-long
              green segment crossing the trail in 1.7s, once every ~11s, peaking
              at 45% opacity and confined inside the 6px ribbon. Now that the
              current role sits at the HEAD of the path, the glint runs the
              other way — it climbs from the oldest stage up to the green node,
              so it still arrives at "Present" rather than walking away from it.
              It is transform-free paint on one short path, and it is driven by
              `inView`, so scrolling the band away leaves motion with no active
              animation and the frame loop idle. */}
          {!reduce && run ? (
            <m.path
              d={D}
              fill="none"
              stroke="rgb(var(--green))"
              strokeWidth={STROKE}
              strokeLinecap="round"
              initial={{ pathLength: 0.07, pathOffset: 1, opacity: 0 }}
              animate={
                inView
                  ? { pathLength: 0.07, pathOffset: [1, -0.07], opacity: [0, 0.45, 0.45, 0] }
                  : { pathLength: 0.07, opacity: 0 }
              }
              transition={
                inView
                  ? {
                      pathLength: { duration: 0 },
                      pathOffset: {
                        duration: 1.7,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 9,
                        delay: 3.4,
                      },
                      opacity: {
                        duration: 1.7,
                        times: [0, 0.14, 0.86, 1],
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 9,
                        delay: 3.4,
                      },
                    }
                  : { duration: 0.2 }
              }
            />
          ) : null}
        </svg>

        <ol aria-labelledby={headingId} className="grid min-w-0 flex-1 grid-rows-[repeat(5,68px)]">
          {STAGES.map((stage, index) =>
            reduce ? (
              <li key={stage.key} className="flex min-w-0 flex-col justify-center">
                <StageLabel stage={stage} />
              </li>
            ) : (
              <m.li
                key={stage.key}
                className="flex min-w-0 flex-col justify-center"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: shown ? 1 : 0, x: shown ? 0 : -8 }}
                transition={{ ...spring.soft, delay: stageDelay(index) + 0.04 }}
              >
                <StageLabel stage={stage} />
              </m.li>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default StagesPath;
