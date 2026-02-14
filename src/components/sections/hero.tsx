import React from 'react';
import Image from 'next/image';
import { Star, Users } from 'lucide-react';

const Hero = () => {
  const categories = [
    {
      name: "InstaHelp",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/icons/1770050445208-b2060a-1.jpeg",
      badge: "New",
      badgeColor: "bg-[#7c3aed]"
    },
    {
      name: "Women's Salon & Spa",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/icons/1750845033589-98cdfb-2.jpeg",
      badge: "Sale",
      badgeColor: "bg-[#059669]"
    },
    {
      name: "Men's Salon & Massage",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/icons/1699869110346-61ab83-3.jpeg"
    },
    {
      name: "Cleaning & Pest Control",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/icons/1678868062337-08bfc2-4.jpeg"
    },
    {
      name: "Electrician, Plumber & Carpenter",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/icons/1770050445208-b2060a-1.jpeg"
    },
    {
      name: "Native Water Purifier",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/icons/1750845033589-98cdfb-2.jpeg"
    },
    {
      name: "Painting & Waterproofing",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/icons/1699869110346-61ab83-3.jpeg"
    },
    {
      name: "AC & Appliance Repair",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/icons/1678868062337-08bfc2-4.jpeg"
    },
    {
      name: "Wall Makeover",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/icons/1770050445208-b2060a-1.jpeg"
    }
  ];

  const gridImages = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1764944093162-109227-4.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1763463810678-7a7d86-5.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1770055841441-928944-6.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1756203838559-d0c8f7-7.jpeg"
  ];

  return (
    <section className="bg-gradient-to-b from-[#faf8ff] to-white pt-[72px] pb-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          
          {/* Left Column */}
          <div className="w-full lg:w-[46%] flex flex-col pt-4">
            <p className="text-[11px] font-medium text-[#7c3aed] uppercase tracking-[0.08em] mb-2">
              Trusted by 12M+ customers
            </p>
            <h1 className="text-[28px] lg:text-[36px] font-semibold text-[#1a1a2e] leading-[1.15] tracking-[-0.025em] mb-2">
              Home services at
              <br />
              your doorstep
            </h1>
            <p className="text-[13px] text-[#64748b] leading-relaxed mb-8 max-w-[360px]">
              Connecting you with trusted professionals for all your home and beauty needs.
            </p>

            <div className="bg-white rounded-2xl p-5 shadow-uc border border-[#f1f5f9] w-full">
              <h2 className="text-[14px] font-semibold text-[#1a1a2e] mb-5">
                What are you looking for?
              </h2>
              
              <div className="grid grid-cols-3 gap-y-5 gap-x-3">
                {categories.map((category, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="relative w-11 h-11 bg-[#f8f9fa] rounded-xl flex items-center justify-center mb-2 transition-all duration-200 group-hover:scale-105 group-hover:shadow-sm">
                      <Image 
                        src={category.icon} 
                        alt={category.name}
                        width={26}
                        height={26}
                        className="object-contain"
                      />
                      {category.badge && (
                        <span className={`absolute -top-1.5 -right-1.5 px-1 py-[1px] text-[8px] font-bold text-white uppercase rounded ${category.badgeColor}`}>
                          {category.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] font-medium leading-[1.3] text-[#475569] w-full">
                      {category.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-8 pl-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#f0ecff] flex items-center justify-center">
                  <Star className="text-[#7c3aed]" size={14} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-[#1a1a2e] leading-none">4.8</span>
                  <span className="text-[10px] text-[#94a3b8] mt-0.5">Service Rating</span>
                </div>
              </div>
              <div className="w-px h-8 bg-[#e2e8f0]" />
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#f0ecff] flex items-center justify-center">
                  <Users className="text-[#7c3aed]" size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-[#1a1a2e] leading-none">12M+</span>
                  <span className="text-[10px] text-[#94a3b8] mt-0.5">Customers Globally</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image Grid */}
          <div className="w-full lg:w-[48%] relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-3">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image 
                    src={gridImages[0]} 
                    alt="Salon Professional" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden translate-x-3">
                  <Image 
                    src={gridImages[2]} 
                    alt="Kitchen Repair" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-10">
                <div className="relative aspect-square rounded-2xl overflow-hidden -translate-x-3">
                  <Image 
                    src={gridImages[1]} 
                    alt="Massage Service" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image 
                    src={gridImages[3]} 
                    alt="AC Service" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
