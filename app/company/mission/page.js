
"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
  Globe, Sparkles, Heart, Target, Zap, Award, 
  Rocket, Stars, Shield, TrendingUp, Mountain,
  CheckCircle2, ArrowRight, Infinity as InfinityIcon,
  Eye, Lightbulb, Users, Brain, Flame, Crown, 
  Compass, Telescope, Cpu
} from 'lucide-react';
import NeumorphicHero from './hero';


import ArloxProblemSolution from './problem';

import WhoWeAreSection from './who';


const ArloxVisionMission = () => {
  const [mounted, setMounted] = useState(false);
  const [starPositions, setStarPositions] = useState([]);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
    const positions = Array.from({ length: 60 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      scale: 0.5 + Math.random() * 1,
      delay: Math.random() * 3
    }));
    setStarPositions(positions);
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Neumorphic Design System
  const neuBg = "bg-[#e8ebf0]";
  const neuCard = "shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]";
  const neuInset = "shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]";
  const neuButton = "shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]";
  const neuFlat = "shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]";

  // Visible Color Palette
  const colors = {
    darkest: "#020617",
    heading: "#111827",
    slate: "#475569",
    navy: "#1e3a8a",
    deepNavy: "#1e293b",
    emerald: "#059669",
    purple: "#6366f1",
    crimson: "#dc2626",
    teal: "#0d9488",
    amber: "#f59e0b",
    yellow: "#facc15",
  };

  return (
    <div className={`w-full ${neuBg} overflow-x-hidden font-sans`}>
<NeumorphicHero/>
  

      {/* === SONY INSPIRATION === */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">

        {/* Subtle Parallax Background - Hidden on mobile */}
        <div className="hidden lg:block">
          <motion.div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
            style={{ backgroundColor: colors.navy, y: y2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full ${neuBg} ${neuButton} mb-6 sm:mb-8 border-2`}
                 style={{ borderColor: colors.amber }}>
              <Award size={16} className="sm:hidden" style={{ color: colors.amber }} />
              <Award size={20} className="hidden sm:block" style={{ color: colors.amber }} />
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest" style={{ color: colors.slate }}>
                Our Inspiration
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 px-4" style={{ color: colors.darkest }}>
              The Sony Story
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold px-4" style={{ color: colors.navy }}>
              How one man transformed a nation's global identity
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
          >

            {/* Left: Image */}
            <motion.div 
  className={`
    relative 
    rounded-2xl sm:rounded-3xl lg:rounded-[3rem] 
    overflow-hidden 
    ${neuCard} 
    bg-[#e8ebf0] 
    p-4 sm:p-6 
    group
  `}
 
  transition={{ type: "spring", stiffness: 300 }}
>
  {/* IMAGE CONTAINER */}
<div
  className="
    relative 
    aspect-[4/3] 
    rounded-xl sm:rounded-2xl 
    overflow-hidden 
    bg-[#e8ebf0]
    shadow-[inset_6px_6px_14px_rgba(163,177,198,0.45),inset_-6px_-6px_14px_rgba(255,255,255,0.85)]
  "
>
  {/* ACTUAL IMAGE */}
  <Image
    src="/japan5.jpg"
    alt="Akio Morita – Co-founder of Sony, Made in Japan"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    className="
      object-cover
      transition-transform duration-700
      group-hover:scale-[1.03]
    "
  />

  {/* EDGE VIGNETTE (premium, subtle) */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
  </div>

  {/* CAPTION */}
  <div
    className="
      absolute bottom-4 left-4 right-4
      backdrop-blur-md
      bg-white/85
      rounded-xl
      px-4 py-3
      shadow-[6px_6px_12px_rgba(163,177,198,0.45),-6px_-6px_12px_rgba(255,255,255,0.9)]
    "
  >
    <p className="text-sm sm:text-base font-black" style={{ color: colors.darkest }}>
      Akio Morita
    </p>
    <p className="text-xs sm:text-sm font-semibold text-slate-600">
      Sony Co-Founder • Made in Japan
    </p>
  </div>
</div>




            {/* Floating Badge – Neumorphic, Subtle */}
{/* <motion.div
  className="
    absolute top-4 sm:top-6 md:top-10
    left-4 sm:left-6 md:left-10
    px-3 sm:px-4 md:px-6
    py-2 sm:py-2.5 md:py-3
    rounded-full
    bg-[#e8ebf0]
    shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]
  "
  whileHover={{
    scale: 1.05,
    boxShadow:
      "inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.9)",
  }}
>
  <p
    className="text-[10px] sm:text-xs font-black uppercase tracking-wider"
    style={{ color: "#9A6B16" }}  // muted amber
  >
    Made in Japan
  </p>
</motion.div> */}

            </motion.div>

            {/* Right: Content */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed"
                style={{ color: colors.slate }}
              >
                <p>
                  After World War II, which devastated not only Japanese cities with nuclear weapons, 
                  but also completely shattered the spirit and national pride of Japanese people.
                </p>

                <p>
                  <strong style={{ color: colors.darkest }}>
                    Japan's image on the world stage was that of making cheap imitations
                  </strong>{" "}
                  of global products at that time.
                </p>

                {/* Vision Card */}
                <motion.div 
                  className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl ${neuBg} ${neuInset} border-2`}
                  style={{ borderColor: colors.amber }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <motion.div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0`}
                      style={{ backgroundColor: `${colors.amber}20` }}
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Lightbulb size={20} className="sm:hidden" style={{ color: colors.amber }} />
                      <Lightbulb size={24} className="hidden sm:block md:hidden" style={{ color: colors.amber }} />
                      <Lightbulb size={28} className="hidden md:block" style={{ color: colors.amber }} />
                    </motion.div>
                    <div>
                      <p className="font-black text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2" style={{ color: colors.darkest }}>
                        Akio Morita's Vision
                      </p>
                      <p className="text-xs sm:text-sm font-semibold" style={{ color: colors.navy }}>
                        Sony Co-Founder
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: colors.slate }}>
                    Sony co-founder Akio Morita set out to transform that perception of Japan and Japanese people. 
                    By committing to{" "}
                    <strong style={{ color: colors.darkest }}>high standards, high-quality ways of making innovative products</strong>, 
                    he aimed to ensure his kids live in a world where Japan and Japanese people are known for the most premium standards—making Sony a symbol of excellence worldwide.
                  </p>
                </motion.div>

               {/* Success Banner - MODIFIED TO NEUMORPHIC INSET */}
                            <motion.div 
                              className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden flex items-start gap-4 ${neuInset}`}
                              // NOTE: We use neuInset (gray bg with inner shadow) instead of solid green bg
                              // This allows the "pressed" effect to be visible.
                              whileHover={{ scale: 1.02 }}
                            >
                               {/* Decorative Green Glow to replace the solid background */}
                               <div 
                                 className="absolute inset-0 opacity-[0.05] pointer-events-none"
                                 style={{ backgroundColor: colors.emerald }}
                               />
              
                              <div className="shrink-0 mt-1">
                                <CheckCircle2 size={32} style={{ color: colors.emerald }} />
                              </div>
                              
                              <p className="text-lg sm:text-xl font-bold leading-tight" style={{ color: colors.emerald }}>
                                He successfully restored Japan's pride on the global stage and elevated "Made in Japan".
                              </p>
                            </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === THE PROBLEM === */}
      <ArloxProblemSolution/>
     

      {/* === WHO WE ARE === */}
      <WhoWeAreSection/>
      

      {/* === BETTER FUTURE === */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">

        <div className="hidden lg:block">
          <motion.div 
            className="absolute top-20 left-20 w-80 h-80 rounded-full opacity-[0.08]"
            style={{ backgroundColor: colors.navy, y: y1 }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full ${neuBg} ${neuButton} font-bold mb-6 sm:mb-8 border-2`}
                 style={{ color: colors.navy, borderColor: colors.navy }}>
              <Mountain size={16} className="sm:hidden" />
              <Mountain size={20} className="hidden sm:block" />
              <span className="text-xs sm:text-sm uppercase tracking-widest">The Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 px-4" style={{ color: colors.darkest }}>
              How We See<br />
              <span style={{ color: colors.navy }}>A Better Future</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] bg-white ${neuCard}`}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-8 sm:mb-10" style={{ color: colors.slate }}>
              We envision a world where{" "}
              <strong style={{ color: colors.navy }}>Indian enterprises and people</strong>{" "}
              lead the charge in{" "}
              <strong style={{ color: colors.purple }}>global innovation and integrity</strong>
              — rapidly overcoming outdated stereotypes, fighting off resistance with persistence 
              and setting a new standard of{" "}
              <strong style={{ color: colors.emerald }}>disciplined excellence</strong>.
            </p>

            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-center" style={{ color: colors.slate }}>
              By embodying these principles daily, we strive to create a new global perception of India.
            </p>

            <div 
              className={`p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl text-white ${neuCard} text-center`}
              style={{ backgroundColor: colors.navy }}
            >
              <Compass size={40} className="sm:hidden mx-auto mb-4" />
              <Compass size={48} className="hidden sm:block md:hidden mx-auto mb-5" />
              <Compass size={56} className="hidden md:block mx-auto mb-6" />
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">
                "From India" will signify:
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black" style={{ color: colors.yellow }}>
                Grace • Beauty • Quality<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Innovation • Effectiveness
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === CURRENT COMMITMENT === */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] ${neuBg} ${neuCard} border-t-4 sm:border-t-6 md:border-t-8`}
            style={{ borderColor: colors.emerald }}
          >
            <div className="text-center mb-12 sm:mb-16">
              <Flame size={48} className="sm:hidden mx-auto mb-4" style={{ color: colors.emerald }} />
              <Flame size={56} className="hidden sm:block md:hidden mx-auto mb-5" style={{ color: colors.emerald }} />
              <Flame size={64} className="hidden md:block mx-auto mb-6" style={{ color: colors.emerald }} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4" style={{ color: colors.darkest }}>
                Our Current Commitment
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-bold px-4" style={{ color: colors.emerald }}>
                To Fashion E-Commerce Brands Worldwide
              </p>
            </div>

            <div className="space-y-8 sm:space-y-10 text-base sm:text-lg md:text-xl leading-relaxed mb-12 sm:mb-16" style={{ color: colors.slate }}>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center px-4" style={{ color: colors.darkest }}>
                Our mission at Arlox is to{" "}
                <strong style={{ color: colors.emerald }}>reassure, affirm and empower</strong>{" "}
                fashion e-commerce brands to achieve{" "}
                <strong style={{ color: colors.navy }}>unstoppable and sustainable growth</strong>.
              </p>

              <p className="text-center px-4">
                By delivering{" "}
                <strong style={{ color: colors.navy }}>premium experience</strong>,{" "}
                <strong style={{ color: colors.navy }}>proactive solutions</strong>, and{" "}
                <strong style={{ color: colors.emerald }}>finishing right work ahead of deadlines</strong>,
                we redefine what clients expect from Indian businesses.
              </p>

              <div className={`p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl ${neuInset} bg-[#e8ebf0] border-2`}
                   style={{ borderColor: colors.slate }}>
                <p className="font-black text-lg sm:text-xl md:text-2xl text-center" style={{ color: colors.darkest }}>
                  Shifting the narrative from{" "}
                  <span className="line-through" style={{ color: colors.crimson }}>disorganized and cheap</span>{" "}
                  to{" "}
                  <span style={{ color: colors.emerald }}>disciplined, premium, and relentlessly focused on results</span>.
                </p>
              </div>

              <p className="text-center px-4">
                Driven by the{" "}
                <strong style={{ color: colors.purple }}>health and well-being of our team</strong>{" "}
                and a commitment to{" "}
                <strong style={{ color: colors.navy }}>transparent communication</strong>,
                we forge enduring partnerships that thrive on mutual trust and transformative success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: <Shield size={28} />, iconMobile: <Shield size={24} />, label: "Reassure & Affirm", sublabel: "Premium Experience", color: colors.navy },
                { icon: <TrendingUp size={28} />, iconMobile: <TrendingUp size={24} />, label: "Unstoppable Growth", sublabel: "Sustainable Success", color: colors.emerald },
                { icon: <Heart size={28} />, iconMobile: <Heart size={24} />, label: "Team Well-Being", sublabel: "Transparent Communication", color: colors.purple }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className={`p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white ${neuButton} text-center ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${item.color}40` }}
                >
                  <div 
                    className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                    style={{ 
                      backgroundColor: `${item.color}20`,
                      color: item.color
                    }}
                  >
                    <span className="sm:hidden">{item.iconMobile}</span>
                    <span className="hidden sm:block">{item.icon}</span>
                  </div>
                  <p className="font-black text-lg sm:text-xl mb-1 sm:mb-2" style={{ color: colors.darkest }}>
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold" style={{ color: colors.slate }}>
                    {item.sublabel}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === LANIAKEA === */}
      <section className="relative py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden">

        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: yParallax }}
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop" 
              alt="Galaxy Laniakea" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/85"></div>
          </motion.div>
        </div>

        {/* Starfield */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {starPositions.map((star, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.scale * 2}px`,
                height: `${star.scale * 2}px`,
              }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: star.delay }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="backdrop-blur-2xl bg-white/10 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-24 border border-white/20 shadow-2xl">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div 
                className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-black/30 border-2 font-bold uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10"
                style={{ color: colors.teal, borderColor: colors.teal }}
              >
                <Rocket size={16} className="sm:hidden" />
                <Rocket size={20} className="hidden sm:block" />
                Cosmic Inspiration
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 sm:mb-10 md:mb-12 tracking-tight">
                Why Go So Big?
              </h2>

              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-12 sm:mb-16">
                <p>
                  Our inspiration comes from{" "}
                  <strong style={{ color: colors.teal }}>Laniakea</strong>,
                  the colossal cosmic supercluster comprising{" "}
                  <strong style={{ color: colors.purple }}>over 100,000 galaxies</strong>{" "}
                  and spanning{" "}
                  <strong style={{ color: colors.yellow }}>500 million light-years</strong>
                  —an awe-inspiring testament to{" "}
                  <strong style={{ color: colors.emerald }}>boundless growth</strong>{" "}
                  and unstoppable expansion of the universe.
                </p>

                <div className="p-6 sm:p-8 md:p-10 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-sm">
                  <Telescope size={40} className="sm:hidden mx-auto mb-4" />
                  <Telescope size={48} className="hidden sm:block md:hidden mx-auto mb-5" />
                  <Telescope size={56} className="hidden md:block mx-auto mb-6" />
                  <p className="font-bold text-lg sm:text-xl">
                    In that cosmic spirit, we unite people, ideas, and businesses 
                    under a gravitational pull of our{" "}
                    <strong style={{ color: colors.teal }}>disciplined excellence</strong>{" "}
                    and a unique{" "}
                    <strong style={{ color: colors.purple }}>graceful way of doing</strong>{" "}
                    even the smallest, most ordinary work.
                  </p>
                </div>

                <p className="text-xl sm:text-2xl font-bold">
                  We ignite{" "}
                  <span style={{ color: colors.yellow }} className="font-black">world-class growth</span>{" "}
                  by embracing limitless positive identities, 
                  combining big dreams, advanced AI, and practical hardcore action.
                </p>
              </div>

              {/* Stats - Stack on mobile */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { number: "100k+", label: "Galaxies in Laniakea", icon: <Stars size={40} />, iconMobile: <Stars size={32} />, color: colors.teal },
                  { number: "500M", label: "Light Years Span", icon: <Rocket size={40} />, iconMobile: <Rocket size={32} />, color: colors.purple },
                  { number: "∞", label: "Our Growth Mindset", icon: <TrendingUp size={40} />, iconMobile: <TrendingUp size={32} />, color: colors.emerald }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: `0 0 30px ${stat.color}60` }}
                  >
                    <div className="mb-4 sm:mb-6" style={{ color: stat.color }}>
                      <span className="sm:hidden">{stat.iconMobile}</span>
                      <span className="hidden sm:block">{stat.icon}</span>
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-white mb-2 sm:mb-3">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-widest" 
                         style={{ color: stat.color }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default ArloxVisionMission;