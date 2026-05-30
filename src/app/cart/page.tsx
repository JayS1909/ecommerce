'use client';
import ImageWithFallback from "@/components/ui/ImageWithFallback";

import Link from "next/link";
import { useCartStore } from '@/store/useCartStore';

export default function CartPage() {
  const { cart, removeFromCart } = useCartStore();

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax + (cart.length > 0 ? 5 : 0); // 5 shipping if cart not empty

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          {cart.length === 0 ? (
            <div className="py-12 text-center border-t border-b border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 mb-4">Your cart is currently empty.</p>
              <Link href="/" className="text-blue-600 hover:underline">Continue Shopping</Link>
            </div>
          ) : (
            <ul className="border-t border-b border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
              {cart.map((item) => (
                <li key={`${item.id}-${item.size}`} className="flex py-6">
                  <div className={`h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 ${item.isCustom ? 'p-2' : ''}`} style={item.isCustom ? { backgroundColor: item.color } : {}}>
                    <ImageWithFallback src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                        <h3>
                          {item.isCustom ? (
                            <span>{item.name}</span>
                          ) : (
                            <Link href={`/product/${item.id}`}>{item.name}</Link>
                          )}
                        </h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.category} • Size: {item.size}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500 dark:text-gray-400">Qty {item.quantity}</p>
                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="font-medium text-red-600 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>

              {/* Coupon Box */}
              <div className="flex space-x-2 pt-2 pb-2">
                <input type="text" placeholder="Coupon Code" className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none" />
                <button className="bg-gray-200 dark:bg-gray-700 px-4 py-2 text-sm font-bold uppercase">Apply</button>
              </div>

              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <p>Shipping estimate</p>
                <p>${cart.length > 0 ? '5.00' : '0.00'}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <p>Tax estimate</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between text-base font-medium text-gray-900 dark:text-white">
                <p>Order total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/checkout" className={`w-full flex items-center justify-center rounded-none border border-transparent bg-black dark:bg-white dark:text-black px-6 py-4 text-base font-bold uppercase tracking-widest text-white shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200 ${cart.length === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                Checkout
              </Link>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-green-600 dark:text-green-400 font-bold uppercase flex items-center justify-center"><span className="mr-1">💵</span> Cash on Delivery Available</p>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-gray-400">
              <p>
                or{' '}
                <Link href="/" className="font-medium text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-200">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
