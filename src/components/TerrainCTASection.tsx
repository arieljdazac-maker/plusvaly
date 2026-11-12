import React from 'react';
import { MessageCircle, Phone, Mail, Clock, MapPin, Calculator } from 'lucide-react';
import { motion } from 'motion/react';

interface TerrainCTAProps {
  onOpenViability: () => void;
}

export const TerrainCTASection: React.FC<TerrainCTAProps> = ({ onOpenViability }) => {
  const whatsappUrl = "https://wa.me/59164147526?text=Hola%20Plusvaly!%20Tengo%20un%20terreno%20y%20quisiera%20saber%20si%20es%20viable%20sin%20costo%20ni%20compromiso.";

  return (
    <section id="contacto" className="relative bg-[#0d1e38] text-white pt-16 pb-12 sm:pt-20 sm:pb-16 border-t border-[#1c3358] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Action Row with Socials on Right */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
        >
          {/* Social Icons in desktop absolute top-right position matching Screenshot 4 */}
          <div className="flex items-center gap-4 sm:absolute sm:right-0 sm:top-2 mb-6 sm:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c8e626] hover:text-black flex items-center justify-center transition-all cursor-pointer"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c8e626] hover:text-black flex items-center justify-center transition-all cursor-pointer"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c8e626] hover:text-black flex items-center justify-center transition-all cursor-pointer"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
              </svg>
            </a>
          </div>

          {/* Main Question & Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            ¿Tiene un terreno?<br />
            <span className="text-[#c8e626]">Cuéntenos sobre él.</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mb-6">
            Escríbanos por WhatsApp, cuéntenos el tipo de proyecto y la ubicación del terreno. Le decimos si es viable sin costo ni compromiso.
          </p>

          {/* WhatsApp CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#c8e626] text-black font-extrabold text-sm sm:text-base hover:bg-[#b5d31f] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#c8e626]/20 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-black stroke-black" />
              <span>Conversemos por WhatsApp</span>
            </a>

            <button
              onClick={onOpenViability}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all cursor-pointer hover:border-[#c8e626]"
            >
              <Calculator className="w-4 h-4 text-[#c8e626]" />
              <span>Calcular Viabilidad Aquí</span>
            </button>
          </div>
        </motion.div>

        {/* 4 Contact Data Columns */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#1a3356] text-xs sm:text-sm text-slate-300"
        >
          {/* Phone */}
          <a
            href="tel:+59164147526"
            className="flex items-center gap-3 hover:text-white transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-[#091528] border border-[#1f3c66] flex items-center justify-center text-[#c8e626] shrink-0 group-hover:border-[#c8e626]">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-mono text-slate-200">+591 64147526</span>
          </a>

          {/* Email */}
          <a
            href="mailto:rquitectos@plusvaly.com"
            className="flex items-center gap-3 hover:text-white transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-[#091528] border border-[#1f3c66] flex items-center justify-center text-[#c8e626] shrink-0 group-hover:border-[#c8e626]">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-slate-200 truncate">rquitectos@plusvaly.com</span>
          </a>

          {/* History / Cities */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#091528] border border-[#1f3c66] flex items-center justify-center text-[#c8e626] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-slate-200">Desde 2020 · La Paz, El Alto, Oruro</span>
          </div>

          {/* Office Address */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#091528] border border-[#1f3c66] flex items-center justify-center text-[#c8e626] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-slate-200 leading-snug">
              Edif. Cámara Nacional de Comercio, Mezzanine Of. 1 — La Paz
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
