import { HeartHandshake } from 'lucide-react';

export default function IntroEmpathy() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#F5F0E6]/50 border-y border-[#1A2420]/8 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B8684C] mb-3 sm:mb-4">
          <HeartHandshake className="w-4 h-4 text-[#B8684C] shrink-0" />
          <span>Understanding Your Lived Experience</span>
        </div>

        {/* Core Empathy Headline */}
        <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1A2420] leading-snug tracking-tight max-w-4xl mx-auto text-balance">
          “Functional” on the outside, while quietly struggling with constant worry, tension, or exhaustion within.
        </h2>

        {/* Narrative Columns with Balanced Negative Space */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left text-[#4E5952] text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
          <div className="space-y-4">
            <p>
              Many of the people I work with are high-achieving, thoughtful, and self-aware—yet internally feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>
            <p>
              Clients frequently come to therapy feeling capable in their careers and daily routines, while privately carrying a persistent tension in their body, difficulty sleeping, or a sense that they are always bracing for something to go wrong.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              Others are navigating the lingering impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety in the world.
            </p>
            <p>
              I believe therapy works best when clients feel respected, understood, and actively involved. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
            </p>
          </div>
        </div>

        {/* Grounding takeaway callout */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#1A2420]/8 max-w-3xl mx-auto shadow-xs text-left flex items-start gap-4">
          <div className="w-1.5 sm:w-2 h-10 sm:h-12 bg-[#3F574A] rounded-full shrink-0" />
          <div>
            <p className="font-serif-display text-base sm:text-lg lg:text-xl text-[#1A2420] font-medium leading-snug">
              A collaborative, depth-oriented space designed to help you slow down.
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#4E5952]">
              Therapy can become a protected space to reconnect, step out of emergency mode, and develop sustainable ways of living and working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
