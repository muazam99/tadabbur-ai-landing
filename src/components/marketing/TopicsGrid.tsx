'use client';

import { useState } from 'react';
import Image from 'next/image';
import CategoryDialog from './CategoryDialog';
import type { CategorySummary } from '@/lib/api/categories';

interface TopicsGridProps {
  categories: CategorySummary[];
}

export default function TopicsGrid({ categories }: TopicsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategorySummary | null>(null);

  const handleCardClick = (category: CategorySummary) => {
    setSelectedCategory(category);
  };

  const handleCloseDialog = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCardClick(category)}
            className="bg-gray-50 rounded-lg overflow-hidden hover:bg-gray-100 transition-colors group text-left"
          >
            <div className="relative h-48 w-full bg-gray-200">
              <Image
                src={category.imageUrl}
                alt={category.name}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors">
                {category.name}
              </h3>
            </div>
          </button>
        ))}
      </div>

      <CategoryDialog
        isOpen={selectedCategory !== null}
        onClose={handleCloseDialog}
        categoryName={selectedCategory?.name || ''}
      />
    </>
  );
}
