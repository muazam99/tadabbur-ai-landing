import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { TOPIC_CATEGORIES, EXPLORE_CATEGORIES } from '@/lib/constants/quran';
import { SITE_CONFIG } from '@/lib/constants/site';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import CTAButtons from '@/components/marketing/CTAButtons';
import { fetchSurahs } from '@/lib/api/surahs';
import Header from '@/components/marketing/Header';
import Footer from '@/components/marketing/Footer';

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
  const surahs = await fetchSurahs();
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
        <Header />

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero */}
          <div className="text-center mb-8">
            {topicDetails?.emoji && (
              <div className="text-6xl mb-4">{topicDetails.emoji}</div>
            )}
            <h1 className="text-4xl font-bold mb-4 text-black">{topic.name}</h1>
            <p className="text-xl text-gray-600">
              {topicDetails?.description || `Explore ${topic.name} in the Quran`}
            </p>
          </div>

          {/* About Card */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">About This Topic</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {topicDetails?.description || `Discover the wisdom and guidance related to ${topic.name} in the Quran.`}
            </p>
            <p className="text-gray-700 leading-relaxed">
              With Tadabbur, you can explore this topic through intelligent analysis, receive personalized explanations,
              and connect with related verses across different surahs.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Learn More About {topic.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Download Tadabbur: Quran Journaling to explore this topic with AI-powered explanations
            </p>
            <CTAButtons />
          </div>

          {/* All Topics */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Explore All Topics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {EXPLORE_CATEGORIES.map((t) => (
                <Link
                  key={t.id}
                  href={`/topics/${t.slug}`}
                  className={`bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors ${t.id === topic.id ? 'ring-2 ring-green-500' : ''}`}
                >
                  <div className="text-3xl mb-2">{t.emoji}</div>
                  <div className="font-semibold text-gray-600">{t.name}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Surahs */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-black">Featured Surahs to Explore</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {surahs.slice(0, 8).map((surah) => (
                <Link
                  key={surah.number}
                  href={`/surahs/${surah.number}`}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="font-semibold text-black">{surah.name}</div>
                  <div className="text-sm text-gray-600">Surah {surah.number}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
