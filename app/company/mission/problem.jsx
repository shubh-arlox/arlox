import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, Quote, SquareCheckBig } from 'lucide-react';
import Image from 'next/image';
import Checkbox from './svg';

const NeumorphicProblemSection = () => {
  // State to track which marker is touched on mobile
  const [activeMobileMarker, setActiveMobileMarker] = useState(null);

  // === NEUMORPHIC PALETTE ===
  const colors = {
    bg: '#ecf0f3',
    shadowLight: '#ffffff',
    shadowDark: '#d1d9e6',
    crimson: '#e53e3e',
    navy: '#2b3a55',
    gold: '#E8C57A',
    slate: '#64748b',
    darkest: '#1a202c',
  };

  // === SHADOW STYLES (inline for proper interpolation) ===
  const shadows = {
    neuCard: {
      boxShadow: `20px 20px 60px ${colors.shadowDark}, -20px -20px 60px ${colors.shadowLight}`
    },
    neuFlat: {
      boxShadow: `6px 6px 12px ${colors.shadowDark}, -6px -6px 12px ${colors.shadowLight}`
    },
    neuInset: {
      boxShadow: `inset 6px 6px 12px ${colors.shadowDark}, inset -6px -6px 12px ${colors.shadowLight}`
    },
    neuDeep: {
      boxShadow: `25px 25px 50px ${colors.shadowDark}, -25px -25px 50px ${colors.shadowLight}`
    }
  };
    const neuInset = `shadow-[inset_6px_6px_12px_${colors.shadowDark},inset_-6px_-6px_12px_${colors.shadowLight}]`;
const neuBg = `bg-[#ecf0f3]`;

  // === DATA ===
 const problems = [
  { issue: "Easy defensiveness", top: "22%", left: "15%", placement: "top" },
  { issue: "Hard work without leverage", top: "38%", left: "18%", placement: "bottom" },
  { issue: "Low quality work", top: "28%", left: "30%", placement: "top" },

  { issue: "Victimization mindset", top: "65%", left: "20%", placement: "bottom" },
  { issue: "Trying hard, still losing", top: "28%", left: "48%", placement: "top" },
  { issue: "Disorganization", top: "18%", left: "65%", placement: "top" },

  { issue: "No joy, always in a hurry", top: "38%", left: "76%", placement: "bottom" },
  { issue: "Creating chaos", top: "58%", left: "50%", placement: "bottom" },
  { issue: "Dreading work", top: "45%", left: "60%", placement: "bottom" },

  { issue: "Ignoring health", top: "70%", left: "35%", placement: "bottom" },
  { issue: "Creating confusion", top: "50%", left: "10%", placement: "bottom" },
  { issue: "Proudly cheap & low quality", top: "20%", left: "80%", placement: "top" },

  { issue: "Cutting corners", top: "55%", left: "75%", placement: "bottom" },
  { issue: "Missing deadlines", top: "72%", left: "48%", placement: "bottom" },
  { issue: "Delaying work", top: "48%", left: "42%", placement: "top" },

  { issue: "Groupthink", top: "15%", left: "35%", placement: "top" },
  { issue: "Lying by omission", top: "72%", left: "75%", placement: "bottom" },
  { issue: "Sugarcoating the truth", top: "40%", left: "55%", placement: "top" },
];


  // Helper: Position the card relative to the dot
  const getCalloutPosition = (placement) => {
    switch(placement) {
      case 'top': return 'bottom-full mb-3 left-1/2 -translate-x-1/2';
      case 'bottom': return 'top-full mt-3 left-1/2 -translate-x-1/2';
      case 'left': return 'right-full mr-3 top-1/2 -translate-y-1/2';
      case 'right': return 'left-full ml-3 top-1/2 -translate-y-1/2';
      default: return 'top-full mt-3 left-1/2 -translate-x-1/2';
    }
  };

  // Helper: Position the small arrow
  const getArrowPosition = (placement) => {
    switch(placement) {
      case 'top': return '-bottom-1.5 left-1/2 -translate-x-1/2';
      case 'bottom': return '-top-1.5 left-1/2 -translate-x-1/2';
      case 'left': return '-right-1.5 top-1/2 -translate-y-1/2';
      case 'right': return '-left-1.5 top-1/2 -translate-y-1/2';
      default: return '-top-1.5 left-1/2 -translate-x-1/2';
    }
  };

  // Helper: Mobile-specific positioning to prevent overflow
  const getMobileCalloutPosition = (left) => {
    const leftPercent = parseFloat(left);
    // If marker is on right side, show callout on left
    if (leftPercent > 70) {
      return 'right-0 top-full mt-2';
    }
    // If marker is on left side, show callout on right
    if (leftPercent < 30) {
      return 'left-0 top-full mt-2';
    }
    // Center markers: show centered below
    return 'left-1/2 -translate-x-1/2 top-full mt-2';
  };

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-7xl mx-auto">

        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: colors.darkest }}>
           The Uncomfortable Baseline of <br/>
            <span style={{ color: colors.crimson }}> Global Expectation</span>
          </h2>
           <p className="text-xs sm:text-sm font-semibold" style={{ color: colors.slate }}>
             We have worked with
              <span className="text-sm sm:text-lg font-black block sm:inline mt-2 sm:mt-0" style={{ color: colors.navy }}>
                {' '}1000+
              </span>{' '}
             international brands to understand what they see when they look at <span className="text-sm sm:text-lg font-black block sm:inline mt-2 sm:mt-0" style={{ color: colors.navy }}>
                {' '}India.
              </span>{' '} <br/>
              What follows is not just a list of flaws, but the persistent, solidified perception that defines their reality.
            </p>
        </motion.div>

        {/* === WORLD MAP & CARDS === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          {/* Neumorphic Frame */}
          <div 
            className="relative px-4 rounded-[2rem] bg-[#ecf0f3]"
            style={shadows.neuCard}
          >
            <div 
              className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-3xl overflow-visible bg-slate-200"
              style={shadows.neuInset}
            >

              {/* Map Image */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <Image
                  src="/map2.png"
                  alt="World map"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 1280px"
                  className="object-cover object-center grayscale opacity-50 mix-blend-multiply"
                />
              </div>

              {/* Desktop: Markers & Always Visible Cards */}
              {problems.map((problem, i) => (
                <motion.div
                  key={`desktop-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute z-10 hidden sm:block"
                  style={{ top: problem.top, left: problem.left }}
                >
                  <div className="relative">
                    {/* Pulsing Dot */}
                    

                    {/* ALWAYS VISIBLE CARD on Desktop */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className={`
                        absolute ${getCalloutPosition(problem.placement)}
                        bg-[#ecf0f3]/95 backdrop-blur-sm rounded-xl p-3 min-w-[150px] z-30 border border-white/40
                      `}
                      style={shadows.neuFlat}
                    >
                      <div className="flex items-start gap-2">
                        <AlertCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] leading-tight font-bold" style={{ color: colors.slate }}>
                            {problem.issue}
                          </p>
                        </div>
                      </div>

                      {/* Arrow Pointer */}
                      <div 
                        className={`absolute w-3 h-3 bg-[#ecf0f3] rotate-45 border border-white/40 ${getArrowPosition(problem.placement)}`}
                        style={{ 
                          borderRight: 'none', 
                          borderBottom: 'none'
                        }} 
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Mobile: Map with TOUCHABLE markers */}
              <div className="sm:hidden absolute inset-0 rounded-3xl">
                {problems.map((problem, i) => (
                  <div
                    key={`mobile-${i}`}
                    className="absolute z-10"
                    style={{ top: problem.top, left: problem.left }}
                  >
                    {/* Touchable Marker */}
                    <button
                      onClick={() => setActiveMobileMarker(activeMobileMarker === i ? null : i)}
                      className="relative focus:outline-none p-2"
                    >
                      <div className="relative z-20">
                        <div className="absolute -inset-2 bg-red-500/20 rounded-full animate-ping" />
                        <div 
                          className={`
                            w-3 h-3 rounded-full shadow-lg border-2 transition-all duration-300
                            ${activeMobileMarker === i ? 'bg-red-600 border-white scale-125' : 'bg-red-500 border-white'}
                          `}
                        />
                      </div>
                    </button>

                    {/* Touch-Activated Callout - Fixed positioning */}
                    <AnimatePresence>
                      {activeMobileMarker === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className={`
                            absolute ${getMobileCalloutPosition(problem.left)}
                            bg-[#ecf0f3]/98 backdrop-blur-sm rounded-xl p-3 
                            w-[140px] max-w-[140px]
                            z-50 border-2 border-red-400/50
                          `}
                          style={shadows.neuFlat}
                        >
                          <div className="flex items-start gap-2">
                            <AlertCircle size={12} className="text-red-500 shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] leading-tight font-bold break-words" style={{ color: colors.darkest }}>
                                {problem.issue}
                              </p>
                            </div>
                          </div>

                          {/* Close button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMobileMarker(null);
                            }}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                          >
                            ×
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

            </div>

            {/* Mobile Help Text */}
            <div className="sm:hidden mt-4 text-center">
              <p className="text-xs font-semibold" style={{ color: colors.slate }}>
                <span style={{ color: colors.crimson }}>Tap red dots</span> on the map to see details
              </p>
            </div>
          </div>

          
        </motion.div>

        {/* === MISSION STATEMENT === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.8, duration: 0.6 }}
  whileHover={{ scale: 1.02 }}
  className={`
    relative
    p-6 sm:p-8
    rounded-3xl
    overflow-hidden
    backdrop-blur-lg
    ${neuInset}
  `}
>
  {/* Soft emerald presence */}
  <div
    className="absolute inset-0 opacity-[0.06] pointer-events-none"
    style={{ backgroundColor: colors.emerald }}
  />

  <div className="flex items-center gap-4">
  {/* Icon */}
  <div className="shrink-0 text-emerald-500 flex items-center">
    <Checkbox size={80} />
  </div>

  {/* Text */}
  <p
    className="
      text-lg sm:text-xl md:text-2xl
      leading-relaxed
      font-medium
    "
    style={{ color: colors.slate }}
  >
    At Arlox, we believe even the<span className="font-black text-transparent bg-clip-text bg-emerald-500"> smallest tasks </span> deserve{" "}
    
      grace, beauty, quality, and effectiveness
 
  </p>
</div>

</motion.div>

        </motion.div>

        {/* === PILLAR IMAGE (Floating) === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-28"
        >
          <div
            className="
              relative
              w-full
              max-w-[95vw]
              sm:max-w-[900px]
              md:max-w-[1100px]
              lg:max-w-[1300px]
              xl:max-w-[1500px]
              flex
              justify-center
            "
          >
            {/* Soft architectural glow */}
            <div
              className="
                absolute
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[90%] h-[85%]
                bg-[#2b3a55]
                blur-[140px]
                opacity-25
                rounded-full
                pointer-events-none
              "
            />

            <Image
              src="/pillar.png"
              alt="Pillar of Excellence"
              width={1600}
              height={2000}
              priority
              className="
                object-contain
                w-full
                h-auto
                drop-shadow-[0_40px_90px_rgba(20,30,55,0.45)]
              "
            />
          
          </div>

        </motion.div>
       <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.6, duration: 0.6 }}
  whileHover={{ scale: 1.02 }}
  className={`
    p-6 sm:p-8
    rounded-2xl sm:rounded-3xl
    ${neuBg}
    ${neuInset}
    border-2
    text-center
  `}
  style={{ borderColor: colors.amber }}
>
  <p
    className="text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-3xl mx-auto"
    style={{ color: colors.slate }}
  >
    Our mission is to make{" "}
    <span className="font-black" style={{ color: colors.darkest }}>
      India recognized worldwide
    </span>{" "}
    for exacting standards. <br/>
    By redefining the benchmarks for{" "}
    <span className="font-black" style={{ color: colors.darkest }}>
      quality and customer satisfaction
    </span>
    , we aim to prove that{" "}
    <span className="font-black text-transparent bg-clip-text bg-emerald-500">
      “From India”
    </span>{" "}
    signifies impeccable craftsmanship, meticulous detail, and a relentless
   quest for perfection.
  </p>

  
</motion.div>



        {/* === CLOSING STATEMENT === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20 mt-20"
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12 lg:gap-16
              items-center
              max-w-7xl
              mx-auto
              px-4 sm:px-6
            "
          >
            {/* LEFT — ACE OF SPADES CARD */}
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden group"
                style={{
                  background: `linear-gradient(145deg, ${colors.navy} 0%, #1a202c 100%)`,
                  ...shadows.neuDeep
                }}
              >
                {/* Spade SVG Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
                  <svg viewBox="0 0 200 240" className="w-[80%]" fill="white">
                    <path d="M100 10 C40 80, 10 110, 10 150 C10 190, 45 210, 80 190 C95 180, 100 165, 100 165 C100 165, 105 180, 120 190 C155 210, 190 190, 190 150 C190 110, 160 80, 100 10 Z" />
                    <rect x="88" y="165" width="24" height="45" rx="6" />
                  </svg>
                </div>

                {/* Corner Marks */}
                <div className="absolute top-8 left-8 text-white/20 font-serif">
                  <span className="text-4xl font-black block leading-none">A</span>
                  <span className="text-2xl">♠</span>
                </div>
                <div className="absolute bottom-8 right-8 text-white/20 font-serif rotate-180">
                  <span className="text-4xl font-black block leading-none">A</span>
                  <span className="text-2xl">♠</span>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
                  <Quote className="mb-6 text-white/30" size={40} />
                  <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
                    "We don't just finish work.<br />
                    We <span style={{ color: colors.gold }}>elevate</span> it."
                  </p>
                  <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-80" />
                </div>
              </motion.div>
            </div>

            {/* RIGHT — TEXT CARD (CENTERED) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="
                rounded-[2.5rem]
                p-8 sm:p-12
                bg-[#ecf0f3]
                border border-white/50
                flex
                items-center
                justify-center
                text-center
                h-full
              "
              style={shadows.neuInset}
            >
              <p
                className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl"
                style={{ color: colors.slate }}
              >
                By redefining the benchmarks for quality and customer satisfaction, we aim
                to transform the landscape with respect for{" "}
                <span className="font-black" style={{ color: colors.navy }}>
                  craftsmanship, meticulous attention to detail
                </span>
                , and{" "}
                <span className="font-black" style={{ color: colors.navy }}>
                  relentless quest for perfection
                </span>.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NeumorphicProblemSection;