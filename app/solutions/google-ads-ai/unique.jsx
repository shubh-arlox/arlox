"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Layers, Video, Globe, Code, 
  BarChart3, BookOpen, ShieldCheck, X, Check,
  ChevronRight, Zap, TrendingUp, Lock, ArrowRight,
  AlertTriangle
} from 'lucide-react';
import GlassButton from '@/components/but';
import WhatsappCTA from '@/components/WhatsAppCTA';

const ArloxUniquenessSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Neumorphic & Shadow Styles
  const shadowExtruded = "shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]";
  const shadowPressed = "shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]";
  const shadowFloating = "shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]";
  
  const points = [
    {
      id: 1,
      title: "Feed Engineers First",
      subtitle: "Most agencies are just media buyers.",
      icon: <Database size={20} />,
      color: "blue",
      traditional: {
        title: "Traditional Agency",
        points: ["Inherits your mediocre feed (2-3 images)", "Optimizes bids on a bad foundation", "Result: 'Polishing a turd'"]
      },
      arlox: {
        title: "The Arlox Standard",
        timeline: [
          { week: "Wk 1", task: "Forensic Audit (Quality, custom labels)" },
          { week: "Wk 2", task: "Rebuild to 10-12 images/product" },
          { week: "Wk 4", task: "Launch Campaigns on superior foundation" }
        ]
      },
      impact: "Feed optimization alone improves MER by 20-35% before we even touch campaigns.",
      evidence: "Women’s footwear brand: 3.2x → 4.1x ROAS (+28%) with ZERO campaign changes, just feed overhaul."
    },
    {
      id: 2,
      title: "The Power Pack Trinity",
      subtitle: "Not just 'Campaign Management'.",
      icon: <Layers size={20} />,
      color: "emerald",
      traditional: {
        title: "The 'Rental' Model",
        points: ["Manage Shopping/Search only", "Rent you their labor", "Single point of failure (Shopping plateaus)"]
      },
      arlox: {
        title: "The Growth Asset",
        engines: [
          { name: "Engine 1", desc: "PMax (Harvester)" },
          { name: "Engine 2", desc: "Demand Gen (Creator)" },
          { name: "Engine 3", desc: "Visual AI (Lens)" }
        ]
      },
      impact: "You build a self-scaling asset (3 engines compounding), not just a rented service.",
      evidence: null
    },
    {
      id: 3,
      title: "Creative Factory (Included)",
      subtitle: "We produce 80-120 Shorts/month.",
      icon: <Video size={20} />,
      color: "rose",
      traditional: {
        title: "Traditional Agency",
        points: ["'You provide the creative'", "Result: You can't produce enough", "Demand Gen never launches"]
      },
      arlox: {
        title: "Production Included",
        points: [
          "We produce 15-20 Shorts/week",
          "Tested 40+ formats across 100+ brands",
          "Systematic Velocity: Kill bottom 60%"
        ]
      },
      impact: "We remove the #1 bottleneck to scaling. You get a content factory included in the system.",
      evidence: null
    },
    {
      id: 4,
      title: "Market-Specific Playbooks",
      subtitle: "US vs. India Expertise.",
      icon: <Globe size={20} />,
      color: "orange",
      traditional: {
        title: "One-Size-Fits-All",
        points: ["US strategies fail in India (RTO ignored)", "India strategies fail in US (Quality perception low)"]
      },
      arlox: {
        title: "Cultural Resonance",
        markets: [
          { name: "US Playbook", tactics: "Lo-fi UGC, 3D Try-On, AOV Bundles" },
          { name: "India Playbook", tactics: "Cinematic, COD Prepays, RTO Scripts" }
        ]
      },
      impact: "Wrong market approach = wasted budget. Right approach = cultural resonance.",
      evidence: "India Client: Switched from US-style UGC to Cinematic India Playbook → ROAS jumped 1.8x to 5.9x."
    },
    {
      id: 5,
      title: "Automation Scripts Library",
      subtitle: "85% of optimizations automated.",
      icon: <Code size={20} />,
      color: "violet",
      traditional: {
        title: "Manual Management",
        points: ["Manual bid adjustments", "Slow reaction times (Daily checks)", "Human error & forgetting"]
      },
      arlox: {
        title: "Script Logic",
        scripts: ["Inventory Pausing", "Margin-Based Bidding", "Pincode Exclusion", "Budget Pacing"]
      },
      impact: "Faster reaction time (hourly vs daily). Media buyer focuses on strategy, not clicking buttons.",
      evidence: "Labor Cost: Automated scripts save ~$25.6K/year in manual labor hours per account."
    },
    {
      id: 6,
      title: "Triple Verification Data",
      subtitle: "You know your TRUE numbers.",
      icon: <BarChart3 size={20} />,
      color: "indigo",
      traditional: {
        title: "Dashboard Gazers",
        points: ["Trusts Google Ads reports blindly", "Ignores 15-25% over-reporting", "Profitable on paper, bleeding cash in reality"]
      },
      arlox: {
        title: "Source of Truth",
        steps: [
          "1. Platform Reporting (Google)",
          "2. Server-Side (CAPI)",
          "3. Backend Reconciliation (Bank)"
        ]
      },
      impact: "You scale based on TRUE unit economics (Blended MER), not Google's optimistic math.",
      evidence: "Scenario: Google says 5.2x ROAS. Triple Verify shows 3.9x MER. We save you from scaling into a loss."
    },
    {
      id: 7,
      title: "Knowledge Transfer",
      subtitle: "You own the system, not us.",
      icon: <BookOpen size={20} />,
      color: "cyan",
      traditional: {
        title: "Black Box Model",
        points: ["They hide the work", "No SOPs shared", "Lock-in by design (you leave, you die)"]
      },
      arlox: {
        title: "Open Source Model",
        points: [
          "We teach the 'Why' (90-min calls)",
          "You own the Scripts, IP & SOPs",
          "Your in-house team learns the system"
        ]
      },
      impact: "You are building a business asset worth $150-300K in IP. You stay because we add value, not because you're stuck.",
      evidence: null
    },
    {
      id: 8,
      title: "Qualification: We Say 'No'",
      subtitle: "We reject 68% of applicants.",
      icon: <ShieldCheck size={20} />,
      color: "slate",
      traditional: {
        title: "Churn & Burn",
        points: ["Takes anyone with a credit card", "Accepts doomed accounts", "Short-term cash flow focus"]
      },
      arlox: {
        title: "Scale Ready Only",
        qualify: [
          "Revenue: $80K - $500K/mo",
          "Margins: 60-75%",
          "Spend: $25K+ Commitment"
        ]
      },
      impact: "If we accept you, it's because our data says you will scale.",
      evidence: "92% of Arlox clients hit 4.5x+ MER by Month 6."
    }
  ];

  const getColorStyles = (color) => {
    const map = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-700' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-200', gradient: 'from-emerald-500 to-emerald-700' },
      rose: { bg: 'bg-rose-600', text: 'text-rose-600', light: 'bg-rose-50', border: 'border-rose-200', gradient: 'from-rose-500 to-rose-700' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200', gradient: 'from-orange-500 to-orange-700' },
      violet: { bg: 'bg-violet-600', text: 'text-violet-600', light: 'bg-violet-50', border: 'border-violet-200', gradient: 'from-violet-500 to-violet-700' },
      indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200', gradient: 'from-indigo-500 to-indigo-700' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', light: 'bg-cyan-50', border: 'border-cyan-200', gradient: 'from-cyan-500 to-cyan-700' },
      slate: { bg: 'bg-slate-700', text: 'text-slate-700', light: 'bg-slate-100', border: 'border-slate-300', gradient: 'from-slate-600 to-slate-800' },
    };
    return map[color] || map.blue;
  };

  return (
    <div className="w-full bg-[#e8ebf0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
           <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-slate-500 font-bold text-xs sm:text-sm mb-6"
          >
            <Lock size={14} />
            <span>The Uniqueness Protocol</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
            Why Arlox is Structurally Different<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              (And Why It Matters to Your Wallet)
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            You’ve been pitched by agencies before. Most make the same promises. 
            Here is the structural engineering difference that shows up in your bank account.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          
          {/* Left Column: Navigation (Desktop) / Accordion (Mobile) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {points.map((point) => {
              const isActive = activeTab === point.id;
              const styles = getColorStyles(point.color);

              return (
                <div key={point.id} className="relative">
                  {/* Button for Desktop & Mobile Header */}
                  <button
                    onClick={() => setActiveTab(isActive ? null : point.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 relative z-10 group
                      ${isActive 
                        ? `${shadowPressed} bg-[#ecf0f3] border-l-4 ${styles.border.replace('border-', 'border-l-')}` 
                        : `lg:${shadowExtruded} bg-[#eef1f5] lg:hover:translate-x-1 lg:hover:bg-white/50 border border-transparent`
                      }
                    `}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0
                      ${isActive 
                        ? `bg-gradient-to-br ${styles.gradient} text-white shadow-lg scale-110` 
                        : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      {point.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-bold truncate ${isActive ? 'text-slate-800' : 'text-slate-500 group-hover:text-slate-700'}`}>
                        {point.id}. {point.title}
                      </h4>
                      <p className={`text-xs truncate ${isActive ? styles.text : 'text-slate-400'}`}>
                        {point.subtitle}
                      </p>
                    </div>
                    {/* Mobile Chevron */}
                    <ChevronRight 
                      className={`lg:hidden text-slate-400 transition-transform ${isActive ? 'rotate-90' : ''}`} 
                      size={18} 
                    />
                  </button>

                  {/* Mobile Content (Accordion Style - Only shows on < lg screens) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden bg-[#ecf0f3] rounded-b-xl mb-4"
                      >
                         <div className="p-2">
                           <ContentCard point={point} styles={styles} shadowPressed={shadowPressed} isDesktop={false} />
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Content Panel */}
          <div className="hidden lg:block w-full lg:w-2/3 min-h-[600px]">
            <AnimatePresence mode="wait">
              {points.map((point) => {
                 if (activeTab !== point.id) return null;
                 const styles = getColorStyles(point.color);
                 
                 return (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`h-full p-8 rounded-3xl bg-[#ecf0f3] ${shadowFloating} border border-white/60`}
                  >
                    <ContentCard point={point} styles={styles} shadowPressed={shadowPressed} isDesktop={true} />
                  </motion.div>
                 );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* --- BOTTOM LINE FOOTER (Enhanced High-Contrast Design) --- */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Dark Mode Styling for Contrast */}
            <div className="absolute inset-0 bg-slate-900"></div>
            
            {/* Gradient Mesh Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1 space-y-4 text-center lg:text-left">
              
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  Arlox isn’t “a better Google Ads agency.”
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  We’re the only firm that builds the complete <span className="text-white font-bold border-b-2 border-blue-500">Power Pack system</span>: 
                  Feed Engineering + Performance Max + Demand Gen + AI Optimization + Automation.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <WhatsappCTA 
                    whatsappNumber="+919910220335" 
                    calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
                  >
                <GlassButton 
               label=" Apply for Arlox" 
               icon={ArrowRight} 
               className="h-4 sm:h-5 transition-all duration-200"
               buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
               onClick={() => console.log('Focus mode toggled')}
             />
                </WhatsappCTA>
                <div className="mt-4 text-center">
                  <span className="text-xs text-slate-500 font-medium">Limited spots available for Q1</span>
                </div>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

// Extracted Content Component
const ContentCard = ({ point, styles, shadowPressed, isDesktop }) => {
  return (
    <div className={`flex flex-col h-full ${isDesktop ? '' : 'p-4 rounded-xl bg-white/40'}`}>
      
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
           <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${styles.text} opacity-80`}>
             Point #{point.id}
           </div>
           <h3 className="text-3xl font-black text-slate-800 leading-tight mb-2">{point.title}</h3>
           <p className="text-slate-500 font-medium">{point.subtitle}</p>
        </div>
        {isDesktop && (
           <div className={`p-4 rounded-2xl ${styles.light} ${styles.text}`}>
             {point.icon}
           </div>
        )}
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-6 flex-1">
        
        {/* Traditional (Grayed Out) */}
        <div className="p-6 rounded-2xl bg-slate-100/50 border border-slate-200/60 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-2 mb-4 text-slate-400">
            <AlertTriangle size={16} />
            <h4 className="font-bold text-xs uppercase tracking-widest">{point.traditional.title}</h4>
          </div>
          <ul className="space-y-4">
            {point.traditional.points.map((pt, i) => (
              <li key={i} className="text-sm text-slate-500 font-medium flex items-start gap-3">
                <X size={16} className="mt-0.5 text-slate-400 flex-shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Arlox (Highlighted) */}
        <div className={`p-6 rounded-2xl bg-white border-2 ${styles.border} shadow-xl relative overflow-hidden group`}>
           <div className={`absolute -right-4 -top-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-700 ${styles.text}`}>
             {point.icon}
           </div>
          <div className={`flex items-center gap-2 mb-4 ${styles.text}`}>
            <Zap size={16} fill="currentColor" />
            <h4 className="font-bold text-xs uppercase tracking-widest">{point.arlox.title}</h4>
          </div>
          
          {/* Dynamic Content Rendering */}
          <div className="relative z-10">
            {point.arlox.points && (
               <ul className="space-y-3">
                {point.arlox.points.map((pt, i) => (
                  <li key={i} className="text-sm text-slate-800 font-bold flex items-start gap-3">
                    <Check size={16} className={`mt-0.5 ${styles.text} flex-shrink-0`} strokeWidth={3} />
                    {pt}
                  </li>
                ))}
              </ul>
            )}

            {point.arlox.timeline && (
              <div className="space-y-3">
                {point.arlox.timeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm p-2 rounded-lg bg-slate-50">
                    <span className={`font-bold text-xs px-2 py-1 rounded ${styles.bg} text-white`}>{item.week}</span>
                    <span className="text-slate-800 font-bold">{item.task}</span>
                  </div>
                ))}
              </div>
            )}

             {point.arlox.engines && (
              <div className="space-y-2">
                {point.arlox.engines.map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-sm flex justify-between items-center">
                    <span className={`font-black ${styles.text}`}>{item.name}</span>
                    <span className="text-slate-700 font-medium">{item.desc}</span>
                  </div>
                ))}
              </div>
            )}

            {point.arlox.markets && (
              <div className="space-y-3">
                {point.arlox.markets.map((item, i) => (
                  <div key={i} className="text-sm bg-slate-50 p-3 rounded-xl">
                    <div className={`font-black ${styles.text} mb-1`}>{item.name}</div>
                    <div className="text-slate-700 text-xs font-medium">{item.tactics}</div>
                  </div>
                ))}
              </div>
            )}

            {point.arlox.scripts && (
              <div className="flex flex-wrap gap-2">
                {point.arlox.scripts.map((script, i) => (
                  <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${styles.border} ${styles.light} ${styles.text}`}>
                    {script}
                  </span>
                ))}
              </div>
            )}

             {point.arlox.steps && (
              <div className="space-y-2">
                {point.arlox.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded-lg">
                    <div className={`w-6 h-6 rounded flex items-center justify-center text-xs text-white ${styles.bg}`}>{i + 1}</div>
                    {step.replace(/^\d\.\s*/, '')}
                  </div>
                ))}
              </div>
            )}
             
             {point.arlox.qualify && (
              <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                 {point.arlox.qualify.map((q, i) => (
                   <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-800">
                     <Check size={14} className="text-emerald-500" />
                     {q}
                   </div>
                 ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Impact */}
      <div className={`mt-8 p-5 rounded-2xl bg-gradient-to-r ${styles.gradient} text-white shadow-lg`}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <h4 className="text-xs font-bold text-white/70 uppercase mb-1">Impact on Wallet</h4>
            <p className="font-bold leading-relaxed text-sm sm:text-base">
              {point.impact}
            </p>
          </div>
           {point.evidence && (
            <div className="sm:w-1/3 text-xs bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
              <span className="font-bold block mb-1 opacity-80">Evidence:</span>
              <span className="italic opacity-90 leading-tight block">{point.evidence}</span>
            </div>
           )}
        </div>
      </div>

    </div>
  );
};

export default ArloxUniquenessSection;