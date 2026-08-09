import React from 'react';
import { HERO_MOCKUP_IMAGE } from '../data/mockData';

export const HeroSection = ({
  onStartBuilding
}) => {
  return (
    <section className="relative min-h-[760px] flex items-center pt-12 pb-20 px-4 md:px-16 max-w-screen-2xl mx-auto overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#ffd700]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffd700]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10 w-full">
        {/* Left Headline Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ffd700]/20 text-[#705e00] px-4 py-1.5 rounded-full border border-[#ffd700] shadow-xs">
            <span className="material-symbols-outlined text-sm font-black">bolt</span>
            <span className="text-xs font-bold uppercase tracking-widest">Next-Gen Software Lab</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-[#1c1b1b]">
            Build <span className="bg-[#ffd700] px-2 py-0.5 inline-block rounded-xs text-[#1c1b1b]">Smarter</span> Businesses with Modern Software
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#4d4732] max-w-2xl font-normal leading-relaxed">
            We bridge the gap between complex software logic and intuitive user experiences. Scalable, precise, and engineered for high-growth businesses.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onStartBuilding}
              className="bg-[#ffd700] text-[#705e00] font-extrabold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#ffd700]/20 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Building Now</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>

          {/* Trust stats quick strip */}
          <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#4d4732]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>4-6 Week Launch</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#705d00]">verified</span>
              <span>99.9% Latency Optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#705d00]">shield</span>
              <span>100% IP Ownership</span>
            </div>
          </div>
        </div>

        {/* Right Dashboard Mockup Column */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-[#fcf9f8] rounded-xl p-3 shadow-xl border border-[#d0c6ab]/40 transition-all duration-500 group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={HERO_MOCKUP_IMAGE}
                alt="JSRM Labs Cafe Management System Showcase"
                className="w-full h-auto rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-xs font-mono font-bold bg-[#1c1b1b]/80 px-3 py-1.5 rounded border border-[#ffd700]/40">
                  Cafe Management System & POS v1.0.4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
