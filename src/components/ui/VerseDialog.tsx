'use client';

import type { Verse } from '@/lib/api/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';

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
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col p-0">
        {/* Header */}
        <DialogHeader className="p-6 border-b border-gray-100">
          <DialogTitle className="text-xl text-emerald-900">
            Verses {verseKey}
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
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
                  <p
                    className="text-right text-2xl leading-loose text-gray-900 mb-6"
                    style={{ fontFamily: "'Uthman Taha Naskh', serif" }}
                    dir="rtl"
                  >
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
      </DialogContent>
    </Dialog>
  );
}
