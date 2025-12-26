"use client"
import React from 'react';
import { motion } from 'framer-motion';

// --- Shared Animations ---
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// --- Shared Components ---
export const NeumorphicCard = ({ children, className = "", active = false }) => {
  const baseShadow = "shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]";
  const activeShadow = "shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]";

  return (
    <div className={`rounded-2xl md:rounded-3xl bg-[#ecf0f3] ${active ? activeShadow : baseShadow} ${className} transition-all duration-300`}>
      {children}
    </div>
  );
};

export const NeumorphicButton = ({ children, onClick, active, variant = "primary" }) => {
  const baseClass = "px-4 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-200 transform hover:-translate-y-1 active:scale-95";
  const shadow = active 
    ? "shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-emerald-600" 
    : "shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]";
  
  const colors = variant === "primary" ? "text-slate-700 bg-[#ecf0f3]" : "text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-emerald-500/50";

  return (
    <motion.button 
      onClick={onClick} 
      className={`${baseClass} ${shadow} ${colors}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export const StatBadge = ({ label, value, trend, isGood }) => (
  <motion.div 
    className="flex flex-col min-w-0"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <span className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1 truncate">{label}</span>
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-lg md:text-2xl font-bold text-slate-800 truncate">{value}</span>
      {trend && (
        <motion.span 
          className={`text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap ${isGood ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {trend}
        </motion.span>
      )}
    </div>
  </motion.div>
);