"use client"
import React from 'react';
import { Mail, ArrowRight, Menu, X } from 'lucide-react';

const LeadershipPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Real data combined with realistic placeholders to reach 22 members
  const leaders = [
    {
      id: 1,
      name: "Vann Laniakea",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      isExecutive: true
    },
    {
      id: 2,
      name: "Dennis Goyal",
      role: "COO & Co-Founder",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
      isExecutive: true
    }
  ];

  const team = [
    { id: 3, name: "Ritish Nanchahal", role: "Service Delivery Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Loren Mason", role: "Creative Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "Kabir", role: "Head of Advertising", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
    { id: 6, name: "Rajbir Kaur", role: "D2C Growth Strategist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { id: 7, name: "Prince G", role: "Business Data Analyst", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop" },
    { id: 8, name: "Aditi Nishant", role: "Fashion & Copy Design", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
    // Placeholders to reach 22
    { id: 9, name: "Sarah Chen", role: "Senior Media Buyer", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
    { id: 10, name: "David Miller", role: "Technical Lead", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" },
    { id: 11, name: "Elena Rodriguez", role: "Client Success Manager", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?q=80&w=800&auto=format&fit=crop" },
    { id: 12, name: "Marcus Johnson", role: "Performance Marketer", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop" },
    { id: 13, name: "Sophie Al-Fayed", role: "Content Strategist", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop" },
    { id: 14, name: "James Wilson", role: "Email Marketing Specialist", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop" },
    { id: 15, name: "Nina Patel", role: "UI/UX Designer", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop" },
    { id: 16, name: "Thomas Wright", role: "Operations Manager", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop" },
    { id: 17, name: "Olivia Kim", role: "Social Media Manager", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" },
    { id: 18, name: "Lucas Silva", role: "Backend Developer", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=800&auto=format&fit=crop" },
    { id: 19, name: "Emma Thompson", role: "Account Executive", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop" },
    { id: 20, name: "Ryan O'Connell", role: "Video Editor", image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=800&auto=format&fit=crop" },
    { id: 21, name: "Aisha Bakr", role: "SEO Specialist", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop" },
    { id: 22, name: "Michael Chang", role: "Junior Media Buyer", image: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      
      {/* Navbar - Minimal Text Only */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-tight text-gray-900">ARLOX</a>
          
          <div className="hidden md:flex space-x-8 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Store</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Mac</a>
            <a href="#" className="hover:text-gray-900 transition-colors">iPad</a>
            <a href="#" className="hover:text-gray-900 transition-colors">iPhone</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Watch</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Vision</a>
            <a href="#" className="hover:text-gray-900 transition-colors">AirPods</a>
            <a href="#" className="hover:text-gray-900 transition-colors">TV & Home</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Entertainment</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-900">
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Header Section */}
          <div className="mb-20 md:mb-28 max-w-2xl">
            <h1 className="text-4xl md:text-[56px] leading-[1.05] font-semibold tracking-tight text-gray-900 mb-6">
              Leadership
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-500 font-normal">
              Arlox is a collection of diverse minds who are committed to building the world's best e-commerce scaling systems.
            </p>
          </div>

          {/* Executive Leadership (Vann & Dennis) */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {leaders.map((leader) => (
                <div key={leader.id} className="group flex flex-col">
                  <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100 mb-6">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h2>
                    <p className="text-base text-gray-500 font-medium">{leader.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider - subtle */}
          <div className="w-full h-px bg-gray-200 mb-20"></div>

          {/* Rest of the Team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
            {team.map((member) => (
              <div key={member.id} className="group flex flex-col">
                <div className="aspect-square w-full overflow-hidden bg-gray-100 mb-5">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-0.5">{member.name}</h3>
                  <p className="text-[13px] text-gray-500 leading-tight">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Footer - Apple Style */}
      <footer className="bg-gray-50 py-16 border-t border-gray-200 text-[12px] text-gray-500">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-8 border-b border-gray-200 pb-8">
             <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-gray-700">Need help scaling?</span>
                <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                  Contact an Ad Expert <ArrowRight size={12} />
                </a>
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-900 mb-1">Shop and Learn</h4>
              <a href="#" className="hover:underline">Store</a>
              <a href="#" className="hover:underline">Mac</a>
              <a href="#" className="hover:underline">iPad</a>
              <a href="#" className="hover:underline">iPhone</a>
              <a href="#" className="hover:underline">Watch</a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-900 mb-1">Services</h4>
              <a href="#" className="hover:underline">Facebook Ads</a>
              <a href="#" className="hover:underline">Google Ads</a>
              <a href="#" className="hover:underline">Email Marketing</a>
              <a href="#" className="hover:underline">Consulting</a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-900 mb-1">Company</h4>
              <a href="#" className="hover:underline">About Arlox</a>
              <a href="#" className="hover:underline">Newsroom</a>
              <a href="#" className="hover:underline">Leadership</a>
              <a href="#" className="hover:underline">Career Opportunities</a>
              <a href="#" className="hover:underline">Ethical Innovation</a>
            </div>
             <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-900 mb-1">Legal</h4>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Sales Policy</a>
              <a href="#" className="hover:underline">Legal</a>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200">
            <p>Copyright Â© 2025 Arlox Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
               <a href="#" className="hover:underline">India</a>
               <span className="border-l border-gray-300"></span>
               <a href="#" className="hover:underline">English</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeadershipPage;