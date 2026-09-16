'use client';

import Image from 'next/image';
import { MapPin, Sun, ShieldCheck, Armchair, Monitor, Check } from 'lucide-react';
import { therapistInfo } from '@/src/data/practiceData';

interface OurOfficeProps {
  onOpenConsultation: () => void;
}

export default function OurOffice({ onOpenConsultation }: OurOfficeProps) {
  const highlights = [
    {
      icon: Armchair,
      label: 'Quiet & Private Space',
      detail: 'A quiet, private setting designed to feel calm and grounding from the moment you arrive.',
    },
    {
      icon: Sun,
      label: 'Natural Light',
      detail: 'An open, welcoming environment with natural light that helps clients feel at ease.',
    },
    {
      icon: ShieldCheck,
      label: 'Comfortable & Uncluttered',
      detail: 'A thoughtful, uncluttered environment supporting deep, reflective emotional work.',
    },
    {
      icon: Monitor,
      label: 'In-Person & Telehealth',
      detail: 'In-person therapy at our Santa Monica office and secure telehealth sessions across California.',
    },
  ];

  return (
    <section
      id="our-office"
      className="py-16 sm:py-24 bg-[#F5F0E6]/60 border-y border-[#1A2420]/8 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Block with Location Pill */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EFEA] text-[#3F574A] text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Santa Monica Practice</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A2420] tracking-tight text-balance">
              Our Office &amp; Setting
            </h2>
            <p className="mt-3 font-sans-body text-sm sm:text-base lg:text-lg text-[#4E5952] leading-relaxed">
              A quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.
            </p>
          </div>

          {/* Direct Address Badge */}
          <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#1A2420]/8 shadow-xs max-w-md w-full sm:w-auto">
            <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#75817A] font-semibold">
              Practice Address
            </p>
            <p className="font-serif-display text-lg sm:text-xl font-medium text-[#1A2420] mt-1">
              {therapistInfo.address}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#3F574A] font-medium pt-3 border-t border-[#1A2420]/6">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#3F574A] shrink-0" /> In-Person Sessions
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#3F574A] shrink-0" /> California Telehealth
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Showcase with Real Office Photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 items-stretch">
          {/* Main Visual: Office 1 */}
          <div className="md:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-[#1A2420]/10 shadow-xs bg-[#FFFFFF] aspect-[16/10] sm:aspect-[16/11] group">
              <Image
                src={therapistInfo.officeImages[0].src}
                alt={therapistInfo.officeImages[0].alt}
                width={1500}
                height={1030}
                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2420]/80 via-transparent to-transparent flex items-end p-4 sm:p-7">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E9EFEA] font-semibold">
                    Interior View
                  </span>
                  <h3 className="font-serif-display text-lg sm:text-2xl text-[#FBF9F5] font-normal mt-0.5 sm:mt-1">
                    {therapistInfo.officeImages[0].caption}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FBF9F5]/90 mt-1 max-w-lg font-light">
                    {therapistInfo.officeImages[0].details}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Visual: Office 2 */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-[#1A2420]/10 shadow-xs bg-[#FFFFFF] aspect-[16/10] md:aspect-auto md:h-full group min-h-[260px] sm:min-h-[300px]">
              <Image
                src={therapistInfo.officeImages[1].src}
                alt={therapistInfo.officeImages[1].alt}
                width={1500}
                height={1030}
                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2420]/80 via-transparent to-transparent flex items-end p-4 sm:p-7">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E9EFEA] font-semibold">
                    Natural Light &amp; Library
                  </span>
                  <h3 className="font-serif-display text-lg sm:text-2xl text-[#FBF9F5] font-normal mt-0.5 sm:mt-1">
                    {therapistInfo.officeImages[1].caption}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FBF9F5]/90 mt-1 max-w-md font-light">
                    {therapistInfo.officeImages[1].details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#1A2420]/8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E9EFEA] flex items-center justify-center text-[#3F574A] mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <h3 className="font-serif-display text-base sm:text-lg font-semibold text-[#1A2420]">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#4E5952] leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Quote Regarding the Space */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#1A2420]/8 text-center max-w-3xl mx-auto shadow-xs">
          <blockquote className="font-serif-display text-lg sm:text-2xl text-[#1A2420] italic font-normal text-balance">
            “Clients often share that the space itself helps them feel more at ease when they arrive.”
          </blockquote>
          <p className="mt-2 text-xs uppercase tracking-widest text-[#75817A] font-medium">
            From the Practice Profile • Dr. Maya Reynolds, PsyD
          </p>
          <div className="mt-5 sm:mt-6">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] bg-[#3F574A] hover:bg-[#2F4238] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A]"
            >
              <span>Schedule a Consultation in Santa Monica</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
