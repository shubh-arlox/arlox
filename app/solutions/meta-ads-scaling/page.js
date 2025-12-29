// app/meta-ads/page.js

import InstagramMetaHero from "./hero";


// OPTIONAL future sections (example)
// import MetaProofSection from "@/components/MetaProofSection";
// import CreativeVelocitySection from "@/components/CreativeVelocitySection";
// import MetaCTASection from "@/components/MetaCTASection";

export const metadata = {
  title: "Scale Meta Ads Without ROAS Collapse | Arlox",
  description:
    "Scale Instagram & Facebook ads 3–5x without creative fatigue. See how creative velocity beats Meta ad burnout.",
};

export default function MetaAdsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      
      {/* HERO — Instagram-style scaling simulation */}
      <InstagramMetaHero />

      {/* =====================================================
          ADD SECTIONS BELOW (ORDER MATTERS)
          ===================================================== */}

      {/*
      <MetaProofSection />
      <CreativeVelocitySection />
      <MetaCTASection />
      */}

    </main>
  );
}
