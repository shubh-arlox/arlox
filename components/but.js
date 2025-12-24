import React from 'react';
import { ChevronDown, ChevronUp, ClipboardClock } from 'lucide-react';

const GlassButton = ({ 
  label, 
  icon: Icon, 
  rightElement, 
  className = '', 
  buttonClassName = '',
  ...props 
}) => {
  return (
    <div className={`relative group inline-block rounded-[40px] ${className}`}>
      
      {/* 0. CAUSTIC CAST - #364F78 shadow */}
      <div className="absolute -inset-1 bg-gradient-to-b from-[#364F78]/20 to-[#364F78]/40 rounded-[45px] blur-md translate-y-2 opacity-70 pointer-events-none" />

      <button 
        className={`
          relative flex items-center justify-center
          gap-2.5 sm:gap-3 md:gap-4 
          px-5 sm:px-6 md:px-7
          py-3 sm:py-3 md:py-3.5
          rounded-[40px] overflow-visible
          transition-transform duration-300 ease-out active:scale-[0.97]
          hover:shadow-lg
          ${buttonClassName}
        `}
        style={{
          /* 1. REFRACTION */
          backdropFilter: 'blur(24px) saturate(120%)',
          WebkitBackdropFilter: 'blur(24px) saturate(120%)',

          /* 2. BASE TEXTURE & TINT - #364F78 gradient variations */
          background: 'linear-gradient(145deg, rgba(139, 157, 189, 0.7) 0%, rgba(84, 110, 150, 0.85) 50%, rgba(54, 79, 120, 0.95) 100%)',
          
          /* 3. LIGHTING PHYSICS - #364F78 tinted shadows */
          boxShadow: `
            0 0 0 1px rgba(84, 110, 150, 0.4), 
            inset 0 1px 0 0 rgba(255, 255, 255, 0.9),
            inset 0 4px 10px rgba(54, 79, 120, 0.1),
            inset 0 -8px 12px rgba(180, 195, 220, 0.6),
            inset 0 -1px 2px rgba(30, 45, 70, 0.15),
            0 15px 35px -10px rgba(54, 79, 120, 0.3),
            0 5px 10px -5px rgba(54, 79, 120, 0.2)
          `,
        }}
        {...props}
      >
        {/* 4. SURFACE IMPERFECTION (Noise Overlay) */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        />

        {/* 5. OUTER REFLECTION (The Roof Glare) - #364F78 tinted */}
        <div 
          className="absolute inset-x-4 top-0 h-1/2 opacity-45 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(220, 230, 245, 0.95) 0%, rgba(180, 200, 230, 0.3) 50%, rgba(255,255,255,0) 100%)',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
          }}
        />

        {/* --- DYNAMIC CONTENT --- */}
        
        {/* Left: Icon */}
        {Icon && (
          <div className="relative z-10 flex items-center justify-center flex-shrink-0">
            <Icon 
              className="text-white w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" 
              strokeWidth={2.5}
            />
          </div>
        )}
        
        {/* Middle: Text Label */}
        <span className="relative z-10 text-white
          text-sm sm:text-base md:text-base lg:text-lg
          font-bold tracking-wide 
          drop-shadow-[0_2px_3px_rgba(30,45,70,0.4)] 
          whitespace-nowrap">
          {label}
        </span>

        {/* Right: Custom Element (if provided) */}
        {rightElement && (
          <div className="relative z-10 flex-shrink-0 text-white flex items-center justify-center">
            {rightElement}
          </div>
        )}

      </button>

    </div>
  );
};

export default GlassButton;
