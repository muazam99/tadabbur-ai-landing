import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants/site';
import { TOPIC_CATEGORIES } from '@/lib/constants/quran';
import { getAllSurahsStatic } from '@/lib/data/surah-list';

/**
 * Dynamic sitemap for all pages
 * Includes static pages, all 114 surah pages, and topic pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic surah pages (114 pages)
  const surahs = getAllSurahsStatic();
  const surahPages: MetadataRoute.Sitemap = surahs.map(surah => ({
    url: `${baseUrl}/surah/${surah.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic topic pages
  const topicPages: MetadataRoute.Sitemap = TOPIC_CATEGORIES.map(topic => ({
    url: `${baseUrl}/topics/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...surahPages, ...topicPages];
}
