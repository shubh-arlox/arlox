import HeroSection from "../components/HeroSection";
import ScalingCard from "../components/ScalingCard";
// import GrowthEngine from "../components/GrowthEngine";
// import TenantOwnerWidget from "../components/TenantOwnerWidget";
// import TrinityFeatures from "../components/TrinityFeatures";
// import CompoundWidget from "../components/CompoundWidget";
// import ScientificAdvertising from "../components/ScientificAdvertising";
import CTASection from "../components/CTASection";
import ScientificAdvertisingSection from "@/components/ScientificAdvertisingSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScalingCard />
      {/* <GrowthEngine />
      <TenantOwnerWidget />
      <TrinityFeatures />
      <CompoundWidget />*/}
      <ScientificAdvertisingSection /> 
      <CTASection />
    </>
  );
}
