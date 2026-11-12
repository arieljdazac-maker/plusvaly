import React from 'react';
import { Maximize2, ArrowRight } from 'lucide-react';
import { ProjectItem, PROJECTS_LIST } from '../data/projectsData';
import { motion } from 'motion/react';

interface TestimonialsGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenViability: () => void;
}

export const TestimonialsGallery: React.FC<TestimonialsGalleryProps> = ({ onSelectProject, onOpenViability }) => {
  const cards = [
    {
      project: PROJECTS_LIST[0],
      image: '/assets/images/testimonial_edificio_elalto.jpg',
      hasQuote: true,
      quote: 'Teníamos el terreno parado hace años. Plusvaly nos hizo el diseño, el BIM completo y arrancamos obra. Ahora el edificio ya genera renta todos los meses.',
      author: 'Familia Choque',
      detail: 'Edificio Familiar - El Alto'
    },
    {
      project: PROJECTS_LIST[2],
      image: '/assets/images/testimonial_residencia_palmeras.jpg',
      tag: 'Bermejo / Santa Cruz',
      title: 'Villa Exclusiva & Piscina',
      desc: 'Diseño arquitectónico con galerías bioclimáticas y piscina templada.'
    },
    {
      project: PROJECTS_LIST[3],
      image: '/assets/images/testimonial_residencia_coches.jpg',
      tag: 'La Paz - Zona Sur',
      title: 'Residencia Volumétrica Privada',
      desc: 'Muro cortina en cristal, garaje doble y acabados en piedra laja.'
    }
  ];

  return (
    <section className="relative bg-[#0d1e38] text-white py-14 sm:py-18 border-b border-[#1c3358] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Ver proyectos seleccionados
          </h2>

          <button
            onClick={onOpenViability}
            className="text-xs font-bold text-[#c8e626] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>Consulte por un proyecto en su terreno</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* 3 Project Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(item.project)}
              className="group relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden bg-slate-900 border border-[#1e3a66] cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#c8e626]/50 flex flex-col justify-end"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Zoom Affordance Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Content on card */}
              <div className="relative z-10 p-6">
                {item.hasQuote ? (
                  <div className="space-y-3">
                    <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed italic">
                      "{item.quote}"
                    </p>
                    <div className="pt-2 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#c8e626]" />
                        <span className="font-extrabold text-sm text-[#c8e626]">
                          {item.author}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-medium pl-4">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {item.tag && (
                      <span className="inline-block bg-[#c8e626] text-black font-extrabold text-[10px] px-2 py-0.5 rounded uppercase">
                        {item.tag}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
