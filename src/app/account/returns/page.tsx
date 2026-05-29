'use client';
import Link from "next/link";

export default function ReturnsPage() {
  const eligibleOrders = [
    { id: '10293', date: '2023-10-15', status: 'Delivered', items: 2, total: 45.50 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Account Sidebar Navigation */}
        <div className="md:w-1/4">
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-6">My Account</h2>
            <nav className="space-y-2">
              <Link href="/account" className="block text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-none transition font-bold uppercase text-sm">Dashboard</Link>
              <Link href="/order-tracking" className="block text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-none transition font-bold uppercase text-sm">My Orders</Link>
              <Link href="/account/returns" className="block font-bold bg-black text-white px-4 py-3 rounded-none uppercase text-sm">Returns & Exchanges</Link>
              <Link href="/account/wallet" className="block text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-none transition font-bold uppercase text-sm">Wallet ($25.00)</Link>
              <Link href="/wishlist" className="block text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-none transition font-bold uppercase text-sm">Wishlist</Link>
            </nav>
          </div>
        </div>

        {/* Returns Content */}
        <div className="md:w-3/4">
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg p-8">
            <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-6">Initiate Return / Exchange</h1>

            <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-bold uppercase mb-4">Request Form</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Select Order</label>
                  <select className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-sm focus:outline-none">
                    <option>Order #10293 - Delivered Oct 15</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Reason for Return</label>
                  <select className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-sm focus:outline-none">
                    <option>Size doesn't fit</option>
                    <option>Received wrong item</option>
                    <option>Quality issue / Damaged</option>
                    <option>Changed my mind</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Upload Photo for Quality Check</label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                     <p className="text-sm text-gray-500">Click or drag image here (Max 5MB)</p>
                     <input type="file" className="hidden" />
                  </div>
                </div>
                <div className="pt-4">
                  <button type="button" onClick={() => alert('Return Request Submitted!')} className="bg-black dark:bg-white text-white dark:text-black font-black uppercase px-8 py-4 w-full md:w-auto">Submit Request</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
