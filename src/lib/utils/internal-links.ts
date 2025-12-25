import type { SurahInfo } from '@/lib/types/quran';

/**
 * Get related surahs for internal linking
 * @param currentSurah - Current surah number
 * @param surahs - Array of all surahs
 * @param count - Number of related surahs to return
 * @returns Array of related surahs
 */
export function getRelatedSurahs(
  currentSurah: number,
  surahs: SurahInfo[],
  count = 4
): SurahInfo[] {
  const index = surahs.findIndex(s => s.surah_number === currentSurah);
  if (index === -1) return surahs.slice(0, count);

  const before = surahs.slice(Math.max(0, index - 2), index);
  const after = surahs.slice(index + 1, index + 1 + (count - before.length));
  return [...before, ...after];
}

/**
 * Generate breadcrumb structured data
 * @param items - Array of breadcrumb items with name and href
 * @returns BreadcrumbList schema object
 */
export function generateBreadcrumbs(
  items: Array<{ name: string; href: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  };
}

/**
 * Generate breadcrumb items for a surah page
 * @param surah - Surah information
 * @param siteUrl - Base site URL
 * @returns Array of breadcrumb items
 */
export function getSurahBreadcrumbs(surah: SurahInfo, siteUrl: string) {
  return [
    { name: 'Home', href: siteUrl },
    { name: 'Quran', href: `${siteUrl}/` },
    { name: surah.surah_name, href: `${siteUrl}/surah/${surah.surah_number}` },
  ];
}
