import React from 'react';
import { motion } from 'framer-motion';
import { Infinity as InfinityIcon } from 'lucide-react';

// Neumorphic Color Palette
const colors = {
  bg: '#ecf0f3',        // The canvas color
  shadowLight: '#ffffff', // Top-left highlight
  shadowDark: '#d1d9e6',  // Bottom-right shadow
  navy: '#151E3D',
  teal: '#38b2ac',
  purple: '#805ad5',
  emerald: '#38a169',
  slate: '#64748b',
  darkest: '#1a202c',
};

const NeumorphicHero = () => {
  // Reusable styles for the "Soft UI" look
  const neuExtruded = `bg-[${colors.bg}] shadow-[6px_6px_12px_${colors.shadowDark},-6px_-6px_12px_${colors.shadowLight}]`;
  const neuPressed = `bg-[${colors.bg}] shadow-[inset_4px_4px_8px_${colors.shadowDark},inset_-4px_-4px_8px_${colors.shadowLight}]`;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >

      {/* Background Grid - Made extremely subtle to not interfere with Neumorphism */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${colors.navy} 1px, transparent 1px), linear-gradient(90deg, ${colors.navy} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="hidden md:block">
        <motion.div 
          className="absolute top-20 left-20 w-60 md:w-80 h-60 md:h-80 rounded-full blur-[80px] opacity-[0.2]"
          style={{ backgroundColor: colors.navy }}
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-60 md:w-80 h-60 md:h-80 rounded-full blur-[80px] opacity-[0.2]"
          style={{ backgroundColor: colors.teal }}
          animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Neumorphic Badge */}
          <motion.div 
            className={`inline-flex items-center gap-2 sm:gap-3 px-6 py-4 rounded-full mb-8 sm:mb-10 md:mb-12 ${neuExtruded}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Icon Container (Pressed/Inset look for contrast) */}
            <div className={`p-2 rounded-full ${neuPressed}`}>
              <InfinityIcon size={18} style={{ color: colors.navy }} />
            </div>
            
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
              <span className="hidden sm:inline">Laniakea Inspired • 500M Light Years</span>
              <span className="sm:hidden">Laniakea Inspired</span>
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] mb-6 sm:mb-8 md:mb-10 tracking-tight"
          
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              // Text Shadow for "floating" text effect
              style={{ textShadow: `4px 4px 8px ${colors.shadowDark}, -4px -4px 8px ${colors.shadowLight}` }}
            >
              <span className='text-[#224c98]'>Transforming</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-br from-slate-700 to-slate-800"
            >
              "From India"
            </motion.div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium max-w-5xl mx-auto leading-relaxed mb-10 sm:mb-12 md:mb-16 px-4"
            style={{ color: colors.slate }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            From symbols of imitation to{" "}
            <motion.strong 
              className="relative inline-block px-2"
              style={{ color: colors.navy }}
            >
              icons of innovation
              {/* Underline changed to Neumorphic groove */}
              <motion.span 
                className={`absolute bottom-0 left-0 w-full h-1 rounded-full opacity-50 bg-gradient-to-r from-transparent via-${colors.navy} to-transparent`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              />
            </motion.strong>
            .<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            We're rewriting what the world expects from India.
          </motion.p>

          {/* Trait Pills - Neumorphic Buttons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { label: "Grace", color: colors.navy },
              { label: "Beauty", color: colors.purple },
              { label: "Quality", color: colors.teal },
              { label: "Excellence", color: colors.emerald }
            ].map((trait, i) => (
              <motion.button
                key={trait.label}
                className={`px-8 py-4 rounded-2xl ${neuExtruded} transition-all duration-300`}
                style={{ color: trait.color }}
                whileHover={{ 
                  scale: 1.05,
                  // On hover, we make the shadow slightly sharper/closer
                  boxShadow: `9px 9px 18px ${colors.shadowDark}, -9px -9px 18px ${colors.shadowLight}`
                }}
                whileTap={{ 
                  scale: 0.95,
                  // On click, we invert to "pressed" state
                  boxShadow: `inset 4px 4px 8px ${colors.shadowDark}, inset -4px -4px 8px ${colors.shadowLight}`
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <span className="font-bold text-lg tracking-wide">
                  {trait.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NeumorphicHero;