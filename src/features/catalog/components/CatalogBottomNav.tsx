import React from 'react';
import { catalogData } from '../../../config/siteConfig';

interface CatalogBottomNavProps {
  activeSectionId: string;
  onSelectSection: (id: string) => void;
}

export const CatalogBottomNav: React.FC<CatalogBottomNavProps> = ({
  activeSectionId,
  onSelectSection,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-zinc-200 px-4 py-2.5 shadow-lg flex items-center justify-around">
      {catalogData.map((section) => {
        const isActive = section.id === activeSectionId;
        return (
          <button
            key={section.id}
            onClick={() => onSelectSection(section.id)}
            className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              isActive
                ? 'bg-zinc-900 text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            {section.name}
          </button>
        );
      })}
    </div>
  );
};

export default CatalogBottomNav;
