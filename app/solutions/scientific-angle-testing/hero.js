"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Eye, ThumbsDown, ThumbsUp, Heart, ShoppingCart, Shirt } from 'lucide-react';
import CalendlyCTA from '@/components/CalendlyCTA';
import GlassButton from '@/components/but';

const Hero = () => {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loopCount, setLoopCount] = useState(0);

  // Continuous loop animation
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setTime(prevTime => {
        const newTime = prevTime + 0.1;
        if (newTime >= 10) {
          setLoopCount(prev => prev + 1);
          return 0;
        }
        return parseFloat(newTime.toFixed(1));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Retention calculation functions
  const getRetentionGeneric = (t) => {
    if (t <= 0) return 100;
    if (t <= 1) return 100 - (t * 60);
    if (t <= 3) return 40 - ((t - 1) * 10);
    let val = 20 - ((t - 3) * 1.5);
    return Math.max(val, 5);
  };

  const getRetentionSharp = (t) => {
    if (t <= 0) return 100;
    if (t <= 1) return 100 - (t * 20);
    if (t <= 3) return 80 - ((t - 1) * 5);
    let val = 70 - ((t - 3) * 0.5);
    return Math.max(val, 60);
  };

  const rGen = getRetentionGeneric(time);
  const rSharp = getRetentionSharp(time);
  const totalImpressions = 10000;
  
  const remainingGen = Math.round(totalImpressions * (rGen / 100));
  const lostGenCount = totalImpressions - remainingGen;
  const remainingSharp = Math.round(totalImpressions * (rSharp / 100));

  let projectedRoasGen = 2.1;
  if (time > 3 && rGen < 25) projectedRoasGen = 1.8;
  
  let projectedRoasSharp = 5.2;
  if (time > 3 && rSharp > 60) projectedRoasSharp = 5.4;

  return (
    <div className="mt-8 mb-0 flex flex-col font-sans text-[#4a4a4a] bg-[#e0e5ec]">
      <style>{`
        body { background-color: #e0e5ec; }
        .neu-flat {
            background: #e0e5ec;
            box-shadow: 9px 9px 16px rgb(163,177,198,0.6), 
                       -9px -9px 16px rgba(255,255,255, 0.5);
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.2);
        }
        .neu-pressed {
            background: #e0e5ec;
            box-shadow: inset 6px 6px 10px 0 rgba(163,177,198, 0.7), 
                       inset -6px -6px 10px 0 rgba(255,255,255, 0.8);
            border-radius: 20px;
        }
        .neu-btn {
            background: #e0e5ec;
            box-shadow: 6px 6px 10px 0 rgba(163,177,198, 0.7), 
                       -6px -6px 10px 0 rgba(255,255,255, 0.8);
            border-radius: 50px;
            color: #1e40af;
            font-weight: 700;
            transition: all 0.2s ease;
        }
        .neu-btn:active {
            box-shadow: inset 4px 4px 8px 0 rgba(163,177,198, 0.7), 
                       inset -4px -4px 8px 0 rgba(255,255,255, 0.8);
            transform: translateY(1px);
        }
        .neu-btn-primary {
            background: #6d5dfc;
            color: white;
            box-shadow: 6px 6px 10px 0 rgba(109, 93, 252, 0.3), 
                       -6px -6px 10px 0 rgba(255,255,255, 0.8);
        }
        .neu-btn-primary:hover {
            background: #5b4cc4;
        }
        .insta-icon-btn {
            background: rgba(0,0,0,0.3);
            backdrop-filter: blur(8px);
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
        }
        .reel-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
      `}</style>

      <main className="flex-grow container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
        
        <div className="flex justify-center">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full neu-pressed text-[10px] md:text-xs mt-4 mb-6 font-bold uppercase tracking-wide text-blue-800"
          >
            <Shirt size={14} className="text-blue-600" />
            <span>The 2025 Advertising Shift</span>
          </motion.div>
        </div>
        
        {/* Hero Section: 2 Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6 md:space-y-8 z-10 relative w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-800"
            >
              The{" "}
              <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                3-Second
              </span>{" "}
              Decision That{" "}
              <span className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                Doubles
              </span>{" "}
              Your{" "}
              <span className="bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">
                ROAS
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
            >
              90% of people scroll past your ads without watching. The algorithm buries your brand. Your ROAS stays stuck at 2x.
              <br /><br />
              <strong>The problem isn't your product. It's your angle.</strong>
              <br />
              Most brands test random creative variations. We use <span className="text-[#000000] font-bold">Scientific Angle Testing</span> to discover the one psychological hook that stops the scroll.
            </motion.p>

            {/* Buttons - Hidden on mobile, shown on desktop */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, ease: "easeOut" }}
  className="hidden lg:flex flex-col sm:flex-row gap-4 pt-4"
>
  <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
   <GlassButton 
  label="Start Angle Testing" 
  icon={ArrowRight} 
  className="h-4 sm:h-5 transition-all duration-200"
  buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
  onClick={() => console.log('Focus mode toggled')}
/>
      
      
  </CalendlyCTA>

  <GlassButton 
  label="View Case Studies" 
  icon={ArrowRight} 
  className="h-4 sm:h-5 transition-all duration-200"
  buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
  onClick={() => window.location.href = '/results/case-studies'}
/>
    
  
</motion.div>


            {/* Stats - Hidden on mobile, shown on desktop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="hidden lg:flex pt-4 md:pt-8 flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-500 font-medium"
            >
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#00d2d3] flex-shrink-0" /> 
                <span>30-50% lower CPM</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#00d2d3] flex-shrink-0" /> 
                <span>2-4x CTR</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#00d2d3] flex-shrink-0" /> 
                <span>4-6x ROAS</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Video Simulators */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 w-full"
          >
            {/* Video Comparison Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-16">
              {/* Generic Video */}
              <VideoSimulator 
                title="Generic Angle"
                subtitle='"Premium Quality Clothing"'
                retention={rGen}
                time={time}
                type="generic"
                projectedRoas={projectedRoasGen}
                lostCount={lostGenCount}
                videoSrc="/Lame_T_Shirt_Ad_Video_Generation.mp4"
              />

              {/* Sharp Video */}
              <VideoSimulator 
                title="Sharp Angle"
                subtitle='"Stop Buying Clothes That Die in 3 Months"'
                retention={rSharp}
                time={time}
                type="sharp"
                projectedRoas={projectedRoasSharp}
                retainedCount={remainingSharp}
                videoSrc="/TMS AD01 JUNE04 SONU.mov"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats - Only visible on mobile at the end */}
        <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.9 }}
  className="lg:hidden pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-500 font-medium"
