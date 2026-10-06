import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageSquare, Send, CheckCircle } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import SEO from '../../components/common/SEO';
import { siteConfig } from '../../config/siteConfig';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <main className="bg-zinc-50 pb-24">
      <SEO
        title="Contacto & Ubicación"
        description="Comunícate con nuestro equipo, consulta horarios de atención, envía tus consultas o localízanos en el mapa."
      />

      <PageHeader
        title="Contacto & Atención"
        subtitle="CANALES DE COMUNICACIÓN"
        description="Estamos a tu disposición para atender inquietudes comerciales, soporte técnico o consultas generales."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80&sat=-100"
      />

      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        
        <div className="text-center mb-14 max-w-xl mx-auto">
          <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-semibold block mb-2">
            ATENCIÓN PERSONALIZADA
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 mb-3">
            Inicia Contacto con Nosotros
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Utiliza cualquiera de nuestros medios oficiales o envíanos un mensaje mediante el formulario directo.
          </p>
        </div>

        {/* Tarjetas de Información: Contacto + Horarios */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Tarjeta 1: Canales y WhatsApp */}
          <div className="bg-white p-8 rounded-3xl shadow-xs border border-zinc-200 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 border border-zinc-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-zinc-900">Ubicación y Canales</h3>
                  <p className="text-xs text-zinc-400">Oficinas y atención presencial</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-600">
                <div>
                  <strong className="block text-zinc-900 text-xs font-mono uppercase tracking-wider mb-1">
                    Dirección:
                  </strong>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-800 hover:text-zinc-950 font-medium transition-colors"
                  >
                    <span>{siteConfig.address}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <strong className="block text-zinc-900 text-xs font-mono uppercase tracking-wider mb-1">
                      Teléfono:
                    </strong>
                    <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{siteConfig.phone}</span>
                    </a>
                  </div>
                  <div>
                    <strong className="block text-zinc-900 text-xs font-mono uppercase tracking-wider mb-1">
                      Correo:
                    </strong>
                    <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{siteConfig.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3.5 px-6 rounded-full text-xs sm:text-sm shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar por Mensajería Instantánea</span>
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Horarios de Atención */}
          <div className="bg-white p-8 rounded-3xl shadow-xs border border-zinc-200 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 border border-zinc-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-zinc-900">Horarios de Servicio</h3>
                  <p className="text-xs text-zinc-400">Ventana de respuesta programada</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <span className="block font-medium text-zinc-900 text-xs mb-1">Días Hábiles</span>
                  <span className="text-zinc-700 text-base font-mono">{siteConfig.openingHours.weekdays}</span>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <span className="block font-medium text-zinc-900 text-xs mb-1">Fin de Semana</span>
                  <span className="text-zinc-700 text-base font-mono">{siteConfig.openingHours.weekend}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 text-xs text-zinc-500">
              Atención presencial sujeta a agenda previa en días festivos y jornadas especiales.
            </div>
          </div>

        </div>

        {/* Formulario de Mensajería Directa */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-zinc-200 shadow-xs mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-400 font-semibold block mb-1">
              FORMULARIO WEB
            </span>
            <h3 className="text-2xl font-serif font-bold text-zinc-900">
              Envíanos un Mensaje
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm mt-1">
              Responderemos a tu solicitud en un plazo máximo de 24 horas hábiles.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-zinc-100 border border-zinc-300 text-center space-y-3">
              <CheckCircle className="w-10 h-10 text-zinc-900 mx-auto" />
              <h4 className="font-serif font-bold text-lg text-zinc-900">¡Mensaje Enviado con Éxito!</h4>
              <p className="text-zinc-600 text-sm max-w-md mx-auto">
                Hemos recibido tu mensaje correctamente. Nuestro equipo se pondrá en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', message: '' });
                }}
                className="mt-4 px-6 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-full hover:bg-zinc-800"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-700 uppercase mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-zinc-400 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-700 uppercase mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-zinc-400 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-zinc-700 uppercase mb-2">
                  Teléfono de Contacto
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+00 123 456 7890"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-zinc-400 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-zinc-700 uppercase mb-2">
                  Mensaje o Consulta *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalla tu requerimiento o consulta..."
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-zinc-400 focus:bg-white transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-8 py-3.5 rounded-full text-sm shadow-md transition-all hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Formulario</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Mapa Interactivo Embebido */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-xs border border-zinc-200 overflow-hidden">
          <div className="flex items-center justify-between px-2 py-3 mb-3 border-b border-zinc-100">
            <h3 className="font-serif font-bold text-lg text-zinc-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-800" />
              <span>Mapa de Ubicación</span>
            </h3>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-zinc-800 hover:underline flex items-center gap-1"
            >
              Abrir aplicación de mapas <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-zinc-100 filter grayscale contrast-125 border border-zinc-200">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Mapa de ubicación"
            />
          </div>
        </div>

      </section>
    </main>
  );
};

export default ContactPage;
