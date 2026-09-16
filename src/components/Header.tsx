'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { therapistInfo } from '@/src/data/practiceData';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const desktopNavLinks = [
    { label: 'About', href: '#about' },
    { label: 'Who I Help', href: '#who-i-help' },
    { label: 'Services', href: '#services' },
    { label: 'How I Work', href: '#how-i-work' },
    { label: 'Our Office', href: '#our-office' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const mobileNavLinks = desktopNavLinks;

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-xs border-b border-[#1A2420]/8 py-3'
          : 'bg-[#FBF9F5] border-b border-[#1A2420]/6 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Practice Identity */}
        <a
          href="#hero"
          className="group flex flex-col focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A] rounded-sm"
          aria-label="Dr. Maya Reynolds, PsyD homepage"
        >
          <span className="font-serif-display text-lg sm:text-2xl font-semibold tracking-tight text-[#1A2420] group-hover:text-[#3F574A] transition-colors leading-tight">
            {therapistInfo.name}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#75817A] font-medium mt-0.5">
            {therapistInfo.title}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Primary navigation">
          {desktopNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#4E5952] hover:text-[#1A2420] transition-colors relative py-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A] rounded-sm whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            id="nav-consultation-btn"
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] bg-[#3F574A] hover:bg-[#2F4238] rounded-full transition-all duration-200 shadow-xs active:scale-98 cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A] focus-visible:ring-offset-2"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1A2420] hover:bg-[#E9EFEA] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#1A2420]/10 px-5 pt-3 pb-6 space-y-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2.5" aria-label="Mobile navigation">
            {mobileNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1A2420] hover:text-[#3F574A] py-1.5 border-b border-[#1A2420]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] bg-[#3F574A] hover:bg-[#2F4238] rounded-full transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </button>
            <p className="mt-2.5 text-[11px] text-center text-[#75817A]">
              Santa Monica, CA • California Telehealth
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
