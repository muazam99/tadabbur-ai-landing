'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '@/components/animations/FadeInSection';

/**
 * Footer component with links
 */
export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 px-6">
      <FadeInSection delay={0.1}>
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
              <p className="text-sm text-gray-600">© 2026 Hash Technologies 202503182515 (003749361-M)</p>
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
      </FadeInSection>
    </footer>
  );
}
