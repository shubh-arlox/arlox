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
import SevenSurfaceCoverageGap from './insight';
import UniquenessSection from './unique';
import WhyBrandsFailSection from './insight';
import ArloxUniquenessSection from './unique';
import ArloxObjections from './faq';
import ArloxCloseSection from './close';

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
     <WhyBrandsFailSection/>
     <ArloxUniquenessSection/>
     <ArloxObjections/>
     <ArloxCloseSection/>
    </div>
  );
}