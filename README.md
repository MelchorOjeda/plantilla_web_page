# Plantilla Web Modular en Matiz de Grises (Grayscale Base Template)

Plantilla web moderna, modular y completamente reutilizable construida con **React 19**, **TypeScript**, **Vite** y **Tailwind CSS**. 

Diseñada con una estética sobria y sofisticada en **escala de grises (monocromática)**, sin marcas, colores ni nombres asociados a ningún negocio específico, lista para ser personalizada y adaptada a cualquier proyecto (sitio corporativo, agencia, restaurante, portafolio, catálogo de productos o servicios, eventos, etc.).

---

## 📁 Estructura del Proyecto

```text
plantilla_web_page/
├── public/                 # Archivos estáticos y favicons
├── src/
│   ├── components/         # Componentes transversales y reutilizables
│   │   └── common/
│   │       ├── BrandLogo.tsx       # Isotipo y logotipo neutral tipográfico
│   │       ├── Footer.tsx          # Pie de página de 4 columnas en escala de grises
│   │       ├── Navbar.tsx          # Barra fija con scroll dinámico y menú móvil
│   │       ├── PageHeader.tsx      # Cabecera para páginas internas con overlay
│   │       ├── Reveal.tsx          # Contenedor animado con Framer Motion
│   │       ├── ScrollToTop.tsx     # Restauración de scroll entre rutas
│   │       └── SEO.tsx             # Manejo dinámico de metadatos y título
│   ├── config/
│   │   └── siteConfig.ts   # ⭐️ Archivo central de personalización (TODA LA DATA)
│   ├── features/           # Módulos organizados por página/dominio
│   │   ├── about/          # Página "Nosotros"
│   │   │   ├── components/
│   │   │   │   └── ZoneCard.tsx    # Visor de espacios/instalaciones con carrusel
│   │   │   └── AboutPage.tsx
│   │   ├── catalog/        # Página "Catálogo" / "Menú" / "Servicios"
│   │   │   ├── components/
│   │   │   │   ├── CatalogBottomNav.tsx    # Pestañas inferiores para móviles
│   │   │   │   ├── CatalogDesktopNav.tsx   # Barra superior de secciones y búsqueda
│   │   │   │   ├── CatalogHero.tsx         # Portada del catálogo
│   │   │   │   ├── CatalogItemCard.tsx     # Tarjeta de producto/servicio
│   │   │   │   ├── CatalogMobileNav.tsx    # Filtro horizontal deslizable
│   │   │   │   ├── CatalogSection.tsx      # Contenedor por categoría
│   │   │   │   ├── CatalogSidebar.tsx      # Menú lateral para escritorio
│   │   │   │   ├── ItemDetailModal.tsx     # Modal completo con carrusel y detalles
│   │   │   │   └── SearchResultsView.tsx   # Vista de filtrado en tiempo real
│   │   │   └── CatalogPage.tsx
│   │   ├── contact/        # Página "Contacto"
│   │   │   └── ContactPage.tsx     # Canales, formulario interactivo, mapa y horarios
│   │   ├── events/         # Página "Eventos"
│   │   │   └── EventsPage.tsx      # Cartelera con badges y CTA de reservas
│   │   └── home/           # Página "Inicio"
│   │       ├── AboutOverviewSection.tsx  # Resumen institucional
│   │       ├── DividerSection.tsx        # Divisor con corte angular y lema
│   │       ├── FeaturesSection.tsx       # Rejilla de pilares clave con iconos
│   │       ├── GallerySection.tsx        # Galería interactiva con overlays
│   │       ├── HeroSection.tsx           # Slider automático con llamadas a la acción
│   │       ├── HighlightSection.tsx      # Artículos/servicios más destacados
│   │       ├── HomePage.tsx              # Ensamblado de inicio
│   │       ├── TestimonialsSection.tsx   # Opiniones y tarjeta de calificación global
│   │       └── WelcomeSection.tsx        # Presentación institucional
│   ├── hooks/
│   │   └── useScroll.ts    # Detección de desplazamiento de página
│   ├── styles/
│   │   └── theme.css       # Tokens de diseño y variables CSS monocromáticas
│   ├── types/
│   │   └── index.ts        # Interfaces estrictas de TypeScript
│   ├── App.tsx             # Enrutador principal (React Router DOM)
│   ├── index.css           # Configuración de Tailwind CSS v4
│   └── main.tsx            # Punto de entrada
├── package.json
└── vite.config.ts
```

---

## 🚀 Cómo Ejecutar el Proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
3. **Construir para producción:**
   ```bash
   npm run build
   ```

---

## 🛠️ Cómo Personalizar la Plantilla

### 1. Cambiar Textos, Enlaces y Contenido
Toda la información del sitio está centralizada en `src/config/siteConfig.ts`. Solo debes editar ese archivo para actualizar:
- Nombre de la empresa (`name`, `shortName`)
- Slogan y descripción
- Datos de contacto (teléfono, WhatsApp, correo, dirección)
- Enlaces de redes sociales
- Diapositivas del Hero (`heroSlides`)
- Características principales (`featureItems`)
- Destacados (`highlightItems`)
- Fotos de la galería (`galleryItems`)
- Reseñas de clientes (`testimonialItems`)
- Espacios y fotos de zonas (`zoneItems`)
- Catálogo de productos y servicios (`catalogData`)
- Cartelera de eventos (`eventItems`)

### 2. Cambiar Colores o Personalizar el Tema
El diseño actual utiliza un matiz neutro de grises. Si en el futuro deseas incorporar los colores de una marca:
- Edita `src/styles/theme.css`: ajusta las variables `--accent-base`, `--bg-page` o añade tus variables personalizadas.
- Todos los componentes utilizan las clases semánticas de Tailwind basadas en tonos zinc/neutral para mantener la armonía.

### 3. Rutas Disponibles
- `/` - Página de Inicio
- `/nosotros` - Historia, Filosofía, Espacios y Valores
- `/catalogo` (y alias `/menu`) - Catálogo estructurado con buscador y modal de producto
- `/eventos` - Próximas fechas, actividades y reservas
- `/contacto` - Ubicación, horarios, formulario web y mapa interactivo
