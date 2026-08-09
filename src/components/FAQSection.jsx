import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';

export const FAQSection = () => {
  const [openId, setOpenId] = useState('faq-1');

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#f6f3f2] border-t border-[#d0c6ab]/20" id="faq">
      <div className="px-4 md:px-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#705d00] bg-[#ffd700]/30 px-3 py-1 rounded mb-3 inline-block">
            Frequently Asked
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1b1b] mb-4">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-[#4d4732] text-sm md:text-base">
            Everything you need to know about partnering with JSRM Labs.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-[#d0c6ab]/40 rounded-lg overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-6 flex items-center justify-between font-extrabold text-base md:text-lg text-[#1c1b1b] focus:outline-none hover:text-[#705d00] cursor-pointer"
                >
                  <span>{item.question}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 text-2xl ${
                    isOpen ? 'rotate-180 text-[#705d00]' : 'text-gray-400'
                  }`}>
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#4d4732] leading-relaxed border-t border-gray-100 pt-4 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
