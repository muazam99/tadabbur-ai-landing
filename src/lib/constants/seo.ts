import { SITE_CONFIG } from './site';

/**
 * SEO default configuration
 * Centralized SEO metadata and defaults
 */
export const SEO_DEFAULTS = {
  title: {
    template: '%s | Tadabbur',
    default: 'Tadabbur - Quran Journaling App',
  },
  description: 'Discover deeper meanings in the Quran through AI-powered insights, personalized learning, and intelligent verse analysis.',
  keywords: [
    'Quran app',
    'Quran study',
    'AI Quran',
    'Islamic education',
    'Quran contemplation',
    'Quran Journaling',
    'Tadabbur',
    'Quran learning',
    'Islamic apps',
    'Quran chat',
    'Quran notes',
    'Quran quiz',
    'Quran flashcards',
  ],
  og: {
    type: 'website' as const,
    locale: 'en_US' as const,
    siteName: 'Tadabbur',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tadabbur - Quran Journaling App',
      },
    ] as const,
  },
  twitter: {
    card: 'summary_large_image' as const,
    creator: '@tadabbur_ai',
  },
};

/**
 * SEO metadata for surah pages
 */
export const SURAH_SEO_TEMPLATES = {
  title: (surahName: string, surahNumber: number) =>
    `${surahName} - Surah ${surahNumber} | Tadabbur`,
  description: (surahName: string, type: string, verses: number) =>
    `Explore ${surahName}, ${type} surah with ${verses} verses. Learn deeper meanings through AI-powered contemplation with Tadabbur.`,
} as const;
