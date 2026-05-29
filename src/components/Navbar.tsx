import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: "Oversized Tees", href: "/category/Oversized%20Tees" },
    { name: "Regular Tees", href: "/category/Regular%20Tees" },
    { name: "Hoodies", href: "/category/Hoodies" },
    { name: "Bottoms", href: "/category/Bottoms" },
    { name: "Accessories", href: "/category/Accessories" }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md w-full z-10 sticky top-0 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-extrabold text-2xl tracking-tighter text-gray-900 dark:text-white">URBAN<span className="text-blue-600">FIT</span></span>
            </Link>
            <div className="hidden lg:ml-8 lg:flex lg:space-x-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors uppercase tracking-wide">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/track-order" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 py-2 text-sm font-medium transition-colors hidden md:block">Track Order</Link>
            <Link href="/wishlist" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 py-2 text-sm font-medium transition-colors hidden md:block">Wishlist</Link>
            <Link href="/design" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 py-2 text-sm font-medium transition-colors hidden lg:block">Custom</Link>
            <Link href="/account" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 py-2 text-sm font-medium transition-colors">Account</Link>
            <Link href="/cart" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 py-2 text-sm font-medium transition-colors flex items-center">
              <span>Cart</span>
            </Link>
            <Link href="/login" className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1.5 rounded-md text-sm font-bold transition-colors">Log In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
