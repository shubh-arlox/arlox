import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Gem, 
  ShieldCheck, 
  Zap, 
  Heart, 
  ArrowDown, 
  AlertCircle,
  Clock,
  Frown,
  XCircle,
  Menu,
  X,
  Sparkles,
  Crown,
  Spade,
  SpadeIcon
} from 'lucide-react';

// === THE NEUMORPHIC PALETTE ===
const colors = {
  bg: '#ecf0f3',
  shadowLight: '#ffffff',
  shadowDark: '#d1d9e6',
  crimson: '#e53e3e',
  emerald: '#059669',
  navy: '#2b3a55',
  slate: '#64748b',
  darkest: '#1a202c',
  gold: '#E8C57A'
};

const ArloxApp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Neumorphic Utility Styles
  const neuBg = `bg-[#ecf0f3]`;
  const neuExtruded = `shadow-[10px_10px_20px_${colors.shadowDark},-10px_-10px_20px_${colors.shadowLight}]`;
  const neuButton = `shadow-[6px_6px_12px_${colors.shadowDark},-6px_-6px_12px_${colors.shadowLight}]`;
  const neuPressed = `shadow-[inset_4px_4px_8px_${colors.shadowDark},inset_-4px_-4px_8px_${colors.shadowLight}]`;
  const neuInset = `shadow-[inset_6px_6px_12px_${colors.shadowDark},inset_-6px_-6px_12px_${colors.shadowLight}]`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-slate-300 selection:text-slate-900 overflow-x-hidden" style={{ backgroundColor: colors.bg }}>

      {/* === HERO SECTION === */}
{/* === HERO SECTION === */}
<header className="relative pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
           <motion.div 
             className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.05]"
             style={{ backgroundColor: colors.navy }}
             animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
             transition={{ duration: 15, repeat: Infinity }}
           />
           <motion.div 
             className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.05]"
             style={{ backgroundColor: colors.gold }}
             animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
             transition={{ duration: 12, repeat: Infinity }}
           />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tracking-[0.3em] text-sm uppercase mb-6 font-bold"
            style={{ color: colors.gold }}
          >
            Redefining The Standard
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            style={{ color: colors.navy, textShadow: `4px 4px 8px ${colors.shadowDark}, -4px -4px 8px ${colors.shadowLight}` }}
          >
            Even the smallest tasks deserve <span className="relative inline-block text-amber-600">grace.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
            style={{ color: colors.slate }}
          >
            We are rewriting the narrative of "From India" to signify impeccable craftsmanship and a relentless quest for perfection.
          </motion.p>
        </div>
      </header>

      {/* === REALITY SECTION (THE PROBLEM) === */}
      <section
  id="reality"
  className="relative -mt-6 sm:-mt-10 md:-mt-14 py-0"
>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Text Side */}
            <div className="lg:sticky lg:top-32">
              <div className="flex items-start gap-4 mb-6">
  {/* Icon Badge */}
  <div
    className={`
      p-3 rounded-full shrink-0
      ${neuButton}
    `}
  >
    <AlertCircle size={22} style={{ color: colors.crimson }} />
  </div>

  {/* Heading */}
  <h2
    className="text-4xl md:text-5xl font-black leading-tight"
    style={{ color: colors.darkest }}
  >
    The Current{" "}
    <span style={{ color: colors.crimson }}>Perception</span>
  </h2>
</div>

              <p className="text-2xl font-semibold leading-relaxed mb-8" style={{ color: colors.slate }}>
