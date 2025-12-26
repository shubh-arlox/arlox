"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Layers, TrendingUp, AlertCircle, Target, Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const NeumorphicCard = ({ children, className = "", pressed = false }) => {
  const baseClasses = "rounded-2xl md:rounded-3xl bg-[#ecf0f3] transition-all duration-300";
  const shadowClass = pressed 
    ? "shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]"
    : "shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]";

  return (
    <div className={`${baseClasses} ${shadowClass} ${className}`}>
      {children}
    </div>
  );
};

const ComparisonMobileCard = ({ row, index }) => {
  return (
    <motion.div 
      className="block lg:hidden mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <NeumorphicCard className="p-5">
        {/* Header with Metric and Gap */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <span className="font-bold text-slate-800 text-sm sm:text-base">{row.metric}</span>
          <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
            row.special 
              ? 'bg-emerald-100 text-emerald-700 shadow-sm' 
              : 'bg-blue-100 text-blue-700 shadow-sm'
          }`}>
            Gap: {row.gap}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Traditional Column */}
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-xs font-bold text-red-500 uppercase tracking-wider">
              Traditional
            </span>
            <div className={`font-semibold text-sm ${row.special ? 'text-red-600' : 'text-slate-700'}`}>
              {row.icons ? (
                <div className="flex items-start gap-1.5">
                  <Search size={14} className="flex-shrink-0 mt-0.5"/>
                  <span className="break-words leading-tight">{row.trad}</span>
                </div>
              ) : (
                <span className="break-words leading-tight">{row.trad}</span>
              )}
            </div>
          </div>

          {/* Arlox Pack Column */}
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Arlox Pack
            </span>
            <div className="font-bold text-emerald-700 text-base">
              {row.icons ? (
                <div className="flex items-start gap-1.5">
                  <Layers size={14} className="flex-shrink-0 mt-0.5"/>
                  <span className="break-words leading-tight">{row.arlox}</span>
                </div>
              ) : (
                <span className="break-words leading-tight">{row.arlox}</span>
              )}
            </div>
          </div>
        </div>
      </NeumorphicCard>
    </motion.div>
  );
};

const ComparisonDesktopRow = ({ row, index }) => {
  return (
    <motion.tr 
      className="hidden lg:table-row hover:bg-slate-50/30 transition-all duration-200 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <td className="p-5 lg:p-6 font-semibold text-slate-800 text-sm lg:text-base">
        {row.metric}
      </td>
      <td className={`p-5 lg:p-6 text-sm lg:text-base ${
        row.special ? 'text-red-600 font-semibold' : 'text-slate-600'
      }`}>
        {row.icons ? (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
              <Search size={16} className="text-red-500"/>
            </div>
            {row.trad}
          </div>
        ) : row.trad}
      </td>
      <td className="p-5 lg:p-6 font-bold text-emerald-700 text-base lg:text-lg">
        {row.icons ? (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
              <Layers size={16} className="text-emerald-600"/>
            </div>
            {row.arlox}
          </div>
        ) : row.arlox}
      </td>
      <td className={`p-5 lg:p-6 font-bold text-base lg:text-lg ${
        row.special ? 'text-emerald-600' : 'text-blue-600'
      }`}>
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="flex-shrink-0"/>
          {row.gap}
        </div>
      </td>
    </motion.tr>
  );
};

export default function ComparisonTable() {
  const tableRef = useRef(null);
  const insightRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-100px" });
  const insightInView = useInView(insightRef, { once: true, margin: "-100px" });

  const comparisonData = [
    { 
      metric: '12-Month Revenue', 
      trad: '$1.68M', 
      arlox: '$6.55M', 
      gap: '+290%' 
    },
    { 
      metric: '12-Month Profit', 
      trad: '$336K', 
      arlox: '$2.29M', 
      gap: '+582%' 
    },
    { 
      metric: 'Final Monthly CAC', 
      trad: '$92 (Unsustainable)', 
      arlox: '$52 (Stable)', 
      gap: '43% Lower', 
      special: true 
    },
    { 
      metric: 'Traffic Sources Owned', 
      trad: '1 (Shopping only)', 
      arlox: '3 (Shopping + Visual + Social)', 
      gap: '3x Coverage', 
      icons: true 
    },
    { 
      metric: 'Market Visibility', 
      trad: '40% (Text-only)', 
      arlox: '100% (Text + Visual + Social)', 
      gap: 'Omnipresent' 
    }
  ];

  return (
    <div className="w-full mb-16 sm:mb-20 lg:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Header - FIXED for mobile */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial="hidden"
          animate={tableInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center flex-shrink-0">
              <Target className="text-emerald-600" size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 text-center sm:text-left">
              The Gap: Strategic Comparison
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Side-by-side analysis of single-engine vs. multi-engine growth architecture over 12 months
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          ref={tableRef}
          initial="hidden"
          animate={tableInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          {/* Desktop View */}
          <NeumorphicCard className="hidden lg:block overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-300/50">
                    <th className="p-5 lg:p-6 text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                      Metric (12 Mo. Total)
                    </th>
                    <th className="p-5 lg:p-6 text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16}/>
                        Traditional (Stuck)
                      </div>
                    </th>
                    <th className="p-5 lg:p-6 text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Sparkles size={16}/>
                        Arlox Power Pack
                      </div>
                    </th>
                    <th className="p-5 lg:p-6 text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16}/>
                        The Gap
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/50">
                  {comparisonData.map((row, idx) => (
                    <ComparisonDesktopRow key={row.metric} row={row} index={idx} />
                  ))}
                </tbody>
              </table>
            </div>
          </NeumorphicCard>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden space-y-4">
            {comparisonData.map((row, idx) => (
              <ComparisonMobileCard key={row.metric} row={row} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Key Insight Callout */}
        <motion.div 
          ref={insightRef}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto"
          initial="hidden"
          animate={insightInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="relative">
            {/* Badge */}
            <motion.div 
              className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/30 z-10"
              initial={{ y: -20, opacity: 0 }}
              animate={insightInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              KEY INSIGHT
            </motion.div>

            <NeumorphicCard className="p-6 sm:p-8 lg:p-10 text-center border-t-4 border-emerald-500 pt-8 sm:pt-10">
              <blockquote className="text-sm sm:text-base lg:text-xl font-serif italic text-slate-700 leading-relaxed mb-6">
                "The difference isn't budget. It's <span className="font-bold text-slate-900 not-italic">architecture</span>. 
                Traditional scaling pours gasoline on one engine until it floods. 
                Power Pack builds <span className="font-bold text-emerald-600 not-italic">three engines that feed each other</span>—creating 
                <span className="font-bold text-slate-900 not-italic"> compounding</span>, not diminishing, returns."
              </blockquote>

              {/* Visual separator */}
              <div className="flex justify-center gap-2 mb-6">
                <motion.div 
                  className="h-1.5 w-12 sm:w-16 bg-emerald-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={insightInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                <motion.div 
                  className="h-1.5 w-6 sm:w-8 bg-emerald-300 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={insightInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                />
                <motion.div 
                  className="h-1.5 w-3 sm:w-4 bg-emerald-200 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={insightInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.9, duration: 0.5 }}
                />
              </div>

              {/* Three Engines Visual */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <NeumorphicCard pressed className="p-4 bg-gradient-to-br from-blue-50/50 to-[#ecf0f3]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-xl bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                    <Search className="text-blue-600" size={18} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-700 mb-1">Engine 1</div>
                  <div className="text-[10px] sm:text-xs text-slate-600">PMax Harvester</div>
                  <div className="text-xs font-bold text-blue-600 mt-1">40%</div>
                </NeumorphicCard>

                <NeumorphicCard pressed className="p-4 bg-gradient-to-br from-red-50/50 to-[#ecf0f3]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-xl bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                    <Layers className="text-red-600" size={18} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-700 mb-1">Engine 2</div>
                  <div className="text-[10px] sm:text-xs text-slate-600">Demand Gen Creator</div>
                  <div className="text-xs font-bold text-red-600 mt-1">35%</div>
                </NeumorphicCard>

                <NeumorphicCard pressed className="p-4 bg-gradient-to-br from-purple-50/50 to-[#ecf0f3]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-xl bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                    <Sparkles className="text-purple-600" size={18} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-700 mb-1">Engine 3</div>
                  <div className="text-[10px] sm:text-xs text-slate-600">AI Search Future</div>
                  <div className="text-xs font-bold text-purple-600 mt-1">25%</div>
                </NeumorphicCard>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 mt-6 italic">
                Each engine feeds qualified traffic to the others, creating a self-reinforcing growth loop
              </p>
            </NeumorphicCard>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
