import type {
  SiteConfig,
  NavItem,
  HeroSlide,
  FeatureItem,
  HighlightItem,
  GalleryItem,
  TestimonialItem,
  ZoneItem,
  ValueItem,
  EventItem,
  CatalogSection
} from '../types';

export const siteConfig: SiteConfig = {
  name: 'NOMBRE DE LA EMPRESA',
  shortName: 'EMPRESA',
  slogan: 'Lema institucional o propuesta de valor principal',
  description: 'Plantilla modular desarrollada con estándares modernos, componentes desacoplados y diseño sobrio en matices de grises, lista para personalizar.',
  address: 'Avenida Principal 123, Colonia Centro, Ciudad, País',
  googleMapsUrl: 'https://maps.google.com',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.7709545917505!2d-86.83127412489105!3d21.161511580521253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA5JzQxLjQiTiA4NsKwNDknNDQuNiJX!5e0!3m2!1ses!2smx!4v1600000000000!5m2!1ses!2smx',
  phone: '+00 123 456 7890',
  whatsappNumber: '1234567890',
  whatsappMessage: 'Hola, me gustaría solicitar más información sobre sus servicios.',
  email: 'contacto@empresa.ejemplo',
  openingHours: {
    weekdays: 'Lunes a Viernes: 08:00 AM - 08:00 PM',
    weekend: 'Sábados y Domingos: 09:00 AM - 02:00 PM',
  },
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    linkedin: 'https://linkedin.com',
  },
  rating: {
    score: 4.9,
    totalReviews: '+1,500',
    source: 'Plataforma de Calificaciones',
    sourceUrl: 'https://google.com',
  },
};

export const navItems: NavItem[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Catálogo', path: '/catalogo' },
  { name: 'Eventos', path: '/eventos' },
  { name: 'Contacto', path: '/contacto' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Estructura Robusta y Modular',
    subtitle: 'Diseño sobrio enfocado en jerarquía visual, legibilidad y adaptabilidad total',
    tagline: 'PROPUESTA DE VALOR',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80&sat=-100',
  },
  {
    id: 'slide-2',
    title: 'Componentes Reutilizables',
    subtitle: 'Arquitectura escalable basada en módulos independientes listos para producción',
    tagline: 'DISEÑO DE SISTEMA',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80&sat=-100',
  },
  {
    id: 'slide-3',
    title: 'Experiencia Fluida y Responsiva',
    subtitle: 'Navegación intuitiva optimizada para dispositivos móviles y pantallas de escritorio',
    tagline: 'ALTO RENDIMIENTO',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80&sat=-100',
  },
];

export const featureItems: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'Arquitectura Desacoplada',
    description: 'Componentes segregados por dominio y funcionalidad que facilitan el mantenimiento y la extensión del código.',
    iconName: 'layout',
  },
  {
    id: 'feat-2',
    title: 'Tokens de Diseño Monocromáticos',
    description: 'Paleta neutral en matiz de grises que permite incorporar cualquier identidad corporativa sin fricción.',
    iconName: 'layers',
  },
  {
    id: 'feat-3',
    title: 'Experiencia y Accesibilidad',
    description: 'Microinteracciones sutiles, animaciones de entrada controladas y estructura semántica estricta.',
    iconName: 'sparkles',
  },
];

export const highlightItems: HighlightItem[] = [
  {
    id: 'high-1',
    title: 'Elemento Destacado Uno',
    category: 'Categoría A',
    tag: 'Recomendado',
    description: 'Descripción breve del elemento destacado demostrando la composición de la tarjeta y su balance tipográfico.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80&sat=-100',
    price: '$240.00',
  },
  {
    id: 'high-2',
    title: 'Elemento Destacado Dos',
    category: 'Categoría B',
    tag: 'Popular',
    description: 'Espacio estructurado para comunicar especificaciones, ventajas competitivas o datos relevantes.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80&sat=-100',
    price: '$180.00',
  },
  {
    id: 'high-3',
    title: 'Elemento Destacado Tres',
    category: 'Categoría A',
    tag: 'Especial',
    description: 'Detalle sintético con tipografía clara y contraste calibrado para máxima legibilidad visual.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80&sat=-100',
    price: '$310.00',
  },
  {
    id: 'high-4',
    title: 'Elemento Destacado Cuatro',
    category: 'Categoría C',
    tag: 'Nuevo',
    description: 'Resumen descriptivo que muestra la adaptabilidad del contenedor a diferentes volúmenes de texto.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80&sat=-100',
    price: '$150.00',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Espacio Principal',
    description: 'Perspectiva arquitectónica que ilustra la armonía de proporciones y la iluminación ambiental.',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80&sat=-100',
  },
  {
    id: 'gal-2',
    title: 'Área de Trabajo',
    description: 'Configuración diseñada para optimizar los flujos dinámicos y la concentración del usuario.',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80&sat=-100',
  },
  {
    id: 'gal-3',
    title: 'Módulo de Presentación',
    description: 'Zona de recepción con balance estético entre calidez de materiales y sobriedad de líneas.',
    imageUrl: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80&sat=-100',
  },
  {
    id: 'gal-4',
    title: 'Detalle de Diseño',
    description: 'Acercamiento de materiales nobles que transmiten solidez, pulcritud y sofisticación.',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80&sat=-100',
  },
];

