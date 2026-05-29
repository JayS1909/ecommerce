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
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase mb-3">Size</h3>
          <div className="flex space-x-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 flex items-center justify-center text-sm font-bold transition border ${selectedSize === size ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black' : 'border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white text-gray-900 dark:text-gray-300'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className="text-sm text-gray-500 underline hover:text-black dark:hover:text-white">Size Guide</button>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase mb-3">Quantity</h3>
        <div className="flex items-center border border-gray-300 dark:border-gray-700 w-32 h-12">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 text-lg font-bold text-gray-500 hover:text-black dark:hover:text-white transition">-</button>
          <span className="flex-1 text-center font-bold">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="flex-1 text-lg font-bold text-gray-500 hover:text-black dark:hover:text-white transition">+</button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              category: product.category,
              size: selectedSize,
              quantity: quantity
            });
            alert('Added to cart!');
          }}
          className="flex-1 border-2 border-black dark:border-white bg-transparent text-black dark:text-white text-center px-6 py-4 font-bold uppercase tracking-wider hover:bg-gray-50 dark:hover:bg-gray-900 transition"
        >
          Add to Cart
        </button>
        <button className="flex-1 bg-blue-600 text-white text-center px-6 py-4 font-bold uppercase tracking-wider hover:bg-blue-700 transition">
          Buy It Now
        </button>
      </div>
    </>
  );
}
