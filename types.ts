
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
}

export interface SiteSettings {
  siteTitle: string;
  aboutText: string;
  contactEmail: string;
  heroText: string;
}

export type Section = 'main' | 'work' | 'about' | 'contact' | 'detail';
export type ViewMode = 'public' | 'admin';
