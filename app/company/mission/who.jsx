import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Heart, Target } from 'lucide-react';
import Image from 'next/image';

const WhoWeAreSection = () => {
  const colors = {
    navy: '#1e3a8a',
    purple: '#7c3aed',
    teal: '#0d9488',
    darkest: '#0f172a',
    slate: '#475569',
    gold: '#fbbf24'
  };

  const neuCard = 'shadow-[10px_10px_20px_#d1d5db,-10px_-10px_20px_#ffffff]';
  const neuInset = 'shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]';
  const neuBtn = 'shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff]';

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#ecf0f3]">
      <div className="max-w-7xl mx-auto">

        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 px-4 leading-tight tracking-tight" style={{ color: colors.darkest }}>
            Who We Are
          </h2>

          {/* Main Narrative Content */}
          <div className={`max-w-5xl mx-auto p-8 sm:p-12 rounded-[2.5rem] ${neuInset} border border-white/50 text-left sm:text-center`}>
            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-6" style={{ color: colors.navy }}>
              Arlox stands at the forefront of redefining quality and customer satisfaction.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 mb-6">
              Our hallmark is aggressiveness in problem-solving, proactiveness in communication, and no-compromise standards that consistently surpass expectations.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-600">
              We remain calm, joyful, organized, premium, and health-conscious—finishing tasks ahead of schedule. We emphasize clarity over chaos, focus over frenzy, straightforwardness and candor above all, and accountability over excuses.
            </p>
          </div>
        </motion.div>

        {/* === WIDER & SHORTER IMAGE SECTION (16:9 landscape) === */}
        <motion.div 
          className="flex justify-center mb-16 sm:mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={`relative rounded-[2rem] overflow-hidden ${neuCard} p-4 sm:p-6 group w-full max-w-5xl`}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Landscape Container with 16:9 aspect ratio (wider and shorter) */}
            <div className={`relative w-full aspect-video rounded-[1.5rem] overflow-hidden ${neuInset} bg-slate-100`}>
              {/* Placeholder Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Users size={80} style={{ color: colors.navy }} />
              </div>

              {/* Image */}
              <Image
                src="/team.jpg"
                alt="Arlox Culture"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1024px"
                className="object-cover opacity-80 mix-blend-multiply"
              />
            </div>

            {/* Floating Badge */}
            <div 
              className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-[#ecf0f3]/90 backdrop-blur-md border border-white/40 ${neuBtn}`}
            >
              <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-center whitespace-nowrap" style={{ color: colors.navy }}>
                Grace • Beauty • Excellence
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* === FEATURES GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <Zap size={28} />,
              title: "Aggressive & Proactive",
              desc: "Aggressiveness in problem-solving. No-compromise standards that consistently surpass expectations.",
              color: colors.navy
            },
            {
              icon: <Heart size={28} />,
              title: "Calm & Joyful",
              desc: "Never in a hurry but completely relaxed—finishing ahead of schedule. Health-conscious and organized.",
              color: colors.purple
            },
            {
              icon: <Target size={28} />,
              title: "Clarity Over Chaos",
              desc: "Focus over frenzy. Straightforwardness and candor above all. Accountability over excuses.",
              color: colors.teal
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] ${neuCard} cursor-pointer group`}
              whileHover={{ y: -5 }}
            >
              <div 
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${neuInset}`}
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: colors.darkest }}>
                {item.title}
              </h3>
              <p className="leading-relaxed text-sm font-medium opacity-80" style={{ color: colors.slate }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
