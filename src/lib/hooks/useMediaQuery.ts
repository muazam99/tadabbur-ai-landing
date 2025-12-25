'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive media queries
 * Returns true if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

/**
 * Common breakpoint queries
 */
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
} as const;

/**
 * Hook for sm breakpoint (640px)
 */
export function useIsSm(): boolean {
  return useMediaQuery(breakpoints.sm);
}

/**
 * Hook for md breakpoint (768px)
 */
export function useIsMd(): boolean {
  return useMediaQuery(breakpoints.md);
}

/**
 * Hook for lg breakpoint (1024px)
 */
export function useIsLg(): boolean {
  return useMediaQuery(breakpoints.lg);
}
