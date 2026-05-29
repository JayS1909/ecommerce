'use client';

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal + (subtotal * 0.08) + (cart.length > 0 ? 5 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-8">Fast Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        <form className="lg:w-2/3">
          {/* Fast Checkout / Address Autofill Mock */}
          <div className="bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-6">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
              <h2 className="text-xl font-bold uppercase">Shipping Address</h2>
              <button type="button" className="text-sm font-bold text-blue-600 uppercase">Autofill from Account</button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">First Name</label>
                <input className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none" type="text" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Last Name</label>
                <input className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none" type="text" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Complete Address</label>
              <textarea className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none" rows={3}></textarea>
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-6">
            <h2 className="text-xl font-bold uppercase border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">Payment Method</h2>

            <div className="space-y-4">
              <label className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <input type="radio" name="payment" defaultChecked className="form-radio h-5 w-5 text-black" />
                <span className="font-bold">UPI / QR Code</span>
              </label>
              <label className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <input type="radio" name="payment" className="form-radio h-5 w-5 text-black" />
                <span className="font-bold">Credit / Debit Card</span>
              </label>
              <label className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <input type="radio" name="payment" className="form-radio h-5 w-5 text-black" />
                <span className="font-bold">Cash on Delivery (COD)</span>
              </label>
              <label className="flex items-center space-x-3 p-3 border border-blue-200 bg-blue-50 dark:bg-blue-900/20 cursor-pointer transition">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="font-bold text-blue-800 dark:text-blue-300">Use Store Wallet Credits (Balance: $25.00)</span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link href="/cart" className="font-bold text-sm text-gray-500 hover:text-black dark:hover:text-white uppercase">
              &larr; Return to Cart
            </Link>
            <button className="bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest py-4 px-10 hover:bg-gray-800 transition-colors" type="button" onClick={() => alert('Order Placed Successfully!')}>
              Place Order
            </button>
          </div>
        </form>

        <div className="lg:w-1/3">
           <div className="bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
             <h2 className="text-lg font-bold uppercase mb-4">In Your Bag</h2>
             <ul className="divide-y divide-gray-200 dark:divide-gray-700 mb-6">
               {cart.map(item => (
                 <li key={`${item.id}-${item.size}`} className="py-4 flex text-sm">
                   <div className="flex-1 font-medium">{item.name} (x{item.quantity})</div>
                   <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                 </li>
               ))}
             </ul>
             <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between font-black text-lg">
               <span>Total</span>
               <span>${total.toFixed(2)}</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
