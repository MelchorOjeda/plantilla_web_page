import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './features/home/HomePage';
import AboutPage from './features/about/AboutPage';
import CatalogPage from './features/catalog/CatalogPage';
import EventsPage from './features/events/EventsPage';
import ContactPage from './features/contact/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-800 selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            {/* Alias /menu para fácil adaptación si se usa en contexto restaurantero */}
            <Route path="/menu" element={<CatalogPage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
