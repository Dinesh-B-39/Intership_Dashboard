export default function EditorialBreather() {
  return (
    <section className="py-16 sm:py-22 bg-[#3F574A] text-[#FBF9F5] relative overflow-hidden">
      {/* Subtle organic texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10">
        <span className="text-xs uppercase tracking-widest text-[#E9EFEA]/80 font-medium mb-4 sm:mb-5 block">
          Clinical Philosophy
        </span>

        <blockquote className="font-serif-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed text-[#FBF9F5] italic text-balance">
          “Therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.”
        </blockquote>

        <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-3">
          <div className="h-px w-8 bg-[#E9EFEA]/30" />
          <p className="text-xs uppercase tracking-widest text-[#E9EFEA] font-semibold">
            Dr. Maya Reynolds, PsyD
          </p>
          <div className="h-px w-8 bg-[#E9EFEA]/30" />
        </div>
      </div>
    </section>
  );
}
