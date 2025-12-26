import React, { useState } from 'react';
import { 
  Zap, Layers, Eye, TrendingUp, 
  Smartphone, ShoppingBag, Camera, 
  Brain, Target, BarChart3, ArrowRight,
  Globe, Image as ImageIcon, Search, ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from './SharedUI';

const ArloxPowerPack = () => {
  const [activeTab, setActiveTab] = useState('pmax');

  // --- STYLES: Cool Platinum Theme ---
  const neuBase = "bg-[#ecf0f3]"; // Fixed to match neumorphic background

  // Refined Shadows
  const shadowExtruded = "shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]";
  const shadowPressed = "shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]";

  // Config
  const engines = {
    pmax: { 
        id: 'pmax', 
        name: "PMax", 
        label: "Harvester", 
        icon: <Layers size={20} />, 
        color: "text-orange-600", 
        bg: "bg-orange-500", 
        filter: "drop-shadow(0 0 8px #f97316)",
        tint: "bg-orange-50"
    },
    demand: { 
        id: 'demand', 
        name: "Demand", 
        label: "Creator", 
        icon: <Smartphone size={20} />, 
        color: "text-violet-600", 
        bg: "bg-violet-500", 
        filter: "drop-shadow(0 0 8px #8b5cf6)",
        tint: "bg-violet-50"
    },
    ai: { 
        id: 'ai', 
        name: "AI/Lens", 
        label: "Visual", 
        icon: <Brain size={20} />, 
        color: "text-emerald-600", 
        bg: "bg-emerald-500", 
        filter: "drop-shadow(0 0 8px #10b981)",
        tint: "bg-emerald-50"
    },
    synergy: { 
        id: 'synergy', 
        name: "Synergy", 
        label: "Growth", 
        icon: <TrendingUp size={20} />, 
        color: "text-blue-600", 
        bg: "bg-blue-500", 
        filter: "drop-shadow(0 0 8px #3b82f6)",
        tint: "bg-blue-50"
    }
  };

  return (
    <div className={`w-full ${neuBase} py-12 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex justify-center items-center mb-6">
          <motion.div 
            className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-emerald-600 font-semibold text-xs sm:text-sm whitespace-nowrap"
            variants={fadeIn}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>The Solution</span>
          </motion.div>
        </div>

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-5 tracking-tight leading-tight">
            The Arlox Google Power Pack System
          </h2>

          <p className="text-slate-600 font-medium text-base sm:text-lg mb-3">
            You don't have a{" "}
            <span className="font-semibold text-slate-800">Google Ads</span>{" "}
            problem.
            <br className="hidden sm:block" />
            You have an{" "}
            <span className="font-bold text-slate-800">
              architecture problem.
            </span>
          </p>

          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            The Arlox Power Pack isn't{" "}
            <span className="italic">"better campaign management."</span>{" "}
            It's a{" "}
            <span className="font-bold text-slate-800">
              three-engine growth system
            </span>{" "}
            where each channel feeds and amplifies the others — creating{" "}
            <span className="font-semibold text-slate-800">
              compounding, not diminishing, returns.
            </span>
          </p>
        </div>

        {/* UNIQUE "CONTROL MODULE" TABS (Sticky) */}
        <div className="sticky top-4 z-50 mb-10 p-2 md:p-3 rounded-3xl bg-[#ecf0f3] backdrop-blur-xl shadow-xl border border-white/50">
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-6">
            {Object.values(engines).map((engine) => {
              const isActive = activeTab === engine.id;
              return (
                <button
                  key={engine.id}
                  onClick={() => setActiveTab(engine.id)}
                  className={`
                    relative group transition-all duration-300 rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center overflow-hidden
                    ${isActive 
                      ? `${shadowPressed} ${engine.tint} border border-transparent translate-y-[1px]` 
                      : `${shadowExtruded} bg-[#ecf0f3] border border-white/50 hover:-translate-y-1`}
                  `}
                >
                  {/* LED Status Light */}
                  <div className={`absolute top-2 right-2 md:top-3 md:right-3 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500 ${isActive ? `${engine.bg} shadow-[0_0_10px_currentColor]` : 'bg-slate-300'}`} />

                  {/* Icon Container */}
                  <div 
                    className={`mb-1 md:mb-2 transition-all duration-300 ${isActive ? `scale-110 ${engine.color}` : 'text-slate-400 grayscale group-hover:grayscale-0 group-hover:text-slate-500'}`}
                    style={isActive ? { filter: engine.filter } : {}}
                  >
                    {engine.icon}
                  </div>

                  {/* Text Labels */}
                  <div className="text-center relative z-10">
                    <span className={`block text-[10px] md:text-xs font-black uppercase tracking-wider transition-colors ${isActive ? 'text-slate-700' : 'text-slate-400'}`}>
                      {engine.name}
                    </span>
                    <span className={`hidden md:block text-[9px] font-bold uppercase tracking-widest mt-0.5 transition-colors ${isActive ? engine.color : 'text-transparent'}`}>
                      {engine.label}
                    </span>
                  </div>

                  {/* Active "Power Bar" at bottom */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeBar" 
                      className={`absolute bottom-0 left-1/4 right-1/4 h-1 rounded-t-full ${engine.bg}`}
                      style={{ boxShadow: `0 -2px 10px ${engine.bg}` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className={`p-4 sm:p-6 md:p-10 rounded-[2.5rem] bg-[#ecf0f3] ${shadowExtruded} border border-white/60 min-h-[600px] relative overflow-hidden`}>
          <AnimatePresence mode='wait'>

            {/* --- ENGINE 1: PMAX --- */}
            {activeTab === 'pmax' && (
              <motion.div
                key="pmax"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-slate-300/50 pb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-orange-100 text-orange-600 ${shadowPressed}`}><Layers size={24} /></div>
                    Performance Max
                  </h3>
                  <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mt-2 ml-1">Omnichannel Harvester (60% Budget)</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* 1. Feed Optimization */}
                  <div className={`p-6 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border border-white/40 hover:scale-[1.01] transition-transform`}>
                    <div className="mb-4 flex items-center gap-2 text-orange-600">
                      <Camera size={20}/> <h4 className="font-bold text-slate-700">1. Feed Optimization</h4>
                    </div>
                    <div className="text-sm text-slate-500 space-y-3">
                      <p><strong>The "Visual Intent" Layer:</strong> 1-2 images isn't enough.</p>
                      <ul className="list-disc pl-4 space-y-1 marker:text-orange-400">
                        <li>8-12 images per product (Front, Back, Detail)</li>
                        <li>Model shots (3 body types)</li>
                        <li>Lifestyle context (Wedding, Office)</li>
                        <li>Video (9:16 for Shorts)</li>
                      </ul>
                      <div className="text-xs bg-orange-50 p-3 rounded-lg text-orange-700 border border-orange-100/50">
                        <strong>Why:</strong> More images = more "keys" to unlock inventory on Discover & Lens.
                      </div>
                    </div>
                  </div>

                  {/* 2. Custom Labels */}
                  <div className={`p-6 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border border-white/40 hover:scale-[1.01] transition-transform`}>
                    <div className="mb-4 flex items-center gap-2 text-orange-600">
                      <Target size={20}/> <h4 className="font-bold text-slate-700">2. Profit Labels</h4>
                    </div>
                    <div className="text-sm text-slate-500 space-y-3">
                      <p><strong>The Trap:</strong> Treating $80 profit items same as $30 profit items.</p>
                      <ul className="list-disc pl-4 space-y-1 marker:text-orange-400">
                        <li><strong>Label 0:</strong> High Margin (60%+) → Aggressive Bid</li>
                        <li><strong>Label 1:</strong> Med Margin (40-60%)</li>
                        <li><strong>Label 2:</strong> Low Margin (&lt;40%) → Conservative</li>
                      </ul>
                      <div className="text-xs bg-orange-50 p-3 rounded-lg text-orange-700 border border-orange-100/50">
                        <strong>Result:</strong> Optimize for PROFIT, not just revenue.
                      </div>
                    </div>
                  </div>

                  {/* 3. NCA Mode */}
                  <div className={`p-6 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border border-white/40 hover:scale-[1.01] transition-transform`}>
                    <div className="mb-4 flex items-center gap-2 text-orange-600">
                      <ShoppingBag size={20}/> <h4 className="font-bold text-slate-700">3. NCA Mode</h4>
                    </div>
                    <div className="text-sm text-slate-500 space-y-3">
                      <p><strong>The Problem:</strong> PMax loves retargeting (cheap conversions).</p>
                      <p><strong>Arlox Solution:</strong> Enable "New Customer Acquisition" goal.</p>
                      <div className="p-3 border-l-2 border-orange-300 pl-3 italic text-slate-600 bg-white/50 rounded-r-lg">
                        "I'll pay 30% more for a NEW customer."
                      </div>
                      <div className="text-xs bg-orange-50 p-3 rounded-lg text-orange-700 border border-orange-100/50">
                        <strong>Result:</strong> ROAS drops slightly (4.5 → 3.8), but growth triples.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- ENGINE 2: DEMAND GEN --- */}
            {activeTab === 'demand' && (
              <motion.div
                key="demand"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-slate-300/50 pb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-violet-100 text-violet-600 ${shadowPressed}`}><Smartphone size={24} /></div>
                    Demand Gen
                  </h3>
                  <p className="text-violet-600 font-bold text-xs uppercase tracking-widest mt-2 ml-1">The Demand Creator (25-30% Budget)</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Strategies */}
                  <div className="space-y-6">
                    {/* Format 1 */}
                    <div className={`p-6 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border border-white/40`}>
                      <h4 className="font-bold text-lg text-slate-700 mb-3 flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-red-100 text-red-600"><Smartphone size={16}/></div> 
                        Format 1: YouTube Shorts
                      </h4>
                      <div className="space-y-4 text-sm text-slate-500">
                        <div className={`p-4 bg-[#ecf0f3] rounded-2xl ${shadowPressed}`}>
                          <span className="font-bold text-slate-700 block mb-1">🇺🇸 US Market (Lo-fi/UGC)</span>
                          "I've been looking for this..." • Real life context • Swipe to shop.<br/>
                          <span className="text-xs text-violet-600 font-bold mt-2 block">Perf: $0.08 CPC | 4.2-6.8x ROAS</span>
                        </div>
                        <div className={`p-4 bg-[#ecf0f3] rounded-2xl ${shadowPressed}`}>
                          <span className="font-bold text-slate-700 block mb-1">🇮🇳 India Market (Cinematic)</span>
                          Slow-mo fabric draping • Traditional music • "Crafted for the modern woman."<br/>
                          <span className="text-xs text-violet-600 font-bold mt-2 block">Perf: $0.05 CPC | 5.2-7.4x ROAS</span>
                        </div>
                      </div>
                    </div>

                    {/* Format 2 */}
                    <div className={`p-6 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border border-white/40`}>
                      <h4 className="font-bold text-lg text-slate-700 mb-3 flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600"><ImageIcon size={16}/></div>
                        Format 2: Carousel Ads
                      </h4>
                      <p className="text-sm text-slate-500 mb-3">
                        <strong>Structure:</strong> 5-10 images telling a story (Outfit Inspo → Close-ups → Reviews → CTA).
                      </p>
                      <div className="text-xs bg-violet-50 p-3 rounded-lg text-violet-700 border border-violet-100">
                        <strong>Hook:</strong> Not "Buy Now", but "Discover Your Style".<br/>
                        <strong>Perf:</strong> 2.8-4.2x ROAS (capturing NET NEW customers).
                      </div>
                    </div>
                  </div>

                  {/* Right: The Insight & Cycle */}
                  <div className="flex flex-col gap-6">
                    <div className={`p-6 rounded-3xl bg-[#ecf0f3] ${shadowPressed}`}>
                      <h4 className="font-bold text-slate-700 mb-2">The Strategic Insight</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Shopping ads have a ceiling (8,500 searches/mo). Demand Gen <strong>manufactures</strong> new searches. It feeds the other engines.
                      </p>
                    </div>

                    <div className={`flex-1 rounded-[2.5rem] bg-gradient-to-br from-white to-slate-100 p-6 sm:p-8 flex flex-col justify-center items-center relative overflow-hidden border border-white ${shadowPressed}`}>
                      <h5 className="font-bold text-slate-400 uppercase text-xs mb-8 tracking-widest">The Arlox Loop</h5>

                      <div className="space-y-2 w-full max-w-xs relative z-10">
                        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                          <div className="bg-red-50 p-2.5 rounded-full text-red-500 border border-red-100 flex-shrink-0"><Smartphone size={18}/></div>
                          <div className="text-xs">
                            <span className="block font-bold text-slate-700 text-sm">1. Disruption</span>
                            <span className="text-slate-400">User sees Short on feed</span>
                          </div>
                        </div>

                        <div className="h-6 w-0.5 bg-slate-300 mx-auto"></div>

                        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                          <div className="bg-blue-50 p-2.5 rounded-full text-blue-500 border border-blue-100 flex-shrink-0"><Search size={18}/></div>
                          <div className="text-xs">
                            <span className="block font-bold text-slate-700 text-sm">2. Search</span>
                            <span className="text-slate-400">Googles "Linen Dress"</span>
                          </div>
                        </div>

                        <div className="h-6 w-0.5 bg-slate-300 mx-auto"></div>

                        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                          <div className="bg-orange-50 p-2.5 rounded-full text-orange-500 border border-orange-100 flex-shrink-0"><ShoppingBag size={18}/></div>
                          <div className="text-xs">
                            <span className="block font-bold text-slate-700 text-sm">3. Conversion</span>
                            <span className="text-slate-400">PMax captures sale</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- ENGINE 3: AI & VISUAL --- */}
            {activeTab === 'ai' && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-slate-300/50 pb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-emerald-100 text-emerald-600 ${shadowPressed}`}><Brain size={24} /></div>
                    AI & Visual Search
                  </h3>
                  <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest mt-2 ml-1">Future-Proof Layer (15% Budget)</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* 1. Google Lens */}
                  <div className={`p-6 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border-t-4 border-emerald-400`}>
                    <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                      <Eye size={18} className="text-emerald-500"/> Google Lens
                    </h4>
                    <p className="text-xs text-slate-500 mb-4 font-medium">43% of Gen Z use this first. If your feed isn't optimized, you are invisible.</p>
                    <div className={`p-4 rounded-2xl bg-[#ecf0f3] ${shadowPressed} text-xs space-y-2 text-slate-600`}>
                      <p><strong>Req:</strong> High-res (1024px+), clean backgrounds.</p>
                      <p><strong>Action:</strong> Enable <code className="bg-white/80 px-1 rounded">image_link_additional</code>.</p>
                      <p className="text-emerald-600 font-bold pt-1">Result: 60-80% visibility.</p>
                    </div>
                  </div>

                  {/* 2. AI Overviews */}
                  <div className={`p-6 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border-t-4 border-emerald-500`}>
                    <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                      <Sparkles size={18} className="text-emerald-500"/> AI Overviews
                    </h4>
                    <p className="text-xs text-slate-500 mb-4 font-medium">When users ask "Best sustainable denim?", AI answers using "Rich Data".</p>
                    <div className={`p-4 rounded-2xl bg-[#ecf0f3] ${shadowPressed} text-xs space-y-2 text-slate-600`}>
                      <p><strong>Req:</strong> Rich Data (Reviews, Specs).</p>
                      <p><strong>Action:</strong> <code className="bg-white/80 px-1 rounded">product_highlight</code> attribute + 200 words.</p>
                      <p className="text-emerald-600 font-bold pt-1">Result: 40-60% citation rate.</p>
                    </div>
                  </div>

                  {/* 3. Multimodal Search */}
                  <div className={`p-6 rounded-3xl bg-[#ecf0f3] ${shadowExtruded} border-t-4 border-emerald-600`}>
                    <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                      <Globe size={18} className="text-emerald-500"/> Multimodal
                    </h4>
                    <p className="text-xs text-slate-500 mb-4 font-medium">Text + Image Search combined ("Find this in blue").</p>
                    <div className={`p-4 rounded-2xl bg-[#ecf0f3] ${shadowPressed} text-xs space-y-2 text-slate-600`}>
                      <p><strong>Edge:</strong> Competitors only optimize for text keywords.</p>
                      <p><strong>Action:</strong> 10-image feed covers visual queries.</p>
                      <p className="text-emerald-600 font-bold pt-1">Result: Dominate mixed results.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- SYNERGY --- */}
            {activeTab === 'synergy' && (
              <motion.div
                key="synergy"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-slate-300/50 pb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-blue-100 text-blue-600 ${shadowPressed}`}><TrendingUp size={24} /></div>
                    The Synergy
                  </h3>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-2 ml-1">From Launch to Dominance</p>
                </div>

                <div className="space-y-4">
                  {/* Week 1 */}
                  <div className={`p-5 rounded-2xl bg-[#ecf0f3] ${shadowExtruded} border border-white/40 flex gap-4 items-start`}>
                    <div className="min-w-[60px] text-center pt-1 flex-shrink-0">
                      <span className="block text-2xl font-black text-slate-300">W1</span>
                    </div>
                    <div className="w-px h-full bg-slate-300/50 mx-1"></div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Simultaneous Deployment</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        Deploy PMax (Harvesting) + Demand Gen (Shorts) + Feed Optimization (Lens) together.
                      </p>
                    </div>
                  </div>

                  {/* Week 4 */}
                  <div className={`p-5 rounded-2xl bg-[#ecf0f3] ${shadowExtruded} border-l-4 border-blue-300 flex gap-4 items-start`}>
                    <div className="min-w-[60px] text-center pt-1 flex-shrink-0">
                      <span className="block text-2xl font-black text-blue-300">W4</span>
                    </div>
                    <div className="w-px h-full bg-slate-300/50 mx-1"></div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">The Brand Spike</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        Demand Gen video viral (450K views). Branded searches up 180%. PMax captures warm traffic at $0.80 CPC (vs $2.20). ROAS → 5.4x.
                      </p>
                    </div>
                  </div>

                  {/* Week 8 */}
                  <div className={`p-5 rounded-2xl bg-[#ecf0f3] ${shadowExtruded} border-l-4 border-blue-400 flex gap-4 items-start`}>
                    <div className="min-w-[60px] text-center pt-1 flex-shrink-0">
                      <span className="block text-2xl font-black text-blue-400">W8</span>
                    </div>
                    <div className="w-px h-full bg-slate-300/50 mx-1"></div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Visual Dominance</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        Lens traffic up 300%. AI citing products in 55% of queries. Demand Gen + Lens feeding PMax high-intent traffic. MER: 4.9x.
                      </p>
                    </div>
                  </div>

                  {/* Week 12 */}
                  <div className={`p-5 rounded-2xl bg-[#ecf0f3] ${shadowExtruded} border-l-4 border-blue-600 flex gap-4 items-start`}>
                    <div className="min-w-[60px] text-center pt-1 flex-shrink-0">
                      <span className="block text-2xl font-black text-blue-600">W12</span>
                    </div>
                    <div className="w-px h-full bg-slate-300/50 mx-1"></div>
                    <div className="w-full">
                      <h4 className="font-bold text-slate-700 text-lg mb-4">Total Harmony</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className={`p-3 rounded-xl bg-[#ecf0f3] ${shadowPressed} text-center`}>
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">PMAX</span>
                          <span className="font-bold text-orange-600 text-sm">5.2x ROAS</span>
                        </div>
                        <div className={`p-3 rounded-xl bg-[#ecf0f3] ${shadowPressed} text-center`}>
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">DEMAND</span>
                          <span className="font-bold text-violet-600 text-sm">5.8x ROAS</span>
                        </div>
                        <div className={`p-3 rounded-xl bg-[#ecf0f3] ${shadowPressed} text-center`}>
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">AI/LENS</span>
                          <span className="font-bold text-emerald-600 text-sm">6.4x ROAS</span>
                        </div>
                        <div className={`p-3 rounded-xl bg-[#ecf0f3] ${shadowPressed} text-center bg-blue-50 border border-blue-100`}>
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">TOTAL MER</span>
                          <span className="font-black text-blue-700 text-lg">5.7x</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ArloxPowerPack;
