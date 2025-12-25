'use client';

import FadeInSection from '@/components/animations/FadeInSection';
import StaggerContainer, { staggerChildVariants } from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { FAQ_DATA } from '@/lib/constants/content';

/**
 * FAQ section with accordion-style cards
 */
export default function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <FadeInSection delay={0.2}>
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Frequently Asked Questions
        </h2>
      </FadeInSection>

      <StaggerContainer staggerDelay={0.1} className="space-y-6">
        {FAQ_DATA.map((faq, index) => (
          <motion.div
            key={index}
            variants={staggerChildVariants}
            className="bg-gray-50 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-black mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  );
}
