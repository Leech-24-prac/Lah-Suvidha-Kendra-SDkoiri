import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="hero" className="relative bg-[#FAF7F2] overflow-hidden pt-6 pb-16 lg:py-20 border-b border-[#E7DFD3]">
      {/* Subtle organic background patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#1C3F2B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Experience Kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#6E1B24] tracking-wide uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6E1B24]" />
              <span>{t('established_in', 'Established Lac Supplier · Ranchi, Jharkhand')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2C241E] leading-[1.12]">
              {t('hero_title', '25+ Years of Lac Industry Experience')}
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-serif-title font-semibold text-[#6E1B24] tracking-wide">
              {t('hero_tagline', 'Lac Cultivation • Lac Products • Agricultural Supplies')}
            </h2>

            {/* Core Description */}
            <p className="text-base sm:text-lg text-[#5A4D43] leading-relaxed max-w-2xl">
              {t(
                'hero_desc',
                'Lah Suvidha Kendra provides lac cultivation products, agricultural supplies, equipment and lac-related products, backed by more than 25 years of practical experience in the lac industry.'
              )}
            </p>

            {/* Secondary Brand Message */}
            <div className="p-3.5 bg-[#F4EFE6] rounded-lg border-l-4 border-[#6E1B24] text-sm text-[#4A3E37] italic">
              {t('hero_quote', '“Your source for lac cultivation materials, products and agricultural supplies.”')}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#6E1B24] hover:bg-[#58141C] text-white text-base font-semibold shadow-sm transition-all duration-200 active:scale-95 text-center"
              >
                <span>{t('explore_products', 'Explore Products')}</span>
                <ArrowDown className="ml-2 w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(
                  lang === 'hi'
                    ? 'नमस्ते लाह सुविधा केंद्र, मुझे आपके लाह की खेती के उत्पादों एवं सामग्री में रुचि है। कृपया विवरण, उपलब्धता और मूल्य साझा करें।'
                    : 'Hello Lah Suvidha Kendra, I am interested in your lac cultivation products and supplies. Please share product details, availability and pricing.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-base font-semibold shadow-sm transition-all duration-200 active:scale-95 text-center"
              >
                <MessageCircle className="w-5 h-5 mr-2 fill-current" />
                <span>{t('chat_whatsapp', 'Chat on WhatsApp')}</span>
              </a>
            </div>

            {/* Fast WhatsApp Callout Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#63554A]">
              <span className="font-semibold text-[#1C3F2B]">Direct Enquiries:</span>
              <a
                href="https://wa.me/919102962005"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#6E1B24] underline hover:text-[#25D366] transition-colors"
              >
                +91 91029 62005
              </a>
              <span className="text-stone-400">·</span>
              <span>{t('proprietor', 'Proprietor')}: {BUSINESS_CONFIG.ownerName}</span>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/images/hero_lac_farm_1790787414277.jpg"
                alt="Lac host tree plantation in Jharkhand, depicting lac cultivation practices"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Verified Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#E7DFD3]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#6E1B24] text-white shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#2C241E]">
                      {BUSINESS_CONFIG.businessName}
                    </h3>
                    <p className="text-xs text-[#5A4D43] mt-0.5">
                      Ranchi, Jharkhand · Brood Lac, Seeds, Host Plants & Tools
                    </p>
                    <p className="text-[11px] text-[#8C7A6B] mt-1 italic">
                      *Product illustration representing regional lac agroforestry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
