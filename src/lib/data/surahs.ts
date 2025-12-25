/**
 * Surah data service
 * Imports and manages surah data from public/surah-info-en.json
 */

import type { SurahInfo, SurahSummary } from '@/lib/types/quran';

// Import the surah data from the public folder
// Note: In Next.js, we can't directly import JSON from public at build time in server components
// We'll need to fetch it or use a different approach
// For now, this is a placeholder that will be updated with the actual implementation

let surahCache: SurahInfo[] = [];

/**
 * Fetch surah data from the public folder
 * This should be called from server components or API routes
 */
export async function fetchSurahData(): Promise<SurahInfo[]> {
  if (surahCache) return surahCache;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/surah-info-en.json`, {
      next: { revalidate: 86400 }, // Cache for 1 day
    });

    if (!response.ok) {
      throw new Error('Failed to fetch surah data');
    }

    const data = await response.json();
    // The JSON has a "data" property containing the array
    surahCache = data.data || data || [];
    return surahCache;
  } catch (error) {
    console.error('Error fetching surah data:', error);
    return [];
  }
}

/**
 * Get all surahs as summaries (lighter weight)
 */
export async function getAllSurahs(): Promise<SurahSummary[]> {
  const surahs = await fetchSurahData();

  return surahs.map(surah => ({
    number: surah.surah_number,
    name: surah.surah_name,
    slug: `${surah.surah_number}-${surah.surah_name.toLowerCase().replace(/\s+/g, '-')}`,
    verses: surah.number_of_ayah,
    type: surah.revelation_place,
    description: surah.short_text || '',
  }));
}

/**
 * Get surah by number
 */
export async function getSurahByNumber(number: number): Promise<SurahInfo | undefined> {
  const surahs = await fetchSurahData();
  return surahs.find(s => s.surah_number === number);
}

/**
 * Get surah by slug
 */
export async function getSurahBySlug(slug: string): Promise<SurahInfo | undefined> {
  const surahs = await fetchSurahData();
  // Extract number from slug (format: number-name)
  const number = parseInt(slug.split('-')[0]);
  return surahs.find(s => s.surah_number === number);
}

/**
 * Get multiple surahs by numbers
 */
export async function getSurahsByNumbers(numbers: number[]): Promise<SurahInfo[]> {
  const surahs = await fetchSurahData();
  return surahs.filter(s => numbers.includes(s.surah_number));
}

/**
 * Get related surahs for a given surah
 */
export async function getRelatedSurahs(
  currentSurah: number,
  count = 4
): Promise<SurahInfo[]> {
  const surahs = await fetchSurahData();
  const index = surahs.findIndex(s => s.surah_number === currentSurah);

  if (index === -1) return surahs.slice(0, count);

  const before = surahs.slice(Math.max(0, index - 2), index);
  const after = surahs.slice(index + 1, index + 1 + (count - before.length));
  return [...before, ...after];
}

/**
 * Get surah slug for URL generation
 */
export function getSurahSlug(surah: SurahInfo): string {
  return `${surah.surah_number}-${surah.surah_name.toLowerCase().replace(/\s+/g, '-')}`;
}
