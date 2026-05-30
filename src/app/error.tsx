'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h2 className="text-3xl font-bold uppercase mb-4 text-red-600">Something went wrong!</h2>
      <p className="text-gray-500 mb-8 max-w-md text-center">We&apos;ve been notified and are looking into the issue.</p>
      <button
        onClick={() => reset()}
        className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
