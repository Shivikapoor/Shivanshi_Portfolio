import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center px-6">
      <div>
        <p className="eyebrow justify-center mb-4">404</p>
        <h1 className="editorial-heading text-4xl sm:text-5xl font-semibold text-ink-100">Page not found</h1>
        <p className="mt-3 text-ink-400">This route doesn't exist. Let's get you back on track.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-mint-500 text-ink-900 font-medium text-sm rounded-full px-6 py-3"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
