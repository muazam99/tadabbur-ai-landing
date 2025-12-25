'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAptabase } from '@aptabase/react';
import toast from 'react-hot-toast';
import { APP_STORE_CONFIG } from '@/lib/constants/app';

/**
 * App store CTA buttons with analytics tracking
 */
export default function CTAButtons() {
  const { trackEvent } = useAptabase();

  const handleAppStoreClick = () => {
    trackEvent('app_store_click');
    window.open(APP_STORE_CONFIG.ios.url, '_blank');
  };

  const handleGooglePlayClick = () => {
    trackEvent('google_play_click');
    if (!APP_STORE_CONFIG.android.available) {
      toast(APP_STORE_CONFIG.android.comingSoonText, {
        icon: '📱',
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={handleAppStoreClick}
        className="cursor-pointer"
      >
        <Image
          src="/app_store.png"
          alt="Download on the App Store"
          width={200}
          height={60}
          className="bg-gray-200 rounded-lg"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={handleGooglePlayClick}
        className="cursor-pointer"
      >
        <Image
          src="/google_play.png"
          alt="Get it on Google Play"
          width={200}
          height={60}
          className="bg-gray-200 rounded-lg"
        />
      </motion.div>
    </div>
  );
}
