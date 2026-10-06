import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Check, MessageSquare } from 'lucide-react';
import type { CatalogProduct } from '../../../types';
import { siteConfig } from '../../../config/siteConfig';

interface ItemDetailModalProps {
  item: CatalogProduct;
  onClose: () => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = item.images && item.images.length > 0
    ? item.images
    : ['https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80&sat=-100'];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const inquiryUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hola, deseo solicitar informes sobre: ${item.name} (${item.price})`)}`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute top-4 right-4 z-20 bg-zinc-900/60 hover:bg-zinc-900 text-white p-2 rounded-full backdrop-blur-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visor de imágenes (lado izquierdo) */}
        <div className="w-full md:w-1/2 bg-zinc-100 flex flex-col justify-between relative p-4 shrink-0">
          <div className="relative w-full h-64 sm:h-80 md:h-full rounded-2xl overflow-hidden bg-zinc-200 flex items-center justify-center">
            <img
              src={images[activeImageIndex]}
              alt={item.name}
              className="w-full h-full object-cover filter grayscale contrast-110"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-zinc-900/70 hover:bg-zinc-900 text-white p-2 rounded-full backdrop-blur-xs transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-zinc-900/70 hover:bg-zinc-900 text-white p-2 rounded-full backdrop-blur-xs transition-colors"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="absolute bottom-3 right-3 bg-zinc-900/80 text-white text-[11px] font-mono px-2.5 py-0.5 rounded-full">
                  {activeImageIndex + 1} / {images.length}
                </span>
              </>
            )}
          </div>

          {/* Miniaturas si hay más de una */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1 custom-scrollbar">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`h-14 w-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === i ? 'border-zinc-900 ring-2 ring-zinc-300' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover filter grayscale" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Información y especificaciones (lado derecho) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                {item.category}
              </span>
              {item.badge && (
                <span className="bg-zinc-100 text-zinc-800 text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border border-zinc-200">
                  {item.badge}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mb-2">
              {item.name}
            </h3>

            <div className="text-xl font-bold font-mono text-zinc-900 mb-6 pb-4 border-b border-zinc-100">
              {item.price}
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                Descripción
              </h4>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.features && item.features.length > 0 && (
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Especificaciones Clave
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700">
                      <div className="w-4 h-4 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-zinc-800" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Botón de acción */}
          <div className="pt-6 border-t border-zinc-100">
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3.5 px-6 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar Disponibilidad</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailModal;
