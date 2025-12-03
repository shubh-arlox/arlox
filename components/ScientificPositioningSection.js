"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  Target,
  ArrowRight,
  ArrowDown,
  TrendingUp,
  HelpCircle,
  Leaf,
  Diamond,
  Zap,
  Shirt,
  Search,
  Lightbulb,
  FlaskConical,
  Rocket,
  Percent,
  CheckCircle2,
  EyeOff,
  MousePointer2,
  BarChart2,
  Dices,
  Microscope,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* CONSTANTS                                                                  */
/* -------------------------------------------------------------------------- */

// Base Background Gradient
// GLOBAL THEME (Default)
export const BG_BASE = "from-[#385179] via-[#4f46e5] to-[#7c3aed]";

export const NEU_FLAT =
  "bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] rounded-3xl border border-white/20";

export const NEU_PRESSED =
  "bg-[#E0E5EC] shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] rounded-3xl border border-white/10";

export const NEU_CONVEX =
  "bg-gradient-to-br from-[#f0f5fc] to-[#caced4] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] rounded-3xl border border-white/40";

export const NEU_TOMBSTONE =
  "rounded-t-[100px] rounded-b-[10px] bg-[#E0E5EC] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] border border-white/20";

export const PRIMARY_GRADIENT =
  "from-[#385179] via-[#4f46e5] to-[#7c3aed]";

  // HERO VISUAL EXCLUSIVE THEME
export const HERO_NEU_FLAT =
  "bg-[#f5f5f5] shadow-[9px_9px_16px_#d1d9e6,-9px_-9px_16px_#ffffff] rounded-3xl border border-white/40";

export const HERO_NEU_PRESSED =
  "bg-[#f5f5f5] shadow-[inset_6px_6px_10px_0_#d1d9e6,inset_-6px_-6px_10px_0_#ffffff] rounded-3xl border border-black/5";

export const HERO_NEU_CONVEX =
  "bg-gradient-to-br from-[#ffffff] to-[#f0f0f0] shadow-[6px_6px_10px_#d1d9e6,-6px_-6px_10px_#ffffff] rounded-3xl border border-white/60";

export const HERO_NEU_TOMBSTONE =
  "rounded-t-[100px] rounded-b-[20px] bg-[#f5f5f5] shadow-[9px_9px_16px_#d1d9e6,-9px_-9px_16px_#ffffff] border border-white/40";



const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* -------------------------------------------------------------------------- */
/* HOOKS                                                                      */
/* -------------------------------------------------------------------------- */

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

/* -------------------------------------------------------------------------- */
/* UTILITY COMPONENTS                                                         */
/* -------------------------------------------------------------------------- */

