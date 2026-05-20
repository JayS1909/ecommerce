'use client';

import { useState, useRef } from 'react';

export default function CustomDesignPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Draggable image state
  const [imagePos, setImagePos] = useState({ x: 0, y: -50 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  // Drawing state
  const [mode, setMode] = useState<'drag' | 'draw'>('drag');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setImagePos({ x: 0, y: -50 }); // reset position on new upload
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (mode === 'drag') {
      if (!uploadedImage) return;
      setIsDragging(true);
      dragStartPos.current = { x: e.clientX - imagePos.x, y: e.clientY - imagePos.y };
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (mode === 'drag' && isDragging) {
      setImagePos({
        x: e.clientX - dragStartPos.current.x,
        y: e.clientY - dragStartPos.current.y
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (mode === 'drag' && isDragging) {
      setIsDragging(false);
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  // Canvas drawing handlers
  const getCanvasCoords = (e: React.PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const handleCanvasPointerDown = (e: React.PointerEvent) => {
    if (mode !== 'draw') return;
    setIsDrawing(true);
    const pos = getCanvasCoords(e);
    lastPos.current = pos;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleCanvasPointerMove = (e: React.PointerEvent) => {
    if (mode !== 'draw' || !isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const newPos = getCanvasCoords(e);

    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(newPos.x, newPos.y);
    ctx.strokeStyle = '#000000'; // Default pen color
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.stroke();

    lastPos.current = newPos;
  };

  const handleCanvasPointerUp = (e: React.PointerEvent) => {
    if (mode === 'draw' && isDrawing) {
      setIsDrawing(false);
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Design Your Own T-Shirt</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Upload your artwork, pick your size and color, and we&apos;ll print it for you.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">

        {/* T-Shirt Preview Area */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div
            className="relative w-full max-w-md aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300 flex justify-center items-center"
          >
            {/* Mock T-Shirt Silhouette Outline */}
            <svg viewBox="0 0 200 250" className="absolute inset-0 w-full h-full drop-shadow-md">
               <path d="M50 20 C60 50, 140 50, 150 20 L190 60 L170 100 L160 90 L160 240 L40 240 L40 90 L30 100 L10 60 Z" fill={selectedColor} style={{ transition: 'fill 0.3s ease' }} />
               {/* Inner shadow/shading for realism */}
               <path d="M50 20 C60 50, 140 50, 150 20 L190 60 L170 100 L160 90 L160 240 L40 240 L40 90 L30 100 L10 60 Z" fill="black" opacity="0.1" pointerEvents="none" className="mix-blend-multiply dark:mix-blend-screen" />
            </svg>

            {/* Drawing Canvas Overlay */}
            <canvas
              ref={canvasRef}
              width={200}
              height={250}
              onPointerDown={handleCanvasPointerDown}
              onPointerMove={handleCanvasPointerMove}
              onPointerUp={handleCanvasPointerUp}
              onPointerCancel={handleCanvasPointerUp}
              className={`absolute inset-0 w-full h-full z-20 ${mode === 'draw' ? 'cursor-crosshair' : 'pointer-events-none'}`}
              style={{ touchAction: 'none' }}
            />

            {/* Uploaded Design Placement */}
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Your custom design"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className={`absolute z-10 w-1/2 h-auto max-h-1/2 object-contain shadow-sm select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${mode === 'draw' ? 'pointer-events-none' : ''}`}
                style={{
                  transform: `translate(${imagePos.x}px, ${imagePos.y}px)`,
                  touchAction: 'none'
                }}
                draggable={false}
              />
            ) : (
              <div className="absolute z-10 text-center text-gray-500 opacity-50 pointer-events-none" style={{ top: '40%' }}>
                <p className="text-sm font-semibold mb-1">Your Design</p>
                <p className="text-xs">Appears Here</p>
              </div>
            )}
          </div>
        </div>

        {/* Configuration Panel */}
        <div className="lg:w-1/2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border dark:border-gray-800">

          {/* Modes Toggle */}
          <div className="mb-8 flex space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <button
              onClick={() => setMode('drag')}
              className={`px-4 py-2 font-semibold text-sm rounded-md transition-colors ${mode === 'drag' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              Upload & Drag Mode
            </button>
            <button
              onClick={() => setMode('draw')}
              className={`px-4 py-2 font-semibold text-sm rounded-md transition-colors ${mode === 'draw' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              Draw Mode
            </button>
          </div>

          {mode === 'draw' && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Draw Your Design</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Use the trackpad or mouse to draw directly on the t-shirt preview.</p>
              <button
                onClick={clearCanvas}
                className="border border-red-500 text-red-500 px-4 py-2 rounded-md font-semibold text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                Clear Drawing
              </button>
            </div>
          )}

          {/* Upload Section */}
          <div className={`mb-8 ${mode === 'draw' ? 'opacity-50 pointer-events-none' : ''}`}>
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
