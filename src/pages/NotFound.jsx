import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const NotFound = () => (
  <section className="container-narrow flex min-h-[60vh] flex-col items-start justify-center py-20">
    <p className="eyebrow">404</p>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">Page not found</h1>
    <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
      That link doesn&apos;t go anywhere. The site was rebuilt recently, so an old URL may have moved.
    </p>
    <Link to="/" className="btn-primary mt-8">
      <FaArrowLeft size={12} /> Back to home
    </Link>
  </section>
);

export default NotFound;
