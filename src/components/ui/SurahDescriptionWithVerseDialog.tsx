'use client';

import { useState, useCallback } from 'react';
import { fetchVerses } from '@/lib/api/verses';
import type { Verse } from '@/lib/api/types';
import VerseDialog from './VerseDialog';

interface SurahDescriptionWithVerseDialogProps {
  descriptionHtml: string;
}

export default function SurahDescriptionWithVerseDialog({
  descriptionHtml,
}: SurahDescriptionWithVerseDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [verseKey, setVerseKey] = useState('');
  const [verses, setVerses] = useState<Verse[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setVerseKey('');
    setVerses(null);
    setError(null);
  }, []);

  const handleDescriptionClick = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Check if this is a verse reference link (format: /surah-number/verse-range or /surah-number/single-verse)
      const verseLinkMatch = href.match(/^\/(\d+)\/([\d-]+)$/);
      if (!verseLinkMatch) return;

      e.preventDefault();

      const [, surahNumber, verseRange] = verseLinkMatch;
      const apiVerseKey = `${surahNumber}:${verseRange}`;

      console.log('Fetching verses for key:', apiVerseKey);

      setIsOpen(true);
      setVerseKey(apiVerseKey);
      setVerses(null);
      setIsLoading(true);
      setError(null);

      try {
        const verses = await fetchVerses(apiVerseKey);
        console.log('API response verses:', verses);
        setVerses(verses);
      } catch (err) {
        console.error('Error fetching verses:', err);
        setError(err instanceof Error ? err.message : 'Failed to load verses');
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return (
    <>
      <div
        className="surah-description"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        onClick={handleDescriptionClick}
      />
      <VerseDialog
        isOpen={isOpen}
        verseKey={verseKey}
        verses={verses}
        isLoading={isLoading}
        error={error}
        onClose={handleClose}
      />
    </>
  );
}
