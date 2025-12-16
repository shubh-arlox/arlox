"use client"
import React, { useState, useEffect } from 'react';
import { TrendingDown, Activity, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AttentionTrap = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [moneyBurn, setMoneyBurn] = useState(0);

  // Animation for the "Money Burn" counter
  useEffect(() => {
    const interval = setInterval(() => {
      setMoneyBurn(prev => (prev < 1000 ? prev + 12 : 0));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Animation for the "Scroll" slider
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollProgress(prev => (prev < 100 ? prev + 2 : 0));
    }, 50);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#e0e5ec] text-[#4a4a4a] font-sans flex flex-col justify-center py-12 sm:py-16 md:py-24 overflow-hidden">
      
      <style jsx>{`
        .neu-outer {
          background: #e0e5ec;
          box-shadow: 6px 6px 12px rgb(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5);
        }
        .neu-inner {
          background: #e0e5ec;
          box-shadow: inset 6px 6px 12px rgb(163,177,198,0.7), inset -6px -6px 12px rgba(255,255,255,0.8);
        }
        .neu-pressed {
          background: #e0e5ec;
          box-shadow: inset 6px 6px 10px 0 rgba(163,177,198, 0.7), 
                     inset -6px -6px 10px 0 rgba(255,255,255, 0.8);
          border-radius: 20px;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
        
        {/* HERO SECTION */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 py-1.5 sm:py-1 md:px-4 rounded-full neu-pressed text-[10px] md:text-xs font-bold text-[#ff6b6b] uppercase tracking-wide"
          >
            <Activity size={14} className="shrink-0" />
            <span>Critical Error: Visibility Zero</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#4a4a4a] leading-tight mb-4 sm:mb-6 px-4">
            YOU ARE NOT GETTING THE{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#385179] via-[#4f46e5] to-[#7c3aed]">
              ATTENTION YOU DESERVE.
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#64748b] leading-relaxed max-w-2xl mx-auto px-4">
            You crafted the perfect campaign. You pressed "Publish." You waited.
            <br />
            <span className="font-semibold text-[#4a4a4a]">And then... nothing.</span>
            <br />
            It's not your creative. It's a hostile environment designed to drain your wallet.
          </p>
        </div>

        {/* INTERACTIVE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* CARD 1: THE SCROLL FATIGUE */}
          <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[3rem] neu-outer">
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center bg-[#e0e5ec] shadow-[6px_6px_12px_rgb(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)] text-[#4a4a4a] font-bold text-base sm:text-xl">
              01
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#4a4a4a] mb-3 sm:mb-4">
                People Scroll Before It's Seen
              </h3>
              <p className="text-sm sm:text-base text-[#64748b]">
                The average user decides to skip your content in less time than it takes to blink. They aren't looking at your product; they are looking for a dopamine hit.
              </p>
            </div>

            {/* Visual: Neumorphic Phone Interface */}
            <div className="w-full h-56 sm:h-64 rounded-2xl sm:rounded-3xl neu-inner p-4 sm:p-6 relative overflow-hidden flex flex-col justify-between">
                
              {/* Simulated Feed Item */}
              <div 
                className="bg-white rounded-xl p-3 sm:p-4 shadow-sm opacity-60 transform transition-transform"
                style={{ transform: `translateY(-${scrollProgress * 3}px) scale(${1 - (scrollProgress/200)})` }}
              >
                <div className="h-24 sm:h-32 bg-[#cbd5e1] rounded-lg mb-2 sm:mb-3"></div>
                <div className="h-3 sm:h-4 bg-[#cbd5e1] rounded w-3/4"></div>
              </div>

              {/* The "Thumb" Slider representing user speed */}
              <div className="mt-3 sm:mt-4">
                <div className="flex justify-between text-[10px] sm:text-xs text-[#94a3b8] font-bold mb-1 sm:mb-2 uppercase tracking-wider">
                  <span>Attention Span</span>
                  <span className="text-[#ff6b6b]">Critical</span>
                </div>
                <div className="h-2 sm:h-3 rounded-full bg-[#cbd5e1] overflow-hidden relative shadow-inner">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#6d5dfc] to-[#ff6b6b] rounded-full transition-all duration-75"
                    style={{ width: `${100 - scrollProgress}%` }}
                  />
                </div>
              </div>

              {/* Floating "Skipped" Notification */}
              <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#e0e5ec] text-[#4a4a4a] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[4px_4px_8px_rgb(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.5)] transition-opacity duration-200 ${scrollProgress > 50 ? 'opacity-100' : 'opacity-0'}`}
              >
                <EyeOff size={14} className="sm:w-4 sm:h-4" /> IGNORED
              </div>
            </div>
          </div>

          {/* CARD 2: THE META DEATH SPIRAL */}
          <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[3rem] neu-outer">
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center bg-[#e0e5ec] shadow-[6px_6px_12px_rgb(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)] text-[#4a4a4a] font-bold text-base sm:text-xl">
              02
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#4a4a4a] mb-3 sm:mb-4">
                Meta Reaching More Non-Buyers
              </h3>
              <p className="text-sm sm:text-base text-[#64748b]">
                Meta's AI doesn't care about your sales; it cares about retention. If users scroll past, the algorithm flags you as "low quality." It throttles your reach and doubles your costs.
              </p>
            </div>

            {/* Visual: The Burn Meter */}
            <div className="w-full h-56 sm:h-64 rounded-2xl sm:rounded-3xl neu-inner p-6 sm:p-8 relative flex items-center justify-center">
                
              {/* Circular Gauge */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full neu-outer flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full neu-inner flex flex-col items-center justify-center text-[#4a4a4a]">
                  <TrendingDown size={20} className="sm:w-6 sm:h-6 text-[#ff6b6b] mb-1" />
                  <span className="text-xl sm:text-2xl font-bold">-$ {moneyBurn}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#94a3b8]">Ad Spend</span>
                </div>
                
                {/* Rotating Indicator */}
                <div className="absolute top-0 left-0 w-full h-full animate-spin-slow pointer-events-none">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-[#6d5dfc] to-[#ff6b6b] rounded-full shadow-lg absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Floating Metrics */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg neu-outer text-xs font-bold text-[#94a3b8] flex flex-col items-center">
                <span className="text-[9px] sm:text-[10px]">ROAS</span>
                <span className="text-[#ff6b6b] text-base sm:text-lg">0.4x</span>
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg neu-outer text-xs font-bold text-[#94a3b8] flex flex-col items-center">
                <span className="text-[9px] sm:text-[10px]">CPM</span>
                <span className="text-[#ff6b6b] text-base sm:text-lg">$85</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttentionTrap;
