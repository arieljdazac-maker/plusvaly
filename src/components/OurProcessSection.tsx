import React, { useState } from 'react';
import { Home, Layers, CheckCircle2 } from 'lucide-react';
import { WORK_PHASES } from '../data/projectsData';
import { motion } from 'motion/react';

export const OurProcessSection: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  return (
    <section id="sobre-nosotros" className="relative bg-[#0b172a] text-white py-14 sm:py-16 border-t border-[#1c3358] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Section Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col xl:flex-row xl:items-center justify-between gap-8"
        >
          {/* Left Title and Subtitle */}
          <div className="max-w-md shrink-0">
            <span className="text-xs font-bold text-[#c8e626] uppercase tracking-wider block mb-1.5">
              Nuestra Diferencia
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
              Primero planificamos.<br />
              Luego construimos.
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              3 fases ordenadas que eliminan los imprevistos antes de que lleguen a obra.
            </p>
          </div>

          {/* Right 3 Phases */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
            {WORK_PHASES.map((item, idx) => {
              const isSelected = selectedPhase === idx;

              return (
                <motion.button
                  key={item.phase}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedPhase(idx)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all cursor-pointer group ${
                    isSelected
                      ? 'bg-[#0f2240] border-[#c8e626]/80 shadow-lg shadow-[#c8e626]/10'
                      : 'bg-[#091528]/80 border-[#1a3154] hover:border-slate-500'
                  }`}
                >
                  {/* Circular House Outline Icon */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border shrink-0 transition-all ${
                      isSelected
                        ? 'border-[#c8e626] bg-[#c8e626]/15 text-[#c8e626]'
                        : 'border-slate-500/70 bg-[#0c1a32] text-slate-300 group-hover:border-[#c8e626] group-hover:text-[#c8e626]'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.75">
                      <path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10.5Z" />
                      <path d="M9 21V13H15V21" />
                    </svg>
                  </div>

                  {/* Phase Label & Title */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold text-[#c8e626] uppercase tracking-wider block">
                      {item.phase}
                    </span>
                    <h3 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-slate-100">
                      {item.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Phase Details Drawer */}
        <motion.div 
          key={selectedPhase}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 p-6 rounded-2xl bg-[#091528] border border-[#1d375e]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#1b345b]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#c8e626] text-black font-extrabold text-xs">
                {WORK_PHASES[selectedPhase].phase}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {WORK_PHASES[selectedPhase].title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 italic">
              {WORK_PHASES[selectedPhase].summary}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {WORK_PHASES[selectedPhase].details.map((detail, dIdx) => (
              <div key={dIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0d1e38] border border-[#1b345b]/50">
                <CheckCircle2 className="w-4 h-4 text-[#c8e626] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-relaxed">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
