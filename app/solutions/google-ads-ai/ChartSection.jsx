
"use client"
import React, { useState, useMemo, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Rocket, Crown, ShoppingBag, Layers, Play, Eye, TrendingDown, TrendingUp as TrendingUpIcon } from 'lucide-react';

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

const StatBadge = ({ label, value, isGood, trend }) => (
  <div className="bg-[#ecf0f3] rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]">
    <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
      {label}
    </div>
    <div className={`text-xs sm:text-sm font-bold ${isGood === true ? 'text-emerald-600' : isGood === false ? 'text-red-600' : 'text-slate-800'} truncate`}>
      {value}
    </div>
    {trend && (
      <div className={`text-[8px] sm:text-[9px] font-semibold mt-0.5 ${trend === 'Rising' ? 'text-red-500' : 'text-slate-500'}`}>
        {trend}
      </div>
    )}
  </div>
);

// Data contained within the section
const timelineData = [
  { month: 1, traditional: { spend: 25000, roas: 4.2, cac: 45, revenue: 105000, profit: 21000 }, arlox: { spend: 25000, mer: 4.2, cac: 45, revenue: 105000, profit: 21000 }, phase: "Foundation" },
  { month: 2, traditional: { spend: 40000, roas: 3.1, cac: 68, revenue: 124000, profit: 12400 }, arlox: { spend: 32000, mer: 4.3, cac: 44, revenue: 137600, profit: 34400 }, phase: "Foundation" },
  { month: 3, traditional: { spend: 60000, roas: 2.4, cac: 92, revenue: 144000, profit: 7200 }, arlox: { spend: 45000, mer: 4.6, cac: 42, revenue: 207000, profit: 62100 }, phase: "Foundation" },
  { month: 4, traditional: { spend: 55000, roas: 2.3, cac: 95, revenue: 126500, profit: 0 }, arlox: { spend: 60000, mer: 4.7, cac: 43, revenue: 282000, profit: 98700 }, phase: "Acceleration" },
  { month: 5, traditional: { spend: 50000, roas: 2.4, cac: 90, revenue: 120000, profit: 6000 }, arlox: { spend: 75000, mer: 4.75, cac: 44, revenue: 356250, profit: 124687 }, phase: "Acceleration" },
  { month: 6, traditional: { spend: 50000, roas: 2.4, cac: 92, revenue: 120000, profit: 4000 }, arlox: { spend: 90000, mer: 4.8, cac: 45, revenue: 432000, profit: 151200 }, phase: "Acceleration" },
  { month: 7, traditional: { spend: 55000, roas: 2.3, cac: 98, revenue: 126500, profit: 2000 }, arlox: { spend: 105000, mer: 4.85, cac: 46, revenue: 509250, profit: 178237 }, phase: "Acceleration" },
  { month: 8, traditional: { spend: 60000, roas: 2.2, cac: 102, revenue: 132000, profit: -5000 }, arlox: { spend: 120000, mer: 4.9, cac: 48, revenue: 588000, profit: 205800 }, phase: "Acceleration" },
  { month: 9, traditional: { spend: 55000, roas: 2.3, cac: 99, revenue: 126500, profit: 1000 }, arlox: { spend: 135000, mer: 5.0, cac: 49, revenue: 675000, profit: 236250 }, phase: "Dominance" },
  { month: 10, traditional: { spend: 55000, roas: 2.3, cac: 98, revenue: 126500, profit: 2000 }, arlox: { spend: 150000, mer: 5.1, cac: 50, revenue: 765000, profit: 267750 }, phase: "Dominance" },
  { month: 11, traditional: { spend: 55000, roas: 2.3, cac: 98, revenue: 126500, profit: 2000 }, arlox: { spend: 165000, mer: 5.15, cac: 51, revenue: 849750, profit: 297412 }, phase: "Dominance" },
  { month: 12, traditional: { spend: 55000, roas: 2.3, cac: 99, revenue: 126500, profit: 2000 }, arlox: { spend: 180000, mer: 5.2, cac: 52, revenue: 936000, profit: 327600 }, phase: "Dominance" },
];

