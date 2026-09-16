import { therapistInfo } from '@/src/data/practiceData';
import { MapPin, Monitor, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#1A2420] text-[#FBF9F5] pt-14 pb-10 sm:pt-18 sm:pb-12 border-t border-[#FFFFFF]/10 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Pre-Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 sm:pb-16 border-b border-[#FFFFFF]/10">
          {/* Column 1: Identity & Credentials */}
          <div className="md:col-span-5 space-y-3.5 sm:space-y-4">
            <h3 className="font-serif-display text-2xl sm:text-3xl font-medium tracking-tight text-[#FBF9F5]">
              {therapistInfo.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#E9EFEA]/80 font-medium">
              {therapistInfo.title}
            </p>
            <p className="text-xs sm:text-sm text-[#E9EFEA]/80 leading-relaxed max-w-md font-light">
              Providing grounded, evidence-based psychological care for adults navigating anxiety,
              panic, trauma, and burnout. Combining practical cognitive tools with depth-oriented work.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#E9EFEA] hover:text-[#FFFFFF] underline underline-offset-4 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E9EFEA] rounded-xs"
              >
                Inquire About an Initial Consultation →
              </button>
            </div>
          </div>

          {/* Column 2: Location & Service Modalities */}
          <div className="md:col-span-4 space-y-3.5 sm:space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E9EFEA]/60">
              Practice Locations &amp; Formats
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#E9EFEA]/90 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E9EFEA] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#FBF9F5]">In-Person Office</p>
                  <p className="text-xs text-[#E9EFEA]/70">{therapistInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Monitor className="w-4 h-4 text-[#E9EFEA] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#FBF9F5]">California Telehealth</p>
                  <p className="text-xs text-[#E9EFEA]/70">
                    Secure virtual sessions for adults across California
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="md:col-span-3 space-y-3.5 sm:space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E9EFEA]/60">
              Navigate
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E9EFEA]/80 font-light">
              <li>
                <a href="#hero" className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#E9EFEA] rounded-xs">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#E9EFEA] rounded-xs">
                  About
                </a>
              </li>
              <li>
                <a href="#who-i-help" className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#E9EFEA] rounded-xs">
                  Who I Help
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#E9EFEA] rounded-xs">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-i-work" className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#E9EFEA] rounded-xs">
                  How I Work
                </a>
              </li>
              <li>
                <a href="#our-office" className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#E9EFEA] rounded-xs">
                  Our Office
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#E9EFEA] rounded-xs">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Colophon & Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9EFEA]/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {therapistInfo.name}. All rights reserved.</span>
            <span className="text-[#E9EFEA]/40 hidden sm:inline">|</span>
            <span className="italic text-[#E9EFEA]/60">{therapistInfo.fictionalNote}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#E9EFEA]/60">Santa Monica, CA</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 text-[#FBF9F5] transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E9EFEA]"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
