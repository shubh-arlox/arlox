import React from 'react';
import { motion } from 'framer-motion';

const CommitmentCard = () => {
  const colors = {
    bg: '#ecf0f3',
    shadowLight: '#ffffff',
    shadowDark: '#d1d9e6',
    navy: '#2b3a55',
    emerald: '#059669',
    purple: '#805ad5',
    slate: '#64748b',
    darkest: '#1a202c',
    crimson: '#e53e3e'
  };

  return (
    <section className="py-20 px-4 sm:px-6 flex flex-col items-center bg-[#ecf0f3]">
      
      {/* === HEADING (Outside the card, at the top) === */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6" style={{ color: colors.darkest }}>
          Our Current Commitment
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto opacity-50"></div>
      </div>

      {/* === INSET CARD === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl rounded-[3rem] overflow-hidden relative"
        style={{ 
          backgroundColor: colors.bg,
          // Deep Inset Shadows
          boxShadow: `
            inset 20px 20px 60px ${colors.shadowDark}, 
            inset -20px -20px 60px ${colors.shadowLight}
          `
        }}
      >
        {/* Optional border filters for sharpness */}
        <div className="absolute inset-0 rounded-[3rem] pointer-events-none border border-black/5 mix-blend-multiply"></div>
        <div className="absolute inset-0 rounded-[3rem] pointer-events-none border-b border-r border-white/50 mix-blend-overlay"></div>

        <div className="p-10 sm:p-16 md:p-20 lg:p-24 relative z-10">
          
          {/* CONTENT */}
          <div className="space-y-12 text-center max-w-4xl mx-auto">

            {/* Paragraph 1 */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-bold" style={{ color: colors.slate }}>
              Our mission at Arlox is to reassure, affirm and empower fashion e-commerce brands to achieve <span style={{ color: colors.navy }}>unstoppable and sustainable growth</span>.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-slate-500">
              By delivering premium experience, proactive solutions and finishing right work ahead of deadlines, we redefine what clients expect from Indian businesses—shifting the narrative from <span className="line-through decoration-2 decoration-red-300 opacity-60">disorganized and cheap</span> to <span className="font-bold" style={{ color: colors.emerald }}>disciplined, premium, and relentlessly focused on results</span>.
            </p>

            {/* Paragraph 3 */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium" style={{ color: colors.slate }}>
              Driven by the <span className="font-bold" style={{ color: colors.purple }}>health and well-being of our team</span> and a commitment to <span className="font-bold" style={{ color: colors.navy }}>transparent communication</span>, we forge enduring partnerships that thrive on mutual trust and transformative success.
            </p>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CommitmentCard;