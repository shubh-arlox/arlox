import React from 'react';
import { 
  Magnet, 
  Compass, 
  Eye, 
  DollarSign, 
  AlertTriangle, 
  Ghost, 
  Rocket, 
  Zap, 
  ArrowDown,
  Shirt,
  Shapes
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const HookVsAngle = () => {
  // Neumorphic Utility Classes
  const neuOuter = "bg-[#e0e5ec] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#e0e5ec]";
  const neuInner = "bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#e0e5ec]";

  // Static Zone Data Array
  const zones = [
    {
      id: 'death',
      title: "The Death Zone",
      subtitle: "Weak Hook + Weak Angle",
      icon: <Ghost size={24} className="text-slate-400" />,
      color: "slate",
      desc: "Invisible & Irrelevant. Nobody sees it, nobody cares.",
      metrics: { hookRate: "< 20%", roas: "< 1.0x" },
      outcome: "Loss"
    },
    {
      id: 'trap',
      title: "The Attention Trap",
      subtitle: "Strong Hook + Weak Angle",
      icon: <AlertTriangle size={24} className="text-orange-500" />,
      color: "orange",
      desc: "Valueless Virality. They watch, but don't convert.",
      metrics: { hookRate: "60%+", roas: "1.8x" },
      outcome: "Break Even"
    },
    {
      id: 'hidden',
      title: "The Hidden Gem",
      subtitle: "Weak Hook + Strong Angle",
      icon: <Eye size={24} className="text-purple-500" />,
      color: "purple",
      desc: "Invisible Excellence. Great positioning nobody sees.",
      metrics: { hookRate: "< 25%", roas: "2-3x" },
      outcome: "Stagnant"
    },
    {
      id: 'winner',
      title: "THE WINNER ZONE",
      subtitle: "Strong Hook + Strong Angle",
      icon: <Rocket size={24} className="text-green-500" />,
      color: "green",
      desc: "10x ROAS Potential. They stop scrolling AND they buy.",
      metrics: { hookRate: "60%+", roas: "4-6x+" },
      outcome: "Scale"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#e0e5ec] text-slate-600 font-sans py-12 md:py-20 overflow-hidden">
      
      {/* Background Ambience (Reduced for Mobile) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[20%] right-[-20%] w-[20rem] h-[20rem] bg-blue-100/40 rounded-full blur-[80px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[20rem] h-[20rem] bg-green-100/40 rounded-full blur-[80px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        {/* HEADER */}
         
        <div className="text-center mb-12">
          <div className="flex justify-center">
          <div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full neu-pressed text-[10px] md:text-xs mt-4 mb-6 font-bold uppercase tracking-wide text-purple-500"
          >
            <Shapes size={14} className="text-blue-600" />
            <span>Purchase Trigger</span>
          </div>
        </div>
           
        
          <h2 className="text-3xl md:text-5xl font-bold text-slate-700 leading-tight mb-4">
            Hook vs. Angle
          </h2>
          <p className="text-sm md:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
            Most brands confuse the two. This confusion costs millions.
          </p>
        </div>

        {/* DEFINITIONS STACK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* HOOK CARD */}
          <div className={`p-6 rounded-2xl ${neuOuter}`}>
             <div className="flex items-center gap-3 mb-4">
               <div className={`p-2 rounded-lg ${neuInner} text-blue-500`}>
                 <Magnet size={20} />
               </div>
               <div>
                 <h3 className="font-bold text-slate-700">The Hook</h3>
                 <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">3-Second Gatekeeper</span>
               </div>
             </div>
             <p className="text-xs md:text-sm text-slate-500 mb-3 leading-relaxed">
               Interrupts the scroll. If your hook fails, your creative is invisible.
             </p>
             <div className="px-3 py-2 rounded-lg bg-blue-50/50 border border-blue-100 text-[10px] text-blue-800 font-mono">
               "No Hook â†’ No Attention"
             </div>
          </div>

          {/* ANGLE CARD */}
          <div className={`p-6 rounded-2xl ${neuOuter}`}>
             <div className="flex items-center gap-3 mb-4">
               <div className={`p-2 rounded-lg ${neuInner} text-purple-500`}>
                 <Compass size={20} />
               </div>
               <div>
                 <h3 className="font-bold text-slate-700">The Angle</h3>
                 <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wide">Strategic Positioning</span>
               </div>
             </div>
             <p className="text-xs md:text-sm text-slate-500 mb-3 leading-relaxed">
               Creates resonance. The hook gets them to watch; the angle determines if they buy.
             </p>
             <div className="px-3 py-2 rounded-lg bg-purple-50/50 border border-purple-100 text-[10px] text-purple-800 font-mono">
               "Weak Angle â†’ Low ROAS"
             </div>
          </div>
        </div>

        {/* 4 SCENARIOS (Replaces Interactive Matrix) */}
        <div className="mb-16">
           <div className="text-center mb-8">
             <h3 className="text-xl font-bold text-slate-700">The 4 Performance Scenarios</h3>
             <p className="text-xs text-slate-400 mt-1">Based on Hook & Angle Strength</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {zones.map((zone) => (
               <div key={zone.id} className={`p-6 rounded-3xl ${neuOuter} border-l-4 border-${zone.color}-500 flex flex-col`}>
                  
                  <div className="flex justify-between items-start mb-4">
                     <div>
                       <h4 className={`text-lg font-bold text-${zone.color}-600`}>{zone.title}</h4>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{zone.subtitle}</div>
                     </div>
                     <div className={`p-2 rounded-full bg-${zone.color}-50 text-${zone.color}-500`}>
                       {zone.icon}
                     </div>
                  </div>
                  
                  <p className="text-xs text-slate-500 mb-6 flex-grow">{zone.desc}</p>
                  
                  {/* Compact Metrics */}
                  <div className={`p-3 rounded-xl ${neuInner} bg-slate-50/50`}>
                     <div className="grid grid-cols-3 gap-2 text-center items-center">
                        <div>
                          <div className="text-[9px] text-slate-400 uppercase">Hook Rate</div>
                          <div className="text-xs font-bold text-slate-600">{zone.metrics.hookRate}</div>
                        </div>
                        <div className="border-l border-slate-200">
                          <div className="text-[9px] text-slate-400 uppercase">ROAS</div>
                          <div className="text-xs font-bold text-slate-600">{zone.metrics.roas}</div>
                        </div>
                        <div className="border-l border-slate-200">
                          <div className={`text-[10px] font-bold uppercase py-1 px-2 rounded bg-${zone.color}-100 text-${zone.color}-600 inline-block`}>
                            {zone.outcome}
                          </div>
                        </div>
                     </div>
                  </div>

               </div>
             ))}
           </div>
        </div>

        {/* PRIORITY FRAMEWORK (Simplified) */}
        <div className={`p-8 rounded-[2rem] ${neuOuter} relative overflow-hidden`}>
           <div className="relative z-10 text-center">
              <h3 className="text-lg font-bold text-slate-700 mb-6">Testing Priority</h3>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                 <div className="flex-1 w-full p-4 rounded-xl bg-white/40 border border-white">
                    <div className="text-xs font-bold text-blue-500 uppercase mb-1">Step 1</div>
                    <div className="font-bold text-slate-700 text-sm">Test Hooks</div>
                    <div className="text-[10px] text-slate-400">Fast & Cheap</div>
                 </div>
                 
                 <ArrowDown className="text-slate-300 md:-rotate-90" />
                 
                 <div className="flex-1 w-full p-4 rounded-xl bg-white/40 border border-white">
                    <div className="text-xs font-bold text-purple-500 uppercase mb-1">Step 2</div>
                    <div className="font-bold text-slate-700 text-sm">Test Angles</div>
                    <div className="text-[10px] text-slate-400">Deep Strategy</div>
                 </div>

                 <ArrowDown className="text-slate-300 md:-rotate-90" />

                 <div className="flex-1 w-full p-4 rounded-xl bg-green-50 border border-green-100">
                    <div className="text-xs font-bold text-green-600 uppercase mb-1">Result</div>
                    <div className="font-bold text-slate-700 text-sm">Scale Winners</div>
                    <div className="text-[10px] text-green-600 font-bold">Max ROAS</div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default HookVsAngle;