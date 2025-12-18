'use client';

import React, { useId } from 'react';
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

function MouseTrap({ uniqueId, isSnapped, isInset }) {
  return (
    <div 
      className="relative p-1.5 transition-all duration-200"
      style={{
        background: '#E0E5EC',
        borderRadius: '0.75rem',
        boxShadow: isInset 
          ? 'inset 6px 6px 10px 0 rgba(163,177,198,0.7), inset -6px -6px 10px 0 rgba(255,255,255,0.8)'
          : '6px 6px 10px 0 rgba(163,177,198,0.5), -6px -6px 10px 0 rgba(255,255,255,0.7)'
      }}
    >
      <svg 
        viewBox="0 0 800 600" 
        className="w-14 h-10"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`woodNeu-${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0E5EC" />
            <stop offset="50%" stopColor="#C8D0DD" />
            <stop offset="100%" stopColor="#B5BFD0" />
          </linearGradient>
          
          <radialGradient id={`cheeseNeu-${uniqueId}`} cx="40%" cy="35%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="50%" stopColor="#FFE89C" />
            <stop offset="100%" stopColor="#F5D76E" />
          </radialGradient>
          
          <linearGradient id={`metalNeu-${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D1D9E6" />
            <stop offset="50%" stopColor="#C1CBD9" />
            <stop offset="100%" stopColor="#A3B1C6" />
          </linearGradient>
        </defs>
        
        {/* Base */}
        <g>
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
        
        {/* Cheese - Normal or Snapped */}
        <motion.g
          animate={isSnapped ? {
            opacity: 0.3,
            y: 40,
            x: -20
          } : {
            opacity: 1,
            y: 0,
            x: 0
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
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
        
        {/* Bar - Normal or Snapped */}
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
            transformOrigin: "430px 366px"
          }}
          animate={isSnapped ? { rotate: 85 } : { rotate: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

function FailureCard({ item, idx, fadeInUp }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const uniqueId = useId();

  return (
    <motion.div 
      layout
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer relative overflow-hidden transition-all duration-200"
      style={{
        borderRadius: '1.5rem',
        background: '#E0E5EC',
        boxShadow: isHovered
          ? 'inset 9px 9px 16px rgba(163,177,198,0.6), inset -9px -9px 16px rgba(255,255,255,0.5)'
          : '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderTop: isHovered ? '3px solid #64748b' : `3px solid ${
          item.color === "text-blue-600" ? "#2563EB" : 
          item.color === "text-blue-400" ? "#60A5FA" :
          item.color === "text-yellow-500" ? "#F59E0B" :
          item.color === "text-orange-500" ? "#F97316" :
          item.color === "text-red-500" ? "#EF4444" : "#991B1B"
        }`,
        height: '100%'
      }}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          /* Front Side - With Normal Trap */
          <motion.div
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col h-full text-center p-3 md:p-4"
          >
            {/* Stage Label */}
            <div className="text-[9px] font-black text-gray-500 uppercase tracking-wider mb-2">
              {STAGE_LABELS[idx]}
            </div>

            {/* Icon */}
            <div>
              <item.icon className={`w-5 h-5 md:w-6 md:h-6 mx-auto ${item.color} mb-2`} />
            </div>

            {/* Title */}
            <h4 className="font-bold text-gray-800 text-xs mb-1 min-h-[32px] flex items-center justify-center">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-[9px] md:text-[10px] text-gray-500 mb-3 flex-grow">
              {item.desc}
            </p>

            {/* Normal Trap (Not Inset, Not Snapped) */}
            <div className="mt-auto flex justify-center">
              <MouseTrap uniqueId={uniqueId} isSnapped={false} isInset={false} />
            </div>
          </motion.div>
        ) : (
          /* Back Side - With Inset Snapped Trap */
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col h-full p-3 md:p-4 justify-between"
          >
            {/* Content */}
            <div className="flex-grow flex items-center justify-center">
              <p className="text-[11px] md:text-[13px] text-gray-800 font-bold text-center leading-relaxed">
                {CARD_CONTENT[idx]}
              </p>
            </div>

            {/* Inset Snapped Trap */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15 }}
              className="mt-3 flex justify-center"
            >
              <MouseTrap uniqueId={`${uniqueId}-back`} isSnapped={true} isInset={true} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Main Component
export default function YourComponent() {
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
            title: "Persona Guesswork", 
            desc: "Agency builds ICA from founder's assumptions"
          },
          { 
            icon: FileText, 
            color: "text-blue-400", 
            title: "Generic Messaging", 
            desc: "Copy uses industry jargon, not customer language"
          },
          { 
            icon: Rocket, 
            color: "text-yellow-500", 
            title: "Campaign Launch", 
            desc: (<><span className="font-bold">$5K-$20K</span> initial budget deployed</>)
          },
          { 
            icon: TrendingDown, 
            color: "text-orange-500", 
            title: "Low CTR / High CPA", 
            desc: (<><span className="font-bold">1.2%</span> CTR, <span className="font-bold">$85</span> CPA (need: <span className="font-bold">$35</span>)</>)
          },
          { 
            icon: Dices, 
            color: "text-red-500", 
            title: "Optimization", 
            desc: (<><span className="font-bold">Test 40</span> variations hoping one works</>)
          },
          { 
            icon: Wallet, 
            color: "text-red-700", 
            title: "Budget Exhausted", 
            desc: (<><span className="font-bold">6 months </span> later: 'Market isn't ready'</>)
          },
        ].map((item, idx) => (
          <FailureCard 
            key={idx} 
            item={item} 
            idx={idx} 
            fadeInUp={fadeInUp}
          />
        ))}
      </div>
    </motion.div>
  );
}
