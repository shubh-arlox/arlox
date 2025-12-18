"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Microscope, Quote, PieChart, Target, 
  TrendingUp, User, FileText, Rocket, TrendingDown, 
  Dices, Wallet, X, Bot, Brain, Unlock, Search, 
  Mic, GitBranch, Calculator, Map, RefreshCw, 
  CheckCircle, Lightbulb, HelpCircle, Clock, 
  XCircle, Linkedin, Twitter, Menu, Check , ChevronDown,
  FileWarning,
  AlertTriangle,
  Cross,
  RockingChair,
  Theater,
  Book,
} from 'lucide-react';
import WhatsappCTA from '@/components/WhatsAppCTA';
import YourComponent from "./Failiurecard";
import GlassButton from "@/components/but";

// Neumorphic Style Utilities
const neuFlat = "bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] rounded-3xl border border-white/20";
const neuPressed = "bg-[#E0E5EC] shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] rounded-3xl";
const neuConvex = "bg-gradient-to-br from-[#f0f5fc] to-[#caced4] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] rounded-3xl";
const neuIconBtn = "flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] transition-all duration-300 text-gray-600 hover:text-black";
const stepCircle ="w-16 h-16 flex shrink-0 items-center justify-center bg-[#E0E5EC] rounded-full shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)]";

//trap 

