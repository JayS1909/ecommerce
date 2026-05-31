'use client';

import { useWishlistStore } from '@/store/useWishlistStore';
import { Heart } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function WishlistButton({ product }: { product: Product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className="w-8 h-8 flex items-center justify-center bg-white dark:bg-black rounded-full shadow-md text-gray-500 hover:text-red-500 transition-colors"
      aria-label="Toggle Wishlist"
    >
      <Heart size={16} className={inWishlist ? "fill-red-500 text-red-500" : ""} />
    </button>
  );
}
