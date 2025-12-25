import { ImageProps } from 'next/image';

/**
 * Array of screenshot image paths
 */
export const SCREENSHOTS = [
  '/screenshot-1.png',
  '/screenshot-2.png',
  '/screenshot-3.png',
  '/screenshot-4.png',
  '/screenshot-5.png',
] as const;

/**
 * Get optimized image props for Next.js Image component
 * @param src - Image source path
 * @param priority - Whether this is a priority image (above the fold)
 * @returns Partial ImageProps with optimization settings
 */
export function getOptimizedImageProps(src: string, priority = false): Partial<ImageProps> {
  return {
    src,
    priority,
    placeholder: 'blur',
    blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  };
}

/**
 * Screenshot dimensions for consistent sizing
 */
export const SCREENSHOT_DIMENSIONS = {
  width: 208,
  height: 426,
} as const;
