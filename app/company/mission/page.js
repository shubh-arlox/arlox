"use client"
import React from 'react';

import ArloxProblemSolution from './problem';
import WhoWeAreSection from './who';
import VisionSection from './vision';
import CommitmentSection from './commit';
import LaniakeaVision from './lania';
import JapanSection from './japan';

const ArloxVisionMission = () => {
  // Neumorphic Design System
  const neuBg = "bg-[#e8ebf0]";
  
  return (
    <div className={`w-full ${neuBg} overflow-x-hidden font-sans`}>
      
      {/* === SONY INSPIRATION === */}
      <JapanSection />

      {/* === THE PROBLEM === */}
      <ArloxProblemSolution />
     
      {/* === WHO WE ARE === */}
      <WhoWeAreSection />
      
      {/* === BETTER FUTURE === */}
      <VisionSection />
    
      {/* === CURRENT COMMITMENT === */}
      <CommitmentSection />
     
      {/* === LANIAKEA === */}
      <LaniakeaVision />

    </div>
  );
};

export default ArloxVisionMission;
