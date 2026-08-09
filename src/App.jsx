import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TechEcosystem } from './components/TechEcosystem';
import { PrecisionServices } from './components/PrecisionServices';
import { PortfolioSection } from './components/PortfolioSection';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy';
import { InvestmentTiers } from './components/InvestmentTiers';
import { FAQSection } from './components/FAQSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { CaseStudyDetailModal } from './components/CaseStudyDetailModal';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { PROCESS_STEPS_DATA } from './data/mockData';
import { DigitalStore } from './components/DigitalStore';

export function App() {
  const [activeView, setActiveView] = useState('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryTier, setInquiryTier] = useState(undefined);
  const [inquiryEmail, setInquiryEmail] = useState('');

  const handleOpenInquiry = (tier) => {
    setInquiryTier(tier);
    setInquiryEmail('');
    setInquiryOpen(true);
  };

  const handleOpenInquiryWithEmail = (email) => {
    setInquiryEmail(email);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ffd700] selection:text-[#705e00]">
      {/* Sticky Top Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {/* HOME VIEW */}
        {activeView === 'home' && (
          <>
            <HeroSection
              onStartBuilding={() => handleOpenInquiry('growth')}
            />

            <TechEcosystem />

            <PrecisionServices
              onSelectServiceForQuote={(title) => {
                setInquiryTier('growth');
                handleOpenInquiry(title);
              }}
            />

            <FeaturedCaseStudy
              onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
            />

            <PortfolioSection
              onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
            />

            {/* Process Section */}
            <section className="py-20 px-4 md:px-16 max-w-screen-2xl mx-auto bg-white border-y border-[#d0c6ab]/20" id="process">
              <div className="mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#705d00] bg-[#ffd700]/30 px-3 py-1 rounded mb-3 inline-block">
                  Proven Methodology
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#1c1b1b] mb-4 tracking-tight">
                  How We Engineer Success
                </h2>
                <p className="text-[#4d4732] max-w-xl text-base md:text-lg">
                  Four transparent, milestone-driven phases from concept to production release.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROCESS_STEPS_DATA.map((step) => (
                  <div key={step.stepNumber} className="bg-[#fcf9f8] p-8 rounded-xl border border-[#d0c6ab]/40 relative flex flex-col justify-between">
                    <div>
                      <span className="text-4xl font-black text-[#ffd700] block mb-2">{step.stepNumber}</span>
                      <span className="text-[10px] font-extrabold uppercase text-[#705d00] bg-[#ffd700]/20 px-2 py-0.5 rounded inline-block mb-3">
                        {step.duration}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#1c1b1b] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#4d4732] leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1c1b1b] block mb-2">Deliverables</span>
                      <ul className="space-y-1 text-xs text-[#4d4732]">
                        {step.deliverables.map((d, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-[#ffd700] rounded-full"></span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <InvestmentTiers
              onSelectTier={(tierId) => handleOpenInquiry(tierId)}
            />

            <FAQSection />

            <ContactCTA
              onOpenInquiry={handleOpenInquiryWithEmail}
            />
          </>
        )}

        {/* PORTFOLIO STANDALONE VIEW */}
        {activeView === 'portfolio' && (
          <>
            <PortfolioSection
              standalonePage={true}
              onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
            />
            <ContactCTA
              onOpenInquiry={handleOpenInquiryWithEmail}
            />
          </>
        )}

        {/* SERVICES STANDALONE VIEW */}
        {activeView === 'services' && (
          <>
            <PrecisionServices
              onSelectServiceForQuote={(title) => {
                setInquiryTier('growth');
                handleOpenInquiry(title);
              }}
            />
            <InvestmentTiers
              onSelectTier={(tierId) => handleOpenInquiry(tierId)}
            />
            <FAQSection />
            <ContactCTA
              onOpenInquiry={handleOpenInquiryWithEmail}
            />
          </>
        )}


        {/* PRICING STANDALONE VIEW */}
        {activeView === 'pricing' && (
          <>
            <InvestmentTiers
              onSelectTier={(tierId) => handleOpenInquiry(tierId)}
            />
            <FAQSection />
            <ContactCTA
              onOpenInquiry={handleOpenInquiryWithEmail}
            />
          </>
        )}

        {/* PROCESS STANDALONE VIEW */}
        {activeView === 'process' && (
          <>
            <section className="py-20 px-4 md:px-16 max-w-screen-2xl mx-auto">
              <div className="mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#705d00] bg-[#ffd700]/30 px-3 py-1 rounded mb-3 inline-block">
                  Proven Methodology
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#1c1b1b] mb-4 tracking-tight">
                  Our Engineering Process
                </h2>
                <p className="text-[#4d4732] max-w-xl text-base md:text-lg">
                  Four transparent, milestone-driven phases from concept to production release.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROCESS_STEPS_DATA.map((step) => (
                  <div key={step.stepNumber} className="bg-white p-8 rounded-xl border border-[#d0c6ab]/40 relative flex flex-col justify-between shadow-sm">
                    <div>
                      <span className="text-4xl font-black text-[#ffd700] block mb-2">{step.stepNumber}</span>
                      <span className="text-[10px] font-extrabold uppercase text-[#705d00] bg-[#ffd700]/20 px-2 py-0.5 rounded inline-block mb-3">
                        {step.duration}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#1c1b1b] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#4d4732] leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1c1b1b] block mb-2">Deliverables</span>
                      <ul className="space-y-1 text-xs text-[#4d4732]">
                        {step.deliverables.map((d, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-[#ffd700] rounded-full"></span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <FAQSection />
            <ContactCTA
              onOpenInquiry={handleOpenInquiryWithEmail}
            />
          </>
        )}

        {/* DIGITAL STORE STANDALONE VIEW */}
        {activeView === 'digitalstore' && (
          <>
            <DigitalStore/>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveView={setActiveView}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Modals & Popups */}
      <CaseStudyDetailModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenInquiry={(title) => handleOpenInquiry(title)}
      />

      <ProjectInquiryModal
        isOpen={inquiryOpen}
        onClose={() => {
          setInquiryOpen(false);
        }}
        initialTier={inquiryTier}
        initialEmail={inquiryEmail}
      />
    </div>
  );
}
export default App;
