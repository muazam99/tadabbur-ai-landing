/**
 * App store and configuration constants
 */
export const APP_STORE_CONFIG = {
  ios: {
    url: 'https://apps.apple.com/us/app/tadabbur-ai-quran-chat-notes/id6751010550',
    name: 'Download on the App Store',
    available: true,
  },
  android: {
    url: null,
    name: 'Get it on Google Play',
    available: false,
    comingSoonText: 'Coming Soon! Stay tuned.',
  },
  apk: {
    // APK hosted on Google Drive to avoid large file in git history
    url: 'https://drive.google.com/uc?export=download&id=11S8D2c8CZl9cNA0X9crmGWpD9UJShw47',
    name: 'Download APK',
    size: '183 MB',
    available: true,
  },
} as const;

/**
 * App features for marketing
 */
export const APP_FEATURES = [
  {
    title: 'AI-Powered Chat',
    description: 'Ask questions about Quranic verses and receive detailed explanations with authentic sources',
    icon: '💬',
  },
  {
    title: 'Quran Explorer',
    description: 'Browse all 114 surahs and 604 pages with advanced search capabilities',
    icon: '📖',
  },
  {
    title: 'Study Library',
    description: 'Generate personalized notes, quizzes, and flashcards from your studies',
    icon: '📚',
  },
  {
    title: 'Categorized Topics',
    description: 'Explore Stories of Prophets, Core Concepts, Daily Life Guidance, and more',
    icon: '🎯',
  },
] as const;
