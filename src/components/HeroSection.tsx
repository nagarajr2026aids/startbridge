import React from 'react';
import { UserRole, Category } from '../types';
import { Search, Sparkles, PlusCircle, ArrowRight, ShieldAlert, Cpu, HeartPulse, GraduationCap, Sprout, Leaf, Bot, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  activeRole: UserRole;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenSubmitModal: () => void;
  onOpenAiAssistant: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeRole,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onOpenSubmitModal,
  onOpenAiAssistant,
  onExploreClick,
}) => {
  const categories: { id: Category; label: string; icon: any }[] = [
    { id: 'healthcare', label: 'Healthcare', icon: HeartPulse },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'agriculture', label: 'Agriculture', icon: Sprout },
    { id: 'environment', label: 'Environment', icon: Leaf },
    { id: 'technology', label: 'Technology', icon: Cpu },
  ];

  return (
    <section className="relative bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Simple English Simulation Disclaimer Banner */}
      <div className="bg-slate-900/90 border-b border-slate-800 py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-300">
          <ShieldAlert className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span>
            <strong>Note for Users:</strong> Patents and copyrights are shared directly by student developers. Money transactions and reviews are demonstration simulations for learning.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Live Search */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-medium text-teal-300 bg-teal-950/60 border border-teal-800/80 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Student Startup & Angel Investor Platform</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Connecting College Startup Developers with Early Investors.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              StartBridge helps student developers showcase real hardware prototypes, computer code, and working models in Healthcare, Education, Agriculture, Environment, and Technology.
            </p>

            {/* Live Search Control */}
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-2 shadow-xl max-w-xl">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-slate-400 ml-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search projects by name, technologies (Python, ESP32), or parts..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none py-2"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="text-xs text-slate-400 hover:text-white px-2 py-1"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={onExploreClick}
                  className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Sector Filter Shortcuts */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">
                Choose a Startup Sector
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onSelectCategory('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-teal-500 text-slate-950 font-semibold'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                  }`}
                >
                  All Sectors
                </button>
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => onSelectCategory(cat.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-teal-500 text-slate-950 font-semibold shadow-xs'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic CTAs based on Active Role */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {activeRole === 'developer' ? (
                <>
                  <button
                    onClick={onOpenSubmitModal}
                    className="flex items-center gap-2 px-5 py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-semibold text-sm rounded-lg transition-all shadow-md active:scale-95"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Submit Your Project</span>
                  </button>
                  <button
                    onClick={onOpenAiAssistant}
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-teal-300 font-medium text-sm rounded-lg border border-slate-700 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>Ask AI Startup Advisor</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={onExploreClick}
                    className="flex items-center gap-2 px-5 py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-semibold text-sm rounded-lg transition-all shadow-md active:scale-95"
                  >
                    <span>Browse Student Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenAiAssistant}
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-teal-300 font-medium text-sm rounded-lg border border-slate-700 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>Find Matching Startups</span>
                  </button>
                </>
              )}
            </div>

          </div>

          {/* Right Column: Hero Visual Asset Frame with Smart AI Startup Matching Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <img
                src="/src/assets/images/hero_startup_developer_1792933234121.jpg"
                alt="University student engineers collaborating on technology prototypes"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
              
              {/* REPLACED BOX: Smart AI Startup Matching in Simple English */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/95 border border-teal-500/40 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between text-xs text-teal-400 font-semibold mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-teal-400" />
                    <span>Smart AI Startup Matching</span>
                  </div>
                  <span className="text-[11px] bg-teal-950 text-teal-300 border border-teal-700/60 rounded px-1.5 py-0.5">
                    Live Engine
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  How AI Connects You with the Right Investors
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  StartBridge uses artificial intelligence to read your project details and match you with investors who fund your category. Get instant advice on your pitch and review development budgets in Indian Rupees.
                </p>
                <div className="flex flex-wrap gap-2 mt-2.5 pt-2 border-t border-slate-800 text-[11px] text-teal-300">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-teal-400" /> Fast AI Matching
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-teal-400" /> Budgets in ₹ Rupees
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-teal-400" /> Real Video Demos
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Metric Proof Strip in Indian Rupees */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono tabular-nums">
              ₹25,00,000+
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Simulated Startup Inquiries
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              6
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Working Student Prototypes
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              4
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Active Angel Investors
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono tabular-nums">
              5
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Important Innovation Sectors
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
