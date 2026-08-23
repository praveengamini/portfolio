const Section = ({ id, eyebrow, title, icon: Icon, action, children, className = '' }) => (
  <section id={id} className={`py-14 sm:py-20 ${className}`}>
    <div className="container-narrow">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-1 flex items-center gap-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            {Icon && (
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-card text-accent">
                <Icon size={16} />
              </span>
            )}
            {title}
          </h2>
        </div>
        {action}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
