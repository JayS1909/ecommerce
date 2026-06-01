'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCartStore } from "@/store/useCartStore";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

// Add Product type
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid synchronous setState warning by scheduling
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-black uppercase tracking-tight mb-8">Your Wishlist</h1>
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1,
      size: 'L', // Defaulting size for wishlist quick add
    });
    alert('Added to cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-8">Your wishlist is currently empty. Start adding some heat!</p>
          <Link href="/" className="inline-block bg-black dark:bg-white text-white dark:text-black font-bold uppercase px-8 py-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <div key={product.id} className="group relative border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-900">
                <Link href={`/product/${product.id}`}>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-white dark:bg-black rounded-full shadow-md text-red-500 hover:text-red-700 transition"
                  aria-label="Remove from wishlist"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">₹{product.price.toFixed(2)}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-black dark:bg-white text-white dark:text-black uppercase font-bold text-xs py-3 tracking-wider hover:bg-gray-900 dark:hover:bg-gray-100 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
