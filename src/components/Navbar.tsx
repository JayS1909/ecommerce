import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full z-10 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-gray-800">ClothingCo</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/category/Men" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Men</Link>
              <Link href="/category/Women" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Women</Link>
              <Link href="/category/Kids" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Kids</Link>
              <Link href="/category/Accessories" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Accessories</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/order-tracking" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Track Order</Link>
            <Link href="/account" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Account</Link>
            <Link href="/cart" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Cart</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
