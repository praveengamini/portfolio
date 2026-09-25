import Button from '../ui/Button';

// Spec 3.8 — hidden until focused, then a real secondary button pinned to the
// top-left corner (z 100). Activating it moves focus into <main>.

const focusMain = (event) => {
  event.preventDefault();
  const main = document.getElementById('main');
  if (!main) return;
  main.focus({ preventScroll: true });
  main.scrollIntoView({ block: 'start', behavior: 'auto' });
};

const SkipLink = () => (
  <Button
    href="#main"
    variant="secondary"
    size="md"
    onClick={focusMain}
    className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100]"
  >
    Skip to content
  </Button>
);

export default SkipLink;
