'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Verse } from '@/lib/api/types';

interface VerseDialogProps {
  isOpen: boolean;
  verseKey: string;
  verses: Verse[] | null;
  isLoading: boolean;
  error: string | null;
  onClose: () => void;
}

export default function VerseDialog({
  isOpen,
  verseKey,
  verses,
  isLoading,
  error,
  onClose,
}: VerseDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-emerald-900">
                  Verses {verseKey}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close dialog"
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto">
                {isLoading && (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" />
                  </div>
                )}

                {error && (
                  <div className="text-center py-12">
                    <p className="text-red-600 mb-2">Failed to load verses</p>
                    <p className="text-sm text-gray-500">{error}</p>
                  </div>
                )}

                {verses && verses.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No verses found for this reference.</p>
                  </div>
                )}

                {verses && verses.length > 0 && (
                  <div className="space-y-6">
                    {verses.map((verse) => (
                      <div
                        key={verse.verse_key}
                        className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100"
                      >
                        {/* Verse Reference */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-emerald-700">
                            {verse.surah_number}:{verse.ayah_number}
                          </span>
                        </div>

                        {/* Arabic Text */}
                        <p className="text-right text-2xl leading-loose text-gray-900 mb-6 font-arabic" dir="rtl">
                          {verse.text_arabic}
                        </p>

                        {/* Divider */}
                        <div className="border-t border-emerald-200 my-4" />

                        {/* Translation */}
                        <div className="space-y-2">
                          <p className="text-sm text-emerald-600 font-medium">
                            {verse.translation.translator}
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {verse.translation.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
