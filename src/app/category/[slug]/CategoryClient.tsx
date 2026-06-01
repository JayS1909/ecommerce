
'use client';
type Product = { id: string, name: string, price: number, image: string, hoverImage: string, category: string, sizes?: string[] };

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Heart } from 'lucide-react';

export default function CategoryClient({ decodedSlug, initialProducts }: { decodedSlug: string, initialProducts: Product[] }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState('Newest');
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...initialProducts];

    // Dummy size filter (randomly assigns sizes to products if not present for mock purposes)
    if (selectedSize) {
       result = result.filter(p => {
           const sizes = p.sizes || ['S', 'M', 'L', 'XL'];
           return sizes.includes(selectedSize);
       });
    }

    // Sort
    switch (sortOption) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Newest':
      default:
        // Mock newest by reversing ID order
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
    }

    return result;
  }, [initialProducts, selectedSize, sortOption]);

  const toggleWishlist = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    if (wishlist.find(i => i.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filters */}
      <div className="lg:w-1/4">
        <div className="sticky top-24">
          <h2 className="text-xl font-bold uppercase tracking-tight mb-6">Filters</h2>

          <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
            <h3 className="font-bold mb-3 uppercase text-sm">Size</h3>
            <div className="flex flex-wrap gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                  className={`border w-10 h-10 flex items-center justify-center text-sm cursor-pointer transition ${selectedSize === size ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black' : 'border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white'}`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => { setSelectedSize(null); setSortOption('Newest'); }}
            className="w-full border-2 border-black dark:border-white text-black dark:text-white py-3 font-bold uppercase text-sm"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Product Grid & Sort */}
      <div className="lg:w-3/4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tight">{decodedSlug} <span className="text-gray-400 text-lg font-medium">({filteredAndSortedProducts.length})</span></h1>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium focus:outline-none"
          >
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {filteredAndSortedProducts.length === 0 ? (
           <div className="text-center py-20 max-w-2xl mx-auto">
             <div className="text-gray-500 leading-relaxed space-y-4">
               <p>We’re constantly working on fresh, trend-forward designs that we believe you’ll absolutely love.</p>
               <p>Right now, we’re starting with a limited selection to keep your shopping experience simple, easy, and clutter-free — but exciting new styles are already on the way.</p>
               <p>Stay tuned, shop with confidence, and thank you for being part of our journey.</p>
             </div>
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <div key={product.id} className="group relative bg-white dark:bg-gray-800 flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                  <ImageWithFallback src={product.hoverImage || product.image} alt="back view" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                  <button
                    onClick={(e) => toggleWishlist(product, e)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:text-red-500 transition z-10"
                    title="Toggle Wishlist"
                  >
                    <Heart size={16} className={wishlist.find(i => i.id === product.id) ? "fill-red-500 text-red-500" : "text-black"} />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                    <Link href={`/product/${product.id}`} className="w-full block text-center bg-white text-black font-bold py-2 text-sm uppercase hover:bg-gray-200">
                      Quick View
                    </Link>
                  </div>
                </div>
                <div className="pt-4 pb-2">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate mb-1">
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