>
  <div className="flex items-center gap-2">
    <Check size={14} className="text-[#00d2d3] flex-shrink-0" /> 
    <span>30-50% lower CPM</span>
  </div>
  <div className="flex items-center gap-2">
    <Check size={14} className="text-[#00d2d3] flex-shrink-0" /> 
    <span>2-4x CTR</span>
  </div>
  <div className="flex items-center gap-2">
    <Check size={14} className="text-[#00d2d3] flex-shrink-0" /> 
    <span>4-6x ROAS</span>
  </div>
</motion.div>


        {/* Buttons - Only visible on mobile at the end */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:hidden flex flex-col gap-3 pt-6 w-full"
        >
          <CalendlyCTA calendlyUrl="https://calendly.com/arlox-/strategy-call-1">
            <GlassButton 
  label="Start Angle Testing" 
  icon={ArrowRight} 
  className="h-4 sm:h-5 transition-all duration-200"
  buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
  onClick={() => console.log('Focus mode toggled')}
/>
          </CalendlyCTA>
          <GlassButton 
  label="View Case Studies" 
  icon={ArrowRight} 
  className="h-4 sm:h-5 transition-all duration-200"
  buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
  onClick={() => window.location.href = '/results/case-studies'}
/>
        </motion.div>
      </main>
    </div>
  );
};

