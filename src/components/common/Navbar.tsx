import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';
import { navItems, siteConfig } from '../../config/siteConfig';
import BrandLogo from './BrandLogo';

export const Navbar: React.FC = () => {
  const isScrolled = useScroll(40);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isSolidNav = isScrolled || !isHomePage;

  const navBackground = isSolidNav
    ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-zinc-200 py-2.5 text-zinc-900'
    : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-white';

  const textColor = isSolidNav ? 'text-zinc-700 hover:text-zinc-950' : 'text-zinc-200 hover:text-white';
  const iconColor = isSolidNav ? 'text-zinc-600 hover:text-zinc-950' : 'text-zinc-300 hover:text-white';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          
          {/* Logo principal */}
          <Link to="/" className="flex-shrink-0 focus:outline-hidden" onClick={() => setMobileMenuOpen(false)}>
            <BrandLogo isLight={!isSolidNav} />
          </Link>

          {/* Menú de navegación en escritorio */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Redes sociales */}
            <div className={`flex items-center space-x-3 pr-6 mr-2 ${isSolidNav ? 'border-r border-zinc-200' : 'border-r border-white/20'}`}>
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 transition-colors ${iconColor}`}
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
                  className={`p-1.5 transition-colors ${iconColor}`}
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
                  className={`p-1.5 transition-colors ${iconColor}`}
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
            </div>

            {/* Enlaces de navegación */}
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium tracking-wide transition-all duration-200 py-1 relative ${
                      isActive
                        ? isSolidNav
                          ? 'text-zinc-950 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-zinc-900'
                          : 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white'
                        : textColor
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Botón CTA neutral */}
            <Link
              to="/contacto"
              className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                isSolidNav
                  ? 'border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800'
                  : 'border-white bg-white/10 text-white hover:bg-white hover:text-zinc-900 backdrop-blur-xs'
              }`}
            >
              Contactar
            </Link>
          </div>

          {/* Botón móvil hamburguesa */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-hidden ${isSolidNav ? 'text-zinc-900 hover:bg-zinc-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Abrir menú de navegación"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-zinc-200 shadow-xl px-6 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto text-zinc-900">
          <div className="flex justify-center space-x-6 pb-4 border-b border-zinc-100">
            {siteConfig.socialLinks.facebook && (
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-950 p-1" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            )}
            {siteConfig.socialLinks.instagram && (
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-950 p-1" aria-label="Instagram">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            )}
            {siteConfig.socialLinks.linkedin && (
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-950 p-1" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
          </div>

          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive ? 'bg-zinc-100 font-bold text-zinc-950' : 'text-zinc-700 hover:bg-zinc-50'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-zinc-400 text-xs">→</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-zinc-900 text-white rounded-xl font-semibold text-sm hover:bg-zinc-800 transition-colors"
            >
              Solicitar Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
