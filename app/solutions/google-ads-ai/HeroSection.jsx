"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, AlertTriangle, TrendingUp, Rocket } from 'lucide-react';
import { NeumorphicCard, NeumorphicButton, stagger, fadeIn, fadeInUp, slideInRight } from './SharedUI';
import GlassButton from '@/components/but';
import CalendlyCTA from '@/components/CalendlyCTA';

export default function HeroSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-24 pb-10 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 md:mb-24" ref={heroRef}>
          
          {/* Left Side */}
          <motion.div 
            className="space-y-6 sm:space-y-8 relative z-10"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={stagger}
          >
                 <div className="flex justify-center items-center">
            <motion.div 
              className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-emerald-600 font-semibold text-xs sm:text-sm whitespace-nowrap"
              variants={fadeIn}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>2025 Power Pack Trinity Live</span>
            </motion.div>
          </div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 leading-[1.1] tracking-tight"
              variants={fadeInUp}
            >
              Scale Google Ads <span className="text-emerald-500">3-5x</span> <br/>
              Without Your CAC Exploding.
            </motion.h1>
          
            <motion.p 
              className="text-lg sm:text-xl text-slate-600 leading-relaxed"
              variants={fadeInUp}
            >
              87% of fashion brands hit a wall between $100K-$300K monthly spend. Winning campaigns saturate. CAC doubles. 
              <br/><br/>
              Escape "The Efficiency Illusion" with the Arlox 10x System: 
              <span className="font-semibold text-slate-800"> PMax + Demand Gen + AI Search</span> as one unified growth engine.
            </motion.p>

            <motion.div 
              className="flex flex-col justify-center items-center sm:flex-row gap-4"
              variants={fadeInUp}
            >
             <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
                <GlassButton 
               label="Build My Power Pack" 
               icon={ArrowRight} 
               className="h-4 sm:h-5 transition-all duration-200"
               buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
               onClick={() => console.log('Focus mode toggled')}
             />
                   
                   
               </CalendlyCTA>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div 
            className="grid gap-6"
            ref={statsRef}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={slideInRight}>
              <NeumorphicCard className="p-6 sm:p-8 relative overflow-hidden group hover:-translate-y-1 cursor-pointer">
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-transparent to-red-500/10 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-red-50 flex items-center justify-center shadow-[inset_4px_4px_8px_#ffd1d1,inset_-4px_-4px_8px_#ffffff] shrink-0">
                    <AlertTriangle className="text-red-500" size={20} />
                  </div>
                  <h3 className="text-slate-500 font-bold uppercase tracking-wider text-[10px] sm:text-xs">Industry Reality (2025)</h3>
                </div>
                <div className="flex items-end gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">2.8x</span>
                  <span className="text-red-500 font-medium mb-1 sm:mb-2 flex items-center gap-1 text-xs sm:text-sm">
                    <TrendingUp size={16} className="rotate-180"/> Median MER
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Brands relying on 2022 keyword strategies are invisible to 60% of modern Google traffic (Lens, Discover, Shorts).
                </p>
              </NeumorphicCard>
            </motion.div>

            <motion.div variants={slideInRight}>
              <NeumorphicCard className="p-6 sm:p-8 relative overflow-hidden group hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-emerald-50 to-[#ecf0f3]">
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-transparent to-emerald-500/10 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-emerald-50 flex items-center justify-center shadow-[inset_4px_4px_8px_#c8f0dd,inset_-4px_-4px_8px_#ffffff] shrink-0">
                    <Rocket className="text-emerald-600" size={20} />
                  </div>
                  <h3 className="text-emerald-600 font-bold uppercase tracking-wider text-[10px] sm:text-xs">Arlox Power Pack</h3>
                </div>
                <div className="flex items-end gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">5.2x</span>
                  <span className="text-emerald-500 font-medium mb-1 sm:mb-2 flex items-center gap-1 text-xs sm:text-sm">
                    <TrendingUp size={16}/> Sustained MER
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Visual intent optimization unlocks scaling without the efficiency penalty.
                </p>
              </NeumorphicCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}