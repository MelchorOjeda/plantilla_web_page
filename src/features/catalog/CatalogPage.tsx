import React, { useState, useMemo } from 'react';
import SEO from '../../components/common/SEO';
import CatalogHero from './components/CatalogHero';
import CatalogDesktopNav from './components/CatalogDesktopNav';
import CatalogMobileNav from './components/CatalogMobileNav';
import CatalogSidebar from './components/CatalogSidebar';
import CatalogSection from './components/CatalogSection';
import SearchResultsView from './components/SearchResultsView';
import CatalogBottomNav from './components/CatalogBottomNav';
import ItemDetailModal from './components/ItemDetailModal';
import { catalogData } from '../../config/siteConfig';
import type { CatalogProduct } from '../../types';
import { useScroll } from '../../hooks/useScroll';

export const CatalogPage: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(catalogData[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    catalogData[0].categories[0]?.id || ''
  );

  const isScrolled = useScroll(160);

  // Sección activa actual
  const currentSection = useMemo(() => {
    return catalogData.find((s) => s.id === activeSectionId) || catalogData[0];
  }, [activeSectionId]);

  // Categorías de la sección actual con contador de items
  const currentCategories = useMemo(() => {
    return currentSection.categories.map((c) => ({
      id: c.id,
      name: c.name,
      itemsCount: c.items.length,
    }));
  }, [currentSection]);

  // Lista plana de todos los productos para búsqueda
  const allProducts = useMemo(() => {
    const list: CatalogProduct[] = [];
    catalogData.forEach((sec) => {
      sec.categories.forEach((cat) => {
        list.push(...cat.items);
      });
    });
    return list;
  }, []);

  // Resultados de búsqueda
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [searchQuery, allProducts]);

  // Scroll suave hacia una categoría específica
  const handleScrollToCategory = (catId: string) => {
    setActiveCategoryId(catId);
    const element = document.getElementById(catId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-zinc-50 min-h-screen pb-24 font-sans">
      <SEO
        title="Catálogo"
        description="Consulta nuestro catálogo completo de líneas de producto y servicios especializados."
      />

      <CatalogHero />

      {/* Navegación superior en escritorio */}
      <CatalogDesktopNav
        activeSectionId={activeSectionId}
        searchQuery={searchQuery}
        isSticky={isScrolled}
        onSelectSection={(id) => {
          setActiveSectionId(id);
          const firstCat = catalogData.find((s) => s.id === id)?.categories[0];
          if (firstCat) setActiveCategoryId(firstCat.id);
        }}
        onSearchChange={setSearchQuery}
      />

      {/* Navegación en móviles */}
      <CatalogMobileNav
        categories={currentCategories}
        activeCategoryId={activeCategoryId}
        searchQuery={searchQuery}
        onSelectCategory={handleScrollToCategory}
        onSearchChange={setSearchQuery}
      />

      {/* Contenedor principal con Sidebar + Lista de categorías */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-start gap-10">
        
        {/* Sidebar en escritorio */}
        {!searchQuery && (
          <CatalogSidebar
            categories={currentCategories}
            activeCategoryId={activeCategoryId}
            onSelectCategory={handleScrollToCategory}
          />
        )}

        {/* Contenido principal */}
        <div className="flex-1 min-w-0">
          {searchQuery ? (
            <SearchResultsView
              query={searchQuery}
              results={filteredProducts}
              onSelectProduct={setSelectedProduct}
              onClearSearch={() => setSearchQuery('')}
            />
          ) : (
            <div className="space-y-16">
              {currentSection.categories.map((cat) => (
                <CatalogSection
                  key={cat.id}
                  id={cat.id}
                  name={cat.name}
                  description={cat.description}
                  items={cat.items}
                  onSelectProduct={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Barra de navegación inferior móvil */}
      <CatalogBottomNav
        activeSectionId={activeSectionId}
        onSelectSection={(id) => {
          setActiveSectionId(id);
          setSearchQuery('');
          const firstCat = catalogData.find((s) => s.id === id)?.categories[0];
          if (firstCat) setActiveCategoryId(firstCat.id);
        }}
      />

      {/* Modal de detalles de producto */}
      {selectedProduct && (
        <ItemDetailModal
          item={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
};

export default CatalogPage;
