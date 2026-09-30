import React, { useState } from 'react';
import { Building2, MessageCircle, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';

export const B2BSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    product: 'Raw lac',
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const productOptions = [
    'Raw lac',
    'Kusmi lac',
    'Rangini lac',
    'Brood lac',
    'Lac seeds',
    'Lac resin',
    'Lac gum',
    'Synthetic net',
    'Cutting equipment',
    'Pesticides',
    'Insecticides',
    'Other cultivation supplies',
  ];

  const targetClients = [
    'Traders & Wholesalers',
    'Farmers & Smallholders',
    'Lac Cultivators',
    'Refining & Chemical Processors',
    'Agricultural Supply Businesses',
    'Artisans & Specialized Manufacturers',
  ];

  const productsList = [
    'Raw lac',
    'Kusmi lac',
    'Rangini lac',
    'Brood lac',
    'Lac seeds',
    'Lac resin',
    'Lac gum',
    'Synthetic net',
    'Cutting equipment',
    'Pesticides',
    'Insecticides',
    'Other cultivation supplies',
  ];

  const generateWhatsAppMessage = () => {
    let msg = `Hello Lah Suvidha Kendra, I am submitting a Business Enquiry from your website.\n\n`;
    msg += `Name: ${formData.name || 'Not specified'}\n`;
    if (formData.company) msg += `Company: ${formData.company}\n`;
    if (formData.phone) msg += `Phone: ${formData.phone}\n`;
    if (formData.email) msg += `Email: ${formData.email}\n`;
    if (formData.location) msg += `Location: ${formData.location}\n`;
    msg += `Product Needed: ${formData.product}\n`;
    if (formData.quantity) msg += `Quantity: ${formData.quantity}\n`;
    if (formData.message) msg += `Requirements: ${formData.message}\n`;
    msg += `\nPlease share availability, lot specifications and pricing.`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="businesses" className="py-16 sm:py-20 bg-white border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: B2B Overview & Products Included */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24]">
              <Building2 className="w-4 h-4" />
              <span>Commercial & Wholesale Services</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E] leading-tight">
              Lac Products & Supplies for Businesses
            </h2>

            <p className="text-sm sm:text-base text-[#5A4D43] leading-relaxed">
              Backed by more than 25 years of hands-on experience in the lac heartland of Ranchi, Jharkhand, Lah Suvidha Kendra supplies high-grade natural commodities, cultivation materials, and field tools to commercial entities.
            </p>

            {/* Target Clientele */}
            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E7DFD3]">
              <h3 className="text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-3">
                Suitable for:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-[#4A3E37]">
                {targetClients.map((client, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6E1B24]" />
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete B2B Products List */}
            <div>
              <h3 className="text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-3">
                Products Available for B2B Supply:
              </h3>
              <div className="flex flex-wrap gap-2">
                {productsList.map((prod, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-[#F4EFE6] text-[#4A3E37] rounded border border-[#E4DACB] font-medium"
                  >
                    {prod}
                  </span>
                ))}
              </div>
            </div>

            {/* Fast WhatsApp Callout for Business */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
              <div className="text-xs text-[#1C3F2B]">
                <strong className="block text-sm font-bold text-[#1C3F2B] mb-0.5">
                  Need an Immediate Quotation?
                </strong>
                Direct business enquiries can also be handled immediately on WhatsApp at{' '}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-[#1C3F2B] hover:text-[#25D366]"
                >
                  {BUSINESS_CONFIG.displayWhatsapp}
                </a>.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive B2B Enquiry Form */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E7DFD3] shadow-sm">
            <h3 className="font-serif-title text-2xl font-bold text-[#2C241E]">
              Business Enquiry Form
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4D43] mt-1 mb-6">
              Submit your required commodity, specifications, and volume for custom evaluation.
            </p>

            {submitted ? (
              <div className="p-6 bg-white rounded-xl border border-emerald-300 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h4 className="text-lg font-bold text-[#2C241E]">
                  Enquiry Prepared Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[#5A4D43]">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry details have been compiled. For the quickest response, continue directly to WhatsApp to send these exact details to Shri Shakti Dhar Koiri.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={getWhatsAppUrl(generateWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send via WhatsApp Now</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 border border-[#D5C9B8] rounded-lg text-xs font-semibold text-[#4A3E37] hover:bg-[#F4EFE6]"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Agro Traders Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ranchi / Kolkata"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Product
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    >
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Estimated Qty
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 50 kg / 5 quintals"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                    Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify specifications, preferred delivery timeline, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#6E1B24] hover:bg-[#58141C] text-white py-3 px-5 rounded-lg text-sm font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Business Enquiry</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(generateWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-5 rounded-lg text-sm font-semibold shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Enquire on WhatsApp</span>
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
