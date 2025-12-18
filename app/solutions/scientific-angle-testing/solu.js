"use client"
import React, { useState, useEffect } from 'react';
import { 
  Beaker, 
  GitBranch, 
  Layers, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  BarChart2, 
  Target, 
  Microscope,
  TrendingUp,
  AlertCircle,
  Play,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SolutionSection = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [simulationProgress, setSimulationProgress] = useState(0);

  // Simulation timer for the dashboard metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulationProgress(prev => (prev < 100 ? prev + 1 : 0));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Data for Architecture Cards
  const levels = [
    {
      level: "Level 1",
      title: "Strategic Angle",
      icon: <Target className="text-blue-500" size={24} />,
      desc: "Your 'Big Idea'. A strategic framing of the product's role in the customer's life.",
      examples: ["Problem-Solver", "Identity/Lifestyle", "Mission-Driven"]
    },
    {
      level: "Level 2",
      title: "Hook Categories",
      icon: <Layers className="text-purple-500" size={24} />,
      desc: "3 distinct psychological entry points per angle.",
      examples: ["Pattern Interrupt", "Direct Callout", "Curiosity/Story"]
    },
    {
      level: "Level 3",
      title: "Hook Variations",
      icon: <GitBranch className="text-orange-500" size={24} />,
      desc: "3 executional variations per category.",
      examples: ["Visual Variant", "Text Variant", "Audio Variant"]
    }
  ];

  // Diagnostic Data
  const diagnostics = [
    { metric: "Hook Rate", status: "Low?", fix: "Your hook failed. No one watched.", action: "Fix First 3 Seconds" },
    { metric: "CTR", status: "Low?", fix: "Angle didn't resonate. They didn't care.", action: "Fix Core Messaging" },
    { metric: "CVR", status: "Low?", fix: "Offer misalignment.", action: "Fix Landing Page" },
    { metric: "ROAS", status: "Low?", fix: "Economics broken.", action: "Fix Funnel Math" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#e0e5ec] text-slate-600 font-sans py-12 sm:py-16 md:py-24 overflow-hidden">
      
      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .neu-flat {
          background: #e0e5ec;
          box-shadow: 9px 9px 16px rgb(163,177,198,0.6), 
                     -9px -9px 16px rgba(255,255,255, 0.5);
          border-radius: 20px;
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
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
          
            <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.2, ease: "easeOut" }}
             className="mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full neu-pressed text-[10px] md:text-xs font-bold text-blue-800 uppercase tracking-wide"
           >
             <Microscope  size={14} className="shrink-0" />
             <span>The Arloxian Framework</span>
           </motion.div>
  
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 leading-tight mb-4 sm:mb-6 px-4">
            Scientific Angle Testing.
           
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto px-4">
            There's a better way. A systematic architecture designed to engineer high-performing creative assets through rigorous experimentation.
          </p>
        </div>

        {/* SECTION 1: THE ARCHITECTURE */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {levels.map((lvl, idx) => (
              <div key={idx} className="neu-card relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl neu-flat flex items-center justify-center font-bold text-slate-400 text-xs sm:text-sm border border-white/50">
                  0{idx + 1}
                </div>
                <div className="mb-4 sm:mb-6 flex justify-between items-start gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-700">{lvl.title}</h3>
                  <div className="neu-pressed p-2 sm:p-3 rounded-full flex-shrink-0">{lvl.icon}</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 min-h-[3rem]">{lvl.desc}</p>
                <div className="neu-pressed p-3 sm:p-4 rounded-xl">
                  <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Examples</div>
                  <ul className="space-y-2">
                    {lvl.examples.map((ex, i) => (
                      <li key={i} className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></div> {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* The Math Formula */}
          <div className="neu-flat mt-8 sm:mt-12 mx-auto max-w-2xl p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-slate-700 font-bold text-sm sm:text-base">
            <span className="text-blue-500">1 Angle</span>
            <span className="text-slate-400">×</span>
            <span className="text-purple-500">3 Categories</span>
            <span className="text-slate-400">×</span>
            <span className="text-orange-500">3 Variations</span>
            <span className="text-slate-400">=</span>
            <span className="neu-pressed px-3 sm:px-4 py-2 rounded-lg text-green-600">9 Engineered Hooks</span>
          </div>
        </div>

        {/* SECTION 2: INTERACTIVE DASHBOARD */}
        <div className="neu-flat w-full rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 overflow-hidden relative">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* MAIN DASHBOARD PANEL */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-700 flex items-center gap-3">
                  <BarChart2 className="text-blue-500" size={24} /> Protocol Dashboard
                </h3>
                {/* Timeline Nav */}
               <div className="neu-pressed flex p-1 rounded-xl w-full sm:w-auto overflow-x-auto scrollbar-hide">
  {[
    { id: 1, label: "Week 1", fullLabel: "Build" },
    { id: 2, label: "Week 2-3", fullLabel: "Test" },
    { id: 3, label: "Week 4", fullLabel: "Scale" }
  ].map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveWeek(tab.id)}
      className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all whitespace-nowrap ${
        activeWeek === tab.id 
          ? "bg-[#e0e5ec] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.7)] text-blue-600" 
          : 'text-slate-400 hover:text-slate-600'
      }`}
    >
      <span className="hidden sm:inline">{tab.label}: </span>
      {tab.fullLabel}
    </button>
  ))}
</div>

              </div>

              {/* Dynamic Content Area */}
              <div className="min-h-[300px] sm:min-h-[400px] rounded-2xl sm:rounded-3xl neu-pressed p-4 sm:p-6 relative overflow-hidden transition-all duration-500">
                
                {/* WEEK 1: BUILD VIEW */}
                {activeWeek === 1 && (
                  <div className="animate-fade-in h-full flex flex-col items-center justify-center space-y-6 sm:space-y-8">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">Generating Assets...</span>
                    </div>
                    
                    {/* Tree Visualization */}
                    <div className="relative w-full max-w-lg px-4">
                      {/* Root */}
                      <div className="mx-auto w-28 sm:w-32 p-2 sm:p-3 text-center rounded-lg bg-blue-100 border border-blue-200 text-blue-700 font-bold text-xs sm:text-sm shadow-sm z-10 relative">
                        Strategic Angle
                      </div>
                      <div className="h-6 sm:h-8 w-px bg-slate-300 mx-auto"></div>
                      
                      {/* Branches */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 relative">
                        <div className="absolute top-0 left-[16%] right-[16%] h-px bg-slate-300"></div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex flex-col items-center">
                             <div className="h-3 sm:h-4 w-px bg-slate-300"></div>
                             <div className="w-full p-1.5 sm:p-2 text-center rounded bg-white border border-slate-200 text-[9px] sm:text-[10px] font-bold text-slate-600 shadow-sm mb-2">
                               Hook Cat {i}
                             </div>
                             {/* Leaves */}
                             <div className="flex gap-1">
                               {[1,2,3].map(j => (
                                 <div key={j} className="w-4 h-6 sm:w-6 sm:h-8 bg-slate-200 rounded-sm border border-slate-300"></div>
                               ))}
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8 text-center">
                       <div className="text-2xl sm:text-3xl font-bold text-slate-700">27</div>
                       <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">Total Hooks Created</div>
                    </div>
                  </div>
                )}

                {/* WEEK 2-3: TEST VIEW */}
                {activeWeek === 2 && (
                  <div className="animate-fade-in h-full p-2">
                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 sm:mb-6 gap-3">
                        <div>
                          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Live Performance</span>
                          <div className="text-xs sm:text-sm text-slate-500">Budget Pacing: <span className="text-green-500 font-bold">On Track</span></div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-400"><div className="w-2 h-2 rounded-full bg-green-500"></div>Winner</div>
                          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-400"><div className="w-2 h-2 rounded-full bg-yellow-500"></div>Avg</div>
                          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-400"><div className="w-2 h-2 rounded-full bg-red-500"></div>Kill</div>
                        </div>
                     </div>

                     <div className="space-y-3">
                       {/* Simulated Rows */}
                       {[
                         { name: "Hook A - Var 1", roas: 4.2, rate: 45, color: "bg-green-500", w: "80%" },
                         { name: "Hook B - Var 2", roas: 3.8, rate: 38, color: "bg-green-400", w: "70%" },
                         { name: "Hook A - Var 3", roas: 2.1, rate: 22, color: "bg-yellow-400", w: "45%" },
                         { name: "Hook C - Var 1", roas: 0.8, rate: 12, color: "bg-red-400", w: "20%" },
                         { name: "Hook C - Var 2", roas: 0.5, rate: 8, color: "bg-red-500", w: "15%" },
                       ].map((item, idx) => (
                         <div key={idx} className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs">
                           <div className="w-20 sm:w-24 font-bold text-slate-600 truncate flex-shrink-0">{item.name}</div>
                           <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                             <div className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`} style={{ width: item.w }}></div>
                           </div>
                           <div className="w-12 sm:w-16 text-right font-mono text-slate-500 flex-shrink-0">{item.roas}x</div>
                         </div>
                       ))}
                     </div>
                     
                     <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
                       {[
                         { label: "Hook Rate", val: "32%" },
                         { label: "CTR", val: "2.4%" },
                         { label: "CPA", val: "$22" },
                         { label: "ROAS", val: "2.8x" }
                       ].map((stat, i) => (
                         <div key={i} className="neu-flat p-2 sm:p-3 rounded-lg">
                           <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase">{stat.label}</div>
                           <div className="font-bold text-sm sm:text-base text-slate-700">{stat.val}</div>
                         </div>
                       ))}
                     </div>
                  </div>
                )}

                {/* WEEK 4: SCALE VIEW */}
                {activeWeek === 3 && (
                  <div className="animate-fade-in h-full flex flex-col items-center justify-center text-center px-4">
                     <div className="neu-pressed w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-green-600 mb-4 sm:mb-6">
                        <TrendingUp size={32} className="sm:w-10 sm:h-10" />
                     </div>
                     <h4 className="text-xl sm:text-2xl font-bold text-slate-700 mb-2">Winner Identified</h4>
                     <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 max-w-xs mx-auto">
                       Reallocating budget from 24 underperformers to <span className="font-bold text-green-600">3 Winners</span>.
                     </p>
                     
                     <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-md">
                        <div className="neu-flat p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-green-200">
                           <div className="text-[9px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">Proj. ROAS</div>
                           <div className="text-2xl sm:text-3xl font-black text-green-600">5.2x</div>
                        </div>
                        <div className="neu-flat p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-blue-200">
                           <div className="text-[9px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">Monthly Rev</div>
                           <div className="text-2xl sm:text-3xl font-black text-blue-600">$52k</div>
                        </div>
                     </div>
                  </div>
                )}
              </div>
            </div>

            {/* SIDE DIAGNOSTIC PANEL */}
            <div className="lg:w-80 w-full">
              <div className="neu-flat p-4 sm:p-6 rounded-2xl sm:rounded-3xl h-full border border-white/50">
                <h4 className="font-bold text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 flex items-center gap-2">
                  <Activity size={18} className="text-blue-500" /> Diagnostic Logic
                </h4>
                
                <div className="space-y-4 sm:space-y-6 relative">
                  <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-slate-200"></div>
                  
                  {diagnostics.map((diag, i) => (
                    <div key={i} className="relative pl-6 sm:pl-8">
                       <div className="absolute left-0 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-slate-200 z-10 flex items-center justify-center">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                       </div>
                       <div className="mb-1 flex justify-between items-center">
                         <span className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase">{diag.metric} {diag.status}</span>
                       </div>
                       <div className="text-[10px] sm:text-xs text-slate-400 mb-2">{diag.fix}</div>
                       <div className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-500 text-[9px] sm:text-[10px] font-bold rounded border border-red-100">
                         <Zap size={10} /> {diag.action}
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* BOTTOM SUMMARY */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 opacity-80">
             <div className="flex gap-6 sm:gap-8 text-center md:text-left">
               <div>
                 <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest">Total Investment</div>
                 <div className="font-bold text-sm sm:text-base text-slate-600">$2,025</div>
               </div>
               <div>
                 <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest">Winning Combo</div>
                 <div className="font-bold text-sm sm:text-base text-blue-600">Angle B + Hook 2</div>
               </div>
             </div>
             
             <div className="neu-pressed px-4 sm:px-6 py-3 rounded-xl flex items-center gap-3">
               <div className="text-right">
                 <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest">ROI on Testing</div>
                 <div className="font-bold text-green-600 text-base sm:text-lg">+$49,975 / mo</div>
               </div>
               <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
