import React from 'react';

interface CategoryTab {
  id: string;
  name: string;
  itemsCount?: number;
}

interface CatalogSidebarProps {
  categories: CategoryTab[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const CatalogSidebar: React.FC<CatalogSidebarProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
}) => {
  return (
    <aside className="hidden md:block w-64 shrink-0 sticky top-36 bg-white rounded-3xl p-6 border border-zinc-200/90 shadow-xs space-y-4">
      <div>
        <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 font-semibold block mb-1">
          NAVEGACIÓN
        </span>
        <h3 className="font-serif font-bold text-lg text-zinc-900">
          Categorías
        </h3>
      </div>

      <nav className="flex flex-col space-y-1">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategoryId;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                isActive
                  ? 'bg-zinc-900 text-white font-semibold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
              }`}
            >
              <span>{cat.name}</span>
              {typeof cat.itemsCount === 'number' && (
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-500'
                }`}>
                  {cat.itemsCount}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-zinc-100 text-[11px] text-zinc-400 font-mono">
        FILTRADO EN TIEMPO REAL
      </div>
    </aside>
  );
};

export default CatalogSidebar;
