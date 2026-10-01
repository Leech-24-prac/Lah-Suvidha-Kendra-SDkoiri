import React, { useState } from 'react';
import { Camera, ZoomIn, CheckCircle2, MessageCircle, Sparkles, Sprout } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const LacSeedsShowcase: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<'grains' | 'sticks' | 'twigs'>('grains');
  const [isZoomed, setIsZoomed] = useState(false);
  const { language, t } = useLanguage();
  const isHindi = language === 'hi';

  const photos = {
    grains: {
      url: '/images/lac_seeds_grains_1790787922266.jpg',
      title: isHindi
        ? 'लाह बीज — प्राकृतिक सुनहरे अंबर दाने (सीडलैक)'
        : 'Lac Seeds — Natural Golden Amber Grains (Seedlac)',
      tag: isHindi ? 'व्यापारिक एवं प्रसंस्करण रूप' : 'Trade & Processing Form',
      description: isHindi
        ? 'कच्ची लाह से साफ कर पानी में धोए गए प्राकृतिक लाह बीज (सीडलैक दाने) की क्लोज़-अप तस्वीर। व्यापार और प्रसंस्करण में इन सुनहरे अंबर दानों को "लाह बीज / सीडलैक" कहा जाता है, जो अपनी उच्च शुद्धता, प्राकृतिक चमक और लकड़ी रहित बनावट के लिए जाने जाते हैं।'
        : 'Close-up photograph of washed natural lac seeds (seedlac grains) collected and refined from raw sticklac. In commercial trade and seedlac processing, these natural golden-amber grains are termed "lac seeds" (बीज / सीडलैक), prized for their pure resin content, natural clarity, and lack of woody residue.',
      whatsappMsg: isHindi
        ? 'नमस्ते लाह सुविधा केंद्र, मैंने आपकी वेबसाइट पर प्राकृतिक अंबर लाह बीज (दाने/सीडलैक) की फोटो देखी। कृपया गुणवत्ता, उपलब्धता और दर साझा करें।'
        : 'Hello Lah Suvidha Kendra, I saw the photo of your natural amber Lac Seeds (grains/seedlac). Please share availability, lot quality and pricing.',
      keyPoints: isHindi
        ? [
            'लकड़ी और टहनी से पूरी तरह अलग कर धोया गया शुद्ध दाना',
            'प्राकृतिक सुनहरा अंबर रंग और उच्च रेज़िन गुणवत्ता',
            'बटन शेलैक, शुद्ध चपड़ा और लाह राल का मुख्य स्रोत',
            'रांची, झारखंड से मांग के अनुसार आपूर्ति उपलब्ध',
          ]
        : [
            'Washed and freed from woody branch matter',
            'Natural golden-amber hue and resin consistency',
            'Primary material for button shellac and refined lac resin',
            'Supplied in custom bulk quantities from Ranchi, Jharkhand',
          ],
    },
    sticks: {
      url: '/images/lac_seed_sticks_1790787941472.jpg',
      title: isHindi
        ? 'लाह बीज डंडियां — बीहन लाह संचरण डंडियां (लाह बीज / बीहन)'
        : 'Lac Seed Sticks — Brood Lac Inoculation Sticks (लाह बीज / बीहन)',
      tag: isHindi ? 'खेती संचरण रूप' : 'Agricultural Inoculation Form',
      description: isHindi
        ? 'पेड़ों पर संचरण हेतु बंधी हुई जीवित बीहन लाह की डंडियों की प्रामाणिक तस्वीर। झारखंड के किसान संचरण हेतु परिपक्व टहनियों को "लाह बीज" भी कहते हैं। इन डंडियों पर लाखों नन्हे कीट (क्रॉलर्स) निकलने के लिए तैयार होते हैं जो पोषक डालियों पर बसते हैं।'
        : 'Authentic photograph of lac seed sticks (brood lac sticks) bundled and ready for tree inoculation. In agricultural practice across Jharkhand, farmers refer to viable brood encrustations as "Lah Beej" (लाह बीज). These sticks carry gravid female insects about to release millions of microscopic crawlers onto host branches.',
      whatsappMsg: isHindi
        ? 'नमस्ते लाह सुविधा केंद्र, मैंने आपकी वेबसाइट पर लाह बीज डंडियों (बीहन लाह) की फोटो देखी। कृपया मौसमी समय, उपलब्धता और दर बताएं।'
        : 'Hello Lah Suvidha Kendra, I saw the photo of your Lac Seed Sticks (brood lac). Please share seasonal schedule, availability and pricing.',
      keyPoints: isHindi
        ? [
            'उच्च मादा कीट सघनता और स्वस्थ जीवन क्षमता',
            'सिंथेटिक जाली में बांधकर पोषक पेड़ पर चढ़ाने हेतु तैयार बंडल',
            'कुसुमी (अघनी/जेठवी) और रंगीनी (कतकी/बैसाखी) फसलों के अनुसार उपलब्ध',
            '25+ वर्षों के व्यावहारिक अनुभव के साथ समय पर आपूर्ति',
          ]
        : [
            'Selected for high female crawler density & vigor',
            'Bundled for easy tying onto host canopy using synthetic mesh',
            'Available in seasonal cycles: Kusmi (Aghani/Jethwi) & Rangini (Katki/Baisakhi)',
            'Handled with 25+ years of practical timing experience',
          ],
    },
    twigs: {
      url: '/images/brood_lac_twigs_1790787426825.jpg',
      title: isHindi
        ? 'पोषक टहनी पर परिपक्व लाह आवरण का विवरण'
        : 'Mature Seed Encrustation on Host Branch',
      tag: isHindi ? 'खेत में फसल अवस्था' : 'Field Cultivation Stage',
      description: isHindi
        ? 'स्वस्थ पोषक पेड़ की कोमल टहनी पर लाह के आवरण का विस्तृत मैक्रो शॉट। ध्यान दें कि टहनी पर एक समान, घनी परत और सूक्ष्म श्वसन छिद्र मौजूद हैं, जिनसे कीट संचरण के दौरान बाहर निकलते हैं।'
        : 'Detailed macro shot of healthy lac encrustation on fresh host branch shoots. Notice the uniform, continuous resinous coating and aeration spots through which young crawlers emerge during the swarming period.',
      whatsappMsg: isHindi
        ? 'नमस्ते लाह सुविधा केंद्र, मुझे स्वस्थ लाह बीज आवरण और खेती सामग्री की जानकारी चाहिए।'
        : 'Hello Lah Suvidha Kendra, I am interested in healthy lac seed encrustation and cultivation supplies. Please share details.',
      keyPoints: isHindi
        ? [
            'टहनी पर कीटों का घना, एक समान जमाव',
            'न्यूनतम परजीवी प्रभाव और स्वस्थ राल स्राव',
            'कटाई और संचरण से पहले उत्तम बीहन की पहचान',
          ]
        : [
            'Shows dense, continuous insect settlement on branch',
            'Minimal parasitic infestation and healthy resin formation',
            'Crucial indicator of prime brood quality before harvesting',
          ],
    },
  };

  const current = photos[selectedPhoto];

  return (
    <section id="lac-seeds-photo" className="py-16 bg-[#F4EFE6]/90 border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24] mb-2">
            <Camera className="w-4 h-4" />
            <span>{t.lacSeedsSection.tag}</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E]">
            {t.lacSeedsSection.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2">
            {t.lacSeedsSection.sub}
          </p>
        </div>

        {/* Photo Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => {
              setSelectedPhoto('grains');
              setIsZoomed(false);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedPhoto === 'grains'
                ? 'bg-[#6E1B24] text-white shadow-md'
                : 'bg-white text-[#4A3E37] border border-[#DDD3C5] hover:bg-[#FAF7F2]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.lacSeedsSection.tabGrains}</span>
          </button>

          <button
            onClick={() => {
              setSelectedPhoto('sticks');
              setIsZoomed(false);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedPhoto === 'sticks'
                ? 'bg-[#6E1B24] text-white shadow-md'
                : 'bg-white text-[#4A3E37] border border-[#DDD3C5] hover:bg-[#FAF7F2]'
            }`}
          >
            <Sprout className="w-4 h-4" />
            <span>{t.lacSeedsSection.tabSticks}</span>
          </button>

          <button
            onClick={() => {
              setSelectedPhoto('twigs');
              setIsZoomed(false);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedPhoto === 'twigs'
                ? 'bg-[#6E1B24] text-white shadow-md'
                : 'bg-white text-[#4A3E37] border border-[#DDD3C5] hover:bg-[#FAF7F2]'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>{t.lacSeedsSection.tabTwigs}</span>
          </button>
        </div>

        {/* Main Photo Viewer Card */}
        <div className="bg-white rounded-2xl border border-[#E7DFD3] shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: The Photo Viewer with Zoom */}
            <div className="lg:col-span-7 relative bg-[#FAF7F2] p-4 sm:p-6 flex flex-col justify-center items-center overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E7DFD3]">
              <div className="relative w-full rounded-xl overflow-hidden shadow-sm group">
                <img
                  src={current.url}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className={`w-full object-cover transition-all duration-300 ${
                    isZoomed
                      ? 'scale-150 cursor-zoom-out h-[420px] sm:h-[480px] object-contain'
                      : 'h-80 sm:h-96 object-cover cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 rounded text-xs font-semibold text-[#6E1B24] border border-[#E7DFD3]">
                  {current.tag}
                </div>

                {/* Zoom control toggle */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{isZoomed ? t.lacSeedsSection.resetZoom : t.lacSeedsSection.zoomIn}</span>
                </button>
              </div>

              {/* Photo Indicator Bar */}
              <div className="w-full mt-4 flex items-center justify-between text-xs text-[#7A6A5D]">
                <span>{isHindi ? 'प्रदर्शित:' : 'Showing:'} <strong>{current.title}</strong></span>
                <span className="italic">{t.lacSeedsSection.clickToInspect}</span>
              </div>
            </div>

            {/* Right: Technical Explanation & WhatsApp Enquiry */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6E1B24]">
                  <span>{isHindi ? 'उत्पाद फोटोग्राफी विवरण' : 'Product Photography Detail'}</span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2C241E] leading-tight">
                  {current.title}
                </h3>

                <p className="text-sm text-[#5A4D43] leading-relaxed">
                  {current.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-2.5">
                    {t.lacSeedsSection.whatToLookFor}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4A3E37]">
                    {current.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2D6344] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct WhatsApp Callout for this specific photo */}
              <div className="pt-4 border-t border-[#E7DFD3] space-y-3">
                <a
                  href={getWhatsAppUrl(current.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-5 rounded-lg text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{t.lacSeedsSection.enquireBtn}</span>
                </a>

                <p className="text-[11px] text-center text-[#7A6A5D]">
                  WhatsApp: <strong>{BUSINESS_CONFIG.displayWhatsapp}</strong> · {isHindi ? 'संपर्क: श्री शक्ति धर कोइरी, रांची' : `Contact: ${BUSINESS_CONFIG.ownerName}, Ranchi`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

