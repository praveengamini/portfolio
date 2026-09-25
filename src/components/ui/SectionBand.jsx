// Layout spec §1.6 — the header band every top-level section wears, on every
// page: the h2 on the left, a derived count on the right, a 2px rule under
// both. One implementation, so Home, About, Projects and Contact cannot drift.
//
// `actions` puts a control (the projects filter) on the heading row from `md`
// up, which saves the row it would otherwise occupy on its own.
//
// Bands are separated by the rule and the band gap; a band is never a card.
// The heading keeps `tabIndex={-1}` and a scroll margin so hash links
// (/skills → /#skills, /projects#slug) land clear of the sticky top bar.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const SectionBand = ({ id, title, count, actions, as: Heading = 'h2', className = '' }) => (
  <div className={cx('min-w-0', className)}>
    <div className="flex min-w-0 flex-col gap-y-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-6">
      <div className="flex min-w-0 flex-1 items-baseline justify-between gap-4">
        <Heading
          id={id}
          tabIndex={-1}
          className="t-h2 min-w-0 text-fg"
          style={{ scrollMarginTop: 'calc(var(--sticky-top) + 24px)' }}
        >
          {title}
        </Heading>

        {count ? <span className="t-micro shrink-0 tabular text-muted">{count}</span> : null}
      </div>

      {actions ?? null}
    </div>

    <span aria-hidden="true" className="mt-3.5 block h-0.5 w-full bg-line" />
  </div>
);

export default SectionBand;
