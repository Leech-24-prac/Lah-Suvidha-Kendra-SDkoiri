import React from 'react';
import { Sprout, Check, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const FarmerSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isHindi = language === 'hi';

  const supplies = isHindi
    ? [
        { title: 'लाह बीज', desc: 'मौसमी संचरण के समय के अनुसार व्यवहार्य जैविक संचरण सामग्री।' },
        { title: 'बीहन लाह', desc: 'स्वस्थ परिपक्व आच्छादित टहनियां, जिसमें सेमियालता बीहन लाह शामिल है।' },
        { title: 'लाह पोषक पौधे', desc: 'फ्लेमिंगिया सेमियालता, कुसुम और बेर के स्वस्थ पौध व पौधे।' },
        { title: 'सिंथेटिक नेट', desc: 'डालियों पर बीहन लाह बांधने व संचरण सुरक्षित करने हेतु जालीदार जाली।' },
        { title: 'कटाई उपकरण', desc: 'प्रूनिंग सिकेटियर्स, कटाई कैंची और टहनी प्रबंधन के टिकाऊ औजार।' },
        { title: 'खेती के औजार', desc: 'बगीचे के रख-रखाव और झाड़-झंखाड़ नियंत्रण के लिए आवश्यक उपकरण।' },
        { title: 'कीटनाशक', desc: 'फसल सुरक्षा इनपुट्स, जो उपलब्धता और कृषि नियमों के अनुसार प्रदान किए जाते हैं।' },
        { title: 'पेस्टीसाइड्स / इनसेक्टीसाइड्स', desc: 'शत्रु कीटों व पतंगों से लाह कॉलोनी की सुरक्षा के अधिकृत उत्पाद।' },
      ]
    : [
        { title: 'Seeds', desc: 'Viable lac insect inoculation material timed for seasonal swarming.' },
        { title: 'Brood Lac', desc: 'Healthy mature encrusted twigs, including Semialta brood lac.' },
        { title: 'Lac Cultivation Plants', desc: 'Host saplings including Flemingia semialata, Kusum, and Ber.' },
        { title: 'Synthetic Net', desc: 'Mesh sleeves and rolls for securing brood twigs during inoculation.' },
        { title: 'Cutting Equipment', desc: 'Pruning secateurs, harvesting shears, and branch management tools.' },
        { title: 'Farming Tools', desc: 'Durable field implements for orchard maintenance and weed control.' },
        { title: 'Pesticides', desc: 'Crop protection inputs subject to availability and regulations.' },
        { title: 'Insecticides', desc: 'Authorized inputs to protect colonies against predatory moths.' },
      ];

  const farmerWhatsAppMsg = isHindi
    ? 'नमस्ते लाह सुविधा केंद्र, मैं एक किसान हूँ और लाह की खेती की सामग्री/बीहन में रुचि रखता हूँ। कृपया उपलब्धता और विवरण साझा करें।'
    : 'Hello Lah Suvidha Kendra, I am a farmer interested in lac cultivation supplies. Please share current availability and details.';

  return (
    <section id="farmers" className="py-16 sm:py-20 bg-[#1C3F2B] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
            <Sprout className="w-4 h-4" />
            <span>{t.farmers.tag}</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.farmers.headline}
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/90 mt-3 leading-relaxed">
            {t.farmers.sub}
          </p>
        </div>

        {/* 8 Essential Farmer Supplies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {supplies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-xs p-5 rounded-xl border border-white/15 hover:bg-white/15 transition-all"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-md bg-amber-400 text-[#1C3F2B] flex items-center justify-center font-bold text-xs shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-white">{item.title}</h3>
              </div>
              <p className="text-xs text-emerald-100/80 leading-relaxed pl-9">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Farmer Call To Action Box */}
        <div className="bg-[#FAF7F2] text-[#2C241E] rounded-2xl p-8 sm:p-10 shadow-xl border border-[#E7DFD3] max-w-4xl mx-auto text-center">
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2C241E]">
            {t.farmers.boxTitle}
          </h3>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2 max-w-xl mx-auto">
            {t.farmers.boxDesc}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(farmerWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-lg text-base font-semibold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.farmers.whatsappBtn}</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.whatsapp}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6E1B24] hover:bg-[#58141C] text-white px-7 py-3.5 rounded-lg text-base font-semibold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>{t.farmers.callBtn} {BUSINESS_CONFIG.displayWhatsapp}</span>
            </a>
          </div>

          <div className="mt-4 text-xs text-[#7A6A5D]">
            {t.farmers.note}
          </div>
        </div>
      </div>
    </section>
  );
};

