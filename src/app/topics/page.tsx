import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import Header from '@/components/marketing/Header';
import { EXPLORE_CATEGORIES } from '@/lib/constants/quran';
import Footer from '@/components/marketing/Footer';
import CTAButtons from '@/components/marketing/CTAButtons';

/**
 * Metadata for the topics listing page
 */
export const metadata: Metadata = {
  title: 'Quran Topics - Explore Thematic Learning | Tadabbur AI',
  description: 'Explore Quranic themes including Stories of Prophets, Core Concepts, Daily Life Guidance, Prayer & Worship, Moral Character, and Hereafter with AI-powered insights.',
  keywords: ['Quran', 'Topics', 'Quran themes', 'Islamic topics', 'Tadabbur', 'Quran study', 'prophets', 'prayer', 'worship'],
  openGraph: {
    title: 'Quran Topics | Tadabbur AI',
    description: 'Explore thematic learning in the Quran with AI-powered insights',
    url: `${SITE_CONFIG.url}/topics`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/topics`,
  },
};

/**
 * Topics listing page component
 */
export default function TopicsPage() {
  const breadcrumbs = [
    { name: 'Home', href: SITE_CONFIG.url },
    { name: 'Topics', href: `${SITE_CONFIG.url}/topics` },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbJsonLd items={breadcrumbs} />

      <div className="min-h-screen bg-white">
        <Header />

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Explore Topics
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive deep into thematic learning across the Quran. Each topic connects verses from
              different surahs to give you a comprehensive understanding.
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {EXPLORE_CATEGORIES.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.slug}`}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
              >
                <div className="text-5xl mb-4">{topic.emoji}</div>
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {topic.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Info Card */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Discover Deeper Connections
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Tadabbur AI helps you discover thematic connections across the Quran, providing
              personalized explanations that bring these topics to life.
            </p>
            <CTAButtons />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
