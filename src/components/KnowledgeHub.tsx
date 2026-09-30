import React, { useState } from 'react';
import { BookOpen, ArrowRight, MessageCircle } from 'lucide-react';
import {
  LAC_PROCESS_STEPS,
  KUSMI_VS_RANGINI,
  KNOWLEDGE_TOPICS,
} from '../data/knowledge';
import { getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const KnowledgeHub: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<string>(KNOWLEDGE_TOPICS[0].id);
  const { language, t } = useLanguage();
  const isHindi = language === 'hi';

  const knowledgeWhatsAppMsg = isHindi
    ? 'नमस्ते लाह सुविधा केंद्र, मैं कुसुमी और रंगीनी लाह की तुलना या उपयुक्त खेती सामग्री के चयन के संबंध में जानकारी चाहता हूँ।'
    : 'Hello Lah Suvidha Kendra, I have questions comparing Kusmi and Rangini lac or choosing cultivation materials.';

  return (
    <section id="knowledge" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>{t.knowledge.tag}</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E]">
            {t.knowledge.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2">
            {t.knowledge.sub}
          </p>
        </div>

        {/* VISUAL PROCESS FLOW:
            Host Plant → Lac Insect → Cultivation → Harvesting → Processing → Lac Products */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-serif-title text-[#2C241E]">
              {t.knowledge.lifecycleTitle}
            </h3>
            <span className="text-xs text-[#7A6A5D] hidden sm:inline">
              {isHindi ? 'चरण 1 से 6' : 'Step 1 through 6'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {LAC_PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-5 border border-[#E7DFD3] flex flex-col justify-between relative shadow-xs hover:border-[#6E1B24]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#6E1B24] text-white flex items-center justify-center text-xs font-bold font-serif-title">
                      0{step.step}
                    </span>
                    {idx < LAC_PROCESS_STEPS.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-stone-300 hidden xl:block" />
                    )}
                  </div>
                  <h4 className="font-bold text-base text-[#2C241E]">
                    {isHindi ? step.titleHi : step.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#6E1B24] mt-0.5">
                    {isHindi ? step.subtitleHi : step.subtitle}
                  </p>
                  <p className="text-xs text-[#5A4D43] mt-2.5 leading-relaxed">
                    {isHindi ? step.descriptionHi : step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Flow Summary Strip */}
          <div className="mt-4 p-3.5 bg-white rounded-lg border border-[#E7DFD3] text-xs font-semibold text-[#4A3E37] flex flex-wrap items-center justify-center gap-2 text-center">
            <span className="text-[#1C3F2B]">{isHindi ? 'पोषक पौधे' : 'Host Plant'}</span>
            <span className="text-stone-300">→</span>
            <span className="text-[#6E1B24]">{isHindi ? 'लाह कीट' : 'Lac Insect'}</span>
            <span className="text-stone-300">→</span>
            <span className="text-[#1C3F2B]">{isHindi ? 'खेती एवं विकास' : 'Cultivation'}</span>
            <span className="text-stone-300">→</span>
            <span className="text-[#6E1B24]">{isHindi ? 'कटाई' : 'Harvesting'}</span>
            <span className="text-stone-300">→</span>
            <span className="text-[#1C3F2B]">{isHindi ? 'प्रसंस्करण' : 'Processing'}</span>
            <span className="text-stone-300">→</span>
            <span className="text-[#6E1B24]">{isHindi ? 'लाह उत्पाद' : 'Lac Products'}</span>
          </div>
        </div>

        {/* Detailed Knowledge Topics Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-lg font-bold font-serif-title text-[#2C241E] mb-3">
              {isHindi ? 'महत्वपूर्ण जैविक अवधारणाएं' : 'Key Biological Concepts'}
            </h3>
            {KNOWLEDGE_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`w-full text-left p-3.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                  activeTopic === topic.id
                    ? 'bg-[#6E1B24] text-white shadow-sm'
                    : 'bg-white text-[#4A3E37] border border-[#E7DFD3] hover:bg-[#F4EFE6]'
                }`}
              >
                <span>{isHindi ? topic.titleHi : topic.title}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFD3] shadow-xs min-h-[220px]">
            {(() => {
              const current = KNOWLEDGE_TOPICS.find((t) => t.id === activeTopic);
              if (!current) return null;
              return (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <span className="text-xs font-bold text-[#6E1B24] uppercase tracking-wider">
                    {isHindi ? 'तथ्यात्मक लाह शिक्षा' : 'Factual Lac Education'}
                  </span>
                  <h3 className="text-2xl font-serif-title font-bold text-[#2C241E]">
                    {isHindi ? current.titleHi : current.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A4D43] leading-relaxed">
                    {isHindi ? current.contentHi : current.content}
                  </p>
                </div>
              );
            })()}
          </div>
        </div>

        {/* KUSMI VS RANGINI FACTUAL COMPARISON TABLE */}
        <div id="comparison" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFD3] shadow-xs">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-[#1C3F2B] uppercase tracking-wider">
              {t.knowledge.comparisonTag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#2C241E] mt-1">
              {t.knowledge.comparisonTitle}
            </h3>
            <p className="text-sm text-[#5A4D43] mt-1.5">
              {t.knowledge.comparisonSub}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#E7DFD3] bg-[#FAF7F2]">
                  <th className="py-3.5 px-4 text-xs font-bold text-[#2C241E] uppercase tracking-wider w-1/4">
                    {isHindi ? 'विशेषता / विवरण' : 'Feature'}
                  </th>
                  <th className="py-3.5 px-4 text-xs font-bold text-[#6E1B24] uppercase tracking-wider w-3/8">
                    {isHindi ? 'कुसुमी लाह (Kusmi)' : 'Kusmi Lac'}
                  </th>
                  <th className="py-3.5 px-4 text-xs font-bold text-[#1C3F2B] uppercase tracking-wider w-3/8">
                    {isHindi ? 'रंगीनी लाह (Rangini)' : 'Rangini Lac'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE8DD] text-xs sm:text-sm text-[#4A3E37]">
                {KUSMI_VS_RANGINI.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF7F2]/50">
                    <td className="py-3.5 px-4 font-bold text-[#2C241E] align-top bg-[#FAF7F2]/30">
                      {isHindi ? row.featureHi : row.feature}
                    </td>
                    <td className="py-3.5 px-4 align-top leading-relaxed text-[#5A4D43]">
                      {isHindi ? row.kusmiHi : row.kusmi}
                    </td>
                    <td className="py-3.5 px-4 align-top leading-relaxed text-[#5A4D43]">
                      {isHindi ? row.ranginiHi : row.rangini}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Need help note with WhatsApp CTA */}
          <div className="mt-8 pt-6 border-t border-[#E7DFD3] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF7F2] p-5 rounded-xl">
            <p className="text-sm font-medium text-[#2C241E] text-center sm:text-left">
              {t.knowledge.helpText}
            </p>
            <a
              href={getWhatsAppUrl(knowledgeWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold shrink-0 shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.knowledge.helpBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

