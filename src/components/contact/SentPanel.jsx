import { useEffect, useRef } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { m, useReducedMotion } from 'motion/react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { springJump } from '../../lib/motion';

// The success screen: it replaces the form once the message is away.

const SentPanel = ({ onRestart }) => {
  const reduce = useReducedMotion();
  const heading = useRef(null);

  useEffect(() => {
    heading.current?.focus();
  }, []);

  return (
    <Card tone="tint-green" padding={24} className="flex flex-col items-center gap-4 text-center">
      <m.div
        initial={reduce ? false : { y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={reduce ? { duration: 0 } : springJump}
      >
        <FaCircleCheck size={72} className="text-green" aria-hidden="true" />
      </m.div>

      <h2 ref={heading} tabIndex={-1} className="t-h2 text-green-ink">
        Message sent!
      </h2>

      <p className="t-body-lg max-w-[44ch] text-fg">
        Thanks for reaching out — I usually reply within a day.
      </p>

      <div className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Button to="/" variant="primary" size="lg">
          Back to home
        </Button>
        <Button variant="secondary" size="lg" onClick={onRestart}>
          Send another
        </Button>
      </div>
    </Card>
  );
};

export default SentPanel;
