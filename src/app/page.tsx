'use client';

import Header from '@/components/marketing/Header';
import Hero from '@/components/marketing/Hero';
import AppShowcase from '@/components/marketing/AppShowcase';
import FAQSection from '@/components/marketing/FAQSection';
import Footer from '@/components/marketing/Footer';
import { OrganizationJsonLd, SoftwareAppJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { FAQ_DATA } from '@/lib/constants/content';

/**
 * Main landing page
 * Refactored to use reusable components
 */
export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <OrganizationJsonLd />
      <SoftwareAppJsonLd />
      <FAQJsonLd faqs={FAQ_DATA} />

      <div className="min-h-screen bg-white">
        <Header />

        <main className="flex flex-col items-center text-center px-6">
          <Hero />
          <AppShowcase />
          <FAQSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
