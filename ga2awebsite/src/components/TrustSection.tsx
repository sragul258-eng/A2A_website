import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Wrench, GraduationCap } from 'lucide-react';
import { BUSINESS } from '../config';

const TRUST_ITEMS = [
  {
    icon: Star,
    value: `${BUSINESS.rating}.0`,
    label: 'Google Rating',
    desc: 'Perfect 5-Star Reputation',
    color: '#D97706',
    bgColor: '#FEF3C7',
    borderColor: '#FDE68A',
  },
  {
    icon: MessageSquare,
    value: `${BUSINESS.reviewCount}+`,
    label: 'Google Reviews',
    desc: 'Satisfied Verified Customers',
    color: '#1565C0',
    bgColor: '#E3F2FD',
    borderColor: '#BBDEFB',
  },
  {
    icon: Wrench,
    value: 'Professional',
    label: 'Laptop Service',
    desc: 'Expert Chip-Level Repairs',
    color: '#0D9488',
    bgColor: '#CCFBF1',
    borderColor: '#99F6E4',
  },
  {
    icon: GraduationCap,
    value: 'Special',
    label: 'Student Discounts',
    desc: 'College-Friendly Pricing',
    color: '#7C3AED',
    bgColor: '#EDE9FE',
    borderColor: '#DDD6FE',
  },
];

const TrustSection: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#DDEAFF] py-12" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#F8FAFF] hover:bg-[#F0F5FF] border border-[#D5E4F7] hover:border-[#93BBFF] shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                  style={{ backgroundColor: item.bgColor, border: `1px solid ${item.borderColor}` }}
                >
                  <Icon size={24} style={{ color: item.color }} strokeWidth={2.3} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A1628] leading-tight tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-[#1565C0]">{item.label}</div>
                  <div className="text-xs text-[#546E7A] font-medium mt-0.5">{item.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
