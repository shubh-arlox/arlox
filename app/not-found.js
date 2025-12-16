'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Home, RotateCcw, Sparkles, ShieldAlert } from 'lucide-react';

export default function SimpleCat404() {
  const [showError, setShowError] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);
  const videoRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const colors = {
    bg: "#ECF0F3",
    textMain: "#2D3748",
    textSub: "#718096",
    accent: "#E53E3E",
    shadowDark: "#C1C9D2",
    shadowLight: "#FFFFFF"
  };

  // Generate particles on client side only
  useEffect(() => {
    setParticles(
      [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  const handleCatClick = () => {
    setShowError(true);
  };

  const handleReset = () => {
    setShowError(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  return (
    <div 
      style={{ backgroundColor: colors.bg }}
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden font-sans select-none p-4"
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gray-300 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* 404 Reveal */}
      <AnimatePresence mode="wait">
        {showError && (
          <motion.div
            key="revealed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4 sm:px-6 md:px-8"
          >
            {/* Glitch effect on 404 */}
            <div className="relative mb-6 sm:mb-8 md:mb-12">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ 
                  color: colors.textMain,
                  textShadow: `4px 4px 8px ${colors.shadowDark}, -3px -3px 6px ${colors.shadowLight}`
                }}
                className="text-7xl sm:text-8xl md:text-9xl lg:text-[14rem] font-black tracking-tighter leading-none"
              >
                404
              </motion.h1>
              
              {/* Glitch layers */}
              <motion.h1
                className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl lg:text-[14rem] font-black tracking-tighter leading-none"
                style={{ color: colors.accent, opacity: 0.3 }}
                animate={{
                  x: [-2, 2, -2, 2, 0],
                  y: [2, -2, 2, -2, 0],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                404
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <div 
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3"
                style={{
                  backgroundColor: colors.bg,
                  boxShadow: `6px 6px 12px ${colors.shadowDark}, -6px -6px 12px ${colors.shadowLight}`,
                }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                <span style={{ color: colors.textSub }} className="text-xs sm:text-sm font-bold">
                  Oscar Protocol: BREACHED
                </span>
              </div>
            </motion.div>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ color: colors.textSub }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 sm:mb-12 text-center leading-relaxed px-4"
            >
              The Oscar has left.<br/>
              <span className="opacity-60 text-base sm:text-lg">And the page went with him.</span>
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
            >
              <motion.button
                onClick={() => window.location.href = '/'}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-white shadow-2xl transition-all flex items-center justify-center gap-2 sm:gap-3 group relative overflow-hidden"
                style={{ backgroundColor: colors.textMain }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <Home className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                <span className="text-sm sm:text-base">Return Home</span>
              </motion.button>
              
              <motion.button
                onClick={handleReset}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
                style={{ 
                  backgroundColor: colors.bg,
                  color: colors.textSub,
                  boxShadow: `8px 8px 16px ${colors.shadowDark}, -8px -8px 16px ${colors.shadowLight}`
                }}
              >
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-sm sm:text-base">Bring Him Back</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cat Layer */}
      <AnimatePresence>
        {!showError && (
          <motion.div 
            key="cat-layer"
            className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-screen-lg"
            exit={{ opacity: 0, scale: 0.8, filter: "blur(20px)", rotate: 10 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            {/* Header with icon */}
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                style={{
                  backgroundColor: colors.bg,
                  boxShadow: `6px 6px 12px ${colors.shadowDark}, -6px -6px 12px ${colors.shadowLight}`,
                }}
              >
                <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                <span style={{ color: colors.accent }} className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Access Restricted
                </span>
              </motion.div>
              
              <motion.h2 
                style={{ 
                  color: colors.textMain,
                  textShadow: `2px 2px 4px ${colors.shadowDark}, -1px -1px 2px ${colors.shadowLight}`
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-2 sm:mb-3"
                animate={{ 
                  textShadow: [
                    `2px 2px 4px ${colors.shadowDark}, -1px -1px 2px ${colors.shadowLight}`,
                    `3px 3px 6px ${colors.shadowDark}, -2px -2px 4px ${colors.shadowLight}`,
                    `2px 2px 4px ${colors.shadowDark}, -1px -1px 2px ${colors.shadowLight}`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Oscar Active
              </motion.h2>
              <p style={{ color: colors.textSub }} className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                This page is under feline protection
              </p>
            </motion.div>

            {/* The Cat with 3D tilt effect */}
            <motion.div
              className="relative perspective-1000"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onTouchStart={() => setIsHovering(true)}
              onTouchEnd={() => setIsHovering(false)}
              style={{
                perspective: 1000,
              }}
            >
              <motion.div
                className="relative rounded-full cursor-pointer group"
                style={{ 
                  boxShadow: isHovering 
                    ? `20px 20px 40px ${colors.shadowDark}, -20px -20px 40px ${colors.shadowLight}` 
                    : `15px 15px 30px ${colors.shadowDark}, -15px -15px 30px ${colors.shadowLight}`,
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                animate={{ 
                  scale: isHovering ? [1, 1.02, 1] : [1, 1.015, 1],
                }}
                transition={{ 
                  scale: { duration: isHovering ? 0.8 : 4, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 0.3 }
                }}
                onClick={handleCatClick}
                whileTap={{ scale: 0.92 }}
              >
                {/* Glow ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{
                    boxShadow: isHovering 
                      ? [`0 0 0px ${colors.accent}`, `0 0 40px ${colors.accent}`, `0 0 0px ${colors.accent}`]
                      : 'none'
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Rotating border on hover */}
                {isHovering && (
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${colors.accent}, transparent)`,
                      padding: '2px sm:3px',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <div 
                      className="w-full h-full rounded-full" 
                      style={{ backgroundColor: colors.bg }}
                    />
                  </motion.div>
                )}

                <video 
                  ref={videoRef} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] object-cover rounded-full mix-blend-multiply pointer-events-none relative z-10"
                >
                  <source src="/Cat_Playing_With_Ball_Animation.mp4" type="video/mp4" />
                </video>
                
                {/* Hover Hint - AT THE BOTTOM INSIDE - SMALLER BOX */}
                <AnimatePresence>
                  {isHovering && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-20"
                    >
                      <div 
                        className="px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm"
                        style={{
                          backgroundColor: 'rgba(236, 240, 243, 0.9)',
                          boxShadow: `2px 2px 4px ${colors.shadowDark}, -2px -2px 4px ${colors.shadowLight}`,
                        }}
                      >
                        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wide" style={{ color: colors.accent }}>
                          Click to Breach
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Pulsing instruction */}
            <motion.div
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase"
              style={{
                backgroundColor: colors.bg,
                color: colors.textSub,
                boxShadow: `inset 4px 4px 8px ${colors.shadowDark}, inset -4px -4px 8px ${colors.shadowLight}`,
              }}
              animate={{
                boxShadow: [
                  `inset 4px 4px 8px ${colors.shadowDark}, inset -4px -4px 8px ${colors.shadowLight}`,
                  `inset 6px 6px 12px ${colors.shadowDark}, inset -6px -6px 12px ${colors.shadowLight}`,
                  `inset 4px 4px 8px ${colors.shadowDark}, inset -4px -4px 8px ${colors.shadowLight}`,
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="hidden sm:inline">Interact with Oscar to proceed</span>
              <span className="sm:hidden">Tap to interact</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