const LineChart = ({ data, activeMonth, setActiveMonth, viewMode }) => {
  const containerRef = useRef(null);
  const width = 900;
  const height = 350;
  const padding = 60;

  const maxValue = useMemo(() => {
    const maxRev = Math.max(...data.map(d => Math.max(d.traditional.revenue, d.arlox.revenue)));
    const maxProf = Math.max(...data.map(d => Math.max(d.traditional.profit, d.arlox.profit)));
    return viewMode === 'revenue' ? maxRev * 1.15 : maxProf * 1.15;
  }, [data, viewMode]);

  const getX = (index) => padding + (index * ((width - padding * 2) / (data.length - 1)));
  const getY = (val) => height - padding - (val / maxValue) * (height - padding * 2);

  const createPath = (key) => {
    let path = `M ${getX(0)} ${getY(data[0][key][viewMode])}`;
    for (let i = 1; i < data.length; i++) {
      const x = getX(i);
      const y = getY(data[i][key][viewMode]);
      const prevX = getX(i - 1);
      const prevY = getY(data[i - 1][key][viewMode]);
      const cp1x = prevX + (x - prevX) / 2;
      const cp2x = prevX + (x - prevX) / 2;
      path += ` C ${cp1x} ${prevY}, ${cp2x} ${y}, ${x} ${y}`;
    }
    return path;
  };

  const createAreaPath = (key) => {
    let path = createPath(key);
    const lastX = getX(data.length - 1);
    const baseY = height - padding;
    path += ` L ${lastX} ${baseY} L ${padding} ${baseY} Z`;
    return path;
  };

  return (
    <div className="w-full" ref={containerRef}>
      <div className="w-full pb-2">
        <motion.svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
            <motion.line 
              key={ratio}
              x1={padding} 
              y1={padding + (height - 2 * padding) * ratio} 
              x2={width - padding} 
              y2={padding + (height - 2 * padding) * ratio} 
              stroke="#cbd5e1" 
              strokeWidth="2" 
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: ratio * 0.1 }}
            />
          ))}

          {/* Area fills */}
          <motion.path 
            d={createAreaPath('traditional')} 
            fill="url(#redGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.path 
            d={createAreaPath('arlox')} 
            fill="url(#greenGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Lines */}
          <motion.path 
            d={createPath('traditional')} 
            fill="none" 
            stroke="#ef4444" 
            strokeWidth="6" 
            strokeLinecap="round" 
            className="drop-shadow-lg"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          />
          <motion.path 
            d={createPath('arlox')} 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="6" 
            strokeLinecap="round" 
            className="drop-shadow-lg"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Interactive points and icons */}
          {data.map((d, i) => (
            <g key={i} onClick={() => setActiveMonth(i + 1)} className="cursor-pointer group">
              <rect x={getX(i) - 35} y={0} width={70} height={height} fill="transparent" />

              {/* Arlox point */}
              <motion.circle 
                cx={getX(i)} 
                cy={getY(d.arlox[viewMode])} 
                r={activeMonth === i + 1 ? 12 : 6} 
                className={`transition-all duration-300 ${
                  activeMonth === i + 1 
                    ? 'fill-emerald-500 stroke-white stroke-[4]' 
                    : 'fill-emerald-500 opacity-0 group-hover:opacity-100'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
              />

              {/* Traditional point */}
              <motion.circle 
                cx={getX(i)} 
                cy={getY(d.traditional[viewMode])} 
                r={activeMonth === i + 1 ? 10 : 6} 
                className={`transition-all duration-300 ${
                  activeMonth === i + 1 
                    ? 'fill-red-500 stroke-white stroke-[4]' 
                    : 'fill-red-500 opacity-0 group-hover:opacity-100'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
              />

              {/* Key moment icons */}
              {i === 3 && (
                <g opacity={activeMonth === i + 1 ? 1 : 0.3}>
                  <AlertTriangle x={getX(i) - 12} y={10} className="text-red-500" size={24} />
                </g>
              )}
              {i === 7 && (
                <g opacity={activeMonth === i + 1 ? 1 : 0.3}>
                  <Rocket x={getX(i) - 12} y={10} className="text-emerald-500" size={24} />
                </g>
              )}
              {i === 11 && (
                <g opacity={activeMonth === i + 1 ? 1 : 0.3}>
                  <Crown x={getX(i) - 12} y={10} className="text-emerald-600" size={24} />
                </g>
              )}
            </g>
          ))}

          {/* X-axis labels */}
          {data.map((d, i) => (
            <text 
              key={`label-${i}`} 
              x={getX(i)} 
              y={height - 20} 
              textAnchor="middle" 
              className="text-sm fill-slate-400 font-bold select-none" 
              style={{ fontSize: '14px' }}
            >
              M{d.month}
            </text>
          ))}
        </motion.svg>
      </div>
    </div>
  );
};