export const testimonialItems: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Nombre del Cliente Uno',
    role: 'Cliente Frecuente',
    comment: 'La calidad del servicio y la atención a cada detalle superaron mis expectativas. El orden y profesionalismo se perciben en cada interacción.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80&sat=-100',
    scores: {
      criterio1: 'Excelente',
      criterio2: 'Puntual',
      criterio3: 'Confiable',
    },
    sourceUrl: 'https://google.com',
  },
  {
    id: 'test-2',
    name: 'Nombre del Cliente Dos',
    role: 'Coordinador de Proyectos',
    comment: 'Una experiencia consistente, clara y muy confiable. La comunicación fue transparente y los resultados totalmente acordes a lo planificado.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80&sat=-100',
    scores: {
      criterio1: 'Profesional',
      criterio2: 'Ágil',
      criterio3: 'Recomendable',
    },
    sourceUrl: 'https://google.com',
  },
  {
    id: 'test-3',
    name: 'Nombre del Cliente Tres',
    role: 'Usuario Registrado',
    comment: 'El ambiente, la calidez y el estándar de cumplimiento hacen que siempre regrese. Definitivamente una referencia obligada.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80&sat=-100',
    scores: {
      criterio1: 'Óptimo',
      criterio2: 'Cálido',
      criterio3: 'Impecable',
    },
    sourceUrl: 'https://google.com',
  },
];

export const zoneItems: ZoneItem[] = [
  {
    id: 'zona-principal',
    title: 'Área Principal',
    subtitle: 'Espacio de convivencia y bienvenida',
    description: 'Ambiente diseñado con techos amplios, iluminación cenital y distribución pensada para ofrecer comodidad y privacidad a los comensales o visitantes.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80&sat=-100',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80&sat=-100',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80&sat=-100',
    ],
  },
  {
    id: 'zona-terraza',
    title: 'Terraza Abierta',
    subtitle: 'Entorno exterior ventilado y confortable',
    description: 'Zona al aire libre ideal para reuniones informales, eventos diurnos o veladas nocturnas con mobiliario contemporáneo ergonómico.',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80&sat=-100',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80&sat=-100',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80&sat=-100',
    ],
  },
  {
    id: 'zona-privada',
    title: 'Salón Exclusivo',
    subtitle: 'Capacidad para sesiones privadas y ejecutivas',
    description: 'Un rincón aislado acústicamente, equipado con facilidades de conectividad y atención personalizada para grupos que requieren máxima discreción.',
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80&sat=-100',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80&sat=-100',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80&sat=-100',
    ],
  },
];

export const corporateValues: ValueItem[] = [
  { id: 'v1', name: 'Calidad Imparcial' },
  { id: 'v2', name: 'Transparencia' },
  { id: 'v3', name: 'Atención al Detalle' },
  { id: 'v4', name: 'Compromiso' },
  { id: 'v5', name: 'Innovación Continua' },
  { id: 'v6', name: 'Sostenibilidad' },
];

