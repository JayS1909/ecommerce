'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Menu, X, ShoppingCart, Heart, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Hydration safety for Zustand stores
  const [isMounted, setIsMounted] = useState(false);
  const { getTotalItems } = useCartStore();
  const { wishlist } = useWishlistStore();

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
  }, []);

  const navLinks = [
    { name: "Oversized Tees", href: "/category/Oversized%20Tees" },
    { name: "Regular Tees", href: "/category/Regular%20Tees" },
    { name: "Hoodies", href: "/category/Hoodies" },
    { name: "Bottoms", href: "/category/Bottoms" },
    { name: "Accessories", href: "/category/Accessories" },
    { name: "Custom", href: "/design" }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm w-full z-50 sticky top-0 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo & Desktop Nav */}
          <div className="flex items-center justify-center lg:justify-start flex-1 lg:flex-none">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-extrabold text-2xl tracking-tighter text-gray-900 dark:text-white">EXTRAALAYER</span>
            </Link>
            <div className="hidden lg:ml-8 lg:flex lg:space-x-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors uppercase tracking-wide">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <Link href="/account" className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-2 hidden sm:block" aria-label="Account">
              <User size={20} />
            </Link>

            <Link href="/wishlist" className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-2 relative" aria-label="Wishlist">
              <Heart size={20} />
              {isMounted && wishlist.length > 0 && (
                <span className="absolute top-1 right-0 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link href="/cart" className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-2 relative pr-4" aria-label="Cart">
              <ShoppingCart size={20} />
              {isMounted && getTotalItems() > 0 && (
                <span className="absolute top-1 right-2 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar Dropdown */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 shadow-md">
          <div className="max-w-3xl mx-auto flex items-center">
            <input
              type="text"
              placeholder="Search products, categories..."
              className="w-full bg-gray-100 dark:bg-gray-800 border-none px-4 py-3 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-bold uppercase ml-2">Search</button>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-xl h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-900 dark:text-white text-lg font-black uppercase tracking-wide py-3 border-b border-gray-100 dark:border-gray-800"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 space-y-4">
              <Link href="/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-gray-600 dark:text-gray-300 py-2 font-bold uppercase text-sm">
                <User size={18} className="mr-3" /> My Account
              </Link>
              <Link href="/order-tracking" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-gray-600 dark:text-gray-300 py-2 font-bold uppercase text-sm">
                Track Order
              </Link>
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center bg-black dark:bg-white text-white dark:text-black py-3 font-black uppercase mt-4">
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