// const [trapActive, setTrapActive] = useState(false);
//         const [caught, setCaught] = useState(false);
// const [trapActive, setTrapActive] = useState(false); const [caught, setCaught] = useState(false);

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
// --- FAQ Section Component ---
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Local Neumorphic styles for the FAQ toggle
  const faqFlat = "bg-[#E0E5EC] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff]";
  const faqPressed = "bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff]";

  // UPDATED: Your local image path
  const authorAvatar = "/unnamed.jpg"; 

  const faqs = [
    { 
      q: "How is this different from sending a survey to my list?", 
      a: "Surveys reveal aspirations. Interviews reveal truth. Surveys say 80% will buy; reality is 8%. We focus on past behavior using The Mom Test." 
    },
    { 
      q: "Can't I just have my agency do interviews?", 
      a: "You can, but they usually ask 'What do you like about us?' (Compliments) vs 'What triggered your search?' (Intel). Plus, confirmation bias." 
    },
    { 
      q: "Can't I just test my way to the answer?", 
      a: "Option A (Test): 90 days, $45K spend. Option B (Know): $4.5K + 14 days. The cost is roughly the same, but we frontload the learning." 
    },
    { 
      q: "What if research reveals my offer is wrong?", 
      a: "Then you just saved $50K-$150K. Would you rather spend $4.5K to learn now, or $80K in ads to learn 6 months later?" 
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-[#E0E5EC]" id="faq">
      <div className="justify-center flex items-center">
          <div className={`${neuPressed} inline-block px-4 py-1 rounded-full mb-4`}>
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Faq</span>
          </div>
        </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">The Silent Objections</h2>
        <p className="text-gray-600 text-center mb-12 text-sm md:text-base">We've done this 50+ times. These are the questions you're not asking out loud.</p>

        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;

            return (
              <motion.div
                key={i}
                layout
                onClick={() => toggleFAQ(i)}
                className={`
                   p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden
                   ${isOpen ? faqPressed : faqFlat}
                `}
              >
                {/* Question Header */}
                <div className="flex justify-between items-start gap-4">
                    <h4 className={`font-bold transition-colors duration-300 mb-0 flex items-start gap-3 text-sm md:text-base ${isOpen ? 'text-indigo-600' : 'text-gray-800'}`}>
                        <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${isOpen ? 'text-indigo-500' : 'text-gray-400'}`} />
                        {faq.q}
                    </h4>
                    
                    <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-gray-400 shrink-0"
                    >
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </div>

                {/* Answer Area with Avatar Reveal */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pt-6 pl-0 md:pl-8 flex gap-4 items-start">
                        {/* Avatar Image */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="shrink-0 relative"
                        >
                           <img 
                                src={authorAvatar} 
                                alt="Author" 
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#E0E5EC] shadow-sm object-cover"
                           />
                           <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#E0E5EC] rounded-full"></div>
                        </motion.div>

                        {/* Answer Text Bubble */}
                        <motion.div 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-sm text-gray-600 bg-white/40 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl leading-relaxed"
                        >
                            <p>{faq.a}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ArloxianLanding = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// const [trapActive, setTrapActive] = useState(false); const [caught, setCaught] = useState(false);
 
const [trapActive, setTrapActive] = useState(false);
const [caught, setCaught] = useState(false);
const [selectedCard, setSelectedCard] = useState(null);
const [hoveredCard, setHoveredCard] = useState(null);
// faq


return (
    <div className="font-sans text-[#2D3748] bg-[#E0E5EC] min-h-screen selection:bg-gray-300 overflow-x-hidden w-full">
      
      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="z-10 order-1 lg:order-1"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${neuPressed} mb-6 md:mb-8`}>
              <Brain size={12} color="#5239dd" />
              <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-[#5239dd] ">
                THE ARLOXIAN INTELLIGENCE PROTOCOL
              </span>
              
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-gray-900 leading-[1.1]">
              Know More Than Your Competitors. <br />
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#385179] via-[#4f46e5] to-[#7c3aed]">Spend Less Finding Out.</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10 border-l-4 border-blue-500 pl-4 md:pl-6">
              Scientific market intelligence that turns guesswork into mathematical certainty. We extract what customers actually want—not what surveys claim they want—through forensic behavioral research.
            </p>

            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-10">
              <div className={`${neuPressed} p-3 md:p-4 rounded-xl text-center`}>
                <div className="text-xl md:text-2xl font-bold text-blue-800">15-20</div>
                <div className="text-[9px] md:text-[10px] uppercase text-gray-500 font-bold">Interviews / Segment</div>
              </div>
              <div className={`${neuPressed} p-3 md:p-4 rounded-xl text-center`}>
                <div className="text-xl md:text-2xl font-bold text-gray-800">10-14</div>
                <div className="text-[9px] md:text-[10px] uppercase text-gray-500 font-bold">Days To Complete</div>
              </div>
              <div className={`${neuPressed} p-3 md:p-4 rounded-xl text-center`}>
                <div className="text-xl md:text-2xl font-bold text-red-500">87%</div>
                <div className="text-[9px] md:text-[10px] uppercase text-gray-500 font-bold">Launch Wrong</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
             <WhatsappCTA 
                whatsappNumber="+919910220335" 
                calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
              >
              
              <GlassButton 
  label="Get Your Market Intelligence Audit" 
  icon={ArrowRight} 
  className="h-4 sm:h-5 transition-all duration-200"
  buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
  onClick={() => console.log('Focus mode toggled')}
/>
              </WhatsappCTA>
              <p className="text-xs text-gray-500 mt-6 text-center md:text-left md:ml-4">90-minute deep-dive. Zero obligation. See what we'd uncover.</p>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center order-2 lg:order-2 mb-8 lg:mb-0"
          >
            {/* Central Microscope Metaphor */}
            <div className={`${neuConvex} w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center relative z-20`}>
              <Microscope className="w-24 h-24 md:w-32 md:h-32 text-blue-400" />
            </div>

            {/* Floating Data Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className={`absolute top-0 md:top-5 right-0 md:right-4 ${neuFlat} p-4 md:p-5 rounded-xl z-10 max-w-[180px] md:max-w-[220px]`}
            >
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <p className="text-xs md:text-sm text-gray-600 italic">"I waste 5 hours every Sunday..."</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className={`absolute bottom-8 md:bottom-32 left-0 ${neuFlat} p-4 md:p-5 rounded-xl z-10`}
            >
              <div className="flex items-center gap-3">
                <PieChart className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                <div>
                  <p className="text-xs md:text-sm font-bold text-gray-800">Segment A: 42%</p>
                </div>
              </div>
            </motion.div>

            <div className={`absolute top-[80px] md:top-[100px] left-[-10px] md:left-[-20px] ${neuFlat} p-3 md:p-4 rounded-xl z-10 opacity-90`}>
              <div className="flex items-center gap-2 md:gap-3">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                <p className="text-[10px] md:text-xs font-bold text-gray-600">Pain: Time Poverty</p>
              </div>
            </div>
            <div className={`absolute bottom-0 md:bottom-10 right-4 md:right-20 ${neuFlat} p-3 md:p-4 rounded-xl z-10 opacity-90`}>
              <div className="flex items-center gap-2 md:gap-3">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                <p className="text-xs md:text-sm font-bold text-gray-800">ROAS: 5.8x</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

 {/* SECTION 2: SYSTEMIC DIAGNOSIS */}
      <section className="py-12 md:py-20 px-4 md:px-6" id="diagnosis">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className={`${neuPressed} inline-block px-4 py-1 rounded-full mb-4`}>
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">THE INDUSTRY FAILURE LOOP</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why 87% Of Fashion Brands Launch With The Wrong Messaging</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            The standard agency playbook: 'Launch fast, test everything, optimize later.' Sounds efficient. Costs you 6-12 months and $50K-$200K discovering what you could have known in Week 1.
          </p>
        </motion.div>

        <YourComponent/>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {/* The Cost */}
          <div className={`${neuPressed} p-6 md:p-8 rounded-3xl`}>
            <h3 className="text-lg md:text-xl font-bold text-red-500 mb-6">The Cost Of Assumption-Based Campaigns</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3"><X className="w-5 h-5 text-red-400 shrink-0" /> $15K-$50K wasted testing messages that were never going to work</li>
              <li className="flex gap-3"><X className="w-5 h-5 text-red-400 shrink-0" /> 3-6 months lost while competitors who "knew" their customers pulled ahead</li>
              <li className="flex gap-3"><X className="w-5 h-5 text-red-400 shrink-0" /> Creative team demoralized by constant "failing" tests</li>
              <li className="flex gap-3"><X className="w-5 h-5 text-red-400 shrink-0" /> Founder loses confidence in paid acquisition entirely</li>
              <li className="flex gap-3"><X className="w-5 h-5 text-red-400 shrink-0" /> Agency blames "the algorithm" or "iOS 14" instead of their methodology</li>
            </ul>
          </div>

          {/* The Cause */}
          <div className={`${neuFlat} p-6 md:p-8 rounded-3xl`}>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">Why This Happens</h3>
            <div className="mb-6">
              <p className="font-bold text-sm mb-2">The standard agency intake:</p>
              <ul className="space-y-2 text-sm text-gray-500 ml-4 border-l-2 border-gray-300 pl-4">
                <li>1-hour kick-off call</li>
                <li>"Tell us about your ideal customer"</li>
                <li>You describe who you <em>hope</em> buys</li>
                <li>Agency writes copy based on <em>your assumptions</em></li>
                <li>Launch</li>
              </ul>
            </div>
            <div className={`${neuPressed} p-4 rounded-xl border-l-4 border-red-400`}>
              <p className="text-xs font-bold text-gray-700 mb-1">MISSING:</p>
              <p className="text-sm text-gray-600 italic">"Talking to actual humans who already tried to solve this problem."</p>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center">
          <div className={`${neuPressed} p-4 mt-8 md:mt-12 rounded-xl border-l-4 border-r-4 border-violet-400 max-w-xl mx-4 md:mx-0`}>
            <p className="text-sm  text-violet-600 italic">
              "You can't optimize your way out of a positioning problem. If you're talking
              to the wrong segment with the wrong promise, no amount of A/B testing
              will save you."
            </p>
          </div>
        </div>
      </section>


      {/* SECTION 3: AI RECONCILIATION */}
      <section className="py-12 md:py-24 px-4 md:px-6" id="ai-reconciliation">
        <div className="justify-center flex items-center">
          <div className={`${neuPressed} inline-block px-4 py-1 rounded-full mb-4`}>
            <span className="text-[10px] font-bold text-[#b57404] uppercase tracking-widest">AI RECONCILIATION</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why AI-Assisted Research Isn't 'Cheating'</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
              You've been told that real research means months of manual work. But the constraint was never 'effort'—it was economic feasibility. AI removes the barrier that made thinking at this depth impossibly expensive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Old Constraint */}
            <motion.div 
              className={`${neuPressed} p-6 md:p-8 rounded-3xl opacity-70`}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-500 mb-6">Old Constraint (Manual Research)</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500 font-medium">Transcription Time</span>
                  <span className="font-mono text-gray-600">40-60 hours</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500 font-medium">Thematic Coding</span>
                  <span className="font-mono text-gray-600">3-5 days analyst time</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500 font-medium">Cost</span>
                  <span className="font-mono text-gray-600">$15K-$25K per project</span>
                </div>
                <div className="flex justify-between text-sm pt-2 bg-gray-200 p-2 rounded">
                  <span className="text-gray-600 font-bold text-xs md:text-sm">Economic Result</span>
                  <span className="text-gray-600 font-bold text-right text-xs md:text-sm">Only huge brands afford this</span>
                </div>
              </div>
            </motion.div>

            {/* New Constraint */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`${neuFlat} p-6 md:p-8 rounded-3xl border-2 border-blue-500/20 shadow-xl`}
            >
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-6">New Constraint (AI-Augmented Protocol)</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-700 font-medium">Transcription Time</span>
                  <span className="font-mono text-gray-900 font-bold">Real-time (Otter.ai) = 0 hours</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-700 font-medium">Thematic Coding</span>
                  <span className="font-mono text-gray-900 font-bold">AI pattern recognition: 2 hours</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-700 font-medium">Cost</span>
                  <span className="font-mono text-gray-900 font-bold">$3K-$5K (same depth)</span>
                </div>
                <div className="flex justify-between text-sm pt-2 bg-blue-100 p-2 rounded">
                  <span className="text-blue-800 font-bold text-xs md:text-sm">Economic Result</span>
                  <span className="text-blue-800 font-bold text-right text-xs md:text-sm">Feasible for mid-market brands</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={`${neuConvex} p-4 md:p-6 rounded-2xl text-center max-w-3xl mx-auto mb-12 md:mb-16`}>
            <p className="text-gray-800 font-bold text-base md:text-lg">"AI didn't change what good research is. It changed who can afford to do it properly."</p>
          </div>

          {/* Reassurance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${neuFlat} p-6 md:p-8 rounded-3xl`}>
              <div className={`w-12 h-12 rounded-full ${neuPressed} flex items-center justify-center mb-6 text-gray-600`}><Bot className="w-6 h-6" /></div>
              <h4 className="font-bold text-gray-800 mb-1">What AI Does</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">The Mechanical Work</p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                <li>Transcribes 15-20 hours of interviews</li>
                <li>Tags 500+ data points</li>
                <li>Clusters thematic patterns</li>
                <li>Cross-references competitive intel</li>
                 <li>Generates first-draft segmentation models</li>
              </ul>
            </div>

            <div className={`${neuFlat} p-6 md:p-8 rounded-3xl border border-blue-200`}>
              <div className={`w-12 h-12 rounded-full ${neuPressed} flex items-center justify-center mb-6 text-blue-600`}><Brain className="w-6 h-6" /></div>
              <h4 className="font-bold text-gray-800 mb-1">What Humans Do</h4>
              <p className="text-xs text-blue-500 uppercase tracking-widest mb-4">The Strategic Work</p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                <li>Designs the interview questions (Mom Test)</li>
                <li>Conducts live interviews</li>
                <li>Interprets <em>why</em> patterns matter strategically</li>
                <li>Connects insights to offer engineering</li>
                <li>Makes final positioning recommendations</li>
              </ul>
            </div>

            <div className={`${neuFlat} p-6 md:p-8 rounded-3xl`}>
              <div className={`w-12 h-12 rounded-full ${neuPressed} flex items-center justify-center mb-6 text-green-600`}><Unlock className="w-6 h-6" /></div>
              <h4 className="font-bold text-gray-800 mb-1">What Changes</h4>
              <p className="text-xs text-green-500 uppercase tracking-widest mb-4">The Unlocked Capability</p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                <li>5X faster without quality loss</li>
                <li>75% cost reduction</li>
                <li>Accessible to mid-market brands</li>
                <li>Repeatable every 6 months</li>
                <li>Data depth reserved for Fortune 500s</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE MECHANISM */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-[#E0E5EC]" id="mechanism">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className={`${neuPressed} inline-block px-4 py-1 rounded-full mb-4`}>
              <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest">THE SOLUTION ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">The Arloxian Intelligence Protocol™</h2>
            <p className="text-sm md:text-base text-gray-600 mt-4">Seven-Phase Forensic Research System That Extracts Mathematical Certainty From Market Chaos</p>
          </div>

          <div className="flex justify-center mb-10 md:mb-12">
            <div className={`${neuConvex} px-6 md:px-8 py-4 rounded-2xl text-center`}>
              <div className="text-lg md:text-xl font-bold text-gray-800">Total Timeline: <span className="text-blue-600">10–14 Days</span></div>
              <div className="text-xs text-gray-500">What used to take 6-8 weeks</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Phase 1 */}
            <div className={`${neuFlat} p-6 rounded-2xl flex flex-col md:flex-row gap-4`}>
              <div className={stepCircle}>
                <div className="text-4xl font-bold text-gray-800">1</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 flex items-center gap-2"><Search className="w-4 h-4 text-gray-500" /> Pre-Research Intelligence Gathering</h4>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">Days 1-3</span>
                <p className="text-sm text-gray-600 mb-2">Customer Avatar Hypothesis + Competitive Matrix</p>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-4">What Happens:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>Kickoff call: We audit your current customer data</li>
                  <li>Export existing customer records (CRM, Shopify, GA4)</li>
                  <li>Identify top 20% revenue-generating customers</li>
                  <li>Draft hypothesis document (who we think buys and why)</li>
                  <li>Design interview recruitment strategy</li>
                </div>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-2">You Provide:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>Access to analytics platforms</li>
                  <li>Intro to 5-10 existing customers (we handle outreach)</li>
                  <li>List of competitors you're aware of</li>
                </div>
                <p className="text-xs font-bold text-gray-700 mt-2"><FileText className="w-3 h-3 inline" /> Deliverable: Customer Avatar Hypothesis Document</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className={`${neuFlat} p-6 rounded-2xl flex flex-col md:flex-row gap-4 border-2 border-blue-500/20`}>
              <div className={stepCircle}>
                <div className="text-4xl font-bold text-gray-800">2</div>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 flex items-center gap-2"><Mic className="w-4 h-4" /> The Mom Test Interview Protocol</h4>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">Days 4-10</span>
                <p className="text-sm text-gray-600 mb-2">15-20 behavioral interviews per segment. No pitching. Pure listening.</p>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-4">What Happens:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>We conduct 15-20 interviews per major segment</li>
                  <li>30-45 minute Zoom calls (we record & transcribe)</li>
                  <li>Mix: Recent buyers, churned customers, near-miss prospects</li>
                  <li>No pitching—pure detective work</li>
                  <li>Ask about past behavior, not future intentions</li>
                </div>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-2">Interview Structure:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>The Trigger Event (when did they realize they needed this?)</li>
                  <li>The Struggle Safari (what did they try first?)</li>
                  <li>Competitive Audit (why did other solutions fail?)</li>
                  <li>Value Quantification (what does this problem cost them?)</li>
                  <li>Decision Process (who else was involved?)</li>
                </div>
                <p className="text-xs font-bold text-gray-700 mt-3"><FileText className="w-3 h-3 inline" />
                Deliverable: Voice-of-Customer Database (direct quotes, emotional language, repeated phrases)</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className={`${neuFlat} p-6 rounded-2xl flex flex-col md:flex-row gap-4`}>
              <div className={stepCircle}>
                <div className="text-4xl font-bold text-gray-800">3</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 flex items-center gap-2"><GitBranch className="w-4 h-4 text-gray-500" /> Thematic Coding + Segmentation</h4>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">Days 11-14</span>
                <p className="text-sm text-gray-600 mb-2">AI-assisted analysis, pain point clustering (Ask Method), prioritized segment matrix.</p>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-4">What Happens:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>AI-assisted transcript analysis (tag 500+ data points)</li>
                  <li>Identify pain point patterns and urgency levels</li>
                  <li>Deploy quantitative survey (100+ responses per segment)</li>
                  <li>Cluster customers by primary pain point (Ask Method)</li>
                  <li>Create prioritized segment matrix</li>
                  <li>Extract competitive intelligence patterns</li>
                </div>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-2">Analysis Outputs:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>Segment Prioritization Matrix (which audiences to target first)</li>
                  <li>Pain Point Ranking (by frequency + urgency + willingness-to-pay)</li>
                  <li>Copy Vault (exact phrases to use in ads)</li>
                  <li>Objection Library (what makes them hesitate + how to resolve)</li>
                </div>
                <p className="text-xs font-bold text-gray-700 mt-3"><FileText className="w-3 h-3 inline" />
                Deliverable: Customer Intelligence Profile (3-5 detailed segment personas with acquisition cost estimates)</p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className={`${neuFlat} p-6 rounded-2xl flex flex-col md:flex-row gap-4`}>
              <div className={stepCircle}>
                <div className="text-4xl font-bold text-gray-800">4</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-gray-500" /> Market Trend & Timing Analysis</h4>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">Day 14</span>
                <p className="text-sm text-gray-600 mb-2">Google Trends (5-year), search volume, adoption lifecycle mapping.</p>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-4">What Happens:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>Google Trends analysis (5-year keyword demand)</li>
                  <li>Search volume trends (SEMrush/Ahrefs)</li>
                  <li>Adoption lifecycle mapping (are we selling to early adopters or mainstream?)</li>
                  <li>Seasonality research (when does demand spike?)</li>
                  <li>External factor audit (industry events, cultural moments)</li>
                </div>
                <p className="text-xs font-bold text-gray-700 mt-3"><FileText className="w-3 h-3 inline" />
                Deliverable: 12-Month Market Timing Calendar + Demand Trajectory Report</p>
              </div>
            </div>

            {/* Phase 5 */}
            <div className={`${neuFlat} p-6 rounded-2xl flex flex-col md:flex-row gap-4`}>
              <div className={stepCircle}>
                <div className="text-4xl font-bold text-gray-800">5</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 flex items-center gap-2"><Calculator className="w-4 h-4 text-gray-500" /> Value Equation Optimization</h4>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">Days 15-16</span>
                <p className="text-sm text-gray-600 mb-2">Hormozi Value Equation scoring. Offer stack redesign. Price strategy matrix.</p>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-4">What Happens:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>Apply Hormozi Value Equation to current offer</li>
                  <li>Score: (Dream Outcome × Likelihood) / (Time Delay × Effort)</li>
                  <li>Identify which variable is weakest</li>
                  <li>Redesign offer stack based on research insights</li>
                  <li>Price strategy matrix (3 pricing tiers tested against segments)</li>
                  <li>Guarantee framework (addresses top objection specifically)</li>
                </div>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-2">Analysis Outputs:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>What is the "magic wand" outcome customers want most?</li>
                  <li>What proof would kill their skepticism?</li>
                  <li>What "quick win" can we deliver in 10% of the time?</li>
                  <li>What friction can we eliminate through DFY?</li>
                </div>
                <p className="text-xs font-bold text-gray-700 mt-3"><FileText className="w-3 h-3 inline" />
                Deliverable: Offer Optimization Report (3 tested offer variations + pricing recommendations)</p>
              </div>
            </div>

            {/* Phase 6 */}
            <div className={`${neuFlat} p-6 rounded-2xl flex flex-col md:flex-row gap-4`}>
              <div className={stepCircle}>
                <div className="text-4xl font-bold text-gray-800">6</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 flex items-center gap-2"><Map className="w-4 h-4 text-gray-500" /> 90-Day Media Buying Roadmap</h4>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-2">Days 17-18</span>
                <p className="text-sm text-gray-600 mb-2">Grand Slam Market Report compilation. Campaign roadmap. Creative briefs.</p>
                <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-4">What Happens:</h4>
                <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                  <li>Compile all research into Grand Slam Market Report</li>
                  <li>Build 90-day campaign roadmap (Month 1: Validation, Month 2: Scaling, Month 3: Optimization)</li>
                  <li>Write creative briefs for each priority segment</li>
                  <li>Recommend primary/secondary ad platforms</li>
                  <li>Set KPI benchmarks (expected CTR, CPA, ROAS by segment)</li>
                  <li>Design A/B test matrix for first 30 days</li>
                </div>
                <p className="text-xs font-bold text-gray-700 mt-3"><FileText className="w-3 h-3 inline" />
                Deliverable: Grand Slam Market Intelligence Report</p>
                <p className="text-xs font-bold text-gray-700 mt-3"><FileText className="w-3 h-3 inline" />
                Deliverable: Creative Briefs </p>
                <p className="text-xs font-bold text-gray-700 mt-3"><FileText className="w-3 h-3 inline" />
                Deliverable: 90-Day Execution Roadmap</p>
              </div>
            </div>

            {/* Phase 7 */}
            <div className={`${neuFlat} p-6 rounded-2xl flex flex-col md:flex-row gap-4 md:col-span-2`}>
              <div className={stepCircle}>
                <div className="text-4xl font-bold text-gray-800">7 </div>
              </div>
              <div className="w-full">
                <h4 className="font-bold text-green-700 flex items-center gap-2"><RefreshCw className="w-4 h-4" /> Delivery + Continuous Intelligence</h4>
                <span className="text-xs font-bold text-green-500 uppercase tracking-wide block mb-2">Day 19+ (Optional Ongoing)</span>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2 font-bold">The Handoff:</p>
                    <ul className="text-sm text-gray-600 list-disc pl-4">
                      <li>90-minute presentation: We walk you through the entire report</li>
                      <li>Q&A session with your team/agency</li>
                      <li>Handoff all source files (transcripts, survey data, creative briefs)</li>
                    </ul>
                    <h4 className="font-bold text-blue-700 flex items-center gap-2 text-sm mt-4">Optional Add-On: Ongoing Intelligence Gathering</h4>
                    <div className="text-sm text-gray-600 ml-5 mb-2 mt-2">
                      <li>Monthly customer interviews (n=5) to track evolving pain points</li>
                      <li>Competitive monitoring (new entrants, messaging shifts)</li>
                      <li>Quarterly trend updates</li>
                    </div>
                  </div>
                </div>
                <div className={`mt-4 ${neuConvex} p-3 rounded-xl text-center text-green-800 font-bold text-xs md:text-sm bg-green-50`}>
                  <CheckCircle className="w-4 h-4 inline mr-2" /> Deliverable: Complete Research Package (all reports, data, briefs) ✓ Market Intelligence Audit Complete
                </div>
              </div>
            </div>
          </div>
          
           {/* ---------- INLINE NEUMORPHIC ACCORDION ---------- */}
            <div className="phase-details mt-10">
              <div className="detail-accordion max-w-4xl mx-auto">
            
                {/* Header (click toggles content) */}
                <button
                  type="button"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling;
                    if (!content) return;
                    content.classList.toggle("open");
                    // rotate the chevron inside the button
                    const chev = e.currentTarget.querySelector(".chev");
                    if (chev) chev.classList.toggle("rot");
                  }}
                  className="
                    w-full flex items-center justify-between p-4 md:p-5 rounded-2xl mb-3
                    bg-[#E0E5EC]
                    shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]
                    hover:shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]
                    transition duration-300 cursor-pointer
                  "
                  aria-expanded="false"
                >
                  <span className="flex items-center gap-3 text-left">
                    {/* ICON BUBBLE */}
                    <span
                      className="
                        flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full
                        bg-[#E0E5EC]
                        shadow-[inset_6px_6px_10px_#a3b1c6,inset_-6px_-6px_10px_#ffffff] shrink-0
                      "
                      aria-hidden
                    >
                      {/* microphone SVG */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-blue-700">
                        <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z" stroke="#1d4ed8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 11a7 7 0 0 1-14 0" stroke="#1d4ed8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 17v4" stroke="#1d4ed8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
            
                    <span className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
                      Phase 2: Decoding the Consumer
                      <span className="block text-xs text-gray-500 mt-1">Getting past the polite 'yes' to find the profitable 'why'.</span>
                    </span>
                  </span>
            
                  {/* chevron SVG */}
                  <svg className="chev w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ml-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
            
                {/* Content (initially collapsed) */}
                <div
                  className="accordion-content max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  aria-hidden="true"
                >
                  <div
                    className="
                      p-4 md:p-6 rounded-2xl mt-2
                      bg-[#E0E5EC]
                      shadow-[outset_6px_6px_12px_#a3b1c6,outset_-6px_-6px_12px_#D3D3D3]
                      border border-white/40
                    "
                  >
                    <h4 className="text-base md:text-lg font-semibold text-blue-800 mb-2">Why This Matters:</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Standard agency research asks: <em>"Would you buy this?"</em><br />
                      We ask: <em>"Walk me through the last time you tried to solve this problem. What happened?"</em>
                    </p>
            
                    <div
                      className="
                        p-4 mb-4 rounded-xl
                        bg-[#E0E5EC]
                        shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                      "
                    >
                      <h5 className="font-semibold text-gray-800 mb-2 text-sm">The Difference:</h5>
                      <p className="text-xs md:text-sm text-gray-600">
                        → People lie about future intentions <br />
                        → People tell the truth about past behavior
                      </p>
                    </div>
            
                    <h4 className="text-base md:text-lg font-semibold text-blue-800 mb-2">Our Process:</h4>
                    <div
                      className="
                        p-4 mb-4 rounded-xl
                        bg-[#E0E5EC]
                        shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                      "
                    >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-gray-700 ">
                      <li><strong className="text-blue-600">40%</strong> Recent Converters</li>
                      <li><strong className="text-blue-600">30%</strong> Churned Customers</li>
                      <li><strong className="text-blue-600">20%</strong> Near-Miss Prospects</li>
                      <li><strong className="text-blue-600">10%</strong> Long-Term Customers</li>
                    </ul>
                      </div>
                    <h5 className="font-semibold text-blue-700 mb-2 text-sm">7-Part Interview Structure:</h5>
                    <div
                      className="
                        p-4 mb-4 rounded-xl
                        bg-[#E0E5EC]
                        shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                      "
                    >
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 text-xs md:text-sm mb-6">
                      <li><strong>The Trigger Event</strong> – When did they realize they needed this?</li>
                      <li><strong>The Struggle Safari</strong> – What did they try before?</li>
                      <li><strong>The Competitive Audit</strong> – Why did alternatives fail?</li>
                      <li><strong>Value Quantification</strong> – What does this problem cost?</li>
                      <li><strong>The Decision Process</strong> – Who influenced the purchase?</li>
                      <li><strong>Outcome Reality Check</strong> – Did the solution meet expectations?</li>
                      <li><strong>Product Validation</strong> – Would X feature have helped?</li>
                    </ol>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-blue-800 mb-3">What We Extract:</h4>
            
                  <div
                    className="
                      p-4 mb-6 rounded-xl
                      bg-[#E0E5EC]
                      shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.85)]
                      border border-white/30
                    "
                  >
                    <ul className="grid gap-2">
                      {[
                        "Exact phrases they use (becomes your ad copy)",
                        "Specific pain points ranked by urgency",
                        "Objections they had before buying (becomes your FAQ)",
                        "Trigger events that create demand (becomes your targeting)",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex items-center justify-center mt-0.5 w-5 h-5 md:w-6 md:h-6 rounded-full shrink-0">
                            <svg className="w-3.5 h-3.5 text-blue-700" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.5 10.5L8.25 14L15.5 6.5" stroke="#1d4ed8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="text-xs md:text-sm text-gray-700 leading-relaxed">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
            
            
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div
                        className="
                          p-4 rounded-xl
                          bg-[#E0E5EC]
                          shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                        "
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="
                              w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E0E5EC] flex items-center justify-center shrink-0
                              shadow-[inset_6px_6px_10px_#a3b1c6,inset_-6px_-6px_10px_#ffffff]
                            "
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path d="M7 7h4v6H7zM13 7h4v6h-4z" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <p className="text-xs md:text-sm font-bold  text-gray-700 leading-relaxed">
                            <em>"I was spending 5 hours every Sunday planning outfits for the week. I tried Stitch Fix but it felt too random. I needed something that understood my actual lifestyle—not a stylist's guess."
                           </em> </p>
                        </div>
                      </div>
            
                      <div
                        className="
                          p-4 rounded-xl
                          bg-[#E0E5EC]
                          shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                        "
                      >
                        <p className="text-xs md:text-sm text-gray-700"><strong>→ Copy angle:</strong> "Stop Spending Sundays On Your Wardrobe"</p>
                        <p className="text-xs md:text-sm text-gray-700 mt-2"><strong>→ Targeting:</strong> Women age 30-45, career-focused, Sunday evening retargeting</p>
                        <p className="text-xs md:text-sm text-gray-700 mt-2"><strong>→ Objection:</strong> “This isn’t random like subscription boxes”</p>
                      </div>
                    </div>
                  </div>
                </div>
            
              </div>
            </div>
            
            {/* Minimal CSS for Accordion */}
            <style>{`
              .accordion-content.open { max-height: 2500px; }
              .chev.rot { transform: rotate(180deg); }
            `}</style>
        </div>
      </section>

      {/* ---------- COMPARISON SECTION — NEUMORPHIC + TAILWIND (INLINE) ---------- */}
      <section id="comparison" className="py-12 md:py-20 px-4 md:px-6">
        <div className="justify-center flex items-center">
          <div className={`${neuPressed} inline-block px-4 py-1 rounded-full mb-4`}>
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Know The Difference</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">The Delta: Guesswork vs. The Protocol</h2>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* LEFT: Standard Agency Research */}
            <div className={`${neuPressed} rounded-3xl p-6`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800">Standard Agency Research</h3>
                  <div className="mt-2 inline-flex items-baseline gap-3">
                    <div className="inline-flex items-center bg-white/80 px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-gray-700 shadow-sm">
                      6-8 Weeks
                      <span className="text-[10px] md:text-xs text-gray-500 ml-2">Or just skip it entirely</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.9)] shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9 2h6v2h3v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4h3V2z" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7h6" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="text-sm text-gray-700 space-y-3 mb-6">
                <ul className="list-none space-y-2">
                  {[
                    "1-hour intake call with founder",
                    "Agency fills out ICA template based on founder's hopes",
                    'Google search for "industry trends"',
                    "Check 2-3 competitor websites",
                    "Write creative brief from template",
                    "Launch within 7 days",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-white/90 shrink-0 shadow-sm text-red-500">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <span className="leading-snug text-xs md:text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="metrics-card bg-white/60 p-4 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-sm font-bold text-gray-700 mb-3">Typical First 60 Days:</h4>

                <div className="space-y-2 text-xs md:text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>CTR:</span>
                    <span>0.8-1.5% <small className="text-gray-400 block md:inline">(industry avg: 2-3%)</small></span>
                  </div>
                  <div className="flex justify-between">
                    <span>CPA:</span>
                    <span>$75-$120 <small className="text-gray-400 block md:inline">(need: $30-45)</small></span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROAS:</span>
                    <span>1.2-2.1x <small className="text-gray-400 block md:inline">(need: 3-4x minimum)</small></span>
                  </div>
                   <div className="flex justify-between">
                    <span>Message-market fit:</span>
                    <span>Unknown</span>
                  </div>
                  <div className="flex justify-between mt-2 bg-red-50 border border-red-100 rounded-md px-3 py-2">
                    <span className="font-semibold text-red-600">Wasted budget:</span>
                    <span className="font-semibold text-red-700">$15K-$35K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Arloxian Protocol */}
            <div  className={`${neuFlat} rounded-3xl p-6`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-800">Arloxian Intelligence Protocol</h3>
                  <div className="mt-2 inline-flex items-baseline gap-3">
                    <div className="inline-flex items-center bg-white/95 px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-blue-700 shadow-sm">
                      10-14 Days
                      <span className="text-[10px] md:text-xs text-gray-500 ml-2">Front-loaded intelligence</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.9)] text-blue-700 shrink-0">
                 <Microscope size={18} strokeWidth={2.2} className="text-[#1e3a8a] " aria-hidden />
                </div>
              </div>

              <div className="text-sm text-gray-700 space-y-3 mb-6">
                <ul className="list-none space-y-2">
                  {[
                    "15-20 customer interviews (Mom Test methodology)",
                    "Quantitative survey (100+ responses per segment)",
                    "Thematic coding + voice-of-customer database",
                    "Competitive perceptual mapping",
                    "Demand trajectory analysis (5-year trend data)",
                    "Value equation optimization (Hormozi framework)",
                    "Segment prioritization matrix",
                    "90-day media buying roadmap with creative briefs",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-white/90 shrink-0 shadow-sm text-green-600">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4L19 6" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <span className="leading-snug text-xs md:text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="metrics-card bg-white/60 p-4 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-sm font-bold text-gray-700 mb-3">Typical First 60 Days:</h4>

                <div className="space-y-2 text-xs md:text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>CTR:</span>
                    <span className="font-semibold text-green-700">2.8-4.5% <small className="text-gray-400 block md:inline">(above industry avg)</small></span>
                  </div>
                  <div className="flex justify-between">
                    <span>CPA:</span>
                    <span className="font-semibold text-green-700">$32-$58 <small className="text-gray-400 block md:inline">(on-target or better)</small></span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROAS:</span>
                    <span className="font-semibold text-green-700">3.2-5.8x <small className="text-gray-400 block md:inline">(profitable from Month 1)</small></span>
                  </div>
                  <div className="flex justify-between">
                    <span>Message-market fit:</span>
                    <span className="font-semibold text-gray-700">Validated pre-launch</span>
                  </div>
                  <div className="flex justify-between mt-2 bg-green-50 border border-green-100 rounded-md px-3 py-2">
                    <span className="font-semibold text-green-800">Saved opportunity cost:</span>
                    <span className="font-semibold text-green-900">$50K-$150K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-10 mx-auto p-6 w-full md:w-2/3 ${neuConvex} rounded-2xl border border-white/20`}>
          <h3 className="text-lg font-semibold text-center text-blue-800 mb-2">The Difference: We Talk To Humans Before We Talk To Algorithms</h3>
          <p className="text-sm text-gray-600 text-center mb-1">
            One methodology bets $50K that the founder's assumptions are right.<br className="hidden md:block"/>
            One spends $3K-$5K to know before betting $50K.
          </p>
          <p className="text-sm font-semibold text-gray-900 text-center mt-3">Which sounds like science?</p>
        </div>
      </section>

      {/* SECTION 5: POSITIONING */}
      <section className="py-12 md:py-20 px-4 md:px-6" id="positioning">
        <div className="justify-center flex items-center">
          <div className={`${neuPressed} inline-block px-4 py-1 rounded-full mb-4`}>
            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">The Metrics</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">This Isn't A 'Better Agency'—It's A Different Category</h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto text-sm md:text-base">
            You're choosing between two philosophies: 'Launch and Learn' vs. 'Know Before You Go.'
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Positioning Map Visual */}
            <div className={`${neuPressed} p-4 md:p-8 rounded-3xl relative h-[300px] md:h-[400px] flex items-center justify-center bg-gray-50 overflow-hidden`}>
              {/* Axes */}
              <div className="absolute left-6 md:left-8 top-8 bottom-8 w-px bg-gray-300"></div>
              <div className="absolute bottom-8 left-6 md:left-8 right-8 h-px bg-gray-300"></div>
              
              {/* Axis Labels */}
              <span className="absolute top-36 left-4 md:left-8 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase -rotate-90 origin-bottom-left">Statistical Certainty</span>
              <span className="absolute bottom-4 right-4 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase">Speed to Launch</span>

              {/* Quadrant Labels */}
              <span className="absolute top-4 right-4 text-[10px] md:text-xs font-bold text-gray-300">Certainty Before Launch</span>
              <span className="absolute bottom-12 left-10 md:left-12 text-[10px] md:text-xs font-bold text-gray-300">Assumption Based</span>

              {/* Points */}
              <div className="absolute left-[20%] top-[15%] flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <span className="text-[8px] md:text-[9px] font-bold text-gray-500 mt-1 bg-white/80 px-1 rounded">Traditional Firms ($50K)</span>
              </div>

              <div className="absolute left-[80%] md:left-[85%] top-[70%] md:top-[75%] flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <span className="text-[8px] md:text-[9px] font-bold text-red-500 mt-1 bg-white/80 px-1 rounded">Most Agencies (0 days)</span>
              </div>

              <div className="absolute left-[25%] top-[80%] flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <span className="text-[8px] md:text-[9px] font-bold text-gray-500 mt-1 bg-white/80 px-1 rounded">DIY Founder</span>
              </div>

              <div className="absolute left-[40%] md:left-[45%] top-[25%] flex flex-col items-center z-10">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <span className="text-[9px] md:text-[10px] font-bold text-blue-600 mt-1 bg-white px-2 py-1 rounded shadow border border-blue-100 text-center">⭐ ARLOXIAN PROTOCOL</span>
                <span className="text-[8px] text-gray-500 mt-0.5 bg-white/80 px-1 rounded">10-14 days, $4.5K</span>
              </div>
            </div>

            {/* Tradeoff Table */}
            <div className={`${neuFlat} p-4 md:p-8 rounded-3xl overflow-x-auto`}>
              <h3 className="text-lg font-bold text-gray-800 mb-6">The Trade-Off Matrix</h3>
              <div className="space-y-4 text-xs md:text-sm min-w-[300px]">
                <div className="grid grid-cols-3 gap-2 border-b border-gray-200 pb-2 font-bold text-gray-400 text-[10px] md:text-xs uppercase tracking-wider">
                  <div>Dimension</div>
                  <div>Launch Fast Agency</div>
                  <div>Arloxian Protocol</div>
                </div>
                
                {[
                    { dim: "Speed to Launch", bad: "🟢 5-7 days", good: "🟡 14-21 days", badClass: "text-green-600", goodClass: "text-yellow-600" },
                    { dim: "Message-Market Fit", bad: "🔴 10-20% (Guessing)", good: "🟢 70-85% (Validated)", badClass: "text-red-500", goodClass: "text-green-600" },
                    { dim: "Wasted Budget Risk", bad: "🔴 High ($15K-$50K)", good: "🟢 Low ($0-$5K)", badClass: "text-red-500", goodClass: "text-green-600" },
                    { dim: "Time to Profit", bad: "🔴 3-9 Months", good: "🟢 30-60 Days", badClass: "text-red-500", goodClass: "text-green-600" },
                    { dim: "Upfront Cost", bad: "🟢 $0 (Skipped)", good: "🔴 $4,500", badClass: "text-green-600", goodClass: "text-red-500" },
                ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 py-2 border-b border-gray-200 items-center">
                    <div className="font-bold text-gray-700">{row.dim}</div>
                    <div className={`${row.badClass} font-bold`}>{row.bad}</div>
                    <div className={`${row.goodClass} font-bold`}>{row.good}</div>
                    </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6 italic">
                Transparency: If you have unlimited budget and love testing, you don't need us. If you have one shot to get it right, you do.
              </p>
            </div>
          </div>
          <div className={`mt-12 ${neuConvex} p-8 rounded-3xl text-center max-w-4xl mx-auto`}>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-500" /> The Pareto Principle Applied To Research</h4>
            <p className="text-gray-600 text-sm mb-4">
             Most agencies operate in the 'fast but blind' quadrant. Traditional research firms operate in the 'certain but prohibitively slow' quadrant.
              The Arloxian Protocol occupies the Pareto frontier: <strong>80% of the certainty in 20% of the time.</strong> <br/><br/>You're not choosing 'best.' You're choosing  <strong> which risk you're willing to take:<br/>
            </strong>
            </p>
             <p className="text-center font-semibold text-sm">
                        → Risk of slow intelligence gathering (opportunity cost)<br/>
                        → Risk of fast but uninformed execution (wasted ad spend)
                    </p>
            
              <p className="insight-conclusion font-bold mt-4">We optimized for the middle: Fast enough to matter. Certain enough to bet on.</p>
          </div>
        </div>
      </section>

      

      {/* SECTION 7: COST OF INACTION */}
      <section className="py-12 md:py-10 px-4 md:px-6" id="cost-inaction">
        <div className="justify-center flex items-center">
          <div className={`${neuPressed} inline-block px-4 py-1 rounded-full mb-4`}>
            <span className="text-[10px] font-bold text-[#9f43c4] uppercase tracking-widest">cost-inaction</span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Every Month You Run Ads Without This Costs You <span className="text-red-600">$8,000–$25,000</span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 text-center mb-12">
            Not in research fees. In wasted ad spend targeting the wrong people with the wrong message.
          </p>

          <div className={`${neuConvex} p-4 md:p-8 rounded-[28px]`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left: calculator + breakdown */}
              <div className="calculator-card">
                <div className="calculator-content">
                  <p className="text-sm text-gray-700 mb-4">
                    If you're running ads without validated messaging:
                  </p>

                  <div className="cost-breakdown mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-3">Cost Breakdown</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>→ <strong>60–70%</strong> of spend goes to "testing" (learning what doesn't work)</li>
                      <li>→ Average time to find winning message: <strong>3–6 months</strong></li>
                      <li>→ Typical inefficiency cost: <strong>40–50%</strong> of budget</li>
                    </ul>
                  </div>

                  {/* Waste projection */}
                  <div>
                    <h4 className="font-bold text-red-500 mb-4 uppercase text-xs tracking-widest">Your Waste Projection (90 Days)</h4>

                    <div className="space-y-3">
                      {[
                        { m: "Month 1", t: "Testing wrong audiences", low: 8000, high: 12000 },
                        { m: "Month 2", t: "Iterating wrong foundation", low: 7000, high: 10000 },
                        { m: "Month 3", t: "Finally getting signal", low: 5000, high: 8000 }
                      ].map((item, i) => (
                        <div key={i} className={`${neuPressed} p-3 md:p-4 rounded-xl flex justify-between items-center border border-white/20`}>
                          <div>
                            <span className="block text-xs font-bold text-gray-600">{item.m}</span>
                            <span className="text-[10px] md:text-[11px] text-gray-500">{item.t}</span>
                          </div>

                          <div className="text-right">
                            <div className="font-bold text-red-500 text-sm md:text-base">{`$${(item.low/1000).toFixed(0)}K - $${(item.high/1000).toFixed(0)}K`}</div>
                            {/* mini bar visual */}
                            <div className="mt-2 w-24 md:w-36 h-2 rounded-full bg-white/60 overflow-hidden ml-auto">
                              <div className="h-full rounded-full" style={{ width: `${Math.round((item.low/12000)*100)}%`, background: 'linear-gradient(90deg, rgba(239,68,68,0.95), rgba(239,68,68,0.6))' }} />
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="pt-4 border-t border-gray-300 flex justify-between items-center">
                        <span className="font-bold text-gray-800 text-sm md:text-base">Total 90-Day Opportunity Cost:</span>
                        <span className="font-bold text-red-600 text-lg md:text-xl">$20,000 - $30,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: ROI and comparison */}
              <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
                <div className="mb-8 text-center md:text-left">
                  <p className="text-sm text-blue-800 font-bold mb-1">Meanwhile, Arloxian Research Cost:</p>
                  <p className="text-4xl font-bold text-gray-800">$4,500</p>
                  <p className="text-xs text-gray-500 mt-1">One-time, front-loaded intelligence</p>
                </div>

                <div className="space-y-3 text-sm">
                  <h4 className='font-bold text-xl mb-4'>The Math:</h4>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Research Investment</span>
                    <span className="font-bold text-gray-700">$4,500</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Waste Prevented (90d)</span>
                    <span className="font-bold text-green-600">$20K - $30K (conservative)</span>
                  </div>
                    
                  <div className={`${neuFlat} p-4 rounded-xl mt-4 text-center border border-white/30`}>
                    <span className="block text-xs text-[#2E8B57] font-bold uppercase tracking-widest mt-1 mb-1">Net Savings:</span>
                    <span className="text-2xl md:text-3xl font-bold text-gray-800">$15,500 - $25,500</span>
                    <div className="text-xs text-gray-500 mt-1">(Based on prevented waste vs $4,500 cost)</div>
                  </div>

                  <div className={`${neuFlat} p-4 rounded-xl mt-4 text-center border border-white/30`}>
                    <span className="block text-xs text-[#228B22] font-bold uppercase tracking-widest mt-1 mb-1">Immediate ROI</span>
                    <span className="text-2xl md:text-3xl font-bold text-green-700">344% - 566%</span>
                    <div className="text-xs text-gray-500 mt-1">(You're not buying research. You're buying $20K-$30K back.)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${neuConvex} p-6 md:p-8 pt-2 rounded-[28px] mt-10`}>
             <div className="flex flex-col items-center text-center mt-6 max-w-md mx-auto space-y-3">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-[#8A2BE2] via-[#FF69B4] to-[#FF8C00] text-transparent bg-clip-text drop-shadow-sm">
                  The Musical Chair
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                Brands often wait for the “right moment” before committing to their campaign — 
                and just like the game of musical chairs, they miss the only opportunity they have.
              </p>
            </div>

            {/* Timeline Penalty Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-12">
              <div className={`${neuFlat} p-6 rounded-2xl border-t-4 border-green-500`}>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-gray-800">Start This Month</h4>
                </div>
                <ul className="text-xs text-gray-600 space-y-2 mb-4">
                  <li>Research done: <strong>Week 3</strong></li>
                  <li>Launch: <strong>Week 4</strong></li>
                  <li>First data: <strong>30 days</strong></li>
                  <li>Profitable: <strong>60 Days</strong></li>
                </ul>
                <p className='font-bold text-sm'>Competitive Position:</p>
                <p className="text-[12px] text-green-600 font-bold">2-month head start on competitors.</p>
              </div>

              <div className={`${neuFlat} p-6 rounded-2xl border-t-4 border-yellow-500`}>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <h4 className="font-bold text-gray-800">Wait 3 Months</h4>
                </div>
                <ul className="text-xs text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                    Wasted ad spend: <strong>~$20K-$30K (testing blindly)</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                    Competitor intel: <strong>They've interviewed your customers by now</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                    Market position: <strong>Competitors have established messaging territory</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                    Team morale:<strong> 3 months of "failed" tests</strong>
                  </li>
                </ul>
              </div>

              <div className={`${neuFlat} p-6 rounded-2xl border-t-4 border-red-500`}>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <h4 className="font-bold text-gray-800">Wait 12 Months</h4>
                </div>
                  <ul className="text-xs text-gray-600 space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <X  className="w-4 h-4 shrink-0 text-red-500"/>
                      Wasted ad spend: <strong>$80K-$120K</strong>
                    </li>
                    <li className="flex items-start gap-2">
                      <X  className="w-4 h-4 shrink-0 text-red-500"/>
                      Market share: <strong>Competitors own the category positioning</strong>
                    </li>
                    <li className="flex items-start gap-2">
                      <X  className="w-4 h-4 shrink-0 text-red-500"/>
                      Agency relationship:  <strong>Likely churned through 2-3 agencies blaming "the algorithm"</strong>
                    </li>
                    <li className="flex items-start gap-2">
                      <X  className="w-4 h-4 shrink-0 text-red-500"/>
                      Founder confidence: <strong>Considering shutting down paid acquisition entirely</strong> 
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CASE STUDY */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-[#E0E5EC]" id="case-studies">
        <div className="justify-center flex items-center">
          <div className={`${neuPressed} inline-block px-4 py-1 rounded-full mb-4`}>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">case-study</span>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 md:mb-12 text-center">
            What Happens When You Know Before You Spend
          </h2>

          <div className={`${neuFlat} p-6 md:p-8 rounded-[32px] relative overflow-hidden`}>
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-bl-2xl select-none">
              SUSTAINABLE FASHION BRAND
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 mt-4 md:mt-0">
              From &quot;Eco-Friendly Basics&quot; To &quot;The Capsule Wardrobe For Busy Professionals&quot;
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
              {/* Left column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-700 text-sm mb-2 uppercase tracking-wide">The Situation</h4>
                  <p className="text-sm text-gray-600">
                    $200K revenue. Stuck at $20K/mo spend. Positioning: &quot;Sustainable fashion for conscious consumers.&quot;
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 text-sm mb-2 uppercase tracking-wide">Research Revealed</h4>
                  <ul className="text-sm text-gray-600 space-y-2 list-none">
                    <li>→ Best customers weren&apos;t eco-warriors; they were 35–45 pros tired of <strong>decision fatigue</strong>.</li>
                    <li>→ Real trigger: &quot;I waste 30 mins every morning deciding what to wear.&quot;</li>
                    <li>→ VOC Phrase: &quot;I just want 10 pieces that work together.&quot;</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-green-600 text-sm mb-2 uppercase tracking-wide">The Pivot</h4>
                  <ul className="text-sm text-gray-600 ">
                      <li>→New messaging: "The 10-Piece Capsule Wardrobe That Eliminates Morning Decision Fatigue"</li>
                      <li>→Repositioned from "eco-friendly" to "minimalist system"</li>
                      <li>→Launched "Capsule Wardrobe Quiz" funnel (based on interview insights)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-600 text-sm mb-2 uppercase tracking-wide">Timeline:</h4>
                  <ul className="text-sm text-gray-600">
                    <li>→ Research: 12 days</li>
                    <li>→ Campaign launch: Day 18</li>
                    <li>→ Profitable: Day 32</li>
                  </ul>
                </div>
              </div>

              {/* Right column: metrics card */}
              <div className={`${neuPressed} p-6 rounded-2xl flex flex-col justify-center`}>
                <h4 className="font-bold text-gray-800 text-center mb-6">Metrics Transformation</h4>

                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <p className=' text-xs md:text-sm font-semibold'>Before Arloxian Research </p>
                  <p className=' text-xs md:text-sm font-semibold'>After Research-Driven Repositioning </p>
                  <div>
                    <div className="text-xs text-gray-500"> ROAS</div>
                    <div className="text-lg md:text-xl font-bold text-red-400">2.1x</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500"> ROAS</div>
                    <div className="text-lg md:text-xl font-bold text-green-500">5.8x</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500"> CPA</div>
                    <div className="text-lg md:text-xl font-bold text-gray-400">$95</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500"> CPA</div>
                    <div className="text-lg md:text-xl font-bold text-green-500">$38</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500">Rev</div>
                    <div className="text-lg md:text-xl font-bold text-gray-400">$42K</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500"> Rev</div>
                    <div className="text-lg md:text-xl font-bold text-green-500">$116K</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-300 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">$74K/mo</div>
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">Revenue Increase</div>
                  <div className= "mt-2 text-xs md:text-sm font-bold text-green-500 uppercase tracking-widest">Research Investment: </div><strong>$4,500</strong>
                  <div className= " mt-2 text-xs md:text-sm font-bold text-green-500 uppercase tracking-widest">ROI: </div><strong>1,644%</strong> (first month alone)
                </div>
              </div>
            </div>

            <div className={`${neuConvex} p-4 rounded-xl text-center italic text-gray-600 text-xs md:text-sm`}>
              &quot;We were so focused on selling sustainability that we missed what customers actually cared about: saving time. Arloxian found that in 48 hours.&quot; — Sarah K., Founder
            </div>
          </div>
        </div>
      </section>

      {/* methodology section */}
      <section id="methodology" className="py-12 md:py-20 px-4 md:px-6">
        <div className="justify-center flex items-center">
          <div className={`${neuPressed} inline-block px-4 py-1 rounded-full mb-4`}>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Methodology</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 md:mb-12 text-center">
            The Methodology Behind The Protocol
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {/* ====================== CARD 1 — THE MOM TEST ====================== */}
            <article className={`${neuFlat} p-6 rounded-2xl`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]`}>
                  <Book className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold text-blue-600">The Mom Test</h4>
              </div>

              <p className="text-xs font-bold text-blue-800 mb-2">BY ROB FITZPATRICK</p>

              <p className="text-sm text-gray-600 mb-4">
                The gold standard for customer interview methodology. Core principle:
                ask about <strong>past behavior</strong>, not future intentions.
                People lie about what they'll do — they tell the truth about what
                they've done.
              </p>
              <div>
                <h5 className="text-sm font-semibold text-gray-800 mb-2">Our Application:</h5>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Trained interviewers in non-leading questions</li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Focus on trigger events, not product features</li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Extract voice-of-customer language for ad copy</li>
                </ul>
              </div>
            </article>

            {/* ====================== CARD 2 — ASK METHOD ====================== */}
            <article className={`${neuFlat} p-6 rounded-2xl`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]`}>
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-purple-500">The Ask Method</h4>
              </div>

              <p className="text-xs font-bold text-purple-800 mb-2">BY RYAN LEVESQUE</p>

              <p className="text-sm text-gray-600 mb-4">
                 Survey-based segmentation framework used by 8-figure brands. Instead of guessing customer segments.
                 Let customers self-identify by their primary pain point.
                 The <strong>Deep Dive Survey </strong> reveals which “bucket” each customer falls into for
                 hyper-personalized messaging.
              </p>

              <div>
                <h5 className="text-sm font-semibold text-gray-800 mb-2">Our Application:</h5>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Deploy 100+ response surveys post-interviews</li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Bucket customers by primary challenge</li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Create segment-specific creative briefs</li>
                </ul>
              </div>
            </article>

            {/* ====================== CARD 3 — VALUE EQUATION ====================== */}
            <article className={`${neuFlat} p-6 rounded-2xl`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]`}>
                  <Calculator className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-green-700">Value Equation</h4>
              </div>

              <p className="text-xs font-bold text-green-800 mb-2">BY ALEX HORMOZI</p>

              <p className="text-sm text-gray-600 mb-4">
                Mathematical framework for offer design: <br />
                <strong>Value = (Dream Outcome × Likelihood) / (Time Delay × Effort)</strong>
              </p>
              <p className="text-sm text-gray-600 mb-4">Maximize numerator (bigger promise + more proof).
              Minimize denominator (faster results + less work)</p>

              <div>
                <h5 className="text-sm font-semibold text-gray-800 mb-2">Our Application:</h5>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-green-600 shrink-0" /> Score current offers (1–10 per variable)</li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-green-600 shrink-0" /> Identify weakest link (where to improve)</li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-green-600 shrink-0" /> Redesign offer stack based on research insights</li>
                </ul>
              </div>
            </article>

          </div>
        </div>
      </section>
{/* SECTION 6: FAQ */}

  
         <FAQSection />

     
      {/* SECTION 9: CTA & FOOTER */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-t border-gray-300/50" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-center">
            <span className="bg-gradient-to-r from-[#2D2238] to-[#514067] text-transparent bg-clip-text">Stop Guessing.</span> <br className="md:hidden" />
            <span className="bg-gradient-to-r from-[#1F2547] to-[#3E4A7A] text-transparent bg-clip-text">Start Knowing.</span> <br />
            <span className="bg-gradient-to-r from-[#34243E] to-[#A06F3D] text-transparent bg-clip-text">Launch Smarter.</span>
          </h2>

          <p className="text-gray-600 mb-10 text-base md:text-lg">
            Two-week intelligence sprint. One comprehensive report. Zero more wondering if you're targeting the right people.
          </p>

          <div className="flex flex-col items-center gap-6">

            {/* Primary CTA */}
            <WhatsappCTA 
              whatsappNumber="+919910220335" 
              calendlyUrl="https://calendly.com/arlox-/strategy-call-1"
            >
              <GlassButton 
  label="Get Your Market Intelligence Audit" 
  icon={ArrowRight} 
  className="h-4 sm:h-5 transition-all duration-200"
  buttonClassName="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-100"
  onClick={() => console.log('Focus mode toggled')}
/>
            </WhatsappCTA>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]">
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" aria-hidden />
                </span>
                $4,500 Flat Fee
              </span>

              <span className="flex items-center gap-2">
                <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]">
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" aria-hidden />
                </span>
                10–14 Day Turnaround
              </span>
              
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]">
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" aria-hidden />
                </span>
                No Retainer Required
              </span>
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]">
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" aria-hidden />
                </span>
                Full Report + Source Data
              </span>
            </div>

            {/* Micro-copy */}
            <p className="mt-4 text-xs md:text-sm text-gray-500 max-w-xl px-4 text-center">
              Average client saves <strong>$20K–$30K</strong> in wasted ad spend by knowing their positioning before launch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArloxianLanding;