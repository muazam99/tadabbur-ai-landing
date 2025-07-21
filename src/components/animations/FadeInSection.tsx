'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeInSection({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: FadeInSectionProps) {
  const directionVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction]
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}