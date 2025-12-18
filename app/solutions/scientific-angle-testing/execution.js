"use client"
import React, { useState } from 'react';
import { 
  Brain, 
  Bot, 
  Beaker, 
  Trophy, 
  Rocket, 
  Clock, 
  CheckCircle2, 
  Zap, 
  Layers, 
  ArrowRight,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CalendlyCTA from '@/components/CalendlyCTA';

const ExecutionMethod = () => {
  const [activePhase, setActivePhase] = useState(1);
  const [mobileExpandedPhase, setMobileExpandedPhase] = useState(null);

  const phases = [
    {
      id: 1,
      title: "Strategic Angle Development",
      week: "Week 1",
      icon: <Brain size={24} />,
      color: "blue",
      involvement: "3-4 Hours",
      deliverable: "27-45 Strategic Hook Scripts",
      desc: "We don't guess. We architect. We map your brand against 5 strategic angles and 3 psychological hook frameworks.",
      steps: [
        "Deep Brand & Audience Analysis",
        "Angle Hypothesis Creation (Problem, Identity, Mission)",
        "Hook Category Framework (Pattern Interrupt, Callout, Story)",
        "Hook Variation Scripting (9 variations per angle)"
      ],
      technical: "ICE Framework Scoring • Psychographic Mapping • Sonic Branding Strategy"
    },
    {
      id: 2,
      title: "Rapid Asset Production",
      week: "Week 1-2",
      icon: <Bot size={24} />,
      color: "purple",
      involvement: "1-2 Hours",
      deliverable: "27-45 Complete Variations",
      desc: "Using our proprietary AI workflow, we produce high-fidelity creative assets at 10x the speed of traditional studios.",
      steps: [
        "AI-Accelerated Creative Production",
        "Product Demo Sequences & Lifestyle Contexts",
        "Text Overlay Animations & Audio Mixing",
        "Asset Approval Loop"
      ],
      technical: "Generative AI Video • Automated Captioning • Dynamic Audio Ducking",
      comparison: true
    },
    {
      id: 3,
      title: "Controlled Testing Deployment",
      week: "Week 2-3",
      icon: <Beaker size={24} />,
      color: "cyan",
      involvement: "Minimal (Monitoring)",
      deliverable: "Live Performance Dashboard",
      desc: "We isolate variables. Every hook gets equal budget and identical conditions to prove what actually stops the scroll.",
      steps: [
        "Scientific Test Architecture Setup",
        "Equal Budget Allocation ($50-100/hook)",
        "Multi-platform Deployment (Meta, TikTok)",
        "Real-time Performance Monitoring"
      ],
      technical: "CBO/ABO Structure • Pixel Event Calibration • Attribution Modeling"
    },
    {
      id: 4,
      title: "Winner Identification",
      week: "Week 3-4",
      icon: <Trophy size={24} />,
      color: "orange",
      involvement: "2-3 Hours",
      deliverable: "Results + Action Plan",
      desc: "Data separates the winners from the noise. We identify the top 15% of assets that deserve your scale budget.",
      steps: [
        "Statistical Significance Testing",
        "Tier 1 (Scale), Tier 2 (Test), Tier 3 (Kill) Analysis",
        "Strategic Recommendations (Angle & Budget)",
        "Creative Iteration Roadmap"
      ],
      technical: "Confidence Interval Analysis • ROAS Projection Modeling"
    },
    {
      id: 5,
      title: "Scale & Iterate",
      week: "Week 4+",
      icon: <Rocket size={24} />,
      color: "green",
      involvement: "Execute w/ Confidence",
      deliverable: "Sustained 4-5x+ ROAS",
      desc: "We double down on what works. Expanding winning angles into new formats, platforms, and audiences.",
      steps: [
        "Winning Angle Expansion",
        "Platform & Budget Scaling",
        "Long-form Content Development",
        "Continuous Hook Testing Cycles (4-6 weeks)"
      ],
      technical: "Horizontal vs Vertical Scaling • Lookalike Audience Expansion"
    }
  ];

  const activeData = phases.find(p => p.id === activePhase);

  const toggleMobilePhase = (phaseId) => {
    setMobileExpandedPhase(mobileExpandedPhase === phaseId ? null : phaseId);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#e0e5ec] text-slate-600 font-sans py-12 md:py-20 overflow-hidden">
      {/* Inline Styles for Neumorphic Design */}
      <style jsx>{`
        .neu-flat {
          background: #e0e5ec;
          box-shadow: 9px 9px 16px rgb(163,177,198,0.6), 
                     -9px -9px 16px rgba(255,255,255, 0.5);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .neu-pressed {
          background: #e0e5ec;
          box-shadow: inset 6px 6px 10px 0 rgba(163,177,198, 0.7), 
                     inset -6px -6px 10px 0 rgba(255,255,255, 0.8);
          border-radius: 20px;
        }
        .neu-card {
          background: #e0e5ec;
          box-shadow: 6px 6px 12px rgb(163,177,198,0.6), 
                     -6px -6px 12px rgba(255,255,255, 0.5);
          border-radius: 24px;
          transition: all 0.3s ease;
        }
        .neu-card:hover {
          transform: translateY(-4px);
          box-shadow: 8px 8px 16px rgb(163,177,198,0.7), 
                     -8px -8px 16px rgba(255,255,255, 0.6);
        }
        .neu-active {
          background: #e0e5ec;
          box-shadow: inset 6px 6px 12px rgb(163,177,198,0.7),
                     inset -6px -6px 12px rgba(255,255,255,0.8);
          border-left: 4px solid #3b82f6;
        }
        .neu-inactive {
          background: #e0e5ec;
          box-shadow: 6px 6px 12px rgb(163,177,198,0.6), 
                     -6px -6px 12px rgba(255,255,255, 0.5);
          border-left: 4px solid transparent;
          transition: transform 0.3s ease;
        }
        .neu-inactive:hover {
          transform: translateY(-2px);
        }
        .mobile-detail-panel {
          background: #e0e5ec;
          box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5),
                     inset -4px -4px 8px rgba(255,255,255,0.6);
          border-radius: 16px;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="flex justify-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full neu-pressed text-[10px] md:text-xs font-bold text-[#ff6b6b] uppercase tracking-wide"
          >
            <Layers size={14} className="shrink-0" />
            <span>The Execution Roadmap</span>
          </motion.div>
        </div>
        
        {/* Header */}
        <div className="mb-12 md:mb-16 md:flex justify-center items-center">
          <div className="max-w-2xl items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight text-center">
              The Scientific Method.
            </h2>
            <p className="text-base sm:text-sm text-slate-500 mt-3 sm:mt-4 leading-relaxed">
              From hypothesis to scale in 4 weeks. A transparent, systematic process designed to minimize risk.
            </p>
          </div>
        </div>

        {/* MOBILE VIEW: Accordion Style */}
        <div className="lg:hidden space-y-4">
          {phases.map((phase) => (
            <div key={phase.id} className="neu-flat overflow-hidden">
              <button
                onClick={() => toggleMobilePhase(phase.id)}
                className="w-full text-left p-4 flex items-center gap-3 group outline-none"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  mobileExpandedPhase === phase.id ? 'bg-blue-100 text-blue-600' : 'bg-[#e0e5ec] neu-pressed text-slate-400'
                }`}>
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{phase.week}</div>
                  <div className={`font-bold text-sm ${mobileExpandedPhase === phase.id ? 'text-slate-800' : 'text-slate-600'}`}>
                    {phase.title}
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: mobileExpandedPhase === phase.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className={mobileExpandedPhase === phase.id ? 'text-blue-500' : 'text-slate-400'} />
                </motion.div>
              </button>

              <AnimatePresence>
                {mobileExpandedPhase === phase.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mobile-detail-panel p-4 mx-4 mb-4">
                      <p className="text-slate-500 leading-relaxed text-sm mb-4">{phase.desc}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Execution Steps</h4>
                        <ul className="space-y-2">
                          {phase.steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                              <CheckCircle2 size={14} className={`text-${phase.color}-500 flex-shrink-0 mt-0.5`} />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {phase.comparison && (
                        <div className="mt-4 p-3 rounded-xl neu-pressed">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-2.5 rounded-lg bg-red-50/50 border border-red-100 opacity-60">
                              <div className="text-[9px] uppercase font-bold text-red-400 mb-1">Traditional Agency</div>
                              <div className="text-base font-bold text-slate-500 line-through">$10,000</div>
                              <div className="text-[9px] text-slate-400">4 Weeks</div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-green-50/50 border border-green-100 transform scale-105 shadow-sm">
                              <div className="text-[9px] uppercase font-bold text-green-600 mb-1 flex items-center gap-1">
                                <Zap size={10}/> Arlox AI
                              </div>
                              <div className="text-base font-bold text-slate-700">$1,500</div>
                              <div className="text-[9px] text-slate-500">5 Days</div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-4 pt-4 border-t border-slate-200/60 space-y-2">
                        <div>
                          <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Deliverable</div>
                          <div className="text-xs font-bold text-slate-700">{phase.deliverable}</div>
                        </div>
                        <div>
                          <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Your Involvement</div>
                          <div className="text-xs font-bold text-slate-700">{phase.involvement}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW: Master-Detail Layout */}
        <div className="hidden lg:flex gap-12 min-h-[600px]">
          {/* LEFT COLUMN: Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-5">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`w-full text-left p-5 rounded-2xl flex items-center gap-4 group outline-none ${
                  activePhase === phase.id ? 'neu-active text-blue-600' : 'neu-inactive'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  activePhase === phase.id ? 'bg-blue-100 text-blue-600' : 'bg-[#e0e5ec] neu-pressed text-slate-400'
                }`}>
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{phase.week}</div>
                  <div className={`font-bold text-sm ${activePhase === phase.id ? 'text-slate-800' : 'text-slate-600'}`}>
                    {phase.title}
                  </div>
                </div>
                {activePhase === phase.id && <ChevronRight className="ml-auto text-blue-500 animate-pulse flex-shrink-0" size={16} />}
              </button>
            ))}
          </div>

          {/* RIGHT COLUMN: Detail Panel */}
          <div className="lg:w-2/3">
            <div className="h-full rounded-[2.5rem] neu-flat p-12 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/50 rounded-full blur-[60px] -z-10"></div>
              
              <div className="mb-8 border-b border-slate-200/60 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-lg bg-${activeData.color}-50 text-${activeData.color}-600 text-[10px] font-bold uppercase tracking-widest border border-${activeData.color}-100`}>
                    {activeData.week} Phase
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-700 mb-4">{activeData.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">{activeData.desc}</p>
              </div>

              <div className="flex-grow space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Execution Steps</h4>
                  <ul className="space-y-3">
                    {activeData.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <CheckCircle2 size={18} className={`text-${activeData.color}-500 flex-shrink-0 mt-0.5`} />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {activeData.comparison && (
                  <div className="mt-6 p-4 rounded-xl neu-pressed">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-red-50/50 border border-red-100 opacity-60">
                        <div className="text-[10px] uppercase font-bold text-red-400 mb-1">Traditional Agency</div>
                        <div className="text-lg font-bold text-slate-500 line-through">$10,000</div>
                        <div className="text-[10px] text-slate-400">4 Weeks</div>
                      </div>
                      <div className="p-3 rounded-lg bg-green-50/50 border border-green-100 transform scale-105 shadow-sm">
                        <div className="text-[10px] uppercase font-bold text-green-600 mb-1 flex items-center gap-1">
                          <Zap size={10}/> Arlox AI
                        </div>
                        <div className="text-lg font-bold text-slate-700">$1,500</div>
                        <div className="text-[10px] text-slate-500">5 Days</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 flex gap-8 items-center">
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Deliverable</div>
                  <div className="text-xs font-bold text-slate-700">{activeData.deliverable}</div>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Your Involvement</div>
                  <div className="text-xs font-bold text-slate-700">{activeData.involvement}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUMMARY BAR */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="rounded-2xl sm:rounded-3xl neu-flat p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-white/50">
            <div className="flex items-center gap-3 sm:gap-4 text-center lg:text-left">
              <div className="p-2.5 sm:p-3 rounded-full  text-green-600 flex-shrink-0">
                <Rocket size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                
                <h3 className="font-bold text-slate-700 text-base sm:text-lg">Ready to Launch?</h3>
                <p className="text-xs sm:text-sm text-slate-500">4-6 weeks to validated winners and scalable ROAS.</p>
              </div>
            </div>

            <div className="flex gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Time</div>
                <div className="font-bold text-slate-700 text-lg sm:text-xl">4 Weeks</div>
              </div>
              <div>
                <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client Hours</div>
                <div className="font-bold text-slate-700 text-lg sm:text-xl">~8 Hours</div>
              </div>
              <div>
                <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Est. ROI Value</div>
                <div className="font-bold text-green-600 text-lg sm:text-xl">+$50k/yr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionMethod;
