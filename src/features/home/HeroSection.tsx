import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { heroSlides } from '../../config/siteConfig';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-950">
      
      {/* Slides con transición de opacidad */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover filter grayscale contrast-110"
          />
          {/* Capa de contraste y gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-900/40" />
        </div>
      ))}

      {/* Degradado inferior hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-20 pointer-events-none" />

      {/* Contenido principal del Hero */}
      <div className="relative z-30 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        {heroSlides[currentSlide].tagline && (
          <span className="inline-block text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-zinc-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-xs mb-6 animate-pulse">
            {heroSlides[currentSlide].tagline}
          </span>
        )}

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-tight drop-shadow-md text-zinc-50">
          {heroSlides[currentSlide].title}
        </h1>

        <p className="text-base sm:text-xl md:text-2xl font-light text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {heroSlides[currentSlide].subtitle}
        </p>

        {/* Botones de acción */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Ver Catálogo</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/nosotros"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-zinc-400/80 font-medium px-7 py-3.5 rounded-full text-sm sm:text-base backdrop-blur-xs transition-all duration-300"
          >
            <span>Conócenos</span>
          </Link>
        </div>

        {/* Indicadores de diapositiva */}
        <div className="flex items-center gap-2.5 mt-12 z-30">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all duration-300 rounded-full ${
                i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ir a la diapositiva ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
