import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

const JapanSection = () => {
  // Neumorphic Palette & Styles
  const colors = {
    bg: '#ecf0f3',
    shadowLight: '#ffffff',
    shadowDark: '#d1d9e6',
    amber: '#fbbf24',
    emerald: '#059669',
    navy: '#2b3a55',
    slate: '#000000',
    darkest: '#1a202c',
  };

  const neuBg = `bg-[#ecf0f3]`;
  const neuCard = `shadow-[20px_20px_60px_${colors.shadowDark},-20px_-20px_60px_${colors.shadowLight}]`;
  const neuInset = `shadow-[inset_6px_6px_12px_${colors.shadowDark},inset_-6px_-6px_12px_${colors.shadowLight}]`;

  // Parallax Setup
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax Movement
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // === FADE-IN EFFECT ===
  // Fade opacity from 0 to 1 as user scrolls into view
  const opacityFade = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0.3]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: 'rgba(236, 240, 243, 0.9)' }} 
    >

      {/* === PARALLAX BACKGROUND IMAGE WITH FADE-IN === */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="relative w-full h-[120%]"
          style={{ 
            y: yParallax,
            opacity: opacityFade // FADE-IN EFFECT
          }}
        >
          <Image
            src="/ww2.png" // Your attached war image
            alt="Post-WWII Japan Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 backdrop-blur-[2px]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
        >

          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`
              relative 
              rounded-2xl sm:rounded-3xl lg:rounded-[3rem] 
              overflow-hidden 
              ${neuCard} 
              bg-[#e8ebf0] 
              p-4 sm:p-6 
              group
            `}
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

              {/* EDGE VIGNETTE */}
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
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
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

              {/* Success Banner */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden flex items-start gap-4 0 bg-white ${neuInset}`}
                whileHover={{ scale: 1.02 }}
              >
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
  );
};

export default JapanSection;
