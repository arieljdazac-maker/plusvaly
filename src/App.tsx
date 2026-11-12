import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { ProjectTypesSection } from './components/ProjectTypesSection';
import { OurProcessSection } from './components/OurProcessSection';
import { FeatureTowerSection } from './components/FeatureTowerSection';
import { GuaranteesSection } from './components/GuaranteesSection';
import { TestimonialsGallery } from './components/TestimonialsGallery';
import { SelectedProjectsGrid } from './components/SelectedProjectsGrid';
import { TerrainCTASection } from './components/TerrainCTASection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ViabilityModal } from './components/ViabilityModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectItem } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isViabilityOpen, setIsViabilityOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0b162c] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Floating Navbar */}
      <Navbar onOpenViability={() => setIsViabilityOpen(true)} />

      {/* Main Page Flow matching user screenshots */}
      <main className="flex-grow">
        {/* 1. Hero Section (Screenshot 1) */}
        <Hero onOpenViability={() => setIsViabilityOpen(true)} />

        {/* 2. Key Metrics Bar (Screenshot 1) */}
        <StatsBanner />

        {/* 3. Tipos de Proyecto & Bento Gallery (Screenshot 2) */}
        <ProjectTypesSection onSelectProject={setSelectedProject} />

        {/* 4. Nuestra Diferencia / 3 Fases (Screenshot 2) */}
        <OurProcessSection />

        {/* 5. Full-width Architectural Showcase (Screenshot 3 top) */}
        <FeatureTowerSection onSelectProject={setSelectedProject} />

        {/* 6. Lo Que Garantizamos & Certificaciones (Screenshot 3 middle) */}
        <GuaranteesSection />

        {/* 7. Proyectos Seleccionados & Testimonial El Alto (Screenshot 3 bottom) */}
        <TestimonialsGallery 
          onSelectProject={setSelectedProject} 
          onOpenViability={() => setIsViabilityOpen(true)}
        />

        {/* 8. Proyectos Seleccionados Grid (Screenshot 1 bottom) */}
        <SelectedProjectsGrid onSelectProject={setSelectedProject} />

        {/* 9. ¿Tiene un terreno? Cuéntenos sobre él (Screenshot 4 top) */}
        <TerrainCTASection onOpenViability={() => setIsViabilityOpen(true)} />
      </main>

      {/* 10. Footer (Screenshot 4 bottom) */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Project Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenViability={() => setIsViabilityOpen(true)}
      />

      {/* Interactive Terrain Viability Calculator Modal */}
      <ViabilityModal
        isOpen={isViabilityOpen}
        onClose={() => setIsViabilityOpen(false)}
      />
    </div>
  );
}
