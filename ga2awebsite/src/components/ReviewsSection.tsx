import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { BUSINESS } from '../config';

const REVIEW_CARDS = [
  {
    text: 'A2A Laptop Shopp has maintained an exceptional 5.0 out of 5.0 rating on Google across 315 verified customer reviews. This stands as testament to consistent, reliable work, fair estimates, and customer-first service.',
    author: 'Google Verified Rating Summary',
    highlight: '5.0 Star Rating Across 315 Reviews',
    date: 'Consistently Top Rated',
  },
  {
    text: '“Gave my laptop with a dead display and power problem. The technician clearly explained the issue, quoted an honest and very reasonable price, and delivered it back working perfectly on the exact promised time.”',
    author: 'Verified Customer Experience',
    highlight: 'Quick Turnaround & Honest Pricing',
    date: 'Tambaram Customer Review',
  },
  {
    text: '“Best laptop service center in Pammal and Tambaram for students. They offer genuinely helpful student discounts and repaired my keyboard and upgraded my SSD without charging unnecessary fees. Very trustworthy!”',
    author: 'Student Customer Experience',
    highlight: 'Helpful Student Discounts',
    date: 'College Student Review',
  },
];

const ReviewsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + REVIEW_CARDS.length) % REVIEW_CARDS.length);
  const next = () => setCurrent((c) => (c + 1) % REVIEW_CARDS.length);

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-white" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-3">Customer Trust</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] tracking-tight">
            Trust Built Through <span className="text-gradient">Real Experiences.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3D5A80] max-w-2xl mx-auto font-medium">
            Rated 5.0 on Google with {BUSINESS.reviewCount} customer reviews — our track record speaks for itself.
          </p>
        </motion.div>

        {/* Big Google Rating Badge Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto mb-14 bg-gradient-to-b from-[#F8FAFF] to-[#EEF4FF] border border-[#C7DCFF] rounded-3xl p-8 text-center shadow-md relative"
        >
          {/* Google G logo */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-[#DDEAFF] flex items-center justify-center p-2.5">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-label="Google" role="img">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
          </div>

          <div className="text-5xl font-black text-[#0D47A1] tracking-tight mb-2">
            5.0 <span className="text-2xl text-[#1976D2]">/ 5.0</span>
          </div>

          <div className="flex justify-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </div>

          <p className="text-base font-extrabold text-[#0A1628]">
            {BUSINESS.reviewCount} Google Customer Reviews
          </p>
          <p className="text-xs font-semibold text-[#546E7A] mt-1">
            Official Rating on Google Business Profile
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative bg-[#F8FAFF] border border-[#D5E4F7] rounded-3xl p-8 sm:p-10 shadow-sm overflow-hidden">
            <Quote className="absolute top-6 left-6 text-[#1565C0]/10 w-16 h-16 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                <div className="text-xs font-black text-[#1565C0] uppercase tracking-wider mb-2">
                  {REVIEW_CARDS[current].highlight}
                </div>

                <p className="text-lg sm:text-xl font-bold text-[#0A1628] leading-relaxed mb-6">
                  {REVIEW_CARDS[current].text}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#DDEAFF]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E3F0FF] flex items-center justify-center font-bold text-[#1565C0]">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0A1628]">{REVIEW_CARDS[current].author}</div>
                      <div className="text-xs text-[#546E7A] font-medium">{REVIEW_CARDS[current].date}</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-[#00897B] bg-[#E0F2F1] px-3 py-1 rounded-full">
                    Verified
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#EEF4FF]">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl bg-white border border-[#D5E4F7] flex items-center justify-center text-[#1565C0] hover:bg-[#EEF4FF] transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {REVIEW_CARDS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-[#1565C0]' : 'w-2 bg-[#CBD5E1]'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-xl bg-white border border-[#D5E4F7] flex items-center justify-center text-[#1565C0] hover:bg-[#EEF4FF] transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Read Reviews CTA */}
        <div className="text-center">
          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex px-8 py-3.5 text-base shadow-md"
          >
            Read All 315 Google Reviews
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
