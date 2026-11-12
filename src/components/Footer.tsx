import React from 'react';
import { PlusvalyLogo } from './PlusvalyLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050911] text-slate-400 py-10 px-6 sm:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Logo matching Screenshot 4 */}
        <div className="flex items-center">
          <PlusvalyLogo variant="full" light={true} />
        </div>

        {/* Center: Cities & Copyright matching Screenshot 4 */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right text-xs space-y-1">
          <p className="font-semibold text-slate-300 tracking-wider">
            La paz · El Alto · Oruro · Bermejo
          </p>
          <p className="text-slate-400">
            © 2026 Plusvaly Diseño y Construcción · Todos los derechos reservados · Bolivia
          </p>
        </div>
      </div>
    </footer>
  );
};
