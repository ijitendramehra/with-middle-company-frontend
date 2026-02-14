"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Search, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-[56px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6982843c-1f2b-4b0f-9f45-b5508a99f02d-urbancompany-com/assets/images/1628575858610-5b0ae4-1.png"
            alt="Urban Company"
            width={108}
            height={28}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 ml-8">
          {["Revamp", "Native", "Beauty"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[13px] font-medium text-[#64748b] hover:text-[#7c3aed] transition-colors duration-200 tracking-[-0.01em]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-[380px] mx-6 h-[36px] bg-[#f8f9fa] rounded-full overflow-hidden border border-transparent hover:border-[#e2e8f0] transition-colors">
          <div className="flex items-center gap-1.5 px-3 border-r border-[#e2e8f0] h-full shrink-0">
            <MapPin size={13} className="text-[#64748b]" />
            <span className="text-[11px] font-medium text-[#1a1a2e] whitespace-nowrap">
              Delhi NCR
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 flex-1">
            <Search size={13} className="text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search for services"
              className="bg-transparent text-[11px] text-[#1a1a2e] placeholder:text-[#94a3b8] outline-none w-full font-normal"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="relative p-2 hover:bg-[#f8f9fa] rounded-full transition-colors">
            <ShoppingCart size={17} className="text-[#475569]" />
          </button>
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 border border-[#e2e8f0] rounded-full hover:bg-[#f8f9fa] hover:border-[#cbd5e1] transition-all text-[11px] font-medium text-[#1a1a2e]">
            <User size={13} />
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#f1f5f9] px-5 py-4 space-y-3">
          <div className="flex items-center h-[36px] bg-[#f8f9fa] rounded-full overflow-hidden px-3 gap-2">
            <Search size={13} className="text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search for services"
              className="bg-transparent text-[11px] text-[#1a1a2e] placeholder:text-[#94a3b8] outline-none w-full"
            />
          </div>
          {["Revamp", "Native", "Beauty"].map((link) => (
            <a
              key={link}
              href="#"
              className="block text-[13px] font-medium text-[#475569] py-2"
            >
              {link}
            </a>
          ))}
          <button className="flex items-center gap-2 w-full px-4 py-2 border border-[#e2e8f0] rounded-full text-[12px] font-medium">
            <User size={13} />
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
