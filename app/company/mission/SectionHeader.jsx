// SectionHeader.jsx
const SectionHeader = ({ icon, iconColor, badge, title, subtitle, colors }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12 sm:mb-16 md:mb-20"
  >
    <div className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#e8ebf0] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] mb-6 sm:mb-8 border-2`}
         style={{ borderColor: iconColor }}>
      {React.cloneElement(icon, { 
        size: 16, 
        className: "sm:hidden", 
        style: { color: iconColor } 
      })}
      {React.cloneElement(icon, { 
        size: 20, 
        className: "hidden sm:block", 
        style: { color: iconColor } 
      })}
      <span className="text-xs sm:text-sm font-black uppercase tracking-widest" style={{ color: colors.slate }}>
        {badge}
      </span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 px-4" style={{ color: colors.darkest }}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-base sm:text-lg md:text-xl font-bold px-4" style={{ color: colors.navy }}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

// SonyImageCard.jsx
const SonyImageCard = ({ neuCard, colors }) => (
  <motion.div 
    className={`relative rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden ${neuCard} bg-white p-4 sm:p-6 group`}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="text-center">
          <Globe size={60} className="sm:hidden mx-auto mb-3 opacity-40" style={{ color: colors.navy }} />
          <Globe size={80} className="hidden sm:block mx-auto mb-4 opacity-40" style={{ color: colors.navy }} />
          <p className="font-semibold text-base sm:text-lg" style={{ color: colors.slate }}>Sony Story Image</p>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">Akio Morita / Made in Japan</p>
        </div>
      </div>
    </div>

    <motion.div 
      className={`absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 bg-[#e8ebf0] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full border-2`}
      style={{ borderColor: colors.amber }}
      whileHover={{ scale: 1.1, boxShadow: `0 0 25px ${colors.amber}80` }}
    >
      <p className="text-[10px] sm:text-xs font-black uppercase tracking-wider" style={{ color: colors.amber }}>
        Made in Japan
      </p>
    </motion.div>
  </motion.div>
);

// SonyStoryContent.jsx
const SonyStoryContent = ({ neuBg, neuInset, neuCard, colors }) => (
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

      {/* Success Banner */}
      <motion.div 
        className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white ${neuCard} relative overflow-hidden`}
        style={{ backgroundColor: colors.emerald }}
        whileHover={{ scale: 1.02 }}
      >
        <CheckCircle2 size={36} className="sm:hidden mb-3" />
        <CheckCircle2 size={48} className="hidden sm:block mb-4" />
        <p className="text-lg sm:text-xl md:text-2xl font-black leading-tight">
          He successfully restored Japan's pride on the global stage and elevated "Made in Japan".
        </p>
      </motion.div>
    </motion.div>
  </div>
);

// SonyInspiration.jsx (Main Component)
const SonyInspiration = ({ neuBg, neuCard, neuInset, neuButton, colors, y2 }) => (
  <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
    <div className="hidden lg:block">
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
        style={{ backgroundColor: colors.navy, y: y2 }}
      />
    </div>

    <div className="max-w-7xl mx-auto">
      <SectionHeader 
        icon={<Award />}
        iconColor={colors.amber}
        badge="Our Inspiration"
        title="The Sony Story"
        subtitle="How one man transformed a nation's global identity"
        colors={colors}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
      >
        <SonyImageCard neuCard={neuCard} colors={colors} />
        <SonyStoryContent neuBg={neuBg} neuInset={neuInset} neuCard={neuCard} colors={colors} />
      </motion.div>
    </div>
  </section>
);
