import Link from "next/link";
import products from "@/data/products.json";

export default function CartPage() {
  // Using some mock items for the cart
  const cartItems = products.slice(0, 2);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <ul className="border-t border-b border-gray-200 dark:border-gray-700 divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                      <h3><Link href={`/product/${item.id}`}>{item.name}</Link></h3>
                      <p className="ml-4">${item.price.toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.category} • Size: M</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500 dark:text-gray-400">Qty 1</p>
                    <div className="flex">
                      <button type="button" className="font-medium text-red-600 hover:text-red-500">Remove</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <p>Shipping estimate</p>
                <p>$5.00</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <p>Tax estimate</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between text-base font-medium text-gray-900 dark:text-white">
                <p>Order total</p>
                <p>${(total + 5).toFixed(2)}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/checkout" className="w-full flex items-center justify-center rounded-md border border-transparent bg-black dark:bg-white dark:text-black dark:text-white px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800">
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-gray-400">
              <p>
                or{' '}
                <Link href="/" className="font-medium text-black dark:text-white hover:text-gray-800">
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
