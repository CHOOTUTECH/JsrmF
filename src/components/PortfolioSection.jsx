import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/mockData';

export const PortfolioSection = ({
  onSelectCaseStudy,
  standalonePage = false
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI & Automation' },
    { key: 'web', label: 'Web & SaaS' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'marketplace', label: 'Marketplace' }
  ];

  const filteredProjects = CASE_STUDIES_DATA.filter((project) => {
    const matchesCat = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section 
      className={`py-20 ${standalonePage ? 'bg-[#fcf9f8]' : 'bg-[#f0eded]'} transition-colors duration-300`} 
      id="portfolio"
    >
      <div className="px-4 md:px-16 max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#705d00] bg-[#ffd700]/30 px-3 py-1 rounded mb-3 inline-block">
              Proven Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1c1b1b] mb-4 tracking-tight">
              {standalonePage ? 'Our Portfolio' : 'Case Studies'}
            </h2>
            <p className="text-[#4d4732] max-w-xl text-base md:text-lg leading-relaxed">
              From initial wireframe to market leader. See how JSRM Labs turns complex challenges into seamless digital experiences.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search case studies or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-[#1c1b1b]/20 px-4 py-2.5 pl-10 rounded-lg text-sm text-[#1c1b1b] placeholder:text-[#4d4732]/60 focus:outline-none focus:border-[#ffd700]"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#4d4732] text-xl">
              search
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#ffd700] text-[#705e00] shadow-sm'
                  : 'border-2 border-[#1c1b1b] text-[#1c1b1b] hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">search_off</span>
            <p className="text-[#1c1b1b] font-bold text-lg">No case studies match your search filter.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 text-xs font-bold text-[#705d00] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => onSelectCaseStudy(project)}
                className={`bg-[#fcf9f8] group cursor-pointer overflow-hidden border border-[#d0c6ab]/40 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  index === 0 && activeCategory === 'all' && !searchQuery ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-[#ffd700] text-[#705e00] text-[10px] font-extrabold uppercase px-3 py-1 rounded shadow-xs tracking-wider">
                      {project.badge}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#705d00] mb-2">
                      {project.categoryLabel}
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#1c1b1b] mb-2 group-hover:text-[#705d00] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#4d4732] text-sm leading-relaxed mb-6">
                      {project.challenge}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0 flex items-center justify-between border-t border-gray-100 mt-2">
                  <span className="text-[#705d00] font-extrabold text-sm border-b-2 border-[#ffd700] py-1">
                    Full Breakdown
                  </span>
                  <span className="material-symbols-outlined text-[#1c1b1b] group-hover:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
