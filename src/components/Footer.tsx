import React from 'react';
import { MessageCircle, MapPin, Award, ArrowUp, Phone, Mail } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D1714] text-[#E0D7CD] border-t border-[#3A2F2A] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3A2F2A]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-[#6E1B24] text-amber-300 flex items-center justify-center font-bold text-lg font-serif-title shadow-sm">
                ल
              </div>
              <span className="font-serif-title text-2xl font-bold text-white tracking-tight">
                {BUSINESS_CONFIG.businessName}
              </span>
            </div>

            <p className="text-xs font-semibold text-amber-300">
              {BUSINESS_CONFIG.experience} of Lac Industry Experience
            </p>

            <p className="text-xs text-[#A89A8D] leading-relaxed">
              {BUSINESS_CONFIG.description}
            </p>

            <div className="p-3 bg-[#2A221E] rounded-lg border border-[#3D322C] text-xs text-[#C5B8AB] italic">
              “{BUSINESS_CONFIG.subTagline}”
            </div>

            <div className="pt-2 text-xs text-[#A89A8D]">
              <p>Proprietor: <strong className="text-white">{BUSINESS_CONFIG.ownerName}</strong></p>
              <p>Location: <strong className="text-white">{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}, {BUSINESS_CONFIG.country}</strong></p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A89B]">
              <li>
                <a href="#hero" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-300 transition-colors">
                  Product Catalogue
                </a>
              </li>
              <li>
                <a href="#farmers" className="hover:text-amber-300 transition-colors">
                  For Farmers
                </a>
              </li>
              <li>
                <a href="#businesses" className="hover:text-amber-300 transition-colors">
                  For Businesses (B2B)
                </a>
              </li>
              <li>
                <a href="#knowledge" className="hover:text-amber-300 transition-colors">
                  Lac Knowledge Hub
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-amber-300 transition-colors">
                  Kusmi vs Rangini
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Products & Supplies
            </h4>
            <ul className="space-y-1.5 text-xs text-[#B5A89B]">
              <li>Lac Seeds & Inoculation Sticks</li>
              <li>Brood Lac / Semialta Brood Lac</li>
              <li>Lac Cultivation Plants (Semialta, Kusum, Ber)</li>
              <li>Synthetic Netting (Brood Sleeves)</li>
              <li>Kusmi Lac (Aghani & Jethwi Crops)</li>
              <li>Rangini Lac (Baisakhi & Katki Crops)</li>
              <li>Raw Lac (Natural Sticklac)</li>
              <li>Refined Lac Resin & Lac Gum</li>
              <li>Branch Cutting Equipment & Secateurs</li>
              <li>Farming Tools for Lac Orchards</li>
              <li>Pesticides & Insecticides (Authorized)</li>
            </ul>
          </div>

          {/* Contact Coordinates & WhatsApp CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>

            <div className="space-y-2 text-xs text-[#B5A89B]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.placeholders.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Phone: {BUSINESS_CONFIG.placeholders.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Email: {BUSINESS_CONFIG.placeholders.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-lg text-xs font-semibold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {BUSINESS_CONFIG.displayWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Compliance Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6B]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved. Proprietor: {BUSINESS_CONFIG.ownerName}, Ranchi, Jharkhand, India.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#B5A89B] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-[#2A221E] text-[11px] text-[#6E6053] leading-relaxed">
          Disclaimer: Lah Suvidha Kendra provides lac cultivation products, agricultural supplies, equipment and lac-related products backed by more than 25 years of practical experience. Product availability, brood lac timing, and agricultural inputs are subject to seasonal cycles and regulatory compliance.
        </div>
      </div>
    </footer>
  );
};
