import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';

export const PrecisionServices = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-20 px-4 md:px-16 max-w-screen-2xl mx-auto" id="services">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1c1b1b] mb-4">
          Precision Services
        </h2>
        <div className="w-20 h-2 bg-[#ffd700] mb-6"></div>
        <p className="text-[#4d4732] max-w-2xl text-base md:text-lg">
          We combine cutting-edge software architecture with custom AI models to engineer bulletproof digital platforms.
        </p>
      </div>

      {/* Grid of 4 Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="p-8 bg-[#fcf9f8] border border-[#d0c6ab]/40 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-[#ffd700] flex items-center justify-center mb-6 rounded-xs group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[#705e00] text-2xl">
                  {service.icon}
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-extrabold text-[#1c1b1b] group-hover:text-[#705d00] transition-colors">
                  {service.title}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffd700]/20 text-[#705e00] px-2 py-0.5 rounded">
                  {service.badge}
                </span>
              </div>

              <p className="text-[#4d4732] text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
              <span className="text-xs font-bold text-[#705d00]">
                From {service.startingPrice}
              </span>
              <span className="text-xs font-extrabold text-[#1c1b1b] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-[#fcf9f8] border-2 border-[#1c1b1b] rounded-xl max-w-2xl w-full p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-[#1c1b1b] hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#ffd700] flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-[#705e00] text-2xl">
                  {selectedService.icon}
                </span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#705d00] bg-[#ffd700]/20 px-2 py-0.5 rounded">
                  {selectedService.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-[#1c1b1b]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-[#4d4732] text-base mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1c1b1b] mb-3">
                  Core Architectural Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#4d4732]">
                  {selectedService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffd700] text-lg font-bold">check_circle</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1c1b1b] mb-2">
                  Key Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.deliverables.map((deliv, idx) => (
                    <span key={idx} className="bg-white border border-[#d0c6ab] px-3 py-1 text-xs font-bold text-[#1c1b1b] rounded">
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-gray-200">
              <div>
                <span className="text-xs text-[#4d4732] block">Minimum Engagement</span>
                <span className="text-xl font-extrabold text-[#1c1b1b]">{selectedService.startingPrice}</span>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border border-[#1c1b1b] text-[#1c1b1b] font-bold text-xs uppercase rounded hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    if (onSelectServiceForQuote) {
                      onSelectServiceForQuote(title);
                    }
                  }}
                  className="px-6 py-3 bg-[#ffd700] text-[#705e00] font-extrabold text-xs uppercase rounded hover:brightness-105 transition-all cursor-pointer"
                >
                  Request {selectedService.title} Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
