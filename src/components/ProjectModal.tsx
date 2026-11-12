import React from 'react';
import { X, MapPin, Maximize2, Check, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenViability: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenViability }) => {
  if (!project) return null;

  const handleWhatsAppInquiry = () => {
    const text = `¡Hola Plusvaly! Vi en su página el proyecto "${project.title}" (${project.location}). Me interesa hacer un proyecto similar en mi terreno. ¿Podrían brindarme información sobre los costos y el proceso BIM?`;
    window.open(`https://wa.me/59164147526?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0d1e38] border border-[#233f6b] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto">
          {/* Main Visual */}
          <div className="relative w-full h-80 sm:h-96 md:h-[450px] bg-slate-950 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e38] via-transparent to-black/30 pointer-events-none" />

            {/* Badges on image */}
            <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="inline-block bg-[#c8e626] text-black font-extrabold text-xs px-2.5 py-1 rounded shadow-sm mb-2">
                  {project.location.split(',')[0]}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 border-b border-[#1c3358] pb-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#c8e626]" />
                <span>{project.location}</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{project.year || '2025'}</span>
              </div>
              {project.area && (
                <>
                  <span className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5 font-mono text-[#c8e626]">
                    <span>{project.area} de construcción</span>
                  </div>
                </>
              )}
            </div>

            {/* Testimonial callout if exists */}
            {project.testimonial && (
              <div className="p-4 rounded-xl bg-[#091528] border border-[#233f6b]/80 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#c8e626]" />
                <p className="text-sm italic text-slate-200 leading-relaxed pl-2">
                  "{project.testimonial.quote}"
                </p>
                <div className="mt-2 pl-2 text-xs">
                  <span className="font-bold text-[#c8e626]">{project.testimonial.author}</span>
                  <span className="text-slate-400"> — {project.testimonial.detail}</span>
                </div>
              </div>
            )}

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>

            {/* Architectural & Engineering Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#c8e626] mb-3">
                Especificaciones de Ingeniería & Diseño
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-[#c8e626]/20 text-[#c8e626] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#1c3358] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenViability();
                }}
                className="w-full sm:w-auto text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>¿Tiene un terreno para un proyecto así? Evalúe la viabilidad</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c8e626]" />
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#c8e626] text-black font-bold text-sm hover:bg-[#b5d31f] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#c8e626]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
