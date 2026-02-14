"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  image: string;
  title: string;
  isNew?: boolean;
  isInstant?: boolean;
}

const services = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752476639421-112dfa-9.jpeg",
    title: "Wall makeover by Revamp",
    isNew: true,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1723808286533-2d276b-10.jpeg",
    title: "Living & Bedroom Cleaning",
    isNew: true,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1753434354721-c43063-11.jpeg",
    title: "Native Water Purifier",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752218400674-e79bd2-12.jpeg",
    title: "Native Smart Locks",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752218390706-449571-13.jpeg",
    title: "InstaHelp",
    isNew: true,
    isInstant: true,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752476639421-112dfa-9.jpeg",
    title: "Stove Repair",
    isInstant: true,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1723808286533-2d276b-10.jpeg",
    title: "Laptop Service",
    isInstant: true,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1753434354721-c43063-11.jpeg",
    title: "AC Service & Repair",
    isInstant: true,
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, isNew, isInstant }) => {
  return (
    <div className="flex flex-col flex-shrink-0 w-[130px] md:w-[170px] cursor-pointer group">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#f8f9fa] mb-2.5">
        {isNew && (
          <div className="absolute top-2 left-2 z-10 bg-[#7c3aed] text-white text-[8px] font-semibold px-1.5 py-[2px] rounded tracking-wide uppercase">
            New
          </div>
        )}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 130px, 170px"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[11px] font-medium leading-[1.4] text-[#1a1a2e]">
          {title}
        </h3>
        {isInstant && (
          <div className="flex items-center gap-1">
            <svg width="7" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41 4.5H4.5V0L0 7.5H2.91V12L7.41 4.5Z" fill="#059669" />
            </svg>
            <span className="text-[9px] font-medium text-[#059669]">Instant</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default function NewAndNoteworthy() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-8 md:py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 relative">
        <h2 className="text-[16px] font-semibold text-[#1a1a2e] mb-5 tracking-[-0.01em]">
          New and noteworthy
        </h2>
        
        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex gap-3.5 overflow-x-auto no-scrollbar scroll-smooth pb-2"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="hidden md:flex absolute right-[-12px] top-[35%] -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e2e8f0] hover:bg-[#f8f9fa] transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-[#475569]" />
          </button>
        </div>
      </div>
    </section>
  );
}
