import type { JsonLdProps } from '@/lib/types/seo';

/**
 * Base JSON-LD component for structured data
 * Renders a script tag with type="application/ld+json"
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization schema for structured data
 */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tadabbur',
    url: 'https://tadabbur.ai',
    logo: 'https://tadabbur.ai/app-icon.png',
    description: 'AI-powered Quran contemplation app for deeper understanding',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@hashtech.app',
      contactType: 'customer service',
    },
    sameAs: [
      'https://twitter.com/tadabbur_ai',
      'https://instagram.com/tadabbur_ai',
    ],
  };
  return <JsonLd data={data} />;
}

/**
 * Software Application schema for mobile app
 */
export function SoftwareAppJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Tadabbur',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'EducationalApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'AI-powered Quran contemplation app with chat, study tools, and personalized learning',
  };
  return <JsonLd data={data} />;
}

/**
 * FAQPage schema for FAQ sections
 * Enables rich snippets in Google search results
 */
export function FAQJsonLd({
  faqs,
}: {
  faqs: ReadonlyArray<{ question: string; answer: string }>;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return <JsonLd data={data} />;
}

/**
 * Breadcrumb schema for navigation
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; href: string }>;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  };
  return <JsonLd data={data} />;
}

/**
 * Article schema for surah/topic pages
 */
export function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Tadabbur',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tadabbur',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tadabbur.ai/app-icon.png',
      },
    },
  };
  return <JsonLd data={data} />;
}
