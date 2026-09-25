import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import Card from '../components/ui/Card';
import FilterPills from '../components/ui/FilterPills';
import PageSection from '../components/ui/PageSection';
import ProjectCard from '../components/projects/ProjectCard';
import EarlyProjectRow from '../components/projects/EarlyProjectRow';
import EmptyState from '../components/projects/EmptyState';
import { projects, projectTags } from '../data/projects';
import { duration, springPop } from '../lib/motion';

// /projects — two groups and nothing else: the recent work as a uniform card
// grid, then the earlier projects as a compact list. All nine projects render
// and every field is visible without a click; in the 3-up band the card clamps
// its two prose lines so a long project cannot stretch its row.
//
// The page sets no container width — AppShell owns that.

const LEAD = 'Things I’ve built outside work — most with a live deployment. Source is linked for each.';
const EARLY_CAPTION = 'From my first couple of years learning to code. Kept for the record.';

// Featured work leads the grid; .sort() is stable, so the data order holds inside
// each half. No badge is needed — the order carries it.
const main = projects
  .filter((project) => !project.early)
  .slice()
  .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

const early = projects.filter((project) => project.early);

// A tag only earns a pill when a project in the grid uses it.
const tags = projectTags.filter((tag) => tag === 'All' || main.some((p) => p.tags.includes(tag)));

const countFor = (tag) => (tag === 'All' ? main.length : main.filter((p) => p.tags.includes(tag)).length);

// All 6, AI 4, Full Stack 3, Extension 1, Frontend 1 — derived, never hard-coded.
const filterOptions = tags.map((value) => ({ value, count: countFor(value) }));

// One fixed row height per band, so every card on the page is the same height,
// not just every card in a row. Cards with less content show slack above the
// action band that `mt-auto` pins to the bottom.
//
// The two-up grid starts at 900, not at the shared 640 breakpoint: measured in
// the browser, a 2-up card between 640 and 899 is only 286–298px wide against a
// ~600px body, which is the 1:2 slab this redesign exists to kill. Below 900 the
// card runs full width at its natural height instead.
//
// Three up from 1280 — the same breakpoint at which the labelled rail opens —
// so the six main projects read as 3 × 2 rather than 3 × 2 only on a 1600px
// monitor. At 1440 that is a ~354px cell; ProjectCard clamps its prose there so
// a wordy project cannot stretch the row.
//
// The two 2-up heights were measured in the browser, not guessed: each clears
// the tallest card in its band, so no row ever grows past its siblings.
//
// The 3-up band uses `auto-rows-fr` instead of a third magic number. Equal fr
// rows in an auto-height grid all resolve to the tallest row's content, so both
// rows of three are exactly the same height at every width from 1280 up — no
// px guess to go stale, and no dead space above the action band from a number
// pitched too high for the cell. Measured: 497px at 1280, 519px at 1440.
const GRID_CLASSES = [
  'grid gap-4 sm:gap-5 min-[900px]:gap-6 min-[1600px]:gap-7',
  'min-[900px]:grid-cols-2 xl:grid-cols-3',
  'min-[900px]:[grid-auto-rows:minmax(620px,auto)]',
  'lg:[grid-auto-rows:minmax(600px,auto)]',
  'xl:auto-rows-fr',
].join(' ');

// The filter rides down the page with the grid instead of scrolling off the top
// of it. It sticks at the shared --sticky-top offset, which index.css sets to
// 56px below 768 (exactly the height of the mobile TopBar, so the two edges
// meet), 72px from 768, and 0 from 1024 where there is no top bar — flush to
// the viewport, because a gap there just let card art scroll through it. `-mt-5`
// cancels the PageSection content gap so the bar hangs straight off the band
// rule, and `mb-5` gives it back above the grid.
//
// z-20 places it under the TopBar (z-30), the SideNav and tab bar (z-40) and
// the feedback bar (z-45), and over the cards, which carry no z-index at all —
// including the absolutely positioned ones AnimatePresence popLayout leaves
// behind on exit. bg-bg keeps those cards from showing through it.
//
// Below 640 the pills scroll sideways rather than wrap. Measured at 375px the
// five pills wrap to three rows — ~180px of filter parked under a 56px TopBar,
// a quarter of the viewport. The strip bleeds into the shell gutter there so it
// runs edge to edge and focus rings are not clipped at the first pill.
const FILTER_BAR = [
  'sticky z-20 -mt-5 mb-5 border-b-2 border-line bg-bg pb-3.5 pt-5',
  'no-scrollbar overflow-x-auto sm:overflow-x-visible',
  'mx-[calc(var(--gutter)_*_-1)] px-[var(--gutter)] sm:mx-0 sm:px-0',
  // `shrink-0` as well as `flex-nowrap`: a nowrap flex item still shrinks, and
  // a squeezed pill breaks its own label across two lines ("FULL / STACK").
  "[&_[role='group']]:flex-nowrap sm:[&_[role='group']]:flex-wrap",
  "[&_[role='group']>*]:shrink-0",
].join(' ');

const Projects = () => {
  const [tag, setTag] = useState('All');
  const reduce = useReducedMotion();

  const visible = tag === 'All' ? main : main.filter((project) => project.tags.includes(tag));

  return (
    <div className="flex min-w-0 flex-col gap-10 md:gap-12 lg:gap-14">
      <header className="min-w-0">
        <h1 className="t-h1 text-fg">Projects</h1>
        <p className="t-body-lg mt-2 max-w-[58ch] text-muted">{LEAD}</p>
      </header>

      <PageSection titleId="recent-projects" title="Recent projects">
        <div className={FILTER_BAR} style={{ top: 'var(--sticky-top)' }}>
          <FilterPills
            label="Filter projects"
            options={filterOptions}
            value={tag}
            onChange={setTag}
            controls="project-grid"
          />
        </div>

        <div id="project-grid" className={GRID_CLASSES}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, index) => (
              <m.div
                key={project.slug}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: reduce ? { duration: 0 } : { ...springPop, delay: index * 0.04 },
                }}
                exit={
                  reduce
                    ? { opacity: 0, transition: { duration: duration.reduced } }
                    : { opacity: 0, scale: 0.96, transition: { duration: duration.exit } }
                }
                className="flex h-full min-w-0 [&>*]:w-full"
              >
                <ProjectCard project={project} />
              </m.div>
            ))}
          </AnimatePresence>
        </div>

        {visible.length === 0 ? <EmptyState onReset={() => setTag('All')} /> : null}
      </PageSection>

      <PageSection titleId="earlier-projects" title="Earlier projects" count={`${early.length} projects`}>
        <p className="t-body-sm max-w-[62ch] text-muted">{EARLY_CAPTION}</p>

        <Card padding={0} className="mt-4">
          <ul aria-label="Earlier projects" className="divide-y-2 divide-line">
            {early.map((project) => (
              <EarlyProjectRow key={project.slug} project={project} />
            ))}
          </ul>
        </Card>
      </PageSection>
    </div>
  );
};

export default Projects;
