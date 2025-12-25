import { fetchFromAPI } from './client';
import type { Verse } from './types';

/**
 * Fetch verses by verse key from the backend API
 * @param verseKey - The verse key in format "surah:ayah" (e.g., "3:1") or "surah:start-end" (e.g., "3:1-32")
 * @returns Array of verses with Arabic text and translations
 */
export async function fetchVerses(verseKey: string): Promise<Verse[]> {
  return fetchFromAPI<Verse[]>(`public/verses?verse_key=${verseKey}`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
}
