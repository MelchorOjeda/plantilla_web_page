import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ZoneItem } from '../../../types';

interface ZoneCardProps {
  zone: ZoneItem;
  isEven: boolean;
}

export const ZoneCard: React.FC<ZoneCardProps> = ({ zone, isEven }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? zone.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === zone.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id={zone.id}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-zinc-200"
    >
      {/* Visor interactivo de fotos */}
      <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        
        {/* Foto principal activa */}
        <div className="relative rounded-2xl overflow-hidden shadow-sm h-72 sm:h-96 group bg-zinc-100">
          <img
            src={zone.images[activeImageIndex]}
            alt={`${zone.title} foto ${activeImageIndex + 1}`}
            className="w-full h-full object-cover filter grayscale contrast-110 transition-all duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />

          <span className="absolute bottom-4 left-6 text-white font-serif text-xl font-medium tracking-wide">
            {zone.title}
          </span>

          {/* Flechas de navegación si hay múltiples fotos */}
          {zone.images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-zinc-900/60 hover:bg-zinc-900 text-white p-2.5 rounded-full backdrop-blur-xs transition-all opacity-80 hover:opacity-100 hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Siguiente foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-zinc-900/60 hover:bg-zinc-900 text-white p-2.5 rounded-full backdrop-blur-xs transition-all opacity-80 hover:opacity-100 hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Contador de fotos */}
              <span className="absolute top-4 right-4 bg-zinc-950/70 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-full font-mono">
                {activeImageIndex + 1} / {zone.images.length}
              </span>
            </>
          )}
        </div>

        {/* Tira de miniaturas */}
        {zone.images.length > 1 && (
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2 custom-scrollbar">
            {zone.images.map((imgSrc, imgIdx) => {
              const isSelected = imgIdx === activeImageIndex;
              return (
                <button
                  key={imgIdx}
                  onClick={() => setActiveImageIndex(imgIdx)}
                  className={`relative shrink-0 h-18 sm:h-20 w-24 sm:w-28 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-zinc-900 ring-2 ring-zinc-400/50 scale-95'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Ver miniatura ${imgIdx + 1}`}
                >
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-full h-full object-cover filter grayscale contrast-110"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Información descriptiva */}
      <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
        <span className="inline-block bg-zinc-100 text-zinc-800 border border-zinc-200 font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full">
          ESPACIO MODULAR
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
          {zone.title}
        </h3>
        <p className="text-zinc-500 font-medium text-base">
          {zone.subtitle}
        </p>
        <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
          {zone.description}
        </p>
      </div>
    </div>
  );
};

export default ZoneCard;
