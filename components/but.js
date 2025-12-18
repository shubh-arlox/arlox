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
    <div className={`relative group inline-block rounded-[40px] w-full sm:w-auto ${className}`}>
      
      {/* 0. CAUSTIC CAST */}
      <div className="absolute -inset-1 bg-gradient-to-b from-transparent to-blue-200/40 rounded-[45px] blur-md translate-y-2 opacity-70 pointer-events-none" />

      <button className={`relative flex items-center justify-between 
          gap-3 sm:gap-4 md:gap-6 
          px-4 sm:px-6 md:px-8 lg:px-10 
          py-3 sm:py-4 md:py-5
          rounded-[40px] overflow-hidden w-full
          transition-transform duration-300 ease-out active:scale-[0.97]
          hover:shadow-lg
           ${buttonClassName}`}
          
        
        style={{
          /* 1. REFRACTION */
          backdropFilter: 'blur(24px) saturate(120%)',
          WebkitBackdropFilter: 'blur(24px) saturate(120%)',

          /* 2. BASE TEXTURE & TINT */
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(240, 245, 255, 0.4) 100%)',
          
          /* 3. LIGHTING PHYSICS */
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.4), 
            inset 0 1px 0 0 rgba(255, 255, 255, 0.9),
            inset 0 4px 10px rgba(100, 110, 130, 0.05),
            inset 0 -8px 12px rgba(255, 255, 255, 0.6),
            inset 0 -1px 2px rgba(0, 0, 0, 0.1),
            0 15px 35px -10px rgba(80, 90, 110, 0.2),
            0 5px 10px -5px rgba(80, 90, 110, 0.1)
          `,
        }}
        {...props}
      >
        {/* 4. SURFACE IMPERFECTION (Noise Overlay) */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        />

        {/* 5. OUTER REFLECTION (The Roof Glare) */}
        <div 
          className="absolute inset-x-4 top-0 h-1/2 opacity-40 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
          }}
        />

        {/* --- DYNAMIC CONTENT --- */}
        
        
        {/* Middle: Text Label */}
        <span className="relative z-10 text-slate-700 
          text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
          font-bold tracking-wide 
          drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] 
          flex-grow text-center
          truncate">
          {label}
        </span>

        {/* Right: Custom Element (if provided) */}
        {rightElement && (
          <div className="relative z-10 ">
            {rightElement}
          </div>
        )}
        {/* Left: Icon Circle */}
        {Icon && (
          <div className="relative z-10 flex items-center justify-center 
            w-4 h-4 sm:w-10 sm:h-10 md:w-6 md:h-4 
            rounded-full">
            <Icon 
              size={16} 
              className="text-slate-700 fill-slate-700 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" 
            />
          </div>
        )}

      </button>

    </div>
  );
};

export default GlassButton;
