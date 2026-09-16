import { primaryServices, focusAreas } from '@/src/data/practiceData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AreasOfFocusProps {
  onOpenConsultation: () => void;
}

export default function AreasOfFocus({ onOpenConsultation }: AreasOfFocusProps) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FBF9F5] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B8684C] mb-2 block">
            Focused Clinical Services
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A2420] tracking-tight text-balance">
            Primary areas of practice
          </h2>
          <p className="mt-3 sm:mt-4 font-sans-body text-sm sm:text-base lg:text-lg text-[#4E5952] leading-relaxed">
            Thoughtfully tailored, evidence-informed care designed for the unique emotional
            and physiological needs of adult clients.
          </p>
        </div>

        {/* 3 Primary Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          {primaryServices.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 sm:p-8 lg:p-9 rounded-2xl bg-[#FFFFFF] border border-[#1A2420]/8 shadow-xs hover:border-[#3F574A]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-display text-lg sm:text-xl text-[#75817A] font-semibold">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#3F574A] font-medium bg-[#E9EFEA] px-2.5 py-1 rounded-full whitespace-nowrap">
                    Individual Therapy
                  </span>
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-medium text-[#1A2420] leading-snug">
                  {service.title}
                </h3>

                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-[#B8684C]">
                  {service.subtitle}
                </p>

                <p className="mt-3.5 text-sm sm:text-base text-[#4E5952] leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Focus Key Points */}
                <div className="mt-5 pt-5 border-t border-[#1A2420]/8 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#75817A] font-semibold block mb-2">
                    Key Areas Explored:
                  </span>
                  {service.focusPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs sm:text-sm text-[#4E5952]">
                      <CheckCircle2 className="w-4 h-4 text-[#3F574A] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#1A2420]/8">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#3F574A] bg-[#E9EFEA] hover:bg-[#3F574A] hover:text-[#FBF9F5] transition-all cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A]"
                >
                  <span>Inquire About This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Categorical Matrix / Tag Grid */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#F5F0E6] border border-[#1A2420]/8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#1A2420]">
              Specific Concerns We Address
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#4E5952]">
              Therapy is personalized to your lived experience—never a one-size-fits-all formula.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {focusAreas.map((area) => (
              <div
                key={area.id}
                className="bg-[#FFFFFF] p-4 rounded-xl border border-[#1A2420]/6 shadow-2xs hover:border-[#3F574A]/30 transition-colors"
              >
                <p className="font-serif-display text-base font-semibold text-[#1A2420]">
                  {area.label}
                </p>
                <p className="text-xs text-[#75817A] mt-1">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