// Video Simulator Component - Instagram Reel Style
function VideoSimulator({ title, subtitle, retention, time, type, projectedRoas, lostCount, retainedCount, videoSrc }) {
  const isGeneric = type === 'generic';
  const scrollThreshold = isGeneric ? 3 : 8;
  const hasScrolled = time > scrollThreshold;
  const showScrollHand = time >= 1 && time <= 3;
  
  return (
    <div className="relative flex flex-col">
      {/* Header */}
      <div className="mb-2">
        <h4 className={`text-sm md:text-base font-bold ${isGeneric ? 'text-[#ff6b6b]' : 'text-[#00d2d3]'}`}>
          {title}
        </h4>
        <p className="text-[9px] sm:text-[10px] text-gray-500 italic line-clamp-1">{subtitle}</p>
      </div>

      {/* Mobile Phone Frame - Reel Format */}
      <div className="neu-pressed rounded-2xl md:rounded-3xl p-2 relative" style={{ aspectRatio: '9/16', maxHeight: '450px' }}>
        <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden bg-black">
          
          {/* Full Screen Video - Reel Style */}
          <div className="absolute inset-0">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="reel-video"
              style={{ 
                opacity: hasScrolled ? 0.3 : 1,
                transition: 'opacity 0.5s'
              }}
            />
          </div>

          {/* Scroll Hand Animation */}
          <AnimatePresence>
            {showScrollHand && (
              <motion.div
                initial={{ y: '50%', opacity: 0 }}
                animate={{ y: '-20%', opacity: [0, 1, 1, 0] }}
                exit={{ y: '-30%', opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 z-10 pointer-events-none"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=WQiX8VTC7LIa&format=png&color=ffffff"
                  alt="scroll"
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll Away Overlay */}
          <AnimatePresence>
            {hasScrolled && (
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gray-900/95 flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-center text-white">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {isGeneric ? (
                      <>
                        <ThumbsDown size={36} className="mx-auto mb-3 opacity-50" />
                        <div className="text-sm font-bold opacity-70">Scrolled Past</div>
                        <div className="text-xs opacity-50 mt-1">Lost engagement</div>
                      </>
                    ) : (
                      <>
                        <ThumbsUp size={36} className="mx-auto mb-3 text-[#00d2d3]" />
                        <div className="text-sm font-bold text-[#00d2d3]">User Engaged!</div>
                        <div className="text-xs mt-1">Clicked to buy</div>
                      </>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instagram Icons */}
          <div className="absolute bottom-3 right-3 flex flex-col gap-3 z-20">
            <motion.div
              animate={{ opacity: hasScrolled ? 0 : 1 }}
              className="text-center"
            >
              <div className="insta-icon-btn">
                <Heart size={16} className="text-white" fill={isGeneric ? 'none' : '#EF4444'} />
              </div>
              <span className="text-white text-[9px] font-bold mt-0.5 block">
                {isGeneric ? Math.floor(retention * 10) : Math.floor(retention * 50)}
              </span>
            </motion.div>

            <motion.div
              animate={{ opacity: hasScrolled ? 0 : 1 }}
              className="text-center"
            >
              <div className="insta-icon-btn">
                <Eye size={16} className="text-white" />
              </div>
              <span className="text-white text-[9px] font-bold mt-0.5 block">
                {Math.round(retention)}%
              </span>
            </motion.div>

            <motion.div
              animate={{ 
                opacity: !isGeneric && !hasScrolled && time > 5 ? 1 : 0,
                scale: !isGeneric && !hasScrolled && time > 5 ? [1, 1.15, 1] : 1
              }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-center"
            >
              <div className="w-8 h-8 rounded-full bg-[#00d2d3] flex items-center justify-center" style={{ boxShadow: '0 2px 8px rgba(0,210,211,0.5)' }}>
                <ShoppingCart size={16} className="text-white" />
              </div>
              <span className="text-white text-[9px] font-bold mt-0.5 block">BUY</span>
            </motion.div>
          </div>

          {/* Top Bar */}
          <div className="absolute top-2 left-2 right-2 z-20 flex justify-between items-center">
            <motion.div 
              className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-[9px] font-bold inline-flex items-center gap-1"
              animate={{
                boxShadow: hasScrolled ? 'none' : `0 0 12px ${isGeneric ? 'rgba(255,107,107,0.5)' : 'rgba(0,210,211,0.5)'}`
              }}
            >
              <Eye size={10} />
              {Math.round(retention)}%
            </motion.div>

            <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-[9px] font-mono font-bold">
              {time.toFixed(1)}s
            </div>
          </div>
        </div>
      </div>

      {/* Stats Below Video */}
      <div className="mt-2 grid grid-cols-4 gap-1.5 text-center">
        <div className="neu-pressed rounded-lg p-1.5">
          <div className={`text-xs font-bold ${isGeneric ? 'text-[#ff6b6b]' : 'text-[#00d2d3]'}`}>
            {Math.round(retention)}%
          </div>
          <div className="text-[7px] text-gray-500 uppercase font-bold">Watch</div>
        </div>
        <div className="neu-pressed rounded-lg p-1.5">
          <div className={`text-xs font-bold ${isGeneric ? 'text-[#ff6b6b]' : 'text-[#00d2d3]'}`}>
            {isGeneric ? '1.8%' : '4.2%'}
          </div>
          <div className="text-[7px] text-gray-500 uppercase font-bold">CTR</div>
        </div>
        <div className="neu-pressed rounded-lg p-1.5">
          <div className={`text-xs font-bold ${isGeneric ? 'text-[#ff6b6b]' : 'text-[#00d2d3]'}`}>
            {projectedRoas}x
          </div>
          <div className="text-[7px] text-gray-500 uppercase font-bold">ROAS</div>
        </div>
        <div className="neu-pressed rounded-lg p-1.5">
          <div className={`text-xs font-bold ${isGeneric ? 'text-[#ff6b6b]' : 'text-[#00d2d3]'}`}>
            {isGeneric ? `${Math.round((lostCount/10000)*100)}%` : `${Math.round((retainedCount/10000)*100)}%`}
          </div>
          <div className="text-[7px] text-gray-500 uppercase font-bold">{isGeneric ? 'Lost' : 'Kept'}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
