import { clinicalModalities } from '@/src/data/practiceData';
import { Sparkles, Brain, Eye, Wind, Activity } from 'lucide-react';

interface ModalitiesProps {
  onOpenConsultation: () => void;
}

export default function Modalities({ onOpenConsultation }: ModalitiesProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'cbt':
        return Brain;
      case 'emdr':
        return Eye;
      case 'mindfulness':
        return Wind;
      case 'body-oriented':
        return Activity;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="modalities" className="py-16 sm:py-24 bg-[#FBF9F5] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3F574A] mb-2 block">
            Evidence-Based Frameworks
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A2420] tracking-tight text-balance">
            Therapeutic methods &amp; modalities
          </h2>
          <p className="mt-3 sm:mt-4 font-sans-body text-sm sm:text-base lg:text-lg text-[#4E5952] leading-relaxed">
            I integrate evidence-based methods to help clients understand both the emotional
            and physiological sides of what they are experiencing.
          </p>
        </div>

        {/* 4 Modalities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {clinicalModalities.map((modality) => {
            const Icon = getIcon(modality.id);
            return (
              <div
                key={modality.id}
                className="flex flex-col justify-between p-6 sm:p-8 lg:p-9 rounded-2xl bg-[#FFFFFF] border border-[#1A2420]/8 shadow-xs hover:border-[#3F574A]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#E9EFEA] flex items-center justify-center text-[#3F574A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    {modality.abbreviation && (
                      <span className="px-3 py-1 rounded-full bg-[#F5F0E6] text-[#B8684C] text-[11px] font-semibold uppercase tracking-wider">
                        {modality.abbreviation}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-medium text-[#1A2420] leading-snug">
                    {modality.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#3F574A]">
                    {modality.tagline}
                  </p>

                  <p className="mt-3.5 text-sm sm:text-base text-[#4E5952] leading-relaxed font-normal">
                    {modality.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#1A2420]/8">
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold uppercase tracking-wider text-[#3F574A] hover:text-[#1A2420] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A]"
                  >
                    Discuss in consultation →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
