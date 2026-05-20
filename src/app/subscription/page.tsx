'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function SubscriptionPage() {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);

    // Simulate API call to backend to create subscription and get order ID
    await new Promise(resolve => setTimeout(resolve, 1000));

    const options = {
      key: 'rzp_test_YOUR_KEY_HERE', // Mock Razorpay key
      subscription_id: 'sub_MOCK1234567890', // Mock Subscription ID from your backend
      name: 'ClothingCo Premium',
      description: 'Monthly VIP Membership',
      image: 'https://via.placeholder.com/150',
      handler: function (response: Record<string, string>) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}\nSubscription ID: ${response.razorpay_subscription_id}`);
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#000000'
      }
    };

    // @ts-expect-error Razorpay SDK is loaded via external script so window.Razorpay is not globally typed
    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">ClothingCo VIP Membership</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Join our premium club and unlock exclusive benefits.</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border dark:border-gray-800 flex flex-col md:flex-row">
        <div className="p-8 md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">VIP Benefits Include:</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Free priority shipping on all orders</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Early access to new seasonal collections</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Exclusive 10% discount on sale items</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Extended 60-day return policy</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 md:w-1/3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$9.99</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 mb-8">Billed monthly. Cancel anytime.</p>

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-4 rounded shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Subscribe via Razorpay'}
          </button>
        </div>
      </div>
    </div>
  );
}
