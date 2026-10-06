import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import BrandLogo from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-100 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid de 4 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Columna 1: Identidad */}
          <div className="space-y-4">
            <BrandLogo isLight={true} />
            <p className="text-zinc-400 text-sm leading-relaxed mt-4">
              {siteConfig.description}
            </p>
            <div className="pt-2 text-xs text-zinc-500 font-mono">
              PLANTILLA MODULAR BASE v1.0
            </div>
          </div>

          {/* Columna 2: Ubicación & Contacto */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Ubicación & Contacto
            </h4>
            <div className="space-y-2.5 text-sm text-zinc-400">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-zinc-500 group-hover:text-zinc-300" />
                <span className="leading-snug">{siteConfig.address}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 shrink-0 text-zinc-500 group-hover:text-zinc-300" />
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 shrink-0 text-zinc-500 group-hover:text-zinc-300" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Columna 3: Horarios */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Horario de Atención
            </h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                <span className="block font-medium text-zinc-300 text-xs">Jornada Regular</span>
                <span className="block text-zinc-400 text-xs">{siteConfig.openingHours.weekdays}</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                <span className="block font-medium text-zinc-300 text-xs">Fines de Semana</span>
                <span className="block text-zinc-400 text-xs">{siteConfig.openingHours.weekend}</span>
              </div>
            </div>
          </div>

          {/* Columna 4: Enlaces rápidos y redes */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Presencia Digital
            </h4>
            <p className="text-xs text-zinc-400">
              Canales oficiales de comunicación e información actualizada:
            </p>
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}

              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}

              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
            </div>

            <div className="pt-2">
              <Link to="/contacto" className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white font-medium underline underline-offset-4">
                <span>Centro de Ayuda y Mensajería</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Fila inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-zinc-400 cursor-pointer">Privacidad</span>
            <span className="hover:text-zinc-400 cursor-pointer">Términos</span>
            <span className="hover:text-zinc-400 cursor-pointer">Aviso Legal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
