import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { BUSINESS } from '../config';
import ReviewMarquee from './ReviewMarquee';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven animation for the 3D laptop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Turn around (rotateY) as you scroll: from gentle isometric angle (15deg) to turned around (160deg)
  const laptopRotateY = useTransform(scrollYProgress, [0, 0.8], [-12, 160]);
  // Pitch angle
  const laptopRotateX = useTransform(scrollYProgress, [0, 0.8], [14, 25]);
  // Scale down slightly and float
  const laptopScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.88]);

  // Screen lid rotation: open at ~-105deg (leaning back) to 0deg (completely shut flat)
  const lidRotateX = useTransform(scrollYProgress, [0, 0.7], [-105, 0]);

  // Screen brightness/fade as it shuts
  const screenOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[110vh] flex flex-col justify-between pt-24 pb-0 bg-gradient-to-b from-[#F4F8FF] via-[#FFFFFF] to-[#F0F5FF] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background modern ambient blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#2196F3]/10 via-[#1565C0]/8 to-[#00C9A7]/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1976D2]/8 rounded-full blur-2xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#2196F3]/7 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#1565C0 1.5px, transparent 1.5px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Trust Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* 5-Star Google Reviews Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#D5E4F7] shadow-sm hover:shadow-md transition-shadow mb-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#0D47A1]">
                <span>5.0 / 5.0 Rating</span>
                <span className="text-[#546E7A] font-semibold">({BUSINESS.reviewCount} Verified Google Reviews)</span>
              </div>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F5E9] text-[#2E7D32]">
                100% Trust
              </span>
            </motion.div>

            {/* Main Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-extrabold leading-[1.12] tracking-tight text-[#0A1628] mb-5">
              Expert Laptop Care.{' '}
              <span className="text-gradient block sm:inline">Reliable Solutions.</span>{' '}
              Affordable Prices.
            </h1>

            {/* Subheading / Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-8 h-1 bg-[#1976D2] rounded-full" />
              <p className="text-lg sm:text-xl font-bold text-[#1565C0] tracking-wide">
                {BUSINESS.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#3D5A80] font-medium leading-relaxed max-w-xl mb-8">
              From hardware diagnosis and display replacements to motherboard micro-soldering and software fixes,{' '}
              <strong className="text-[#0D47A1] font-bold">A2A Laptop Shopp</strong> delivers certified repair expertise, transparent pricing, and special student discounts.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
              >
                <Phone size={18} />
                Get Your Laptop Repaired
              </a>
              <button
                onClick={() => scrollTo('#services')}
                className="btn-secondary text-base px-6 py-3.5 w-full sm:w-auto justify-center bg-white"
              >
                Explore Services
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Key Trust Highlights under CTAs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-2 border-t border-[#E1EAF5]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2C3E50]">
                <ShieldCheck size={16} className="text-[#1565C0] flex-shrink-0" />
                <span>Genuine Spare Parts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#2C3E50]">
                <CheckCircle2 size={16} className="text-[#00C9A7] flex-shrink-0" />
                <span>Same-Day Diagnosis</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#2C3E50] col-span-2 sm:col-span-1">
                <Clock size={16} className="text-[#F59E0B] flex-shrink-0" />
                <span>Open till 9:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Laptop Scroll Animation (Turns around and closes) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Scroll Hint Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#D0E2FF] shadow-sm text-xs font-bold text-[#1565C0] mb-4">
              <Sparkles size={13} className="text-[#F59E0B]" />
              <span>Scroll down to watch laptop turn & close</span>
            </div>

            {/* 3D Perspective Container */}
            <div
              className="w-full max-w-[420px] h-[370px] sm:h-[420px] flex items-center justify-center relative select-none"
              style={{ perspective: '1100px' }}
            >
              {/* Animated Laptop Rig */}
              <motion.div
                style={{
                  rotateY: laptopRotateY,
                  rotateX: laptopRotateX,
                  scale: laptopScale,
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-[340px] sm:w-[380px] h-[260px] flex flex-col items-center cursor-grab active:cursor-grabbing"
              >
                {/* 1. SCREEN LID (Hinges at the bottom edge of the screen) */}
                <motion.div
                  style={{
                    rotateX: lidRotateX,
                    transformOrigin: 'bottom center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="w-[340px] sm:w-[380px] h-[220px] sm:h-[240px] relative rounded-t-xl rounded-b-sm shadow-2xl"
                >
                  {/* FRONT FACE (Screen & Bezel) */}
                  <div
                    className="absolute inset-0 rounded-t-xl rounded-b-sm bg-[#0B1526] p-2.5 flex flex-col border-[2.5px] border-[#CBD5E1]"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(1px)',
                    }}
                  >
                    {/* Webcam & Sensor notch */}
                    <div className="w-full flex justify-center items-center py-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#1E293B] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#38BDF8]" />
                      </div>
                    </div>

                    {/* Active Display Panel */}
                    <motion.div
                      style={{ opacity: screenOpacity }}
                      className="flex-1 rounded-md bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A192F] p-3 text-white flex flex-col justify-between border border-cyan-500/20 overflow-hidden relative shadow-inner"
                    >
                      {/* Ambient screen grid */}
                      <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                          backgroundImage: 'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
                          backgroundSize: '16px 16px',
                        }}
                      />

                      {/* Top bar inside laptop screen */}
                      <div className="flex items-center justify-between z-10">
                        <div className="flex items-center gap-1.5">
                          <img src="/logo.png" alt="A2A" className="w-4 h-4 object-contain" />
                          <span className="text-[11px] font-extrabold tracking-tight text-white">A2A Diagnostics OS</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-[9px] font-bold text-emerald-400">ONLINE</span>
                        </div>
                      </div>

                      {/* Screen Center Graphic: Laptop Health & Service */}
                      <div className="my-auto py-1 z-10 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-400/40 flex items-center justify-center mb-1.5 shadow-lg shadow-blue-500/20">
                          <ShieldCheck size={20} className="text-cyan-400" />
                        </div>
                        <div className="text-xs font-black text-white tracking-wide">A2A LAPTOP SHOPP</div>
                        <div className="text-[10px] text-cyan-300 font-semibold">Reliable Service • Affordable Price</div>

                        <div className="mt-2.5 grid grid-cols-3 gap-1.5 w-full">
                          <div className="bg-white/10 rounded px-1 py-1 border border-white/5">
                            <div className="text-[8px] text-slate-300">Google Rating</div>
                            <div className="text-[10px] font-black text-amber-400">★ 5.0</div>
                          </div>
                          <div className="bg-white/10 rounded px-1 py-1 border border-white/5">
                            <div className="text-[8px] text-slate-300">Reviews</div>
                            <div className="text-[10px] font-black text-white">315+</div>
                          </div>
                          <div className="bg-white/10 rounded px-1 py-1 border border-white/5">
                            <div className="text-[8px] text-slate-300">Students</div>
                            <div className="text-[10px] font-black text-emerald-400">DISCOUNT</div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom status line */}
                      <div className="flex items-center justify-between text-[8px] text-slate-400 font-mono z-10 pt-1 border-t border-white/10">
                        <span>Tambaram, Tamil Nadu</span>
                        <span className="text-cyan-400 font-bold">093636 26671</span>
                      </div>
                    </motion.div>

                    {/* Chin logo */}
                    <div className="text-center py-1">
                      <span className="text-[8px] font-black text-slate-400 tracking-widest uppercase">A2A LAPTOP SHOPP</span>
                    </div>
                  </div>

                  {/* BACK FACE OF LID (What you see when the laptop turns around or closes!) */}
                  <div
                    className="absolute inset-0 rounded-t-xl rounded-b-sm bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] border-2 border-slate-300 shadow-xl flex flex-col items-center justify-center"
                    style={{
                      transform: 'rotateY(180deg) translateZ(1px)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Metallic finish & centered glossy logo */}
                    <div className="w-16 h-16 rounded-full bg-white shadow-md border-2 border-[#1565C0]/40 flex items-center justify-center p-2">
                      <img src="/logo.png" alt="A2A Logo" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-[11px] font-black tracking-wider text-[#0D47A1] block">A2A LAPTOP SHOPP</span>
                      <span className="text-[9px] font-bold text-slate-600">TAMBARAM</span>
                    </div>
                  </div>
                </motion.div>

                {/* 2. LAPTOP KEYBOARD BASE (Bottom deck) */}
                <div
                  className="w-[350px] sm:w-[395px] h-[160px] sm:h-[175px] -mt-1 rounded-b-2xl rounded-t-sm bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] p-3 shadow-2xl border-t border-slate-300 border-x border-b border-slate-400 relative"
                  style={{
                    transform: 'rotateX(78deg)',
                    transformOrigin: 'top center',
                    boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.45)',
                  }}
                >
                  {/* Keyboard Deck Inset */}
                  <div className="w-full h-[95px] sm:h-[105px] rounded-lg bg-[#0F172A] p-1.5 flex flex-col justify-between shadow-inner">
                    {/* Function row */}
                    <div className="grid grid-cols-12 gap-1 h-3">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="bg-slate-700/80 rounded-[2px]" />
                      ))}
                    </div>
                    {/* Row 2 */}
                    <div className="grid grid-cols-12 gap-1 h-3.5">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="bg-slate-800 rounded-[2px]" />
                      ))}
                    </div>
                    {/* Row 3 */}
                    <div className="grid grid-cols-11 gap-1 h-3.5">
                      {[...Array(11)].map((_, i) => (
                        <div key={i} className="bg-slate-800 rounded-[2px]" />
                      ))}
                    </div>
                    {/* Row 4 */}
                    <div className="grid grid-cols-10 gap-1 h-3.5">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className="bg-slate-800 rounded-[2px]" />
                      ))}
                    </div>
                    {/* Spacebar Row */}
                    <div className="flex gap-1 h-4">
                      <div className="w-8 bg-slate-700 rounded-[2px]" />
                      <div className="w-8 bg-slate-700 rounded-[2px]" />
                      <div className="flex-1 bg-slate-700/90 rounded-[2px]" />
                      <div className="w-8 bg-slate-700 rounded-[2px]" />
                      <div className="w-12 bg-slate-700 rounded-[2px]" />
                    </div>
                  </div>

                  {/* Touchpad Area */}
                  <div className="flex justify-center mt-2">
                    <div className="w-24 h-11 rounded-md bg-slate-300/80 border border-slate-400/60 shadow-inner" />
                  </div>

                  {/* Front Lip / Notch */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-14 h-1 rounded-full bg-slate-400/70" />
                </div>

                {/* Soft ground drop shadow beneath the 3D laptop */}
                <div
                  className="absolute -bottom-10 w-[380px] h-[30px] bg-slate-900/25 blur-xl rounded-full pointer-events-none"
                  style={{ transform: 'rotateX(80deg)' }}
                />
              </motion.div>
            </div>

            {/* Quick Rating Badge pinned right beneath the interactive laptop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-2 w-full max-w-sm bg-white rounded-xl p-3.5 border border-[#D5E4F7] shadow-md flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3FF] flex items-center justify-center font-black text-[#1565C0] text-sm">
                  5.0★
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0D47A1]">Highest Rated in Tambaram</div>
                  <div className="text-[11px] text-[#546E7A]">315 Real Google Customers</div>
                </div>
              </div>
              <a
                href={BUSINESS.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-extrabold text-[#1976D2] hover:underline"
              >
                View Reviews →
              </a>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Review Marquee Ticker at the bottom of hero */}
      <div className="w-full mt-auto">
        <ReviewMarquee />
      </div>
    </section>
  );
};

export default HeroSection;
