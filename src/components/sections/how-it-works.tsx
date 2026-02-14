import React from 'react';
import Image from 'next/image';

interface PromotionalBannerProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  badgeText?: string;
  logoSrc?: string;
  isNative?: boolean;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  title,
  description,
  buttonText,
  backgroundImage,
  badgeText,
  isNative = false,
}) => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 mb-8">
      <div 
        className="relative w-full rounded-2xl overflow-hidden min-h-[280px] md:min-h-[320px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
          />
          {isNative ? (
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent" />
          )}
        </div>

        <div className="relative z-10 px-6 py-8 md:pl-10 max-w-lg">
          {badgeText && (
            <div className="inline-block px-2 py-0.5 mb-3 text-[9px] font-semibold text-white bg-[#059669] rounded">
              {badgeText}
            </div>
          )}

          <h2 className={`text-[22px] md:text-[26px] font-semibold leading-[1.2] mb-2 tracking-[-0.02em] ${isNative ? 'text-white' : 'text-[#1a1a2e]'}`}>
            {title}
          </h2>
          
          <p className={`text-[13px] font-normal mb-6 ${isNative ? 'text-white/80' : 'text-[#64748b]'}`}>
            {description}
          </p>

          <button 
            className={`px-5 py-2 rounded-full font-medium text-[12px] transition-all duration-200 active:scale-95 ${
              isNative 
                ? 'bg-white text-[#1a1a2e] hover:bg-white/90 shadow-sm' 
                : 'bg-[#1a1a2e] text-white hover:bg-[#2d2d4e] shadow-sm'
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const banners = [
    {
      title: "Wall Panels",
      description: "Level up your walls with premium designs",
      buttonText: "Know more",
      backgroundImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1696852847761-574450-3.jpeg",
      isNative: false
    },
    {
      title: "Smart Locks",
      description: "Camera. Doorbell. All-in-one.",
      buttonText: "Buy now",
      backgroundImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1736922795409-bece35-22.jpeg",
      badgeText: "Up to \u20B91,800 off",
      isNative: true
    },
    {
      title: "RO Water Purifier",
      description: "Needs no service for 2 years",
      buttonText: "Buy now",
      backgroundImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1730796949218-7917b6-30.jpeg",
      badgeText: "Up to \u20B91,700 off",
      isNative: true
    }
  ];

  return (
    <section className="py-4 bg-white overflow-hidden">
      {banners.map((banner, idx) => (
        <PromotionalBanner key={idx} {...banner} />
      ))}
    </section>
  );
}
