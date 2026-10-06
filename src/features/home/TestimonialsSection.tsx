import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Reveal } from '../../components/common/Reveal';
import { testimonialItems, siteConfig } from '../../config/siteConfig';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 relative overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-500 font-semibold block mb-2">
              OPINIONES & RESPALDO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-zinc-900 tracking-tight">
              Testimonios de Usuarios y Clientes
            </h2>
            <div className="w-16 h-0.5 bg-zinc-400 mx-auto mt-4 rounded-full" />
          </div>
        </Reveal>

        {/* Grid de 3 tarjetas de reseña */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialItems.map((review, idx) => (
            <Reveal key={review.id} delay={idx * 0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-xs hover:shadow-xl transition-all duration-300 border border-zinc-200/90 flex flex-col justify-between h-full group hover:-translate-y-1">
                <div>
                  
                  {/* Estrellas monocromáticas elegantes */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex space-x-1 text-zinc-900">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-zinc-900 text-zinc-900" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase">
                      Verificado
                    </span>
                  </div>

                  {/* Texto de la opinión */}
                  <p className="text-zinc-600 text-sm md:text-base italic leading-relaxed mb-6 font-sans">
                    "{review.comment}"
                  </p>

                  {/* Píldoras de criterios */}
                  {review.scores && (
                    <div className="flex flex-wrap gap-2 mb-6 text-xs font-medium text-zinc-700 bg-zinc-100/90 p-2.5 rounded-xl border border-zinc-200">
                      <span>Calidad: <strong className="text-zinc-900">{review.scores.criterio1}</strong></span>
                      <span className="text-zinc-300">•</span>
                      <span>Servicio: <strong className="text-zinc-900">{review.scores.criterio2}</strong></span>
                      <span className="text-zinc-300">•</span>
                      <span>Respaldo: <strong className="text-zinc-900">{review.scores.criterio3}</strong></span>
                    </div>
                  )}
                </div>

                {/* Autor y enlace */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={review.avatarUrl}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-zinc-200 filter grayscale contrast-110"
                    />
                    <div>
                      <h4 className="font-bold text-zinc-900 text-sm">
                        {review.name}
                      </h4>
                      {review.role && (
                        <p className="text-xs text-zinc-500 font-medium">
                          {review.role}
                        </p>
                      )}
                    </div>
                  </div>

                  {review.sourceUrl && (
                    <a
                      href={review.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
                      title="Ver reseña externa"
                      aria-label="Ver reseña externa"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tarjeta de Calificación Promedio Global */}
        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-zinc-200 rounded-3xl shadow-xs hover:shadow-lg transition-all duration-300 p-6 sm:p-8 mt-12 max-w-3xl mx-auto">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center font-mono font-bold text-zinc-800 text-lg shrink-0">
                ★
              </div>
              <div>
                <p className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-widest">
                  ÍNDICE DE SATISFACCIÓN
                </p>
                <p className="font-serif font-bold text-zinc-900 text-lg sm:text-xl">
                  {siteConfig.rating.source}
                </p>
                <p className="text-xs text-zinc-500">
                  Evaluaciones auditadas por comensales y visitantes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:border-l sm:border-zinc-200 sm:pl-8">
              <div className="text-center sm:text-right">
                <span className="text-4xl font-extrabold text-zinc-900 leading-none">
                  {siteConfig.rating.score}
                </span>
                <div className="flex items-center gap-0.5 justify-center sm:justify-end mt-1 text-zinc-900">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-zinc-900" />
                  ))}
                </div>
                <span className="text-xs text-zinc-500 block mt-1">
                  {siteConfig.rating.totalReviews} opiniones
                </span>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default TestimonialsSection;
