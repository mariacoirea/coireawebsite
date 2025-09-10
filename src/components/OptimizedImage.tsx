
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP and fallback URLs for better compression
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const isExternalImage = src.startsWith('http');
  
  // Generate responsive srcSet for better sizing
  const generateSrcSet = (baseSrc: string, format: string) => {
    if (isExternalImage) return '';
    const baseUrl = baseSrc.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    return `${baseUrl}.${format} 1x, ${baseUrl}@2x.${format} 2x`;
  };

  return (
    <picture>
      {/* AVIF source for best compression */}
      {isInView && !isExternalImage && (
        <source 
          srcSet={src.replace(/\.(jpg|jpeg|png)$/i, '.avif')} 
          type="image/avif" 
          sizes={sizes} 
        />
      )}
      
      {/* WebP source for modern browsers with better compression */}
      {isInView && (
        <source 
          srcSet={isExternalImage ? src : webpSrc} 
          type="image/webp" 
          sizes={sizes} 
        />
      )}
      
      <img
        ref={imgRef}
        src={isInView ? src : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnoiIGZpbGw9IiNmNWY1ZjUiLz48L3N2Zz4='}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        style={{ 
          aspectRatio: width && height ? `${width}/${height}` : undefined,
          objectFit: 'contain'
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </picture>
  );
};

export default OptimizedImage;
