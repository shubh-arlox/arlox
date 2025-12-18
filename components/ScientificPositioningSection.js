"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Microscope,
  Target,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Zap,
  Feather,
  HelpCircle,
  Diamond,
  Leaf,
  Percent,
  Shirt,
  SplinePointer,
  Dot,
} from "lucide-react";
import WhatsappCTA from "./WhatsAppCTA";
import GlassButton from "./but";

/* ========================================================================== */
/* 1. UI PRIMITIVES & SHARED COMPONENTS                                       */
/* ========================================================================== */

// Animation Configuration
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const NeumorphicCard = ({ children, className = "", onClick, inset = false }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className={`
      relative rounded-[1.5rem] p-8 transition-all duration-300
      bg-[#E0E5EC] text-slate-600 border border-white/40
      ${
        inset
          ? "shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)]"
          : "shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]"
      }
      ${className}
    `}
    >
      {children}
    </motion.div>
  );
};

const NeumorphicButton = ({ children, variant = "primary", className = "", onClick }) => {
  const baseClass =
    "px-8 py-4 rounded-xl font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-3 outline-none transition-all duration-200 active:scale-95 shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)] active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] bg-[#E0E5EC]";

  const variants = {
    primary: "text-[#667eea] hover:text-[#5a67d8]",
    secondary: "text-slate-500 hover:text-slate-700",
    action: "!bg-[#667eea] !text-white hover:!bg-[#5a67d8] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClass} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

const SectionTitle = ({ subtitle, title, centered = true }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className={`mb-16 ${centered ? "text-center" : "text-left"}`}
  >
    <div className="flex justify-center">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full bg-[#E0E5EC] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)] text-[10px] md:text-xs mt-4 mb-6 font-bold uppercase tracking-wide text-blue-800"
          >
           <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />

            <span>{subtitle}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          </motion.div>
        </div>
    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-800">
      {title}
    </h2>
  </motion.div>
);

/* ========================================================================== */
/* 2. SECTIONS                                                                */
/* ========================================================================== */

/* --- Hero Section --- */
const HeroSection = () => (
  <section className="pt-36 pb-20 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-16"
      >
         <div className="flex justify-center">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full bg-[#E0E5EC] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)] text-[10px] md:text-xs mt-4 mb-6 font-bold uppercase tracking-wide text-blue-800"
          >
            <SplinePointer size={16} strokeWidth={2} className="text-blue-600" />
            <span>Scientific Positioning </span>
          </motion.div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-[1.1] sm:leading-[0.95] tracking-tight mb-6">
          Become The <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#385179] via-[#4f46e5] to-[#7c3aed]">
            Only Choice.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto leading-relaxed mb-8">
          Scientific Positioning: The proven methodology for market dominance. Replace intuition with{" "}
          <span className="font-semibold text-slate-700">irrefutable data</span>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
           <WhatsappCTA whatsappNumber="+919910220335" calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
          <GlassButton 
  label="Book Positioning Audit" 
  icon={ArrowRight} 
  className="h-4 sm:h-5 transition-all duration-200"
  buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
  onClick={() => console.log('Focus mode toggled')}
/>
          </WhatsappCTA>
        
        </div>
      </motion.div>

      {/* Visuals */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <HeroChaosCard />
        <HeroPrecisionCard />
      </div>
    </div>
  </section>
);

const HeroChaosCard = () => (
  <motion.div 
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="relative group h-full"
  >
    <NeumorphicCard className="h-full border-t-4 border-red-400 !bg-[#E0E5EC]/50 backdrop-blur-sm">
      <h3 className="text-red-500 font-bold mb-8 flex items-center gap-3 tracking-widest uppercase text-sm">
        <AlertTriangle size={16} /> The Chaotic Reality
      </h3>
      <div className="h-64 relative font-mono text-gray-400">
        <FloatingBadge text="Premium Quality" top="4%" left="4%" rotate={-12} />
        <FloatingBadge text="Fast Shipping" top="20%" right="12%" rotate={6} />
        <FloatingBadge text="Best Service" bottom="30%" left="12%" rotate={15} />
        <FloatingBadge text="Sustainable" bottom="15%" right="8%" rotate={-5} />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-red-500 font-bold text-lg block">ROAS: 1.2x</span>
          <span className="text-[10px] text-gray-400">Struggling to Break Even</span>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs uppercase tracking-widest mt-4">
        Status: Generic Positioning Graveyard
      </p>
    </NeumorphicCard>
  </motion.div>
);

const FloatingBadge = ({ text, top, left, right, bottom, rotate }) => (
  <motion.span
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute text-xs bg-[#E0E5EC] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] px-3 py-2 rounded"
    style={{ top, left, right, bottom, rotate }}
  >
    "{text}"
  </motion.span>
);

const HeroPrecisionCard = () => (
  <motion.div 
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.6 }}
    className="relative group h-full"
  >
    <NeumorphicCard className="h-full border-t-4 border-[#667eea] !bg-[#E0E5EC]/80">
      <h3 className="text-[#667eea] font-bold mb-8 flex items-center gap-3 tracking-widest uppercase text-sm">
        <Target size={16} /> Scientific Precision
      </h3>
      <div className="h-64 flex flex-col justify-center items-center relative">
        <div className="w-full max-w-xs bg-[#E0E5EC] p-4 rounded-xl shadow-[inset_5px_5px_10px_rgba(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] mb-6 text-center">
          <p className="text-[10px] text-[#667eea] uppercase tracking-widest mb-1">Unique Angle</p>
          <p className="font-bold text-slate-700 text-sm">"The Only Jeans Guaranteed Comfortable by Month 2"</p>
        </div>
        
        {/* Animated Graph */}
        <div className="w-full max-w-xs h-24 flex items-end gap-2 px-4 border-b border-gray-300">
          {[20, 35, 50, 75].map((h, i) => (
             <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.8 + (i * 0.1) }} className="w-1/5 bg-gray-300 rounded-t-sm" />
          ))}
          <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: "95%" }} 
            transition={{ delay: 1.2, type: "spring" }}
            className="w-1/5 bg-[#667eea] rounded-t-sm relative shadow-lg"
          >
             <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-[#667eea]">7.2x</span>
          </motion.div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs uppercase tracking-widest mt-4">
        Status: Growth Inevitable
      </p>
    </NeumorphicCard>
  </motion.div>
);

/* --- Problem Section --- */
const ProblemSection = () => {
  const tombstones = [
    { title: "Premium Quality", sub: "Died from overuse", icon: Diamond },
    { title: "Great Service", sub: "Unverifiable", icon: HelpCircle },
    { title: "Sustainable", sub: "10k brands say this", icon: Leaf },
    { title: "Affordable", sub: "Race to bottom", icon: Percent },
  ];

  return (
    <section id="problem" className="max-w-6xl mx-auto px-4 pb-20 overflow-hidden">
      <SectionTitle 
        subtitle="The Problem" 
        title={
          <>
             Why Your Ads Won&apos;t Scale Past <span className="text-red-500 block sm:inline">$50K/Month</span>
          </>
        }
      />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-20 sm:mb-40 relative z-10"
      >
        {tombstones.map((item, i) => (
          <Tombstone key={i} item={item} i={i} />
        ))}
      </motion.div>

      <DeathSpiral />
    </section>
  );
};

const Tombstone = ({ item, i }) => {
  let chaosClass = "";
  if (i === 0) chaosClass = "lg:translate-y-0 lg:-rotate-6 lg:z-10";
  if (i === 1) chaosClass = "lg:translate-y-32 lg:rotate-12 lg:z-0 lg:translate-x-6";
  if (i === 2) chaosClass = "lg:translate-y-12 lg:-rotate-3 lg:z-10 lg:-translate-x-8";
  if (i === 3) chaosClass = "lg:translate-y-48 lg:rotate-6 lg:z-0";
  const mobileClass = i % 2 !== 0 ? "translate-y-8 sm:translate-y-16 rotate-2" : "translate-y-0 -rotate-2";
  const NEU_TOMBSTONE = "rounded-t-[100px] rounded-b-[10px] bg-[#E0E5EC] border border-white/40 shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]";

  return (
    <motion.div variants={fadeInUp} className={`${chaosClass} ${mobileClass}`}>
      <div className={`${NEU_TOMBSTONE} group relative h-56 sm:h-64 flex flex-col items-center justify-center p-4 sm:p-6 text-center hover:shadow-[inset_5px_5px_10px_rgba(163,177,198,0.4)] hover:scale-105 transition-all duration-500 ease-out`}>
        
        {/* Icon */}
        <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mb-4 text-slate-400 group-hover:text-red-500 transition-colors rounded-full bg-[#E0E5EC] shadow-[inset_5px_5px_10px_rgba(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)]">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <h3 className="text-xs sm:text-base font-bold text-slate-700 mb-2 transition-all duration-300 group-hover:line-through group-hover:decoration-red-500 group-hover:decoration-2">
          {item.title}
        </h3>

        <p className="text-[9px] sm:text-xs text-red-500 font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.sub}
        </p>

        <div className="absolute bottom-6 w-12 h-1 bg-slate-300/50 rounded-full group-hover:bg-red-400/30 transition-colors" />
      </div>
    </motion.div>
  );
};

const DeathSpiral = () => (
  <div className="relative">
    <NeumorphicCard className="p-8 border-l-4 border-red-400">
      <h4 className="text-center font-bold text-lg mb-8 text-slate-800 uppercase tracking-widest">
        The Death Spiral
      </h4>
      <div className="space-y-6 relative max-w-2xl mx-auto">
        <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-200" />
        {[
          "Your ads blend into the feed (Low CTR)",
          "Customers choose based on price",
          "You're forced to discount",
          "ROAS plateaus at 1.5-2.5x",
          "Scaling becomes impossible",
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="flex items-center gap-4 relative z-10"
          >
            <div className="w-10 h-10 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] flex items-center justify-center text-red-500 font-bold text-sm shrink-0">
              {i + 1}
            </div>
            <span className="text-slate-600 text-sm font-medium">{step}</span>
          </motion.div>
        ))}
      </div>
    </NeumorphicCard>
  </div>
);

/* --- Solution Section --- */
const SolutionSection = () => (
  <section id="solution" className="py-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionTitle subtitle="The Solution" title="From Guessing to Engineering" />
      
      <div className="mb-20 grid md:grid-cols-2 gap-8">
        <NeumorphicCard className="text-center opacity-70 scale-95 origin-right" inset>
          <div className="h-12 w-12 mx-auto bg-[#E0E5EC] rounded-full shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] flex items-center justify-center mb-4 text-gray-400">
            <HelpCircle />
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-600">Traditional Agency</h3>
          <p className="text-sm text-slate-500 mb-6 font-mono">"Creative Intuition"</p>
          <p className="font-bold text-slate-500 text-sm uppercase tracking-wide">Result: Expensive Guessing</p>
        </NeumorphicCard>

        <NeumorphicCard className="text-center relative overflow-hidden border-t-4 border-[#667eea]">
          <div className="h-12 w-12 mx-auto bg-[#E0E5EC] rounded-full shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] flex items-center justify-center mb-4 text-[#667eea]">
            <Microscope size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#667eea]">Scientific Positioning</h3>
          <p className="text-sm text-slate-500 mb-6 font-mono">"Causal Proof"</p>
          <p className="font-bold text-slate-800 text-sm uppercase tracking-wide">Result: The "Blue Swan"</p>
        </NeumorphicCard>
      </div>

      <FunnelVisual />
    </div>
  </section>
);

const FunnelVisual = () => (
  <div className="text-center max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-8 text-slate-800">Discovery of Your "Blue Swan"</h3>
    <div className="relative max-w-2xl mx-auto font-mono text-xs">
      <motion.div initial={{ width: "120%" }} whileInView={{ width: "100%" }} transition={{duration: 1}} className="w-full bg-[#E0E5EC] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.5)] p-4 mb-2 rounded-t-lg text-center text-gray-400">
        60,000 Combinations
      </motion.div>
      <motion.div initial={{ width: "100%" }} whileInView={{ width: "80%" }} transition={{duration: 1, delay: 0.2}} className="mx-auto bg-[#E0E5EC] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.5)] p-4 mb-2 text-center text-gray-500">
        Research: 500 Options
      </motion.div>
      <motion.div initial={{ width: "80%" }} whileInView={{ width: "60%" }} transition={{duration: 1, delay: 0.4}} className="mx-auto bg-[#E0E5EC] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.5)] p-4 mb-2 text-center text-slate-500">
        Hypothesis: 20 Angles
      </motion.div>
      <motion.div initial={{ width: "60%" }} whileInView={{ width: "40%" }} transition={{duration: 1, delay: 0.6}} className="mx-auto bg-[#E0E5EC] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.5)] p-4 mb-2 rounded-b-lg text-center text-slate-800">
        Testing: 3 Winners
      </motion.div>
      <div className="w-[2px] mx-auto h-12 bg-[#667eea]" />
      
      <NeumorphicCard className="!p-6 flex flex-col md:flex-row items-center justify-center gap-6 border-l-4 border-[#667eea]">
        <div className="p-3 bg-[#E0E5EC] rounded-full shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)]">
          <Feather size={24} className="text-[#667eea]" />
        </div>
        <div className="text-center md:text-left">
          <div className="font-bold text-lg text-slate-800 tracking-widest uppercase mb-1">ONE BLUE SWAN</div>
          <div className="text-slate-500 text-xs">Unfair Competitive Advantage • 5-8x ROAS</div>
        </div>
      </NeumorphicCard>
    </div>
  </div>
);

/* --- Evidence Section --- */
const EvidenceSection = () => (
  <section className="py-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionTitle subtitle="The Evidence" title="Real Brands. Real Results." />
      <div className="grid lg:grid-cols-2 gap-8">
        {[
          {
            title: "The 27-Piece Wardrobe™",
            industry: "Premium Basics",
            oldPos: "Minimalist essentials. Quality over quantity.",
            newPos: "A complete closet system. Get dressed in 90 seconds.",
            metrics: { before: { roas: "1.6x", rev: "$45K" }, after: { roas: "7.8x", rev: "$380K" }, time: "67 days", change: "+488% ROAS" }
          },
          {
            title: "The Runner's Uniform",
            industry: "Activewear",
            oldPos: "High-performance athletic wear for serious athletes.",
            newPos: "Designed by marathon runners. Apply with race results.",
            metrics: { before: { roas: "2.3x", rev: "$65K" }, after: { roas: "6.4x", rev: "$285K" }, time: "60 days", change: "+278% ROAS" }
          },
          {
            title: "Anti-Fast Fashion",
            industry: "Artisan Fashion",
            oldPos: "Ethically made, sustainable fashion.",
            newPos: "Engineered to last 10+ years—or we replace them free.",
            metrics: { before: { roas: "1.4x", rev: "$28K" }, after: { roas: "8.2x", rev: "$195K" }, time: "75 days", change: "+486% ROAS" }
          },
          {
            title: "The 20-Year Jacket™",
            industry: "Heritage Outerwear",
            oldPos: "Handcrafted heritage outerwear.",
            newPos: "Limited to 500 units per year. When sold out, retired forever.",
            metrics: { before: { roas: "2.0x", rev: "$52K" }, after: { roas: "7.1x", rev: "$240K" }, time: "Start of Season", change: "+255% ROAS" }
          }
        ].map((study, index) => (
          <CaseStudyCard key={index} {...study} />
        ))}
      </div>
    </div>
  </section>
);

const CaseStudyCard = ({ title, industry, oldPos, newPos, metrics }) => (
  <NeumorphicCard className="h-full flex flex-col">
    <div className="mb-6">
      <div className="text-[10px] font-bold text-[#667eea] uppercase tracking-[0.2em] mb-3">{industry}</div>
      <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
    </div>
    <div className="grid md:grid-cols-2 gap-4 mb-8 flex-grow">
      <div className="p-4 bg-[#E0E5EC] shadow-[inset_5px_5px_10px_rgba(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] rounded-lg">
        <div className="text-[10px] text-gray-400 uppercase font-bold mb-2 tracking-wider">Old Positioning</div>
        <p className="text-slate-500 text-xs italic leading-relaxed">"{oldPos}"</p>
      </div>
      <div className="p-4 bg-[#E0E5EC] border border-[#667eea]/20 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-1 bg-[#667eea] rounded-bl-lg">
          <Feather size={10} className="text-white" />
        </div>
        <div className="text-[10px] text-[#667eea] uppercase font-bold mb-2 tracking-wider">Scientific Positioning</div>
        <p className="text-slate-800 text-xs font-bold leading-relaxed">"{newPos}"</p>
      </div>
    </div>
    <div className="space-y-3 pt-4 border-t border-slate-200">
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-500 uppercase tracking-wide">ROAS</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 line-through font-mono">{metrics.before.roas}</span>
          <ArrowRight size={12} className="text-gray-400" />
          <span className="text-sm text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded font-mono">{metrics.after.roas}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-500 uppercase tracking-wide">Revenue</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 font-mono">{metrics.before.rev}</span>
          <ArrowRight size={12} className="text-gray-400" />
          <span className="text-sm text-slate-800 font-bold font-mono">{metrics.after.rev}</span>
        </div>
      </div>
    </div>
  </NeumorphicCard>
);

/* --- Method Section --- */
const MethodSection = () => (
  <section id="method" className="py-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionTitle subtitle="The Method" title="How We Engineer Your Blue Swan" />
      <div className="relative">
        <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-[2px] bg-slate-300 -z-10" />
        <div className="flex flex-col md:flex-row">
          <TimelineStage number="1" color="blue" title="Deep Research" weeks="Weeks 1-2" desc="Forensic market intelligence." items={["Product catalog analysis", "Competitive audit", "Positioning map"]} />
          <TimelineStage number="2" color="purple" title="Hypothesis" weeks="Weeks 2-3" desc="Engineering falsifiable angles." items={["Target audience definition", "Predicted ROAS modeling", "Creative briefs"]} />
          <TimelineStage number="3" color="green" title="Testing" weeks="Weeks 3-6" desc="Proving what works with real money." items={["Rapid testing phase", "Refinement phase", "Causal documentation"]} />
          <TimelineStage number="4" color="gray" title="Scale" weeks="Week 7+" desc="Deploying your proven winner." items={["Full creative rollout", "Landing page rewrite", "Channel expansion"]} />
        </div>
      </div>
    </div>
  </section>
);

const TimelineStage = ({ number, title, weeks, desc, items, color }) => {
  const colorClasses = {
    purple: "bg-purple-100 text-purple-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    gray: "bg-gray-100 text-gray-600"
  };
  
  const dotClasses = {
    purple: "bg-purple-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
    gray: "bg-gray-400"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: number * 0.2 }}
      className="relative pl-8 md:pl-0 md:w-1/4 pb-12 md:pb-0 group"
    >
      <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-slate-200 md:hidden" />
      <div className={`
        w-12 h-12 rounded-full border-4 border-[#E0E5EC] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] flex items-center justify-center font-bold text-lg relative z-10 mb-6 transition-all duration-500 group-hover:scale-110 md:mx-auto
        ${colorClasses[color]}
      `}>
        {number}
      </div>
      <div className="md:text-center px-4">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-400">{weeks}</div>
        <h4 className="text-lg font-bold text-slate-800 mb-3">{title}</h4>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">{desc}</p>
        <ul className="text-left space-y-2 text-[10px] text-slate-500 bg-[#E0E5EC] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.5)] p-4 rounded-lg">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${dotClasses[color]}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

/* --- Comparison Section --- */
const ComparisonTable = () => (
  <section id="comparison" className="py-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionTitle subtitle="The Uniqueness" title="Why We Are Different" />
      <div className="overflow-x-auto pb-8">
        <NeumorphicCard className="min-w-[800px] !p-8">
          <div className="grid grid-cols-12 gap-4 pb-6 border-b border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            <div className="col-span-4">Feature</div>
            <div className="col-span-4 text-center text-red-400">Most Agencies</div>
            <div className="col-span-4 text-center text-[#667eea]">Arlox</div>
          </div>
          {[
            { label: "Research", bad: "2-3 hours", good: "60-80 hours" },
            { label: "Method", bad: "Random ideas", good: "Systematic hypotheses" },
            { label: "Logic", bad: "Correlation", good: "Causation" },
            { label: "Result", bad: "1.5x - 2.5x", good: "5x - 8x" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors">
              <div className="col-span-4 font-bold text-slate-600">{row.label}</div>
              <div className="col-span-4 text-center text-slate-500 flex justify-center items-center gap-2 text-sm">
                <XCircle size={14} className="text-red-400" /> {row.bad}
              </div>
              <div className="col-span-4 text-center text-slate-800 font-bold flex justify-center items-center gap-2 bg-[#667eea]/10 py-2 rounded">
                <CheckCircle2 size={14} className="text-[#667eea]" /> {row.good}
              </div>
            </div>
          ))}
        </NeumorphicCard>
      </div>
    </div>
  </section>
);

/* --- Objection Section --- */
const ObjectionSection = () => (
  <section className="py-20 px-6 overflow-hidden">
    <div className="max-w-4xl mx-auto">
      <SectionTitle subtitle="FAQ" title="But What If...?" />
      <NeumorphicCard className="p-4 md:p-8">
        <ObjectionItem question="We already tried repositioning. It didn't work." answer="Most 'repositioning' is just rebranding (changing logo, colors). We focus on the psychological 'why' customers buy, backed by data." />
        <ObjectionItem question="This sounds expensive..." answer="Staying at 1.5x ROAS costs you $200k/year in wasted ad spend. Our clients typically see a 10x ROI in year one." />
        <ObjectionItem question="Can't we do this ourselves?" answer="Maybe, if you have 200 hours and statistical analysis skills. We provide the objectivity you can't have for your own brand." />
      </NeumorphicCard>
    </div>
  </section>
);

const ObjectionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0 group">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex justify-between items-center text-left hover:text-[#667eea] transition-colors">
        <span className="text-lg font-bold text-slate-800 group-hover:text-[#667eea] transition-colors">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className={isOpen ? "text-[#667eea]" : "text-gray-400"}>
          <ChevronRight />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="text-slate-500 leading-relaxed pr-8 font-medium pb-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* --- Footer --- */
const FooterCTA = () => (
  <section className="py-32 px-6 relative overflow-hidden bg-[#E0E5EC]">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-8 leading-tight">
          Stop Gambling. <br /> <span className="text-[#667eea]">Start Engineering.</span>
        </h2>
        <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
          Every week you delay is another <span className="text-slate-800 font-mono">$10K</span> in lost revenue.
        </p>
        <div className="flex flex-col items-center gap-6">
         <WhatsappCTA whatsappNumber="+919910220335" calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
           <GlassButton 
  label="Book Positioning Audit" 
  icon={ArrowRight} 
  className="h-4 sm:h-5 transition-all duration-200"
  buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
  onClick={() => console.log('Focus mode toggled')}
/>
          </WhatsappCTA>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ========================================================================== */
/* 3. MAIN PAGE                                                               */
/* ========================================================================== */

export default function App() {
  return (
    <div className="w-full flex-1 text-slate-700 selection:bg-[#667eea] selection:text-white pb-10 font-sans bg-[#E0E5EC]">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <EvidenceSection />
      <MethodSection />
      <ComparisonTable />
      <ObjectionSection />
      <FooterCTA />
    </div>
  );
}
