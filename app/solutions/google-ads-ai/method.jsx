import React, { useState } from 'react';
import { 
  Search, FileText, Database, 
  Image as ImageIcon, Video, Smartphone,
  Layers, Zap, Cpu, 
  TrendingUp, RefreshCcw, Globe,
  CheckCircle, ChevronDown, BarChart3, Target,
  Briefcase, Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from './SharedUI';

const ArloxRoadmap = () => {
  const [expandedPhase, setExpandedPhase] = useState(1);

  // --- STYLES: Varied Shades for Depth ---
  const shadowExtruded = "shadow-[9px_9px_16px_#d1d9e6,-9px_-9px_16px_#ffffff]";
  const shadowPressed = "shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]";
  const shadowFlat = "shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff]";

  // --- FULL CONTENT DATA ---
  const phases = [
    {
      id: 1,
      title: "Diagnostic & Data Infrastructure",
      time: "Weeks 1-2",
      icon: <Search size={24} />,
      color: "text-blue-600",
      bg: "bg-blue-500",
      border: "border-blue-400",
      glow: "drop-shadow(0 0 8px #3b82f6)",
      tint: "bg-blue-50",
      description: "Forensic audit of account, feed, and competitors.",
      modules: [
        { 
            title: "A. Account Autopsy", 
            icon: <BarChart3 size={16}/>, 
            points: [
                "Profitability Analysis: Which products are burning cash?",
                "TRUE MER Verification: Reconciling Platform ROAS vs Shopify Backend.",
                "Budget Leak Detection: Broad match on cheap items, PMax retargeting overload.",
                "Inventory Turnover: Identifying slow movers to prevent scaling into stockouts."
            ] 
        },
        { 
            title: "B. Feed Forensics", 
            icon: <Database size={16}/>, 
            points: [
                "Image Count: Target 10-12 vs Reality 2-3.",
                "Product Highlights: Are 5 bullets present? (3x AI Citation rate).",
                "Video Check: Are 9:16 Shorts present in feed?",
                "Custom Labels: Are margin-based tags setup? (95% missing this)."
            ] 
        },
        { 
            title: "C. Competitive Intelligence", 
            icon: <Target size={16}/>, 
            points: [
                "Reverse-engineer top 5 competitors.",
                "Ad Transparency: Screenshot their Demand Gen Shorts.",
                "AI Overviews: Query 50 high-intent terms to see who is cited.",
                "Gap Analysis: Identify the 3-5 leverage points."
            ] 
        },
        { 
            title: "D. Data Infrastructure", 
            icon: <Cpu size={16}/>, 
            points: [
                "Server-Side Tracking (CAPI) setup for iOS bypass.",
                "Custom Scripts: Inventory Pause, High-RTO Exclusion (India).",
                "Triple Verification System: Google vs CAPI vs Backend."
            ] 
        }
      ],
      deliverable: "35-page Strategic Blueprint & 90-Day Forecast"
    },
    {
      id: 2,
      title: "Feed Engineering & Creative",
      time: "Weeks 3-6",
      icon: <ImageIcon size={24} />,
      color: "text-violet-600",
      bg: "bg-violet-500",
      border: "border-violet-400",
      glow: "drop-shadow(0 0 8px #8b5cf6)",
      tint: "bg-violet-50",
      description: "Engineering the assets that power the AI.",
      modules: [
        { 
            title: "A. Feed Overhaul (10x Standard)", 
            icon: <FileText size={16}/>, 
            points: [
                "Imagery: 10-12 per product (Front, Back, Side, Detail).",
                "Models: 3 body types (Size 2, 8, 14) for inclusivity.",
                "Titles: Keyword + Benefit structure (e.g., 'Organic Linen').",
                "Custom Labels (Margin Bidding):",
                "• Label 0: High Margin (60%+) - Aggressive",
                "• Label 1: Best Sellers",
                "• Label 2: Seasonal",
                "• Label 3: Low Stock"
            ] 
        },
        { 
            title: "B. Demand Gen Factory", 
            icon: <Video size={16}/>, 
            points: [
                "Target: 45-60 Shorts (15-20/week).",
                "US Format 1: 'Honest Review' (Lo-fi, UGC, Bedroom setting).",
                "US Format 2: 'Styling Tutorial' (3 ways to wear).",
                "India Format 1: 'Heritage Story' (Slow-mo, artisan, cinematic).",
                "India Format 2: 'Occasion Showcase' (Wedding/Festival).",
                "Testing: Kill bottom 50%, Scale top 50%."
            ] 
        }
      ],
      deliverable: "60 Tested Shorts, 10 Evergreen Winners, Optimized Feed"
    },
    {
      id: 3,
      title: "Power Pack Deployment",
      time: "Weeks 7-10",
      icon: <Zap size={24} />,
      color: "text-orange-600",
      bg: "bg-orange-500",
      border: "border-orange-400",
      glow: "drop-shadow(0 0 8px #f97316)",
      tint: "bg-orange-50",
      description: "Launching the three-engine structure.",
      modules: [
        { 
            title: "A. Campaign Architecture", 
            icon: <Layers size={16}/>, 
            points: [
                "Engine 1 (PMax - 60%): Asset groups by Margin or Category.",
                "Engine 2 (Demand Gen - 25%): Ad Group 1 (Shorts), Ad Group 2 (In-Stream), Ad Group 3 (Discover).",
                "Engine 3 (Brand Defense - 15%): Exact match brand terms only."
            ] 
        },
        { 
            title: "B. Scripts Activation", 
            icon: <Cpu size={16}/>, 
            points: [
                "Inventory Script: Auto-pause OOS sizes.",
                "High-RTO Script: Geo-fence bad pincodes (India).",
                "Margin Bidding: Dynamic tROAS adjustment based on Label 0."
            ] 
        },
        { 
            title: "C. Launch & Learn", 
            icon: <TrendingUp size={16}/>, 
            points: [
                "Weeks 9-10: Learning Phase (No premature optimizations).",
                "Validation Check: Is MER trending to 4.5x?",
                "Brand Lift Check: Are branded searches increasing?"
            ] 
        }
      ],
      deliverable: "Power Pack Live, Learning Phase Complete"
    },
    {
      id: 4,
      title: "Optimization & Scaling",
      time: "Weeks 11-16",
      icon: <TrendingUp size={24} />,
      color: "text-emerald-600",
      bg: "bg-emerald-500",
      border: "border-emerald-400",
      glow: "drop-shadow(0 0 8px #10b981)",
      tint: "bg-emerald-50",
      description: "The 'Blue Swan' Protocol and Budget Scaling.",
      modules: [
        { 
            title: "A. Creative Velocity", 
            icon: <RefreshCcw size={16}/>, 
            points: [
                "Cadence: 15-20 new Shorts/week.",
                "Testing: Launch 15 → Kill bottom 60% → Move winners to Evergreen.",
                "Goal: Prevent creative fatigue decay."
            ] 
        },
        { 
            title: "B. Scaling Protocol", 
            icon: <BarChart3 size={16}/>, 
            points: [
                "Rule: Scale 20-30% every 2 weeks IF MER > 4.0x.",
                "Example: Week 11 ($120k) → Week 13 ($150k).",
                "Trap: Do NOT double budget overnight."
            ] 
        },
        { 
            title: "C. 'Blue Swan' Tests", 
            icon: <Globe size={16}/>, 
            points: [
                "20% budget allocated to wild-card ideas.",
                "Examples: Founder Rants, Chaos/BTS, Trend Hijacks.",
                "Goal: Find the 12x ROAS outliers (Blue Swans)."
            ] 
        }
      ],
      deliverable: "Scaling to 3-5x Spend, 15+ New Creatives/Week"
    },
    {
      id: 5,
      title: "The Compounding Loop",
      time: "Month 5+",
      icon: <RefreshCcw size={24} />,
      color: "text-indigo-600",
      bg: "bg-indigo-500",
      border: "border-indigo-400",
      glow: "drop-shadow(0 0 8px #4f46e5)",
      tint: "bg-indigo-50",
      description: "The Synergy Effect taking full hold.",
      modules: [
        { 
            title: "A. System Maturity", 
            icon: <CheckCircle size={16}/>, 
            points: [
                "Production: 80-120 Shorts/month.",
                "Automation: Scripts handling 85% of bids/exclusions.",
                "Efficiency: Media buyer hours drop 25 → 6 hrs/week."
            ] 
        },
        { 
            title: "B. The Synergy Effect", 
            icon: <Zap size={16}/>, 
            points: [
                "Demand Gen → +180% Branded Search Lift.",
                "PMax → Captures warm traffic at $0.60 CPC.",
                "Lens/AI → Adds 35% incremental revenue."
            ] 
        },
        { 
            title: "C. Owned Traffic", 
            icon: <Globe size={16}/>, 
            points: [
                "Financials: 5.7x MER at 2.5x Scale.",
                "Outcome: You own the system (SOPs, Scripts, Playbooks)."
            ] 
        }
      ],
      deliverable: "Self-Sustaining 5.7x MER Growth Engine"
    }
  ];

  return (
    <div className="w-full bg-[#e8ebf0] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center mb-6">
            <motion.div 
              className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-amber-600 font-semibold text-xs sm:text-sm whitespace-nowrap"
              variants={fadeIn}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>The Method</span>
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-700 mb-4 tracking-tight">
            The Arlox 5-Phase Google Power Pack Implementation
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            The exact 5-phase protocol to engineering a <span className="text-slate-800 font-bold">self-scaling growth engine</span>.
          </p>
        </div>

        <div className="relative">

          {/* The Vertical "Circuit Line" */}
          <div className="absolute left-4 md:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-indigo-300 hidden md:block opacity-50"></div>

          <div className="space-y-8">
            {phases.map((phase) => {
              const isOpen = expandedPhase === phase.id;

              return (
                <div key={phase.id} className="relative pl-0 md:pl-24">

                  {/* TIMELINE NODE */}
                  <div className={`
                      absolute left-6 top-8 w-4 h-4 rounded-full border-2 border-[#e8ebf0] z-10 hidden md:block transition-all duration-500
                      ${isOpen ? `${phase.bg} shadow-[0_0_15px_currentColor] scale-125` : 'bg-slate-300'}
                  `}></div>

                  {/* PHASE CARD */}
                  <motion.div
                    onClick={() => setExpandedPhase(isOpen ? null : phase.id)}
                    className={`
                      relative rounded-[2rem] border overflow-hidden cursor-pointer transition-all duration-500 group
                      ${isOpen 
                          ? `${shadowExtruded} bg-[#ecf0f3] border-white/60 z-20 transform md:-translate-x-2` 
                          : `${shadowFlat} bg-[#eef1f5] border-transparent hover:bg-[#ecf0f3] hover:scale-[1.01] opacity-90`}
                    `}
                  >
                      {/* CARD HEADER */}
                      <div className="p-6 md:p-8 flex items-start gap-4 md:gap-6">
                          {/* ICON BOX */}
                          <div className={`
                              p-3 md:p-4 rounded-2xl flex-shrink-0 transition-all duration-500
                              ${isOpen 
                                  ? `${shadowPressed} ${phase.tint} ${phase.color}` 
                                  : `${shadowExtruded} bg-[#ecf0f3] text-slate-400 group-hover:text-slate-500`}
                          `}>
                              <div style={isOpen ? { filter: phase.glow } : {}}>{phase.icon}</div>
                          </div>

                          {/* TITLE & TIME */}
                          <div className="flex-1 pt-1">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                  <h3 className={`text-lg sm:text-xl md:text-2xl font-black transition-colors ${isOpen ? 'text-slate-800' : 'text-slate-500'}`}>
                                      Phase {phase.id}: {phase.title}
                                  </h3>
                                  <div className={`
                                      px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit
                                      ${isOpen ? `${phase.bg} text-white shadow-sm` : 'bg-slate-200 text-slate-400'}
                                  `}>
                                      {phase.time}
                                  </div>
                              </div>
                              <p className="text-slate-500 font-medium text-sm md:text-base pr-8">
                                  {phase.description}
                              </p>
                          </div>

                          {/* ARROW INDICATOR */}
                          <div className={`
                              absolute right-4 sm:right-6 top-6 sm:top-8 transition-transform duration-300 text-slate-400
                              ${isOpen ? 'rotate-180' : 'rotate-0'}
                          `}>
                              <ChevronDown size={24} />
                          </div>
                      </div>

                      {/* EXPANDABLE CONTENT */}
                      <AnimatePresence>
                          {isOpen && (
                              <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                              >
                                  <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-0">
                                      <div className="w-full h-px bg-slate-300/30 mb-6 sm:mb-8"></div>

                                      {/* MODULES GRID */}
                                      <div className="grid md:grid-cols-2 gap-4">
                                          {phase.modules.map((mod, idx) => (
                                              <div 
                                                key={idx} 
                                                className={`p-4 sm:p-5 rounded-2xl bg-white/60 ${shadowPressed} border border-white/40 backdrop-blur-sm`}
                                              >
                                                  <h4 className={`font-bold text-sm mb-3 flex items-center gap-2 ${phase.color}`}>
                                                      {mod.icon} {mod.title}
                                                  </h4>
                                                  <ul className="space-y-2">
                                                      {mod.points.map((pt, i) => (
                                                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 leading-snug">
                                                              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${phase.bg}`}></div>
                                                              <span>{pt}</span>
                                                          </li>
                                                      ))}
                                                  </ul>
                                              </div>
                                          ))}
                                      </div>

                                      {/* DELIVERABLE BOX */}
                                      <div className={`mt-6 p-4 rounded-xl ${phase.tint} border-2 ${phase.border} flex items-center gap-3`}>
                                          <CheckCircle size={18} className={`${phase.color} flex-shrink-0`} />
                                          <div>
                                              <span className={`block text-[10px] font-bold uppercase ${phase.color} opacity-70`}>Phase Deliverable</span>
                                              <span className={`font-bold text-sm md:text-base text-slate-800`}>{phase.deliverable}</span>
                                          </div>
                                      </div>
                                  </div>
                              </motion.div>
                          )}
                      </AnimatePresence>

                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom decorative connector fade */}
          <div className="absolute left-8 bottom-0 w-0.5 h-16 bg-gradient-to-b from-indigo-300 to-transparent hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ArloxRoadmap;
