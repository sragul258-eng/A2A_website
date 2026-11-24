import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, MessageCircle, CheckCircle2, Tag } from 'lucide-react';
import { BUSINESS } from '../config';

const StudentOffersSection: React.FC = () => {
  const handleEnquire = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="student-offers"
      className="py-20 sm:py-24 bg-gradient-to-br from-[#EEF5FF] via-[#F4F9FF] to-[#E3F0FF] border-b border-[#DDEAFF] relative overflow-hidden"
      aria-label="Student offers"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#2196F3]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#00C9A7]/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1565C0]/10 border border-[#1565C0]/25 text-[#1565C0] text-xs font-black tracking-wider uppercase mb-5">
              <GraduationCap size={16} />
              <span>Special Academic Pricing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] tracking-tight leading-[1.15] mb-5">
              Students Deserve <span className="text-gradient">Better Tech Support.</span>
            </h2>

            <p className="text-lg text-[#1565C0] font-bold mb-4">
              Your laptop is the backbone of your studies. Get reliable laptop servicing at student-friendly prices.
            </p>

            <p className="text-[#3D5A80] text-base leading-relaxed font-medium mb-8">
              We know how crucial uninterrupted laptop access is during assignments, exams, and project submissions. <strong className="text-[#0D47A1]">A2A Laptop Shopp</strong> offers special student discount programs to ensure professional repairs are never out of reach for college students in and around Tambaram.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8 w-full max-w-lg">
              {[
                'Special concessional rates on all hardware & OS service',
                'Priority turnaround for urgent project deadlines',
                'Free thermal cleaning included with any major component repair',
                'Just show your valid college/school ID card to claim',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/80 rounded-xl px-4 py-3 border border-[#D5E4F7] shadow-xs">
                  <CheckCircle2 size={18} className="text-[#00C9A7] flex-shrink-0" />
                  <span className="text-sm font-bold text-[#0A1628]">{text}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={handleEnquire}
                className="btn-primary text-base px-7 py-3.5 shadow-lg"
              >
                Enquire About Student Discounts
                <ArrowRight size={17} />
              </button>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi A2A! I am a student and would like to know about your student discounts for laptop servicing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-6 py-3.5 bg-white shadow-xs"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right Column: Promotional Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-[#BBD5FF] shadow-xl relative overflow-hidden">
              
              {/* Badge Corner Ribbon */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#1565C0] rotate-45 flex items-end justify-center pb-2">
                <Tag size={16} className="text-white -rotate-45" />
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#E3F0FF] border border-[#BBD5FF] flex items-center justify-center mb-6">
                <GraduationCap size={34} className="text-[#1565C0]" />
              </div>

              <div className="inline-block px-4 py-1.5 rounded-lg bg-[#E8F5E9] text-[#2E7D32] text-xs font-black uppercase tracking-wider mb-3">
                College ID Program
              </div>

              <h3 className="text-2xl font-black text-[#0A1628] mb-2">
                A2A Student Privilege
              </h3>
              <p className="text-sm text-[#546E7A] font-medium mb-6">
                Applicable across engineering, arts, science, and diploma students across Chennai & Tambaram.
              </p>

              {/* What's covered */}
              <div className="space-y-2.5 pt-4 border-t border-[#EEF4FF] mb-6">
                {[
                  'Display Replacement & Hinge Fixes',
                  'Motherboard & Power Jack Repairs',
                  'Battery & Adapter Replacements',
                  'RAM & NVMe SSD Speed Boosts',
                  'OS Reinstallation & Antivirus Setup',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#2C3E50]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1565C0]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleEnquire}
                className="btn-primary w-full justify-center py-3.5 text-sm"
              >
                Claim Student Offer Now
              </button>

              <p className="text-[11px] text-center text-[#78909C] font-semibold mt-3">
                *Valid student identification card required at inspection.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StudentOffersSection;
