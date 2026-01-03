import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Globe, Zap } from 'lucide-react';
import Image from 'next/image';

const VisionSection = () => {
  const colors = {
    navy: '#1e3a8a',
    purple: '#7c3aed',
    emerald: '#059669',
    darkest: '#0f172a',
    slate: '#475569',
    gold: '#fbbf24'
  };

  const neuCard = 'shadow-[10px_10px_20px_#d1d5db,-10px_-10px_20px_#ffffff]';
  const neuFlat = 'shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff]';

  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 bg-[#ecf0f3] relative overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER - Bold & Dramatic */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6" style={{ color: colors.darkest }}>
            How We See<br />
            <span 
              className="bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent"
            >
              A Better Future
            </span>
          </h2>
        </motion.div>

        {/* SPLIT COLUMNS: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 sm:mb-28 items-center">

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative rounded-3xl overflow-hidden ${neuCard} p-4 group order-2 lg:order-1`}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
              <Image
                src="/vision1.png"
                alt="Vision of India"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* RIGHT: Main Vision Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              <p className="sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed" style={{ color: colors.slate }}>
                We envision a world where{" "}
                <span className="font-black" style={{ color: colors.navy }}>
                  Indian 
                </span>{" "}
                enterprises and people lead the charge in{" "}
                <span className="font-black" >
                  global innovation and integrity
                </span>
                —rapidly overcoming outdated stereotypes, fighting off resistance with persistence, 
                and setting a new standard of{" "}
                <span className="font-black">
                  disciplined excellence
                </span>.
              </p>

              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed pt-4" style={{ color: colors.slate }}>
                By embodying these principles daily, we strive to create a new global perception of India—one where{" "}
                <span className="font-black" style={{ color: colors.darkest }}>
                  "From India"
                </span>{" "}
                signifies grace, beauty, quality, innovation, and effectiveness.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
