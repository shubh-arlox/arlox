"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  AlertTriangle, TrendingDown, Users, EyeOff, 
  Activity, ArrowDown, BrainCircuit, XCircle, 
  Ban, ShieldAlert, Skull, ChevronDown, Lock,
  DollarSign, Target, Sparkles, TrendingUp
} from 'lucide-react';

const MetaConsequences = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px", once: true });

  // Neumorphic Styles
  const neuBg = "bg-[#e8ebf0]";
  const neuCard = "shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff]";
  const neuInset = "shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]";
  const neuFlat = "shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]";

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={sectionRef} className={`w-full ${neuBg} py-20 lg:py-32 font-sans overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* === HEADER === */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${neuBg} ${neuCard} text-red-600 font-bold text-xs uppercase tracking-widest mb-8 border border-red-100`}
          >
            <ShieldAlert size={14} />
            <span>Hidden Consequences</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-[1.1] mb-6">
            You Think You're Losing Money. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              You're Losing The War.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed mb-6">
            You think the problem is wasted ad spend. <strong className="text-slate-900">It's so much worse than that.</strong>
          </p>

          <p className="text-lg text-slate-700 font-bold">
            Every time your Meta ad dies after 3 weeks, you lose more than the $40K you burned testing it.<br/>
            <span className="text-red-600">You lose momentum. You lose market position. You lose the war.</span>
          </p>
        </div>

        {/* === THE COMPOUNDING CONSEQUENCES CASCADE === */}
        <div className="mb-24 relative">

          {/* Background Connector Lines */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block opacity-30">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 800">
              {/* Top to Split */}
              <path d="M500 80 L500 120" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 4" />
              {/* Horizontal Split */}
              <path d="M170 120 L830 120" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 4" />
              {/* Down to Three Cards */}
              <path d="M170 120 L170 180" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 4" />
              <path d="M500 120 L500 180" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 4" />
              <path d="M830 120 L830 180" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 4" />
              {/* From cards to bottom */}
              <path d="M170 580 L500 680" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 4" />
              <path d="M500 580 L500 680" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 4" />
              <path d="M830 580 L500 680" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 4" />
            </svg>
          </div>

          <motion.div 
            variants={containerVars}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="relative z-10 space-y-12 lg:space-y-0"
          >

            {/* LEVEL 1: THE TRIGGER */}
            <div className="flex justify-center mb-12 lg:mb-20">
              <motion.div 
                variants={itemVars} 
                className={`bg-white border-2 border-red-500 text-slate-900 p-6 rounded-2xl ${neuCard} max-w-md text-center relative`}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  The Trigger
                </div>
                <h3 className="text-xl font-black mt-2">Your Meta Ads Die Every 3 Weeks</h3>
                <p className="text-sm text-slate-600 mt-3">Can't scale past $50K-$80K spend without performance collapse.</p>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-red-400 bg-white rounded-full p-1 border-2 border-red-200 lg:hidden shadow-md">
                  <ArrowDown size={20} />
                </div>
              </motion.div>
            </div>

            {/* LEVEL 2: THE 3 CASCADING CONSEQUENCES */}
            <div className="grid lg:grid-cols-3 gap-8 items-start mb-12 lg:mb-20">

              {/* === CONSEQUENCE #1: ALGORITHMIC DEBT === */}
              <motion.div variants={itemVars} className="flex flex-col h-full">
                <div className={`flex-1 p-8 rounded-3xl ${neuBg} ${neuCard} border-t-4 border-blue-500`}>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                    <BrainCircuit size={24} />
                  </div>
                  <h4 className="text-xl font-black text-slate-800 mb-4">
                    Consequence #1:<br/>
                    <span className="text-blue-600">You're Training Meta's Algorithm to Fail</span>
                  </h4>

                  <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                    <p className="font-medium">
                      Every time you scale a single ad, watch it crash, and kill it, you're teaching Meta's algorithm <strong>the wrong lesson.</strong>
                    </p>

                    <div className={`p-4 rounded-xl bg-slate-100 border-l-4 border-slate-400 ${neuInset}`}>
                      <p className="font-bold text-slate-800 mb-2">The algorithm learned:</p>
                      <ul className="space-y-2 text-xs">
                        <li className="flex gap-2">
                          <XCircle size={14} className="text-slate-500 shrink-0 mt-0.5" />
                          <span>This creative works for 50,000 people (then dies)</span>
                        </li>
                        <li className="flex gap-2">
                          <XCircle size={14} className="text-slate-500 shrink-0 mt-0.5" />
                          <span>This brand can't sustain performance at scale</span>
                        </li>
                        <li className="flex gap-2">
                          <XCircle size={14} className="text-slate-500 shrink-0 mt-0.5" />
                          <span>Prioritize other advertisers with stable campaigns</span>
                        </li>
                      </ul>
                    </div>

                    <p className="font-bold text-red-700">
                      Meta's algorithm is optimizing… against you.
                    </p>

                    <div className={`p-4 rounded-xl bg-red-50 border border-red-200`}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-red-800 text-xs uppercase tracking-wide">Account Trust Score</span>
                        <TrendingDown size={16} className="text-red-600" />
                      </div>
                      <div className="w-full bg-red-200 h-3 rounded-full overflow-hidden mb-2">
                        <div className="w-[28%] bg-red-600 h-full rounded-full"></div>
                      </div>
                      <p className="text-xs text-red-700 font-bold flex items-center gap-2">
                        <Ban size={12} /> Status: UNSTABLE - Flagged for Deprioritization
                      </p>
                    </div>

                    <p>
                      Your account is now flagged (invisibly) as <strong>"unstable."</strong> Your CPMs are higher than competitors. Your delivery is deprioritized.
                    </p>

                    <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <p className="text-xs font-bold text-orange-900">
                        You created an <strong>algorithmic debt</strong> you don't even know exists. And every failed scale attempt makes it worse.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* === CONSEQUENCE #2: ORGANIZATIONAL ROT === */}
              <motion.div variants={itemVars} className="flex flex-col h-full">
                <div className={`flex-1 p-8 rounded-3xl ${neuBg} ${neuCard} border-t-4 border-orange-500`}>
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6 text-orange-600">
                    <Users size={24} />
                  </div>
                  <h4 className="text-xl font-black text-slate-800 mb-4">
                    Consequence #2:<br/>
                    <span className="text-orange-600">Your Team Is Burning Out</span>
                  </h4>

                  <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                    <p className="font-bold text-orange-700">Your media buyer is exhausted.</p>

                    <p>
                      They test <strong>40+ creative variations per month.</strong>
                    </p>

                    <div className={`p-4 rounded-xl bg-slate-100 ${neuInset}`}>
                      <ul className="space-y-2 text-xs">
                        <li className="flex justify-between">
                          <span>Fail immediately:</span>
                          <span className="font-black text-red-600">80%</span>
                        </li>
                        <li className="flex justify-between border-t border-slate-200 pt-2">
                          <span>Work briefly then die:</span>
                          <span className="font-black text-orange-600">15%</span>
                        </li>
                        <li className="flex justify-between border-t border-slate-200 pt-2">
                          <span>Might be winners:</span>
                          <span className="font-black text-emerald-600">5%</span>
                        </li>
                      </ul>
                      <p className="text-xs text-slate-500 mt-3 italic">
                        (But you can't tell which until you scale them and watch most die too)
                      </p>
                    </div>

                    <p>
                      They're working <strong className="text-red-600">60-hour weeks</strong> generating… <strong>nothing strategic.</strong>
                    </p>

                    <ul className="space-y-2 bg-orange-50 p-4 rounded-xl border border-orange-200">
                      <li className="flex gap-2 items-start">
                        <XCircle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                        <span>No compounding knowledge</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <XCircle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                        <span>No systematic improvement</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <XCircle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                        <span>Just endless testing with no framework</span>
                      </li>
                    </ul>

                    <p className="font-medium">
                      Your creative team? They're churning out random variations with no clear direction.
                    </p>

                    <div className="p-3 bg-slate-100 rounded-lg italic text-xs text-slate-600 space-y-1">
                      <p>"Try this hook."</p>
                      <p>"Make the background blue."</p>
                      <p>"Add more lifestyle shots."</p>
                    </div>

                    <p className="font-bold text-red-700">
                      Nobody knows what actually works. So everyone is guessing.
                    </p>

                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <p className="text-xs font-bold text-red-900">
                        Burnout is inevitable. Talent leaves. You restart with new people who have to learn the same painful lessons. <strong>Your organizational knowledge never compounds.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* === CONSEQUENCE #3: ATTENTION WAR === */}
              <motion.div variants={itemVars} className="flex flex-col h-full">
                <div className={`flex-1 p-8 rounded-3xl ${neuBg} ${neuCard} border-t-4 border-red-600`}>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6 text-red-600">
                    <EyeOff size={24} />
                  </div>
                  <h4 className="text-xl font-black text-slate-800 mb-4">
                    Consequence #3:<br/>
                    <span className="text-red-600">You're Losing the Attention War</span>
                  </h4>

                  <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                    <p className="font-medium">
                      Every fashion brand is fighting for the same eyeballs on Meta.<br/>
                      <strong className="text-slate-900">The brands that win are the ones that own the feed.</strong>
                    </p>

                    <div className={`p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500`}>
                      <p className="font-bold text-blue-900 mb-2 text-xs">When your ideal customer opens Instagram, whose ads do they see?</p>
                      <p className="text-xs text-blue-700">
                        Right now? <strong>Probably your competitor's.</strong>
                      </p>
                    </div>

                    <p>
                      Because they're scaled to <strong className="text-emerald-600">$200K-$500K monthly spend</strong>, deploying <strong>50+ creative angles</strong>, showing up everywhere.
                    </p>

                    <p className="font-bold text-red-700">
                      You? You're running 3-5 ads that die every 3 weeks.<br/>
                      Your brand is invisible while they're omnipresent.
                    </p>

                    <div className={`p-4 rounded-xl ${neuInset} bg-white`}>
                      <div className="mb-4">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="font-semibold text-slate-600">Competitor Visibility</span>
                          <span className="font-black text-emerald-600">OMNIPRESENT</span>
                        </div>
                        <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                          <div className="w-[92%] bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full shadow-inner"></div>
                        </div>
                        <p className="text-[10px] text-emerald-600 mt-1 font-bold">$200K-500K/mo | 50+ angles | Always in feed</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="font-semibold text-slate-600">Your Visibility</span>
                          <span className="font-black text-red-600">INVISIBLE</span>
                        </div>
                        <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                          <div className="w-[12%] bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full shadow-inner"></div>
                        </div>
                        <p className="text-[10px] text-red-600 mt-1 font-bold">$50K/mo | 3-5 dying ads | Rarely seen</p>
                      </div>
                    </div>

                    <p className="font-medium">
                      In 12 months, when your ideal customer thinks <em>"fashion brand in [your category]"</em>, they think of <strong className="text-emerald-600">your competitor.</strong>
                    </p>

                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <p className="text-xs font-bold text-red-900">
                        You lost the mental market share war before you even realized it was happening.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* LEVEL 3: TERMINAL CONSEQUENCE */}
            <div className="flex justify-center">
              <motion.div 
                variants={itemVars} 
                className={`bg-slate-900 text-white p-8 md:p-10 rounded-3xl ${neuCard} max-w-3xl text-center relative border border-slate-800`}
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <Skull size={18} /> Game Over
                </div>
                <h3 className="text-2xl md:text-4xl font-black mb-4 mt-2 leading-tight">
                  Competitor Becomes Category Leader.<br/>
                  <span className="text-red-400">You Become Irrelevant.</span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  In 12 months, you'll be so far behind that no amount of "trying harder" will close the gap.
                </p>
              </motion.div>
            </div>

          </motion.div>
        </div>

        {/* === THE BRUTAL BOTTOM LINE === */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-slate-800">The Brutal Bottom Line</h3>

            <p className="text-lg text-slate-700 leading-relaxed">
              This isn't just about wasted ad spend.<br/>
              <strong className="text-slate-900">This is about losing the entire game.</strong>
            </p>

            <p className="text-slate-600 leading-relaxed">
              While you're stuck testing random ads hoping something finally scales, your competitors who understand Meta's 2025 algorithm are:
            </p>

            <ul className="space-y-3">
              {[
                { icon: <TrendingUp size={20} className="text-emerald-500" />, text: "Scaling 3-5x while maintaining ROAS" },
                { icon: <BrainCircuit size={20} className="text-blue-500" />, text: "Building algorithmic advantages you can't catch" },
                { icon: <Target size={20} className="text-purple-500" />, text: "Dominating customer attention in the feed" },
                { icon: <Sparkles size={20} className="text-amber-500" />, text: "Moving upmarket to premium products" },
                { icon: <Activity size={20} className="text-emerald-500" />, text: "Compounding growth month after month" }
              ].map((item, i) => (
                <li key={i} className={`flex items-start gap-3 p-4 rounded-xl ${neuBg} ${neuFlat}`}>
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <span className="font-medium text-slate-700">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <p className="font-bold text-red-900 flex items-start gap-3 text-lg">
                <AlertTriangle className="shrink-0 mt-1" size={24} />
                <span>
                  The gap between you and them is growing every single day. In 12 months, you'll be so far behind that no amount of "trying harder" will close it.
                </span>
              </p>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <p className="text-xl font-black leading-relaxed">
                You don't have a Meta ads problem.<br/>
                <span className="text-red-400">You have an existential business problem.</span><br/>
                <span className="text-slate-400 text-base font-normal">And the clock is ticking.</span>
              </p>
            </div>
          </div>

          {/* === THE CHART VISUAL === */}
          <div className={`p-8 rounded-3xl bg-white ${neuFlat} relative overflow-hidden`}>
            <div className="absolute top-6 right-6 text-xs font-bold text-slate-400 uppercase tracking-widest">12-Month Projection</div>

            <div className="mt-12 relative h-72 border-l-2 border-b-2 border-slate-300">

              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 -translate-x-full pr-3 text-xs text-slate-500 font-medium">$500K</div>
              <div className="absolute left-0 top-1/2 -translate-x-full pr-3 text-xs text-slate-500 font-medium">$200K</div>
              <div className="absolute left-0 bottom-0 -translate-x-full pr-3 text-xs text-slate-500 font-medium">$50K</div>

              {/* Competitor Line (Exponential) */}
              <svg className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="competitorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M0,260 Q100,250 200,180 T400,20" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M0,260 Q100,250 200,180 T400,20" 
                  fill="none" 
                  stroke="url(#competitorGlow)" 
                  strokeWidth="20" 
                  strokeLinecap="round"
                  className="blur-md"
                />
              </svg>
              <div className="absolute top-[10px] right-0 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl text-sm font-black shadow-md border border-emerald-200">
                <div className="text-xs text-emerald-600 font-normal mb-0.5">Competitor</div>
                Scaling Exponentially
              </div>

              {/* Your Line (Flat/Declining) */}
              <svg className="absolute inset-0 w-full h-full overflow-visible">
                <path 
                  d="M0,250 Q100,248 200,255 T400,260" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                  strokeDasharray="10 8"
                />
              </svg>
              <div className="absolute bottom-[10px] right-0 bg-red-100 text-red-700 px-4 py-2 rounded-xl text-sm font-black shadow-md border border-red-200">
                <div className="text-xs text-red-600 font-normal mb-0.5">You</div>
                Stuck & Declining
              </div>
            </div>

            <div className="flex justify-between mt-4 text-xs text-slate-400 font-semibold">
              <span>Today</span>
              <span>Month 6</span>
              <span>Month 12</span>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">The Compounding Gap:</strong> While you're stuck at $50K testing random creatives, they've built systematic advantages that compound monthly.
              </p>
            </div>
          </div>

        </div>

        {/* === FINAL WARNING === */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl shadow-red-500/40 text-white max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lock size={24} />
              <span className="font-black text-red-100 uppercase tracking-widest text-sm">Urgent Warning</span>
            </div>
            <p className="text-2xl md:text-3xl font-black leading-tight">
              This Isn't Fixable By "Trying Harder."
            </p>
            <p className="text-xl md:text-2xl font-bold mt-2 text-red-100">
              This Requires Rebuilding Your Entire Meta Approach.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MetaConsequences;
