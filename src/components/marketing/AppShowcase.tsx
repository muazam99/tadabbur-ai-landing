'use client';

import StaggerContainer from '@/components/animations/StaggerContainer';
import { SCREENSHOTS } from '@/lib/utils/image';
import ScreenshotCard from './ScreenshotCard';

/**
 * App showcase section with screenshot cards
 * Displays all 5 app screenshots in a responsive grid
 */
export default function AppShowcase() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <StaggerContainer
        staggerDelay={0.15}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center"
      >
        {SCREENSHOTS.map((screenshot, index) => (
          <ScreenshotCard
            key={screenshot}
            src={screenshot}
            alt={`App Screenshot ${index + 1}`}
            index={index}
          />
        ))}
      </StaggerContainer>
    </section>
  );
}
