import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import { Reveal } from '../../components/common/Reveal';
import ZoneCard from './components/ZoneCard';
import SEO from '../../components/common/SEO';
import { zoneItems, corporateValues } from '../../config/siteConfig';
import { CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <main className="bg-zinc-50 pb-20">
      <SEO
        title="Nosotros"
        description="Conoce nuestra historia, filosofía de trabajo y áreas diseñadas para ofrecer una experiencia integral."
      />

      <PageHeader
        title="Nuestra Organización"
        subtitle="HISTORIA, MISIÓN & INSTALACIONES"
        description="Construyendo soluciones sólidas con un enfoque multidisciplinario y atención minuciosa al detalle."
        bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80&sat=-100"
      />

      {/* Filosofía e Ideario */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-semibold block mb-2">
              PROPÓSITO & VISIÓN
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-zinc-900">
              Nuestra Filosofía de Operación
            </h2>
            <p className="text-zinc-600 leading-relaxed text-base sm:text-lg">
              Operamos bajo un esquema de mejora continua y rigor estético. Creemos que la sobriedad y la claridad conceptual son las herramientas más poderosas para proyectar confianza, confiabilidad y trascendencia en el tiempo.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Secciones por Zona */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-semibold block mb-2">
            INFRAESTRUCTURA
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900">
            Explora Nuestras Instalaciones
          </h2>
          <p className="text-zinc-500 text-sm mt-3">
            Espacios adaptables concebidos para albergar diversas dinámicas de trabajo y recepción.
          </p>
        </div>

        {zoneItems.map((zone, index) => (
          <Reveal key={zone.id}>
            <ZoneCard zone={zone} isEven={index % 2 === 0} />
          </Reveal>
        ))}
      </section>

      {/* Sección Valores Corporativos */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden mt-24 bg-zinc-950 text-white">
        
        {/* Fondo sutil monocromático */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-400 block mb-3">
              PRINCIPIOS GUÍA
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight mb-12">
              Valores Institucionales
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {corporateValues.map((val) => (
                <div
                  key={val.id}
                  className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 px-5 py-3 rounded-full text-zinc-200 text-sm sm:text-base font-medium hover:border-zinc-700 hover:bg-zinc-800 transition-all cursor-default shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  <span>{val.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
