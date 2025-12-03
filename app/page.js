import HeroSection from "../components/HeroSection";
import ScalingCard from "../components/ScalingCard";
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

      <ScientificAdvertisingSection />
      <TenantOwnerSection />
      <TrinitySection />
      <OwnershipSection />
      <ScientificAdvertisingGrid />

      <CTASection />
    </>
  );
}
