
import { PortfolioItem, SiteSettings } from './types';

export const INITIAL_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Editorial 01',
    category: 'High Fashion',
    description: 'A study in high-contrast lighting and avant-garde silhouettes. This collection explores the boundary between architectural form and wearable art.',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    title: 'Monolith Structure',
    category: 'Avant-Garde',
    description: 'Brutalist architecture meets fluid drapery. This series explores how structured garments can mirror the rigidity of concrete while maintaining human elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    title: 'Ephemeral State',
    category: 'Lookbook',
    description: 'The transience of Spring expressed through sheer fabrics. A collection designed to evoke the feeling of early morning mist in a metropolitan setting.',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '4',
    title: 'Urban Nomadic',
    category: 'Streetwear',
    description: 'Functional high-fashion for the concrete jungle. Each piece combines military-grade utility with high-fashion silhouettes for the modern traveler.',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '5',
    title: 'Concrete Velvet',
    category: 'Editorial',
    description: 'A tactile exploration of texture contrast. We paired industrial velvet with raw concrete backdrops to highlight the luxury inherent in softness.',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '6',
    title: 'Silent Canvas',
    category: 'Minimalism',
    description: 'The absence of color as a powerful statement. Minimalist patterns that rely purely on construction and silhouette to convey their message.',
    imageUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1200'
  }
];

export const INITIAL_SETTINGS: SiteSettings = {
  siteTitle: 'ARCHIVE',
  aboutText: 'Focused on structural elegance and commercial sensibility in fashion design.',
  contactEmail: 'yoonlee7865@gmail.com',
  heroText: 'Curating the future through the lens of the past.'
};
