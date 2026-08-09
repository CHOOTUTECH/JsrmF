import React, { useState } from 'react';
import { PRICING_TIERS_DATA } from '../data/mockData';

export const InvestmentTiers = ({
  onSelectTier
}) => {
  const [calculatorActive, setCalculatorActive] = useState(false);
  const [projectComplexity, setProjectComplexity] = useState(2); // 1: MVP, 2: Growth, 3: Enterprise
  const [aiLevel, setAiLevel] = useState(true);
  const [devOpsSupport, setDevOpsSupport] = useState(false);

  // Quick interactive cost calculation in Indian Rupees (₹)
  const calculatedEstimate = React.useMemo(() => {
    let base = projectComplexity === 1 ? 150 : projectComplexity === 2 ? 45 : 10;
    if (aiLevel) base += 50000;
    if (devOpsSupport) base += 30000;
    return base;
  }, [projectComplexity, aiLevel, devOpsSupport]);

  return (
    <section className="py-20 px-4 md:px-16 max-w-screen-2xl mx-auto" id="pricing">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#705d00] bg-[#ffd700]/30 px-3 py-1 rounded mb-3 inline-block">
          Predictable Pricing
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1c1b1b] mb-4 tracking-tight">
          Investment Tiers
        </h2>
        <p className="text-[#4d4732] max-w-xl mx-auto text-base md:text-lg">
          Simple, transparent, and engineered for high-value return on investment.
        </p>

        {/* Toggle Calculator mode button */}
        <button
          onClick={() => setCalculatorActive(!calculatorActive)}
          className="mt-6 text-xs font-extrabold uppercase tracking-wider text-[#705d00] bg-white border border-[#ffd700] px-4 py-2 rounded-full hover:bg-[#ffd700] hover:text-[#705e00] transition-all inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">calculate</span>
          <span>{calculatorActive ? 'View Fixed Tiers' : 'Interactive Budget Estimator'}</span>
        </button>
      </div>

      {/* Interactive Quick Estimator Slider Bar (if active) */}
      {calculatorActive && (
        <div className="max-w-3xl mx-auto mb-16 bg-white border-2 border-[#1c1b1b] rounded-xl p-8 shadow-xl animate-in fade-in duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-extrabold text-[#1c1b1b] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffd700]">tune</span>
              <span>Tailored Budget & Timeline Calculator</span>
            </h3>
            <span className="text-2xl font-black text-[#705d00]">
              ₹{calculatedEstimate.toLocaleString('en-IN')}
              <span className="text-xs font-normal text-gray-500 block text-right">Estimated Project Fee</span>
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold uppercase text-[#1c1b1b] mb-2">
                <span>Scope Depth</span>
                <span>
                  {projectComplexity === 1 ? 'Targeted MVP (4 Wks)' : projectComplexity === 2 ? 'Full Scale SaaS (8 Wks)' : 'Enterprise Ecosystem (12+ Wks)'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="3"
                step="1"
                value={projectComplexity}
                onChange={(e) => setProjectComplexity(parseInt(e.target.value, 10))}
                className="w-full accent-[#ffd700] h-2 bg-gray-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={aiLevel}
                  onChange={(e) => setAiLevel(e.target.checked)}
                  className="w-4 h-4 accent-[#ffd700]"
                />
                <span className="text-xs font-bold text-[#1c1b1b]">Include AI Agent Workflows (+ ₹50k)</span>
              </label>

              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={devOpsSupport}
                  onChange={(e) => setDevOpsSupport(e.target.checked)}
                  className="w-4 h-4 accent-[#ffd700]"
                />
                <span className="text-xs font-bold text-[#1c1b1b]">Priority 24/7 SLA & DevOps (+ ₹30k)</span>
              </label>
            </div>

            <div className="flex justify-end items-center pt-4 border-t border-gray-100">
              <button
                onClick={() => onSelectTier(projectComplexity === 1 ? 'starter' : projectComplexity === 2 ? 'growth' : 'enterprise')}
                className="bg-[#ffd700] text-[#705e00] font-extrabold text-xs uppercase px-6 py-3 rounded-lg hover:brightness-105 cursor-pointer"
              >
                Proceed with this Scope
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {PRICING_TIERS_DATA.map((tier) => (
          <div
            key={tier.id}
            className={`p-10 transition-all duration-300 relative flex flex-col justify-between ${
              tier.highlighted
                ? 'border-4 border-[#ffd700] bg-white rounded-xl shadow-2xl lg:-translate-y-4 z-10'
                : 'border-2 border-[#1c1b1b]/10 bg-[#fcf9f8] rounded-lg shadow-sm hover:shadow-lg'
            }`}
          >
            {/* Featured Badge */}
            {tier.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffd700] text-[#705e00] px-6 py-1 font-extrabold text-xs uppercase tracking-widest shadow-xs">
                {tier.badge}
              </div>
            )}

            <div>
              <h3 className={`text-xs font-extrabold uppercase tracking-widest mb-4 ${
                tier.highlighted ? 'text-[#705d00]' : 'text-[#4d4732]'
              }`}>
                {tier.name}
              </h3>

              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-black text-[#1c1b1b]">
                  {tier.price}
                </span>
                <span className="text-[#4d4732] text-sm font-semibold ml-2">
                  {tier.period}
                </span>
              </div>

              <p className="text-xs text-[#4d4732] leading-relaxed mb-8">
                {tier.description}
              </p>

              {/* Checkbox List */}
              <ul className="space-y-4 mb-10 text-sm">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className={`material-symbols-outlined font-black ${
                      tier.highlighted ? 'text-[#705d00]' : 'text-[#ffd700]'
                    }`}>
                      check_circle
                    </span>
                    <span className={tier.highlighted ? 'font-bold text-[#1c1b1b]' : 'text-[#4d4732]'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectTier(tier.id)}
              className={`w-full py-4 text-center font-extrabold text-base rounded-lg transition-all shadow-sm cursor-pointer ${
                tier.highlighted
                  ? 'bg-[#ffd700] text-[#705e00] hover:brightness-105 active:scale-98 shadow-md'
                  : 'border-2 border-[#1c1b1b] text-[#1c1b1b] hover:bg-[#1c1b1b] hover:text-white'
              }`}
            >
              {tier.ctaText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
