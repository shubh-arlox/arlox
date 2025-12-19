"use client"
import React, { useState } from 'react';
import { 
  GitMerge, 
  Search, 
  Beaker, 
  BarChart4, 
  RefreshCcw, 
  Clock, 
  XCircle, 
  CheckCircle2, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  ArrowRight,
  Play,
  Pause,
  Zap,
  Layout,
  Target,
  Sparkles,
  LineChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TestingComparison = () => {
  const [timelineStep, setTimelineStep] = useState(0);
  const [metricMode, setMetricMode] = useState('profit');
  const [isPlaying, setIsPlaying] = useState(false);

  // Neumorphic Utility Classes
  const neuOuter = "bg-[#E0E5EC] shadow-[8px_8px_16px_#bec3ca,-8px_-8px_32px_#ffffff]";
  const neuInner = "bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#bec3ca,inset_-6px_-6px_12px_#ffffff]";
  const neuBtn = "bg-[#E0E5EC] hover:shadow-[inset_4px_4px_8px_#bec3ca,inset_-4px_-4px_8px_#ffffff] shadow-[6px_6px_12px_#bec3ca,-6px_-6px_12px_#ffffff] transition-all duration-300";
  const neuPressed = "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bec3ca,inset_-4px_-4px_8px_#ffffff] border border-slate-200";
  const neuPressedRed = "bg-red-50/50 shadow-[inset_4px_4px_8px_#f5d5d5,inset_-4px_-4px_8px_#ffffff] border border-red-100";
  const neuPressedGreen = "bg-green-50/50 shadow-[inset_4px_4px_8px_#d2dfd6,inset_-4px_-4px_8px_#ffffff] border border-green-100";

  // Timeline Data with cleaner labels
  const timelineData = [
    {
      id: 0,
      label: "Month 0",
      shortLabel: "Start",
      trad: {
        status: "Starting Line",
        desc: "$120k Annual Budget. 2.2x ROAS Baseline.",
        roas: 2.2,
        revenue: 0,
        profit: 0,
        mood: "Neutral",
        icon: <Target size={16} />
      },
      arlox: {
        status: "Starting Line",
        desc: "$120k Annual Budget. 2.2x ROAS Baseline.",
        roas: 2.2,
        revenue: 0,
        profit: 0,
        mood: "Neutral",
        icon: <Target size={16} />
      }
    },
    {
      id: 1,
      label: "Month 1-2",
      shortLabel: "Q1",
     
      trad: {
        status: "Random Testing",
        desc: "Changed button colors. Swapped images. No strategy.",
        roas: 2.1,
        revenue: 42000,
        profit: 22000,
        mood: "Frustrated",
        icon: <AlertTriangle size={16} />
      },
      arlox: {
        status: "Winner Found",
        desc: "Mission Angle + Direct Hook identified. 4.8x ROAS.",
        roas: 4.8,
        revenue: 96000,
        profit: 76000,
        mood: "Excited",
        icon: <Sparkles size={16} />
      }
    },
    {
      id: 2,
      label: "Month 3-4",
      shortLabel: "Q2",
      
      trad: {
        status: "Guessing Game",
        desc: "Tried video vs image. Performance stuck.",
        roas: 2.3,
        revenue: 88000,
        profit: 48000,
        mood: "Confused",
        icon: <XCircle size={16} />
      },
      arlox: {
        status: "Scaling Winner",
        desc: "Scaled budget. Expanded winning hook variations.",
        roas: 4.9,
        revenue: 196000,
        profit: 156000,
        mood: "Confident",
        icon: <TrendingUp size={16} />
      }
    },
    {
      id: 3,
      label: "Month 5-6",
      shortLabel: "Q3",
    
      trad: {
        status: "Creative Fatigue",
        desc: "Ads decayed. No framework to refresh. ROAS drops.",
        roas: 2.0,
        revenue: 128000,
        profit: 68000,
        mood: "Panic",
        icon: <AlertTriangle size={16} />
      },
      arlox: {
        status: "Systematic Refresh",
        desc: "New hooks deployed. Seasonal adaptation. Performance holds.",
        roas: 4.8,
        revenue: 292000,
        profit: 232000,
        mood: "Stable",
        icon: <RefreshCcw size={16} />
      }
    },
    {
      id: 4,
      label: "Month 7-12",
      shortLabel: "Q4",
      trad: {
        status: "The Cycle Repeats",
        desc: "Occasional lucky wins, mostly noise. Burnout.",
        roas: 2.2,
        revenue: 264000,
        profit: 144000,
        mood: "Burnout",
        icon: <Clock size={16} />
      },
      arlox: {
        status: "Compound Growth",
        desc: "Portfolio of 3 proven angles. Continuous optimization.",
        roas: 4.7,
        revenue: 564000,
        profit: 444000,
        mood: "Thriving",
        icon: <Zap size={16} />
      }
    }
  ];

  const current = timelineData[timelineStep];

  // Helper to format currency
  const fmt = (val) => val.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <section className="relative w-full min-h-screen bg-[#E0E5EC] text-slate-600 font-sans py-20 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #64748b 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        
        {/* Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${neuPressed} text-slate-500 font-bold text-xs tracking-widest uppercase mb-6`}
          >
            <GitMerge size={14} className="animate-pulse" /> 
            <span>The Fork in the Road</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-700 leading-tight mb-6">
            Ad Testing{' '}
            <span className="relative inline-block">
              <span className="text-slate-400 font-light">vs.</span>
              
            </span>{' '}
            Scientific Engineering
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Two ways to spend your budget. Only one builds a <span className="font-semibold text-slate-600">sustainable asset</span>.
          </p>
        </motion.div>

        {/* STATIC COMPARISON GRID with Enhanced Design */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
           
           {/* LEFT: TRADITIONAL */}
           <motion.div 
             whileHover={{ y: -4, transition: { duration: 0.2 } }}
             className={`p-8 rounded-[2.5rem] ${neuOuter} border-l-4 border-red-200 relative overflow-hidden group hover:border-red-400 transition-all duration-300`}
           >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl bg-red-50 text-red-400 shadow-inner`}
                  >
                    <Search size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">Traditional Ad Testing</h3>
                    <div className="text-xs font-bold text-red-400 uppercase tracking-wide flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                      The Guessing Game
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <ComparisonRow label="Strategy" value="Random Variations" icon={<Layout size={14}/>} bad />
                  <ComparisonRow label="Structure" value="No Framework" icon={<Layout size={14}/>} bad />
                  <ComparisonRow label="Winner Rate" value="15-20%" icon={<Target size={14}/>} bad />
                  <ComparisonRow label="Scalability" value="Limited" icon={<TrendingUp size={14}/>} bad />
                  
                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-slate-400 uppercase">Avg Outcome</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-slate-500">2.2x</span>
                        <span className="text-xs text-slate-400 font-semibold">ROAS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </motion.div>

           {/* RIGHT: ARLOXIAN */}
           <motion.div 
             whileHover={{ y: -4, transition: { duration: 0.2 } }}
             className={`p-8 rounded-[2.5rem] ${neuOuter} border-l-4 border-green-400 relative overflow-hidden group hover:border-green-500 transition-all duration-300`}
           >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    whileHover={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl bg-green-50 text-green-600 shadow-inner`}
                  >
                    <Beaker size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">Scientific Angle Testing</h3>
                    <div className="text-xs font-bold text-green-600 uppercase tracking-wide flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      The Arloxian Method
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <ComparisonRow label="Strategy" value="Hypothesis Testing" icon={<Layout size={14}/>} />
                  <ComparisonRow label="Structure" value="3-Tier Architecture" icon={<Layout size={14}/>} />
                  <ComparisonRow label="Winner Rate" value="60-75%" icon={<Target size={14}/>} />
                  <ComparisonRow label="Scalability" value="Systematic" icon={<TrendingUp size={14}/>} />
                  
                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-slate-400 uppercase">Avg Outcome</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-green-600">4.8x</span>
                        <span className="text-xs text-green-500 font-semibold">ROAS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </motion.div>

        </motion.div>

        {/* INTERACTIVE BATTLEFIELD with Enhanced Interactivity */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`rounded-[3rem] ${neuOuter} p-4 md:p-8 lg:p-12 relative overflow-hidden`}
        >
           
           {/* Timeline Controls */}
           <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              <div>
                 <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-2 flex items-center gap-3">
                   <LineChart className="text-slate-500" size={28} />
                   The 12-Month Battle
                 </h3>
                 <p className="text-sm text-slate-500">Click any milestone to explore the journey.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Metric Toggle */}
                <div className={`flex gap-2 p-1.5 rounded-xl ${neuInner}`}>
                  {['profit', 'revenue', 'roas'].map(   mode => (
                    <motion.button
                      key={mode}
                      onClick={() => setMetricMode(mode)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                        metricMode === mode 
                          ? 'bg-white text-slate-800 shadow-sm' 
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      {mode}
                    </motion.button>
                  ))}
                </div>
              </div>
           </div>

           {/* Enhanced Professional Stepper Timeline */}
           <div className="mb-12 px-2">
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200">
                  <motion.div 
                    animate={{ width: `${(timelineStep / (timelineData.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-slate-600 to-green-500"
                  />
                </div>

                {/* Step Indicators */}
                <div className="relative flex justify-between">
                  {timelineData.map((step, idx) => (
                    <motion.div
                      key={step.id}
                      className="flex flex-col items-center cursor-pointer group z-10"
                      onClick={() => setTimelineStep(idx)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Circle with step number */}
                      <motion.div
                        animate={{
                          scale: timelineStep === idx ? 1.15 : 1,
                        }}
                        className="relative"
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          timelineStep >= idx 
                            ? `${neuOuter} bg-[#E0E5EC] text-slate-700 border-2 border-slate-400` 
                            : `${neuInner} bg-[#E0E5EC] text-slate-400 border-2 border-slate-300`
                        }`}>
                          {timelineStep > idx ? (
                            <CheckCircle2 size={20} className="text-green-600" />
                          ) : (
                            <span>{idx === 0 ? '0' : idx}</span>
                          )}
                        </div>
                        
                        {/* Active indicator pulse */}
                        {timelineStep === idx && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-slate-700"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </motion.div>

                      {/* Label */}
                      <div className="mt-3 text-center">
                        <div className={`text-xs font-bold transition-colors ${
                          timelineStep === idx ? 'text-slate-800' : 'text-slate-400'
                        }`}>
                          {step.label}
                        </div>
                        <AnimatePresence>
                          {timelineStep === idx && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className={`mt-1 px-2 py-0.5 rounded text-[10px] font-semibold ${neuPressed} text-slate-600`}
                            >
                              {step.period}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
           </div>

           {/* Split Screen Visuals with AnimatePresence */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative">
              
              {/* Desktop Divider */}
              <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 items-center justify-center z-10">
                 <div className={`${neuOuter} py-2 px-4 text-xs font-black text-slate-400 uppercase tracking-widest -rotate-90 rounded-full`}>
                    VS
                 </div>
              </div>

              {/* TRADITIONAL PATH */}
              <div className="lg:pr-12 opacity-90 transition-all duration-500">
                 <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${neuInner} text-slate-500`}>
                      <Search size={16}/>
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Traditional Path</span>
                 </div>
                 
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={`trad-${timelineStep}`}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: 20 }}
                     transition={{ duration: 0.3 }}
                     className={`p-6 rounded-3xl ${timelineStep > 0 ? neuPressedRed : neuPressed} mb-6 min-h-[180px] flex flex-col justify-between border-l-4 ${timelineStep > 0 ? 'border-red-400' : 'border-slate-300'}`}
                   >
                      <div>
                         <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-slate-700 flex items-center gap-2">
                              {current.trad.icon}
                              {current.trad.status}
                            </h4>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${neuInner}`}>
                              <span className="text-slate-500">{current.trad.mood}</span>
                            </span>
                         </div>
                         <p className="text-sm text-slate-600 leading-relaxed">{current.trad.desc}</p>
                      </div>
                   </motion.div>
                 </AnimatePresence>

                 <MetricDisplay 
                    mode={metricMode} 
                    value={current.trad[metricMode]} 
                    base={timelineData[timelineData.length-1].arlox[metricMode]} 
                    color="slate"
                    label="Traditional"
                    neuInner={neuInner}
                    neuPressed={neuPressed}
                 />
              </div>

              {/* ARLOX PATH */}
              <div className="lg:pl-12 transition-all duration-500">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-green-100 text-green-600 shadow-inner">
                      <Beaker size={16}/>
                    </div>
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Arlox Path</span>
                 </div>
                 
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={`arlox-${timelineStep}`}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className={`p-6 rounded-3xl ${neuPressedGreen} mb-6 min-h-[180px] flex flex-col justify-between border-l-4 border-green-500 transform scale-105`}
                   >
                      <div>
                         <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-slate-800 flex items-center gap-2">
                              {current.arlox.icon}
                              {current.arlox.status}
                            </h4>
                            <motion.span 
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase shadow-inner"
                            >
                              {current.arlox.mood}
                            </motion.span>
                         </div>
                         <p className="text-sm text-slate-700 font-medium leading-relaxed">{current.arlox.desc}</p>
                      </div>
                   </motion.div>
                 </AnimatePresence>

                 <MetricDisplay 
                    mode={metricMode} 
                    value={current.arlox[metricMode]} 
                    base={timelineData[timelineData.length-1].arlox[metricMode]} 
                    color="green"
                    label="Scientific"
                    highlight
                    neuInner={neuInner}
                    neuPressed={neuPressed}
                 />
              </div>

           </div>

           {/* Summary Footer with Animation */}
           <AnimatePresence>
             {timelineStep === 4 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="mt-12 pt-12 border-t border-slate-300"
                >
                   <div className="text-center">
                      <motion.div 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`inline-block p-6 rounded-2xl ${neuOuter} mb-6`}
                      >
                         <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="text-center md:text-left">
                               <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Year 1 Profit Difference</div>
                               <motion.div 
                                 initial={{ scale: 0 }}
                                 animate={{ scale: 1 }}
                                 transition={{ delay: 0.4, type: "spring" }}
                                 className="text-4xl md:text-5xl font-black text-green-600 flex items-start"
                               >
                                 <span className="text-2xl mt-1">+</span>$300,000
                               </motion.div>
                            </div>
                            <div className="h-12 w-px bg-slate-300 hidden md:block"></div>
                            <div className="text-center md:text-left space-y-1">
                               <div className="text-sm font-bold text-slate-600 flex items-center gap-2">
                                 <CheckCircle2 size={16} className="text-green-600" />
                                 Same Ad Spend.
                               </div>
                               <div className="text-sm font-bold text-slate-600 flex items-center gap-2">
                                 <Sparkles size={16} className="text-green-600" />
                                 Different Science.
                               </div>
                            </div>
                         </div>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-sm text-slate-400 max-w-lg mx-auto italic"
                      >
                         "Everything else is expensive guessing."
                      </motion.p>
                   </div>
                </motion.div>
             )}
           </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};

// Enhanced Sub-component for Rows with hover effect
const ComparisonRow = ({ label, value, icon, bad }) => (
   <motion.div 
     whileHover={{ x: 4 }}
     className="flex items-center justify-between group"
   >
      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
         <span className="group-hover:text-slate-500 transition-colors">{icon}</span> 
         {label}
      </div>
      <div className={`text-sm font-bold ${bad ? 'text-slate-500' : 'text-slate-700'}`}>
         {value}
      </div>
   </motion.div>
);

// Enhanced Sub-component for Dynamic Metrics with smooth animations
const MetricDisplay = ({ mode, value, base, color, label, highlight, neuInner, neuPressed }) => {
   const isRoas = mode === 'roas';
   const max = isRoas ? 6 : base;
   const percent = Math.min((value / max) * 100, 100);

   const fmt = (val) => isRoas 
      ? `${val.toFixed(1)}x` 
      : val.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

   return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 rounded-2xl ${highlight ? 'bg-green-50/50 border border-green-100 shadow-sm' : `${neuPressed}`}`}
      >
         <div className="flex justify-between items-end mb-3">
            <span className={`text-[10px] font-bold uppercase ${highlight ? 'text-green-600' : 'text-slate-400'}`}>
              Cumulative {mode}
            </span>
            <motion.span 
              key={value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-2xl font-black ${highlight ? 'text-green-600' : 'text-slate-600'}`}
            >
               {fmt(value)}
            </motion.span>
         </div>
         {/* Enhanced Bar Chart */}
         <div className={`h-2 w-full rounded-full overflow-hidden ${neuInner} relative`}>
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${percent}%` }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className={`h-full rounded-full relative ${highlight ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-slate-400'}`}
            >
              {/* Shimmer effect for highlight */}
              {highlight && (
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              )}
            </motion.div>
         </div>
         
         {/* Percentage indicator */}
         <div className="mt-2 text-right">
           <span className={`text-[10px] font-semibold ${highlight ? 'text-green-500' : 'text-slate-400'}`}>
             {percent.toFixed(0)}% of max
           </span>
         </div>
      </motion.div>
   );
};

export default TestingComparison;
