import React from 'react';
import { TECH_STACK } from '../data/mockData';

export const TechEcosystem = () => {
  return (
    <section className="bg-[#f6f3f2] py-12 border-y border-[#d0c6ab]/20">
      <div className="px-4 md:px-16 max-w-screen-2xl mx-auto">
        <p className="text-xs text-center uppercase tracking-[0.3em] font-extrabold text-[#4d4732] mb-8">
          TRUSTED TECH ECOSYSTEM
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all cursor-pointer group py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm"
            >
              <span className="material-symbols-outlined text-[#705d00] text-xl group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <span className="font-extrabold text-xl md:text-2xl tracking-tighter text-[#1c1b1b]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
