// CurrentPerceptionCard.jsx
const CurrentPerceptionCard = ({ neuCard, neuInset, neuButton, colors }) => {
  const negativeTraits = [
    "Easy defensiveness & victimization",
    "Low quality work & cutting corners",
    "Disorganized & chaotic",
    "Missing deadlines, delaying work",
    "No joy, always in hurry",
    "Creating chaos, dreading work",
    "Ignoring health, creating confusion",
    "Proudly cheap & low quality",
    "Group think & sugarcoating truth",
    "Lying by omission"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] bg-[#e8ebf0] ${neuCard} relative overflow-hidden border-l-4 sm:border-l-6 md:border-l-8`}
      style={{ borderColor: colors.crimson }}
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#e8ebf0] ${neuButton} flex items-center justify-center`}>
          <Shield size={24} className="sm:hidden" style={{ color: colors.crimson }} />
          <Shield size={28} className="hidden sm:block md:hidden" style={{ color: colors.crimson }} />
          <Shield size={32} className="hidden md:block" style={{ color: colors.crimson }} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black" style={{ color: colors.darkest }}>
            Current Global Perception
          </h3>
          <p className="font-bold text-xs sm:text-sm" style={{ color: colors.crimson }}>
            Personally observed facts
          </p>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {negativeTraits.map((item, i) => (
          <motion.div 
            key={i}
            className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl ${neuInset} bg-[#e8ebf0]`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 shrink-0" 
                 style={{ backgroundColor: colors.crimson }}></div>
            <span className="font-semibold text-xs sm:text-sm" style={{ color: colors.slate }}>{item}</span>
          </motion.div>
        ))}
      </div>

      <div className={`mt-6 sm:mt-8 p-4 sm:p-5 rounded-xl sm:rounded-2xl ${neuInset} bg-[#e8ebf0]`}>
        <p className="text-[10px] sm:text-xs italic font-bold text-center" style={{ color: colors.crimson }}>
          Not my opinion….just personally observed facts.
        </p>
      </div>
    </motion.div>
  );
};

// ArloxStandardCard.jsx
const ArloxStandardCard = ({ neuCard, neuFlat, neuButton, colors }) => {
  const positiveTraits = [
    "Grace, beauty & quality in every task",
    "Impeccable craftsmanship & meticulous details",
    "Organized & premium execution",
    "Finishing ahead of schedule",
    "Calm, joyful & completely relaxed",
    "Aggressive problem-solving",
    "Proactive communication",
    "Prioritizing health & well-being",
    "Straightforward & candid always",
    "Clarity over chaos, focus over frenzy"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] bg-[#e8ebf0] ${neuCard} relative overflow-hidden border-l-4 sm:border-l-6 md:border-l-8`}
      style={{ borderColor: colors.emerald }}
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#e8ebf0] ${neuButton} flex items-center justify-center`}>
          <Sparkles size={24} className="sm:hidden" style={{ color: colors.emerald }} />
          <Sparkles size={28} className="hidden sm:block md:hidden" style={{ color: colors.emerald }} />
          <Sparkles size={32} className="hidden md:block" style={{ color: colors.emerald }} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black" style={{ color: colors.darkest }}>
            The Arlox Standard
          </h3>
          <p className="font-bold text-xs sm:text-sm" style={{ color: colors.emerald }}>
            Our commitment to excellence
          </p>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {positiveTraits.map((item, i) => (
          <motion.div 
            key={i}
            className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white ${neuFlat}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <CheckCircle2 className="shrink-0 mt-0.5" size={16} style={{ color: colors.emerald }} />
            <span className="font-bold text-xs sm:text-sm" style={{ color: colors.darkest }}>{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// MissionBanner.jsx
const MissionBanner = ({ neuCard, colors }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className={`text-center p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] text-white ${neuCard} relative overflow-hidden`}
    style={{ backgroundColor: colors.navy }}
  >
    <div className="relative z-10">
      <Crown size={40} className="sm:hidden mx-auto mb-4" />
      <Crown size={48} className="hidden sm:block md:hidden mx-auto mb-5" />
      <Crown size={56} className="hidden md:block mx-auto mb-6" />
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight mb-3 sm:mb-4">
        Our Mission: Make "From India" Signify
      </p>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black" style={{ color: colors.yellow }}>
        Grace • Beauty • Quality • Effectiveness
      </p>
    </div>
  </motion.div>
);

// ProblemSection.jsx (Main Component)
const ProblemSection = ({ neuCard, neuInset, neuFlat, neuButton, colors }) => (
  <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative">
    <div className="max-w-7xl mx-auto">
      <SectionHeader 
        icon={<Target />}
        iconColor={colors.crimson}
        badge="The Problem We're Solving"
        title={
          <>
            The Current Perception<br />
            <span style={{ color: colors.crimson }}>That We Refuse to Accept</span>
          </>
        }
        colors={colors}
      />

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
        <CurrentPerceptionCard 
          neuCard={neuCard}
          neuInset={neuInset}
          neuButton={neuButton}
          colors={colors}
        />
        <ArloxStandardCard 
          neuCard={neuCard}
          neuFlat={neuFlat}
          neuButton={neuButton}
          colors={colors}
        />
      </div>

      <MissionBanner neuCard={neuCard} colors={colors} />
    </div>
  </section>
);
