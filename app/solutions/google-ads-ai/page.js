"use client"
import React from 'react';
import HeroSection from './HeroSection';
import ChartSection from './ChartSection';
import ComparisonTable from './ComparisonTable';
import InsightCallout from './InsightCallout';
import TrinitySection from './TrinitySection';
import InvisibleProblem from './problem';
import Hidden from './hidden';
import ArloxPowerPack from './solution';
import ArloxImplementationPlan from './method';
import ArloxRoadmap from './method';

export default function App() {
  return (
    <div className="min-h-screen bg-[#ecf0f3] text-slate-700 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      <HeroSection />
      <ChartSection />
      <ComparisonTable />
       <TrinitySection />
       
      {/* <InsightCallout /> */}
      < InvisibleProblem />
      <Hidden/>
      <ArloxPowerPack/>
     <ArloxRoadmap/>
    </div>
  );
}