'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CTAButtons from './CTAButtons';
import { EXPLORE_CATEGORIES } from '@/lib/constants/quran';

interface CategoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  categoryName: string;
}

export default function CategoryDialog({
  isOpen,
  onClose,
  categoryName,
}: CategoryDialogProps) {
  const categoryDetails = EXPLORE_CATEGORIES.find(
    (c) => c.name === categoryName
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          {categoryDetails?.emoji && (
            <div className="text-5xl mb-2">{categoryDetails.emoji}</div>
          )}
          <DialogTitle className="text-2xl">{categoryName}</DialogTitle>
          <DialogDescription className="text-base text-gray-700">
            Ready to deepen your understanding of {categoryName}?
            <br /><br />
            Tadabbur unlocks thematic connections, provides authentic
            explanations, and guides you through related verses across the
            Quran. Experience {categoryName} like never before.
            <br /><br />
            Get the app to start your journey today.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center">
          <CTAButtons />
        </div>
      </DialogContent>
    </Dialog>
  );
}
