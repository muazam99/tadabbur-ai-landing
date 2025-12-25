import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageTransition from "@/components/animations/PageTransition";
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';
import { SITE_CONFIG } from '@/lib/constants/site';
import { SEO_DEFAULTS } from '@/lib/constants/seo';
import './globals.css';
import { AptabaseProvider } from '@aptabase/react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: SEO_DEFAULTS.title.template,
    default: SEO_DEFAULTS.title.default,
  },
  description: SEO_DEFAULTS.description,
  keywords: SEO_DEFAULTS.keywords,
  authors: [{ name: SITE_CONFIG.company }],
  creator: SITE_CONFIG.company,
  publisher: SITE_CONFIG.company,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: SEO_DEFAULTS.og.type,
    locale: SEO_DEFAULTS.og.locale,
    url: SITE_CONFIG.url,
    siteName: SEO_DEFAULTS.og.siteName,
    title: SEO_DEFAULTS.title.default,
    description: SEO_DEFAULTS.description,
    images: [...SEO_DEFAULTS.og.images],
  },
  twitter: {
    card: SEO_DEFAULTS.twitter.card,
    title: SEO_DEFAULTS.title.default,
    description: SEO_DEFAULTS.description,
    creator: SEO_DEFAULTS.twitter.creator,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/app-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/app-icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/app-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const aptabaseAppKey = process.env.NEXT_PUBLIC_APTABASE_APP_KEY || process.env.APTABASE_APP_KEY;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTransition>
          <AptabaseProvider appKey={aptabaseAppKey!}>
            {children}
          </AptabaseProvider>
        </PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
