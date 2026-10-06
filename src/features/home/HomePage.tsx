import React from 'react';
import SEO from '../../components/common/SEO';
import HeroSection from './HeroSection';
import DividerSection from './DividerSection';
import WelcomeSection from './WelcomeSection';
import FeaturesSection from './FeaturesSection';
import HighlightSection from './HighlightSection';
import GallerySection from './GallerySection';
import AboutOverviewSection from './AboutOverviewSection';
import TestimonialsSection from './TestimonialsSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <SEO
        title="Inicio"
        description="Plantilla web profesional y modular construida en React con arquitectura escalable y diseño en escala de grises."
      />
      <HeroSection />
      <DividerSection />
      <WelcomeSection />
      <FeaturesSection />
      <HighlightSection />
      <GallerySection />
      <AboutOverviewSection />
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;
