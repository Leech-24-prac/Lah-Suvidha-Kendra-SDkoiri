import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, defaultText?: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    nav_about: 'About',
    nav_products: 'Products',
    nav_seeds_photo: 'Lac Seeds Photo',
    nav_booking: 'Book Appointment',
    nav_calculator: 'Brood Calculator',
    nav_calendar: 'Crop Calendar',
    nav_farmers: 'For Farmers',
    nav_businesses: 'For Businesses',
    nav_knowledge: 'Lac Knowledge',
    nav_gallery: 'Gallery',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',

    // Trust bar
    trust_exp_title: '25+ Years',
    trust_exp_sub: 'Lac Industry Experience',
    trust_exp_desc: 'Practical cultivation knowledge & proven regional supply',
    trust_products_title: 'Lac Products',
    trust_products_sub: 'Kusmi • Rangini • Raw Lac',
    trust_products_desc: 'Resin, gum, sticklac & seasonal harvests',
    trust_supplies_title: 'Cultivation Supplies',
    trust_supplies_sub: 'Seeds • Brood Lac • Synthetic Net',
    trust_supplies_desc: 'High-viability inoculation materials & host plants',
    trust_tools_title: 'Equipment & Inputs',
    trust_tools_sub: 'Cutting Equipment • Pesticides • Insecticides',
    trust_tools_desc: 'Pruning tools & authorized crop protection supplies',

    // Hero
    hero_title: '25+ Years of Lac Industry Experience',
    hero_tagline: 'Lac Cultivation • Lac Products • Agricultural Supplies',
    hero_desc:
      'Lah Suvidha Kendra provides lac cultivation products, agricultural supplies, equipment and lac-related products, backed by more than 25 years of practical experience in the lac industry.',
    hero_quote:
      '“Your source for lac cultivation materials, products and agricultural supplies.”',
    explore_products: 'Explore Products',
    chat_whatsapp: 'Chat on WhatsApp',
    established_in: 'Established Lac Supplier · Ranchi, Jharkhand',
    proprietor: 'Proprietor',
    direct_enquiries: 'Direct Enquiries:',

    // Calculator
    calc_title: 'Brood Lac & Seed Requirement Calculator',
    calc_subtitle:
      'Calculate estimated brood lac sticks, synthetic mesh, and pruning requirements for your farm.',

    // Calendar
    calendar_title: 'Jharkhand Lac Crop Cycle & Booking Calendar',
    calendar_subtitle:
      'Timely pre-booking of brood lac is crucial because live inoculation sticks must be tied onto trees within days of swarming.',

    // Booking Appointment
    booking_title: 'Book a Consultation / Brood Reservation',
    booking_subtitle:
      'Schedule a personalized appointment with Shri Shakti Dhar Koiri at Lah Suvidha Kendra, Ranchi, for seasonal brood lac orders, farm guidance, or wholesale supply discussions.',
    booking_submit: 'Confirm & Schedule Appointment',
    booking_saving: 'Confirming Appointment...',
    booking_success_title: 'Appointment Scheduled Successfully!',
    booking_success_desc:
      'Your consultation booking has been created with a verified reference ID. Please click below to confirm your slot directly on WhatsApp with Shri Shakti Dhar Koiri.',

    // Common
    whatsapp_cta: 'Chat on WhatsApp',
    call_us: 'Call Us',
    view_details: 'View Details & Applications',
    enquire_whatsapp: 'Enquire on WhatsApp',
    close: 'Close',
  },
  hi: {
    // Navigation
    nav_about: 'परिचय (About)',
    nav_products: 'उत्पाद (Products)',
    nav_seeds_photo: 'लाह बीज फोटो',
    nav_booking: 'परामर्श व बुकिंग',
    nav_calculator: 'बीहन कैलकुलेटर',
    nav_calendar: 'फसल कैलेंडर',
    nav_farmers: 'किसानों के लिए',
    nav_businesses: 'व्यापार (B2B)',
    nav_knowledge: 'लाह ज्ञान',
    nav_gallery: 'गैलरी',
    nav_faq: 'सवाल-जवाब',
    nav_contact: 'संपर्क',

    // Trust bar
    trust_exp_title: '25+ वर्ष',
    trust_exp_sub: 'लाह उद्योग का अनुभव',
    trust_exp_desc: 'व्यावहारिक खेती की जानकारी एवं विश्वसनीय आपूर्ति',
    trust_products_title: 'लाह उत्पाद',
    trust_products_sub: 'कुसुमी • रंगीनी • कच्ची लाह',
    trust_products_desc: 'लाह रेजिन, लाह गोंद एवं प्राकृतिक लाख',
    trust_supplies_title: 'खेती की सामग्री',
    trust_supplies_sub: 'बीज • बीहन लाह • जाली (Net)',
    trust_supplies_desc: 'उच्च गुणवत्ता वाला बीहन एवं पोषक पौधे',
    trust_tools_title: 'उपकरण व इनपुट',
    trust_tools_sub: 'कटाई औजार • कीटनाशक दवाएं',
    trust_tools_desc: 'सटीक कटाई हेतु प्रूनिंग कटर एवं फसल सुरक्षा',

    // Hero
    hero_title: 'लाह उद्योग में 25+ वर्षों का अनुभव',
    hero_tagline: 'लाह की खेती • लाह उत्पाद • कृषि सामग्री',
    hero_desc:
      'लाह सुविधा केंद्र, रांची (झारखंड) द्वारा 25 से अधिक वर्षों के व्यावहारिक अनुभव के साथ लाह की खेती के उत्पाद, कृषि सामग्री, उपकरण एवं लाह संबंधी उत्पाद उपलब्ध कराए जाते हैं।',
    hero_quote:
      '“लाह की खेती की सामग्री, उत्पाद और कृषि आपूर्ति के लिए आपका विश्वसनीय केंद्र।”',
    explore_products: 'उत्पाद देखें',
    chat_whatsapp: 'व्हाट्सएप पर बात करें',
    established_in: 'विश्वसनीय लाह आपूर्तिकर्ता · रांची, झारखंड',
    proprietor: 'संचालक',
    direct_enquiries: 'सीधा संपर्क:',

    // Calculator
    calc_title: 'लाह बीज एवं बीहन कैलकुलेटर',
    calc_subtitle:
      'अपने पेड़ों या खेत के अनुसार आवश्यक बीहन लाह (Brood Lac) और जाली की मात्रा का सटीक अनुमान लगाएं।',

    // Calendar
    calendar_title: 'झारखंड लाह फसल चक्र एवं बीहन बुकिंग कैलेंडर',
    calendar_subtitle:
      'बीहन लाह की समय पर बुकिंग अत्यंत आवश्यक है क्योंकि स्वस्थ कीड़े निकलने के कुछ ही दिनों के भीतर इसे पेड़ों पर चढ़ाना होता है।',

    // Booking Appointment
    booking_title: 'परामर्श एवं बीहन लाह आरक्षण (Booking)',
    booking_subtitle:
      'लाह सुविधा केंद्र, रांची में श्री शक्ति धर कोइरी जी से व्यक्तिगत परामर्श, बीहन लाह अग्रिम बुकिंग, अथवा थोक व्यापार के लिए समय बुक करें।',
    booking_submit: 'अपॉइंटमेंट बुक करें (Schedule Appointment)',
    booking_saving: 'अपॉइंटमेंट दर्ज हो रहा है...',
    booking_success_title: 'अपॉइंटमेंट सफलतापूर्वक दर्ज हो गया!',
    booking_success_desc:
      'आपका अपॉइंटमेंट संदर्भ संख्या (Reference ID) के साथ तैयार हो गया है। समय की त्वरित पुष्टि के लिए नीचे दिए गए बटन से श्री शक्ति धर कोइरी जी को सीधे व्हाट्सएप संदेश भेजें।',

    // Common
    whatsapp_cta: 'व्हाट्सएप पर बात करें',
    call_us: 'फोन करें',
    view_details: 'विवरण व उपयोग देखें',
    enquire_whatsapp: 'व्हाट्सएप पर जानकारी लें',
    close: 'बंद करें',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  toggleLanguage: () => {},
  t: (key: string, defaultText?: string) => defaultText || key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('lah_lang');
      if (saved === 'hi' || saved === 'en') return saved;
    } catch {}
    return 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('lah_lang', newLang);
    } catch {}
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  const t = (key: string, defaultText?: string) => {
    return translations[lang]?.[key] || defaultText || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
