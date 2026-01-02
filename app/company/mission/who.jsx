import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Heart, Target, Stars } from 'lucide-react';

const WhoWeAreSection = () => {
  const colors = {
    navy: '#1e3a8a',
    purple: '#7c3aed',
    teal: '#0d9488',
    darkest: '#0f172a',
    slate: '#475569'
  };

  const neuBg = 'bg-gradient-to-br from-slate-50 to-slate-100';
  const neuCard = 'shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]';
  const neuFlat = 'shadow-[inset_2px_2px_5px_#d1d5db,inset_-2px_-2px_5px_#ffffff]';

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <Users size={48} className="sm:hidden mx-auto mb-4" style={{ color: colors.navy }} />
          <Users size={56} className="hidden sm:block md:hidden mx-auto mb-5" style={{ color: colors.navy }} />
          <Users size={64} className="hidden md:block mx-auto mb-6" style={{ color: colors.navy }} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 px-4" style={{ color: colors.darkest }}>
            Who We Are
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto px-4" style={{ color: colors.slate }}>
            Arlox stands at the forefront of redefining quality and customer satisfaction through scientific advertising and data-driven growth strategies
          </p>
        </motion.div>

        {/* Mobile: Stack all cards, Desktop: Bento Grid */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 mb-12 sm:mb-16">
          {/* Center Image - Full width on mobile */}
          <motion.div 
            className="lg:col-span-3 lg:row-span-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden ${neuCard} bg-white p-4 sm:p-6`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                  <div className="text-center">
                    <Users size={60} className="sm:hidden mx-auto mb-3 opacity-40" style={{ color: colors.navy }} />
                    <Users size={80} className="hidden sm:block md:hidden mx-auto mb-4 opacity-40" style={{ color: colors.navy }} />
                    <Users size={100} className="hidden md:block mx-auto mb-4 opacity-40" style={{ color: colors.navy }} />
                    <p className="font-semibold text-base sm:text-lg" style={{ color: colors.slate }}>Digital Marketing Excellence</p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">Scaling eCommerce Brands • Data-Driven Growth</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 backdrop-blur-xl bg-white/90 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2"
                   style={{ borderColor: colors.navy }}>
                <p className="text-xs sm:text-sm font-black text-center" style={{ color: colors.navy }}>
                  Grace • Beauty • Excellence
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Value Cards - Stack on mobile, 3 columns on desktop */}
          {[
            {
              icon: <Zap size={28} />,
              iconMobile: <Zap size={24} />,
              title: "Aggressive Problem-Solving",
              desc: "No-compromise standards that consistently surpass expectations with proactive communication",
              color: colors.navy
            },
            {
              icon: <Heart size={28} />,
              iconMobile: <Heart size={24} />,
              title: "Calm & Joyful",
              desc: "Never in hurry but completely relaxed—finishing ahead of schedule with premium quality",
              color: colors.purple
            },
            {
              icon: <Target size={28} />,
              iconMobile: <Target size={24} />,
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
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl ${neuBg} ${neuCard} cursor-pointer`}
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${item.color}40` }}
            >
              <div 
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}
                style={{ 
                  backgroundColor: `${item.color}20`,
                  color: item.color
                }}
              >
                <span className="sm:hidden">{item.iconMobile}</span>
                <span className="hidden sm:block">{item.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3" style={{ color: colors.darkest }}>
                {item.title}
              </h3>
              <p className="leading-relaxed text-sm sm:text-base" style={{ color: colors.slate }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Known For */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] ${neuBg} ${neuCard} border-l-4 sm:border-l-6 md:border-l-8`}
          style={{ borderColor: colors.navy }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-12 flex items-center gap-3 sm:gap-4" style={{ color: colors.darkest }}>
            <Stars size={32} className="sm:hidden" style={{ color: colors.navy }} />
            <Stars size={40} className="hidden sm:block md:hidden" style={{ color: colors.navy }} />
            <Stars size={48} className="hidden md:block" style={{ color: colors.navy }} />
            Arlox is Known For:
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              "Aggressiveness & proactiveness",
              "Precise, high-quality work",
              "Responsible, smart effort winning",
              "Proper organization",
              "Joyful, never in hurry",
              "Creating clarity and focus",
              "Enjoying work, premium standards",
              "Prioritizing health",
              "Finishing before deadlines",
              "Being straightforward and candid",
              "No-compromise standards",
              "Relentless quest for perfection"
            ].map((trait, i) => (
              <motion.div 
                key={i}
                className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white ${neuFlat}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Stars className="shrink-0" size={14} style={{ color: colors.navy }} />
                <span className="font-bold text-xs sm:text-sm" style={{ color: colors.darkest }}>
                  {trait}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;