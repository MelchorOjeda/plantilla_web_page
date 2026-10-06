import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../../components/common/Reveal';

export const AboutOverviewSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-zinc-200">
      
      {/* Patrón de líneas sutiles monocromático */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Imagen principal */}
        <Reveal>
          <div className="aspect-[4/5] max-h-[540px] rounded-3xl overflow-hidden shadow-xl relative border border-zinc-200 bg-zinc-100 group">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80&sat=-100"
              alt="Sobre nosotros"
              className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </Reveal>

        {/* Textos descriptivos */}
        <Reveal delay={0.3}>
          <div className="space-y-6">
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-semibold block">
              IDENTIDAD & METODOLOGÍA
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-zinc-900 tracking-tight leading-tight">
              Diseño Pensado para Escalar sin Fricciones
            </h2>

            <div className="space-y-4 text-zinc-600 text-base leading-relaxed">
              <p>
                Cada sección de esta plantilla responde a patrones de diseño probados, enfocados en transmitir confianza y permitir una personalización inmediata sin alterar la estabilidad estructural.
              </p>
              <p>
                La separación de datos en archivos de configuración garantiza que reemplazar nombres, textos o enlaces se realice en cuestión de minutos, adaptándose a múltiples industrias y modelos de negocio.
              </p>
            </div>

            <div className="border-l-4 border-zinc-800 bg-zinc-100/80 p-5 rounded-r-2xl text-zinc-800 italic text-sm sm:text-base leading-relaxed">
              "La solidez visual de una interfaz neutra radica en su capacidad para resaltar el contenido del usuario sin distraer la atención."
            </div>

            <div className="pt-4">
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 font-semibold text-sm text-zinc-900 hover:text-zinc-600 transition-colors group"
              >
                <span>Conocer más sobre la filosofía y espacios</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutOverviewSection;
