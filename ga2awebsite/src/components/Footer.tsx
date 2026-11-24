import React from 'react';
import { Phone, MapPin, Mail, Star } from 'lucide-react';
import { BUSINESS } from '../config';

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'About Us',      href: '#about' },
  { label: 'Services',      href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose' },
  { label: 'Student Offers',href: '#student-offers' },
  { label: 'Reviews',       href: '#reviews' },
  { label: 'Contact & Map', href: '#contact' },
];

const Footer: React.FC = () => {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#DDEAFF]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (col-span-4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="A2A Laptop Shopp Logo" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-black text-lg text-[#0D47A1] leading-tight">A2A Laptop Shopp</div>
                <div className="text-[11px] font-bold text-[#1976D2] tracking-wider uppercase">Laptop & Mobile Service Center</div>
              </div>
            </div>

            <p className="text-sm text-[#546E7A] font-medium leading-relaxed mb-6">
              {BUSINESS.tagline}. Professional laptop repair, screen replacements, motherboard service, and student discount programs in Tambaram, Chennai.
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#F0F5FF] border border-[#D5E4F7]">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <span className="text-xs font-black text-[#0A1628]">5.0 Rating</span>
              <span className="text-xs text-[#546E7A] font-medium">({BUSINESS.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Quick Links (col-span-2) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1628] mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-sm font-semibold text-[#546E7A] hover:text-[#1565C0] hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1628] mb-5">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm font-medium text-[#546E7A]">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2.5 font-bold text-[#0D47A1] hover:underline"
                >
                  <Phone size={16} className="text-[#1565C0] flex-shrink-0" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#1565C0] flex-shrink-0 mt-0.5" />
                <span>
                  16/196, Pammal Main Road,<br />
                  Muthamizh Nagar, Pammal,<br />
                  Tambaram, Tamil Nadu 600075
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#1565C0] flex-shrink-0" />
                <span>Enquire via Form or Phone</span>
              </li>
            </ul>
          </div>

          {/* Working Hours (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1628] mb-5">
              Working Hours
            </h4>
            <div className="space-y-1.5 text-xs font-semibold text-[#546E7A]">
              <div className="flex justify-between">
                <span>Mon - Sat:</span>
                <span className="font-bold text-[#0A1628]">10 AM - 9 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-bold text-[#0A1628]">11 AM - 9 PM</span>
              </div>
              <div className="mt-3 pt-3 border-t border-[#EEF4FF] text-[11px] font-bold text-[#00897B]">
                ✓ Open Everyday till 9:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#DDEAFF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#78909C]">
          <p>© {BUSINESS.year} {BUSINESS.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Tambaram's Trusted Laptop Care</span>
            <span>•</span>
            <span className="text-[#1565C0]">Google 5.0 ★ Rated</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
