import React from 'react';
import Image from 'next/image';
import { Star, ChevronRight, Zap } from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  rating: string;
  reviews?: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  imageUrl: string;
  isInstant?: boolean;
  badge?: string;
}

interface ServiceSectionProps {
  title: string;
  subtitle?: string;
  services: ServiceCard[];
  showSeeAll?: boolean;
}

const ServiceCardItem = ({ service }: { service: ServiceCard }) => {
  return (
    <div className="flex flex-col min-w-[140px] md:min-w-[190px] lg:min-w-[220px] group cursor-pointer">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#f8f9fa]">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {service.badge && (
          <div className="absolute top-2 left-0 bg-[#7c3aed] text-white text-[8px] font-semibold px-2 py-[2px] rounded-r">
            {service.badge}
          </div>
        )}
        {service.discount && (
          <div className="absolute top-2 left-2 bg-[#059669] text-white text-[8px] font-semibold px-1.5 py-[2px] rounded">
            {service.discount}
          </div>
        )}
      </div>
      
      <div className="mt-2.5 flex flex-col gap-0.5">
        <h3 className="text-[11px] font-medium leading-tight text-[#1a1a2e] line-clamp-2 min-h-[30px]">
          {service.title}
        </h3>
        
        <div className="flex items-center gap-1">
          <Star className="w-2.5 h-2.5 fill-[#1a1a2e] text-[#1a1a2e]" />
          <span className="text-[10px] font-medium text-[#1a1a2e]">{service.rating}</span>
          {service.reviews && (
            <span className="text-[10px] text-[#94a3b8]">({service.reviews})</span>
          )}
          {service.isInstant && (
            <div className="flex items-center gap-0.5 ml-1.5">
              <Zap className="w-2 h-2 fill-[#059669] text-[#059669]" />
              <span className="text-[9px] font-medium text-[#059669]">Instant</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[12px] font-semibold text-[#1a1a2e]">&#8377;{service.price}</span>
          {service.originalPrice && (
            <span className="text-[10px] text-[#94a3b8] line-through">&#8377;{service.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const ServiceSection = ({ title, subtitle, services, showSeeAll }: ServiceSectionProps) => {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-[16px] font-semibold text-[#1a1a2e] leading-tight tracking-[-0.01em]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[11px] text-[#94a3b8] mt-0.5">{subtitle}</p>
          )}
        </div>
        {showSeeAll && (
          <button className="flex items-center gap-0.5 text-[#7c3aed] font-medium text-[11px] border border-[#e2e8f0] px-3 py-1 rounded-full hover:bg-[#f8f9fa] transition-colors">
            See all
            <ChevronRight className="w-3 h-3" />
          </button>
        )}
      </div>
      
      <div className="relative group">
        <div className="flex overflow-x-auto gap-3 scrollbar-hide pb-1 -mx-5 px-5 lg:mx-0 lg:px-0">
          {services.map((service) => (
            <ServiceCardItem key={service.id} service={service} />
          ))}
        </div>
        
        <button className="absolute right-[-12px] top-1/2 -translate-y-[80%] z-10 w-7 h-7 rounded-full bg-white shadow-uc border border-[#e2e8f0] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex">
          <ChevronRight className="w-3.5 h-3.5 text-[#475569]" />
        </button>
      </div>
    </section>
  );
};

export default function PopularServices() {
  const mostBooked = [
    {
      id: 'mb1',
      title: 'Insta Help',
      rating: '4.70',
      reviews: '2.3M',
      price: 79,
      originalPrice: 245,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752218379388-cbe3e2-14.jpeg',
      isInstant: true,
      badge: 'House help in 10 min'
    },
    {
      id: 'mb2',
      title: 'Intense bathroom cleaning',
      rating: '4.80',
      reviews: '4.4M',
      price: 399,
      originalPrice: 499,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752218375028-354111-16.jpeg',
      isInstant: true
    },
    {
      id: 'mb3',
      title: 'Intense cleaning (2 bathrooms)',
      rating: '4.80',
      reviews: '4.4M',
      price: 798,
      originalPrice: 998,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752218375028-354111-16.jpeg',
      isInstant: true
    },
    {
      id: 'mb4',
      title: 'Haircut for men',
      rating: '4.87',
      reviews: '470K',
      price: 299,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1764659852291-bf0e4f-17.jpeg',
      isInstant: true
    },
    {
      id: 'mb5',
      title: 'Geyser check-up',
      rating: '4.72',
      reviews: '112K',
      price: 249,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1754379358899-9f9bd4-18.jpeg',
      isInstant: true
    }
  ];

  const salonForWomen = [
    {
      id: 'sw1',
      title: 'Roll-on waxing (Full arms, legs & underarms)',
      rating: '4.88',
      reviews: '91K',
      price: 899,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1651040420198-fe6d1d-15.jpeg',
      isInstant: true
    },
    {
      id: 'sw2',
      title: 'Spatula waxing (Full arms, legs & underarms)',
      rating: '4.86',
      reviews: '62K',
      price: 699,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1651040420198-fe6d1d-15.jpeg',
      isInstant: true
    },
    {
      id: 'sw3',
      title: 'Crystal rose pedicure',
      rating: '4.83',
      reviews: '161K',
      price: 759,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1651040420198-fe6d1d-15.jpeg',
      isInstant: true
    },
    {
      id: 'sw4',
      title: 'Mani-pedi delight',
      rating: '4.82',
      reviews: '214K',
      price: 1359,
      originalPrice: 1458,
      discount: '7% OFF',
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1651040420198-fe6d1d-15.jpeg',
      isInstant: true
    }
  ];

  const cleaningEssentials = [
    {
      id: 'ce1',
      title: 'Intense bathroom cleaning',
      rating: '4.80',
      reviews: '4.4M',
      price: 419,
      originalPrice: 519,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752218375028-354111-16.jpeg'
    },
    {
      id: 'ce2',
      title: 'Intense cleaning (2 bathrooms)',
      rating: '4.80',
      reviews: '4.4M',
      price: 838,
      originalPrice: 1038,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752218375028-354111-16.jpeg'
    },
    {
      id: 'ce3',
      title: 'Chimney cleaning',
      rating: '4.84',
      reviews: '169K',
      price: 399,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752218375028-354111-16.jpeg'
    },
    {
      id: 'ce4',
      title: 'Fridge cleaning',
      rating: '4.83',
      reviews: '131K',
      price: 399,
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1752218375028-354111-16.jpeg'
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-6 md:py-10">
      <ServiceSection 
        title="Most booked services" 
        services={mostBooked} 
      />
      
      <ServiceSection 
        title="Salon for Women" 
        subtitle="Pamper yourself at home"
        services={salonForWomen}
        showSeeAll
      />
      
      <ServiceSection 
        title="Cleaning Essentials" 
        subtitle="Monthly cleaning essential services"
        services={cleaningEssentials}
        showSeeAll
      />
    </div>
  );
}
