import React from 'react';
import { CERTIFIED_BRANDS, GUARANTEES_DATA } from '../data/projectsData';
import { motion } from 'motion/react';

export const GuaranteesSection: React.FC = () => {
  return (
    <section id="garantias" className="relative bg-white text-slate-900 py-16 sm:py-20 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12"
        >
          <span className="text-xs font-bold text-[#0d213f] uppercase tracking-wider block mb-2">
            Compromisos Reales
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0d213f] mb-3">
            Lo que garantizamos.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            No son promesas de marketing. Son compromisos que respaldamos con proceso, proveedores verificados y equipo especializado.
          </p>
        </motion.div>

        {/* 6 Guarantee Cards with Staggered Entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {GUARANTEES_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#f0f4f9] border border-slate-200/80 hover:border-[#0d213f]/30 hover:bg-[#e8eff8] transition-all group shadow-sm hover:shadow-md"
            >
              {/* Rosette / Seal Ribbon Badge Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#1b3a6b] shadow-sm mb-3 group-hover:scale-105 transition-transform border border-slate-100">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#1a3868]" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M8.21 13.89L7 22L12 19L17 22L15.79 13.88" />
                  <path d="M10 8L11.5 9.5L14.5 6.5" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-bold text-[#0d213f] leading-snug mb-1.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] text-slate-500 leading-normal line-clamp-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certified Materials Brand Logos Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-slate-200"
        >
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold text-slate-400 tracking-[0.25em] uppercase">
              Materiales de marcas certificadas
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 text-slate-500 font-extrabold text-xs sm:text-sm tracking-wider">
            {CERTIFIED_BRANDS.map((brand, idx) => (
              <div
                key={brand.name}
                className="flex items-center gap-6 sm:gap-10 lg:gap-14 group"
              >
                <div className="hover:text-[#0d213f] transition-colors py-1 cursor-default">
                  <span className="tracking-widest font-black text-slate-600 group-hover:text-[#0d213f]">
                    {brand.name}
                  </span>
                </div>
                {idx < CERTIFIED_BRANDS.length - 1 && (
                  <span className="hidden sm:inline text-slate-300 font-light select-none">
                    |
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
