import React, { useState } from 'react';

export const Header = ({
  activeView,
  setActiveView,
  onOpenInquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view, sectionId) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-[#fcf9f8] border-b-2 border-[#1c1b1b]/10 shadow-sm backdrop-blur-md">
      <nav className="flex justify-between items-center h-20 px-4 md:px-16 max-w-screen-2xl mx-auto">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer group flex items-center gap-2"
        >
          <div className="font-extrabold text-2xl tracking-tighter text-[#1c1b1b] flex items-center gap-1.5">
            <span className="bg-[#ffd700] text-[#705e00] text-sm px-2 py-0.5 rounded font-black tracking-widest">
              LABS
            </span>
            <span>JSRM Labs</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-xs uppercase tracking-wider text-[#1c1b1b]">
          <button
            onClick={() => handleNavClick('home', 'services')}
            className={`transition-all py-1 border-b-4 ${activeView === 'services'
                ? 'text-[#705d00] border-[#ffd700]'
                : 'border-transparent text-[#1c1b1b] hover:text-[#705d00]'
              }`}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('portfolio')}
            className={`transition-all py-1 border-b-4 ${activeView === 'portfolio'
                ? 'text-[#705d00] border-[#ffd700]'
                : 'border-transparent text-[#1c1b1b] hover:text-[#705d00]'
              }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => handleNavClick('home', 'process')}
            className={`transition-all py-1 border-b-4 ${activeView === 'process'
                ? 'text-[#705d00] border-[#ffd700]'
                : 'border-transparent text-[#1c1b1b] hover:text-[#705d00]'
              }`}
          >
            Process
          </button>
          <button
            onClick={() => handleNavClick('home', 'pricing')}
            className={`transition-all py-1 border-b-4 ${activeView === 'pricing'
                ? 'text-[#705d00] border-[#ffd700]'
                : 'border-transparent text-[#1c1b1b] hover:text-[#705d00]'
              }`}
          >
            Pricing
          </button>

          <button
            onClick={() => handleNavClick('digitalstore')}
            className={`transition-all py-1 border-b-4 ${activeView === 'digitalstore'
                ? 'text-[#705d00] border-[#ffd700]'
                : 'border-transparent text-[#1c1b1b] hover:text-[#705d00]'
              }`}
          >
            Digital Store
          </button>

        </div>

        {/* Header Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenInquiry()}
            className="bg-[#ffd700] text-[#705e00] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#1c1b1b] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f8] border-b border-[#1c1b1b]/10 px-6 py-6 space-y-4 font-bold uppercase text-sm">
          <button
            onClick={() => handleNavClick('home', 'services')}
            className="block w-full text-left py-2 border-b border-gray-200"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('portfolio')}
            className="block w-full text-left py-2 border-b border-gray-200"
          >
            Portfolio & Case Studies
          </button>
          <button
            onClick={() => handleNavClick('home', 'process')}
            className="block w-full text-left py-2 border-b border-gray-200"
          >
            Process
          </button>
          <button
            onClick={() => handleNavClick('home', 'pricing')}
            className="block w-full text-left py-2 border-b border-gray-200"
          >
            Pricing & Tiers
          </button>

          <button
            onClick={() => handleNavClick('digitalstore')}
            className="block w-full text-left py-2 border-b border-gray-200"
          >
            Digital Store
          </button>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full bg-[#ffd700] text-[#705e00] font-extrabold py-3.5 rounded-lg text-center cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
