import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, IndianRupee, GraduationCap,
  ClipboardCheck, Star, MapPin
} from 'lucide-react';
import { WHY_CHOOSE } from '../config';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShieldCheck, IndianRupee, GraduationCap, ClipboardCheck, Star, MapPin,
};

const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-choose" className="py-20 sm:py-24 bg-white" aria-label="Why choose A2A Laptop Shopp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-3">Customer Advantages</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] tracking-tight">
            Why Customers Choose <span className="text-gradient">A2A Laptop Shopp.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3D5A80] max-w-2xl mx-auto font-medium">
            Proven standards, transparent communication, and technical depth you can count on.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                className="group relative bg-[#F8FAFF] hover:bg-white border border-[#D5E4F7] hover:border-[#1565C0] rounded-2xl p-8 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Number watermark in background */}
                <div
                  className="absolute top-4 right-5 text-6xl font-black text-[#1565C0]/5 group-hover:text-[#1565C0]/10 transition-colors select-none"
                  aria-hidden="true"
                >
                  {item.number}
                </div>

                {/* Icon */}
                <div className="w-13 h-13 rounded-xl bg-white border border-[#D5E4F7] group-hover:border-[#1565C0] group-hover:bg-[#1565C0] flex items-center justify-center mb-6 shadow-xs transition-all duration-300">
                  <Icon size={24} className="text-[#1565C0] group-hover:text-white transition-colors" />
                </div>

                {/* Sub-label */}
                <div className="text-xs font-black text-[#1976D2] tracking-wider uppercase mb-1">
                  Advantage {item.number}
                </div>

                {/* Title */}
                <h3 className="text-[#0A1628] font-black text-xl mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#546E7A] text-sm leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1565C0] to-[#2196F3] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
