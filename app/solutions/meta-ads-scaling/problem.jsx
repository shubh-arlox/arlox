"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertOctagon, AlertTriangle, RefreshCw, XCircle, ArrowRight,
  Search, Target, Zap, Activity, Users, Ban, 
  HelpCircle, DollarSign, TrendingDown, Skull, Heart, Clock, Flame,
  
  RotateCcw
} from 'lucide-react';
import ProtocolBadge from '@/components/ProtocolBadge';

const MetaDeathCycle = () => {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev === 4 ? 1 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Neumorphic Styles
  const neuBg = "bg-[#e8ebf0]";
  const neuCard = "shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]";
  const neuInset = "shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]";
  const neuButton = "shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]";

  const phases = {
  1: {
    title: "The Winner",
    sub: "Day 1–7",
    desc: "Meta finds ~50,000 people who resonate with this creative angle. Performance is beautiful.",
    stats: { roas: "5.2x", cpm: "$22", freq: "2.1x", ctr: "2.6%" },
    color: "text-emerald-600",
    status: "OPTIMAL",
    lightColor: "bg-emerald-500",
    moodIcon: Flame,
    moodTone: "text-emerald-600",
    saturation: 15
  },
  2: {
    title: "The Scale",
    sub: "Day 8–14",
    desc: "You 3x budget. Algorithm doesn’t find NEW people—it hammers the SAME 50K harder.",
    stats: { roas: "3.9x", cpm: "$28", freq: "3.8x", ctr: "1.9%" },
    color: "text-amber-600",
    status: "SATURATING",
    lightColor: "bg-amber-500",
    moodIcon: AlertTriangle,
    moodTone: "text-amber-600",
    saturation: 40
  },
  3: {
    title: "The Crash",
    sub: "Day 15–21",
    desc: "Same people have seen your ad 6–8 times. They’re annoyed. They scroll past.",
    stats: { roas: "2.3x", cpm: "$38", freq: "7.2x", ctr: "0.7%" },
    color: "text-red-600",
    status: "CRITICAL",
    lightColor: "bg-red-600",
    moodIcon: Skull,
    moodTone: "text-red-600",
    saturation: 100
  },
  4: {
    title: "The Reset",
    sub: "Day 22–28",
    desc: "Ad killed. Testing random creatives again. $40K burned. Lessons learned: None.",
    stats: { roas: "—", cpm: "—", freq: "—", ctr: "—" },
    color: "text-slate-500",
    status: "REBOOTING",
    lightColor: "bg-slate-400",
    moodIcon: RotateCcw,
    moodTone: "text-slate-500",
    saturation: 0
  }
};
  const MoodIndicator = ({ phase }) => {
  const Icon = phase.moodIcon;

  return (
    <div className="flex items-center gap-2">
      <Icon
        size={18}
        className={`${phase.moodTone}`}
        strokeWidth={2.2}
      />
      <span className={`text-xs font-bold tracking-wider ${phase.color}`}>
        {phase.status}
      </span>
    </div>
  );
};


  const current = phases[phase];

  return (
    <section className={`w-full ${neuBg} py-16 md:py-24 font-sans overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* === HEADER === */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          
         
           <ProtocolBadge
  label="The Problem"
  icon={AlertOctagon}
  iconColor="#dc2743"
 
/>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-800 leading-[1.1] mt-4 mb-6"
          >
            Your Meta "Winners" <br/>
            <span className="text-red-500 underline decoration-straight decoration-red-300">Die in 3 Weeks</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-700 font-bold max-w-3xl mx-auto mb-4"
          >
            This isn't persistence or "more testing."<br/>
            <span className="text-slate-900">This is delusion dressed up as effort.</span>
          </motion.p>
        </div>

        {/* === THE STORY / POST-MORTEM === */}
{/* === THE STORY === */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className={`max-w-4xl mx-auto p-8 md:p-10 rounded-3xl ${neuBg} ${neuCard} mb-16`}
>
  <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-6">
    Let’s talk about last month.
  </h3>

  <p className="text-lg text-slate-700 mb-4">
    You finally cracked it. After weeks of testing, you had a Meta ad printing a{" "}
    <strong className="text-emerald-600">5.2x ROAS</strong>.
  </p>

  <p className="text-lg text-slate-700 mb-8">
    You did what every “expert” says:
    <strong className="text-slate-900"> you scaled the budget.</strong>
  </p>

  {/* Timeline */}
  <div className="space-y-4">
    {[
      { week: "Week 1", roas: "4.8x", status: "Still performing. Cautiously optimistic.", color: "emerald" },
      { week: "Week 2", roas: "3.9x", status: "Probably just variance.", color: "yellow" },
      { week: "Week 3", roas: "2.3x", status: "What the hell happened?", color: "orange" },
      { week: "Week 4", roas: "Dead", status: "You kill the ad and head back to testing.", color: "red" }
    ].map((item, i) => (
      <div
        key={i}
        className={`
          flex items-start gap-4 p-5 rounded-2xl
          bg-[#E0E5EC]
          shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]
          border-l-4 border-${item.color}-500
        `}
      >
        {/* Week label */}
        <div className="text-xs font-black tracking-wider text-slate-500 min-w-[70px] pt-1">
          {item.week}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className={`text-lg font-black text-${item.color}-600 mb-1`}>
            ROAS: {item.roas}
          </div>
          <div className="text-sm text-slate-600 leading-relaxed">
            {item.status}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Conclusion */}
  <div
    className="
      mt-8 p-6 rounded-2xl
      bg-[#E0E5EC]
      shadow-[inset_8px_8px_16px_rgba(163,177,198,0.65),inset_-8px_-8px_16px_rgba(255,255,255,0.85)]
      border-l-4 border-red-500
    "
  >
    <p className="text-lg font-bold text-slate-800 leading-relaxed">
      You just spent{" "}
      <strong className="text-red-600">$40,000</strong> and an entire month to
      discover your “winner”{" "}
      <span className="text-slate-900 font-black">wasn’t scalable.</span>
    </p>
  </div>
</motion.div>



        {/* === THE CYCLE === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto p-8 rounded-3xl ${neuBg} ${neuCard} mb-16 border-l-4 border-orange-500`}
        >
          <h3 className="text-2xl font-black text-slate-800 mb-4">This Is Happening to You Right Now</h3>

          <p className="text-lg text-slate-700 mb-6">You're trapped in the cycle:</p>

          <div className={`p-6 rounded-2xl ${neuBg} ${neuInset} mb-6`}>
            <div className="flex items-center gap-3 flex-wrap justify-center text-center">
              <span className="text-slate-700 font-semibold text-sm">Find a winner</span>
              <ArrowRight className="text-slate-400" size={18} />
              <span className="text-slate-700 font-semibold text-sm">Scale budget</span>
              <ArrowRight className="text-slate-400" size={18} />
              <span className="text-red-600 font-semibold text-sm">Performance dies</span>
              <ArrowRight className="text-slate-400" size={18} />
              <span className="text-slate-700 font-semibold text-sm">Kill it</span>
              <ArrowRight className="text-slate-400" size={18} />
              <span className="text-slate-700 font-semibold text-sm">Test new creative</span>
              <RefreshCw className="text-orange-500" size={20} />
            </div>
          </div>

          <div className={`p-5 rounded-xl bg-orange-50 border-2 border-orange-300`}>
            <p className="text-lg text-slate-800">
              You don't have a "Meta scaling" problem.<br />
              You have a <strong className="text-orange-700">creative exhaustion</strong> problem.
            </p>
          </div>
        </motion.div>

        {/* === THE DIAGNOSTIC CONSOLE (Main Visual) === */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-800 text-center mb-3"
          >
            The 21-Day Death Cycle
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 text-center mb-10"
          >
            How Meta ads die predictably when scaled traditionally.
          </motion.p>
          {/* Phase Selector */}
          <div className="flex justify-center mb-10">
            <div className={`${neuBg} px-2 py-1.5 rounded-full flex gap-1.5 ${neuButton}`}>
              {[1, 2, 3, 4].map((p) => (
                <button
                  key={p}
                  onClick={() => setPhase(p)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    phase === p 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                      : 'text-slate-600'
                  }`}
                >
                  Phase {p}
                </button>
              ))}
            </div>
          </div>

          <div className={`relative w-full rounded-[3rem] ${neuCard} border-4 border-[#e8ebf0] p-2 ${neuBg} mb-8`}>
            <div className={`rounded-[2.5rem] bg-slate-100 border border-slate-200 overflow-hidden relative min-h-[600px] lg:min-h-[500px] flex flex-col lg:flex-row`}>

              {/* LEFT PANEL: Narrative */}
              <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200 relative z-10 bg-slate-50/50 backdrop-blur-sm">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
  <span
    className={`text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-wider text-white ${current.lightColor}`}
  >
    {current.sub}
  </span>

  <MoodIndicator phase={current} />
</div>


                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h3 className="text-4xl font-black text-slate-800 mb-3">
                        {current.title}
                      </h3>
                      <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${current.color}`}>
                        {current.status}
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        {current.desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Live Metrics */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">ROAS</div>
                      <div className={`text-3xl font-black transition-colors duration-500 ${current.color}`}>
                        {current.stats.roas}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">CPM</div>
                      <div className={`text-2xl font-bold transition-colors duration-500 ${phase >= 3 ? 'text-red-600' : 'text-slate-700'}`}>
                        {current.stats.cpm}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Frequency</div>
                      <div className={`text-xl font-bold transition-colors duration-500 ${phase >= 3 ? 'text-red-600' : 'text-slate-700'}`}>
                        {current.stats.freq}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">CTR</div>
                      <div className={`text-xl font-bold transition-colors duration-500 ${phase >= 3 ? 'text-red-600' : 'text-slate-700'}`}>
                        {current.stats.ctr}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL: Audience Grid */}
              <div className="lg:w-7/12 bg-slate-900 relative p-8 lg:p-12 flex flex-col items-center justify-center overflow-hidden">

                {/* Grid Background */}
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                </div>

                {/* Audience Grid */}
                <div className="relative z-10 w-full max-w-md aspect-square">
                  <div className="grid grid-cols-10 grid-rows-10 gap-2 h-full w-full">
                    {Array.from({ length: 100 }).map((_, i) => (
                      <AudienceNode key={i} index={i} phase={phase} saturation={current.saturation} />
                    ))}
                  </div>

                  {/* Center Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-slate-900/90 backdrop-blur border border-white/10 px-6 py-3 rounded-xl shadow-2xl text-center">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Audience Pool</div>
                      <div className={`text-xl font-black transition-colors duration-500 ${current.color === 'text-slate-500' ? 'text-white' : current.color}`}>
                        {phase === 1 ? "Converting" : phase === 2 ? "Compressing" : phase === 3 ? "SATURATED" : "Resetting..."}
                      </div>
                      <div className="text-2xl mt-1">{current.mood}</div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-8 flex items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div> Cold
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div> Buyer
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]"></div> Burnout
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* THE TRAP */}
          <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="max-w-4xl mx-auto relative"
>
  {/* Outer Trap Frame */}
  <div
    className="
      relative rounded-[2.5rem] p-8 md:p-10
      bg-[#E0E5EC]
      shadow-[10px_10px_20px_rgba(163,177,198,0.7),-10px_-10px_20px_rgba(255,255,255,0.9)]
      border border-white/40
    "
  >
    {/* Subtle danger aura */}
    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-red-500/5 via-transparent to-transparent pointer-events-none" />

    {/* Inset Core */}
    <div
      className="
        relative rounded-3xl p-8 text-center
        bg-[#E0E5EC]
        shadow-[inset_8px_8px_16px_rgba(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.85)]
      "
    >
      {/* Title */}
      <h4 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 tracking-tight">
        The Saturation Trap
      </h4>

      {/* Message */}
      <p className="text-lg md:text-xl font-semibold text-slate-700 leading-relaxed max-w-2xl mx-auto">
        You’re not scaling.
        <br />
        <span className="text-red-600 font-black">
          You’re recycling the same audience
        </span>{" "}
        until performance collapses.
      </p>

      {/* Diagnostic footer */}
      <div className="mt-6 flex justify-center gap-3 text-xs font-bold text-slate-500">
        <span className="px-3 py-1 rounded-full bg-[#E0E5EC] shadow-inner">
          CPM ↑
        </span>
        <span className="px-3 py-1 rounded-full bg-[#E0E5EC] shadow-inner">
          Frequency ↑
        </span>
        <span className="px-3 py-1 rounded-full bg-[#E0E5EC] shadow-inner">
          ROAS ↓
        </span>
      </div>
    </div>
  </div>
</motion.div>

        </div>

        {/* === WHAT'S ACTUALLY KILLING === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto p-8 rounded-3xl ${neuBg} ${neuCard} mb-16`}
        >
          <h3 className="text-2xl font-black text-slate-800 mb-6">What's Actually Killing Your Meta Ads</h3>

          <div className="space-y-4 text-slate-700">
            <div className={`p-5 rounded-xl ${neuInset} ${neuBg}`}>
              <div className="font-bold text-emerald-700 mb-2">Week 1–2:</div>
              <p>Meta finds ~<strong>50,000 people</strong> who resonate with that specific angle. They click. They buy. Performance looks amazing.</p>
            </div>

            <div className={`p-5 rounded-xl ${neuInset} ${neuBg}`}>
              <div className="font-bold text-amber-700 mb-2">Week 3:</div>
              <p>You 3x the budget. Meta doesn't magically unlock new buyers. It shows <strong>the same ad, to the same 50K people</strong>, more often.</p>
            </div>

            <div className={`p-5 rounded-xl bg-red-50 border-l-4 border-red-500`}>
              <div className="font-bold text-red-700 mb-3">Week 4:</div>
              <p className="mb-3">That audience has now seen your ad <strong>6–8 times</strong>. They're bored. They scroll past.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-slate-600 text-xs">Frequency:</span>
                  <div className="font-black text-red-600">7.2x</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-slate-600 text-xs">CPM:</span>
                  <div className="font-black text-red-600">+73%</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-slate-600 text-xs">CTR:</span>
                  <div className="font-black text-red-600">0.7%</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-slate-600 text-xs">ROAS:</span>
                  <div className="font-black text-red-600">DEAD</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-6 p-5 rounded-xl bg-slate-900 text-white`}>
            <p className="text-xl font-black">
              You didn't scale. You <span className="text-red-400">suffocated one small audience segment</span>.
            </p>
          </div>
        </motion.div>

        {/* === OPPORTUNITY COST === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto p-8 rounded-3xl bg-slate-900 text-white ${neuCard} mb-16`}
        >
          <h4 className="text-2xl font-black mb-6 text-center">What You Lost While Stuck in This Loop</h4>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className={`p-5 rounded-xl bg-red-900/30 border-2 border-red-500`}>
              <div className="text-sm text-red-300 mb-2 font-semibold">YOUR PATH</div>
              <div className="text-3xl font-black text-red-400 mb-2">$50K</div>
              <div className="text-sm text-slate-300">Stuck running loops. No progress.</div>
            </div>

            <div className={`p-5 rounded-xl bg-emerald-900/30 border-2 border-emerald-500`}>
              <div className="text-sm text-emerald-300 mb-2 font-semibold">COMPETITOR PATH</div>
              <div className="text-3xl font-black text-emerald-400 mb-2">$50K → $200K</div>
              <div className="text-sm text-slate-300">Using creative velocity.</div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {[
              { label: "Time wasted:", value: "90+ days" },
              { label: "Capital burned:", value: "$120K+" },
              { label: "Growth:", value: "ZERO" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                <span className="text-slate-300">{item.label}</span>
                <span className="font-black text-red-400">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-5 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50">
            <p className="text-lg font-bold text-orange-200">
              Every 21 days you spend in this loop, your competitor pulls further ahead.
            </p>
          </div>
        </motion.div>

        {/* === THE EXPENSIVE TRUTH === */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl ${neuBg} ${neuCard}`}
          >
            <div className={`w-12 h-12 rounded-xl ${neuBg} ${neuButton} flex items-center justify-center mb-6 text-slate-600`}>
              <Zap size={24} fill="currentColor" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4">Meta's Andromeda Update</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The algorithm doesn't work like it used to. When you show the same ad, it keeps finding the <strong className="text-slate-900">same TYPE of people</strong> who respond to that specific creative signal.
            </p>
            <div className={`p-4 ${neuInset} rounded-xl text-sm font-medium text-slate-700`}>
              "Increasing budget doesn't unlock new audiences. It just hammers the same audience harder."
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl ${neuBg} ${neuCard}`}
          >
            <div className={`w-12 h-12 rounded-xl ${neuBg} ${neuButton} flex items-center justify-center mb-6 text-red-500`}>
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4">The Worst Part: Self-Blame</h3>
            <p className="text-slate-600 leading-relaxed mb-4 italic text-sm">
              "Maybe our product isn't unique enough?"<br/>
              "Maybe our audience is too competitive?"<br/>
              "Maybe we need a bigger budget?"
            </p>
            <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
              <p className="text-slate-800 font-bold">
                None of these are true. Your product is fine. <span className="text-blue-700">Your scaling strategy is broken.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* === THE COST === */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-black text-slate-800">What This Cycle Costs You</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <CostCard 
            icon={<DollarSign size={24} className="text-red-500" />}
            title="Burned Cash"
            desc="You burn $30-50K/mo on ads that die before they ever truly scale."
            neuBg={neuBg}
            neuCard={neuCard}
            neuInset={neuInset}
          />
          <CostCard 
            icon={<Activity size={24} className="text-red-500" />}
            title="Zero Compounding"
            desc="You're constantly rebuilding campaigns instead of compounding growth."
            neuBg={neuBg}
            neuCard={neuCard}
            neuInset={neuInset}
          />
          <CostCard 
            icon={<RefreshCw size={24} className="text-red-500" />}
            title="Exhaustion"
            desc="Your team is tired of testing random variations with no framework."
            neuBg={neuBg}
            neuCard={neuCard}
            neuInset={neuInset}
          />
        </div>

      </div>
    </section>
  );
};

// === SUB-COMPONENTS ===

const AudienceNode = ({ index, phase, saturation }) => {
  const isTarget = (index * 7) % 100 < saturation;

  let color = "bg-slate-800";
  let scale = 1;
  let pulse = false;
  let glow = "";

  if (phase === 1 && isTarget) {
    color = "bg-emerald-500";
    glow = "shadow-[0_0_10px_#10b981]";
    scale = 1.2;
  } 
  else if (phase === 2 && isTarget) {
    color = "bg-emerald-400";
    glow = "shadow-[0_0_15px_#34d399]";
    scale = 1.3;
  } 
  else if (phase === 3 && isTarget) {
    color = "bg-red-500";
    glow = "shadow-[0_0_15px_#ef4444]";
    scale = 0.9;
    pulse = true;
  }

  return (
    <motion.div 
      className={`rounded-full transition-all duration-700 ${color} ${glow} ${pulse ? 'animate-pulse' : ''}`}
      animate={{ scale }}
      transition={{ duration: 0.5 }}
    />
  );
};

const CostCard = ({ icon, title, desc, neuBg, neuCard, neuInset }) => (
  <div className={`${neuBg} p-6 rounded-2xl ${neuCard} border border-white hover:border-red-100 transition-colors group`}>
    <div className={`w-12 h-12 rounded-xl ${neuBg} ${neuInset} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h4 className="font-bold text-slate-800 mb-2 text-lg">{title}</h4>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default MetaDeathCycle;
