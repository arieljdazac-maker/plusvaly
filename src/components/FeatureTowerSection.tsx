import React, { useState } from 'react';
import { Layers, ShieldCheck, Eye, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';
import { motion } from 'motion/react';

interface FeatureTowerSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeatureTowerSection: React.FC<FeatureTowerSectionProps> = ({ onSelectProject }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'rooftop',
      top: '12%',
      left: '52%',
      title: 'Terraza & Solarium Lounge',
      desc: 'Área social común con vista panorámica 360°, quincho techado y jardinería xerófila andina.'
    },
    {
      id: 'balcones',
      top: '42%',
      left: '48%',
      title: 'Balcones de Vidrio Templado Laminado',
      desc: 'Carpintería de aluminio anodizado con doble acristalamiento hermético (DVH) para máximo confort térmico.'
    },
    {
      id: 'fachada',
      top: '64%',
      left: '56%',
      title: 'Revestimiento Cerámico & Hormigón Visto',
      desc: 'Materiales nobles de bajo mantenimiento y alta durabilidad contra la radiación UV del altiplano.'
    },
    {
      id: 'acceso',
      top: '88%',
      left: '50%',
      title: 'Planta Baja Comercial & Acceso Vehicular',
      desc: 'Estructura sismo-resistente postensada que permite grandes luces libres sin columnas invasivas.'
    }
  ];

  return (
    <section className="relative w-full bg-[#0a1526] overflow-hidden border-y border-[#182e4e]">
      {/* High-Resolution Architectural Banner with Motion Fade-in */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[450px] sm:h-[580px] lg:h-[720px] max-w-[1700px] mx-auto"
      >
        <img
          src="/assets/images/torre_multifamiliar_banner.jpg"
          alt="Edificio Multifamiliar Plusvaly"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526] via-transparent to-[#0a1526]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1526]/50 via-transparent to-[#0a1526]/50 pointer-events-none" />

        {/* Architectural Hotspots on the building */}
        <div className="hidden sm:block">
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              style={{ top: spot.top, left: spot.left }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group"
            >
              <button
                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#c8e626] text-black font-bold shadow-lg shadow-black/50 transition-transform group-hover:scale-110 cursor-pointer"
                aria-label={spot.title}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping absolute opacity-40" />
                <span className="text-xs">+</span>
              </button>

              {/* Tooltip on hover or active */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-3 rounded-xl bg-[#091528]/95 backdrop-blur-md border border-[#c8e626]/40 shadow-2xl transition-all ${
                  activeHotspot === spot.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100'
                }`}
              >
                <div className="text-[10px] font-bold text-[#c8e626] uppercase tracking-wider mb-1">
                  Detalle Constructivo
                </div>
                <h4 className="text-xs font-bold text-white mb-1">{spot.title}</h4>
                <p className="text-[11px] text-slate-300 leading-snug">{spot.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-6 left-6 sm:left-12 max-w-xl z-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#091528]/90 border border-white/15 backdrop-blur-md mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#c8e626]" />
            <span className="text-xs font-medium text-slate-200">
              Modelado BIM 100% · Cero Imprevistos en Obra
            </span>
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
            Edificio Residencial & Comercial
          </h3>
          <p className="text-xs sm:text-sm text-slate-200/90 mt-1 max-w-md drop-shadow-sm">
            Diseñado y optimizado para generar alta rentabilidad por metro cuadrado con estándares sísmicos y bioclimáticos.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
