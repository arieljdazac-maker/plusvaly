import React, { useState } from 'react';
import { Home, Building2, Store, FileText, Maximize2 } from 'lucide-react';
import { ProjectItem, PROJECTS_LIST } from '../data/projectsData';
import { motion } from 'motion/react';

interface ProjectTypesSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectTypesSection: React.FC<ProjectTypesSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    {
      id: 'cholets',
      label: 'Casa de Lujo y Cholets',
      icon: Home
    },
    {
      id: 'multifamiliares',
      label: 'Edificios Multifamiliares',
      icon: Building2
    },
    {
      id: 'comerciales',
      label: 'Edificios Comerciales',
      icon: Store
    },
    {
      id: 'desarrollos',
      label: 'Desarrollos Inmobiliarios',
      icon: FileText
    }
  ];

  return (
    <section id="proyectos" className="relative bg-[#0d1e38] text-white py-16 sm:py-20 border-t border-[#1c3358] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Block with Motion Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b border-[#1c345a]"
        >
          {/* Left Title and Copy */}
          <div className="max-w-xl">
            <span className="text-xs font-bold text-[#c8e626] uppercase tracking-wider block mb-2">
              Tipos de Proyecto
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Lo que construimos
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Cada proyecto es distinto. Pero todos parten del mismo proceso: diseño arquitectónico, BIM e ingeniería completa antes de obra.
            </p>
          </div>

          {/* Right Category Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setActiveCategory(activeCategory === cat.id ? 'todos' : cat.id)}
                  className="flex flex-col items-center text-center group transition-all cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${
                      isActive
                        ? 'border-[#c8e626] bg-[#c8e626]/15 text-[#c8e626] scale-105'
                        : 'border-slate-500/60 bg-[#091528] text-slate-300 group-hover:border-[#c8e626] group-hover:text-[#c8e626]'
                    }`}
                  >
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 mt-2.5 max-w-[120px] leading-snug group-hover:text-white">
                    {cat.label}
                  </span>
                  {/* Yellow active underline */}
                  <span
                    className={`h-0.5 bg-[#c8e626] mt-2 transition-all ${
                      isActive ? 'w-8' : 'w-0 group-hover:w-4'
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Bento Gallery Collage with Staggered Entrance */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: 2 stacked cards (md:col-span-4) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {/* Card 1: Casa con piscina */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                const p = PROJECTS_LIST.find((item) => item.id === 'vivienda-residencial-la-paz') || PROJECTS_LIST[1];
                onSelectProject(p);
              }}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-900 border border-[#1e3a66] cursor-pointer shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src="/assets/images/collage_casa_piscina.jpg"
                alt="Casa de lujo con piscina"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#c8e626] tracking-wider block">Casa de Lujo</span>
                  <span className="text-sm font-bold text-white">Vivienda con Piscina Infinity</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Costa torres */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                const p = PROJECTS_LIST.find((item) => item.id === 'torre-curva') || PROJECTS_LIST[5];
                onSelectProject(p);
              }}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-900 border border-[#1e3a66] cursor-pointer shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src="/assets/images/collage_costa_torres.jpg"
                alt="Torres modernas waterfront"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#c8e626] tracking-wider block">Desarrollo Urbano</span>
                  <span className="text-sm font-bold text-white">Complejo Torres Panorámicas</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center Column: Tall centerpiece card (md:col-span-4) */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                const p = PROJECTS_LIST.find((item) => item.id === 'pabellon-futurista') || PROJECTS_LIST[7];
                onSelectProject(p);
              }}
              className="group relative h-full min-h-[380px] md:min-h-[580px] rounded-xl overflow-hidden bg-slate-900 border border-[#1e3a66] cursor-pointer shadow-xl transition-transform hover:-translate-y-1 flex flex-col justify-end"
            >
              <img
                src="/assets/images/collage_centro_pabellon.jpg"
                alt="Pabellón Vanguardista La Paz"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526] via-transparent to-black/20" />

              {/* Exact Tag & Label */}
              <div className="relative z-10 p-6">
                <span className="inline-block bg-[#c8e626] text-black font-extrabold text-[11px] px-2.5 py-0.5 rounded shadow-sm mb-1.5 uppercase">
                  La Paz
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Vivienda Residencial
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Estructura portalada de hormigón arquitectónico y pórtico de cristal.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 2 stacked cards (md:col-span-4) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {/* Card 4: Residencia noche */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                const p = PROJECTS_LIST.find((item) => item.id === 'residencia-atardecer') || PROJECTS_LIST[8];
                onSelectProject(p);
              }}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-900 border border-[#1e3a66] cursor-pointer shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src="/assets/images/collage_residencia_noche.jpg"
                alt="Residencia geométrica de noche"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#c8e626] tracking-wider block">Casa de Lujo</span>
                  <span className="text-sm font-bold text-white">Vivienda Escultórica Nocturna</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>

            {/* Card 5: Torre mar */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                const p = PROJECTS_LIST.find((item) => item.id === 'residencia-aerea') || PROJECTS_LIST[6];
                onSelectProject(p);
              }}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-900 border border-[#1e3a66] cursor-pointer shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src="/assets/images/collage_torre_mar.jpg"
                alt="Edificio escalonado panorámico"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#c8e626] tracking-wider block">Desarrollos Inmobiliarios</span>
                  <span className="text-sm font-bold text-white">Torre Escalonada con Balcones</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
