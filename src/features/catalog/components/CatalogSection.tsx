import React from 'react';
import type { CatalogProduct } from '../../../types';
import CatalogItemCard from './CatalogItemCard';

interface CatalogSectionProps {
  id: string;
  name: string;
  description?: string;
  items: CatalogProduct[];
  onSelectProduct: (item: CatalogProduct) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  id,
  name,
  description,
  items,
  onSelectProduct,
}) => {
  return (
    <section id={id} className="scroll-mt-36">
      <div className="mb-6 pb-3 border-b border-zinc-200">
        <h3 className="font-serif font-bold text-2xl text-zinc-900">
          {name}
        </h3>
        {description && (
          <p className="text-zinc-500 text-xs sm:text-sm mt-1">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {items.map((product) => (
          <CatalogItemCard
            key={product.id}
            item={product}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;
