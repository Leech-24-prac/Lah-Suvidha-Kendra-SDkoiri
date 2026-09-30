import React from 'react';
import { UserCheck, Shield, CheckCircle, Trees, Layers, Wrench, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  const experienceAreas = [
    {
      title: t.about.pillars.cultivationTitle,
      description: t.about.pillars.cultivationDesc,
      icon: Trees,
    },
    {
      title: t.about.pillars.productsTitle,
      description: t.about.pillars.productsDesc,
      icon: Layers,
    },
    {
      title: t.about.pillars.seedsTitle,
      description: t.about.pillars.seedsDesc,
      icon: CheckCircle,
    },
    {
      title: t.about.pillars.inputsTitle,
      description: t.about.pillars.inputsDesc,
      icon: Shield,
    },
    {
      title: t.about.pillars.equipmentTitle,
      description: t.about.pillars.equipmentDesc,
      icon: Wrench,
    },
    {
      title: t.about.pillars.farmersTitle,
      description: t.about.pillars.farmersDesc,
      icon: UserCheck,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F4EFE6]/60 border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Shri Shakti Dhar Koiri Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1C3F2B] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#1C3F2B]" />
              <span>{t.about.tag}</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E] leading-tight">
              {t.about.headline}
            </h2>

            <div className="prose prose-stone text-[#5A4D43] space-y-4 text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Founder Card */}
            <div className="p-5 rounded-xl bg-white border border-[#E0D7C9] shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#6E1B24] text-white flex items-center justify-center font-serif-title font-bold text-2xl shrink-0">
                  {language === 'hi' ? 'शक' : 'SK'}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C241E]">
                    {t.about.founderTitle}
                  </h3>
                  <p className="text-xs text-[#6E1B24] font-semibold">
                    {t.about.founderSub}
                  </p>
                  <p className="text-xs text-[#63554A] mt-0.5">
                    {language === 'hi' ? 'रांची, झारखंड, भारत' : 'Ranchi, Jharkhand, India'}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-[#7A6A5D]">
                  {language === 'hi'
                    ? 'लाह की खेती · उत्पाद · उपकरण'
                    : 'Lac Cultivation · Products · Equipment'}
                </span>
                <a
                  href={getWhatsAppUrl(
                    language === 'hi'
                      ? 'नमस्ते श्री शक्ति धर कोइरी जी, मैं लाह सुविधा केंद्र की वेबसाइट से संपर्क कर रहा हूँ।'
                      : 'Hello Shri Shakti Dhar Koiri, I am contacting you through Lah Suvidha Kendra website.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C3F2B] hover:text-[#25D366]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366]" />
                  <span>{t.about.connectWhatsApp}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Pillars of Practical Experience */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h3 className="text-xl font-bold font-serif-title text-[#2C241E]">
                {t.about.pillarsTitle}
              </h3>
              <p className="text-sm text-[#63554A] mt-1">
                {t.about.pillarsSub}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experienceAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E7DFD3] hover:border-[#6E1B24]/40 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#6E1B24]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-base text-[#2C241E]">
                        {area.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5A4D43] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

