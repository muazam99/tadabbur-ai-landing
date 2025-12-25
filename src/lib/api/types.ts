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
 * Category/Topic data structure from the API
 */
export interface CategoryAPIData {
  id: number;
  name: string;
  image_url: string;
  slug: string;
}

/**
 * API response wrapper for surahs endpoint
 */
export interface SurahsAPIResponse {
  success: boolean;
  data: SurahAPIData[];
}

/**
 * Verse translation data structure from the API
 */
export interface VerseTranslation {
  text: string;
  language: string;
  translator: string;
}

/**
 * Verse data structure from the API
 */
export interface Verse {
  verse_key: string;
  text_arabic: string;
  surah_number: number;
  ayah_number: number;
  translation: VerseTranslation;
}

/**
 * API response wrapper for verses endpoint
 */
export interface VersesResponse {
  success: boolean;
  data: Verse[];
  verse_key: string;
  language: string;
}
