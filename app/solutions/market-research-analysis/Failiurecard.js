'use client';

import React, { useState } from 'react';
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
  "Building personas from assumptions is like building a house on sand. Without actual customer interviews, you're designing for an imaginary person. 67% of failed campaigns trace back to this exact mistake.",
  "Your copy uses words like 'sustainable' and 'premium quality' - but your customers actually say 'clothes that don't fall apart' and 'stuff that's worth the price.' This language gap kills 40% of conversion potential.",
  "Launching with unvalidated messaging is like throwing a party and hoping the right people show up. You're spending $5K-$20K to test assumptions you could have validated in 5 customer conversations.",
  "Numbers don't lie. 1.2% CTR means 98.8% of people scroll past. $85 CPA means you're losing $50 per customer. But instead of fixing the foundation, most brands try to 'optimize' their way out of this hole.",
  "Testing 40 ad variations without knowing WHY people buy is like throwing darts blindfolded. You might hit something eventually, but you'll waste thousands of dollars and months of time learning what one customer call could teach you.",
  "After 6 months and $50K+, the agency says 'the market isn't ready' or 'paid ads don't work for your brand.' Reality? The market was always there. You just never learned how to speak to them."
];

const STAGE_LABELS = ["WEEK 0", "WEEK 1", "WEEK 2", "MONTH 2", "MONTH 4", "MONTH 6"];

