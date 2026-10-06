import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../../components/common/Reveal';
import { highlightItems } from '../../config/siteConfig';

export const HighlightSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-semibold block mb-2">
                SELECCIÓN DESTACADA
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight">
                Elementos de Mayor Relevancia
              </h2>
            </div>
            <p className="text-zinc-600 max-w-md text-sm sm:text-base leading-relaxed">
              Muestrario de opciones configuradas con balance formal, información estructurada y acceso directo a especificaciones completas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {highlightItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-5 p-5 bg-white border border-zinc-200/90 rounded-3xl hover:border-zinc-300 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Imagen del elemento */}
                <div className="w-full sm:w-36 h-44 sm:h-36 rounded-2xl overflow-hidden shrink-0 relative bg-zinc-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tag && (
                    <span className="absolute top-2 left-2 bg-zinc-900/90 backdrop-blur-xs text-white text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Detalles informativos */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                      {item.price && (
                        <span className="text-sm font-bold text-zinc-900 font-mono">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif font-bold text-lg text-zinc-900 group-hover:text-zinc-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-zinc-100 flex items-center justify-end">
                    <Link
                      to="/catalogo"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
                    >
                      <span>Ver en catálogo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HighlightSection;
