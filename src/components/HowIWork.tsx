import Image from 'next/image';
import { ArrowUpRight, Compass, Shield, Feather, Layers } from 'lucide-react';

interface HowIWorkProps {
  onOpenConsultation: () => void;
}

export default function HowIWork({ onOpenConsultation }: HowIWorkProps) {
  const pillars = [
    {
      icon: Compass,
      title: 'Warm, Collaborative & Grounded',
      description:
        'Sessions are an active partnership where you are respected, understood, and involved in setting the pace and direction.',
    },
    {
      icon: Layers,
      title: 'Structured Yet Spacious',
      description:
        'Structured enough to provide dependable support and concrete takeaways, while leaving generous room for depth and reflection.',
    },
    {
      icon: Shield,
      title: 'Safety & Stabilization First',
      description:
        'Carefully paced trauma work ensuring you develop regulation in your daily life and body, rather than pushing through distress.',
    },
    {
      icon: Feather,
      title: 'Emotional & Physiological Understanding',
      description:
        'Integrating cognitive clarity with somatic awareness to address the mental, nervous system, and physical expressions of stress.',
    },
  ];

  return (
    <section id="how-i-work" className="py-16 sm:py-24 bg-[#FFFFFF] border-y border-[#1A2420]/8 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section 6: Split Layout: Narrative & Editorial Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual Container featuring Office/Therapist */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-3 bg-[#E9EFEA] rounded-3xl rotate-1 -z-10" />
              <div className="relative rounded-2xl overflow-hidden border border-[#1A2420]/10 shadow-xs bg-[#F5F0E6] aspect-[4/3] sm:aspect-[4/5] w-full">
                <Image
                  src="/images/office2.jpeg"
                  alt="Natural light therapy room in Santa Monica"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2420]/75 via-transparent to-transparent flex items-end p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-[#FBF9F5] font-light leading-snug">
                    A peaceful, uncluttered environment designed to support steady, reflective work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3F574A]">
              <span>How I Work</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A2420] tracking-tight leading-tight text-balance">
              Combining practical tools with depth-oriented psychological care.
            </h2>

            <p className="font-sans-body text-sm sm:text-base lg:text-lg text-[#4E5952] leading-relaxed">
              In a culture that often values constant productivity over genuine well-being, many thoughtful professionals and creatives push through exhaustion until burnout or chronic tension becomes impossible to ignore.
            </p>

            <p className="font-sans-body text-sm sm:text-base text-[#4E5952] leading-relaxed">
              My therapeutic approach is grounded, collaborative, and paced carefully. Rather than offering superficial advice or generic solutions, we work together to understand the root of your worry, trauma patterns, or perfectionism. We focus on helping you feel regulated and safe in your daily life—not just during the therapy hour.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-[#FBF9F5] border border-[#1A2420]/6"
                  >
                    <div className="flex items-center gap-2 text-[#3F574A] mb-1.5">
                      <IconComponent className="w-4 h-4 text-[#3F574A] shrink-0" />
                      <h3 className="font-serif-display text-sm sm:text-base font-semibold text-[#1A2420]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#4E5952] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] bg-[#3F574A] hover:bg-[#2F4238] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A]"
              >
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Section 7: Typographic Transition Banner */}
        <div className="mt-14 pt-10 sm:mt-18 sm:pt-14 border-t border-[#1A2420]/8 text-center max-w-3xl mx-auto">
          <p className="font-serif-display text-xl sm:text-2xl lg:text-3xl text-[#1A2420] italic font-normal leading-relaxed text-balance">
            “Honoring your lived experiences while cultivating grounded safety and sustainable ways forward.”
          </p>
          <p className="mt-2.5 text-xs uppercase tracking-widest text-[#75817A] font-medium">
            Clinical Practice in Santa Monica, California
          </p>
        </div>
      </div>
    </section>
  );
}
