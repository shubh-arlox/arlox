import HeroSection from "../components/HeroSection";
import ScalingCard from "../components/ScalingCard";
// import GrowthEngine from "../components/GrowthEngine";
// import TenantOwnerWidget from "../components/TenantOwnerWidget";
// import TrinityFeatures from "../components/TrinityFeatures";
// import CompoundWidget from "../components/CompoundWidget";
// import ScientificAdvertising from "../components/ScientificAdvertising";
import CTASection from "../components/CTASection";
import ScientificAdvertisingSection from "@/components/ScientificAdvertisingSection";
import TenantOwnerSection from "@/components/TenantOwnerSection";
import TrinitySection from "@/components/TrinitySection";
import OwnershipSection from "@/components/OwnershipSection";
import ScientificAdvertisingGrid from "@/components/ScientificAdvertisingGrid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScalingCard />
      {/* <GrowthEngine />
      <TenantOwnerWidget />
   
      <CompoundWidget />*/}
      
      <ScientificAdvertisingSection /> 
       <TenantOwnerSection />
          <TrinitySection />
          <OwnershipSection/>
          <ScientificAdvertisingGrid />
      <CTASection />
    </>
  );
}
