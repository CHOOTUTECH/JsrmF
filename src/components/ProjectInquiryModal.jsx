import React, { useState, useEffect } from 'react';
import api from "../api/api";

export const ProjectInquiryModal = ({
  isOpen,
  onClose,
  initialTier,
  initialEmail = '',
  initialEstimate = null
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('AI Automation & SaaS');
  const [budget, setBudget] = useState('₹4.5 Lakh - ₹10 Lakh (Growth Tier)');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (initialEmail) setEmail(initialEmail);
    if (initialTier) {
      if (initialTier === 'starter') setBudget('₹4999 K - ₹9999 k (Starter Tier)');
      else if (initialTier === 'growth') setBudget('₹14999 K - ₹30000 k (Growth Tier)');
      else if (initialTier === 'enterprise') setBudget('₹49000 + (Enterprise Tier)');
    }
  }, [initialEmail, initialTier]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/leads/", {
        name,
        email,
        company,
        project_type: projectType,
        budget,
        message: initialEstimate
          ? `[AI ESTIMATE INCLUDED: ${initialEstimate.estimatedCost}] - ${message}`
          : message,
      });

      setRefId(res.data.refId);
      setSubmitted(true);

    } catch (error) {
      console.error(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-[#fcf9f8] border-2 border-[#1c1b1b] rounded-2xl max-w-xl w-full p-6 md:p-10 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white border border-[#1c1b1b] text-[#1c1b1b] rounded-full hover:bg-[#ffd700] hover:text-[#705e00] transition-colors shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined font-bold">close</span>
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#ffd700] text-[#705e00] text-xs font-black uppercase px-3 py-0.5 rounded">
                Engage Lab
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1c1b1b] mb-2 tracking-tight">
              Start Your Project
            </h2>
            <p className="text-xs text-[#4d4732] mb-6">
              Connect directly with our solutions engineering team. We respond with a tailored roadmap within 4 hours.
            </p>

            {initialEstimate && (
              <div className="bg-amber-50 border border-[#ffd700] p-3 rounded-lg mb-4 text-xs">
                <span className="font-bold text-[#705d00] block">Attached AI Estimate:</span>
                <span>{initialEstimate.aiScopeSummary} ({initialEstimate.estimatedCost})</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#1c1b1b] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border-2 border-[#1c1b1b]/20 p-2.5 rounded text-sm focus:outline-none focus:border-[#ffd700]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#1c1b1b] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-2 border-[#1c1b1b]/20 p-2.5 rounded text-sm focus:outline-none focus:border-[#ffd700]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#1c1b1b] mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-white border-2 border-[#1c1b1b]/20 p-2.5 rounded text-sm focus:outline-none focus:border-[#ffd700]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#1c1b1b] mb-1">
                    Target Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white border-2 border-[#1c1b1b]/20 p-2.5 rounded text-sm focus:outline-none focus:border-[#ffd700]"
                  >
                    <option value="₹1.5 Lakh - ₹3 Lakh (Starter Tier)">₹1.5 Lakh - ₹3 Lakh (Starter Tier)</option>
                    <option value="₹4.5 Lakh - ₹10 Lakh (Growth Tier)">₹4.5 Lakh - ₹10 Lakh (Growth Tier)</option>
                    <option value="₹10 Lakh+ (Enterprise Tier)">₹10 Lakh+ (Enterprise Tier)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-[#1c1b1b] mb-1">
                  Project Focus
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-white border-2 border-[#1c1b1b]/20 p-2.5 rounded text-sm focus:outline-none focus:border-[#ffd700]"
                >
                  <option value="AI Automation & SaaS">AI Automation & SaaS</option>
                  <option value="Web System / React App">Web System / React App</option>
                  <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                  <option value="Mobile App (iOS & Android)">Mobile App (iOS & Android)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-[#1c1b1b] mb-1">
                  Additional Notes / Goals
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about key requirements, timelines, or integrations..."
                  className="w-full bg-white border-2 border-[#1c1b1b]/20 p-2.5 rounded text-sm focus:outline-none focus:border-[#ffd700]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ffd700] text-[#705e00] font-extrabold py-3.5 rounded-lg text-sm uppercase tracking-wider hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? 'Submitting to Lab...' : 'Submit Inquiry'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#ffd700] text-[#705e00] rounded-full flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-3xl font-black">check_circle</span>
            </div>

            <div>
              <span className="text-xs font-mono font-bold bg-[#1c1b1b] text-[#ffd700] px-3 py-1 rounded">
                Ref ID: {refId}
              </span>
              <h2 className="text-2xl font-extrabold text-[#1c1b1b] mt-3">
                Inquiry Received
              </h2>
              <p className="text-sm text-[#4d4732] max-w-md mx-auto mt-2">
                Thank you, <span className="font-bold text-[#1c1b1b]">{name}</span>. A JSRM Labs solutions lead will review your scope and email you at <span className="font-bold text-[#1c1b1b]">{email}</span> within 4 business hours.
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={onClose}
                className="bg-[#1c1b1b] text-white font-extrabold px-8 py-3 rounded-lg text-xs uppercase cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
