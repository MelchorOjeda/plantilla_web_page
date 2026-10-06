import React from 'react';
import { siteConfig } from '../../config/siteConfig';

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', isLight = false }) => {
  const textColor = isLight ? 'text-white' : 'text-zinc-900';
  const subColor = isLight ? 'text-zinc-400' : 'text-zinc-500';
  const iconBorder = isLight ? 'border-zinc-700 bg-zinc-800 text-zinc-100' : 'border-zinc-300 bg-zinc-900 text-white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Isotipo geométrico neutral y moderno */}
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm tracking-wider shadow-sm border ${iconBorder}`}>
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      </div>

      {/* Nombre y subtítulo */}
      <div className="flex flex-col text-left leading-none">
        <span className={`font-bold tracking-wider text-base sm:text-lg font-mono uppercase ${textColor}`}>
          {siteConfig.shortName}
        </span>
        <span className={`text-[10px] tracking-widest uppercase mt-0.5 font-sans ${subColor}`}>
          PLATAFORMA BASE
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;
