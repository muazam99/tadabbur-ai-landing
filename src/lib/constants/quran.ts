/**
 * Quran-related constants
 */
export const QURAN_INFO = {
  totalSurahs: 114,
  totalPages: 604,
  totalVerses: 6236,
} as const;

export const SURAH_CATEGORIES = [
  'Makki',
  'Madani',
] as const;

export const TOPIC_CATEGORIES = [
  { id: 'prophets', name: 'Stories of Prophets', slug: 'stories-of-prophets' },
  { id: 'concepts', name: 'Core Concepts', slug: 'core-concepts' },
  { id: 'daily-life', name: 'Daily Life Guidance', slug: 'daily-life-guidance' },
  { id: 'prayer', name: 'Prayer & Worship', slug: 'prayer-worship' },
  { id: 'character', name: 'Moral Character', slug: 'moral-character' },
  { id: 'hereafter', name: 'Hereafter', slug: 'hereafter' },
] as const;

/**
 * Feature categories from the app
 */
export const EXPLORE_CATEGORIES = [
  { id: 'prophets', name: 'Stories of Prophets', emoji: '👤', description: 'Learn about the lives and lessons of the prophets', slug: 'stories-of-prophets' },
  { id: 'concepts', name: 'Core Concepts', emoji: '💡', description: 'Understand fundamental Islamic concepts', slug: 'core-concepts' },
  { id: 'daily-life', name: 'Daily Life Guidance', emoji: '🌟', description: 'Practical wisdom for everyday living', slug: 'daily-life-guidance' },
  { id: 'prayer', name: 'Prayer & Worship', emoji: '🕌', description: 'Deepen your connection with Allah', slug: 'prayer-worship' },
  { id: 'character', name: 'Moral Character', emoji: '🤲', description: 'Build virtuous character traits', slug: 'moral-character' },
  { id: 'hereafter', name: 'Hereafter', emoji: '🌙', description: 'Learn about the life after this world', slug: 'hereafter' },
] as const;
