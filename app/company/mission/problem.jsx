import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Quote } from 'lucide-react';
import Image from 'next/image';

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

  // === DATA ===
  const problems = [
    { issue: 'No-quality control', top: '38%', left: '15%', placement: 'bottom' },
    { issue: 'Service inconsistency', top: '22%', left: '18%', placement: 'top' },
    { issue: 'No-tracking visibility', top: '65%', left: '28%', placement: 'bottom' },
    { issue: 'Delayed fulfillment', top: '28%', left: '48%', placement: 'top' },
    { issue: 'Supply chain disruptions', top: '18%', left: '65%', placement: 'top' },
    { issue: 'Language barriers', top: '38%', left: '76%', placement: 'bottom' },
    { issue: 'Poor infrastructure', top: '58%', left: '50%', placement: 'bottom' },
    { issue: 'Complex customs', top: '45%', left: '60%', placement: 'bottom' }
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
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: colors.darkest }}>
            The Problem we have with the<br />
            <span style={{ color: colors.crimson }}>way things currently are</span>
          </h2>
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
            className="relative p-4 rounded-[2rem] bg-[#ecf0f3]"
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
                    <div className="relative z-20">
                      <div className="absolute -inset-2 bg-red-500/20 rounded-full animate-ping" />
                      <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg border-2 border-[#ecf0f3]" />
                    </div>

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

          {/* Stats Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 mx-auto max-w-2xl text-center p-6 rounded-2xl"
            style={shadows.neuInset}
          >
            <p className="text-xs sm:text-sm font-semibold" style={{ color: colors.slate }}>
              Our studies are based on personally observed facts after working with
              <br className="hidden sm:block" />
              <span className="text-lg sm:text-xl font-black block sm:inline mt-2 sm:mt-0" style={{ color: colors.navy }}>
                {' '}1000+ international brands
              </span>{' '}
              in our career.
            </p>
          </motion.div>
        </motion.div>

        {/* === MISSION STATEMENT === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-medium" style={{ color: colors.slate }}>
            At Arlox, we believe even the smallest tasks deserve{' '}
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              grace, beauty, quality, and effectiveness
            </span>.
            Our mission is to make Data recognized worldwide for these exacting standards.
          </p>
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

        {/* === CLOSING STATEMENT === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
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