/**
 * SEO-related TypeScript types
 */

export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface TwitterCardMeta {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface JsonLdProps {
  data: Record<string, unknown>;
}
