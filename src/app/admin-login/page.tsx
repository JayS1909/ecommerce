'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Invalid admin password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-black uppercase mb-6 text-center text-gray-900 dark:text-white">Admin Login</h1>

        {error && <div className="bg-red-100 text-red-600 p-3 mb-4 text-sm font-bold">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
              required
            />
          </div>
          <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase py-3 tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 transition">
            Access Admin Panel
          </button>
        </form>
      </div>
    </div>
  );
}
