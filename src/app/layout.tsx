import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageTransition from "@/components/animations/PageTransition";
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';
import { AptabaseProvider } from '@aptabase/react';
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tadabbur",
  description: "Quranic reflection and contemplation platform",
  icons: {
    icon: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTransition>
          <AptabaseProvider appKey={process.env.APTABASE_APP_KEY!}>
            {children}
          </AptabaseProvider>
        </PageTransition>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
