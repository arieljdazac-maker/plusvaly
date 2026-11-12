import React from 'react';
import { Maximize2 } from 'lucide-react';
import { ProjectItem, PROJECTS_LIST } from '../data/projectsData';
import { motion } from 'motion/react';

interface SelectedProjectsGridProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedProjectsGrid: React.FC<SelectedProjectsGridProps> = ({ onSelectProject }) => {
  const row1 = [
    {
      project: PROJECTS_LIST.find(p => p.id === 'vivienda-residencial-la-paz') || PROJECTS_LIST[1],
      image: '/assets/images/proj_vivienda_residencial_lapaz.jpg',
      tag: 'La Paz',
      title: 'Vivienda Residencial'
    },
    {
      project: PROJECTS_LIST.find(p => p.id === 'torre-curva') || PROJECTS_LIST[5],
      image: '/assets/images/proj_torre_curva.jpg',
      tag: 'La Paz',
      title: 'Torre Residencial Curva'
    },
    {
      project: PROJECTS_LIST.find(p => p.id === 'residencia-aerea') || PROJECTS_LIST[6],
      image: '/assets/images/proj_residencia_aerea.jpg',
      tag: 'Diseño Paisajístico',
      title: 'Residencia Esculpida Tropical'
    }
  ];

  const row2 = [
    {
      project: PROJECTS_LIST.find(p => p.id === 'pabellon-futurista') || PROJECTS_LIST[7],
      image: '/assets/images/proj_pabellon_futurista.jpg',
      tag: 'La Paz',
      title: 'Pabellón Vanguardista & Vivienda'
    },
    {
      project: PROJECTS_LIST.find(p => p.id === 'residencia-atardecer') || PROJECTS_LIST[8],
      image: '/assets/images/proj_residencia_atardecer.jpg',
      tag: 'Zona Sur - La Paz',
      title: 'Mansión Mirador al Atardecer'
    }
  ];

  return (
    <section className="relative bg-[#091528] text-white py-12 sm:py-16 border-t border-[#193256] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-2xl font-black text-white tracking-tight mb-8"
        >
          Ver proyectos seleccionados
        </motion.h2>

        {/* Row 1: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {row1.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(item.project)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-900 border border-[#1d3864] cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#c8e626]/50 flex flex-col justify-end"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="relative z-10 p-5">
                {item.tag && (
                  <span className="inline-block bg-[#c8e626] text-black font-extrabold text-[10px] px-2 py-0.5 rounded uppercase mb-1">
                    {item.tag}
                  </span>
                )}
                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: 2 columns */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {row2.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(item.project)}
              className="group relative h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-900 border border-[#1d3864] cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#c8e626]/50 flex flex-col justify-end"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="relative z-10 p-6">
                {item.tag && (
                  <span className="inline-block bg-[#c8e626] text-black font-extrabold text-[10px] px-2 py-0.5 rounded uppercase mb-1.5">
                    {item.tag}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
