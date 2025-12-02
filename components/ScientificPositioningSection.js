"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  Target,
  ArrowRight,
  TrendingUp,
  HelpCircle,
  Microscope,
  Dices,
  Leaf,
  Diamond,
  Zap,
  Shirt,
  Search,
  Lightbulb,
  FlaskConical,
  Rocket,
  EyeOff,
  MousePointer2,
  Percent,
  BarChart2,
  CheckCircle2,
  XCircle,
  MessageCircle,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* CONSTANTS                                  */
/* -------------------------------------------------------------------------- */

// Base color from your request
const BG_BASE = "#f5f5f5";

// The "convex" popping out look
const NEU_CARD =
  "relative rounded-3xl bg-[#f5f5f5] shadow-[9px_9px_18px_#d1d1d1,-9px_-9px_18px_#ffffff]";

// The "concave" pressed in look
const NEU_INSET =
  "rounded-3xl bg-[#f5f5f5] shadow-[inset_6px_6px_12px_#d1d1d1,inset_-6px_-6px_12px_#ffffff]";

// Small pills
const NEU_PILL =
  "rounded-full bg-[#f5f5f5] shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff]";

const PRIMARY_GRADIENT = "from-blue-600 via-indigo-600 to-violet-600";

/* -------------------------------------------------------------------------- */
/* UTILITY COMPONENTS                              */
/* -------------------------------------------------------------------------- */

// 1. MAGNETIC BUTTON EFFECT
const Magnetic = ({ children, strength = 0.5 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
    >
      {children}
    </motion.div>
  );
};

// 2. 3D TILT CARD
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200);
        y.set(yPct * 200);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`${className} transition-all duration-200 ease-out`}
    >
      {children}
    </motion.div>
  );
};

