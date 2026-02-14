import React from 'react';
import Image from 'next/image';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { label: 'About us', href: '#' },
    { label: 'Investor Relations', href: '#' },
    { label: 'Terms & conditions', href: '#' },
    { label: 'Privacy policy', href: '#' },
    { label: 'Anti-discrimination policy', href: '#' },
    { label: 'Careers', href: '#' },
  ];

  const customerLinks = [
    { label: 'UC reviews', href: '#' },
    { label: 'Categories near you', href: '#' },
    { label: 'Contact us', href: '#' },
  ];

  const professionalLinks = [
    { label: 'Register as a professional', href: '#' },
  ];

  const socialIcons = [
    { Icon: Twitter, href: '#' },
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-[#fafbfc] pt-12 pb-6 border-t border-[#f1f5f9]">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1628575858610-5b0ae4-2.png"
            alt="Urban Company"
            width={100}
            height={28}
            className="object-contain"
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-[12px] font-semibold mb-4 text-[#1a1a2e] uppercase tracking-[0.04em]">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#64748b] hover:text-[#7c3aed] text-[11px] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold mb-4 text-[#1a1a2e] uppercase tracking-[0.04em]">For customers</h3>
            <ul className="space-y-2">
              {customerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#64748b] hover:text-[#7c3aed] text-[11px] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold mb-4 text-[#1a1a2e] uppercase tracking-[0.04em]">For professionals</h3>
            <ul className="space-y-2">
              {professionalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#64748b] hover:text-[#7c3aed] text-[11px] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold mb-4 text-[#1a1a2e] uppercase tracking-[0.04em]">Social links</h3>
            <div className="flex gap-2 mb-5">
              {socialIcons.map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-8 h-8 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed] transition-all duration-200 bg-white"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="inline-block w-[110px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1660711266271-6588ce-29.png"
                  alt="App Store"
                  width={110}
                  height={34}
                  className="rounded-md object-contain bg-black p-0.5"
                />
              </a>
              <a href="#" className="inline-block w-[110px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1660711266271-6588ce-29.png"
                  alt="Google Play"
                  width={110}
                  height={34}
                  className="rounded-md object-contain bg-black p-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-[#f1f5f9]">
          <p className="text-[9px] text-[#94a3b8] leading-relaxed">
            &copy; Copyright 2026 Urban Company Limited. All rights reserved. | CIN: L74140DL2014PLC274413
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
