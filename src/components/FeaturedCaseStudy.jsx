import React from 'react';
import { CASE_STUDIES_DATA } from '../data/mockData';

export const FeaturedCaseStudy = ({ onSelectCaseStudy }) => {
  const cafeStudy = CASE_STUDIES_DATA.find(c => c.id === 'cafe-management-os') || CASE_STUDIES_DATA[0];

  return (
    <section className="bg-[#ffffff] py-20 border-y border-[#d0c6ab]/20">
      <div className="px-4 md:px-16 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Card & Metrics */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#eae7e7] rounded-2xl overflow-hidden p-6 md:p-8 shadow-lg border border-[#d0c6ab]/30 relative group">
              <div 
                onClick={() => onSelectCaseStudy(cafeStudy)}
                className="w-full aspect-video rounded-xl overflow-hidden shadow-xl mb-6 relative cursor-pointer"
              >
                <img
                  src={cafeStudy.tabletImage || cafeStudy.image}
                  alt="Cafe Management System Case Study Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 border-b-4 border-[#ffd700] rounded-lg shadow-xs">
                  <span className="block text-3xl md:text-4xl font-black text-[#705d00]">45%</span>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#4d4732]">
                    Faster Order Prep
                  </span>
                </div>
                <div className="bg-white p-5 border-b-4 border-[#ffd700] rounded-lg shadow-xs">
                  <span className="block text-3xl md:text-4xl font-black text-[#705d00]">250+</span>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#4d4732]">
                    Active Outlets
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#705d00] bg-[#ffd700]/30 px-3 py-1 rounded inline-block">
              Featured Case Study
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c1b1b] leading-tight tracking-tight">
              Cafe Management System: Speed & Precision
            </h2>

            <p className="text-[#4d4732] text-base md:text-lg leading-relaxed">
              When modern cafes face peak rush hours, traditional billing systems and manual tokens slow down order fulfillment. We built an all-in-one Cafe Management OS with contactless QR ordering, sub-second POS billing, live kitchen sync, and automated inventory management.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {cafeStudy.techStack.map((tech, idx) => (
                <span key={idx} className="bg-[#f6f3f2] border border-[#d0c6ab]/50 text-[#1c1b1b] font-bold text-xs px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectCaseStudy(cafeStudy)}
                className="border-2 border-[#1c1b1b] text-[#1c1b1b] px-8 py-4 rounded-lg font-extrabold text-base hover:bg-[#ffd700] hover:text-[#705e00] hover:border-[#ffd700] transition-all flex items-center gap-2 group shadow-sm cursor-pointer"
              >
                <span>View Full Case Study</span>
                <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
