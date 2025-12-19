"use client"
import React, { useState } from 'react';
import { 
  Trophy, 
  Skull, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Activity,
  Zap,
  Droplets,
  Shirt,
  Scissors,
  Telescope,
  Spotlight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const AngleEvidence = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative w-full min-h-screen bg-[#e0e5ec] text-slate-600 font-sans py-12 sm:py-16 md:py-24 overflow-hidden">
      
      {/* Inline Styles for Neumorphic Design */}
      <style jsx>{`
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
        .neu-card {
          background: #e0e5ec;
          box-shadow: 6px 6px 12px rgb(163,177,198,0.6), 
                     -6px -6px 12px rgba(255,255,255, 0.5);
          border-radius: 24px;
          transition: all 0.3s ease;
        }
        .neu-card:hover {
          transform: translateY(-4px);
          box-shadow: 8px 8px 16px rgb(163,177,198,0.7), 
                     -8px -8px 16px rgba(255,255,255, 0.6);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
            <motion.div 
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.2, ease: "easeOut" }}
  className=" mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full neu-pressed text-[10px] md:text-xs font-bold text-[#ff6b6b] uppercase tracking-wide"
>
  <Activity size={14} className="shrink-0" />
  <span>Real World Data</span>
</motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 leading-tight mb-4 sm:mb-6 px-4">
            Angles That Made 
            <span className="text-slate-400 font-light mx-2 sm:mx-3">(and Broke)</span> 
            Brands
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto px-4">
            The difference between a billion-dollar exit and bankruptcy often comes down to a single strategic decision: The Angle.
          </p>
        </div>

        {/* ================= THE SUCCESS SPECTRUM ================= */}
        <div className="relative mb-16 sm:mb-20 md:mb-24">
            
            {/* Spectrum Gradient Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-red-300 via-slate-200 to-green-300 rounded-full transform -translate-y-1/2 z-0"></div>
         <div 
  className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-[#e0e5ec] px-6 py-8 rounded-full border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap shadow-[inset_4px_4px_8px_rgb(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]"
  style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
>
  The Differentiation Threshold
</div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 relative z-10 pt-8 md:pt-0">
                
                {/* === LEFT SIDE: THE GRAVEYARD === */}
                <div className="space-y-6 sm:space-y-8 md:pr-8 lg:pr-12 md:border-r border-slate-200/50">
                    <div className="flex items-center gap-3 mb-6 sm:mb-8 opacity-60">
                        <Skull className="text-slate-400 w-5 h-5 sm:w-6 sm:h-6" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-500">Generic Angle Graveyard</h3>
                    </div>

                    {/* FAILED CASE 1 */}
                    <div className="neu-flat p-6 sm:p-8 relative overflow-hidden group hover:opacity-100 transition-opacity opacity-80">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <TrendingDown size={48} className="sm:w-16 sm:h-16" />
                        </div>
                        <div className="flex justify-between items-start mb-4 gap-2">
                            <h4 className="font-bold text-slate-700 text-base sm:text-lg">Evian "Roller Babies"</h4>
                            <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-2 py-1 rounded flex-shrink-0">Viral Trap</span>
                        </div>
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-500">
                                <span className="font-bold w-14 sm:w-16 flex-shrink-0">Angle:</span>
                                <span>Entertainment / Viral</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-500">
                                <span className="font-bold w-14 sm:w-16 flex-shrink-0">Result:</span>
                                <span className="text-red-500 font-bold">Sales -25%</span>
                            </div>
                        </div>
                        <p className="text-[10px] sm:text-xs text-slate-400 italic border-t border-slate-200 pt-3">
                            "150M views. Zero product connection. Valueless virality."
                        </p>
                    </div>

                    {/* FAILED CASE 2 */}
                    <div className="neu-flat p-6 sm:p-8 relative overflow-hidden group hover:opacity-100 transition-opacity opacity-80">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <AlertTriangle size={48} className="sm:w-16 sm:h-16" />
                        </div>
                        <div className="flex justify-between items-start mb-4 gap-2">
                            <h4 className="font-bold text-slate-700 text-base sm:text-lg">Generic Fashion Brand X</h4>
                            <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-2 py-1 rounded flex-shrink-0">The Commodity</span>
                        </div>
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-500">
                                <span className="font-bold w-14 sm:w-16 flex-shrink-0">Angle:</span>
                                <span>"Premium Quality"</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-500">
                                <span className="font-bold w-14 sm:w-16 flex-shrink-0">Result:</span>
                                <span className="text-orange-500 font-bold">2.0x ROAS Ceiling</span>
                            </div>
                        </div>
                        <p className="text-[10px] sm:text-xs text-slate-400 italic border-t border-slate-200 pt-3">
                            "Says nothing. Every competitor claims this."
                        </p>
                    </div>
                </div>

                {/* === RIGHT SIDE: HALL OF FAME === */}
                <div className="space-y-6 sm:space-y-8 md:pl-8 lg:pl-12">
                     <div className="flex items-center gap-3 mb-6 sm:mb-8">
                        <Trophy className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700">Sharp Angle Hall of Fame</h3>
                    </div>

                    {/* WINNING CASE 1: HARRY'S */}
                   {/* WINNING CASE 1: HARRY'S RAZORS */}
<div 
    className="neu-card p-6 sm:p-8 relative overflow-hidden border-l-4 border-blue-500"
>
    <div className="flex justify-between items-start mb-4 gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
            <div className="neu-pressed p-1.5 sm:p-2 rounded-lg text-blue-500">
                <Scissors size={18} className="sm:w-5 sm:h-5" />
            </div>
            <h4 className="font-bold text-slate-700 text-base sm:text-lg">Harry's Razors</h4>
        </div>
        <div className="text-right flex-shrink-0">
            <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-bold">Valuation</div>
            <div className="text-base sm:text-lg font-black text-green-600">$1.4B</div>
        </div>
    </div>
    <div className="mb-4">
        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">The Angle</div>
        <div className="text-xs sm:text-sm font-bold text-slate-600">"David vs. Goliath – Stop Overpaying Giants"</div>
    </div>
    <div className="mt-4">
        <p className="text-[10px] sm:text-xs text-blue-600 bg-[#E0E5EC] p-3 rounded-lg shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.6)] border border-blue-100/30">
            <span className="font-bold">Key Insight:</span> Positioned against the business model of incumbents, not just the product utility.
        </p>
    </div>
</div>


{/* WINNING CASE 2: LIQUID DEATH */}
<div 
    className="neu-card p-6 sm:p-8 relative overflow-hidden border-l-4 border-slate-800"
>
    <div className="flex justify-between items-start mb-4 gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
            <div className="neu-pressed p-1.5 sm:p-2 rounded-lg text-slate-800">
                <Droplets size={18} className="sm:w-5 sm:h-5" />
            </div>
            <h4 className="font-bold text-slate-700 text-base sm:text-lg">Liquid Death</h4>
        </div>
        <div className="text-right flex-shrink-0">
            <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-bold">Valuation</div>
            <div className="text-base sm:text-lg font-black text-green-600">$700M</div>
        </div>
    </div>
    <div className="mb-4">
        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">The Angle</div>
        <div className="text-xs sm:text-sm font-bold text-slate-600">"Murder Your Thirst – Water for Rockstars"</div>
    </div>
    <div className="mt-4">
        <p className="text-[10px] sm:text-xs text-slate-700 bg-[#E0E5EC] p-3 rounded-lg shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.6)] border border-slate-200/30">
            <span className="font-bold">Key Insight:</span> Refused generic "pure quality" messaging. Created a pattern interrupt in a boring category.
        </p>
    </div>
</div>


{/* WINNING CASE 3: BOMBAS */}
<div 
    className="neu-card p-6 sm:p-8 relative overflow-hidden border-l-4 border-purple-500"
>
    <div className="flex justify-between items-start mb-4 gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
            <div className="neu-pressed p-1.5 sm:p-2 rounded-lg text-purple-500">
                <Shirt size={18} className="sm:w-5 sm:h-5" />
            </div>
            <h4 className="font-bold text-slate-700 text-base sm:text-lg">Bombas</h4>
        </div>
        <div className="text-right flex-shrink-0">
            <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-bold">Revenue</div>
            <div className="text-base sm:text-lg font-black text-green-600">$300M+</div>
        </div>
    </div>
    <div className="mb-4">
        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">The Angle</div>
        <div className="text-xs sm:text-sm font-bold text-slate-600">"Buy One, Give One – Comfort = Necessity"</div>
    </div>
    <div className="mt-4">
        <p className="text-[10px] sm:text-xs text-purple-700 bg-[#E0E5EC] p-3 rounded-lg shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.6)] border border-purple-100/30">
            <span className="font-bold">Key Insight:</span> Transformed a commodity product into a mission-driven identity purchase.
        </p>
    </div>
</div>


                </div>
            </div>
        </div>

        {/* ================= ARLOX CLIENT SPOTLIGHT ================= */}
        <div className="mt-16 sm:mt-20 md:mt-24">
            <div className="neu-flat p-6 sm:p-8 md:p-12 border border-white/50 relative overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-200 via-orange-300 to-green-500"></div>
                
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
                    
                    {/* LEFT: CONTEXT */}
                    <div className="lg:w-1/3 w-full">
                        <div className="inline-flex items-center gap-2 px-3 py-1 neu-pressed rounded  text-blue-600 text-[10px] font-bold uppercase mb-4">
                            <Spotlight  size={12} /> Arlox Client Spotlight
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-4">Streetwear Brand Case Study</h3>
                        <p className="text-sm sm:text-base text-slate-500 mb-6 leading-relaxed">
                            Stuck at 2.1x ROAS with generic "quality" messaging. We deployed the Scientific Angle Testing protocol to find the breakthrough.
                        </p>
                        <div className="flex items-center gap-4">
                             <div className="text-center">
                                 <div className="text-[10px] text-slate-400 uppercase">Before</div>
                                 <div className="text-lg sm:text-xl font-bold text-slate-500">2.1x ROAS</div>
                             </div>
                             <ArrowRight className="text-slate-300 w-5 h-5" />
                             <div className="text-center">
                                 <div className="text-[10px] text-slate-400 uppercase">After</div>
                                 <div className="text-2xl sm:text-3xl font-black text-green-600">5.2x ROAS</div>
                             </div>
                        </div>
                    </div>

                    {/* RIGHT: THE TEST DASHBOARD */}
                    <div className="lg:w-2/3 w-full">
                        <div className="neu-pressed p-6 sm:p-8">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Scientific Angle Testing Results</h4>
                            
                            <div className="space-y-4">
                                
                                {/* ANGLE A */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 opacity-60">
                                    <div className="w-full sm:w-40 md:w-48 text-xs font-bold text-slate-500 uppercase flex-shrink-0">Angle A: "Craftsmanship"</div>
                                    <div className="flex-1 w-full h-8 bg-slate-200 rounded-lg overflow-hidden relative">
                                        <div className="h-full bg-yellow-400 w-[30%] flex items-center justify-end px-2 text-[10px] font-bold text-yellow-900">2.3x</div>
                                    </div>
                                    <div className="w-16 text-left sm:text-right text-xs text-slate-400 flex-shrink-0">KILLED</div>
                                </div>

                                {/* ANGLE B */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 opacity-80">
                                    <div className="w-full sm:w-40 md:w-48 text-xs font-bold text-slate-600 uppercase flex-shrink-0">Angle B: "Culture Authority"</div>
                                    <div className="flex-1 w-full h-8 bg-slate-200 rounded-lg overflow-hidden relative">
                                        <div className="h-full bg-orange-400 w-[55%] flex items-center justify-end px-2 text-[10px] font-bold text-orange-900">3.8x</div>
                                    </div>
                                    <div className="w-16 text-left sm:text-right text-xs text-slate-400 flex-shrink-0">KILLED</div>
                                </div>

                                {/* ANGLE C - WINNER */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                                    <div className="w-full sm:w-40 md:w-48 text-xs font-bold text-green-600 uppercase flex items-center gap-2 flex-shrink-0">
                                        <CheckCircle2 size={14} /> Angle C: "Anti-Fast-Fashion"
                                    </div>
                                    <div className="flex-1 w-full h-10 bg-slate-200 rounded-lg overflow-hidden relative shadow-lg">
                                        <div className="absolute top-0 left-0 h-full bg-green-500 w-[85%] flex items-center justify-end px-3 text-xs sm:text-sm font-bold text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                                            5.2x ROAS
                                        </div>
                                    </div>
                                    <div className="w-16 text-left sm:text-right text-xs font-bold text-green-600 flex-shrink-0">WINNER</div>
                                </div>

                            </div>
                            
                            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 flex justify-between items-center">
                                <span className="text-xs text-slate-400">Total Improvement</span>
                                <span className="text-base sm:text-lg font-bold text-green-600 flex items-center gap-1">
                                    <TrendingUp size={16} className="sm:w-5 sm:h-5" /> +147%
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Bottom Annotation */}
            <div className="mt-6 sm:mt-8 text-center">
               <p className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-widest uppercase px-4">
  The Pattern: Sharp Angles ={" "}
  <span className="font-bold text-blue-800">
    Defensible Positioning → Lower CPM → Higher ROAS
  </span>
</p>

            </div>
        </div>

      </div>
    </section>
  );
};

export default AngleEvidence;
