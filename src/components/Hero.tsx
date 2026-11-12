import React from 'react';
import { MessageCircle, Calculator, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenViability: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenViability }) => {
  const whatsappUrl = "https://wa.me/59164147526?text=Hola%20Plusvaly!%20Tengo%20un%20terreno%20y%20quisiera%20saber%20c%C3%B3mo%20convertirlo%20en%20un%20proyecto%20rentable.";

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Cinematic Scrim and Subtle Initial Scale Zoom */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1.01 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/aistudio/contemporary-architecture_20e59ba0.jpg"
          alt="Plusvaly Arquitectura Contemporánea y Construcción"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to guarantee high contrast for text over daytime architecture */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b162c]/95 via-[#0b162c]/85 to-[#0b162c]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c] via-[#0b162c]/50 to-[#0b162c]/30" />
        <div className="absolute inset-0 bg-[#081222]/30" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Main Headline with staggered entrance */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance"
          >
            Su terreno puede<br />
            convertirse en algo<br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#c8e626] inline-block drop-shadow-sm"
            >
              rentable.
            </motion.span>
          </motion.h1>

          {/* Value Proposition Description */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal max-w-xl"
          >
            Somos de las pocas constructoras en Bolivia que hace diseño arquitectónico completo, BIM e ingeniería de todas las especialidades{' '}
            <strong className="text-white font-bold underline decoration-[#c8e626] decoration-2 underline-offset-4">
              antes de poner el primer ladrillo
            </strong>. Sin improvisaciones. Sin sobrecostos.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            {/* Primary WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c8e626] text-black font-extrabold text-sm sm:text-base hover:bg-[#b5d31f] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#c8e626]/25 whitespace-nowrap cursor-pointer group"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-black stroke-black" />
              </div>
              <span>Conversemos por WhatsApp</span>
            </a>

            {/* Secondary Action: Viability Calculator */}
            <button
              onClick={onOpenViability}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all whitespace-nowrap cursor-pointer hover:border-[#c8e626]/50"
            >
              <Calculator className="w-4 h-4 text-[#c8e626]" />
              <span>Calcular Viabilidad de Terreno</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-slate-400 hover:text-white transition-colors cursor-pointer"
      >
        <a href="#estadisticas" className="flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest font-semibold">
          <span>Descubrir más</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c8e626]" />
        </a>
      </motion.div>
    </section>
  );
};
