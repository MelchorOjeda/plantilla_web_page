import React from 'react';
import { Search, X } from 'lucide-react';
import { catalogData } from '../../../config/siteConfig';

interface CatalogDesktopNavProps {
  activeSectionId: string;
  searchQuery: string;
  isSticky: boolean;
  onSelectSection: (id: string) => void;
  onSearchChange: (query: string) => void;
}

export const CatalogDesktopNav: React.FC<CatalogDesktopNavProps> = ({
  activeSectionId,
  searchQuery,
  isSticky,
  onSelectSection,
  onSearchChange,
}) => {
  return (
    <div
      className={`hidden md:block transition-all duration-300 z-40 ${
        isSticky
          ? 'sticky top-[68px] bg-white/95 backdrop-blur-md shadow-xs border-b border-zinc-200 py-3'
          : 'bg-white border-b border-zinc-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        
        {/* Pestañas de sección */}
        <div className="flex items-center space-x-2">
          {catalogData.map((section) => {
            const isActive = section.id === activeSectionId;
            return (
              <button
                key={section.id}
                onClick={() => {
                  onSelectSection(section.id);
                  onSearchChange('');
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {section.name}
              </button>
            );
          })}
        </div>

        {/* Campo de búsqueda */}
        <div className="relative w-72">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por nombre o descripción..."
            className="w-full pl-9 pr-9 py-2 bg-zinc-50 border border-zinc-200 rounded-full text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-400 focus:bg-white transition-all"
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

      </div>
    </div>
  );
};

export default CatalogDesktopNav;
