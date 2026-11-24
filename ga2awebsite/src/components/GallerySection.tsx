import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Laptop, Wrench, Cpu, Monitor, Shield, Sparkles } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: 1, label: 'Service Center Front Desk', desc: 'Customer reception & diagnosis counter', icon: Laptop, tag: 'Reception' },
  { id: 2, label: 'Chip-Level Repair Station', desc: 'Precision soldering & microscope rework', icon: Cpu, tag: 'BGA & Logic' },
  { id: 3, label: 'Screen & Panel Assembly', desc: 'Original LED/IPS display replacements', icon: Monitor, tag: 'Displays' },
  { id: 4, label: 'Testing & Quality Check', desc: 'Benchmark testing before final delivery', icon: Shield, tag: 'Quality Check' },
  { id: 5, label: 'Hardware Diagnostic Toolkit', desc: 'Certified multimeters & programmer tools', icon: Wrench, tag: 'Tools' },
  { id: 6, label: 'Upgrades & OS Optimization', desc: 'High-speed NVMe SSD & memory installations', icon: Sparkles, tag: 'Upgrades' },
];

const GallerySection: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const currentItem = lightbox !== null ? GALLERY_ITEMS[lightbox] : null;

  const prevItem = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const nextItem = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % GALLERY_ITEMS.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#F8FAFF] border-b border-[#DDEAFF]" aria-label="Our workspace gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-3">Service Environment</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] tracking-tight">
            A Closer Look at Our <span className="text-gradient">Service Center.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3D5A80] max-w-2xl mx-auto font-medium">
            Equipped with modern repair tooling, ESD-safe workstations, and genuine component inventory.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                onClick={() => setLightbox(idx)}
                className="group relative overflow-hidden rounded-2xl border border-[#D5E4F7] hover:border-[#1565C0] bg-white aspect-[4/3] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between p-6"
                aria-label={`View ${item.label}`}
              >
                {/* Background ambient gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F0F6FF] via-white to-[#E8F2FF] group-hover:scale-105 transition-transform duration-500" />

                {/* Top tag & zoom icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#E3F0FF] text-[#1565C0]">
                    {item.tag}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white shadow-xs border border-[#DDEAFF] flex items-center justify-center text-[#1565C0] group-hover:scale-110 transition-transform">
                    <ZoomIn size={16} />
                  </div>
                </div>

                {/* Center Icon Graphic */}
                <div className="relative z-10 my-auto flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-[#D5E4F7] flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <Icon size={32} className="text-[#1565C0]" />
                  </div>
                </div>

                {/* Bottom title & description */}
                <div className="relative z-10 pt-3 border-t border-[#EEF4FF]">
                  <div className="text-[#0A1628] font-bold text-base group-hover:text-[#1565C0] transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[#546E7A] text-xs font-medium mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <p className="text-center text-xs font-semibold text-[#78909C] mt-8">
          A2A Laptop Shopp • 16/196, Pammal Main Road, Tambaram, Chennai
        </p>

      </div>

      {/* Lightbox Dialog */}
      <AnimatePresence>
        {lightbox !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A1628]/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing: ${currentItem.label}`}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-[#0A1628] flex items-center justify-center shadow-lg hover:bg-slate-100 transition-colors z-50"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#0A1628] flex items-center justify-center shadow-lg hover:bg-slate-100 transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); prevItem(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#0A1628] flex items-center justify-center shadow-lg hover:bg-slate-100 transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); nextItem(); }}
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            {/* Modal Body */}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-xl w-full bg-white rounded-3xl p-8 shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#1565C0] bg-[#E3F0FF] px-2.5 py-1 rounded">
                  {currentItem.tag}
                </span>
                <span className="text-xs text-slate-400 font-bold">Image {lightbox + 1} of {GALLERY_ITEMS.length}</span>
              </div>
              
              <h3 className="text-2xl font-black text-[#0A1628] mb-1">{currentItem.label}</h3>
              <p className="text-sm font-medium text-[#546E7A] mb-6">{currentItem.desc}</p>

              <div className="h-64 rounded-2xl bg-[#EEF4FF] border border-[#D5E4F7] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-3">
                  <img src="/logo.png" alt="A2A" className="w-12 h-12 object-contain" />
                </div>
                <div className="text-sm font-bold text-[#0D47A1]">A2A Laptop Shopp Service Facility</div>
                <div className="text-xs text-[#546E7A] mt-1">Pammal Main Road, Tambaram, Tamil Nadu</div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs font-bold text-[#1565C0]">A2A Laptop Shopp — Tambaram</div>
                <button
                  onClick={() => setLightbox(null)}
                  className="btn-secondary text-xs px-4 py-2"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
