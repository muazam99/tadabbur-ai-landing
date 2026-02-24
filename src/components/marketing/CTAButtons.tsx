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
    window.open(APP_STORE_CONFIG.android.url, '_blank');
  };

  const handleApkDownload = () => {
    trackEvent('apk_download_click');
    // Trigger direct download
    const link = document.createElement('a');
    link.href = APP_STORE_CONFIG.apk.url;
    link.download = 'tadabbur.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      {APP_STORE_CONFIG.apk.available && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={handleApkDownload}
          className="inline-flex items-center justify-center px-5 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="flex flex-col items-start">
            <span className="text-sm">Download APK</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{APP_STORE_CONFIG.apk.size}</span>
          </span>
        </motion.button>
      )}
    </div>
  );
}
