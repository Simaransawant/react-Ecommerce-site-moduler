'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-2xl py-20 text-center">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <p className="mt-2 text-textSecondary">{error.message}</p>
      <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-white" onClick={reset}>Try again</button>
    </div>
  );
}
