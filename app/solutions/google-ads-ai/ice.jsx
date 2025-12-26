import React, { useState } from 'react';
import { 
  Search, Camera, Youtube, Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from './SharedUI';

const IcebergAccordionNeu = () => {
  const [activeLayer, setActiveLayer] = useState('visible');

  // --- NEUMORPHIC STYLES ---
  const neuBase = "bg-[#E0E5EC]";
  const neuShadowExtruded = "shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]";
  const neuShadowPressed = "shadow-[inset_6px_6px_10px_rgb(163,177,198,0.7),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";
  
  // Base button style (Selectable Card)
  const neuBtnBase = "transition-all duration-300 rounded-2xl flex flex-col items-center justify-center border border-white/20 select-none relative overflow-hidden";

  // --- DATA ---
  const icebergData = {
    visible: {
      id: 'visible',
      title: "Shopping",
      subtitle: "Standard Text Search",
      icon: <Search className="w-6 h-6" />,
      percent: "40%",
      value: "$160K",
      revenueLabel: "$160K Revenue",
      colorClass: "text-blue-600",
      bgClass: "bg-blue-100",
      description: "Your current strategy only captures explicit text searches like 'red silk dress'. This is the visible tip.",
      stat: "Captured",
    },
    visual: {
      id: 'visual',
      title: "Lens/Visual",
      subtitle: "Google Lens & Circle to Search",
      icon: <Camera className="w-6 h-6" />,
      percent: "25%",
      value: "-$420K",
      revenueLabel: "$420K Lost",
      colorClass: "text-indigo-600",
      bgClass: "bg-indigo-100",
      description: "40% of Gen Z fashion searches start with an image. Shopping ads don't appear here.",
      stat: "Missed Opportunity",
    },
    demand: {
      id: 'demand',
      title: "Demand Gen",
      subtitle: "YouTube Shorts & Discover",
      icon: <Youtube className="w-6 h-6" />,
      percent: "20%",
      value: "-$380K",
      revenueLabel: "$380K Lost",
      colorClass: "text-purple-600",
      bgClass: "bg-purple-100",
      description: "Competitors are creating demand with Shorts. You're waiting for searches that don't exist yet.",
      stat: "Unreached Users",
    },
    ai: {
      id: 'ai',
      title: "AI Search",
      subtitle: "Multimodal Results",
      icon: <Sparkles className="w-6 h-6" />,
      percent: "15%",
      value: "-$240K",
      revenueLabel: "$240K Lost",
      colorClass: "text-teal-600",
      bgClass: "bg-teal-100",
      description: "AI results favor rich data (reviews, 3D). Your standard feed is invisible to the AI.",
      stat: "Zero Visibility",
    }
  };

  const activeData = icebergData[activeLayer];

  return (
    <div className={`w-full max-w-6xl mx-auto p-4 md:p-12 ${neuBase} font-sans min-h-screen md:min-h-0`}>
       <div className="flex justify-center items-center mb-8">
          <motion.div 
            variants={fadeIn}
            className="
              inline-flex items-center gap-3 px-5 py-2 rounded-full
              bg-[#ecf0f3]
              shadow-[inset_2px_2px_4px_rgba(120,130,150,0.35),inset_-2px_-2px_4px_rgba(255,255,255,0.6)]
              text-rose-600 font-semibold text-xs sm:text-sm tracking-wide
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400/60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
            </span>
             
           The Invisible Traffic Iceberg
          </motion.div>
        </div>
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-slate-700 uppercase tracking-tight mb-4 drop-shadow-sm">
               What You Can't See In Your Dashboard
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-medium px-4">
              87% of brands optimize for the 40% of traffic they can see. <br className="hidden md:block"/>
              They miss the massive 60% hidden below the surface.
          </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        
        {/* --- LEFT SIDE: STACK VISUALIZATION --- */}
        <div className="flex-1 w-full flex flex-col items-center relative z-0">
            
            {/* STACK CONTAINER */}
            <div className="w-full max-w-md flex flex-col gap-4 relative">
                
                {/* 1. SHOPPING (Top) */}
                <StackItem 
                    data={icebergData.visible} 
                    isActive={activeLayer === 'visible'}
                    onClick={() => setActiveLayer(activeLayer === 'visible' ? null : 'visible')}
                    neuBtnBase={neuBtnBase}
                    neuShadowPressed={neuShadowPressed}
                    neuShadowExtruded={neuShadowExtruded}
                    activeColor="blue"
                />
                
                {/* MOBILE DETAIL ACCORDION (Shopping) */}
                <AccordionDetails 
                    isOpen={activeLayer === 'visible'} 
                    data={icebergData.visible} 
                    neuShadowPressed={neuShadowPressed}
                />

                {/* 2. WATERLINE DIVIDER */}
                <div className="relative py-4 w-[110%] -ml-[5%] group z-10 my-2">
                    <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-slate-400/40 group-hover:border-blue-400/60 transition-colors"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E0E5EC] px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest shadow-sm rounded-full whitespace-nowrap">
                        Waterline (Search Volume Cap)
                    </div>
                </div>

                {/* 3. LENS */}
                <StackItem 
                    data={icebergData.visual} 
                    isActive={activeLayer === 'visual'}
                    onClick={() => setActiveLayer(activeLayer === 'visual' ? null : 'visual')}
                    neuBtnBase={neuBtnBase}
                    neuShadowPressed={neuShadowPressed}
                    neuShadowExtruded={neuShadowExtruded}
                    activeColor="indigo"
                />
                <AccordionDetails 
                    isOpen={activeLayer === 'visual'} 
                    data={icebergData.visual} 
                    neuShadowPressed={neuShadowPressed}
                />

                {/* 4. DEMAND */}
                <StackItem 
                    data={icebergData.demand} 
                    isActive={activeLayer === 'demand'}
                    onClick={() => setActiveLayer(activeLayer === 'demand' ? null : 'demand')}
                    neuBtnBase={neuBtnBase}
                    neuShadowPressed={neuShadowPressed}
                    neuShadowExtruded={neuShadowExtruded}
                    activeColor="purple"
                />
                 <AccordionDetails 
                    isOpen={activeLayer === 'demand'} 
                    data={icebergData.demand} 
                    neuShadowPressed={neuShadowPressed}
                />

                {/* 5. AI */}
                <StackItem 
                    data={icebergData.ai} 
                    isActive={activeLayer === 'ai'}
                    onClick={() => setActiveLayer(activeLayer === 'ai' ? null : 'ai')}
                    // Rounded bottom for the last item only
                    neuBtnBase={`${neuBtnBase} rounded-b-[3rem]`} 
                    neuShadowPressed={neuShadowPressed}
                    neuShadowExtruded={neuShadowExtruded}
                    activeColor="teal"
                />
                 <AccordionDetails 
                    isOpen={activeLayer === 'ai'} 
                    data={icebergData.ai} 
                    neuShadowPressed={neuShadowPressed}
                />

            </div>
        </div>

        {/* --- DESKTOP RIGHT SIDE (Sticky Details) --- */}
        {/* Hidden on Mobile, Visible on Large Screens */}
        <div className="hidden lg:block flex-1 w-full space-y-8 sticky top-10">
             {activeData && (
                 <DetailCard 
                    data={activeData} 
                    neuShadowExtruded={neuShadowExtruded} 
                    neuShadowPressed={neuShadowPressed} 
                />
             )}
             {!activeData && (
                <div className={`p-10 rounded-[3rem] ${neuShadowExtruded} border border-white/40 flex items-center justify-center h-64 opacity-50`}>
                    <p className="text-slate-400 font-bold">Select a layer to view details</p>
                </div>
             )}
        </div>

      </div>
    </div>
  );
};

// --- SUB COMPONENTS ---

// 1. The Selectable Stack Card (Updated for Unified Layout)
const StackItem = ({ data, isActive, onClick, neuBtnBase, neuShadowPressed, neuShadowExtruded, activeColor }) => {
    // Dynamic border/bg styles based on active state and color
    const activeStyles = {
        blue: `border-blue-400/30`,
        indigo: `border-indigo-400/30`,
        purple: `border-purple-400/30`,
        teal: `border-teal-400/30`,
    };

    return (
        <motion.div 
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            // Fixed height h-40 to ensure equal size for all cards
            className={`
                w-full h-40 cursor-pointer ${neuBtnBase} z-20 px-4 py-2
                ${isActive 
                    ? `${neuShadowPressed} ${activeStyles[activeColor]} bg-slate-200/20` 
                    : `${neuShadowExtruded} hover:scale-[1.02] bg-[#E0E5EC]`}
            `}
        >
            <div className={`mb-2 ${isActive ? data.colorClass : 'text-slate-400'}`}>
                {React.cloneElement(data.icon, { className: `w-6 h-6 ${isActive ? 'drop-shadow-sm' : ''}` })}
            </div>
            
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">{data.title}</span>
            
            {/* Unified Data Row */}
            <div className="flex items-center justify-center w-full gap-4 border-t border-slate-300/30 pt-2 mt-1">
                <div className="text-center w-1/2">
                    <span className={`block text-lg font-black ${isActive ? data.colorClass : 'text-slate-500'}`}>
                        {data.percent}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Traffic</span>
                </div>
                
                {/* Vertical Separator */}
                <div className="w-px h-6 bg-slate-300/50"></div>
                
                <div className="text-center w-1/2">
                    <span className={`block text-lg font-black ${isActive ? 'text-slate-700' : 'text-slate-500'}`}>
                        {data.value}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Revenue</span>
                </div>
            </div>
            
            {/* Active Indicator Dot */}
            {isActive && (
                <motion.div 
                    layoutId="activeDot" 
                    className={`absolute right-4 top-4 w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${data.colorClass.replace('text-', 'bg-')}`} 
                />
            )}
        </motion.div>
    );
};

// 2. The Accordion Detail (Mobile Only)
const AccordionDetails = ({ isOpen, data, neuShadowPressed }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden lg:hidden w-full"
            >
                <div className={`p-6 rounded-2xl ${neuShadowPressed} bg-[#E0E5EC] border border-white/20 mx-2`}>
                     <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-slate-200 ${data.colorClass}`}>
                            {data.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-lg">{data.title}</h4>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${data.colorClass}`}>{data.subtitle}</p>
                        </div>
                     </div>
                     <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                        {data.description}
                     </p>
                     <div className="flex justify-between items-center pt-4 border-t border-slate-300/50">
                        <span className="text-xs font-bold text-slate-400 uppercase">Impact</span>
                        <span className={`text-lg font-black ${data.id === 'visible' ? 'text-green-600' : 'text-red-500'}`}>
                            {data.revenueLabel}
                        </span>
                     </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

// 3. The Large Detail Card (Desktop Only)
const DetailCard = ({ data, neuShadowExtruded, neuShadowPressed }) => (
    <div className={`p-10 rounded-[3rem] ${neuShadowExtruded} border border-white/40 bg-[#E0E5EC] relative overflow-hidden`}>
        <div className="flex justify-between items-start mb-8">
            <div className={`p-5 rounded-2xl ${neuShadowPressed} ${data.colorClass} bg-[#E0E5EC]`}>
                {React.cloneElement(data.icon, { className: "w-8 h-8" })}
            </div>
            <div className="text-right">
                <div className="text-4xl font-black text-slate-700 drop-shadow-sm">{data.percent}</div>
                <div className="text-xs font-bold uppercase text-slate-400 mt-1">Of Total Traffic</div>
            </div>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{data.title}</h3>
        <div className={`text-xs font-bold uppercase tracking-wider mb-6 ${data.colorClass} opacity-80`}>
            {data.subtitle}
        </div>
        
        <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium">
            {data.description}
        </p>

        <div className={`rounded-2xl p-6 ${neuShadowPressed} bg-[#E0E5EC] flex justify-between items-center border border-white/20`}>
            <div>
                <div className="text-xs text-slate-400 font-bold uppercase mb-1">Status</div>
                <div className="text-base font-bold text-slate-700">{data.stat}</div>
            </div>
            <div className="text-right">
                <div className="text-xs text-slate-400 font-bold uppercase mb-1">Financial Impact</div>
                <div className={`text-2xl font-black ${data.id === 'visible' ? 'text-green-600' : 'text-red-500'}`}>
                    {data.revenueLabel}
                </div>
            </div>
        </div>
    </div>
);

export default IcebergAccordionNeu;