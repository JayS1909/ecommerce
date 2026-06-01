
'use client';
type Product = {
  id: string,
  name: string,
  price: number,
  image: string,
  hoverImage: string,
  category: string,
  subcategory?: string,
  collection?: string,
  color?: string,
  sizes?: string[]
};

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import WishlistButton from "@/components/ui/WishlistButton";

export default function CategoryClient({ decodedSlug, initialProducts }: { decodedSlug: string, initialProducts: Product[] }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [sortOption, setSortOption] = useState('Newest');

  // Extract unique filter options from initial products
  const availableSubcategories = useMemo(() => Array.from(new Set(initialProducts.map(p => p.subcategory).filter(Boolean))), [initialProducts]);
  const availableCollections = useMemo(() => Array.from(new Set(initialProducts.map(p => p.collection).filter(Boolean))), [initialProducts]);
  const availableColors = useMemo(() => Array.from(new Set(initialProducts.map(p => p.color).filter(Boolean))), [initialProducts]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...initialProducts];

    if (selectedSize) {
       result = result.filter(p => {
           const sizes = p.sizes || ['S', 'M', 'L', 'XL', 'XXL', 'One Size'];
           return sizes.includes(selectedSize);
       });
    }

    if (selectedSubcategory) {
        result = result.filter(p => p.subcategory === selectedSubcategory);
    }

    if (selectedCollection) {
        result = result.filter(p => p.collection === selectedCollection);
    }

    if (selectedColor) {
        result = result.filter(p => p.color === selectedColor);
    }

    result = result.filter(p => p.price <= maxPrice);

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
  }, [initialProducts, selectedSize, selectedSubcategory, selectedCollection, selectedColor, maxPrice, sortOption]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filters */}
      <div className="lg:w-1/4">
        <div className="sticky top-24">
          <h2 className="text-xl font-bold uppercase tracking-tight mb-6">Filters</h2>

          {availableSubcategories.length > 0 && (
            <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
              <h3 className="font-bold mb-3 uppercase text-sm">Subcategory</h3>
              <div className="flex flex-col gap-2">
                {availableSubcategories.map(sub => (
                  <label key={sub} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedSubcategory === sub}
                      onChange={() => setSelectedSubcategory(selectedSubcategory === sub ? null : (sub as string))}
                      className="form-checkbox text-black dark:text-white"
                    />
                    <span className="text-sm">{sub}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {availableCollections.length > 0 && (
            <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
              <h3 className="font-bold mb-3 uppercase text-sm">Collection</h3>
              <div className="flex flex-col gap-2">
                {availableCollections.map(col => (
                  <label key={col} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCollection === col}
                      onChange={() => setSelectedCollection(selectedCollection === col ? null : (col as string))}
                      className="form-checkbox text-black dark:text-white"
                    />
                    <span className="text-sm">{col}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
            <h3 className="font-bold mb-3 uppercase text-sm">Size</h3>
            <div className="flex flex-wrap gap-2">
              {['S', 'M', 'L', 'XL', 'XXL', 'One Size'].map(size => (
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

          {availableColors.length > 0 && (
            <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
              <h3 className="font-bold mb-3 uppercase text-sm">Color</h3>
              <div className="flex flex-wrap gap-2">
                {availableColors.map(color => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(selectedColor === color ? null : (color as string))}
                    className={`border px-3 py-1 flex items-center justify-center text-xs cursor-pointer transition ${selectedColor === color ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black' : 'border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white'}`}
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
            <h3 className="font-bold mb-3 uppercase text-sm">Price: Up to ${maxPrice}</h3>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full accent-black dark:accent-white"
            />
          </div>

          <button
            onClick={() => { setSelectedSize(null); setSelectedSubcategory(null); setSelectedCollection(null); setSelectedColor(null); setMaxPrice(100); setSortOption('Newest'); }}
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

                  <div className="absolute top-2 right-2 z-10">
                    <WishlistButton product={product} />
                  </div>

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
