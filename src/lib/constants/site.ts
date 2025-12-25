/**
 * Site configuration constants
 * Centralized location for all site-related configuration
 */
export const SITE_CONFIG = {
  name: 'Tadabbur',
  fullName: 'Tadabbur AI',
  domain: 'tadabbur.ai',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tadabbur.ai',
  description: 'AI-powered Quran contemplation app for deeper understanding',
  tagline: 'Enhance your Quran study with AI-powered insights',

  // Contact
  email: 'support@hashtech.app',
  company: 'Hashtech',

  // Socials
  social: {
    twitter: '@tadabbur_ai',
    instagram: '@tadabbur_ai',
  },

  // App Store
  appStore: {
    ios: 'https://apps.apple.com/us/app/tadabbur-ai-quran-chat-notes/id6751010550',
    android: null, // Coming soon
  },
} as const;
