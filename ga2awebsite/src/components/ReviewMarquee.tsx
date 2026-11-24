import React from 'react';
import { Star } from 'lucide-react';

const TRUST_ITEMS = [
  { stars: 5, text: 'Rated 5.0 on Google', sub: '315 Verified Reviews', type: 'rating' },
  { stars: 5, text: 'Fast & genuine laptop repair in Tambaram!', sub: 'Google Review', type: 'review' },
  { stars: 5, text: 'Professional Laptop Service', sub: 'Certified Technicians', type: 'tag' },
  { stars: 5, text: 'Very reasonable price & honest diagnosis.', sub: 'Google Review', type: 'review' },
  { stars: 5, text: 'Special Student Discounts', sub: 'College ID Offers', type: 'tag' },
  { stars: 5, text: 'Replaced my laptop screen in 2 hours!', sub: 'Google Review', type: 'review' },
  { stars: 5, text: 'Customer-Focused Support', sub: 'Transparent Pricing', type: 'tag' },
  { stars: 5, text: 'My dead motherboard was revived successfully.', sub: 'Google Review', type: 'review' },
  { stars: 5, text: '315+ Google Reviews', sub: 'A2A Laptop Shopp', type: 'rating' },
  { stars: 5, text: 'Best laptop service center in Pammal area.', sub: 'Google Review', type: 'review' },
  { stars: 5, text: 'Reliable Laptop Solutions', sub: 'Hardware & Software', type: 'tag' },
  { stars: 5, text: 'Clean internal servicing & thermal repaste.', sub: 'Google Review', type: 'review' },
];

// Duplicate for continuous seamless infinite loop
const ALL_ITEMS = [...TRUST_ITEMS, ...TRUST_ITEMS];

const ReviewMarquee: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border-y border-[#DDEAFF] py-3.5 overflow-hidden shadow-sm">
      <div className="marquee-wrapper">
        <div className="marquee-fade-left" aria-hidden="true" />
        <div className="marquee-fade-right" aria-hidden="true" />

        <div className="marquee-track" aria-label="Customer review highlights" role="marquee">
          {ALL_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 mx-2.5 flex items-center gap-3 px-4 py-2 rounded-xl bg-[#F8FAFF] hover:bg-[#EEF4FF] border border-[#D5E4F7] min-w-max transition-colors shadow-xs"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Text */}
              <div>
                <p className="text-xs sm:text-sm text-[#0A1628] font-bold leading-tight whitespace-nowrap">
                  {item.text}
                </p>
                <p className="text-[11px] text-[#546E7A] font-semibold mt-0.5 whitespace-nowrap">{item.sub}</p>
              </div>

              {/* Google G icon for review items */}
              {item.type === 'review' && (
                <div className="ml-1 pl-1 border-l border-slate-200">
                  <svg width="15" height="15" viewBox="0 0 24 24" aria-label="Google" role="img">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewMarquee;
