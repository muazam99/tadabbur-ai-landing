import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { TOPIC_CATEGORIES, EXPLORE_CATEGORIES } from '@/lib/constants/quran';
import { SITE_CONFIG } from '@/lib/constants/site';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import CTAButtons from '@/components/marketing/CTAButtons';
import { getAllSurahsStatic } from '@/lib/data/surah-list';

interface TopicPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static params for all topic pages
 */
export async function generateStaticParams() {
  return TOPIC_CATEGORIES.map((topic) => ({
    slug: topic.slug,
  }));
}

/**
 * Generate dynamic metadata for each topic page
 */
export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = TOPIC_CATEGORIES.find((t) => t.slug === slug);

  if (!topic) {
    return {
      title: 'Topic Not Found',
    };
  }

  const title = `${topic.name} - Quranic Learning | Tadabbur AI`;
  const description = `Explore ${topic.name} in the Quran through AI-powered insights. Deepen your understanding with personalized explanations and contemplation tools.`;

  return {
    title,
    description,
    keywords: [
      topic.name,
      'Quran',
      'Tadabbur',
      'Quran learning',
      'Islamic education',
      'Quran study',
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/topics/${topic.slug}`,
      type: 'article',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/topics/${topic.slug}`,
    },
  };
}

/**
 * Dynamic topic page component
 */
export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = TOPIC_CATEGORIES.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  const topicDetails = EXPLORE_CATEGORIES.find((c) => c.id === topic.id);
  const surahs = getAllSurahsStatic();
  const breadcrumbs = [
    { name: 'Home', href: SITE_CONFIG.url },
    { name: 'Topics', href: `${SITE_CONFIG.url}/` },
    { name: topic.name, href: `${SITE_CONFIG.url}/topics/${topic.slug}` },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ArticleJsonLd
        title={topic.name}
        description={`Explore ${topic.name} in the Quran through AI-powered insights. ${topicDetails?.description || ''}`}
      />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/app-icon.png"
                alt="Tadabbur"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-semibold">Tadabbur</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero */}
          <div className="text-center mb-8">
            {topicDetails?.emoji && (
              <div className="text-6xl mb-4">{topicDetails.emoji}</div>
            )}
            <h1 className="text-4xl font-bold mb-4">{topic.name}</h1>
            <p className="text-xl text-gray-600">
              {topicDetails?.description || `Explore ${topic.name} in the Quran`}
            </p>
          </div>

          {/* About Card */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">About This Topic</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {topicDetails?.description || `Discover the wisdom and guidance related to ${topic.name} in the Quran.`}
            </p>
            <p className="text-gray-700 leading-relaxed">
              With Tadabbur AI, you can explore this topic through intelligent analysis, receive personalized explanations,
              and connect with related verses across different surahs.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Learn More About {topic.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Download Tadabbur AI to explore this topic with AI-powered explanations
            </p>
            <CTAButtons />
          </div>

          {/* All Topics */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore All Topics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {EXPLORE_CATEGORIES.map((t) => (
                <Link
                  key={t.id}
                  href={`/topics/${t.slug}`}
                  className={`bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors ${t.id === topic.id ? 'ring-2 ring-green-500' : ''}`}
                >
                  <div className="text-3xl mb-2">{t.emoji}</div>
                  <div className="font-semibold">{t.name}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Surahs */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Featured Surahs to Explore</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {surahs.slice(0, 8).map((surah) => (
                <Link
                  key={surah.number}
                  href={`/surah/${surah.slug}`}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="font-semibold">{surah.name}</div>
                  <div className="text-sm text-gray-600">Surah {surah.number}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-200 py-8 px-6 mt-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/app-icon.png"
                alt="Tadabbur"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="text-left">
                <span className="text-lg font-semibold text-black">Tadabbur</span>
                <p className="text-sm text-gray-600">© 2025 All rights reserved.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
