import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, ArrowRight, CheckCircle, MapPin, Cpu } from 'lucide-react';
import { BUSINESS } from '../config';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Professional Expertise',
    desc: 'Trained technical specialists with hands-on chip-level servicing across all major brands including Dell, HP, Lenovo, Asus, Acer, Apple, and MSI.',
    color: '#1565C0',
    bg: '#E3F2FD',
  },
  {
    icon: Award,
    title: 'Affordable & Transparent',
    desc: 'Upfront diagnosis and fair pricing without hidden technician fees. We inspect first and give an exact estimate before beginning repairs.',
    color: '#00897B',
    bg: '#E0F2F1',
  },
  {
    icon: Users,
    title: 'Customer Trust & Satisfaction',
    desc: '315 verified 5-star reviews on Google testify to our commitment to timely deliveries, original spares, and dedicated post-service support.',
    color: '#D97706',
    bg: '#FEF3C7',
  },
];

const AboutSection: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 sm:py-24 bg-white" aria-label="About A2A Laptop Shopp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-3">About Our Service Center</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] tracking-tight">
            Technology Deserves <span className="text-gradient">Expert Care.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3D5A80] max-w-2xl mx-auto font-medium">
            Dedicated laptop servicing with unmatched reliability, honest repairs, and accessible student rates.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#EEF4FF] via-[#F8FAFF] to-[#E2EDFF] p-8 border border-[#C7DCFF] shadow-lg overflow-hidden">
              {/* Background watermark icon */}
              <Cpu className="absolute -bottom-10 -right-10 w-52 h-52 text-[#1565C0]/8 pointer-events-none" />

              {/* Header inside card */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white p-2.5 shadow-md border border-[#D5E4F7] flex items-center justify-center">
                  <img src="/logo.png" alt="A2A Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0D47A1]">A2A Laptop Shopp</h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1976D2] mt-0.5">
                    <MapPin size={13} />
                    <span>Pammal, Tambaram</span>
                  </div>
                </div>
              </div>

              {/* Service Features Checkmarks */}
              <div className="space-y-4 mb-8">
                {[
                  'Certified Laptop Engineers',
                  'Component-Level Motherboard Repair',
                  'Original Display & Battery Replacements',
                  'High-Speed SSD Upgrades & RAM Tuning',
                  'Safe & Confidential Data Handling',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/90 rounded-xl px-4 py-3 border border-[#DDEAFF] shadow-xs">
                    <CheckCircle size={18} className="text-[#00C9A7] flex-shrink-0" />
                    <span className="text-sm font-bold text-[#0A1628]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Rating Box */}
              <div className="bg-white rounded-2xl p-5 border border-[#D5E4F7] shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-[#0D47A1]">5.0 / 5.0</div>
                  <div className="text-xs text-[#546E7A] font-semibold">Google Verified Score</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-[#D97706]">315 Reviews</div>
                  <div className="text-xs text-[#00C9A7] font-bold">100% Recommended</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-[#3D5A80] text-base sm:text-lg leading-relaxed font-medium">
              <p>
                At <strong className="text-[#0D47A1] font-bold">A2A Laptop Shopp</strong>, we believe every laptop deserves meticulous, professional attention. We specialize in diagnosing difficult hardware and software issues that standard computer shops often turn away.
              </p>
              <p>
                Our philosophy is simple: deliver dependable repairs, preserve customer trust, maintain complete pricing transparency, and make expert technical solutions accessible to everyone — with dedicated discount programs specifically crafted for college students.
              </p>
            </div>

            {/* Value Cards */}
            <div className="grid gap-4 mt-2">
              {VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFF] hover:bg-[#EEF4FF] border border-[#D5E4F7] hover:border-[#93BBFF] transition-colors"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs"
                      style={{ backgroundColor: val.bg }}
                    >
                      <Icon size={20} style={{ color: val.color }} strokeWidth={2.3} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0A1628] mb-1">{val.title}</h4>
                      <p className="text-sm text-[#546E7A] font-medium leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary px-7 py-3.5 text-base"
              >
                Contact Our Specialists
                <ArrowRight size={17} />
              </button>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-secondary px-6 py-3.5 text-base bg-white"
              >
                Call: {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
