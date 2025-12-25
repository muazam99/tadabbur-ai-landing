'use client';

import { useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  target: RefObject<Element>;
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

/**
 * Custom hook for observing element intersection with viewport
 * Useful for lazy loading images and triggering animations
 */
export function useIntersectionObserver({
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
  enabled = true,
}: UseIntersectionObserverProps) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    const element = target.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target, onIntersect, threshold, rootMargin, enabled]);
}
