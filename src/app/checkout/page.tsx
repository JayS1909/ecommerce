import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Contact Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email address
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="you@example.com" />
        </div>

        <h2 className="text-xl font-bold mb-4 mt-8 border-b pb-2">Shipping Address</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="firstName" type="text" placeholder="John" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="lastName" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="address" type="text" placeholder="123 Main St" />
        </div>

        <h2 className="text-xl font-bold mb-4 mt-8 border-b pb-2">Payment</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card">Card Number</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="card" type="text" placeholder="0000 0000 0000 0000" />
        </div>

        <div className="flex items-center justify-between mt-8">
          <Link href="/cart" className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-black">
            Return to Cart
          </Link>
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
