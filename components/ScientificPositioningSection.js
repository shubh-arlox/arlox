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
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* CONSTANTS                                                                  */
/* -------------------------------------------------------------------------- */

const BG_BASE = "#f5f5f5";

const NEU_CARD =
  "relative rounded-3xl bg-[#f5f5f5] shadow-[14px_14px_35px_rgba(15,23,42,0.25),-10px_-10px_28px_rgba(255,255,255,0.9)]";

const NEU_INSET =
  "rounded-3xl bg-[#f5f5f5] shadow-[inset_7px_7px_18px_rgba(30,41,59,0.35),inset_-6px_-6px_16px_rgba(255,255,255,0.95)]";

const NEU_PILL =
  "rounded-full bg-[#f5f5f5] shadow-[7px_7px_18px_rgba(30,41,59,0.38),-6px_-6px_16px_rgba(255,255,255,0.95)]";

const PRIMARY_GRADIENT = "from-[#385179] via-[#4f46e5] to-[#7c3aed]";

/* -------------------------------------------------------------------------- */
/* HOOKS                                                                      */
/* -------------------------------------------------------------------------- */

// Hook to detect screen size for conditional animations
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

  // Only enable tilt on desktop to prevent scroll blocking on mobile
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
    <main className="min-h-screen bg-transparent text-slate-800 selection:bg-indigo-500/30 overflow-hidden font-sans">
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

  // FIX: drastically reduced movement range [0, 80] and conditionally apply it only on desktop.
  // This prevents the "scrolling down" issue where the image leaves the viewport.
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);
  const yMotion = isDesktop ? yParallax : 0;

  return (
    <section className="relative pt-24 sm:pt-32 lg:pt-40 min-h-[auto] lg:min-h-[90vh] flex flex-col justify-center">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
        {/* TEXT CONTENT */}
        <div className="relative z-10 text-center lg:text-left">
          <FadeIn>
            <div
              className={`${NEU_INSET} inline-flex items-center gap-2 px-4 py-1.5 mb-6`}
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
                className={`${NEU_CARD} group relative px-8 py-4 text-sm font-bold text-white overflow-hidden transition-all hover:-translate-y-0.5 active:translate-y-0`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${PRIMARY_GRADIENT}`}
                />
                <div className="relative flex items-center gap-3">
                  Book Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Magnetic>
            <div className="flex flex-col gap-1 text-xs font-medium text-slate-400 items-center sm:items-start">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-green-500" /> Avg. 5.8x ROAS
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-blue-500" /> 1,000+
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
      className={`${NEU_CARD} w-full h-full p-2 flex overflow-hidden border-4`}
      style={{ borderColor: BG_BASE }}
    >
      {/* CHAOS SIDE */}
      <div className="w-1/2 relative bg-red-50/60 rounded-l-2xl overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 opacity-10">
          <div className="text-red-900 font-black text-5xl sm:text-7xl lg:text-8xl rotate-90 select-none">
            CHAOS
          </div>
        </div>
        {/* Reduce pill count on mobile */}
        {[...Array(5)].map((_, i) => (
          <FloatingPill key={i} index={i} />
        ))}
        <div className="absolute bottom-4 left-2 sm:left-4 flex flex-col gap-2 z-20">
          <span className="text-[9px] sm:text-[11px] font-bold text-red-500/90 bg-white/80 px-2 py-1 rounded-full shadow-sm w-fit">
            1.2x ROAS
          </span>
          <span className="text-[9px] sm:text-[11px] font-bold text-red-500/90 bg-white/80 px-2 py-1 rounded-full shadow-sm w-fit">
            1.5x ROAS
          </span>
        </div>
      </div>

      {/* ORDER SIDE */}
      <div className="w-1/2 relative bg-white/50 rounded-r-2xl overflow-hidden flex flex-col items-center justify-end pb-4 sm:pb-8 lg:pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="relative z-10 w-[90%] sm:w-4/5 space-y-2 sm:space-y-3">
          <div
            className={`${NEU_CARD} p-2 sm:p-4 mb-3 flex items-center gap-2 sm:gap-3 bg-[#f9fafb]/95`}
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
                className="flex-1 bg-gradient-to-t from-blue-700 to-indigo-400 rounded-t-sm sm:rounded-t-md shadow-[0_18px_30px_rgba(15,23,42,0.45)] relative"
              >
                {i === 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full shadow-[0_10px_18px_rgba(22,163,74,0.6)] whitespace-nowrap"
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
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200/80 z-20">
        <motion.div
          animate={{ top: ["10%", "90%", "10%"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-8 bg-blue-500/80 blur-md rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1.5 sm:p-2 rounded-full shadow-[0_14px_32px_rgba(15,23,42,0.35)] border border-slate-100">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        </div>
      </div>
    </div>
  );
}

function FloatingPill({ index }) {
  const randomDuration = 3 + Math.random() * 4;
  const labels = [
    "Quality",
    "Cheap",
    "Fast",
    "COD",
    "Artisan",
    "GenZ",
  ];

  return (
    <motion.div
      animate={{
        y: [-20, 400],
        rotate: [Math.random() * -20, Math.random() * 20],
        x: [0, Math.random() * 20 - 10], // Reduced horizontal scatter for mobile
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "linear",
        delay: index * 0.8,
      }}
      style={{ left: `${Math.min(index * 20 + 5, 80)}%` }} // Better spacing logic
      className={`${NEU_PILL} absolute top-0 px-2 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[10px] font-bold text-red-500 bg-white/90 border border-red-100/60 z-20 whitespace-nowrap`}
    >
      {labels[index]}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* PROBLEM                                                                    */
/* -------------------------------------------------------------------------- */

function ProblemSection() {
  return (
    <section id="problem" className="max-w-6xl mx-auto px-4">
      <FadeIn className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
          Why Your Ads Won&apos;t Scale Past{" "}
          <span className="text-red-500 block sm:inline">$50K/Month</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-400 mb-3 md:mb-4">
          (And Why It&apos;s Not Your Fault)
        </p>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          You&apos;ve tried everything—new creatives, new audiences, more
          budget. The real problem: your positioning sounds exactly like every
          other fashion brand in your category.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {[
          { title: "Premium Quality", sub: "Died from overuse", icon: Diamond },
          { title: "Service", sub: "Unverifiable", icon: HelpCircle },
          { title: "Sustainable", sub: "10k brands say this", icon: Leaf },
          { title: "Affordable", sub: "Race to bottom", icon: Percent },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <TiltCard
              className={`${NEU_CARD} group h-36 sm:h-48 flex flex-col items-center justify-center p-3 sm:p-6 text-center border border-transparent hover:border-red-200/60`}
            >
              <div
                className={`${NEU_INSET} w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mb-2 sm:mb-4 text-slate-400 group-hover:text-red-500 transition-colors`}
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-slate-700 mb-1 group-hover:line-through decoration-red-500 decoration-2">
                {item.title}
              </h3>
              <p className="text-[9px] sm:text-xs text-red-400 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity font-medium uppercase tracking-wide">
                {item.sub}
              </p>
            </TiltCard>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="mt-8 sm:mt-12 text-center">
        <div
          className={`${NEU_INSET} inline-block px-4 sm:px-6 py-2 sm:py-3 text-[10px] sm:text-sm font-medium text-slate-500 leading-relaxed`}
        >
          The Death Spiral: Low CTR → Price War → Shrinking Margins →{" "}
          <span className="text-red-500 font-bold whitespace-nowrap">
            Scaling Ceiling
          </span>
        </div>
      </FadeIn>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SOLUTION                                                                   */
/* -------------------------------------------------------------------------- */

function SolutionSection() {
  return (
    <section
      id="solution"
      className="max-w-6xl mx-auto px-4 py-8 sm:py-16 md:py-20"
    >
      <div className={`${NEU_CARD} p-5 sm:p-8 md:p-12 overflow-hidden relative`}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-blue-100 text-blue-700 text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">
              The Antidote
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Scientific Positioning
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium mb-4 sm:mb-6">
              The difference between creative guessing and scientific
              engineering.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8">
              Most agencies position your brand through intuition. The Arlox
              team uses a four‑stage methodology that{" "}
              <span className="font-semibold">proves</span> which angle wins and
              then scales it.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Eliminate bias & internal guessing.",
                "Engineer 10–20 falsifiable angles.",
                "Run controlled tests with real ad spend.",
                "Find causal proof and scale the winner.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start sm:items-center gap-3 text-sm sm:text-[15px] text-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5 sm:mt-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <Magnetic strength={0.1}>
              <div className={`${NEU_INSET} p-4 sm:p-6 md:p-8`}>
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Case Study: Hemp Brand
                  </span>
                  <div className="flex gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400/25" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400/25" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-5">
                  <div className="bg-[#f9fafb] rounded-xl p-3 sm:p-4 shadow-sm border-l-4 border-red-400/80 opacity-70 hover:opacity-100 transition-opacity">
                    <div className="flex justify-between text-[9px] sm:text-xs mb-1.5">
                      <span className="font-bold text-red-500">
                        CONTROL (Generic)
                      </span>
                      <span className="text-slate-400">ROAS: 1.2x</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600">
                      &quot;Buy our high quality organic hemp t‑shirts.&quot;
                    </p>
                  </div>

                  <motion.div
                    initial={{ scale: 0.94, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#f9fafb] rounded-xl p-4 sm:p-6 shadow-[0_18px_35px_rgba(15,23,42,0.32)] border-l-4 border-blue-500/90"
                  >
                    <div className="flex justify-between text-[9px] sm:text-xs mb-2">
                      <span className="font-bold text-blue-600 flex items-center gap-1">
                        <Zap className="w-3 h-3" /> SCIENTIFIC (Winner)
                      </span>
                      <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        ROAS: 6.5x
                      </span>
                    </div>
                    <p className="text-sm sm:text-lg font-medium text-slate-800">
                      &quot;Save Soil With Hemp.&quot;
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1.5 leading-normal">
                      Shifts the narrative from fabric benefits to soil
                      regeneration impact.
                    </p>
                    <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        viewport={{ once: true }}
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
/* EVIDENCE                                                                   */
/* -------------------------------------------------------------------------- */

function EvidenceSection() {
  return (
    <section
      id="evidence"
      className="max-w-7xl mx-auto px-4 mb-20 md:mb-24"
    >
      <FadeIn className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Real Brands. Real Results.
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mt-2">
          When positioning changes, everything changes.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatsCard
          icon={Leaf}
          stat="1.2x → 6.5x"
          label="ROAS"
          desc="Hemp Clothing"
          detail="From “Buy Hemp” → “Save Soil With Hemp”."
        />
        <StatsCard
          icon={Diamond}
          stat="↑ Inquiries"
          label="High‑Ticket"
          desc="Premium Brand"
          detail="From “Buy Online” → “Inquire via WhatsApp”."
          delay={0.1}
        />
        <StatsCard
          icon={Zap}
          stat="2x"
          label="ROAS"
          desc="Gen Z Jackets"
          detail="From “Quality” → “Rebellion vs Fast Fashion”."
          delay={0.2}
        />
        <StatsCard
          icon={Shirt}
          stat="1.6x → 4.5x"
          label="ROAS"
          desc="Bamboo Tees"
          detail="From “Bamboo” → “Natural Organic Athletic Wear”."
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
        whileHover={{ y: -8 }}
        className={`${NEU_CARD} p-5 sm:p-6 group transition-all duration-300 h-full flex flex-col`}
      >
        <div className="flex justify-between items-start mb-4 sm:mb-5">
          <div
            className={`${NEU_INSET} w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-blue-600`}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-1">
          {stat}
        </h3>
        <p className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wide mb-3 sm:mb-4">
          {label}
        </p>

        <div className="border-t border-slate-200 pt-3 sm:pt-4 mt-auto">
          <p className="font-semibold text-slate-700 text-sm">{desc}</p>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-normal">
            {detail}
          </p>
        </div>
      </motion.div>
    </FadeIn>
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

      {/* Vertical Line: Left aligned on mobile, centered on desktop */}
      <div className="absolute left-[31px] sm:left-[35px] md:left-1/2 top-32 bottom-32 w-[2px] bg-slate-200 md:-translate-x-1/2">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-full h-full bg-blue-600 origin-top"
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
            <div className="absolute left-[24px] sm:left-[28px] md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 shadow-[0_0_0_4px_#f5f5f5] mt-1.5 md:mt-0" />

            <div
              className={`pl-16 md:pl-0 w-full md:w-[45%] ${
                i % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <FadeIn delay={i * 0.1}>
                <div
                  className={`${NEU_CARD} p-5 sm:p-8 hover:scale-[1.02] transition-transform`}
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
        className={`${NEU_CARD} px-4 sm:px-8 py-16 md:py-24 relative overflow-hidden`}
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
              <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold shadow-[0_18px_35px_rgba(37,99,235,0.55)] hover:shadow-[inset_4px_4px_10px_rgba(15,23,42,0.45)] hover:bg-blue-700 transition-all active:scale-95 text-sm sm:text-base">
                Book Positioning Audit
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}