export const eventItems: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Jornada Temática Especial',
    description: 'Sesión demostrativa con dinámicas interactivas, exposiciones y degustación de novedades para la comunidad.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80&sat=-100',
    badge: 'Próximamente',
    date: 'Viernes 24',
    time: '19:00 hrs',
    ctaText: 'Reservar Lugar',
  },
  {
    id: 'ev-2',
    title: 'Música Acústica en Vivo',
    description: 'Veladas amenizadas con ensambles instrumentales de cuerda y percusión en un entorno íntimo.',
    imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80&sat=-100',
    badge: 'Fines de Semana',
    date: 'Sábados',
    time: '20:30 hrs',
    ctaText: 'Consultar Horarios',
  },
  {
    id: 'ev-3',
    title: 'Talleres y Masterclasses',
    description: 'Encuentros formativos dirigidos por especialistas para conocer técnicas, metodologías y procesos clave.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80&sat=-100',
    badge: 'Cupos Limitados',
    date: 'Mensual',
    time: '10:00 hrs',
    ctaText: 'Inscribirse',
  },
  {
    id: 'ev-4',
    title: 'Eventos Privados y Sociales',
    description: 'Facilidades para cumpleaños, recepciones, conferencias de prensa o celebraciones corporativas a medida.',
    imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80&sat=-100',
    badge: 'Bajo Solicitud',
    ctaText: 'Cotizar Evento',
  },
];

export const catalogData: CatalogSection[] = [
  {
    id: 'seccion-principal',
    name: 'Colección General',
    categories: [
      {
        id: 'cat-linea-a',
        name: 'Línea Ejecutiva A',
        description: 'Elementos pensados para alto desempeño y presentación refinada.',
        items: [
          {
            id: 'item-101',
            name: 'Producto Modular 01',
            description: 'Solución integral con especificaciones técnicas estándar y acabado satinado.',
            price: '$120.00',
            category: 'Línea Ejecutiva A',
            badge: 'Más Vendido',
            images: [
              'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80&sat=-100',
              'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80&sat=-100',
            ],
            features: ['Construcción reforzada', 'Acabado en escala neutra', 'Garantía extendida'],
            isAvailable: true,
          },
          {
            id: 'item-102',
            name: 'Producto Modular 02',
            description: 'Componente ligero con ensamblaje rápido y alta durabilidad en entornos exigentes.',
            price: '$160.00',
            category: 'Línea Ejecutiva A',
            images: [
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80&sat=-100',
            ],
            features: ['Material reciclable', 'Formatos adaptables'],
            isAvailable: true,
          },
          {
            id: 'item-103',
            name: 'Producto Modular 03',
            description: 'Variante de diseño ergonómico que maximiza la eficiencia de uso del espacio.',
            price: '$95.00',
            category: 'Línea Ejecutiva A',
            images: [
              'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80&sat=-100',
            ],
            features: ['Diseño compacto', 'Fácil manipulación'],
            isAvailable: true,
          },
        ],
      },
      {
        id: 'cat-linea-b',
        name: 'Línea Confort B',
        description: 'Opciones orientadas al bienestar, la calidez y la experiencia sensorial.',
        items: [
          {
            id: 'item-201',
            name: 'Artículo Confort 01',
            description: 'Diseño anatómico con texturas seleccionadas para proporcionar confort prolongado.',
            price: '$210.00',
            category: 'Línea Confort B',
            badge: 'Nuevo',
            images: [
              'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80&sat=-100',
            ],
            features: ['Regulación de tensión', 'Tapizado transpirable'],
            isAvailable: true,
          },
          {
            id: 'item-202',
            name: 'Artículo Confort 02',
            description: 'Modelo versátil ideal para configuraciones tanto residenciales como de oficina.',
            price: '$175.00',
            category: 'Línea Confort B',
            images: [
              'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80&sat=-100',
            ],
            features: ['Amortiguación progresiva', 'Bajo mantenimiento'],
            isAvailable: true,
          },
        ],
      },
    ],
  },
  {
    id: 'seccion-complementos',
    name: 'Servicios & Complementos',
    categories: [
      {
        id: 'cat-servicios',
        name: 'Servicios Especializados',
        description: 'Prestaciones complementarias para potenciar y respaldar tu inversión.',
        items: [
          {
            id: 'item-301',
            name: 'Asesoría y Diagnóstico',
            description: 'Evaluación técnica presencial o remota para dimensionar requerimientos precisos.',
            price: '$80.00 / hr',
            category: 'Servicios Especializados',
            images: [
              'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80&sat=-100',
            ],
            features: ['Informe ejecutivo', 'Recomendaciones a medida'],
            isAvailable: true,
          },
          {
            id: 'item-302',
            name: 'Mantenimiento Preventivo',
            description: 'Programa periódico de inspección, calibración y limpieza de sistemas.',
            price: '$150.00',
            category: 'Servicios Especializados',
            images: [
              'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80&sat=-100',
            ],
            features: ['Revisión 12 puntos', 'Sustitución de consumibles'],
            isAvailable: true,
          },
        ],
      },
    ],
  },
];
