import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#091528] border border-[#233f6b] text-xs text-white shadow-xl animate-fade-in">
          <span>¿Tiene un terreno? <strong>Escríbanos</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/59164147526?text=Hola%20Plusvaly!%20Quisiera%20consultar%20sobre%20un%20proyecto"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#c8e626] text-black flex items-center justify-center shadow-xl shadow-[#c8e626]/30 hover:bg-[#b5d31f] hover:scale-105 transition-all cursor-pointer group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-black stroke-black group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
