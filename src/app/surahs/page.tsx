import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import Header from '@/components/marketing/Header';
import { fetchSurahs } from '@/lib/api/surahs';
import Footer from '@/components/marketing/Footer';
import CTAButtons from '@/components/marketing/CTAButtons';

/**
 * Metadata for the surahs listing page
 */
export const metadata: Metadata = {
  title: 'All Surahs - Browse 114 Chapters of the Quran | Tadabbur',
  description: 'Explore all 114 surahs (chapters) of the Holy Quran. Browse by surah number, name, and verses count. Deepen your understanding with AI-powered contemplation.',
  keywords: ['Quran', 'Surahs', '114 Surahs', 'Quran chapters', 'Tadabbur', 'Quran study'],
  openGraph: {
    title: 'All Surahs | Tadabbur',
    description: 'Explore all 114 surahs of the Holy Quran with AI-powered insights',
    url: `${SITE_CONFIG.url}/surahs`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/surahs`,
  },
};

/**
 * Surahs listing page component
 */
export default async function SurahsPage() {
  const surahs = await fetchSurahs();
  const breadcrumbs = [
    { name: 'Home', href: SITE_CONFIG.url },
    { name: 'All Surahs', href: `${SITE_CONFIG.url}/surahs` },
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
              All Surahs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore all 114 chapters of the Holy Quran. Each surah offers unique wisdom and guidance
              for your spiritual journey.
            </p>
          </div>

          {/* Surahs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {surahs.map((surah) => (
              <Link
                key={surah.number}
                href={`/surahs/${surah.number}`}
                className="bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">
                    {surah.number}
                  </span>
                  <span className="text-xs text-gray-500">{surah.type}</span>
                </div>
                <h3 className="font-semibold text-black mb-1 group-hover:text-gray-700 transition-colors">
                  {surah.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {surah.verses} {surah.verses === 1 ? 'verse' : 'verses'}
                </p>
              </Link>
            ))}
          </div>

          {/* Info Card */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Deepen Your Understanding
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Tadabbur helps you explore deeper meanings, receive personalized explanations,
              and connect with the timeless wisdom of each surah through intelligent analysis.
            </p>
            <CTAButtons />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
