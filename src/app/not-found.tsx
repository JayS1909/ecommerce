import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800">404</h1>
      <h2 className="text-3xl font-bold uppercase mt-4 mb-6">Page Not Found</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
