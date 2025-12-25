/**
 * Quran-related TypeScript types
 */

export interface SurahInfo {
  surah_number: number;
  surah_name: string;
  surah_name_transliteration: string;
  surah_name_translation: string;
  surah_name_arabic: string;
  revelation_place: string;
  number_of_ayah: number;
  short_text: string;
  text?: string;
}

export interface TopicCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface SurahSummary {
  number: number;
  name: string;
  verses: number;
  type: string;
}
