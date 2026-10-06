import React from 'react';

export const CatalogHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 bg-zinc-950 text-white overflow-hidden text-center border-b border-zinc-800">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-400 block mb-2">
          INVENTARIO & PORTAFOLIO
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-zinc-100 mb-4">
          Catálogo General
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Explora nuestra selección estructurada por líneas de producto y servicios especializados con disponibilidad inmediata.
        </p>
      </div>
    </section>
  );
};

export default CatalogHero;
