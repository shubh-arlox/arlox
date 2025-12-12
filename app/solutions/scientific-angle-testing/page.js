"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  // State to track which FAQ is currently open (null means all closed)
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function: closes if clicked again, opens if different
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Neumorphic styles (Soft UI)
  const neuFlat = "bg-[#E0E5EC] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff]";
  const neuPressed = "bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff]";

  // Placeholder for the author image - Replace with your actual image path
  const authorImage = "https://i.pravatar.cc/150?img=33"; 

  const faqs = [
    { q: "How is this different from sending a survey to my list?", a: "Surveys reveal aspirations. Interviews reveal truth. Surveys say 80% will buy; reality is 8%. We focus on past behavior using The Mom Test." },
    { q: "Can't I just have my agency do interviews?", a: "You can, but they usually ask 'What do you like about us?' (Compliments) vs 'What triggered your search?' (Intel). Plus, confirmation bias." },
    { q: "Can't I just test my way to the answer?", a: "Option A (Test): 90 days, $45K spend. Option B (Know): $4.5K + 14 days. The cost is roughly the same, but we frontload the learning." },
    { q: "What if research reveals my offer is wrong?", a: "Then you just saved $50K-$150K. Would you rather spend $4.5K to learn now, or $80K in ads to learn 6 months later?" },
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-[#E0E5EC]" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">The Silent Objections</h2>
        <p className="text-gray-600 text-center mb-12 text-sm md:text-base">We've done this 50+ times. These are the questions you're not asking out loud.</p>

        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;

            return (
              <motion.div 
                key={i} 
                onClick={() => toggleFAQ(i)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${isOpen ? neuPressed : neuFlat}`}
                layout // Smooth layout transition when height changes
              >
                {/* Question Header */}
                <div className="flex items-center justify-between">
                  <h4 className={`font-bold text-sm md:text-base flex items-center gap-3 transition-colors ${isOpen ? 'text-indigo-600' : 'text-gray-800'}`}>
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-indigo-500' : 'text-gray-400'}`} />
                    {faq.q}
                  </h4>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Answer Section with Avatar */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pl-2 md:pl-8 flex gap-4 items-start">
                        {/* Author Avatar */}
                        <motion.img 
                          src={authorImage} 
                          alt="Author"
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 shadow-sm shrink-0 object-cover"
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                        />
                        
                        {/* Chat Bubble / Answer Text */}
                        <div className="bg-white/50 p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl text-sm text-gray-700 leading-relaxed w-full">
                          <p className="font-semibold text-xs text-gray-500 mb-1">Founder says:</p>
                          {faq.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;