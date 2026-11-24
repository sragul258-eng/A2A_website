// Business configuration — edit this file to update all business info site-wide
export const BUSINESS = {
  name: 'A2A Laptop Shopp',
  tagline: 'Reliable Laptop Service with Affordable Price',
  phone: '09363626671',
  phoneDisplay: '093636 26671',
  whatsapp: '919363626671',
  address: {
    line1: '16/196, Pammal Main Road',
    line2: 'Muthamizh Nagar, Pammal',
    line3: 'Tambaram, Tamil Nadu 600075',
    full: '16/196, Pammal Main Road, Muthamizh Nagar, Pammal, Tambaram, Tamil Nadu 600075',
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/A2A+Laptop+Shopp+Pammal+Tambaram',
  googleReviewsUrl:
    'https://www.google.com/maps/search/A2A+Laptop+Shopp+Pammal+Tambaram',
  rating: 5.0,
  reviewCount: 315,
  workingHours: [
    { day: 'Monday', open: '10:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Tuesday', open: '10:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Wednesday', open: '10:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Thursday', open: '10:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Friday', open: '10:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Saturday', open: '10:00 AM', close: '9:00 PM', isOpen: true },
    { day: 'Sunday', open: '11:00 AM', close: '9:00 PM', isOpen: true },
  ],
  social: {
    // Add social links here when available
    facebook: '',
    instagram: '',
    youtube: '',
    twitter: '',
  },
  year: 2026,
};

// Services configuration — edit this to add/remove/modify services
export const SERVICES = [
  {
    id: 'hardware-repair',
    icon: 'Wrench',
    title: 'Laptop Hardware Repair',
    description:
      'Comprehensive diagnosis and repair of hardware issues — from ports and hinges to internal component failures.',
  },
  {
    id: 'display-screen',
    icon: 'Monitor',
    title: 'Display & Screen Issues',
    description:
      'Screen replacement, backlight repair, display connector issues, and cracked panel replacements.',
  },
  {
    id: 'keyboard-touchpad',
    icon: 'Keyboard',
    title: 'Keyboard & Touchpad Issues',
    description:
      'Keyboard key replacement, full keyboard swap, touchpad repair, and input device calibration.',
  },
  {
    id: 'motherboard',
    icon: 'Cpu',
    title: 'Laptop Motherboard Service',
    description:
      'Professional motherboard diagnosis, component-level repair, and board-level soldering services.',
  },
  {
    id: 'battery-charging',
    icon: 'Battery',
    title: 'Battery & Charging Issues',
    description:
      'Battery replacement, charging port repair, adapter compatibility checks, and power management fixes.',
  },
  {
    id: 'heating-performance',
    icon: 'Thermometer',
    title: 'Heating & Performance Problems',
    description:
      'Thermal paste replacement, fan cleaning/replacement, heatsink service, and performance optimization.',
  },
  {
    id: 'ssd-ram',
    icon: 'HardDrive',
    title: 'SSD & RAM Upgrades',
    description:
      'Storage upgrades with SSD installation, RAM expansion for improved multitasking and speed.',
  },
  {
    id: 'os-installation',
    icon: 'Download',
    title: 'Operating System Installation',
    description:
      'Fresh Windows installation, driver setup, OS migration, and system configuration.',
  },
  {
    id: 'software-troubleshooting',
    icon: 'Settings',
    title: 'Software Troubleshooting',
    description:
      'Virus removal, software conflicts, startup issues, application errors, and system optimization.',
  },
  {
    id: 'cleaning-maintenance',
    icon: 'Wind',
    title: 'Laptop Cleaning & Maintenance',
    description:
      'Internal dust cleaning, thermal management, general maintenance to extend your laptop\'s lifespan.',
  },
  {
    id: 'data-backup',
    icon: 'Database',
    title: 'Data Backup & Recovery',
    description:
      'Secure data backup, file recovery assistance, and storage migration services.',
  },
  {
    id: 'diagnosis',
    icon: 'Search',
    title: 'General Laptop Diagnosis',
    description:
      'Thorough diagnostic assessment to identify and explain the root cause of any laptop issue.',
  },
];

// WHY CHOOSE US features
export const WHY_CHOOSE = [
  {
    number: '01',
    icon: 'ShieldCheck',
    title: 'Reliable Service',
    description:
      'We focus on providing dependable laptop service and practical repair solutions that actually work.',
  },
  {
    number: '02',
    icon: 'IndianRupee',
    title: 'Affordable Pricing',
    description:
      'Professional laptop care without unnecessarily expensive service charges — transparent and fair.',
  },
  {
    number: '03',
    icon: 'GraduationCap',
    title: 'Student-Friendly Discounts',
    description:
      'Special pricing benefits for students to make laptop servicing accessible during college life.',
  },
  {
    number: '04',
    icon: 'ClipboardCheck',
    title: 'Professional Approach',
    description:
      'Careful diagnosis and a systematic approach to resolving laptop issues with precision.',
  },
  {
    number: '05',
    icon: 'Star',
    title: 'Customer Trust',
    description:
      'A strong Google reputation with a 5.0 rating from 315 reviews — customer satisfaction speaks for us.',
  },
  {
    number: '06',
    icon: 'MapPin',
    title: 'Convenient Location',
    description:
      'Easily accessible at Pammal Main Road, Tambaram — well-connected and simple to reach.',
  },
];
