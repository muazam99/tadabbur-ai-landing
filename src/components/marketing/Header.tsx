'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '@/components/animations/FadeInSection';

/**
 * Header component with logo
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
      </header>
    </FadeInSection>
  );
}
