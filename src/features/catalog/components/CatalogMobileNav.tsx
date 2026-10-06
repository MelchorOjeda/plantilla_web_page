import React from 'react';
import { Search, X } from 'lucide-react';

interface CategoryTab {
  id: string;
  name: string;
}

interface CatalogMobileNavProps {
  categories: CategoryTab[];
  activeCategoryId: string;
  searchQuery: string;
  onSelectCategory: (id: string) => void;
  onSearchChange: (query: string) => void;
}

export const CatalogMobileNav: React.FC<CatalogMobileNavProps> = ({
  categories,
  activeCategoryId,
  searchQuery,
  onSelectCategory,
  onSearchChange,
}) => {
  return (
    <div className="md:hidden sticky top-[60px] bg-white/95 backdrop-blur-md border-b border-zinc-200 z-40 px-4 py-3 space-y-3">
      {/* Buscador móvil */}
      <div className="relative w-full">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar artículos..."
          className="w-full pl-9 pr-9 py-2 bg-zinc-100 border border-zinc-200 rounded-full text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-400 focus:bg-white"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Categorías deslizables horizontalmente */}
      {!searchQuery && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-900 text-white font-semibold shadow-xs'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CatalogMobileNav;
