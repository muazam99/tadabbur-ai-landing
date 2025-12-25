import { fetchFromAPI } from './client';
import type { SurahAPIData } from './types';
import type { SurahSummary } from '@/lib/types/quran';

/**
 * Fetch all surahs from the backend API
 * @returns Array of surah summaries
 */
export async function fetchSurahs(): Promise<SurahSummary[]> {
  const data = await fetchFromAPI<SurahAPIData[]>('public/surahs', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  return data.map(toSurahSummary);
}

/**
 * Transform API data to SurahSummary format
 * @param apiSurah - Raw surah data from API
 * @returns Transformed SurahSummary object
 */
function toSurahSummary(apiSurah: SurahAPIData): SurahSummary {
  return {
    number: apiSurah.surah_number,
    name: apiSurah.surah_name,
    verses: apiSurah.total_verses,
    type: apiSurah.revelation_place,
    description: apiSurah.surah_description,
  };
}

/**
 * Fetch a single surah by number from the backend API
 * @param number - The surah number
 * @returns Surah summary or undefined if not found
 */
export async function fetchSurahByNumber(number: number): Promise<SurahSummary | undefined> {
  const surahs = await fetchSurahs();
  return surahs.find(s => s.number === number);
}
