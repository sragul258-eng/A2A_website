import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Services',      href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose' },
  { label: 'Student Offers',href: '#student-offers' },
  { label: 'Reviews',       href: '#reviews' },
  { label: 'Contact',       href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobile]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setMobile(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#DDEAFF]'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#home" onClick={e => { e.preventDefault(); go('#home'); }} className="flex items-center gap-2.5 group">
          <img src="/logo.png" alt="A2A Laptop Shopp logo" className="h-10 w-10 object-contain" />
          <div className="leading-none">
            <div className="font-black text-[#0D47A1] text-[1.05rem] tracking-tight">A2A Laptop Shopp</div>
            <div className="text-[0.65rem] font-semibold text-[#1976D2] tracking-widest uppercase">Service Center</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={e => { e.preventDefault(); go(l.href); }}
              className="px-3.5 py-2 text-[.85rem] font-600 font-semibold text-[#3D5A80] hover:text-[#1565C0] hover:bg-[#EEF4FF] rounded-lg transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="tel:09363626671"
            className="hidden sm:flex btn-primary px-4 py-2.5 text-sm">
            Book a Service <ChevronRight size={15} />
          </a>
          <button onClick={() => setMobile(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#3D5A80] hover:bg-[#EEF4FF] transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#DDEAFF] px-4 pb-5 pt-3 space-y-1">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={e => { e.preventDefault(); go(l.href); }}
              className="block px-4 py-2.5 text-sm font-semibold text-[#3D5A80] hover:text-[#1565C0] hover:bg-[#EEF4FF] rounded-lg transition-colors">
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <a href="tel:09363626671" className="btn-primary w-full justify-center py-3 text-sm">
              <Phone size={15} /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
