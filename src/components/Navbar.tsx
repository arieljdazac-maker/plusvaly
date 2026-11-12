import React, { useState, useEffect } from 'react';
import { PlusvalyLogo } from './PlusvalyLogo';
import { Menu, X, MessageCircle, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenViability: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenViability }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section on scroll
      const scrollPos = window.scrollY + 200;
      const sobreNosotrosEl = document.getElementById('sobre-nosotros');
      const proyectosEl = document.getElementById('proyectos');

      if (sobreNosotrosEl && scrollPos >= sobreNosotrosEl.offsetTop) {
        setActiveSection('SOBRE NOSOTROS');
      } else if (proyectosEl && scrollPos >= proyectosEl.offsetTop) {
        setActiveSection('PROYECTOS');
      } else {
        setActiveSection('HOME');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PROYECTOS', href: '#proyectos' },
    { label: 'SOBRE NOSOTROS', href: '#sobre-nosotros' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#" className="flex items-center gap-2 group transition-transform hover:opacity-95">
          <PlusvalyLogo variant="full" />
        </a>

        {/* Center Floating Pill Navigation with Animated Expanding Underline */}
        <nav 
          onMouseLeave={() => setHoveredLink(null)}
          className="hidden md:flex items-center gap-1 bg-[#091528]/85 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-lg shadow-black/30"
        >
          <div className="mr-3 pl-1">
            <PlusvalyLogo variant="icon" className="w-5 h-5 scale-90" />
          </div>

          <div className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isHovered = hoveredLink === link.label;
              const isActive = activeSection === link.label && hoveredLink === null;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`group relative text-xs font-bold tracking-wider py-1.5 uppercase whitespace-nowrap transition-colors duration-200 ${
                    isHovered || isActive ? 'text-[#c8e626]' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Animated line that appears and grows from 0 to 100% every time the cursor hovers or moves between options */}
                  <span
                    className={`absolute -bottom-0.5 left-0 right-0 h-[2.5px] bg-[#c8e626] rounded-full shadow-[0_0_12px_rgba(200,230,38,0.8)] transition-all duration-300 ease-out origin-center pointer-events-none ${
                      isHovered
                        ? 'scale-x-100 opacity-100'
                        : isActive
                        ? 'scale-x-50 opacity-60'
                        : 'scale-x-0 opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right CTA / Action */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenViability}
            className="px-4 py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-sm hover:border-[#c8e626]/50"
          >
            <Calculator className="w-3.5 h-3.5 text-[#c8e626]" />
            <span>Evaluar Terreno</span>
          </button>

          <a
            href="https://wa.me/59164147526?text=Hola%20Plusvaly,%20quisiera%20consultar%20sobre%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold text-black bg-[#c8e626] hover:bg-[#b5d31f] rounded-full transition-all flex items-center gap-1.5 shadow-md shadow-[#c8e626]/20"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white bg-[#091528]/80 border border-white/10 rounded-xl backdrop-blur-md"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 bg-[#091528]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl space-y-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group relative text-sm font-bold tracking-wider text-slate-200 hover:text-[#c8e626] py-1 transition-colors flex flex-col"
              >
                <span>{link.label}</span>
                {/* Mobile animated underline on touch/hover */}
                <span className="w-0 h-[2px] bg-[#c8e626] transition-all duration-300 group-hover:w-16 mt-0.5 rounded-full" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenViability();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-white/10 rounded-xl flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#c8e626]" />
              <span>Evaluar Mi Terreno</span>
            </button>

            <a
              href="https://wa.me/59164147526?text=Hola%20Plusvaly,%20quisiera%20consultar%20sobre%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-xs font-bold text-black bg-[#c8e626] rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Conversemos por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
