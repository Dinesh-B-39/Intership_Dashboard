'use client';

import { useState } from 'react';
import { Plus, Minus, ArrowUpRight, HelpCircle } from 'lucide-react';
import { faqItems } from '@/src/data/practiceData';

interface FAQProps {
  onOpenConsultation: () => void;
}

export default function FAQ({ onOpenConsultation }: FAQProps) {
  // Independent open state for each FAQ item by unique ID; start with first item open
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() => ({
    [faqItems[0]?.id || 'who-does-dr-reynolds-work-with']: true,
  }));

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faqs"
      className="py-16 sm:py-24 bg-[#FFFFFF] border-y border-[#1A2420]/8 scroll-mt-24 sm:scroll-mt-28"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Section Title & Guidance */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EFEA] text-[#3F574A] text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#3F574A] shrink-0" />
              <span>Practice Inquiries &amp; Clarity</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A2420] tracking-tight leading-tight text-balance">
              Frequently Asked Questions
            </h2>

            <p className="font-sans-body text-sm sm:text-base lg:text-lg text-[#4E5952] leading-relaxed">
              Clear, grounded information about working with Dr. Maya Reynolds, clinical specializations, treatment modalities, and session settings.
            </p>

            {/* Quiet helper card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FBF9F5] border border-[#1A2420]/8 shadow-2xs space-y-3">
              <p className="font-serif-display text-base sm:text-lg font-semibold text-[#1A2420]">
                Have an unaddressed question?
              </p>
              <p className="text-xs sm:text-sm text-[#4E5952] leading-relaxed">
                If you have questions about therapy availability or whether this practice is a good fit for your current circumstances, you are welcome to connect through an initial consultation.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3F574A] hover:text-[#1A2420] transition-colors cursor-pointer group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A] rounded-xs"
                >
                  <span>Inquire with Dr. Reynolds</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Editorial Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#1A2420]/10 border-y border-[#1A2420]/10">
              {faqItems.map((item) => {
                const isOpen = !!openItems[item.id];
                const questionId = `faq-question-${item.id}`;
                const panelId = `faq-panel-${item.id}`;

                return (
                  <div key={item.id} className="py-2 transition-colors">
                    <h3>
                      <button
                        type="button"
                        id={questionId}
                        data-faq-id={item.id}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between text-left py-4 sm:py-5 gap-4 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A] focus-visible:ring-offset-2 rounded-lg cursor-pointer"
                      >
                        <span className="font-serif-display text-lg sm:text-xl lg:text-2xl font-medium text-[#1A2420] group-hover:text-[#3F574A] transition-colors leading-snug pr-2">
                          {item.question}
                        </span>

                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                            isOpen
                              ? 'bg-[#3F574A] text-[#FBF9F5]'
                              : 'bg-[#E9EFEA] text-[#3F574A] group-hover:bg-[#3F574A] group-hover:text-[#FBF9F5]'
                          }`}
                          aria-hidden="true"
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4 transition-transform duration-200" />
                          ) : (
                            <Plus className="w-4 h-4 transition-transform duration-200" />
                          )}
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={questionId}
                      style={{
                        display: 'grid',
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        transition: 'grid-template-rows 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 250ms ease',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div style={{ overflow: 'hidden' }}>
                        <p className="font-sans-body text-sm sm:text-base text-[#4E5952] leading-relaxed pr-4 sm:pr-8 pb-5 sm:pb-6 font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


