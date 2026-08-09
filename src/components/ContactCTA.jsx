import React, { useState } from 'react';

export const ContactCTA = ({
  onOpenInquiry
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onOpenInquiry(email);
    }
  };

  return (
    <section className="py-20 px-4 md:px-16 max-w-screen-2xl mx-auto">
      <div className="bg-[#1c1b1b] text-white rounded-2xl p-8 md:p-16 relative overflow-hidden shadow-2xl border-2 border-[#ffd700]">
        {/* Decorative Glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#ffd700]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffd700] bg-white/10 px-3 py-1 rounded">
              Engineered For Scale
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Automate Your Future?
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xl">
              Let's build intelligent, scalable software that accelerates your growth. Talk directly with a JSRM Labs solutions architect today.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-[#ffd700] flex-1"
              />
              <button
                type="submit"
                className="bg-[#ffd700] text-[#705e00] font-extrabold px-6 py-3.5 rounded-lg text-sm uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
