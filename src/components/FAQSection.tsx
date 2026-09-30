import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Search } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchFilter, setSearchFilter] = useState('');
  const { language, t } = useLanguage();
  const isHindi = language === 'hi';

  const filteredFaqs = FAQS.filter((faq) => {
    const query = searchFilter.toLowerCase().trim();
    if (!query) return true;
    return (
      faq.question.toLowerCase().includes(query) ||
      (faq.questionHi && faq.questionHi.toLowerCase().includes(query)) ||
      faq.answer.toLowerCase().includes(query) ||
      (faq.answerHi && faq.answerHi.toLowerCase().includes(query))
    );
  });

  const faqWhatsAppMsg = isHindi
    ? 'नमस्ते लाह सुविधा केंद्र, मुझे आपके लाह उत्पादों और खेती से संबंधित सवाल पूछना है।'
    : 'Hello Lah Suvidha Kendra, I have a specific question about your lac products.';

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E7DFD3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{t.faq.tag}</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E]">
            {t.faq.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2">
            {t.faq.sub}
          </p>

          {/* Quick FAQ Search */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.faq.searchPlaceholder}
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#DDD3C5] rounded-lg text-xs sm:text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
            />
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              const questionText = isHindi && faq.questionHi ? faq.questionHi : faq.question;
              const answerText = isHindi && faq.answerHi ? faq.answerHi : faq.answer;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E7DFD3] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-[#2C241E] pr-2">
                      {questionText}
                    </span>
                    <span className="p-1 rounded bg-[#FAF7F2] text-[#6E1B24] shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5A4D43] leading-relaxed border-t border-[#F0EAE1]">
                      <p>{answerText}</p>
                      {(faq.question.toLowerCase().includes('whatsapp') ||
                        (faq.questionHi && faq.questionHi.includes('व्हाट्सएप'))) && (
                        <div className="mt-3">
                          <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-current" />
                            <span>
                              {isHindi
                                ? `व्हाट्सएप खोलने के लिए यहां क्लिक करें (${BUSINESS_CONFIG.displayWhatsapp})`
                                : `Click here to open WhatsApp (${BUSINESS_CONFIG.displayWhatsapp})`}
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center text-sm text-[#5A4D43] py-8">
              {isHindi
                ? 'कोई मेल खाता सवाल नहीं मिला। किसी भी सवाल के लिए व्हाट्सएप पर सीधे संपर्क करें।'
                : 'No matching questions found. Contact us directly on WhatsApp with any query.'}
            </p>
          )}
        </div>

        {/* Direct WhatsApp Callout in FAQ footer */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E7DFD3] text-center space-y-3">
          <h3 className="font-serif-title text-xl font-bold text-[#2C241E]">
            {t.faq.extraTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#5A4D43] max-w-lg mx-auto">
            {t.faq.extraDesc}
          </p>
          <a
            href={getWhatsAppUrl(faqWhatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t.faq.extraBtn} {BUSINESS_CONFIG.displayWhatsapp}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