India internationally is known for easy defensiveness, hard work, low quality work, victimization, try hard losing, disorganization, no joy always being in hurry, creating chaos, dreading work, Ignoring health, creating confusion, being proudly cheap & low quality, cutting corners, missing deadlines, delaying work, group think, Lying by omission and sugarcoating truth.

              </p>
              <div
  className="
    flex justify-center items-center
    px-5 sm:px-6
    py-3
    rounded-xl
    bg-[#e8ebf0]
    shadow-[inset_4px_4px_8px_rgba(163,177,198,0.45),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]
  "
>
  <p
    className="text-lg lg:text-lg italic font-semibold tracking-wide"
    style={{
      color: "#6B7280",
      textShadow: `
        1px 1px 1px rgba(255,255,255,0.6),
        -1px -1px 1px rgba(0,0,0,0.15)
      `,
    }}
  >
    Not my opinion — just personally observed facts.
  </p>
</div>

            </div>
            

            {/* Grid of Issues - INSET CARDS (Sunken to represent 'Negative') */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {realityItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`group p-6 rounded-2xl ${neuInset} border border-transparent hover:border-red-100 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <item.icon className="w-5 h-5" style={{ color: colors.crimson }} />
                    </div>
                    <p className="text-sm font-bold" style={{ color: colors.slate }}>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === MISSION SECTION (ARLOX BELIEF) === */}
      <section id="mission" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
           <div className="max-w-4xl mx-auto text-center">
  <h2
    className="
      text-3xl md:text-5xl
      font-bold
      leading-snug
      mb-12
    "
    style={{ color: colors.navy }}
  >
    {/* Group: Icon + First Part of Sentence */}
    {/* We use inline-flex so it sits on the same line as the rest of the text */}
    <span className="inline-flex items-center gap-0 align-middle">
      <span
        className={`
          p-3 rounded-full shrink-0
          ${neuExtruded}
        `}
      >
        <Gem className="w-7 h-7 md:w-8 md:h-8" style={{ color: colors.gold }} />
      </span>
      <span className="ml-2">At Arlox, we believe </span>
    </span>

    {/* Rest of the sentence flows naturally after the span above */}
    {" "}<span className="opacity-50">chaos</span>{" "}
    transforms into{" "}
    <span style={{ color: colors.emerald }}>clarity</span>.
  </h2>
</div>

            
            {/* The 4 Pillars - EXTRUDED CARDS (Popped to represent 'Positive') */}
            <div
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    gap-8
    mt-20
    max-w-[1400px]
    mx-auto
  "
>
  <div className="lg:col-span-2">
    <ValuePillar title="Grace" icon={Heart} desc="Elegance in execution, regardless of the task's size." color={colors.crimson} />
  </div>
  <div className="lg:col-span-2">
    <ValuePillar title="Beauty" icon={Sparkles} desc="Aesthetics that speak of pride and intention." color={colors.navy} />
  </div>
  <div className="lg:col-span-2">
    <ValuePillar title="Quality" icon={ShieldCheck} desc="Uncompromising standards that stand the test of time." color={colors.gold} />
  </div>
  <div className="lg:col-span-2">
    <ValuePillar title="Effectiveness" icon={Zap} desc="Solutions that work brilliantly, without excuses." color={colors.emerald} />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* === VISION SECTION (OUTCOME) === */}
      <section id="vision" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h3 className="tracking-widest uppercase text-sm font-bold mb-4" style={{ color: colors.gold }}>The New Benchmark</h3>
              <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ color: colors.navy }}>
                From India, With <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Perfection.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Impeccable craftsmanship in every pixel and product.",
                  "Meticulous attention to the smallest details.",
                  "A relentless quest for perfection.",
                  "Joy in the process, health in the practice."
                ].map((text, i) => (
                  <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl ${neuExtruded}`}>
                    <div className={`w-2 h-2 rounded-full bg-${i % 2 === 0 ? 'blue' : 'purple'}-500`}></div>
                    <p className="font-semibold text-sm sm:text-base" style={{ color: colors.slate }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - THE MONOLITH CARD */}
            <div className="lg:w-1/2 w-full flex justify-center">
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 180, damping: 18 }}
    className="
      relative
      w-full
      max-w-md
      aspect-[3/4]
      rounded-[2.5rem]
      overflow-hidden
      group
    "
    style={{
      background: `
        linear-gradient(
          145deg,
          ${colors.navy} 0%,
          #111827 100%
        )
      `,
      boxShadow: `
        18px 18px 40px rgba(0,0,0,0.45),
        -12px -12px 32px rgba(255,255,255,0.05)
      `,
    }}
  >
    {/* Subtle inner depth */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        boxShadow: `
          inset 6px 6px 14px rgba(0,0,0,0.45),
          inset -6px -6px 14px rgba(255,255,255,0.05)
        `,
      }}
    />

    {/* Spade symbol (SVG for precision) */}
    <div className="absolute inset-0 flex items-center justify-center z-0">
      <svg
        viewBox="0 0 200 240"
        className="w-[70%] opacity-[0.08]"
        fill="none"
      >
        <path
          d="
            M100 10
            C40 80, 10 110, 10 150
            C10 190, 45 210, 80 190
            C95 180, 100 165, 100 165
            C100 165, 105 180, 120 190
            C155 210, 190 190, 190 150
            C190 110, 160 80, 100 10
            Z
          "
          fill="#ffffff"
        />
        <rect x="88" y="165" width="24" height="45" rx="6" fill="#ffffff" />
      </svg>
    </div>

    {/* Corner mark */}
    <div className="absolute top-6 left-6 text-left z-10">
      <span className="text-5xl font-black text-white/15 leading-none">A</span>
      <div className="text-white/20 text-xl -mt-1">♠</div>
    </div>
    <div className="absolute bottom-6 right-6 text-left z-10 rotate-180">
  <span className="text-5xl font-black text-white/15 leading-none">A</span>
  <div className="text-white/20 text-xl -mt-1">♠</div>
</div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
      

      <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed italic">
        “We don’t just finish work.<br />
        We <span style={{ color: colors.gold }}>elevate</span> it.”
      </p>

      <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-70" />
    </div>
  </motion.div>
</div>


          </div>
        </div>
      </section>

    </div>
  );
};

// --- SUB COMPONENTS ---

// Neumorphic Pillar Card
const ValuePillar = ({ title, icon: Icon, desc, color }) => {
  const neuExtruded = `bg-[#ecf0f3] shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff]`;
  const neuInset = `shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]`;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`group relative p-8 rounded-[2rem] ${neuExtruded} text-left overflow-hidden`}
    >
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${neuInset} mb-6`}>
        <Icon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" style={{ color: color }} />
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkest }}>{title}</h3>
      <p className="text-sm leading-relaxed font-medium opacity-80" style={{ color: colors.slate }}>{desc}</p>
    </motion.div>
  );
};

// Data for the "Reality" section
const realityItems = [
  { text: "Easy Defensiveness", icon: AlertCircle },
  { text: "Try-hard Losing", icon: Frown },
  { text: "Low Quality Work", icon: XCircle },
  { text: "Disorganization & Chaos", icon: Zap },
  { text: "Lying by Omission", icon: AlertCircle },
  { text: "Cutting Corners", icon: XCircle },
  { text: "Missing Deadlines", icon: Clock },
  { text: "Proudly Cheap", icon: Frown },
  { text: "Sugarcoating Truth", icon: AlertCircle },
  { text: "No Joy, Only Hurry", icon: Clock },
];

export default ArloxApp;