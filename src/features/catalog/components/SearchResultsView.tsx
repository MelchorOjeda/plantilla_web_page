import React from 'react';
import { SearchX } from 'lucide-react';
import type { CatalogProduct } from '../../../types';
import CatalogItemCard from './CatalogItemCard';

interface SearchResultsViewProps {
  query: string;
  results: CatalogProduct[];
  onSelectProduct: (item: CatalogProduct) => void;
  onClearSearch: () => void;
}

export const SearchResultsView: React.FC<SearchResultsViewProps> = ({
  query,
  results,
  onSelectProduct,
  onClearSearch,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
        <div>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
            RESULTADOS DE BÚSQUEDA
          </span>
          <h3 className="font-serif font-bold text-xl text-zinc-900 mt-1">
            "{query}" <span className="text-zinc-500 font-sans text-sm font-normal">({results.length} coincidencias)</span>
          </h3>
        </div>
        <button
          onClick={onClearSearch}
          className="text-xs font-semibold text-zinc-700 hover:text-zinc-950 underline underline-offset-4"
        >
          Limpiar búsqueda
        </button>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {results.map((product) => (
            <CatalogItemCard
              key={product.id}
              item={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-zinc-200 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center mx-auto text-zinc-400">
            <SearchX className="w-7 h-7" />
          </div>
          <h4 className="font-serif font-bold text-lg text-zinc-900">
            No se encontraron elementos
          </h4>
          <p className="text-zinc-500 text-xs sm:text-sm max-w-sm mx-auto">
            No encontramos coincidencias para "{query}". Intenta utilizar términos más generales o navega por categorías.
          </p>
          <button
            onClick={onClearSearch}
            className="px-6 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
          >
            Ver catálogo completo
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResultsView;