const Magnetic = ({ children, strength = 0.5 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
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

const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div
      ref={ref}
      style={
        isDesktop
          ? { rotateX, rotateY, transformStyle: "preserve-3d" }
          : undefined
      }
      onMouseMove={(e) => {
        if (!ref.current || !isDesktop) return;
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
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export default function ScientificPositioningSection() {
  return (
    <main
      className="min-h-screen text-slate-700 selection:bg-indigo-500/30 overflow-hidden font-sans"
      style={{ backgroundColor: BG_BASE }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28 pb-24 md:pb-32">
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
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  const { scrollY } = useScroll();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);
  const yMotion = isDesktop ? yParallax : 0;

  return (
    <section className="relative pt-24 sm:pt-32 lg:pt-40 min-h-[auto] lg:min-h-[90vh] flex flex-col justify-center">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
        {/* TEXT CONTENT */}
        <div className="relative z-10 text-center lg:text-left">
          <FadeIn>
            <div
              className={`${NEU_PRESSED} inline-flex items-center gap-2 px-4 py-1.5 mb-6`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500">
                Market Dominance
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-[1.1] sm:leading-[0.95] tracking-tight mb-6">
              Become The <br />
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${PRIMARY_GRADIENT}`}
              >
                Only Choice.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
              Scientific Positioning: The proven methodology for market
              dominance. Replace intuition with{" "}
              <span className="font-semibold text-slate-700">
                irrefutable data
              </span>
              .
            </p>
          </FadeIn>

          <FadeIn
            delay={0.3}
            className="flex flex-col sm:flex-row gap-6 items-center lg:items-center justify-center lg:justify-start"
          >
            <Magnetic strength={0.2}>
              <button
                className={`${NEU_CONVEX} group relative px-8 py-4 text-sm font-bold text-slate-700 overflow-hidden transition-all hover:-translate-y-0.5 active:translate-y-0`}
              >
                <div className="absolute inset-0 bg-transparent group-hover:bg-white/20 transition-colors" />
                <div className="relative flex items-center gap-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    Book Free Audit
                  </span>
                  <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Magnetic>
            <div className="flex flex-col gap-1 text-xs font-medium text-slate-400 items-center sm:items-start">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-green-600" /> Avg. 5.8x ROAS
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-blue-600" /> 1,000+
                Campaigns
              </span>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          style={{ y: yMotion }}
          className="relative w-full max-w-[500px] lg:max-w-none mx-auto h-[280px] sm:h-[350px] lg:h-[500px] mt-8 lg:mt-0 perspective-1000"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      className={`${HERO_NEU_FLAT} w-full h-full p-2 flex overflow-hidden border-4 border-[#E0E5EC]`}
    >
      {/* CHAOS SIDE (Left) */}
      <div className="w-1/2 relative bg-red-100/10 rounded-l-2xl overflow-hidden shadow-[inset_-5px_0_15px_rgba(0,0,0,0.05)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 opacity-10">
          <div className="text-red-900 font-black text-5xl sm:text-7xl lg:text-8xl rotate-90 select-none">
            CHAOS
          </div>
        </div>

        {[...Array(5)].map((_, i) => (
          <FloatingPill key={i} index={i} />
        ))}

        <div className="absolute bottom-4 left-2 sm:left-4 flex flex-col gap-2 z-20">
          <span className="text-[9px] sm:text-[11px] font-bold text-red-500/90 bg-[#E0E5EC]/80 px-2 py-1 rounded-full shadow-sm w-fit border border-white/40">
            1.2x ROAS
          </span>
          <span className="text-[9px] sm:text-[11px] font-bold text-red-500/90 bg-[#E0E5EC]/80 px-2 py-1 rounded-full shadow-sm w-fit border border-white/40">
            1.5x ROAS
          </span>
        </div>
      </div>

      {/* ORDER SIDE (Right) */}
      <div className="w-1/2 relative bg-[#E0E5EC] rounded-r-2xl overflow-hidden flex flex-col items-center justify-end pb-4 sm:pb-8 lg:pb-12 shadow-[inset_5px_0_15px_rgba(255,255,255,0.8)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="relative z-10 w-[90%] sm:w-4/5 space-y-2 sm:space-y-3">
          <div
            className={`${HERO_NEU_CONVEX} p-2 sm:p-4 mb-3 flex items-center gap-2 sm:gap-3`}
          >
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">
                Positioning
              </div>
              <div className="text-[10px] sm:text-sm font-bold text-slate-800 truncate">
                Scientific
              </div>
            </div>
          </div>

          {/* Graph bars */}
          <div className="flex items-end gap-1 sm:gap-2 h-24 sm:h-32 lg:h-40 px-1">
            {[30, 45, 60, 80, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{
                  delay: 0.5 + i * 0.12,
                  type: "spring",
                  stiffness: 210,
                  damping: 22,
                }}
                className="flex-1 bg-gradient-to-t from-blue-700 to-indigo-400 rounded-t-sm sm:rounded-t-md shadow-[5px_5px_10px_rgba(163,177,198,0.4)] relative"
              >
                {i === 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full shadow-lg whitespace-nowrap"
                  >
                    7.0x
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E0E5EC] shadow-[inset_1px_0_2px_rgba(163,177,198,0.5)] z-20">
        <motion.div
          animate={{ top: ["10%", "90%", "10%"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-8 bg-blue-500/50 blur-md rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E0E5EC] p-1.5 sm:p-2 rounded-full shadow-[5px_5px_10px_rgba(163,177,198,0.4),-5px_-5px_10px_rgba(255,255,255,0.8)] border border-white/50">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        </div>
      </div>
    </div>
  );
}


function FloatingPill({ index }) {
  const randomDuration = 3 + Math.random() * 4;
  const labels = ["Quality", "Cheap", "Fast", "COD", "Artisan", "GenZ"];

  return (
    <motion.div
      animate={{
        y: [-20, 400],
        rotate: [Math.random() * -20, Math.random() * 20],
        x: [0, Math.random() * 20 - 10],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "linear",
        delay: index * 0.8,
      }}
      style={{ left: `${Math.min(index * 20 + 5, 80)}%` }}
      className={`${HERO_NEU_CONVEX} absolute top-0 px-2 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[10px] font-bold text-red-500 z-20 whitespace-nowrap`}
    >
      {labels[index]}
    </motion.div>
  );
}
/* -------------------------------------------------------------------------- */
/* PROBLEM (THE GRAVEYARD)                                                    */
/* -------------------------------------------------------------------------- */

function ProblemSection() {
  return (
    <section id="problem" className="max-w-6xl mx-auto px-4">
      <FadeIn className="text-center mb-24 sm:mb-32">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
          Why Your Ads Won&apos;t Scale Past{" "}
          <span className="text-red-500 block sm:inline">$50K/Month</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-400 mb-3 md:mb-4">
          (The Graveyard of Generic Angles)
        </p>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          You&apos;ve tried everything. The real problem: your positioning
          sounds exactly like every other fashion brand in your category.
        </p>
      </FadeIn>

      {/* GRAVEYARD GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-40 relative z-10">
        {[
          { title: "Premium Quality", sub: "Died from overuse", icon: Diamond },
          { title: "Great Service", sub: "Unverifiable", icon: HelpCircle },
          { title: "Sustainable", sub: "10k brands say this", icon: Leaf },
          { title: "Affordable", sub: "Race to bottom", icon: Percent },
        ].map((item, i) => {
          // DISALIGNED ZIG-ZAG LOGIC
          // This creates a wave pattern across the screen on desktop
          // and a bouncy up-down pattern on mobile.

          let chaosClass = "";

          // Desktop transforms (The Wave/Disaligned look)
          if (i === 0) {
            // Start High, Tilted Left
            chaosClass = "lg:translate-y-0 lg:-rotate-6 lg:z-10";
          } else if (i === 1) {
            // Drop Low, Push Right, Tilted Hard Right
            chaosClass =
              "lg:translate-y-32 lg:rotate-12 lg:z-0 lg:translate-x-6";
          } else if (i === 2) {
            // Mid-High, Push Left, Tilted Left
            chaosClass =
              "lg:translate-y-12 lg:-rotate-3 lg:z-10 lg:-translate-x-8";
          } else if (i === 3) {
            // Deep Low, Tilted Right
            chaosClass = "lg:translate-y-48 lg:rotate-6 lg:z-0";
          }

          // Mobile transform (Simple Zig Zag)
          const mobileClass =
            i % 2 !== 0 ? "translate-y-16 rotate-3" : "translate-y-0 -rotate-3";

          return (
            <FadeIn key={i} delay={i * 0.15}>
              <TiltCard
                className={`${NEU_TOMBSTONE} ${chaosClass} ${mobileClass} group relative h-56 sm:h-64 flex flex-col items-center justify-center p-4 sm:p-6 text-center 
                hover:shadow-[inset_5px_5px_10px_rgba(163,177,198,0.4)] 
                hover:rotate-0 hover:translate-y-0 hover:translate-x-0 hover:scale-105 hover:z-50 
                transition-all duration-700 ease-out`}
              >
                <div
                  className={`${NEU_PRESSED} w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mb-4 text-slate-400 group-hover:text-red-500 transition-colors rounded-full`}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-slate-700 mb-2 group-hover:line-through decoration-red-500 decoration-2 decoration-wavy">
                  {item.title}
                </h3>
                <p className="text-[9px] sm:text-xs text-red-400 opacity-100 group-hover:opacity-100 transition-opacity font-medium uppercase tracking-wide">
                  {item.sub}
                </p>

                {/* VISUAL CRACK AT BOTTOM */}
                <div className="absolute bottom-6 w-12 h-1 bg-slate-300/50 rounded-full group-hover:bg-red-400/30 transition-colors" />
              </TiltCard>
            </FadeIn>
          );
        })}
      </div>

      {/* DEATH SPIRAL */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-3xl mx-auto mt-20"
      >
        <h3 className="text-xl font-bold text-center text-gray-800 mb-8">
          The Death Spiral
        </h3>
        <div
          className={`${NEU_FLAT} p-6 sm:p-8 rounded-3xl md:rounded-full flex flex-col md:flex-row items-center justify-between gap-6 relative z-10`}
        >
          <SpiralStep icon={EyeOff} label="Generic Positioning" />
          <AnimatedArrow />
          <SpiralStep icon={MousePointer2} label="Low CTR" />
          <AnimatedArrow />
          <SpiralStep icon={Percent} label="Forced Discount" />
          <AnimatedArrow />
          <SpiralStep icon={BarChart2} label="ROAS Plateau" />
        </div>
      </motion.div>
    </section>
  );
}

function SpiralStep({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center text-center max-w-[150px] z-10">
      <div
        className={`${NEU_CONVEX} w-12 h-12 flex items-center justify-center text-red-500 mb-2`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-xs font-bold text-gray-700">{label}</span>
    </div>
  );
}

function AnimatedArrow() {
  return (
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3], x: [0, 3, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="text-red-300"
    >
      <ArrowRight className="w-6 h-6 hidden md:block" />
      <ArrowDown className="w-6 h-6 md:hidden" />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* SOLUTION                                                                   */
/* -------------------------------------------------------------------------- */

function SolutionSection() {
  return (
    <section id="solution" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div
            className={`${NEU_PRESSED} inline-block px-4 py-1.5 rounded-full mb-4`}
          >
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              The Antidote
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Scientific Positioning
          </h2>
          <p className="text-gray-600 mt-4">We don't guess. We engineer.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* GUESSING - CHAOTIC DICE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${NEU_PRESSED} p-6 sm:p-8 rounded-3xl opacity-80`}
          >
            <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" /> Creative Guessing
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Brainstorming sessions. "Creative intuition." Testing random
              angles. Hope strategy.
            </p>
            <div className="h-32 sm:h-40 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-xl overflow-hidden relative bg-[#E0E5EC]">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  x: [0, 15, -15, 0],
                  y: [0, -15, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.3, 0.6, 1],
                }}
              >
                <Dices className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* ENGINEERING - PRECISION ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${NEU_FLAT} p-6 sm:p-8 rounded-3xl transform md:scale-105 border-2 border-blue-500/10`}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-blue-600" /> Scientific
              Engineering
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Systematic research. Falsifiable hypotheses. Controlled testing.
              Causal proof.
            </p>
            <div
              className={`${NEU_PRESSED} h-32 sm:h-40 flex items-center justify-center rounded-xl`}
            >
              {/* ANIMATION: Precision Pulse */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 relative z-10" />
                {/* Ping effect behind target */}
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 bg-blue-400 rounded-full -z-10 opacity-20"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* COMPARISON CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              generic: "Sustainable Fashion",
              gRoas: "1.2x",
              scientific: "Save Soil With Hemp",
              sRoas: "6.5x",
            },
            {
              generic: "Premium Denim",
              gRoas: "2.1x",
              scientific: "Engineered Fit",
              sRoas: "6.8x",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`${NEU_FLAT} p-6 rounded-3xl`}
            >
              <div className="flex justify-between mb-4">
                <span className="text-xs font-bold text-slate-400">
                  GENERIC
                </span>
                <span className="text-xs font-bold text-blue-600">
                  SCIENTIFIC
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div
                  className={`${NEU_PRESSED} flex-1 text-center p-3 sm:p-4 rounded-xl`}
                >
                  <span className="text-xs sm:text-sm text-slate-500">
                    "{item.generic}"
                  </span>
                  <div className="text-[10px] sm:text-xs text-red-400 font-bold mt-2">
                    {item.gRoas} ROAS
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                <div
                  className={`${NEU_CONVEX} flex-1 text-center p-3 sm:p-4 rounded-xl border-blue-100`}
                >
                  <span className="text-xs sm:text-sm text-slate-800 font-bold">
                    "{item.scientific}"
                  </span>
                  <div className="text-[10px] sm:text-xs text-green-600 font-bold mt-2">
                    {item.sRoas} ROAS
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* EVIDENCE SECTION                                                           */
/* -------------------------------------------------------------------------- */

function EvidenceSection() {
  const cases = [
    {
      icon: Leaf,
      color: "text-green-600",
      title: "Hemp Brand",
      before: "Buy Hemp",
      after: "Save Soil",
      result: "1.2x → 6.5x",
      label: "ROAS",
    },
    {
      icon: Diamond,
      color: "text-purple-600",
      title: "Premium Brand",
      before: "Buy Online",
      after: "Inquire Only",
      result: "Sales Record",
      label: "RESULT",
    },
    {
      icon: Zap,
      color: "text-red-600",
      title: "Gen Z Brand",
      before: "Quality",
      after: "Rebellion",
      result: "Doubled",
      label: "ROAS",
    },
    {
      icon: Shirt,
      color: "text-yellow-600",
      title: "Bamboo Brand",
      before: "Bamboo",
      after: "Athletic",
      result: "1.6x → 4.5x",
      label: "ROAS",
    },
  ];

  return (
    <section id="evidence" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Real Brands. Real Positioning.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className={`${NEU_FLAT} p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300`}
            >
              <div
                className={`${NEU_PRESSED} w-10 h-10 rounded-full flex items-center justify-center ${c.color} mb-4`}
              >
                <c.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{c.title}</h4>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Before:</span>
                  <span className="text-gray-500 truncate ml-2">
                    "{c.before}"
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">After:</span>
                  <span className="text-gray-800 font-bold truncate ml-2">
                    "{c.after}"
                  </span>
                </div>
              </div>
              <div
                className={`${NEU_PRESSED} px-3 py-2 rounded-lg text-center`}
              >
                <span className="text-[10px] text-gray-400 uppercase">
                  {c.label}
                </span>
                <div className="text-lg font-bold text-green-600">
                  {c.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* METHOD                                                                     */
/* -------------------------------------------------------------------------- */

function MethodSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const steps = [
    {
      title: "Deep Research",
      desc: "Forensic analysis of brand, market and customers to eliminate bias.",
      icon: Search,
    },
    {
      title: "Hypothesis Formation",
      desc: "Engineering 15–25 falsifiable positioning angles with specific outcomes.",
      icon: Lightbulb,
    },
    {
      title: "Systematic Testing",
      desc: "Controlled experiments with real ad spend. Rapid testing → refinement.",
      icon: FlaskConical,
    },
    {
      title: "Scale & Dominate",
      desc: "Deploy the winning angle across ads, LPs and email. Scaling reliably.",
      icon: Rocket,
    },
  ];

  return (
    <section
      id="method"
      ref={ref}
      className="max-w-4xl mx-auto px-4 py-16 md:py-20 relative"
    >
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-16 md:mb-20">
        The Scientific Positioning System
      </h2>

      {/* Vertical Line */}
      <div className="absolute left-[31px] sm:left-[35px] md:left-1/2 top-32 bottom-32 w-[2px] bg-slate-300/50 md:-translate-x-1/2 shadow-[inset_1px_1px_2px_#d1d9e6]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-full h-full bg-blue-600 origin-top shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        />
      </div>

      <div className="space-y-12 md:space-y-20">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } relative`}
          >
            {/* Dot Indicator */}
            <div
              className={`absolute left-[24px] sm:left-[28px] md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#E0E5EC] border-2 border-blue-600 z-10 shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] mt-1.5 md:mt-0`}
            />

            <div
              className={`pl-16 md:pl-0 w-full md:w-[45%] ${
                i % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <FadeIn delay={i * 0.1}>
                <div
                  className={`${NEU_FLAT} p-5 sm:p-8 hover:scale-[1.02] transition-transform`}
                >
                  <div
                    className={`mb-3 flex items-center gap-3 ${
                      i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="hidden md:block w-[45%]" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CTA                                                                        */
/* -------------------------------------------------------------------------- */

function CTASection() {
  return (
    <section className="max-w-5xl mx-auto px-4 text-center">
      <div
        className={`${NEU_FLAT} px-4 sm:px-8 py-16 md:py-24 relative overflow-hidden`}
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 tracking-tight">
            Stop Renting Attention.
            <br />
            <span className="text-blue-600">Start Owning It.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Intuition doesn&apos;t scale. Science does. Your winning angle
            already exists in the market. Scientific Positioning finds it and
            turns it into predictable revenue.
          </p>

          <div className="flex justify-center">
            <Magnetic strength={0.3}>
              <button
                className={`${NEU_CONVEX} px-8 py-4 font-bold text-blue-700 transition-all hover:-translate-y-1 active:scale-95 text-sm sm:text-base`}
              >
                Book Positioning Audit
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}