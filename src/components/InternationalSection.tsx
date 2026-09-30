import React from 'react';
import { Globe2, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';

export const InternationalSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F4EFE6]/70 border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E7DFD3] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24]">
                <Globe2 className="w-4 h-4" />
                <span>Global Inquiries</span>
              </div>

              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2C241E]">
                For International Buyers
              </h2>

              {/* REQUIRED EXACT TEXT */}
              <p className="text-base sm:text-lg text-[#4A3E37] leading-relaxed">
                “We welcome enquiries from businesses interested in Indian lac and lac-related products. Contact Lah Suvidha Kendra to discuss product availability, specifications, quantities and possible delivery arrangements.”
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-[#63554A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#2D6344]" />
                  <span>Indian Lac Origin (Jharkhand Region)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#2D6344]" />
                  <span>Custom Batch & Grade Discussions</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#2D6344]" />
                  <span>Direct Communication with Proprietor</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl(
                  'Hello Lah Suvidha Kendra, I represent an international business interested in Indian lac products. Please connect to discuss product specifications, quantities and arrangements.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-lg text-sm font-semibold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>International WhatsApp Enquiry</span>
              </a>

              <p className="text-[11px] text-center text-[#8C7A6B]">
                WhatsApp: {BUSINESS_CONFIG.displayWhatsapp} · Ranchi, Jharkhand, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
