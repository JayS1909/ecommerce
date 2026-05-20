'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export default function ProductClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <>
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Size</h3>
        <div className="flex space-x-3">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded border flex items-center justify-center transition ${selectedSize === size ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black' : 'border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white text-gray-900 dark:text-white'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => {
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              category: product.category,
              size: selectedSize,
              quantity: 1
            });
            alert('Added to cart!');
          }}
          className="flex-1 bg-black text-white dark:bg-white dark:text-black text-center px-6 py-4 rounded-md font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
