'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function SpeckledNeumorphicCat() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAttacking, setIsAttacking] = useState(null);
  const [hasJumped, setHasJumped] = useState(false);

  const leftPawControls = useAnimation();
  const rightPawControls = useAnimation();

  // --- Palette ---
  const colors = {
    bg: "#ECF0F3",          // The Wall/Floor
    textMain: "#2D3748", 
    textSub: "#718096",
    furBase: "#FFFFFF",     // Pure white base
    furShadow: "#F7FAFC",   // Shading
    speckle: "#8D5524",     // The requested Brown (Deep Walnut/Bronze)
    eyes: "#0EA5E9",        // Ocean Blue
    nose: "#FDA4AF",
    shadowDark: "#D1D9E6",
    shadowLight: "#FFFFFF"
  };

  // 1. Mouse & Attack Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hasJumped) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });

      // Attack Logic (Sitting Pose Zones)
      const xPct = clientX / innerWidth;
      const yPct = clientY / innerHeight;

      if (yPct > 0.6) {
        if (xPct > 0.38 && xPct < 0.48 && isAttacking !== 'left') {
          triggerAttack('left');
        } else if (xPct > 0.52 && xPct < 0.62 && isAttacking !== 'right') {
          triggerAttack('right');
        }
      } else {
        if (isAttacking && !leftPawControls.isAnimating && !rightPawControls.isAnimating) {
           setIsAttacking(null);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasJumped, isAttacking]);

  // 2. Animation Sequences
  const triggerAttack = async (side) => {
    setIsAttacking(side);
    const controls = side === 'left' ? leftPawControls : rightPawControls;
    await controls.start({ y: -60, x: side === 'left' ? -30 : 30, rotate: side === 'left' ? -25 : 25, transition: { duration: 0.15, ease: 'easeOut' } });
    await controls.start({ y: 0, x: 0, rotate: 0, transition: { type: 'spring', damping: 10, stiffness: 120 } });
    setIsAttacking(null);
  };

  const handleCatClick = () => {
    setHasJumped(true);
  };

  return (
    <div 
      style={{ backgroundColor: colors.bg }}
      className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden cursor-crosshair font-sans selection:bg-none"
    >
      {/* --- Text Message --- */}
      {hasJumped && (
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="absolute z-0 text-center px-4"
        >
          <h1 style={{ color: colors.textMain, textShadow: `3px 3px 6px ${colors.shadowDark}, -3px -3px 6px white` }} className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">
            404
          </h1>
          <p style={{ color: colors.textSub }} className="text-xl md:text-2xl font-medium">
            Page not found.<br/>
            <span className="text-sm opacity-70 italic">Maybe the cat took it.</span>
          </p>
        </motion.div>
      )}

      {/* --- Cat SVG --- */}
      <motion.svg
        viewBox="0 0 400 400"
        className="w-[500px] h-[500px] z-10 relative top-10"
        animate={hasJumped ? { scale: 20, opacity: 0, y: 200 } : { scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        onClick={handleCatClick}
      >
        <defs>
          {/* Neumorphic Shadow Filter */}
          <filter id="cat-depth" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="10" dy="10" stdDeviation="10" floodColor={colors.shadowDark} floodOpacity="0.6"/>
            <feDropShadow dx="-5" dy="-5" stdDeviation="10" floodColor={colors.shadowLight} floodOpacity="1"/>
          </filter>

          {/* THE MAGIC TRICK: "Speckled Pattern" 
             We create a 100x100 tile with tiny random dots, then repeat it.
             This ensures "uneven tiny chunks" without hydrating random numbers.
          */}
          <pattern id="fur-speckles" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
             {/* A scatter of tiny irregular blobs */}
             <circle cx="10" cy="10" r="2" fill={colors.speckle} opacity="0.8" />
             <circle cx="30" cy="5" r="1.5" fill={colors.speckle} opacity="0.6" />
             <circle cx="50" cy="20" r="3" fill={colors.speckle} opacity="0.9" /> {/* Big chunk */}
             <circle cx="70" cy="10" r="1" fill={colors.speckle} opacity="0.5" />
             
             <circle cx="15" cy="40" r="1" fill={colors.speckle} opacity="0.7" />
             <circle cx="45" cy="50" r="2.5" fill={colors.speckle} opacity="0.8" />
             <circle cx="75" cy="45" r="1.5" fill={colors.speckle} opacity="0.6" />
             
             <circle cx="20" cy="70" r="2" fill={colors.speckle} opacity="0.9" />
             <circle cx="60" cy="75" r="1" fill={colors.speckle} opacity="0.5" />
          </pattern>
        </defs>

        <g filter="url(#cat-depth)">
            
            {/* 1. Tail */}
            {/* Base White Tail */}
            <motion.path
                d="M200,340 Q280,380 320,280"
                fill="none"
                stroke={colors.furBase}
                strokeWidth="24"
                strokeLinecap="round"
                animate={hasJumped ? {} : { d: ["M200,340 Q280,380 320,280", "M200,340 Q300,370 330,260", "M200,340 Q280,380 320,280"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
            {/* Speckled Overlay Tail (using dashed line to create patches) */}
            <motion.path
                d="M200,340 Q280,380 320,280"
                fill="none"
                stroke={colors.speckle}
                strokeWidth="24"
                strokeLinecap="round"
                strokeDasharray="5 20 2 15 8 25" // Creates the "Chunk" effect on the stroke
                opacity="0.6"
                animate={hasJumped ? {} : { d: ["M200,340 Q280,380 320,280", "M200,340 Q300,370 330,260", "M200,340 Q280,380 320,280"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />

            {/* 2. Back Paws / Haunches (Sitting) */}
            <g>
                <ellipse cx="130" cy="350" rx="35" ry="25" fill={colors.furBase} />
                <ellipse cx="130" cy="350" rx="35" ry="25" fill="url(#fur-speckles)" opacity="0.5" />
                
                <ellipse cx="270" cy="350" rx="35" ry="25" fill={colors.furBase} />
                <ellipse cx="270" cy="350" rx="35" ry="25" fill="url(#fur-speckles)" opacity="0.5" />
            </g>

            {/* 3. Main Body */}
            <motion.g
                animate={hasJumped ? {} : { y: [0, -2, 0] }} // Breathing Y movement
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            >
                {/* White Base */}
                <ellipse cx="200" cy="300" rx="110" ry="90" fill={colors.furBase} />
                {/* The "Tiny Chunks" Pattern Layer */}
                <ellipse cx="200" cy="300" rx="110" ry="90" fill="url(#fur-speckles)" opacity="0.7" />
            </motion.g>

            {/* 4. Head Group */}
            <g>
                {/* Ears Base */}
                <path d="M130,170 L110,90 L180,140 Z" fill={colors.furBase} />
                <path d="M270,170 L290,90 L220,140 Z" fill={colors.furBase} />
                
                {/* Ears Speckles */}
                <path d="M130,170 L110,90 L180,140 Z" fill="url(#fur-speckles)" opacity="0.6" />
                <path d="M270,170 L290,90 L220,140 Z" fill="url(#fur-speckles)" opacity="0.6" />

                {/* Head Shape Base */}
                <ellipse cx="200" cy="200" rx="85" ry="75" fill={colors.furBase} />
                {/* Head Speckles */}
                <ellipse cx="200" cy="200" rx="85" ry="75" fill="url(#fur-speckles)" opacity="0.5" />

                {/* Eyes Container */}
                <g id="eyes">
                    <circle cx="165" cy="195" r="16" fill={colors.eyes} stroke="white" strokeWidth="2"/>
                    <motion.circle 
                        cx="165" cy="195" r="6" fill="#1A202C" 
                        animate={{ cx: 165 + mousePos.x * 6, cy: 195 + mousePos.y * 7 }} 
                    />
                    <circle cx="170" cy="190" r="4" fill="white" opacity="0.7" />

                    <circle cx="235" cy="195" r="16" fill={colors.eyes} stroke="white" strokeWidth="2"/>
                    <motion.circle 
                        cx="235" cy="195" r="6" fill="#1A202C" 
                        animate={{ cx: 235 + mousePos.x * 6, cy: 195 + mousePos.y * 7 }} 
                    />
                    <circle cx="240" cy="190" r="4" fill="white" opacity="0.7" />
                </g>

                {/* Nose & Mouth */}
                <path d="M192,235 L208,235 L200,248 Z" fill={colors.nose} />
                <path d="M200,248 Q180,265 190,235 M200,248 Q220,265 210,235" fill="none" stroke={colors.textSub} strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
            </g>

            {/* 5. Front Paws (Interactive) */}
            <motion.g animate={leftPawControls} initial={{ x: 0, y: 0, rotate: 0 }}>
                <ellipse cx="175" cy="310" rx="22" ry="28" fill={colors.furBase} />
                {/* Paw Speckles (lighter opacity on paws usually) */}
                <ellipse cx="175" cy="310" rx="22" ry="28" fill="url(#fur-speckles)" opacity="0.3" />
                <path d="M175,330 L175,315" stroke={colors.shadowDark} strokeWidth="2" opacity="0.3" strokeLinecap="round"/>
            </motion.g>
            
             <motion.g animate={rightPawControls} initial={{ x: 0, y: 0, rotate: 0 }}>
                <ellipse cx="225" cy="310" rx="22" ry="28" fill={colors.furBase} />
                <ellipse cx="225" cy="310" rx="22" ry="28" fill="url(#fur-speckles)" opacity="0.3" />
                 <path d="M225,330 L225,315" stroke={colors.shadowDark} strokeWidth="2" opacity="0.3" strokeLinecap="round"/>
            </motion.g>
        </g>

      </motion.svg>
      
      {!hasJumped && (
        <div style={{ color: colors.textSub }} className="absolute bottom-6 opacity-50 text-xs tracking-widest uppercase">
           Do not disturb the cat
        </div>
      )}
    </div>
  );
}