import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { therapistInfo } from '@/src/data/practiceData';

interface CallToActionProps {
  onOpenConsultation: () => void;
}

export default function CallToAction({ onOpenConsultation }: CallToActionProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#FBF9F5] relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl bg-[#3F574A] text-[#FBF9F5] p-6 sm:p-12 lg:p-16 overflow-hidden shadow-lg text-center">
          {/* Subtle geometric background overlay */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#FFFFFF]/5 pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-[#FFFFFF]/5 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EFEA]/15 text-[#E9EFEA] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E9EFEA] shrink-0" />
              <span>Begin With a Consultation</span>
            </div>

            <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FBF9F5] tracking-tight text-balance">
              Ready to find a more sustainable way of living and working?
            </h2>

            <p className="font-sans-body text-sm sm:text-base lg:text-lg text-[#E9EFEA]/90 leading-relaxed font-normal max-w-2xl mx-auto">
              If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-schedule-btn"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-widest text-[#1A2420] bg-[#FBF9F5] hover:bg-[#E9EFEA] rounded-full transition-all duration-200 shadow-xs active:scale-98 cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FBF9F5]"
              >
                <Calendar className="mr-2 w-4 h-4 text-[#3F574A] shrink-0" />
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-[#3F574A] shrink-0" />
              </button>
            </div>

            <div className="pt-5 border-t border-[#FBF9F5]/15 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#E9EFEA]/80 font-medium">
              <span>• Santa Monica Office (In-Person)</span>
              <span>• California Telehealth (Secure Video)</span>
              <span>• {therapistInfo.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
