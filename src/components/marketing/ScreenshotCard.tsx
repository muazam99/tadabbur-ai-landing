'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { staggerChildVariants } from '@/components/animations/StaggerContainer';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { SCREENSHOT_DIMENSIONS } from '@/lib/utils/image';

interface ScreenshotCardProps {
  src: string;
  alt: string;
  index: number;
}

/**
 * Screenshot card with lazy loading
 * Only loads the image when it enters the viewport
 */
export default function ScreenshotCard({ src, alt, index }: ScreenshotCardProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: ref as React.RefObject<Element>,
    onIntersect: () => setIsInView(true),
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={staggerChildVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative"
    >
      <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {isInView ? (
            <Image
              src={src}
              alt={alt}
              width={SCREENSHOT_DIMENSIONS.width}
              height={SCREENSHOT_DIMENSIONS.height}
              className="w-full h-full object-cover bg-gray-100"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
