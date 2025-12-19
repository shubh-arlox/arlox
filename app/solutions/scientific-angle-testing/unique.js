"use client"
import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  Database, 
  BarChart3, 
  RefreshCcw, 
  XCircle, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Layers,
  ArrowRight,
  Target
} from 'lucide-react';
import { motion } from 'framer-motion';


const ArloxUniqueness = () => {
  const [expandedItem, setExpandedItem] = useState(1);

  // Neumorphic Utility Classes
  const neuOuter = "bg-[#E0E5EC] shadow-[8px_8px_16px_#bec3ca,-8px_-8px_32px_#ffffff]";
  const neuInner = "bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#bec3ca,inset_-6px_-6px_12px_#ffffff]";
  const neuBtn = "bg-[#E0E5EC] hover:shadow-[inset_4px_4px_8px_#bec3ca,inset_-4px_-4px_8px_#ffffff] shadow-[6px_6px_12px_#bec3ca,-6px_-6px_12px_#ffffff] transition-all duration-300";
  const neuPressed = "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bec3ca,inset_-4px_-4px_8px_#ffffff] border border-slate-200";
  const neuPressedRed = "bg-red-50/50 shadow-[inset_4px_4px_8px_#f5d5d5,inset_-4px_-4px_8px_#ffffff] border border-red-100";
  
  // Shadow color mapping
  const neuShadowMap = {
    blue: { dark: '#d1d8e1', light: '#ffffff' },
    purple: { dark: '#dcd7e1', light: '#ffffff' },
    pink: { dark: '#dfd4da', light: '#ffffff' },
    green: { dark: '#d2dfd6', light: '#ffffff' },
    orange: { dark: '#e1d9cf', light: '#ffffff' }
  };

  // Complete class strings for each color
  const neuPressedClasses = {
    blue: 'bg-blue-50/50 shadow-[inset_4px_4px_8px_#d1d8e1,inset_-4px_-4px_8px_#ffffff] border border-blue-100',
    purple: 'bg-purple-50/50 shadow-[inset_4px_4px_8px_#dcd7e1,inset_-4px_-4px_8px_#ffffff] border border-purple-100',
    pink: 'bg-pink-50/50 shadow-[inset_4px_4px_8px_#dfd4da,inset_-4px_-4px_8px_#ffffff] border border-pink-100',
    green: 'bg-green-50/50 shadow-[inset_4px_4px_8px_#d2dfd6,inset_-4px_-4px_8px_#ffffff] border border-green-100',
    orange: 'bg-orange-50/50 shadow-[inset_4px_4px_8px_#e1d9cf,inset_-4px_-4px_8px_#ffffff] border border-orange-100'
  };

  // Icon background classes
  const iconBgClasses = {
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    pink: 'bg-pink-50 text-pink-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600'
  };

  // Text color classes
  const textColorClasses = {
    blue: 'text-blue-500',
    purple: 'text-purple-500',
    pink: 'text-pink-500',
    green: 'text-green-500',
    orange: 'text-orange-500'
  };

  const checkColorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    pink: 'text-pink-600',
    green: 'text-green-600',
    orange: 'text-orange-600'
  };

  const metricColorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    pink: 'text-pink-600',
    green: 'text-green-600',
    orange: 'text-orange-600'
  };

  const highlightBgClasses = {
    blue: 'bg-blue-100/50 text-blue-700 border-blue-200',
    purple: 'bg-purple-100/50 text-purple-700 border-purple-200',
    pink: 'bg-pink-100/50 text-pink-700 border-pink-200',
    green: 'bg-green-100/50 text-green-700 border-green-200',
    orange: 'bg-orange-100/50 text-orange-700 border-orange-200'
  };

  const advantages = [
    {
      id: 1,
      title: "Strategic Framework",
      subtitle: "Not Random Variations",
      icon: <Layers size={24} />,
      color: "blue",
      trad: {
        desc: "Chaotic. 'Let's try some openings and see what sticks.'",
        metric: "15-20% Win Rate",
        visual: "Random Guessing"
      },
      arlox: {
        desc: "Systematic 3-tier architecture. Psychological trigger mapping.",
        metric: "60-75% Insights",
        visual: "Hypothesis Testing"
      },
      comparison: "3-4x Better Insight Generation"
    },
    {
      id: 2,
      title: "AI-Accelerated Production",
      subtitle: "At 1/5th The Cost",
      icon: <Zap size={24} />,
      color: "purple",
      trad: {
        desc: "Physical shoots. Weeks of planning. Expensive models.",
        metric: "$3k - $10k / angle",
        visual: "2-4 Weeks"
      },
      arlox: {
        desc: "Generative AI workflow. Infinite variations. Rapid iteration.",
        metric: "$500 - $1.5k / angle",
        visual: "3-5 Days"
      },
      comparison: "5x More Angles for Same Budget"
    },
    {
      id: 3,
      title: "Fashion-Specific Library",
      subtitle: "Category Intelligence",
      icon: <Database size={24} />,
      color: "pink",
      trad: {
        desc: "Generic marketing knowledge. Starting from zero every time.",
        metric: "Trial & Error",
        visual: "Zero Baseline"
      },
      arlox: {
        desc: "Thousands of tested angles. Luxury vs. Fast Fashion insights.",
        metric: "Proven Patterns",
        visual: "6-12 Month Head Start"
      },
      comparison: "Don't Pay to Re-learn Basics"
    },
    {
      id: 4,
      title: "Business Metrics",
      subtitle: "Not Vanity Metrics",
      icon: <BarChart3 size={24} />,
      color: "green",
      trad: {
        desc: "'We got 10M impressions!' (but ROAS is 2.1x).",
        metric: "Vanity Focus",
        visual: "Report Padding"
      },
      arlox: {
        desc: "'Angle C generated 5.2x ROAS. Scale it.' Profit focused.",
        metric: "Outcome Focus",
        visual: "Profit Multiplier"
      },
      comparison: "Impressions Don't Pay Bills"
    },
    {
      id: 5,
      title: "Continuous Iteration",
      subtitle: "Combating Fatigue",
      icon: <RefreshCcw size={24} />,
      color: "orange",
      trad: {
        desc: "'Set and forget.' Performance decays after 6 weeks.",
        metric: "Rapid Decay",
        visual: "Temporary Wins"
      },
      arlox: {
        desc: "4-6 week refresh protocol. Seasonal adaptation.",
        metric: "Sustained Scale",
        visual: "Compounding Growth"
      },
      comparison: "Sustained Competitive Advantage"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#E0E5EC] text-slate-600 font-sans py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, ease: "easeOut" }}
              className={`mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full ${neuPressed} text-[10px] md:text-xs font-bold text-green-600 uppercase tracking-wide`}
            >
              <Target size={14} className="shrink-0" />
              <span>The Arlox Advantage</span>
            </motion.div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight mb-6">
            Why Arlox is Different.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We don't just run ads. We install a scientific testing infrastructure into your brand.
          </p>
        </div>

        {/* COMPARISON ACCORDION */}
        <div className="space-y-6">
          {advantages.map((item) => (
            <div 
              key={item.id}
              onClick={() => setExpandedItem(item.id === expandedItem ? null : item.id)}
              className={`rounded-3xl transition-all duration-500 overflow-hidden cursor-pointer group ${expandedItem === item.id ? `${neuOuter} ring-1 ring-white` : `${neuBtn} hover:-translate-y-1`}`}
            >
              {/* Header Row */}
              <div className="p-6 md:p-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${expandedItem === item.id ? `${iconBgClasses[item.color]} shadow-inner` : `bg-[#EFEEEE] ${neuInner} text-slate-400`}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${expandedItem === item.id ? 'text-slate-800' : 'text-slate-600'}`}>{item.title}</h3>
                    <p className={`text-sm font-medium ${expandedItem === item.id ? textColorClasses[item.color] : 'text-slate-400'}`}>{item.subtitle}</p>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${expandedItem === item.id ? 'rotate-90 bg-slate-200' : 'rotate-0'}`}>
                  <ArrowRight size={16} className="text-slate-500" />
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`transition-all duration-500 ease-in-out ${expandedItem === item.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 relative">
                    
                    {/* VS Divider (Desktop) */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-200 items-center justify-center z-10 text-[10px] font-bold text-slate-500 border-2 border-[#EFEEEE]">
                      VS
                    </div>

                    {/* LEFT: TRADITIONAL */}
                    <div className={`p-6 rounded-2xl ${neuPressedRed} relative overflow-hidden`}>
                      <div className="flex items-center gap-2 mb-4 text-red-400 font-bold text-xs uppercase tracking-widest">
                        <XCircle size={14} /> Traditional Agency
                      </div>
                      <p className="text-slate-600 font-medium mb-6 min-h-[3rem]">{item.trad.desc}</p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>Metric</span>
                          <span className="font-bold text-red-500">{item.trad.metric}</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>Workflow</span>
                          <span className="font-bold text-slate-600">{item.trad.visual}</span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT: ARLOX */}
                    <div className={`p-6 rounded-2xl ${neuPressedClasses[item.color]} relative overflow-hidden shadow-sm`}>
                      <div className={`flex items-center gap-2 mb-4 ${checkColorClasses[item.color]} font-bold text-xs uppercase tracking-widest`}>
                        <CheckCircle2 size={14} /> Arlox Method
                      </div>
                      <p className="text-slate-700 font-bold mb-6 min-h-[3rem]">{item.arlox.desc}</p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>Metric</span>
                          <span className={`font-bold ${metricColorClasses[item.color]}`}>{item.arlox.metric}</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>Workflow</span>
                          <span className="font-bold text-slate-700">{item.arlox.visual}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                  
                  {/* Bottom Highlight Bar */}
                  <div className={`mt-6 p-3 rounded-xl ${highlightBgClasses[item.color]} text-center text-sm font-bold border flex items-center justify-center gap-2`}>
                    <TrendingUp size={16} /> Advantage: {item.comparison}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* COMPOUND EFFECT CALCULATOR */}
        <div className="mt-20">
          <div className={`rounded-[2.5rem] ${neuOuter} p-8 lg:p-12 relative overflow-hidden border border-white/50`}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-slate-700 mb-4">The Compound Effect</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  This isn't just a marketing service. It's a profit multiplier. See the difference one year of scientific testing makes.
                </p>
                
                <div className="flex gap-4 mb-6">
                  <div className="px-4 py-2 rounded-lg bg-slate-200 text-slate-500 text-xs font-bold uppercase">Year 1 Projection</div>
                  <div className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase">$120k Spend</div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className={`p-6 rounded-3xl ${neuInner} bg-slate-50/50 space-y-4`}>
                  
                  {/* Traditional Row */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/40 border border-slate-200 opacity-60">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Traditional (2.2x ROAS)</div>
                      <div className="text-lg font-bold text-slate-600">$144k Profit</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Revenue</div>
                      <div className="text-sm font-bold text-slate-500">$264k</div>
                    </div>
                  </div>

                  {/* Arlox Row */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-green-100 transform scale-105">
                    <div>
                      <div className="text-[10px] font-bold text-green-600 uppercase flex items-center gap-1"><Zap size={10}/> Arlox (4.5x ROAS)</div>
                      <div className="text-2xl font-black text-slate-800">$420k Profit</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Revenue</div>
                      <div className="text-sm font-bold text-green-600">$540k</div>
                    </div>
                  </div>

                  {/* Difference */}
                  <div className="pt-2 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg shadow-green-200">
                      +$276k Additional Profit
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ArloxUniqueness;
