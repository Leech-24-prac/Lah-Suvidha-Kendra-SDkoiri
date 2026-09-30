import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contactWhatsAppMsg = `Hello Lah Suvidha Kendra,\n\nName: ${name || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nMessage: ${message || 'I have a general enquiry.'}\n\nPlease share product and supply details.`;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24] mb-2">
            <MapPin className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E]">
            Contact Lah Suvidha Kendra
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2">
            Reach out directly for product availability, brood lac cycles, agricultural inputs, and B2B orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Business & Contact Coordinates */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E7DFD3] space-y-5">
              <div>
                <h3 className="font-serif-title text-2xl font-bold text-[#2C241E]">
                  {BUSINESS_CONFIG.businessName}
                </h3>
                <p className="text-sm font-semibold text-[#6E1B24] mt-0.5">
                  Proprietor: {BUSINESS_CONFIG.ownerName}
                </p>
                <p className="text-xs text-[#7A6A5D] mt-1">
                  25+ Years of Practical Lac Industry Experience
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-[#EAE2D5] text-sm text-[#4A3E37]">
                {/* Primary WhatsApp Link */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#25D366]/15 text-[#1E7E34] shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#1C3F2B]">
                      Official WhatsApp (Direct Contact)
                    </span>
                    <a
                      href={BUSINESS_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-base text-[#6E1B24] hover:text-[#25D366] transition-colors"
                    >
                      {BUSINESS_CONFIG.displayWhatsapp}
                    </a>
                    <p className="text-xs text-[#7A6A5D] mt-0.5">
                      Fastest response for availability, rates, and brood orders
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#DDD3C5] text-[#6E1B24] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#63554A]">
                      Business Location
                    </span>
                    <p className="font-semibold text-[#2C241E]">
                      {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}, {BUSINESS_CONFIG.country}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5 font-mono">
                      Address: {BUSINESS_CONFIG.placeholders.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Additional Phone Placeholder */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#DDD3C5] text-[#6E1B24] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#63554A]">
                      Telephone
                    </span>
                    <p className="text-xs text-stone-600 font-mono">
                      {BUSINESS_CONFIG.placeholders.phone}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      (Primary voice and instant messaging via WhatsApp: {BUSINESS_CONFIG.displayWhatsapp})
                    </p>
                  </div>
                </div>

                {/* Email Placeholder */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#DDD3C5] text-[#6E1B24] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#63554A]">
                      Email Address
                    </span>
                    <p className="text-xs text-stone-600 font-mono">
                      {BUSINESS_CONFIG.placeholders.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-5 rounded-lg text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E7DFD3] shadow-xs">
            <h3 className="font-serif-title text-2xl font-bold text-[#2C241E]">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4D43] mt-1 mb-6">
              Fill in your contact information and query to connect immediately.
            </p>

            {sent ? (
              <div className="p-6 bg-white rounded-xl border border-emerald-300 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h4 className="text-lg font-bold text-[#2C241E]">
                  Message Prepared!
                </h4>
                <p className="text-xs sm:text-sm text-[#5A4D43]">
                  Thank you for reaching out. Send your message directly on WhatsApp for an immediate response from Shri Shakti Dhar Koiri.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={getWhatsAppUrl(contactWhatsAppMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSent(false)}
                    className="px-4 py-2.5 border border-[#D5C9B8] rounded-lg text-xs font-semibold text-[#4A3E37] hover:bg-[#F4EFE6]"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91029 62005"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                    Your Message / Product Enquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what lac products, brood lac, host plants, or equipment you are looking for..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#6E1B24] hover:bg-[#58141C] text-white py-3 px-5 rounded-lg text-sm font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(contactWhatsAppMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-5 rounded-lg text-sm font-semibold shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
