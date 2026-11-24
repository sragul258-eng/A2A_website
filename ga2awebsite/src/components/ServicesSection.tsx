import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench, Monitor, Keyboard, Cpu, Battery, Thermometer,
  HardDrive, Download, Settings, Wind, Database, Search, ArrowRight, CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../config';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wrench, Monitor, Keyboard, Cpu, Battery, Thermometer,
  HardDrive, Download, Settings, Wind, Database, Search,
};

const ServicesSection: React.FC = () => {
  const handleEnquire = (serviceName?: string) => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (serviceName) {
        const select = document.querySelector<HTMLSelectElement>('#contact-service');
        if (select) {
          // Attempt match
          for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase().slice(0, 5))) {
              select.selectedIndex = i;
              select.dispatchEvent(new Event('change', { bubbles: true }));
              break;
            }
          }
        }
      }
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#F8FAFF] border-y border-[#DDEAFF]" aria-label="Our laptop services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-3">Service Catalog</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] tracking-tight">
            Complete Laptop Care <span className="text-gradient">Under One Roof.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3D5A80] max-w-2xl mx-auto font-medium">
            Professional attention for all laptop hardware, component-level repairs, and software troubleshooting.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] || Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 4) * 0.06 }}
                className="group flex flex-col bg-white border border-[#D5E4F7] hover:border-[#1565C0] rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Top subtle accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1565C0] to-[#2196F3] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="w-13 h-13 rounded-xl bg-[#E3F0FF] group-hover:bg-[#1565C0] flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon size={24} className="text-[#1565C0] group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-[#0A1628] font-bold text-lg mb-2 leading-snug group-hover:text-[#1565C0] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#546E7A] text-sm leading-relaxed flex-1 font-medium">
                  {service.description}
                </p>

                {/* Footer of card */}
                <div className="mt-6 pt-4 border-t border-[#EEF4FF] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00C9A7] flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Verified Fix
                  </span>
                  <button
                    onClick={() => handleEnquire(service.title)}
                    className="flex items-center gap-1 text-xs font-extrabold text-[#1565C0] group-hover:text-[#0D47A1] hover:underline"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Enquire Now
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-white border border-[#C7DCFF] p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-black text-[#0A1628] mb-1">Have a unique or complicated laptop issue?</h4>
            <p className="text-sm font-medium text-[#546E7A]">
              Bring your laptop in for a zero-obligation diagnostic test by our senior technician.
            </p>
          </div>
          <button
            onClick={() => handleEnquire()}
            className="btn-primary px-7 py-3.5 text-sm whitespace-nowrap"
          >
            Request Free Diagnosis Consultation
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
