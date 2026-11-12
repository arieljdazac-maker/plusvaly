import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { motion } from 'motion/react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      numeric: 600,
      hasPlus: true,
      title: 'Proyectos de diseño',
      subtitle: 'arquitectónico'
    },
    {
      numeric: 150,
      hasPlus: true,
      title: 'Proyectos de diseño',
      subtitle: 'de interior'
    },
    {
      numeric: 20,
      hasPlus: false,
      title: 'Obras ejecutadas',
      subtitle: 'llave en mano y más'
    },
    {
      numeric: 4,
      hasPlus: false,
      title: 'Ciudades activas:',
      subtitle: 'La Paz · El Alto · Oruro · Bermejo'
    }
  ];

  return (
    <section id="estadisticas" className="relative z-20 bg-white text-slate-900 shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col items-center text-center px-4 py-4 sm:py-0 ${
                idx % 2 === 1 ? 'sm:border-l sm:border-slate-200' : ''
              }`}
            >
              {/* Counter with exact 3-second (3000ms) animation starting from 0 */}
              <div className="flex items-baseline justify-center font-black text-4xl sm:text-5xl lg:text-6xl text-[#0d213f] tracking-tight font-mono tabular-nums leading-none mb-3">
                <AnimatedCounter
                  end={stat.numeric}
                  duration={3000} // 3 seconds counting animation
                  className="inline-block"
                />
                {stat.hasPlus && (
                  <span className="text-[#9ab912] font-black text-3xl sm:text-4xl ml-1 select-none">+</span>
                )}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                <p>{stat.title}</p>
                <p className={stat.numeric === 4 ? 'font-semibold text-slate-700 mt-0.5' : ''}>
                  {stat.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
