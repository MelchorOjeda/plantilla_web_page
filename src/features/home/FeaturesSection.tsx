import React from 'react';
import { Layout, Layers, Sparkles } from 'lucide-react';
import { Reveal } from '../../components/common/Reveal';
import { featureItems } from '../../config/siteConfig';

export const FeaturesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'layout':
        return <Layout className="w-7 h-7 text-zinc-900" />;
      case 'layers':
        return <Layers className="w-7 h-7 text-zinc-900" />;
      default:
        return <Sparkles className="w-7 h-7 text-zinc-900" />;
    }
  };

  return (
    <section className="py-20 bg-white relative border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-semibold block mb-2">
            PILARES METODOLÓGICOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900">
            Fundamentos de Nuestra Propuesta
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.15}>
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200/80 h-full flex flex-col items-center text-center group hover:bg-white hover:border-zinc-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                
                {/* Contenedor del icono monocromático */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-200/70 border border-zinc-300 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                  <div className="group-hover:invert transition-all">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold mb-3 text-zinc-900">
                  {item.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
