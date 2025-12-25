/**
 * API response types for backend endpoints
 */

/**
 * Surah data structure from the API
 */
export interface SurahAPIData {
  id: number;
  surah_name: string;
  surah_name_arabic: string;
  surah_name_translation: string;
  revelation_place: 'Mecca' | 'Madina';
  total_verses: number;
  surah_number: number;
  surah_description: string;
}

/**
 * API response wrapper for surahs endpoint
 */
export interface SurahsAPIResponse {
  success: boolean;
  data: SurahAPIData[];
}
