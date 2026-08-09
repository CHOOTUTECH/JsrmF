import React from 'react';

export const CaseStudyDetailModal = ({
  study,
  onClose,
  onOpenInquiry
}) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-[#fcf9f8] border-2 border-[#1c1b1b] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white border border-[#1c1b1b] text-[#1c1b1b] rounded-full hover:bg-[#ffd700] hover:text-[#705e00] transition-colors shadow-sm z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined font-bold">close</span>
        </button>

        {/* Modal Category Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#ffd700] text-[#705e00] text-xs font-black uppercase px-3 py-1 rounded shadow-xs tracking-wider">
            {study.badge}
          </span>
          <span className="text-xs font-bold uppercase text-[#705d00] tracking-widest">
            {study.categoryLabel}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1b1b] mb-2 tracking-tight">
          {study.title}
        </h2>
        <p className="text-base md:text-lg text-[#4d4732] mb-8 font-medium">
          {study.subtitle}
        </p>

        {/* Image Showcase */}
        <div className="rounded-xl overflow-hidden mb-8 border border-[#d0c6ab]/50 shadow-md max-h-96">
          <img
            src={study.tabletImage || study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="bg-white p-5 border-2 border-[#ffd700] rounded-xl text-center shadow-xs">
              <span className="block text-3xl md:text-4xl font-black text-[#705d00] mb-1">
                {metric.value}
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#4d4732]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl border border-red-200 shadow-xs">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-red-600 mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">warning</span>
              The Engineering Challenge
            </h3>
            <p className="text-sm text-[#4d4732] leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-emerald-200 shadow-xs">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              The JSRM Labs Solution
            </h3>
            <p className="text-sm text-[#4d4732] leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Client Quote */}
        {study.clientQuote && (
          <div className="bg-[#1c1b1b] text-white p-6 rounded-xl mb-8 relative">
            <p className="text-sm italic font-serif leading-relaxed mb-4 text-gray-200">
              "{study.clientQuote.text}"
            </p>
            <div className="text-xs">
              <span className="font-extrabold text-[#ffd700] block">{study.clientQuote.author}</span>
              <span className="text-gray-400">{study.clientQuote.role}</span>
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1c1b1b] mb-3">
            Technology Stack & Architecture
          </h4>
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech, idx) => (
              <span key={idx} className="bg-white border border-[#d0c6ab] px-3 py-1 text-xs font-bold text-[#1c1b1b] rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Modal Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 border border-[#1c1b1b] text-[#1c1b1b] font-bold text-xs uppercase rounded hover:bg-gray-200 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry(study.title);
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#ffd700] text-[#705e00] font-extrabold text-xs uppercase rounded shadow-sm hover:brightness-105 cursor-pointer"
          >
            Engineer Similar Architecture
          </button>
        </div>
      </div>
    </div>
  );
};
