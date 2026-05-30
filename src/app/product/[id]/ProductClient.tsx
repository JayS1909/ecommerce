'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import SizeGuideModal from '@/components/ui/SizeGuideModal';
import { Check } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export default function ProductClient({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart } = useCartStore();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      size: selectedSize,
      quantity: quantity
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      size: selectedSize,
      quantity: quantity
    });
    router.push('/checkout');
  };

  return (
    <>
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded shadow-2xl z-50 flex items-center animate-in slide-in-from-bottom-5">
          <Check className="mr-2 text-green-400 dark:text-green-600" size={20} />
          <span className="font-bold">Added to cart successfully</span>
        </div>
      )}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />

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
        <button onClick={() => setIsSizeGuideOpen(true)} className="text-sm text-gray-500 underline hover:text-black dark:hover:text-white">Size Guide</button>
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
          onClick={handleAddToCart}
          className="flex-1 border-2 border-black dark:border-white bg-transparent text-black dark:text-white text-center px-6 py-4 font-bold uppercase tracking-wider hover:bg-gray-50 dark:hover:bg-gray-900 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-black text-white dark:bg-white dark:text-black text-center px-6 py-4 font-bold uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          Buy It Now
        </button>
      </div>
    </>
  );
}
