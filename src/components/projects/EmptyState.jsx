import Button from '../ui/Button';

// What the filter shows when nothing matches. One line, one way back.

const EmptyState = ({ message = 'No projects with that tag.', actionLabel = 'Show all', onReset }) => (
  <div className="flex flex-col items-center gap-4 py-12 text-center">
    <p className="t-body-lg text-fg">{message}</p>
    <Button variant="secondary" size="md" onClick={onReset}>
      {actionLabel}
    </Button>
  </div>
);

export default EmptyState;