// 3. FADE UP WRAPPER
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function ScientificPositioningSection() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-800 selection:bg-indigo-500/30 overflow-hidden font-sans">
      <div className="relative z-10 space-y-24 md:space-y-32 pb-32">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <EvidenceSection />
        <MethodSection />
        <CTASection />
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTIONS                                   */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative pt-40 px-4 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <FadeIn>
            <div className={`${NEU_INSET} inline-flex items-center gap-2 px-4 py-1.5 mb-6`}>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                Market Dominance
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-7xl font-black text-slate-800 leading-[0.95] tracking-tight mb-6">
              Become The <br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${PRIMARY_GRADIENT}`}>
                Only Choice.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed mb-10">
              Scientific Positioning: The proven methodology for market dominance.
              Replace intuition with <span className="font-semibold text-slate-700">irrefutable data</span>.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Magnetic strength={0.2}>
              <button
                className={`${NEU_CARD} group relative px-8 py-4 text-sm font-bold text-white overflow-hidden transition-all hover:shadow-[12px_12px_24px_#d1d1d1,-12px_-12px_24px_#ffffff] active:translate-y-1`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${PRIMARY_GRADIENT}`} />
                <div className="relative flex items-center gap-3">
                  Book Your Free Positioning Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Magnetic>
            <div className="flex flex-col gap-1 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-2"><TrendingUp className="w-3 h-3 text-green-500"/> Avg. 5.8x ROAS Improvement</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500"/> 1,000+ Campaigns</span>
              <span className="flex items-center gap-2"><Diamond className="w-3 h-3 text-purple-500"/> $47M+ Generated</span>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div style={{ y: y1 }} className="relative h-[500px] w-full hidden lg:block perspective-1000">
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className={`${NEU_CARD} w-full h-full p-2 flex overflow-hidden border-4 border-[#f5f5f5]`}>
      {/* CHAOS SIDE (Left) */}
      <div className="w-1/2 relative bg-red-50/50 rounded-l-2xl overflow-hidden group">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 opacity-10">
          <div className="text-red-900 font-black text-8xl rotate-90 select-none">CHAOS</div>
        </div>
        {[...Array(6)].map((_, i) => (
          <FloatingPill key={i} index={i} />
        ))}
        {/* Low ROAS indicators */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-20">
           <span className="text-xs font-bold text-red-400">1.2x ROAS</span>
           <span className="text-xs font-bold text-red-400">1.5x ROAS</span>
        </div>
      </div>

      {/* ORDER SIDE (Right) */}
      <div className="w-1/2 relative bg-white/40 rounded-r-2xl overflow-hidden flex flex-col items-center justify-end pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="relative z-10 w-3/4 space-y-3">
          <div className={`${NEU_CARD} p-4 mb-4 flex items-center gap-3 bg-white/80`}>
             <Target className="w-5 h-5 text-blue-600" />
             <div className="flex-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Positioning</div>
                <div className="text-sm font-bold text-slate-800">Scientific & Proven</div>
             </div>
          </div>
          
          <div className="flex items-end gap-2 h-40">
             {[30, 45, 60, 80, 100].map((h, i) => (
               <motion.div 
                 key={i}
                 initial={{ height: 0 }}
                 animate={{ height: `${h}%` }}
                 transition={{ 
                   delay: 2 + (i * 0.1), 
                   type: "spring",
                   stiffness: 200,
                   damping: 20
                 }}
                 className="flex-1 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-md shadow-lg relative group"
               >
                 {i === 4 && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg"
                    >
                        7.0x
                    </motion.div>
                 )}
               </motion.div>
             ))}
          </div>
        </div>
      </div>

      {/* CENTER DIVIDER */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 z-20">
        <motion.div 
          animate={{ top: ["10%", "90%", "10%"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-8 bg-blue-500 blur-md rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-xl border border-slate-100">
           <ArrowRight className="w-5 h-5 text-blue-600" />
        </div>
      </div>
    </div>
  );
}

function FloatingPill({ index }) {
  const randomDuration = 3 + Math.random() * 4;
  const randomX = Math.random() * 100;
  // Updated chaos terms from PDF
  const labels = ["Best Quality", "Cheap Price", "Free Shipping", "COD", "Artisanal", "GenZ"];
  
  return (
    <motion.div
      animate={{ 
        y: [-20, 400],
        rotate: [Math.random() * -20, Math.random() * 20],
        x: [randomX, randomX + (Math.random() * 40 - 20)]
      }}
      transition={{ 
        duration: randomDuration, 
        repeat: Infinity, 
        ease: "linear",
        delay: index * 0.8
      }}
      className={`absolute top-0 left-[${index * 15}%] ${NEU_PILL} px-3 py-1.5 text-[10px] font-bold text-red-500 bg-white/90 border border-red-100/50 z-20`}
    >
      {labels[index]}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* PROBLEM                                     */
/* -------------------------------------------------------------------------- */

function ProblemSection() {
  return (
    <section id="problem" className="max-w-6xl mx-auto px-4">
      <FadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
          Why Your Ads Won't Scale Past <span className="text-red-500">$50K/Month</span>
        </h2>
        <p className="text-lg font-semibold text-slate-400 mb-4">(And Why It's Not Your Fault)</p>
        <p className="text-slate-500 max-w-2xl mx-auto">
          You've tried everything. New creatives. Different audiences. More budget. 
          But you're still stuck. Here's the real problem: Your positioning sounds exactly like every other fashion brand.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: "Premium Quality", sub: "Died from overuse", icon: Diamond },
          { title: "Customer Service", sub: "Unverifiable claim", icon: HelpCircle },
          { title: "Sustainable", sub: "10,000 brands say this", icon: Leaf },
          { title: "Affordable Luxury", sub: "Contradiction", icon: Percent },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <TiltCard className={`${NEU_CARD} group h-48 flex flex-col items-center justify-center p-6 text-center border border-transparent hover:border-red-200/50`}>
              <div className={`${NEU_INSET} w-14 h-14 rounded-full flex items-center justify-center mb-4 text-slate-400 group-hover:text-red-500 transition-colors group-hover:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-700 mb-1 group-hover:line-through decoration-red-500 decoration-2">{item.title}</h3>
              <p className="text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity font-medium uppercase tracking-wide">
                {item.sub}
              </p>
            </TiltCard>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn delay={0.4} className="mt-12 text-center">
        <div className={`${NEU_INSET} inline-block px-6 py-3 text-sm font-medium text-slate-500`}>
            The Death Spiral: Low CTR → Price War → Shrinking Margins → <span className="text-red-500 font-bold">Scaling Ceiling</span>
        </div>
      </FadeIn>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SOLUTION                                    */
/* -------------------------------------------------------------------------- */

function SolutionSection() {
  return (
    <section id="solution" className="max-w-6xl mx-auto px-4 py-20">
      <div className={`${NEU_CARD} p-8 md:p-12 overflow-hidden relative`}>
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
              The Antidote
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-2">
              Scientific Positioning
            </h2>
            <p className="text-slate-500 font-medium mb-6">
                The Difference Between Creative Guessing and Scientific Engineering
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Most agencies position your brand through "intuition". They test 3-5 random angles and pick what "works okay". 
              That's expensive guessing. <br/><br/>
              The Arlox team doesn't guess. We <strong>prove</strong> it. We use a 4-stage methodology to engineer positioning that multiplies ROAS.
            </p>
            
            <ul className="space-y-4">
              {[
                "Eliminate bias & guessing",
                "Falsifiable Hypotheses (10-20 angles)",
                "Controlled Testing with real money",
                "Causal Proof & Replication"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Magnetic strength={0.1}>
              <div className={`${NEU_INSET} p-6 md:p-8`}>
                <div className="flex justify-between items-center mb-6">
                   <span className="text-xs font-bold text-slate-400 uppercase">Case Study: Hemp Brand</span>
                   <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400/20" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400/20" />
                      <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                   </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-red-400 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-bold text-red-500">CONTROL (Generic)</span>
                      <span className="text-slate-400">ROAS: 1.2x</span>
                    </div>
                    <p className="text-sm text-slate-600">"Buy our high quality organic hemp t-shirts."</p>
                    <p className="text-[10px] text-red-400 mt-2 italic">Problem: Meaningless commodity.</p>
                  </div>

                  <motion.div 
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 scale-105"
                  >
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-bold text-blue-600 flex items-center gap-1"><Zap className="w-3 h-3"/> SCIENTIFIC (Winner)</span>
                      <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">ROAS: 6.5x</span>
                    </div>
                    <p className="text-lg font-medium text-slate-800">"Save Soil With Hemp."</p>
                    <p className="text-xs text-slate-500 mt-1">Shifts narrative from fabric to impact.</p>
                    <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* EVIDENCE                                    */
/* -------------------------------------------------------------------------- */

function EvidenceSection() {
  return (
    <section id="evidence" className="max-w-7xl mx-auto px-4 mb-24">
      <FadeIn className="mb-12 text-center">
         <h2 className="text-3xl font-bold text-slate-800">Real Brands. Real Results.</h2>
         <p className="text-slate-500 mt-2">When positioning changes, everything changes.</p>
      </FadeIn>
      <div className="grid md:grid-cols-4 gap-6">
         <StatsCard 
            icon={Leaf}
            stat="1.2x → 6.5x" 
            label="ROAS" 
            desc="Hemp Clothing"
            detail="From 'Buy Hemp' → 'Save Soil With Hemp'"
         />
         <StatsCard 
            icon={Diamond}
            stat="Higher Sales" 
            label="Inquiries" 
            desc="₹25k Premium Brand"
            detail="From 'Buy Online' → 'Inquire via WhatsApp'"
            delay={0.1}
         />
         <StatsCard 
            icon={Zap}
            stat="2x" 
            label="ROAS Doubled" 
            desc="Gen Z Jackets"
            detail="From 'Quality' → 'Rebellion vs Fast Fashion'"
            delay={0.2}
         />
         <StatsCard 
            icon={Shirt}
            stat="1.6x → 4.5x" 
            label="ROAS" 
            desc="Bamboo Tees"
            detail="From 'Bamboo' → 'Natural Organic Athletic Wear'"
            delay={0.3}
         />
      </div>
    </section>
  );
}

function StatsCard({ icon: Icon, stat, label, desc, detail, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <motion.div 
        whileHover={{ y: -10 }}
        className={`${NEU_CARD} p-6 group transition-all duration-300 h-full flex flex-col`}
      >
        <div className="flex justify-between items-start mb-6">
          <div className={`${NEU_INSET} w-10 h-10 flex items-center justify-center text-blue-600`}>
            <Icon className="w-5 h-5" />
          </div>
        </div>
        
        <h3 className="text-2xl font-black text-slate-800 mb-1">{stat}</h3>
        <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-4">{label}</p>
        
        <div className="border-t border-slate-200 pt-4 mt-auto">
          <p className="font-semibold text-slate-700 text-sm">{desc}</p>
          <p className="text-xs text-slate-500 mt-1 leading-normal">{detail}</p>
        </div>
      </motion.div>
    </FadeIn>
  );
}

/* -------------------------------------------------------------------------- */
/* METHOD (SCROLL DRAW)                        */
/* -------------------------------------------------------------------------- */

function MethodSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const steps = [
    { 
        title: "Deep Research", 
        desc: "Forensic analysis of brand, market, and customers to eliminate bias. We don't assume; we investigate.", 
        icon: Search 
    },
    { 
        title: "Hypothesis Formation", 
        desc: "Engineering 15-25 falsifiable positioning angles with specific predicted outcomes based on psychology.", 
        icon: Lightbulb 
    },
    { 
        title: "Systematic Testing", 
        desc: "We run controlled experiments with real money to prove what works. Rapid testing → Refinement → Confirmation.", 
        icon: FlaskConical 
    },
    { 
        title: "Scale & Dominate", 
        desc: "Deploy the winning angle everywhere (Ads, LP, Email). From 'Stuck' to 'Scaling'.", 
        icon: Rocket 
    },
  ];

  return (
    <section id="method" ref={ref} className="max-w-4xl mx-auto px-4 py-20 relative">
      <h2 className="text-center text-3xl font-bold mb-20">The Scientific Positioning System</h2>
      
      {/* THE DRAWING LINE */}
      <div className="absolute left-[27px] md:left-1/2 top-40 bottom-40 w-1 bg-slate-200 -translate-x-1/2">
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="w-full h-full bg-blue-600 origin-top"
        />
      </div>

      <div className="space-y-20">
        {steps.map((step, i) => (
          <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}>
            
            {/* CENTRAL NODE */}
            <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 shadow-[0_0_0_4px_#f5f5f5]" />

            {/* CONTENT */}
            <div className={`ml-16 md:ml-0 w-full md:w-[45%] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
               <FadeIn delay={i * 0.1}>
                 <div className={`${NEU_CARD} p-6 md:p-8 hover:scale-[1.02] transition-transform`}>
                    <div className={`mb-4 flex items-center gap-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                       <step.icon className="w-6 h-6 text-blue-600" />
                       <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                 </div>
               </FadeIn>
            </div>
            
            {/* SPACER FOR ALTERNATING LAYOUT */}
            <div className="hidden md:block w-[45%]" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CTA                                      */
/* -------------------------------------------------------------------------- */

function CTASection() {
  return (
    <section className="max-w-5xl mx-auto px-4 text-center">
      <div className={`${NEU_CARD} px-6 py-20 md:p-24 relative overflow-hidden`}>
         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
         
         <div className="relative z-10">
           <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
             Stop Renting Attention.
             <br />
             <span className="text-blue-600">Start Owning It.</span>
           </h2>
           <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
             Intuition doesn't scale. Science does. Your winning angle already exists. We just need to find it.
           </p>
           
           <div className="flex justify-center gap-6">
              <Magnetic strength={0.3}>
                 <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold shadow-[6px_6px_12px_rgba(37,99,235,0.4),-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-blue-700 transition-all active:scale-95">
                    Book Positioning Audit
                 </button>
              </Magnetic>
           </div>
         </div>
      </div>
    </section>
  );
}