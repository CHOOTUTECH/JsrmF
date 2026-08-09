import React from 'react';
import { MAP_FOOTER_IMAGE } from '../data/mockData';

export const Footer = ({
  setActiveView,
  onOpenInquiry
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1b1b] text-white pt-16 pb-12 border-t-4 border-[#ffd700]">
      <div className="px-4 md:px-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-extrabold text-2xl tracking-tighter text-white flex items-center gap-2">
              <span className="bg-[#ffd700] text-[#705e00] text-xs px-2 py-0.5 rounded font-black tracking-widest">
                LABS
              </span>
              <span>JSRM Labs</span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Next-Gen Software Lab engineering AI automation, web systems, custom software, and mobile apps with precision.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-gray-300 font-mono text-[11px]">100% Operational</span>
              </div>
              <span className="text-gray-500 font-mono text-[11px]">v1.0.4-lab</span>
            </div>
          </div>

          {/* Nav Col 1: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#ffd700]">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><button onClick={() => setActiveView('services')} className="hover:text-white transition-colors cursor-pointer">AI Automation</button></li>
              <li><button onClick={() => setActiveView('services')} className="hover:text-white transition-colors cursor-pointer">Web Systems</button></li>
              <li><button onClick={() => setActiveView('services')} className="hover:text-white transition-colors cursor-pointer">Custom Software</button></li>
              <li><button onClick={() => setActiveView('services')} className="hover:text-white transition-colors cursor-pointer">Mobile First</button></li>
            </ul>
          </div>

          {/* Nav Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#ffd700]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><button onClick={() => setActiveView('portfolio')} className="hover:text-white transition-colors cursor-pointer">Case Studies</button></li>
              <li><button onClick={() => setActiveView('process')} className="hover:text-white transition-colors cursor-pointer">Engineering Process</button></li>
              <li><button onClick={() => setActiveView('pricing')} className="hover:text-white transition-colors cursor-pointer">Investment Tiers</button></li>
            </ul>
          </div>

          {/* Map / Location Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#ffd700]">
              Global Headquarters
            </h4>
            <p className="text-xs text-gray-300">
              San Francisco, CA • Distributed High-Performance Remote Lab
            </p>

            <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-3/1 bg-gray-900 group">
              <img
                src={MAP_FOOTER_IMAGE}
                alt="San Francisco Engineering Lab Location Map"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2.5">
                <span className="text-[10px] text-gray-300 font-mono flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#ffd700]">location_on</span>
                  <span>SF HQ & Edge Nodes Online</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© {currentYear} JSRM Labs. All rights reserved.</p>

          <div className="flex gap-6">
            <button onClick={() => onOpenInquiry()} className="hover:text-[#ffd700] transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => onOpenInquiry()} className="hover:text-[#ffd700] transition-colors cursor-pointer">
              Terms of Engineering
            </button>
            <button onClick={() => onOpenInquiry()} className="hover:text-[#ffd700] transition-colors cursor-pointer">
              Client Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
