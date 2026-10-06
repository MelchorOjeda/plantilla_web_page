export interface NavItem {
  name: string;
  path: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  tagline?: string;
  imageUrl: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'layout' | 'shield' | 'sparkles' | 'layers' | 'zap' | 'users' | 'compass' | 'clock';
}

export interface HighlightItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tag: string;
  imageUrl: string;
  price?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
}

export interface TestimonialScore {
  criterio1: string;
  criterio2: string;
  criterio3: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  comment: string;
  rating: number;
  avatarUrl: string;
  scores?: TestimonialScore;
  sourceUrl?: string;
}

export interface ZoneItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

export interface ValueItem {
  id: string;
  name: string;
  description?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
  date?: string;
  time?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface CatalogProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  badge?: string;
  images: string[];
  features?: string[];
  isAvailable?: boolean;
}

export interface CatalogSection {
  id: string;
  name: string;
  categories: {
    id: string;
    name: string;
    description?: string;
    items: CatalogProduct[];
  }[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  slogan: string;
  description: string;
  address: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  openingHours: {
    weekdays: string;
    weekend: string;
  };
  socialLinks: SocialLinks;
  rating: {
    score: number;
    totalReviews: string;
    source: string;
    sourceUrl: string;
  };
}
