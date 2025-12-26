"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { NeumorphicCard, scaleIn } from './SharedUI';

export default function InsightCallout() {
  const insightRef = useRef(null);
  const insightInView = useInView(insightRef, { once: true, margin: "-100px" });

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-16 md:mb-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center relative"
          ref={insightRef}
          initial="hidden"
          animate={insightInView ? "visible" : "hidden"}
          variants={scaleIn}
        >
          <motion.div 
            className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/30 z-10"
            initial={{ y: -20, opacity: 0 }}
            animate={insightInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            KEY INSIGHT
          </motion.div>
          <NeumorphicCard className="p-6 sm:p-10 md:p-14">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif italic text-slate-700 leading-relaxed mb-4 sm:mb-6">
              "The difference isn't budget. It's <span className="font-bold text-slate-900 not-italic">architecture</span>. 
              Traditional scaling pours gasoline on one engine until it floods. 
              Power Pack builds three engines that feed each other—creating compounding, not diminishing, returns."
            </p>
            <div className="flex justify-center gap-1.5 sm:gap-2">
              <motion.div 
                className="h-1 sm:h-1.5 w-12 sm:w-16 bg-emerald-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={insightInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <motion.div 
                className="h-1 sm:h-1.5 w-6 sm:w-8 bg-emerald-300 rounded-full"
                initial={{ scaleX: 0 }}
                animate={insightInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
              <motion.div 
                className="h-1 sm:h-1.5 w-3 sm:w-4 bg-emerald-200 rounded-full"
                initial={{ scaleX: 0 }}
                animate={insightInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
            </div>
          </NeumorphicCard>
        </motion.div>
      </div>
    </div>
  );
}