export default function ChartSection() {
  const [activeMonth, setActiveMonth] = useState(12);
  const [viewMode, setViewMode] = useState('revenue');
  const chartRef = useRef(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-100px" });
  const currentData = timelineData[activeMonth - 1];

  const formatCurrency = (val) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val}`;
  };

  return (
    <div className="w-full mb-16 sm:mb-20 lg:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div 
          ref={chartRef}
          initial="hidden"
          animate={chartInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 sm:mb-8 gap-4 sm:gap-6">
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="text-red-500" size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800">
                    The Google Scaling Cliff
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm lg:text-base">
                    Interactive 12-Month Projection
                  </p>
                </div>
              </div>
            </div>

            {/* View mode toggle */}
            <NeumorphicCard className="p-1.5 sm:p-2 flex gap-2 w-full lg:w-auto">
              <button 
                onClick={() => setViewMode('revenue')} 
                className={`flex-1 lg:flex-none px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  viewMode === 'revenue' 
                    ? 'bg-[#ecf0f3] text-emerald-600 shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Revenue
              </button>
              <button 
                onClick={() => setViewMode('profit')} 
                className={`flex-1 lg:flex-none px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  viewMode === 'profit' 
                    ? 'bg-[#ecf0f3] text-emerald-600 shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Profitability
              </button>
            </NeumorphicCard>
          </div>

          {/* Main chart card */}
          <NeumorphicCard className="p-4 sm:p-6 lg:p-8">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

              {/* Chart area */}
              <div className="lg:col-span-2 min-w-0">
                <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Monthly Performance
                  </span>
                  <div className="flex items-center gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={activeMonth}
                        className={`text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg whitespace-nowrap ${
                          currentData.phase === 'Foundation' 
                            ? 'bg-blue-100 text-blue-700' 
                            : currentData.phase === 'Acceleration' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-emerald-100 text-emerald-700'
                        }`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        M{activeMonth}: {currentData.phase}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                <LineChart 
                  data={timelineData} 
                  activeMonth={activeMonth} 
                  setActiveMonth={setActiveMonth} 
                  viewMode={viewMode} 
                />

                {/* Month selector */}
                <div className="grid grid-cols-6 sm:grid-cols-12 gap-1 sm:gap-2 mt-4 sm:mt-6">
                  {timelineData.map((d) => (
                    <motion.button 
                      key={d.month}
                      onClick={() => setActiveMonth(d.month)}
                      className={`aspect-square rounded-lg sm:rounded-xl flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all ${
                        activeMonth === d.month 
                          ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/40 scale-110' 
                          : 'bg-[#ecf0f3] text-slate-400 hover:bg-slate-100 hover:text-slate-700 shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {d.month}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Data panel */}
              <div className="flex flex-col gap-4 sm:gap-6 min-w-0">

                {/* Traditional card */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`traditional-${activeMonth}`}
                    className="min-w-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <NeumorphicCard 
                      pressed 
                      className={`p-4 sm:p-6 border-l-4 ${
                        activeMonth > 4 
                          ? 'border-red-500 bg-gradient-to-br from-red-50/50 to-[#ecf0f3]' 
                          : 'border-orange-400 bg-gradient-to-br from-orange-50/50 to-[#ecf0f3]'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4 sm:mb-5 gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center flex-shrink-0">
                            <ShoppingBag className="text-slate-500" size={14} />
                          </div>
                          <h4 className="font-bold text-slate-700 text-sm sm:text-base truncate">
                            Traditional
                          </h4>
                        </div>
                        <span className={`text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                          activeMonth > 4 
                            ? 'bg-red-500 text-white' 
                            : 'bg-orange-500 text-white'
                        }`}>
                          {activeMonth > 4 ? "SATURATED" : "SCALING"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <StatBadge 
                          label="Spend" 
                          value={formatCurrency(currentData.traditional.spend)} 
                        />
                        <StatBadge 
                          label="CAC" 
                          value={`$${currentData.traditional.cac}`} 
                          isGood={currentData.traditional.cac < 50} 
                          trend={activeMonth > 1 ? (
                            currentData.traditional.cac > timelineData[activeMonth-2].traditional.cac 
                              ? "Rising" 
                              : "Flat"
                          ) : null} 
                        />
                        <StatBadge 
                          label="Revenue" 
                          value={formatCurrency(currentData.traditional.revenue)} 
                        />
                        <StatBadge 
                          label={viewMode === 'profit' ? "Profit" : "ROAS"} 
                          value={
                            viewMode === 'profit' 
                              ? formatCurrency(currentData.traditional.profit) 
                              : `${currentData.traditional.roas}x`
                          } 
                          isGood={false} 
                        />
                      </div>
                    </NeumorphicCard>
                  </motion.div>
                </AnimatePresence>

                {/* Arlox Pack card */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`arlox-${activeMonth}`}
                    className="min-w-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <NeumorphicCard 
                      pressed 
                      className="p-4 sm:p-6 bg-gradient-to-br from-emerald-50/50 to-[#ecf0f3] border-l-4 border-emerald-500"
                    >
                      <div className="flex justify-between items-start mb-4 sm:mb-5 gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center flex-shrink-0">
                            <Layers className="text-emerald-600" size={14} />
                          </div>
                          <h4 className="font-bold text-slate-700 text-sm sm:text-base truncate">
                            Arlox Pack
                          </h4>
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-100 px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap flex-shrink-0">
                          <Rocket size={10} /> GROWING
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <StatBadge 
                          label="Spend" 
                          value={formatCurrency(currentData.arlox.spend)} 
                        />
                        <StatBadge 
                          label="CAC" 
                          value={`$${currentData.arlox.cac}`} 
                          isGood={true} 
                          trend="Stable" 
                        />
                        <StatBadge 
                          label="Revenue" 
                          value={formatCurrency(currentData.arlox.revenue)} 
                        />
                        <StatBadge 
                          label={viewMode === 'profit' ? "Profit" : "MER"} 
                          value={
                            viewMode === 'profit' 
                              ? formatCurrency(currentData.arlox.profit) 
                              : `${currentData.arlox.mer}x`
                          } 
                          isGood={true} 
                        />
                      </div>

                      {/* Traffic mix */}
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-emerald-200/50">
                        <div className="text-[10px] sm:text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                          Traffic Mix
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] sm:text-xs">
                            <span className="flex items-center gap-1.5 text-slate-600">
                              <ShoppingBag size={12} className="text-blue-600 flex-shrink-0" /> 
                              PMax
                            </span>
                            <span className="font-bold text-blue-600">40%</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] sm:text-xs">
                            <span className="flex items-center gap-1.5 text-slate-600">
                              <Play size={12} className="text-red-600 flex-shrink-0" /> 
                              Demand Gen
                            </span>
                            <span className="font-bold text-red-600">35%</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] sm:text-xs">
                            <span className="flex items-center gap-1.5 text-slate-600">
                              <Eye size={12} className="text-purple-600 flex-shrink-0" /> 
                              AI Search
                            </span>
                            <span className="font-bold text-purple-600">25%</span>
                          </div>
                        </div>
                      </div>
                    </NeumorphicCard>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </NeumorphicCard>
        </motion.div>
      </div>
    </div>
  );
}
