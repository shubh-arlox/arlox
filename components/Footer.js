// components/Footer.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Linkedin, 
  Youtube, 
  Facebook, 
  Instagram, 
  Twitter,
  Music2,
  Newspaper,
  Mail
} from "lucide-react";

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

const socialMedia = [
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://linkedin.com/company/arlox-io/posts/?feedView=all&viewAsMember=true", 
    color: "#0A66C2" 
  },
  { 
    name: "Youtube (Arlox)", 
    icon: Youtube, 
    href: "https://www.youtube.com/@arlox-io", 
    color: "#FF0000" 
  },
  { 
    name: "Youtube (Vann)", 
    icon: Youtube, 
    href: "https://www.youtube.com/@vannlaniakea/videos", 
    color: "#FF0000" 
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://www.facebook.com/arlox.io/", 
    color: "#1877F2" 
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/dennisgoyal/", 
    color: "#E4405F" 
  },
  
];

const legalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Press & Media",
  "GDPR",
  "Earnings Disclaimer",
  "Refunds & Cancellations",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.2, 
    rotate: 5,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    } 
  }
};

export default function Footer() {
  return (
    <footer className="w-full flex-none bg-[#111827] text-[#9ca3b8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Layout */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-12 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >

          {/* Logo */}
          <motion.div 
            className="w-full lg:w-1/5 space-y-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/Arlox_logo_white.jpg"
                alt="Arlox.io"
                width={150}
                height={50}
                className="h-10 w-auto object-contain cursor-pointer"
              />
            </motion.div>

            <div className="text-[12px] leading-relaxed text-[#e5e7eb]">
              <p>You Built It.</p>
              <p>We Scaled It.</p>
            </div>

            <div className="pt-2 space-y-1 text-[12px]">
              <p className="font-semibold text-[#e5e7eb]">Arloxian Free</p>
              <Link href="/not-found">
                <motion.span 
                  className="hover:text-white cursor-pointer block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Community
                </motion.span>
              </Link>
            </div>
          </motion.div>

          {/* Columns */}
          <motion.div 
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
            variants={containerVariants}
          >
            {columns.map((col, colIndex) => (
              <motion.div 
                key={col.title} 
                className="space-y-3"
                variants={itemVariants}
              >
                <p className="font-semibold text-[#e5e7eb] text-[12px]">{col.title}</p>
                <ul className="space-y-1.5">
                  {col.links.map((link, idx) => (
                    <motion.li 
                      key={`${col.title}-${idx}`} 
                      className="hover:text-white transition-colors"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link href="/not-found" className="text-[12px] cursor-pointer">
                        {link}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* Social Media with Icons */}
        <motion.div 
          className="mt-10 border-t border-[#1f2937] pt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="font-semibold text-[#e5e7eb] text-[12px]">Media:</span>
            <div className="flex flex-wrap gap-4 items-center">
              {socialMedia.map((social, index) => {
                const isExternal = social.href.startsWith('http');
                const LinkComponent = isExternal ? 'a' : Link;
                const linkProps = isExternal 
                  ? { href: social.href, target: "_blank", rel: "noopener noreferrer" }
                  : { href: social.href };

                return (
                  <LinkComponent
                    key={`${social.name}-${index}`}
                    {...linkProps}
                  >
                    <motion.div
                      className="group relative flex items-center gap-2 text-[12px] hover:text-white transition-colors cursor-pointer"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <motion.div
                        variants={iconVariants}
                        className="relative"
                      >
                        <social.icon 
                          size={16} 
                          className="transition-colors"
                          style={{ 
                            color: social.name === 'X' || social.name === 'TikTok' ? '#9ca3b8' : social.color 
                          }}
                        />
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 1, color: social.color }}
                        transition={{ duration: 0.2 }}
                      >
                        {social.name}
                      </motion.span>
                    </motion.div>
                  </LinkComponent>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Legal */}
        <motion.div 
          className="mt-6 border-t border-[#1f2937] pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.p 
            className="text-[11px] text-[#6b7280]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            © {new Date().getFullYear()} Arlox.io — All Rights Reserved
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-x-4 gap-y-2 text-[11px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {legalLinks.map((item, index) => (
              <Link key={item} href="/not-found">
                <motion.span 
                  className="hover:text-white cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </footer>
  );
}
