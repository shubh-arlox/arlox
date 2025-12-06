// components/Footer.js
"use client";

import Image from "next/image";

const columns = [
  {
    title: "Contact Us",
    links: [
      "Chat with us",
      "Chat with Arloxian AI",
      "Mail to us",
      "Book a Strategy Call",
      "Customer Support",
      "General Inquiries",
      "Press Inquiries",
      "Podcast Inquiries",
    ],
  },
  {
    title: "Resources & Support",
    links: [
      "Help Center",
      "FAQs",
      "Free Tutorials",
      "ROI Calculator",
      "Free Business Tools",
      "Blogs",
      "Free Scaling reports",
      "See our 8-figure Ads",
      "Reviews & Testimonials",
    ],
  },
  {
    title: "Case Studies",
    links: [
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "XYZ from 1 to 10",
      "…see more",
    ],
  },
  {
    title: "Solutions",
    links: [
      "10x Media Scaling",
      "Omnichannel Ad Strategy",
      "CRO Optimisations",
      "Smart Retargeting & follow up",
      "Intelligent Creative Testing",
      "High ROAS Data",
      "Multi-Channel Tracking",
      "Scientific Positioning",
      "Scientific A/B testing",
      "Scientific Angle testing",
      "Scientific Copywriting",
      "ROl Max Creative Engine",
    ],
  },
  {
    title: "Programs",
    links: [
      "Arloxian Media Buyer Academy",
      "D2C Fashion E-commerce",
      "Agency Growth Accelerator",
      "Arloxian Creative School",
      "Arloxian Copywriting School",
      "Fix Entrepreneurs Course",
      "Critical Thinking for Founders",
      "FREE quiz to unlock growth",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex-none bg-[#111827] text-[#9ca3b8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Logo */}
          <div className="w-full lg:w-1/5 space-y-4">
            <Image
              src="/Arlox_logo_white.jpg"
              alt="Arlox.io"
              width={150}
              height={50}
              className="h-10 w-auto object-contain"
            />

            <div className="text-[12px] leading-relaxed text-[#e5e7eb]">
              <p>You Built It.</p>
              <p>We Scaled It.</p>
            </div>

            <div className="pt-2 space-y-1 text-[12px]">
              <p className="font-semibold text-[#e5e7eb]">Arloxian Free</p>
              <a href="#" className="hover:text-white cursor-pointer block">
                Community
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <p className="font-semibold text-[#e5e7eb] text-[12px]">{col.title}</p>
                <ul className="space-y-1.5">
                  {col.links.map((link, idx) => (
                    <li key={`${col.title}-${idx}`} className="hover:text-white transition-colors">
                      <a href="#" className="text-[12px] cursor-pointer">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Social */}
        <div className="mt-10 border-t border-[#1f2937] pt-5">
          <div className="flex flex-wrap gap-4 text-[12px]">
            <span className="font-semibold text-[#e5e7eb] pr-2">Media:</span>
            {["LinkedIn","Youtube","Facebook","Instagram","X","TikTok","Podcasts","Press"]
              .map((platform) => (
                <a key={platform} href="#" className="hover:text-white transition-colors text-[12px]">
                  {platform}
                </a>
              ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-6 border-t border-[#1f2937] pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[11px] text-[#6b7280]">
            © {new Date().getFullYear()} Arlox.io — All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px]">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Press & Media",
              "GDPR",
              "Earnings Disclaimer",
              "Refunds & Cancellations",
            ].map((item) => (
              <a key={item} href="#" className="hover:text-white cursor-pointer">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
