import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants/site';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import CTAButtons from '@/components/marketing/CTAButtons';
import { fetchSurahs, fetchSurahByNumber } from '@/lib/api/surahs';
import Header from '@/components/marketing/Header';
import Footer from '@/components/marketing/Footer';
import SurahDescriptionWithVerseDialog from '@/components/ui/SurahDescriptionWithVerseDialog';

interface SurahPageProps {
  params: Promise<{ number: string }>;
}

/**
 * Generate static params for all 114 surahs at build time
 */
export async function generateStaticParams() {
  const surahs = await fetchSurahs();
  return surahs.map((surah) => ({
    number: surah.number.toString(),
  }));
}

/**
 * Generate dynamic metadata for each surah page
 */
export async function generateMetadata({ params }: SurahPageProps): Promise<Metadata> {
  const { number } = await params;
  const surahNumber = parseInt(number);
  const surah = await fetchSurahByNumber(surahNumber);

  if (!surah) {
    return {
      title: 'Surah Not Found',
    };
  }

  const title = `${surah.name} - Surah ${surah.number} | Tadabbur AI`;
  const description = `Explore ${surah.name}, ${surah.type} surah with ${surah.verses} verses. Learn deeper meanings through AI-powered contemplation with Tadabbur.`;

  return {
    title,
    description,
    keywords: [
      surah.name,
      `Surah ${surah.number}`,
      'Quran',
      'Tadabbur',
      surah.type,
      'Quran study',
    ],
    openGraph: {
      title: `${surah.name} | Tadabbur AI`,
      description,
      url: `${SITE_CONFIG.url}/surahs/${surah.number}`,
      type: 'article',
    },
    twitter: {
      title: surah.name,
      description,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/surahs/${surah.number}`,
    },
  };
}

/**
 * Dynamic surah page component
 */
export default async function SurahPage({ params }: SurahPageProps) {
  const { number } = await params;
  const surahNumber = parseInt(number);
  const surah = await fetchSurahByNumber(surahNumber);

  if (!surah) {
    notFound();
  }

  // Get all surahs for related surahs
  const allSurahs = await fetchSurahs();
  const index = allSurahs.findIndex(s => s.number === surahNumber);
  const relatedSurahs = allSurahs.slice(Math.max(0, index - 2), index).concat(
    allSurahs.slice(index + 1, index + 8)
  ).slice(0, 8).filter(s => s.number !== surahNumber);

  const breadcrumbs = [
    { name: 'Home', href: SITE_CONFIG.url },
    { name: 'Surahs', href: `${SITE_CONFIG.url}/surahs` },
    { name: surah.name, href: `${SITE_CONFIG.url}/surahs/${surah.number}` },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ArticleJsonLd
        title={surah.name}
        description={`${surah.name} is the ${surah.number}th chapter of the Quran with ${surah.verses} verses.`}
      />

      <div className="min-h-screen bg-white">
        <Header />

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-black">
              {surah.name}
            </h1>
            <p className="text-lg text-gray-500">
              Surah {surah.number} • {surah.type} • {surah.verses} Verses
            </p>
          </div>

          {/* About Card */}
          <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 shadow-sm border border-emerald-100">
            <h2 className="text-2xl font-semibold mb-6 text-emerald-900">About {surah.name}</h2>
            <SurahDescriptionWithVerseDialog descriptionHtml={surah.description} />
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Start Your Journey with {surah.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Download Tadabbur AI to explore this surah with personalized insights
            </p>
            <CTAButtons />
          </div>

          {/* Related Surahs */}
          {relatedSurahs.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black">Explore More Surahs</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedSurahs.map((s) => (
                  <Link
                    key={s.number}
                    href={`/surahs/${s.number}`}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-semibold text-black">{s.name}</div>
                    <div className="text-sm text-gray-600">Surah {s.number}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
