import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export const DividerSection: React.FC = () => {
  return (
    <div className="relative bg-zinc-900 py-20 md:py-24 text-center overflow-hidden border-y border-zinc-800">
      
      {/* Patrón geométrico sutil de fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-400 mb-3 block">
          DECLARACIÓN DE PRINCIPIOS
        </span>
        <h2 className="text-zinc-100 text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight mb-4 inline-block border-b border-zinc-700 pb-3">
          {siteConfig.slogan}
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-light italic mt-3 max-w-2xl mx-auto">
          "Estructura, consistencia y excelencia funcional en cada componente y proceso."
        </p>
      </div>

      {/* Corte diagonal SVG hacia la siguiente sección en zinc-50 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 80"
          className="relative block w-full h-[30px] sm:h-[45px] md:h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#fafafa"
            d="M0,25 L1440,80 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default DividerSection;
