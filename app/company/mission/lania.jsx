"use client"
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Telescope, Stars, TrendingUp } from 'lucide-react';

const LaniakeaVision = () => {
  // Parallax Setup
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Theme Colors
  const colors = {
    teal: '#2dd4bf',
    purple: '#a855f7',
    yellow: '#fbbf24',
    emerald: '#34d399',
  };

  // State for stars to avoid hydration mismatch
  const [starPositions, setStarPositions] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Generate stars on client side only
    const stars = Array.from({ length: 30 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,        // Defined here as 'size'
      duration: 2 + Math.random() * 3,    // Random duration for twinkling
      delay: Math.random() * 5,           // Defined here as 'delay'
    }));
    setStarPositions(stars);
    setIsMounted(true);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden bg-slate-900">

      {/* Parallax Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 h-[120%]" 
        >
          <img 
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop" 
            alt="Galaxy Laniakea" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
        </motion.div>
      </div>

      {/* Animated Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {isMounted && starPositions.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,   // Fixed: using star.size
              height: `${star.size}px`,  // Fixed: using star.size
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ 
              duration: star.duration, 
              repeat: Infinity, 
              delay: star.delay          // Fixed: using star.delay
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-2xl bg-white/5 rounded-3xl lg:rounded-[3rem] p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl"
        >

          <div className="text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/40 border border-white/10 font-bold uppercase tracking-widest text-xs sm:text-sm mb-10"
              style={{ color: colors.teal }}
            >
              <Rocket size={16} />
              <span>Cosmic Inspiration</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-10 tracking-tight">
              Why Go So Big?
            </h2>

            <div className="space-y-10 text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-16">
              <p>
                Our inspiration comes from <strong className="text-white">Laniakea</strong>, the colossal cosmic supercluster comprising <strong style={{ color: colors.purple }}>over 100,000 galaxies</strong> and spanning <strong style={{ color: colors.yellow }}>500 million light-years</strong>—an awe-inspiring testament to <strong style={{ color: colors.emerald }}>boundless growth</strong> and unstoppable expansion of the universe.
              </p>
              
              {/* Highlight Box */}
              <div className="p-8 sm:p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                <Telescope size={48} className="mx-auto mb-6 text-white/50" />
                <p className="font-medium">
                  In that cosmic spirit, we unite people, ideas, and businesses 
                  under a gravitational pull of our <strong style={{ color: colors.teal }}>disciplined excellence</strong> and a unique <strong style={{ color: colors.purple }}>graceful way of doing</strong> even the smallest, most ordinary work.
                </p>
              </div>

              <p>
                We ignite <strong style={{ color: colors.yellow }} className="font-black">world-class growth</strong> by embracing limitless positive identities, combining big dreams, advanced AI, and practical hardcore action.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { number: "100k+", label: "Galaxies United", icon: <Stars size={32} />, color: colors.teal },
                { number: "500M", label: "Light Years Span", icon: <Rocket size={32} />, color: colors.purple },
                { number: "∞", label: "Limitless Growth", icon: <TrendingUp size={32} />, color: colors.emerald }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className={`p-8 rounded-3xl bg-black/20 border border-white/5 hover:border-white/20 transition-colors ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <div className="flex justify-center mb-4" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaniakeaVision;