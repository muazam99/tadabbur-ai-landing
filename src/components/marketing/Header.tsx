'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '@/components/animations/FadeInSection';
import { BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline';

/**
 * Header component with logo and navigation
 */
export default function Header() {
  return (
    <FadeInSection direction="down" delay={0.2}>
      <header className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/app-icon.png"
            alt="Tadabbur"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold text-black">Tadabbur</span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link
            href="/surahs"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-emerald-500/50 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5"
          >
            <BookOpenIcon className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
            <span>Surahs</span>
          </Link>
          <Link
            href="/topics"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-violet-500/50 hover:bg-violet-50 hover:text-violet-700 transition-all duration-300 hover:shadow-md hover:shadow-violet-500/10 hover:-translate-y-0.5"
          >
            <SparklesIcon className="w-4 h-4 text-gray-400 group-hover:text-violet-500 transition-colors" />
            <span>Topics</span>
          </Link>
        </nav>
      </header>
    </FadeInSection>
  );
}
