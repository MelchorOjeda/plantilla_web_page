import React, { useState } from 'react';
import { galleryItems } from '../../config/siteConfig';

export const GallerySection: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleToggleCard = (index: number) => {
    setActiveCardIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-mono tracking-widest uppercase text-zinc-400 font-semibold block mb-2">
          REGISTRO FOTOGRÁFICO
        </span>
        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 mb-3">
          Galería de Espacios y Composiciones
        </h3>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto">
          Perspectivas visuales que ilustran el carácter y los estándares de presentación de nuestros entornos.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-3 max-w-7xl mx-auto">
        {galleryItems.map((img, index) => {
          const isActive = activeCardIndex === index;

          return (
            <div
              key={img.id}
              onClick={() => handleToggleCard(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleToggleCard(index);
                }
              }}
              className="aspect-square relative group overflow-hidden rounded-2xl cursor-pointer bg-zinc-900 border border-zinc-800 focus:outline-hidden focus:ring-2 focus:ring-zinc-400"
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`${img.title} - Toca para ver o alternar información`}
            >
              {/* Imagen con filtro monocromo */}
              <img
                src={img.imageUrl}
                alt={img.title}
                className={`w-full h-full object-cover filter grayscale contrast-115 transition-transform duration-700 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`}
              />

              {/* Overlay oscuro con información */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/70 to-transparent p-4 sm:p-5 flex flex-col justify-end transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <span className="text-white text-sm sm:text-base font-serif font-semibold leading-tight mb-1">
                  {img.title}
                </span>
                <p className="text-zinc-300 text-xs leading-relaxed font-sans line-clamp-3">
                  {img.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;
