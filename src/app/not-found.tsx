import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-20 text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-textSecondary">The page you requested does not exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-lg bg-primary px-4 py-2 text-white">Go home</Link>
    </div>
  );
}
