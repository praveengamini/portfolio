import { FaArrowLeft } from 'react-icons/fa6';
import Button from '../components/ui/Button';

// The 404: a big number, a line of explanation, one way back.

const BODY = 'That link doesn’t go anywhere. The site was rebuilt recently, so an old URL may have moved.';

const NotFound = () => {
  return (
    <section
      aria-labelledby="notfound-title"
      className="mx-auto flex w-full max-w-[560px] flex-col items-center justify-center gap-6 py-12 text-center"
      style={{ minHeight: '60vh' }}
    >
      <p aria-hidden="true" className="t-display-num select-none text-line">
        404
      </p>

      <h1 id="notfound-title" className="t-h1 text-fg">
        Page not found
      </h1>

      <p className="t-body-lg max-w-[44ch] text-muted">{BODY}</p>

      <Button to="/" variant="primary" size="lg" icon={<FaArrowLeft />}>
        Back to home
      </Button>
    </section>
  );
};

export default NotFound;
