import React from 'react';
import { Reveal } from '../../components/common/Reveal';
import { siteConfig } from '../../config/siteConfig';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 text-center relative overflow-hidden">
      
      {/* Patrón de puntos decorativo en escala de grises */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <span className="text-zinc-500 font-mono tracking-widest uppercase text-xs md:text-sm font-semibold mb-3 block">
          PRESENTACIÓN & ENFOQUE
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-zinc-900 tracking-tight">
          Bienvenidos a {siteConfig.name}
        </h2>

        <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
          {siteConfig.description}
        </p>

        <p className="text-zinc-500 text-base md:text-lg leading-relaxed mt-4 italic">
          "Un marco de trabajo limpio, modular y concebido para adaptarse a cualquier requerimiento corporativo o comercial."
        </p>

        {/* Tarjeta de imagen de portada con Reveal */}
        <Reveal>
          <div className="w-full h-72 sm:h-96 md:h-[420px] rounded-3xl shadow-md border border-zinc-200 mt-10 overflow-hidden relative group bg-zinc-200">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80&sat=-100"
              alt="Instalaciones y Entorno"
              className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-left">
              <span className="text-xs font-mono tracking-wider uppercase text-zinc-300 block mb-1">
                INSTALACIONES & ESPACIOS
              </span>
              <span className="text-white font-serif text-xl sm:text-2xl font-semibold tracking-wide">
                Entornos Diseñados con Rigor Visual
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WelcomeSection;
