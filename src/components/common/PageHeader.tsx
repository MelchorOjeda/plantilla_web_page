import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  bgImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80&sat=-100',
}) => {
  return (
    <header className="relative w-full min-h-[50vh] md:min-h-[58vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 bg-zinc-950">
      
      {/* Fondo con imagen monocromática y overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover filter grayscale contrast-125 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-900/60" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl flex flex-col items-center">
        
        {subtitle && (
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-zinc-400 mb-3 block">
            {subtitle}
          </span>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-4 text-zinc-100">
          {title}
        </h1>

        {description && (
          <>
            <div className="w-12 h-0.5 bg-zinc-600 my-4" />
            <p className="text-base sm:text-lg font-light text-zinc-300 max-w-2xl leading-relaxed">
              {description}
            </p>
          </>
        )}
      </div>

      {/* Divisor inferior curvado/angular suave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 100"
          className="relative block w-full h-[30px] sm:h-[50px] md:h-[65px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#fafafa"
            d="M0,40 C480,100 960,100 1440,40 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default PageHeader;
