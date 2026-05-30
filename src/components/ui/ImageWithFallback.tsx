'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps extends Omit<ImageProps, 'sapos;src'> {
  src: string;
  fallbackSrc?: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc = '/images/logo/logo.png',
  alt,
  className,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-gray-200 dark:bg-gray-800 ${className || ''}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse">
          <span className="text-gray-400">Loading...</span>
        </div>
      )}
      <Image
        {...rest}
        src={imgSrc}
        alt={alt || 'Image'}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc);
          setIsLoading(false);
        }}
        fill
      />
    </div>
  );
}
