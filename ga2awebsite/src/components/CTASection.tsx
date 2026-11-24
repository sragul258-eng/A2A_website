import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ArrowRight, Star, Clock } from 'lucide-react';
import { BUSINESS } from '../config';

const CTASection: React.FC = () => {
  return (
    <section
      className="py-20 sm:py-24 bg-gradient-to-br from-[#1565C0] via-[#0D47A1] to-[#0A1628] text-white relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#38BDF8] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00C9A7] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-7"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Clock size={15} className="text-[#38BDF8]" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              Open Today • Closes at 9:00 PM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
            Don't Let Laptop Problems <br className="hidden sm:inline" />
            Slow Your Productivity Down.
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
            Get reliable, certified laptop service at honest, affordable prices. Visit{' '}
            <strong className="text-white font-black">A2A Laptop Shopp</strong> in Tambaram today and experience top-tier technical care.
          </p>

          {/* Review badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-sm font-bold text-white">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span>5.0 / 5.0 Rating • 315 Google Reviews</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 justify-center w-full sm:w-auto pt-2">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0D47A1] font-black text-base px-8 py-4 rounded-xl shadow-xl hover:bg-slate-100 transition-all hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Call A2A Now: {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base px-8 py-4"
            >
              <MapPin size={18} />
              Get Directions
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
