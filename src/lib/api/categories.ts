import { fetchFromAPI } from './client';
import type { CategoryAPIData } from './types';

/**
 * Category/Topic summary for display
 */
export interface CategorySummary {
  id: number;
  name: string;
  imageUrl: string;
  slug: string;
}

/**
 * Fetch all categories (topics) from the backend API
 * @returns Array of category summaries
 */
export async function fetchCategories(): Promise<CategorySummary[]> {
  const data = await fetchFromAPI<CategoryAPIData[]>('public/categories', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  return data.map(toCategorySummary);
}

/**
 * Transform API data to CategorySummary format
 * @param apiCategory - Raw category data from API
 * @returns Transformed CategorySummary object
 */
function toCategorySummary(apiCategory: CategoryAPIData): CategorySummary {
  return {
    id: apiCategory.id,
    name: apiCategory.name,
    imageUrl: apiCategory.image_url,
    slug: apiCategory.slug,
  };
}

/**
 * Fetch a single category by slug from the backend API
 * @param slug - The category slug
 * @returns Category summary or undefined if not found
 */
export async function fetchCategoryBySlug(slug: string): Promise<CategorySummary | undefined> {
  const categories = await fetchCategories();
  return categories.find(c => c.slug === slug);
}
