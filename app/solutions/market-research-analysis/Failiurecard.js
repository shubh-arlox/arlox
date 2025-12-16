'use client';

import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, FileText, Rocket, TrendingDown, Dices, Wallet } from 'lucide-react';

// Animation variants
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

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Card-specific content
const CARD_CONTENT = [
  "Building personas on assumptions creates imaginary customers—and failed campaigns.",
  "Your copy uses brand words, but customers use buying words—and conversions suffer.",
  "Launching without validation burns thousands testing guesses instead of insights.",
  "Low CTR and high CPA aren't optimization problems—they're foundation failures.",
  "Testing dozens of ads without buyer insight wastes time, money, and clarity.",
  "The market wasn't wrong—you never learned how to speak to it."
];

const STAGE_LABELS = ["WEEK 0", "WEEK 1", "WEEK 2", "MONTH 2", "MONTH 4", "MONTH 6"];

function FailureCard({ item, idx, neuFlat, fadeInUp }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [trapActive, setTrapActive] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const uniqueId = useId(); // Use React's useId hook instead of Math.random()

  const handleCardClick = () => {
    if (!isFlipped) {
      setTrapActive(true);
      setTimeout(() => setIsFlipped(true), 300);
    } else {
      setIsFlipped(false);
      setTimeout(() => setTrapActive(false), 300);
    }
  };

  return (
    <motion.div 
      layout
      variants={fadeInUp}
      onClick={handleCardClick}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className="cursor-pointer relative overflow-hidden transition-all duration-500 h-full"
      style={{
        borderRadius: '1.5rem',
        background: '#E0E5EC',
        boxShadow: isFlipped 
          ? 'inset 9px 9px 16px rgba(163,177,198,0.6), inset -9px -9px 16px rgba(255,255,255,0.5)'
          : isCardHovered
            ? 'inset 9px 9px 16px rgba(163,177,198,0.6), inset -9px -9px 16px rgba(255,255,255,0.5)'
            : '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderTop: isFlipped ? '3px solid #64748b' : `3px solid ${
          item.color === "text-blue-600" ? "#2563EB" : 
          item.color === "text-blue-400" ? "#60A5FA" :
          item.color === "text-yellow-500" ? "#F59E0B" :
          item.color === "text-orange-500" ? "#F97316" :
          item.color === "text-red-500" ? "#EF4444" : "#991B1B"
        }`
      }}
    >
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          /* Front Side - Original Content */
          <motion.div
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full text-center p-3 md:p-4"
          >
            {/* Stage Label */}
            <motion.div 
              layout 
              className="text-[9px] font-black text-gray-500 uppercase tracking-wider mb-2"
            >
              {STAGE_LABELS[idx]}
            </motion.div>

            {/* Icon */}
            <motion.div layout>
              <item.icon className={`w-5 h-5 md:w-6 md:h-6 mx-auto ${item.color} mb-2 transition-transform duration-500 ${isCardHovered ? 'scale-110' : ''}`} />
            </motion.div>

            {/* Title */}
            <motion.h4 layout className="font-bold text-gray-800 text-xs mb-1 min-h-[32px] flex items-center justify-center">{item.title}</motion.h4>

            {/* Description */}
            <motion.p layout className="text-[9px] md:text-[10px] text-gray-500 mb-3 flex-grow">{item.desc}</motion.p>

            {/* Mouse Trap - Neumorphic Version */}
            <motion.div layout className="mt-auto flex justify-center">
              <div 
                className="relative p-1.5 group transition-all duration-500"
                style={{
                  background: '#E0E5EC',
                  borderRadius: '0.75rem',
                  boxShadow: isCardHovered 
                    ? 'inset 6px 6px 10px 0 rgba(163,177,198,0.7), inset -6px -6px 10px 0 rgba(255,255,255,0.8)'
                    : '6px 6px 10px 0 rgba(163,177,198,0.7), -6px -6px 10px 0 rgba(255,255,255,0.8)'
                }}
              >
                <svg 
                  viewBox="0 0 800 600" 
                  className={`w-12 h-9 transition-transform duration-500 ${isCardHovered ? 'scale-95' : ''}`}
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Neumorphic Wood Gradient */}
                    <linearGradient id={`woodNeu-${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E0E5EC" />
                      <stop offset="50%" stopColor="#C8D0DD" />
                      <stop offset="100%" stopColor="#B5BFD0" />
                    </linearGradient>
                    
                    {/* Neumorphic Cheese Gradient */}
                    <radialGradient id={`cheeseNeu-${uniqueId}`} cx="40%" cy="35%">
                      <stop offset="0%" stopColor="#F0F4F8" />
                      <stop offset="50%" stopColor="#E0E5EC" />
                      <stop offset="100%" stopColor="#D1D9E6" />
                    </radialGradient>
                    
                    {/* Neumorphic Metal Gradient */}
                    <linearGradient id={`metalNeu-${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D1D9E6" />
                      <stop offset="50%" stopColor="#C1CBD9" />
                      <stop offset="100%" stopColor="#A3B1C6" />
                    </linearGradient>

                    {/* Shadow filters for depth */}
                    <filter id={`baseShadow-${uniqueId}`}>
                      <feDropShadow dx="4" dy="4" stdDeviation="3" floodColor="rgba(163,177,198,0.5)"/>
                      <feDropShadow dx="-2" dy="-2" stdDeviation="2" floodColor="rgba(255,255,255,0.8)"/>
                    </filter>

                    <filter id={`cheeseShadow-${uniqueId}`}>
                      <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(163,177,198,0.6)"/>
                      <feDropShadow dx="-1" dy="-1" stdDeviation="1" floodColor="rgba(255,255,255,0.9)"/>
                    </filter>
                  </defs>
                  
                  {/* Base with neumorphic effect */}
                  <g filter={`url(#baseShadow-${uniqueId})`}>
                    <path 
                      d="M 150 380 L 650 380 L 700 410 L 200 410 Z" 
                      fill={`url(#woodNeu-${uniqueId})`} 
                      stroke="#A3B1C6" 
                      strokeWidth="1.5"
                    />
                    <path 
                      d="M 200 410 L 700 410 L 700 480 L 200 480 Z" 
                      fill={`url(#woodNeu-${uniqueId})`} 
                      stroke="#A3B1C6" 
                      strokeWidth="1.5"
                    />
                  </g>
                  
                  {/* Cheese with neumorphic effect */}
                  <motion.g
                    animate={trapActive ? {
                      y: 40, x: -10, opacity: 0, scale: 0.3
                    } : { y: 0, x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    filter={`url(#cheeseShadow-${uniqueId})`}
                  >
                    <path 
                      d="M 300 340 L 400 340 L 380 300 L 320 310 Z" 
                      fill={`url(#cheeseNeu-${uniqueId})`} 
                      stroke="#C1CBD9" 
                      strokeWidth="1.5"
                    />
                    <ellipse 
                      cx="340" 
                      cy="325" 
                      rx="6" 
                      ry="4" 
                      fill="#D8E0EC" 
                      opacity="0.7"
                      stroke="#B5BFD0"
                      strokeWidth="0.5"
                    />
                  </motion.g>
                  
                  {/* Bar with neumorphic effect */}
                  <motion.rect 
                    x="220" 
                    y="360" 
                    width="420" 
                    height="12" 
                    rx="6" 
                    fill={`url(#metalNeu-${uniqueId})`} 
                    stroke="#A3B1C6" 
                    strokeWidth="1.5"
                    style={{ 
                      transformOrigin: "430px 366px",
                      filter: 'drop-shadow(3px 3px 4px rgba(163,177,198,0.5)) drop-shadow(-1px -1px 2px rgba(255,255,255,0.8))'
                    }}
                    animate={trapActive ? { rotate: 90 } : { rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Alert Badge - Fixed height container */}
            <motion.div layout className="mt-2 min-h-[16px]">
              {item.alert && (
                <span className="text-[10px] md:text-[12px] text-red-400 font-bold">
                  {item.alert}
                </span>
              )}
            </motion.div>
          </motion.div>
        ) : (
          /* Back Side - Detail Content with RED text */
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full p-3 md:p-4"
          >
            {/* Stage Label - Red */}
            <motion.div 
              layout 
              className="text-[9px] font-black uppercase tracking-wider mb-3 text-center text-red-600"
            >
              {STAGE_LABELS[idx]}
            </motion.div>

            {/* Title - Red */}
            <motion.h4 layout className="font-bold text-base text-slate-700 mb-3 text-center">{item.title}</motion.h4>

            {/* Content - Red text */}
            <motion.div 
              layout
              className="flex-grow overflow-y-auto"
            >
              <h5 className="text-[9px] font-bold text-center text-red-600 uppercase tracking-wide mb-2">
                Why This Traps Brands:
              </h5>
              <p className="text-[12px] md:text-[14px] text-gray-800 font-bold text-center leading-relaxed">
                {CARD_CONTENT[idx]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Main Component
export default function YourComponent() {
  const neuFlat = "bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] rounded-3xl border border-white/20";

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="relative max-w-6xl mx-auto mb-16 md:mb-20"
    >
      {/* Failure Loop Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 relative z-10 auto-rows-fr">
        {[
          { 
            icon: User, 
            color: "text-blue-600", 
            borderColor: "border-blue-600", 
            title: "Persona Guesswork", 
            desc: "Agency builds ICA from founder's assumptions", 
            alert: "No actual interviews" 
          },
          { 
            icon: FileText, 
            color: "text-blue-400", 
            borderColor: "border-blue-400", 
            title: "Generic Messaging", 
            desc: "Copy uses industry jargon, not customer language", 
            alert: null 
          },
          { 
            icon: Rocket, 
            color: "text-yellow-500", 
            borderColor: "border-yellow-500", 
            title: "Campaign Launch", 
            desc: (<><span className="font-bold">$5K-$20K</span> initial budget deployed</>),
            alert: "Wrong audience + wrong message" 
          },
          { 
            icon: TrendingDown, 
            color: "text-orange-500", 
            borderColor: "border-orange-500", 
            title: "Low CTR / High CPA", 
            desc: (<><span className="font-bold">1.2%</span> CTR, <span className="font-bold">$85</span> CPA (need: <span className="font-bold">$35</span>)</>),
            alert: null 
          },
          { 
            icon: Dices, 
            color: "text-red-500", 
            borderColor: "border-red-500", 
            title: "Optimization", 
            desc: (<><span className="font-bold">Test 40</span> variations hoping one works</>), 
            alert: "Optimizing guesses" 
          },
          { 
            icon: Wallet, 
            color: "text-red-700", 
            borderColor: "border-red-700", 
            bg: "bg-red-50", 
            title: "Budget Exhausted", 
            desc: (<><span className="font-bold">6 months </span> later: 'Market isn't ready'</>), 
            alert: null 
          },
        ].map((item, idx) => (
          <FailureCard 
            key={idx} 
            item={item} 
            idx={idx} 
            neuFlat={neuFlat}
            fadeInUp={fadeInUp}
          />
        ))}
      </div>
    </motion.div>
  );
}