function FailureCard({ item, idx, neuFlat, fadeInUp }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [trapActive, setTrapActive] = useState(false);
  const uniqueId = `trap-${idx}-${Math.random().toString(36).substr(2, 9)}`;

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
      className="p-3 md:p-4 cursor-pointer relative overflow-hidden transition-all duration-300"
      style={{
        minHeight: '225px',
        borderRadius: '1.5rem',
        // Neumorphic backgrounds
        background: isFlipped ? '#E0E5EC' : '#E0E5EC',
        boxShadow: isFlipped 
          ? 'inset 9px 9px 16px rgba(127, 29, 29, 0.5), inset -9px -9px 16px rgba(220, 38, 38, 0.2)'
          : '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderTop: isFlipped ? '3px solid #7F1D1D' : `3px solid ${
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
            className="flex flex-col h-full text-center"
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
              <item.icon className={`w-5 h-5 md:w-6 md:h-6 mx-auto ${item.color} mb-2`} />
            </motion.div>

            {/* Title */}
            <motion.h4 layout className="font-bold text-gray-800 text-xs mb-1">{item.title}</motion.h4>

            {/* Description */}
            <motion.p layout className="text-[9px] md:text-[10px] text-gray-500 mb-3">{item.desc}</motion.p>

            {/* Mouse Trap */}
            <motion.div layout className="mt-auto flex justify-center">
              <div 
                className="relative p-1.5"
                style={{
                  background: '#E0E5EC',
                  boxShadow: 'inset 6px 6px 10px 0 rgba(163,177,198,0.7), inset -6px -6px 10px 0 rgba(255,255,255,0.8)',
                  borderRadius: '0.75rem'
                }}
              >
                <svg 
                  viewBox="0 0 800 600" 
                  className="w-12 h-9"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id={`woodTop-${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4A574" />
                      <stop offset="100%" stopColor="#C19A6B" />
                    </linearGradient>
                    <radialGradient id={`cheeseGrad-${uniqueId}`} cx="40%" cy="35%">
                      <stop offset="0%" stopColor="#FFE896" />
                      <stop offset="30%" stopColor="#FFD966" />
                      <stop offset="70%" stopColor="#FFC940" />
                      <stop offset="100%" stopColor="#E6A823" />
                    </radialGradient>
                    <linearGradient id={`metalDark-${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#666" />
                      <stop offset="50%" stopColor="#555" />
                      <stop offset="100%" stopColor="#444" />
                    </linearGradient>
                  </defs>
                  
                  {/* Base */}
                  <path d="M 150 380 L 650 380 L 700 410 L 200 410 Z" fill={`url(#woodTop-${uniqueId})`} stroke="#8B6F47" strokeWidth="2"/>
                  <path d="M 200 410 L 700 410 L 700 480 L 200 480 Z" fill="#8B6F47" stroke="#6B5436" strokeWidth="2"/>
                  
                  {/* Cheese */}
                  <motion.g
                    animate={trapActive ? {
                      y: 40, x: -10, opacity: 0, scale: 0.3
                    } : { y: 0, x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M 300 340 L 400 340 L 380 300 L 320 310 Z" fill={`url(#cheeseGrad-${uniqueId})`} stroke="#E8A428" strokeWidth="2"/>
                    <ellipse cx="340" cy="325" rx="6" ry="4" fill="#F0C060" opacity="0.8"/>
                  </motion.g>
                  
                  {/* Bar */}
                  <motion.rect 
                    x="220" y="360" width="420" height="12" rx="6" 
                    fill={`url(#metalDark-${uniqueId})`} stroke="#333" strokeWidth="2"
                    style={{ transformOrigin: "430px 366px" }}
                    animate={trapActive ? { rotate: 90 } : { rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Alert Badge */}
            {item.alert && (
              <motion.div layout className="mt-2 text-[8px] md:text-[9px] text-red-400 font-bold">
                {item.alert}
              </motion.div>
            )}
          </motion.div>
        ) : (
          /* Back Side - Detail Content */
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full"
          >
            {/* Stage Label with dark red neumorphic inset */}
            <motion.div 
              layout 
              className="text-[9px] font-black uppercase tracking-wider mb-2 text-center"
              style={{
                background: '#E0E5EC',
                boxShadow: 'inset 4px 4px 8px rgba(127, 29, 29, 0.4), inset -4px -4px 8px rgba(220, 38, 38, 0.15)',
                padding: '4px 10px',
                borderRadius: '12px',
                display: 'inline-block',
                margin: '0 auto 12px',
                color: '#7F1D1D'
              }}
            >
              {STAGE_LABELS[idx]}
            </motion.div>

            {/* Title */}
            <motion.h4 layout className="font-bold text-gray-900 text-xs mb-3 text-center">{item.title}</motion.h4>

            {/* "Why This Traps Brands" Section - Dark red neumorphic inset */}
            <motion.div 
              layout
              className="p-3 flex-grow"
              style={{
                background: '#E0E5EC',
                boxShadow: 'inset 6px 6px 12px rgba(127, 29, 29, 0.5), inset -6px -6px 12px rgba(220, 38, 38, 0.2)',
                borderRadius: '1rem'
              }}
            >
              <h5 className="text-[9px] font-bold text-red-900 uppercase tracking-wide mb-2">
                Why This Traps Brands:
              </h5>
              <p className="text-[9px] md:text-[10px] text-gray-800 leading-relaxed">
                {CARD_CONTENT[idx]}
              </p>
            </motion.div>

            {/* Close hint */}
            <motion.div layout className="mt-2 text-center">
              <span className="text-[8px] text-gray-600">Click to close</span>
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 relative z-10 items-baseline">
        {[
          { icon: User, color: "text-blue-600", borderColor: "border-blue-600", title: "Persona Guesswork", desc: "Agency builds ICA from founder's assumptions", alert: "No actual interviews" },
          { icon: FileText, color: "text-blue-400", borderColor: "border-blue-400", title: "Generic Messaging", desc: "Copy uses industry jargon, not customer language", alert: null },
          { icon: Rocket, color: "text-yellow-500", borderColor: "border-yellow-500", title: "Campaign Launch", desc: "$5K-$20K initial budget deployed", alert: "Wrong audience + wrong message" },
          { icon: TrendingDown, color: "text-orange-500", borderColor: "border-orange-500", title: "Low CTR / High CPA", desc: "1.2% CTR, $85 CPA (need: $35)", alert: null },
          { icon: Dices, color: "text-red-500", borderColor: "border-red-500", title: "'Optimization'", desc: "Test 40 variations hoping one works", alert: "Optimizing guesses" },
          { icon: Wallet, color: "text-red-700", borderColor: "border-red-700", bg: "bg-red-50", title: "Budget Exhausted", desc: "6 months later: 'Market isn't ready'", alert: null },
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
