'use client';

import { useState } from 'react';

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState<{ id: string, status: string, date: string, expected: string } | null>(null);
  const [isSearched, setIsSearched] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearched(true);
    // Mock response
    if (orderId && email) {
      setTrackingResult({
        id: orderId,
        status: 'In Transit',
        date: 'Shipped on Oct 14, 2023',
        expected: 'Oct 18, 2023'
      });
    } else {
      setTrackingResult(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">Track Your Order</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">Enter your order details below to track your shipment&apos;s current status.</p>

        <form onSubmit={handleTrack} className="space-y-6">
          <div>
            <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Order ID</label>
            <input
              type="text"
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="e.g. 10293"
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              required
            />
          </div>
          <button type="submit" className="w-full bg-black dark:bg-white dark:text-black text-white px-4 py-3 rounded-md font-bold hover:bg-gray-800 transition">
            Track Order
          </button>
        </form>

        {isSearched && trackingResult && (
          <div className="mt-10 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h2 className="text-xl font-bold mb-4">Tracking Results for Order #{trackingResult.id}</h2>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Status</p>
                <p className="text-lg font-bold text-blue-600">{trackingResult.status}</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Expected Delivery</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{trackingResult.expected}</p>
              </div>
            </div>

            <div className="relative pt-8">
              {/* Simple Tracking Timeline Mock */}
              <div className="absolute top-10 left-4 w-0.5 h-full bg-gray-200 -z-10"></div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-4 z-10 shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold">In Transit - Arriving at Local Facility</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Oct 16, 2023 - 8:45 AM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-4 z-10 shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold">Shipped</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Oct 14, 2023 - 2:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-4 z-10 shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold">Order Placed</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Oct 13, 2023 - 10:15 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
