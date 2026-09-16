'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle, MapPin, Monitor } from 'lucide-react';
import { therapistInfo } from '@/src/data/practiceData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    format: 'santa-monica',
    concern: 'anxiety-panic',
    message: '',
  });

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard accessibility: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleReset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      format: 'santa-monica',
      concern: 'anxiety-panic',
      message: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1A2420]/65 backdrop-blur-xs flex items-center justify-center p-3.5 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleReset();
      }}
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#FBF9F5] rounded-2xl sm:rounded-3xl border border-[#1A2420]/15 shadow-2xl p-5 sm:p-8 text-[#1A2420] my-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-[#75817A] hover:text-[#1A2420] hover:bg-[#E9EFEA] transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3F574A]"
          aria-label="Close consultation dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#3F574A] font-semibold block">
                Initial Consultation
              </span>
              <h3 id="consultation-modal-title" className="font-serif-display text-2xl sm:text-3xl font-medium text-[#1A2420] mt-1 leading-snug">
                Connect with {therapistInfo.name}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#4E5952] leading-relaxed">
                Please complete the form below to inquire about therapy availability. Sessions are offered for adults in-person at our Santa Monica office and virtually across California.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jane Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1A2420]/15 bg-[#FFFFFF] text-sm focus:outline-hidden focus:border-[#3F574A] focus:ring-1 focus:ring-[#3F574A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1A2420]/15 bg-[#FFFFFF] text-sm focus:outline-hidden focus:border-[#3F574A] focus:ring-1 focus:ring-[#3F574A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-1">
                    Preferred Session Format
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#1A2420]/15 bg-[#FFFFFF] text-sm focus:outline-hidden focus:border-[#3F574A] focus:ring-1 focus:ring-[#3F574A] transition-colors"
                  >
                    <option value="santa-monica">Santa Monica Office (In-Person)</option>
                    <option value="telehealth">California Telehealth (Virtual)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-1">
                    Primary Area of Focus
                  </label>
                  <select
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#1A2420]/15 bg-[#FFFFFF] text-sm focus:outline-hidden focus:border-[#3F574A] focus:ring-1 focus:ring-[#3F574A] transition-colors"
                  >
                    <option value="anxiety-panic">Anxiety &amp; Panic</option>
                    <option value="trauma">Trauma &amp; Complex Trauma</option>
                    <option value="burnout">Burnout, Perfectionism &amp; Stress</option>
                    <option value="general">Adult Individual Therapy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-1">
                  Brief Note or Inquiry (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a few words about what brings you to therapy at this time..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1A2420]/15 bg-[#FFFFFF] text-sm focus:outline-hidden focus:border-[#3F574A] focus:ring-1 focus:ring-[#3F574A] transition-colors resize-none"
                />
              </div>

              <div className="pt-1.5">
                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-widest text-[#FBF9F5] bg-[#3F574A] hover:bg-[#2F4238] transition-all cursor-pointer shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3F574A]"
                >
                  Submit Consultation Request
                </button>
              </div>

              <p className="text-[11px] text-[#75817A] text-center pt-1 leading-normal">
                Adult clients (18+) residing in California. In-person office located in Santa Monica, CA.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 sm:py-8 space-y-3.5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E9EFEA] text-[#3F574A] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#1A2420]">
              Consultation Request Received
            </h3>
            <p className="text-xs sm:text-sm text-[#4E5952] max-w-md mx-auto leading-relaxed">
              Thank you, {formData.name}. Your inquiry has been noted. We look forward to connecting with you regarding therapy availability.
            </p>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFFFFF] border border-[#1A2420]/8 text-left text-xs text-[#4E5952] max-w-sm mx-auto space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#3F574A] shrink-0" /> {therapistInfo.address}
              </p>
              <p className="flex items-center gap-2">
                <Monitor className="w-3.5 h-3.5 text-[#3F574A] shrink-0" /> California Telehealth Available
              </p>
            </div>
            <button
              onClick={handleReset}
              className="mt-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1A2420] bg-[#E9EFEA] hover:bg-[#3F574A] hover:text-[#FBF9F5] transition-colors cursor-pointer"
            >
              Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
