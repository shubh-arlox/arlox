"use client"
import React, { useState, useEffect } from 'react';
import { 
  TrendingDown, 
  X, 
  ArrowDown, 
  Droplets, 
  Target, 
  Zap, 
  Users, 
  ShieldAlert,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CalendlyCTA from '@/components/CalendlyCTA';

const HiddenCost = () => {
  const [activeCascade, setActiveCascade] = useState(null);
  const [totalLoss, setTotalLoss] = useState(0);

  // Animation for "Total Loss"
  useEffect(() => {
    const lossInterval = setInterval(() => {
      setTotalLoss(prev => (prev < 25500 ? prev + 250 : 25500));
    }, 20);
    return () => clearInterval(lossInterval);
  }, []);

  // Custom neumorphic shadow classes
  const neuOuter = "bg-[#e0e5ec] shadow-[6px_6px_12px_rgb(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)]";
  const neuInner = "bg-[#e0e5ec] shadow-[inset_6px_6px_12px_rgb(163,177,198,0.7),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]";
  const neuBtn = "bg-[#e0e5ec] hover:shadow-[inset_6px_6px_12px_rgb(163,177,198,0.7),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] shadow-[6px_6px_12px_rgb(163,177,198,0.7),-6px_-6px_12px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgb(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300";
  const neuPressed = "bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#ffffff]";

  // Data for the Cascade Visualization
  const cascadeSteps = [
    {
      id: 1,
      title: "Generic Angle",
      metric: "CPM Spike",
      cost: "$3,000",
      description: "If your angle doesn't stand out, you pay premium rates to blend in. CPM jumps from $12 to $18+.",
      icon: <TrendingDown size={20} className="text-red-500" />,
      highlight: "Wasted Ad Spend"
    },
    {
      id: 2,
      title: "Algorithm Confusion",
      metric: "Targeting Miss",
      cost: "$2,500",
      description: "Meta's AI gets confused by generic messaging. You pay to reach the wrong people who will never convert.",
      icon: <Target size={20} className="text-red-500" />,
      highlight: "Wrong Audience"
    },
    {
      id: 3,
      title: "Opportunity Cost",
      metric: "Lost Revenue",
      cost: "$15,000",
      description: "While you test 'Premium Quality', competitors find the 'Sustainability Hero' angle and scale to 5x ROAS.",
      icon: <BarChart3 size={20} className="text-red-500" />,
      highlight: "Missed Scale"
    },
    {
      id: 4,
      title: "Brand Damage",
      metric: "Equity Loss",
      cost: "Priceless",
      description: "Contradictory angles confuse customers. Are you luxury? Affordable? Fun? Confusion kills conversion.",
      icon: <ShieldAlert size={20} className="text-red-500" />,
      highlight: "Positioning"
    },
    {
      id: 5,
      title: "Team Velocity",
      metric: "Burnout",
      cost: "$5,000",
      description: "Churning out endless variations without a framework destroys morale. Talent leaves. Velocity tanks.",
      icon: <Users size={20} className="text-red-500" />,
      highlight: "Staff Churn"
    }
  ];

  return (
    <div className="w-full bg-[#e0e5ec] text-slate-600 font-sans overflow-x-hidden">
      {/* ================= SECTION 2: THE HIDDEN COST ================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-center py-24 bg-[#e0e5ec] overflow-hidden">s

        <div className="w-full px-6 md:px-12 relative z-10">
          
          <div className="text-center mb-20 max-w-4xl mx-auto">
              <motion.div 
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.2, ease: "easeOut" }}
  className="mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full neu-pressed text-[10px] md:text-xs font-bold text-[#ff6b6b] uppercase tracking-wide"
>
  <Zap size={14} className="shrink-0" />
  <span>System Overload</span>
</motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight mb-6">
              The Hidden Cost: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">What Bad Testing Really Costs You</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              The damage from unfocused "testing" isn't just a line item. It's a compounding failure that drains budget, data integrity, and team morale.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: THE CASCADE VISUALIZATION */}
            <div className="lg:col-span-7 lg:w-4/5 flex flex-col items-center">
               
               {/* Starting Point */}
               <div className={`w-full md:w-80 p-6 rounded-2xl ${neuOuter} text-center mb-8 relative z-10`}>
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Starting Monthly Budget</span>
                 <div className="text-3xl font-bold text-slate-700 mt-2">$10,000</div>
                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-slate-300">
                    <ArrowDown size={32} />
                 </div>
               </div>

               {/* The Cascade Flow */}
               <div className="w-full relative pl-8 md:pl-0">
                  {/* Vertical Pipe */}
                  <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-2 bg-slate-200 transform md:-translate-x-1/2 rounded-full"></div>
                  
                  {/* Cascade Items */}
                  {cascadeSteps.map((step, index) => (
                    <div 
                      key={step.id}
                      className="relative mb-8 last:mb-0 group"
                      onMouseEnter={() => setActiveCascade(step.id)}
                      onMouseLeave={() => setActiveCascade(null)}
                    >
                      {/* Connection Dot */}
                      <div className={`absolute left-[-1.9rem] md:left-1/2 md:-ml-3 top-6 w-6 h-6 rounded-full border-4 border-[#EFEEEE] z-20 transition-colors duration-300 ${activeCascade === step.id ? 'bg-red-500' : 'bg-slate-300'}`}></div>

                      {/* Card */}
                      <div className={`md:ml-[50%] md:pl-12 w-full md:w-1/2 transition-transform duration-300 ${activeCascade === step.id ? 'scale-105' : 'scale-100'}`}>
                         <div className={`p-6 rounded-2xl ${activeCascade === step.id ? neuPressed : neuOuter} cursor-pointer relative overflow-hidden`}>
                            
                            {/* Leak Animation (Only visible on hover) */}
                            {activeCascade === step.id && (
                              <div className="absolute top-0 right-0 p-2 opacity-20">
                                <Droplets className="text-red-500 animate-bounce" size={48} />
                              </div>
                            )}

                            <div className="flex items-start justify-between mb-2">
                               <div className="flex items-center gap-3">
                                 <div className={`p-2 rounded-lg ${neuInner}`}>{step.icon}</div>
                                 <h4 className="font-bold text-slate-700">{step.title}</h4>
                               </div>
                               <span className="text-red-500 font-bold font-mono">{step.cost}</span>
                            </div>
                            
                            <div className={`overflow-hidden transition-all duration-500 ${activeCascade === step.id ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                               <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-200 pt-3">
                                 {step.description}
                               </p>
                               <div className="mt-2 text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                                 <X size={12} /> {step.highlight}
                               </div>
                            </div>
                         </div>
                      </div>
                    </div>
                  ))}
               </div>

               {/* The Drain / Total Loss */}
               <div className={`w-full md:w-96 mt-12 p-8 rounded-3xl ${neuInner} relative text-center overflow-hidden`}>
                 <div className="absolute top-0 left-0 w-full h-2 bg-red-500/20 animate-pulse"></div>
                 <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Total Monthly Loss</h4>
                 <div className="text-4xl md:text-5xl font-black text-red-500 mb-2">
                   -${totalLoss.toLocaleString()}
                 </div>
                 <p className="text-xs text-red-400 opacity-70">Recurring every 30 days</p>
               </div>
            </div>

            {/* RIGHT: COMPARISON & SUMMARY */}
            <div className="lg:col-span-5 lg:w-2/3 top-24">
              <div className={`p-8 rounded-[2.5rem] ${neuOuter} border-2 border-transparent hover:border-white/50 transition-all`}>
                <h3 className="text-2xl font-bold text-slate-700 mb-6">The Alternative</h3>
                
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                        <Zap size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 font-bold uppercase">Scientific Testing Cost</div>
                        <div className="text-2xl font-bold text-slate-700">$2,000 <span className="text-sm font-normal text-slate-400">/ mo</span></div>
                      </div>
                   </div>

                   <div className="p-6 rounded-2xl bg-green-50 border border-green-100 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-green-700">ROI Impact</span>
              <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded">IMMEDIATE</span>
            </div>
            <p className="text-green-800/80 text-sm leading-relaxed">
              By avoiding the "Cascade of Waste", your first scientific test pays for itself <strong>13x over</strong> simply by stopping the bleeding.
            </p>
              </div>

                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-4">Why this happens:</h4>
                  <ul className="space-y-3">
                    {['Generic Angles increase CPMs', 'Confused Algorithms target loosely', 'Slow Testing = Lost Market Share'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                       <div className=' flex flex-col items-center'>
              <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
  <button 
    className={`w-full sm:w-auto mx-auto sm:mx-0 sm:ml-14 sm:mr-8 mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center rounded-xl ${neuBtn} text-slate-700 font-bold group`}
    aria-label="Book a strategy call to stop wasting ad spend"
  >
    <span className="group-hover:text-red-500 transition-colors">
      Stop The Bleeding
    </span>
  </button>
</CalendlyCTA>
</div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HiddenCost;