import React from 'react';
import { Calendar, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import SEO from '../../components/common/SEO';
import { Reveal } from '../../components/common/Reveal';
import { eventItems, siteConfig } from '../../config/siteConfig';

export const EventsPage: React.FC = () => {
  const whatsappEventUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hola, me gustaría solicitar informes o agendar una reservación para un evento.')}`;

  return (
    <main className="bg-zinc-50 pb-24">
      <SEO
        title="Eventos & Actividades"
        description="Consulta las actividades especiales, jornadas formativas y eventos privados programados en nuestras instalaciones."
      />

      <PageHeader
        title="Eventos & Encuentros"
        subtitle="PROGRAMA & CELEBRACIONES"
        description="Espacios acondicionados para conferencias, recepciones privadas y dinámicas comunitarias."
        bgImage="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80&sat=-100"
      />

      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-semibold block mb-2">
            CALENDARIO & MODALIDADES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 mb-3">
            Nuestras Próximas Fechas
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Diseñamos cada encuentro para maximizar el valor de los participantes con atención rigurosa a cada etapa logística.
          </p>
        </div>

        {/* Tarjetas de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {eventItems.map((event) => (
            <Reveal key={event.id}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-zinc-200/90 group flex flex-col h-full">
                
                {/* Portada del evento */}
                <div className="h-64 overflow-hidden relative bg-zinc-200">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                  
                  {event.badge && (
                    <span className="absolute top-4 right-4 bg-zinc-900/90 text-white text-[10px] font-mono font-medium px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {event.badge}
                    </span>
                  )}

                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-white font-serif text-xl sm:text-2xl font-bold leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Contenido descriptivo */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <div className="text-xs font-mono text-zinc-500">
                      {event.date ? `${event.date} • ${event.time || ''}` : 'Consulta periódica'}
                    </div>

                    <a
                      href={whatsappEventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                    >
                      <span>{event.ctaText || 'Consultar'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bloque CTA inferior de Reservas y Redes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tarjeta 1: Reservas */}
          <div className="bg-white rounded-3xl p-8 shadow-xs border border-zinc-200 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-800 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-zinc-900 mb-3">
                Planifica tu Sesión o Evento Privado
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Coordina reservas corporativas, recepciones especiales o adaptaciones a medida comunicándote directamente con nuestro equipo.
              </p>
            </div>

            <div>
              <a
                href={whatsappEventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-6 py-3.5 rounded-full text-sm shadow-sm hover:shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Iniciar Conversación</span>
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Redes y Novedades */}
          <div className="bg-white rounded-3xl p-8 shadow-xs border border-zinc-200 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-800 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-zinc-900 mb-3">
                Mantente al Tanto de Novedades
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Publicamos fechas extraordinarias, lanzamientos de temporada y comunicados en nuestros canales digitales.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-900 hover:text-white border border-zinc-200 flex items-center justify-center gap-2 font-medium text-xs text-zinc-800 transition-all"
                >
                  Facebook
                </a>
              )}
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-900 hover:text-white border border-zinc-200 flex items-center justify-center gap-2 font-medium text-xs text-zinc-800 transition-all"
                >
                  Instagram
                </a>
              )}
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-900 hover:text-white border border-zinc-200 flex items-center justify-center gap-2 font-medium text-xs text-zinc-800 transition-all"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

        </div>

      </section>
    </main>
  );
};

export default EventsPage;
