import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Clock, MessageCircle,
  Send, CheckCircle, Loader2, ShieldCheck
} from 'lucide-react';
import { BUSINESS } from '../config';

const SERVICES_LIST = [
  'General Laptop Diagnosis',
  'Laptop Hardware Repair',
  'Display & Screen Replacement',
  'Keyboard & Touchpad Service',
  'Laptop Motherboard Service (Chip-Level)',
  'Battery & Charging Port Repair',
  'Heating & Performance Optimization (Thermal Paste)',
  'SSD & RAM Upgrades',
  'Operating System Installation (Windows)',
  'Software Troubleshooting & Virus Removal',
  'Data Backup & File Recovery',
  'Laptop Cleaning & Deep Dusting',
  'Student Concessional Repair',
  'Other Issue',
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  phone: string;
  brand: string;
  service: string;
  problem: string;
}

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    brand: '',
    service: '',
    problem: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = 'Your name is required';
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s-+]/g, '').slice(-10))) {
      errs.phone = 'Enter a valid 10-digit mobile number';
    }
    if (!form.service) errs.service = 'Please select a service';
    if (!form.problem.trim()) errs.problem = 'Please provide a brief problem description';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState('loading');

    // Simulate backend submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormState('success');
  };

  const whatsappMessage = encodeURIComponent(
    `*A2A Laptop Shopp Service Enquiry*\n\n` +
    `• *Name:* ${form.name}\n` +
    `• *Phone:* ${form.phone}\n` +
    `• *Brand:* ${form.brand || 'Not specified'}\n` +
    `• *Service:* ${form.service}\n` +
    `• *Issue:* ${form.problem}`
  );

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white" aria-label="Contact and location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-3">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] tracking-tight">
            Let's Get Your Laptop <span className="text-gradient">Working Again.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3D5A80] max-w-2xl mx-auto font-medium">
            Visit our Pammal Tambaram service center or send us an enquiry for fast, dependable advice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: Contact Details & Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Info Card */}
            <div className="bg-[#F8FAFF] border border-[#D5E4F7] rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-3.5 mb-6">
                <img src="/logo.png" alt="A2A Logo" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-xl font-black text-[#0A1628]">{BUSINESS.name}</h3>
                  <div className="text-xs font-bold text-[#1565C0]">Laptop & Mobile Service Center</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#D5E4F7] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                  <MapPin size={20} className="text-[#1565C0]" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#0A1628] mb-1">Our Location</div>
                  <address className="not-italic text-sm text-[#546E7A] font-medium leading-relaxed">
                    {BUSINESS.address.line1}, {BUSINESS.address.line2},<br />
                    {BUSINESS.address.line3}
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#D5E4F7] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Phone size={20} className="text-[#1565C0]" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#0A1628] mb-1">Direct Call / Helpline</div>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-base font-extrabold text-[#1565C0] hover:text-[#0D47A1] hover:underline"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                  <div className="text-xs text-[#546E7A] font-medium mt-0.5">Quick call for queries & status check</div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-5 border-t border-[#DDEAFF]">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-[#1565C0]" />
                  <span className="text-xs font-black text-[#0A1628] uppercase tracking-wider">
                    Working Hours (Closes at 9:00 PM)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium bg-white rounded-2xl p-4 border border-[#D5E4F7]">
                  {BUSINESS.workingHours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between py-1 px-1.5 border-b border-slate-50 last:border-none">
                      <span className="font-bold text-[#0A1628]">{h.day}</span>
                      <span className="text-[#546E7A] font-semibold">{h.open} - {h.close}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action CTAs */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="btn-primary justify-center py-3 text-sm"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center py-3 text-sm bg-white"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello A2A Laptop Shopp! I would like to enquire about laptop service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#1B8743] font-bold text-sm transition-all"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                Direct WhatsApp Chat
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#D5E4F7] shadow-sm bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3!2d80.0959!3d12.9752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzMwLjciTiA4MMKwMDUnNDUuMiJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A2A Laptop Shopp location map"
                aria-label="Google Map showing A2A Laptop Shopp in Pammal Tambaram"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Service Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="bg-[#F8FAFF] border border-[#D5E4F7] rounded-3xl p-8 sm:p-10 shadow-sm h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-[#1565C0] uppercase tracking-wider block mb-1">
                  Online Booking & Estimate
                </span>
                <h3 className="text-2xl font-black text-[#0A1628] mb-2">Service Enquiry Form</h3>
                <p className="text-sm font-medium text-[#546E7A] mb-8">
                  Submit your details below and our service supervisor will get back to you immediately.
                </p>

                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl p-8 border border-[#BBD5FF] text-center my-6 shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E0F2F1] border-2 border-[#80CBC4] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-[#00897B]" />
                    </div>

                    <h4 className="text-xl font-black text-[#0A1628] mb-2">Enquiry Received!</h4>
                    <p className="text-sm font-medium text-[#546E7A] mb-6">
                      Thank you <strong className="text-[#0A1628]">{form.name}</strong>. We will review your issue for <strong className="text-[#0A1628]">{form.brand || 'your laptop'}</strong> and call you at <strong className="text-[#0D47A1]">{form.phone}</strong> shortly.
                    </p>

                    <div className="space-y-3">
                      <a
                        href={`https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center py-3 text-sm"
                      >
                        <MessageCircle size={16} />
                        Send via WhatsApp for Instant Response
                      </a>

                      <button
                        onClick={() => {
                          setFormState('idle');
                          setForm({ name: '', phone: '', brand: '', service: '', problem: '' });
                        }}
                        className="text-xs font-bold text-[#1565C0] hover:underline"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-black text-[#0A1628] uppercase tracking-wider mb-2">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0A1628] placeholder-[#90A4AE] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1565C0]/30 ${
                          errors.name ? 'border-red-500' : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 font-bold mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-black text-[#0A1628] uppercase tracking-wider mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0A1628] placeholder-[#90A4AE] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1565C0]/30 ${
                          errors.phone ? 'border-red-500' : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 font-bold mt-1">{errors.phone}</p>}
                    </div>

                    {/* Brand */}
                    <div>
                      <label htmlFor="contact-brand" className="block text-xs font-black text-[#0A1628] uppercase tracking-wider mb-2">
                        Laptop Brand & Model
                      </label>
                      <input
                        id="contact-brand"
                        type="text"
                        value={form.brand}
                        onChange={(e) => setForm({ ...form, brand: e.target.value })}
                        placeholder="e.g. Dell Inspiron 15, HP Pavilion, Lenovo ThinkPad"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#94A3B8] text-sm text-[#0A1628] placeholder-[#90A4AE] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1565C0]/30"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-black text-[#0A1628] uppercase tracking-wider mb-2">
                        Service Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0A1628] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1565C0]/30 cursor-pointer ${
                          errors.service ? 'border-red-500' : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                        }`}
                      >
                        <option value="">Select Service Needed...</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-xs text-red-500 font-bold mt-1">{errors.service}</p>}
                    </div>

                    {/* Problem Description */}
                    <div>
                      <label htmlFor="contact-problem" className="block text-xs font-black text-[#0A1628] uppercase tracking-wider mb-2">
                        Describe The Issue <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-problem"
                        rows={3}
                        value={form.problem}
                        onChange={(e) => setForm({ ...form, problem: e.target.value })}
                        placeholder="Please describe symptoms e.g. blue screen, won't turn on, fan noise, cracked screen..."
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#0A1628] placeholder-[#90A4AE] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1565C0]/30 resize-none ${
                          errors.problem ? 'border-red-500' : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                        }`}
                      />
                      {errors.problem && <p className="text-xs text-red-500 font-bold mt-1">{errors.problem}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="btn-primary w-full justify-center py-4 text-base font-extrabold shadow-md disabled:opacity-70"
                    >
                      {formState === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Submitting Enquiry...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Request a Service Enquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Note below form */}
              <div className="pt-6 mt-6 border-t border-[#DDEAFF] flex items-center justify-between text-xs text-[#546E7A] font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#00C9A7]" />
                  Your information is kept 100% confidential
                </span>
                <span>Closes at 9 PM</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
