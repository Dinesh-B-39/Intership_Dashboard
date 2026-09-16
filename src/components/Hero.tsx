'use client';

import Image from 'next/image';
import { ArrowUpRight, MapPin, ShieldCheck } from 'lucide-react';
import { therapistInfo } from '@/src/data/practiceData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-7">
            {/* Practice Location & Modality Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9EFEA] text-[#3F574A] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#3F574A] shrink-0" />
              <span>Santa Monica Office &amp; California Telehealth</span>
            </div>

            {/* Editorial Serif Display Headline */}
            <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.14] text-[#1A2420] tracking-tight text-balance">
              Therapy for thoughtful, high-achieving adults navigating anxiety, trauma, and burnout.
            </h1>

            {/* Grounding Narrative Subtitle */}
            <p className="font-sans-body text-base sm:text-lg lg:text-xl text-[#4E5952] leading-relaxed max-w-2xl font-normal">
              Offering a warm, collaborative, and grounded space for adults who feel
              overwhelmed by stress or lingering past experiences. We combine practical
              tools with depth-oriented work to cultivate insight, resilience, and genuine self-connection.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FBF9F5] bg-[#3F574A] hover:bg-[#2F4238] rounded-full transition-all duration-200 shadow-xs active:scale-98 cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A] focus-visible:ring-offset-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="ml-2 w-4 h-4 shrink-0" />
              </button>

              <a
                href="#who-i-help"
                className="inline-flex items-center justify-center px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-[#1A2420] hover:text-[#3F574A] rounded-full border border-[#1A2420]/15 hover:border-[#3F574A] transition-colors whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A]"
              >
                Who I Work With
              </a>
            </div>

            {/* Verification Note */}
            <div className="pt-1 flex items-center gap-2 text-xs text-[#75817A]">
              <ShieldCheck className="w-4 h-4 text-[#3F574A] shrink-0" />
              <span>Licensed Clinical Psychologist • In-Person Santa Monica &amp; California Telehealth</span>
            </div>
          </div>

          {/* Right Column: Headshot Portrait Display */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Subtle backdrop aura */}
              <div className="absolute -inset-3 sm:-inset-4 bg-[#E9EFEA]/60 rounded-3xl -rotate-1 -z-10" />

              {/* Portrait Container */}
              <div className="relative overflow-hidden rounded-2xl bg-[#F5F0E6] border border-[#1A2420]/10 shadow-xs aspect-[4/5] w-full">
                <Image
                  src={therapistInfo.headshot}
                  alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica"
                  width={600}
                  height={750}
                  priority
                  className="w-full h-full object-cover object-top"
                />

                {/* Subtle caption pill */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#FBF9F5]/92 backdrop-blur-xs px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[#1A2420]/10 shadow-xs">
                  <p className="font-serif-display text-sm sm:text-base font-semibold text-[#1A2420]">
                    {therapistInfo.name}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#4E5952]">
                    {therapistInfo.title} • Santa Monica, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
