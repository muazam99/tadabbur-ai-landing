'use client';

import FadeInSection from '@/components/animations/FadeInSection';
import { motion } from 'framer-motion';
import CTAButtons from './CTAButtons';

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

        <FadeInSection delay={0.8}>
          <CTAButtons />
        </FadeInSection>
      </div>
    </section>
  );
}
