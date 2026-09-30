import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Award, Languages, Globe } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav_about', 'About'), href: '#about' },
    { label: t('nav_products', 'Products'), href: '#products' },
    { label: t('nav_seeds_photo', 'Lac Seeds Photo'), href: '#lac-seeds-photo' },
    { label: t('nav_booking', 'Book Appointment'), href: '#booking' },
    { label: t('nav_calculator', 'Calculator'), href: '#calculator' },
    { label: t('nav_calendar', 'Crop Calendar'), href: '#calendar' },
    { label: t('nav_farmers', 'For Farmers'), href: '#farmers' },
    { label: t('nav_businesses', 'For Businesses'), href: '#businesses' },
    { label: t('nav_knowledge', 'Lac Knowledge'), href: '#knowledge' },
    { label: t('nav_gallery', 'Gallery'), href: '#gallery' },
    { label: t('nav_faq', 'FAQ'), href: '#faq' },
    { label: t('nav_contact', 'Contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#1C3F2B] text-[#EDE5D8] px-4 py-1.5 text-xs border-b border-[#2A573D]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium text-amber-200">
              <Award className="w-3.5 h-3.5" />
              <span>{BUSINESS_CONFIG.experience} {lang === 'hi' ? 'लाह उद्योग का अनुभव' : 'Lac Industry Experience'}</span>
            </span>
            <span className="hidden sm:inline text-white/40">·</span>
            <span className="hidden sm:flex items-center gap-1 text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-amber-200/80" />
              <span>{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}, {BUSINESS_CONFIG.country}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto text-xs">
            {/* Dual Segmented Language Switcher */}
            <div className="inline-flex items-center rounded-lg bg-[#143021] p-0.5 border border-[#2D6043] text-xs">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded-md font-medium transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#EDE5D8] text-[#1C3F2B] font-bold shadow-xs'
                    : 'text-stone-300 hover:text-white'
                }`}
                title="Switch to English"
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2.5 py-0.5 rounded-md font-medium transition-all cursor-pointer ${
                  lang === 'hi'
                    ? 'bg-amber-300 text-[#1C3F2B] font-bold shadow-xs'
                    : 'text-stone-300 hover:text-white'
                }`}
                title="हिन्दी में बदलें"
              >
                हिन्दी
              </button>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden xs:inline">WhatsApp:</span>
              <strong className="tracking-wide">{BUSINESS_CONFIG.displayWhatsapp}</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md border-b border-[#E7DFD3] py-2.5'
            : 'bg-[#FAF7F2] border-b border-[#E7DFD3] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Name */}
            <a
              href="#hero"
              className="flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E1B24] rounded-sm group"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-[#6E1B24] text-amber-300 flex items-center justify-center font-bold text-lg font-serif-title shadow-sm">
                  ल
                </div>
                <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#6E1B24] group-hover:text-[#53141B] transition-colors">
                  {BUSINESS_CONFIG.businessName}
                </span>
              </div>
              <span className="text-[11px] tracking-wider text-[#63554A] font-medium pl-10 -mt-1 hidden xs:block">
                Shri Shakti Dhar Koiri · Ranchi, Jharkhand
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#4A3E37]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#6E1B24] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#6E1B24] after:absolute after:bottom-0 after:left-0 after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppUrl(
                  'Hello Lah Suvidha Kendra, I would like to enquire about your lac products and supplies.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-sm transition-all duration-150 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-[#4A3E37] hover:bg-[#EDE5D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E1B24]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E7DFD3] shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="mb-3 pb-3 border-b border-[#E7DFD3] flex items-center justify-between text-xs text-stone-600">
            <div>
              <p className="font-semibold text-[#6E1B24]">{BUSINESS_CONFIG.businessName}</p>
              <p>Owner: {BUSINESS_CONFIG.ownerName} · Ranchi</p>
            </div>

            {/* Mobile language switch */}
            <div className="inline-flex items-center rounded-lg bg-[#FAF7F2] p-1 border border-[#DDD3C5]">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  lang === 'en' ? 'bg-[#6E1B24] text-white' : 'text-stone-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  lang === 'hi' ? 'bg-[#6E1B24] text-white' : 'text-stone-600'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-2.5 text-base font-medium text-[#2C241E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#EDE5D8] text-[#3E2723] hover:text-[#6E1B24] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#E7DFD3] space-y-2">
            <a
              href={getWhatsAppUrl(
                'Hello Lah Suvidha Kendra, I am interested in your lac cultivation products and supplies.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-lg text-sm font-semibold shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp: {BUSINESS_CONFIG.displayWhatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
