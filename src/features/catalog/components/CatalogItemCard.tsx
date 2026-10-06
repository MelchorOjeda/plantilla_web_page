import React from 'react';
import { Eye, Check } from 'lucide-react';
import type { CatalogProduct } from '../../../types';

interface CatalogItemCardProps {
  item: CatalogProduct;
  onSelect: (item: CatalogProduct) => void;
}

export const CatalogItemCard: React.FC<CatalogItemCardProps> = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="bg-white rounded-3xl p-5 border border-zinc-200/90 hover:border-zinc-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
    >
      <div>
        {/* Imagen del producto */}
        {item.images && item.images.length > 0 && (
          <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 relative bg-zinc-100">
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
            />
            {item.badge && (
              <span className="absolute top-3 left-3 bg-zinc-900/90 text-white text-[10px] font-mono font-medium px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                {item.badge}
              </span>
            )}
            <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white/90 text-zinc-900 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <Eye className="w-3.5 h-3.5" />
                <span>Ver detalles</span>
              </span>
            </div>
          </div>
        )}

        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            {item.category}
          </span>
          <span className="text-sm font-bold text-zinc-900 font-mono">
            {item.price}
          </span>
        </div>

        <h4 className="font-serif font-bold text-lg text-zinc-900 group-hover:text-zinc-700 transition-colors">
          {item.name}
        </h4>

        <p className="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {item.features && item.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-zinc-100">
            {item.features.slice(0, 2).map((feat, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded-md"
              >
                <Check className="w-3 h-3 text-zinc-500" />
                {feat}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 mt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
        <span className="text-zinc-400 font-mono">
          {item.isAvailable !== false ? 'Disponible' : 'Bajo consulta'}
        </span>
        <button
          type="button"
          className="font-semibold text-zinc-900 group-hover:underline flex items-center gap-1"
        >
          Detalles →
        </button>
      </div>
    </div>
  );
};

export default CatalogItemCard;
