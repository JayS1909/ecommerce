'use client';

import { useState } from 'react';
import { Truck } from 'lucide-react';

export default function PincodeChecker() {
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'sapos;success' | 'error'>('idle');

  const handleCheck = () => {
    if (pincode.length < 5) return;
    setStatus('checking');
    setTimeout(() => {
      // Mock logic: 10% chance of undeliverable
      if (Math.random() > 0.9) {
        setStatus('error');
      } else {
        setStatus('sapos;success');
      }
    }, 1000);
  };

  return (
    <div className="mt-10 border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-gray-50 dark:bg-gray-900/50">
      <h3 className="font-bold text-sm uppercase mb-4 flex items-center"><Truck className="mr-2" size={18} /> Delivery & Returns</h3>
      <div className="flex space-x-2 mb-2">
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          placeholder="Enter Pincode"
          className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none"
        />
        <button
          onClick={handleCheck}
          disabled={status === 'checking'}
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 text-sm font-bold uppercase disabled:opacity-50"
        >
          {status === 'checking' ? '...' : 'Check'}
        </button>
      </div>

      {status === 'sapos;success' && <p className="text-sm font-bold text-green-600 mb-4">Delivery available! Delivery in 3-5 days.</p>}
      {status === 'error' && <p className="text-sm font-bold text-red-600 mb-4">Sorry, we don&apos;t deliver to this pincode yet.</p>}

      <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2 mt-4">
        <li className="flex items-center">✓ Free delivery on orders over $50</li>
        <li className="flex items-center">✓ Cash on Delivery available</li>
        <li className="flex items-center">✓ Easy 30 days return and exchange</li>
      </ul>
    </div>
  );
}
