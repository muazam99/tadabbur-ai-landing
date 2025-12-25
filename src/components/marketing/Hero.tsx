'use client';

import FadeInSection from '@/components/animations/FadeInSection';
import { motion } from 'framer-motion';
import CTAButtons from './CTAButtons';
import Link from 'next/link';
import { BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline';

/**
 * Hero section with app icon and CTA
 */
export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto pt-16 pb-12">
      <div className="flex flex-col items-center gap-8">
        <FadeInSection delay={0.4}>
          <div className="flex flex-col items-center gap-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              <img
                src="/app-icon.png"
                alt="Tadabbur"
                width={120}
                height={120}
                className="rounded-3xl"
              />
            </motion.div>
            <h1 className="text-xl font-semibold text-black">Tadabbur</h1>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.6}>
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-black mb-4">
              Enhance your Quran study with AI-powered insights
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover deeper meanings and connections in the Quran through intelligent analysis and personalized learning experiences
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={1}>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/surahs">
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative px-8 py-5 bg-white border border-gray-200 rounded-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-linear-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                <div className="relative flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl group-hover:bg-emerald-100 transition-colors duration-300">
                    <BookOpenIcon className="w-6 h-6 text-gray-500 group-hover:text-emerald-600 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Browse All Surahs</p>
                  </div>
                </div>
              </motion.div>
            </Link>
            <Link href="/topics">
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative px-8 py-5 bg-white border border-gray-200 rounded-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-linear-to-r from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                <div className="relative flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl group-hover:bg-violet-100 transition-colors duration-300">
                    <SparklesIcon className="w-6 h-6 text-gray-500 group-hover:text-violet-600 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Explore Topics</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.8}>
          <CTAButtons />
        </FadeInSection>

      </div>
    </section>
  );
}
