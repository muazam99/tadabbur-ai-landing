/**
 * FAQ data for the landing page
 */
export const FAQ_DATA = [
  {
    question: 'What makes Tadabbur different from other Quran apps?',
    answer: 'Tadabbur uses advanced technology to provide personalized insights, thematic connections, and deeper understanding of Quranic verses based on your learning journey and interests.',
  },
  {
    question: 'Is the app available in multiple languages?',
    answer: 'Yes, Tadabbur supports multiple languages including Arabic, English, and other major languages to make Quranic study accessible to Muslims worldwide.',
  },
  {
    question: 'How does the AI analysis work?',
    answer: 'Our AI analyzes Quranic text to identify themes, provide contextual explanations, and suggest related verses, helping you discover deeper meanings and connections in your studies.',
  },
  {
    question: 'Is my study data kept private?',
    answer: 'Absolutely. We prioritize your privacy and ensure that your personal study data is kept secure and private, following the highest standards of data protection.',
  },
] as const;

/**
 * CTA (Call to Action) sections
 */
export const CTA_SECTIONS = {
  hero: {
    title: 'Enhance your Quran study with AI-powered insights',
    subtitle: 'Discover deeper meanings and connections in the Quran through intelligent analysis and personalized learning experiences',
  },
  surah: (surahName: string) => ({
    title: `Start Your Journey with ${surahName}`,
    subtitle: `Download Tadabbur AI to explore ${surahName} with personalized insights and study tools`,
  }),
  topic: (topicName: string) => ({
    title: `Learn More About ${topicName}`,
    subtitle: 'Download the app to explore this topic with AI-powered explanations',
  }),
} as const;
