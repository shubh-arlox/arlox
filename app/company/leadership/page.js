"use client"
import React from 'react';
import { motion } from 'framer-motion';

const LeadershipPage = () => {
  // Arlox Brand Colors
  const colors = {
    bg: '#ecf0f3',
    navy: '#2b3a55',
    slate: '#64748b',
    shadowLight: '#ffffff',
    shadowDark: '#d1d9e6',
  };

  const team = [
    { id: 1, name: "Vann (Varinder Gakhar)", role: "Founder & CEO", image: "/team/vann.png" },
    { id: 2, name: "Dennis Goyal", role: "Co-Founder & CMO", image: "/team/dennis.png" },
    { id: 3, name: "Sumit Singh", role: "Senior Mediabuyer", image: "/team/sumit.png" },
    { id: 4, name: "Sonu Kumar", role: "Creative Director", image: "/team/sonu.png" },
    { id: 5, name: "Shubham Tiwari", role: "Senior Software Engineer", image: "/team/shubham.png" },
    { id: 6, name: "Kabir", role: "Head of Finance", image: "/team/kabir.png" },
    { id: 7, name: "Rajbir Kaur", role: "D2C Growth Strategist", image: "/team/rajbir.png" },
    { id: 8, name: "Prince", role: "Content Editor", image: "/team/prince.png" },
    { id: 9, name: "Deepak", role: "Creative Strategist", image: "/team/deepak.png" },
    { id: 10, name: "Manish Yadav", role: "Media Buyer", image: "/team/manish.png" },
    { id: 11, name: "Jatin", role: "Media Buyer", image: "/team/jatin.png" },
    { id: 12, name: "Aman Batra", role: "Senior Software Engineer", image: "/team/aman.png" },
  ];

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div 
      className="min-h-screen font-sans selection:bg-slate-300 selection:text-slate-900"
      style={{ backgroundColor: colors.bg }}
    >
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-24 max-w-3xl mx-auto text-center"
          >
            <h1 
              className="text-4xl md:text-5xl font-black tracking-tight mb-6"
              style={{ color: colors.navy }}
            >
              The Folks 
            </h1>
            <p 
              className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium"
              style={{ color: colors.slate }}
            >
              Arlox is a collection of diverse minds who are committed to building the world's best e-commerce scaling systems.
            </p>
          </motion.div>

          {/* Unified Team Grid */}
          <motion.div 
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16"
          >
            {team.map((member) => (
              <motion.div 
                key={member.id} 
                variants={itemVars}
                className="group flex flex-col items-center text-center"
              >
                {/* Image Container with Neumorphic Frame */}
                <div 
                  className="aspect-square w-full relative mb-5 rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    // Neumorphic "Extruded" Frame
                    boxShadow: `10px 10px 20px ${colors.shadowDark}, -10px -10px 20px ${colors.shadowLight}`,
                    border: `4px solid ${colors.bg}`
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="
                      w-full h-full object-cover object-center 
                      transition-transform duration-500 
                      group-hover:scale-110
                    "
                  />
                  {/* Subtle Inner Shadow overlay for depth (inset feeling on edges) */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none rounded-xl" />
                </div>
                
                {/* Text Details */}
                <div className="flex flex-col relative z-10">
                  <h3 
                    className="text-[16px] md:text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-blue-900"
                    style={{ color: colors.navy }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-[13px] md:text-sm font-medium uppercase tracking-wide opacity-80"
                    style={{ color: colors.slate }}
                  >
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default LeadershipPage;