'use client';

import { useState, useRef } from 'react';

export default function CustomDesignPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Design Your Own T-Shirt</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Upload your artwork, pick your size and color, and we'll print it for you.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">

        {/* T-Shirt Preview Area */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div
            className="relative w-full max-w-md aspect-[3/4] rounded-lg shadow-xl overflow-hidden border dark:border-gray-800 transition-colors duration-300 flex justify-center items-center"
            style={{ backgroundColor: selectedColor }}
          >
            {/* Mock T-Shirt Silhouette Outline */}
            <svg viewBox="0 0 200 250" className="absolute inset-0 w-full h-full opacity-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen">
               <path d="M50 20 C60 50, 140 50, 150 20 L190 60 L170 100 L160 90 L160 240 L40 240 L40 90 L30 100 L10 60 Z" fill="currentColor"/>
            </svg>

            {/* Uploaded Design Placement */}
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Your custom design"
                className="absolute z-10 w-1/2 h-auto max-h-1/2 object-contain shadow-sm"
                style={{ top: '30%' }}
              />
            ) : (
              <div className="absolute z-10 text-center text-gray-500 opacity-50" style={{ top: '40%' }}>
                <p className="text-sm font-semibold mb-1">Your Design</p>
                <p className="text-xs">Appears Here</p>
              </div>
            )}
          </div>
        </div>

        {/* Configuration Panel */}
        <div className="lg:w-1/2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border dark:border-gray-800">

          {/* Upload Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">1. Upload Design</h3>
            <div
              className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <p className="text-gray-600 dark:text-gray-300">
                {uploadedImage ? "Click to change design" : "Click to upload an image (PNG, JPG)"}
              </p>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">2. Select Color</h3>
            <div className="flex space-x-4">
              {[
                { name: 'White', hex: '#ffffff' },
                { name: 'Black', hex: '#111111' },
                { name: 'Navy', hex: '#1e3a8a' },
                { name: 'Red', hex: '#b91c1c' },
                { name: 'Green', hex: '#15803d' },
              ].map((color) => (
                <button
                  key={color.hex}
                  onClick={() => setSelectedColor(color.hex)}
                  className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-transform hover:scale-110 ${selectedColor === color.hex ? 'border-blue-500 shadow-md scale-110' : 'border-gray-300 dark:border-gray-600'}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">3. Select Size</h3>
            <div className="flex space-x-3">
              {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 rounded-md font-bold focus:outline-none transition-colors ${
                    selectedSize === size
                      ? 'bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white'
                      : 'bg-white text-gray-900 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Area */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Custom T-Shirt Price</p>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white">$29.99</p>
            </div>
            <button
              className={`px-8 py-4 rounded-md font-bold text-lg transition-colors ${
                uploadedImage
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
              disabled={!uploadedImage}
            >
              Add to Cart
            </button>
          </div>
          {!uploadedImage && (
            <p className="text-sm text-red-500 mt-2 text-right">Please upload a design first.</p>
          )}

        </div>
      </div>
    </div>
  );
}
