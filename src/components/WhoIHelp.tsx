import { whoIHelpCards } from '@/src/data/practiceData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface WhoIHelpProps {
  onOpenConsultation: () => void;
}

export default function WhoIHelp({ onOpenConsultation }: WhoIHelpProps) {
  return (
    <section id="who-i-help" className="py-16 sm:py-24 bg-[#FBF9F5] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6 border-b border-[#1A2420]/8 pb-6 sm:pb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3F574A] mb-2 block">
              Audience &amp; Focus
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A2420] tracking-tight text-balance">
              Who I work with
            </h2>
          </div>
          <p className="font-sans-body text-sm sm:text-base text-[#4E5952] max-w-md font-normal leading-relaxed">
            I specialize in offering individual therapy exclusively for adults seeking depth,
            clarity, and sustainable emotional health.
          </p>
        </div>

        {/* 3-Column Structured Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {whoIHelpCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#1A2420]/8 shadow-xs hover:border-[#3F574A]/40 transition-all duration-300 group"
            >
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9EFEA] text-[#3F574A] text-xs font-medium mb-5">
                  <Sparkles className="w-3 h-3 text-[#3F574A] shrink-0" />
                  <span className="truncate">{card.badge}</span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-[#1A2420] group-hover:text-[#3F574A] transition-colors leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3.5 text-sm sm:text-base text-[#4E5952] leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Card Footer Highlight */}
              <div className="mt-6 pt-5 border-t border-[#1A2420]/8">
                <p className="text-xs text-[#75817A] italic leading-normal mb-4">
                  {card.highlight}
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#3F574A] hover:text-[#1A2420] transition-colors group/btn cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A] rounded-sm"
                >
                  <span>Connect with Dr. Reynolds</span>
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
