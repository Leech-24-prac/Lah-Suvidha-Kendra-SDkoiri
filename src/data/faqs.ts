export interface FAQItem {
  question: string;
  questionHi?: string;
  answer: string;
  answerHi?: string;
  category?: string;
  categoryHi?: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'What is lac?',
    questionHi: 'लाह क्या है?',
    answer:
      'Lac is a natural, biodegradable resin secreted by microscopic insects (principally Kerria lacca) that feed on the sap of host trees. It is collected as raw sticklac and processed into seeds, flakes, resin, gum, and shellac used worldwide for wood finishes, polishes, natural coatings, insulation, and artisan crafts.',
    answerHi:
      'लाह एक प्राकृतिक और बायोडिग्रेडेबल राल (रेज़िन) है, जो पोषक पेड़ों के रस पर पलने वाले सूक्ष्म कीटों (केरिया लैका) द्वारा स्रावित किया जाता है। इसे कच्ची लाह (स्टिकलैक) के रूप में काटा जाता है और शुद्ध करके बीज, राल, गोंद तथा चपड़ा बनाया जाता है, जो पॉलिश, कोटिंग और हस्तशिल्प में उपयोग होता है।',
    category: 'General',
    categoryHi: 'सामान्य',
  },
  {
    question: 'What is Kusmi lac?',
    questionHi: 'कुसुमी लाह क्या है?',
    answer:
      'Kusmi lac is a high-grade variety of lac grown primarily on Kusum (Schleichera oleosa) trees and Flemingia semialata bushes. It features a light golden-amber color, exceptional clarity, and is harvested in two cycles: Aghani (winter) and Jethwi (summer).',
    answerHi:
      'कुसुमी लाह एक उच्च कोटि की लाह है जो मुख्य रूप से कुसुम के पेड़ों और सेमियालता की झाड़ियों पर उगाई जाती है। इसका रंग हल्का सुनहरा अंबर होता है और यह दो फसलों—अघनी (सर्दियों) और जेठवी (गर्मियों)—में काटी जाती है।',
    category: 'Lac Varieties',
    categoryHi: 'लाह की किस्में',
  },
  {
    question: 'What is Rangini lac?',
    questionHi: 'रंगीनी लाह क्या है?',
    answer:
      'Rangini lac is a widely cultivated traditional lac variety grown predominantly on Palas (Butea monosperma) and Ber (Ziziphus mauritiana) trees. It has a deeper amber hue, rich natural wax content, and is harvested in Baisakhi (summer) and Katki (autumn) seasons.',
    answerHi:
      'रंगीनी लाह भारत की व्यापक पारंपरिक लाह है जो मुख्य रूप से पलास और बेर के पेड़ों पर होती है। इसका रंग गहरा लाल-अंबर होता है, इसमें प्राकृतिक मोम भरपूर होता है और यह बैसाखी तथा कतकी मौसम में मिलती है।',
    category: 'Lac Varieties',
    categoryHi: 'लाह की किस्में',
  },
  {
    question: 'What is brood lac?',
    questionHi: 'बीहन लाह (ब्रूड लैक) क्या है?',
    answer:
      'Brood lac consists of mature lac-encrusted twigs carrying live, gravid female insects ready to release young nymphs (crawlers). Cultivators tie brood lac onto pruned host trees to inoculate the new crop cycle.',
    answerHi:
      'बीहन लाह में परिपक्व लाह लगी डंडियां होती हैं जिनमें जीवित मादा कीट होते हैं जो लाखों नन्हें कीट छोड़ने वाले होते हैं। किसान नई फसल शुरू करने के लिए इसे छंटे हुए पोषक पेड़ों पर बांधते हैं।',
    category: 'Cultivation',
    categoryHi: 'खेती',
  },
  {
    question: 'What are lac seeds?',
    questionHi: 'लाह बीज क्या होते हैं?',
    answer:
      'In agricultural practice, the term "lac seeds" refers to high-viability brood lac material containing healthy female insect colonies ready for swarming and crop propagation on host trees, as well as washed amber seedlac grains.',
    answerHi:
      'कृषि और व्यापार में "लाह बीज" का अर्थ संचरण हेतु तैयार स्वस्थ बीहन लाह सामग्री और साथ ही टहनी हटाकर धुले हुए सुनहरे दानेदार बीज (सीडलैक) दोनों से होता है।',
    category: 'Cultivation',
    categoryHi: 'खेती',
  },
  {
    question: 'Do you provide lac cultivation plants?',
    questionHi: 'क्या आप लाह पोषक पौधे उपलब्ध कराते हैं?',
    answer:
      'Yes, Lah Suvidha Kendra provides lac cultivation plants and host saplings, including varieties such as Flemingia semialata, Kusum, and Ber, backed by guidance on plant suitability and pruning cycles.',
    answerHi:
      'हां, लाह सुविधा केंद्र सेमियालता, कुसुम और बेर जैसी किस्मों के स्वस्थ पोषक पौधे और रोपण व छंटाई के चक्र पर अनुभवी मार्गदर्शन प्रदान करता है।',
    category: 'Supplies',
    categoryHi: 'आपूर्ति',
  },
  {
    question: 'Do you provide synthetic net?',
    questionHi: 'क्या आप सिंथेटिक नेट (जाली) प्रदान करते हैं?',
    answer:
      'Yes, we provide synthetic net specifically suited for lac cultivation. The netting holds brood lac twigs safely on host tree branches while enabling tiny crawlers to emerge freely, protecting the crop against drop-offs and predatory interference.',
    answerHi:
      'हां, हम लाह की खेती के लिए विशेष सिंथेटिक जाली प्रदान करते हैं। यह जाली बीहन की डंडियों को पेड़ पर सुरक्षित रखती है और नन्हे कीटों को टहनियों पर निकलने देती है।',
    category: 'Supplies',
    categoryHi: 'आपूर्ति',
  },
  {
    question: 'Do you provide cutting equipment?',
    questionHi: 'क्या आप कटाई उपकरण प्रदान करते हैं?',
    answer:
      'Yes, we supply cutting equipment such as specialized secateurs, pruning shears, and branch cutting tools essential for canopy pruning and harvesting lac stick twigs cleanly.',
    answerHi:
      'हां, हम विशेष सिकेटियर्स, प्रूनिंग कटर और कटाई औजार उपलब्ध कराते हैं जो पेड़ की डालियों की छंटाई और बीहन कटाई के लिए अत्यंत आवश्यक हैं।',
    category: 'Equipment',
    categoryHi: 'उपकरण',
  },
  {
    question: 'Do you provide pesticides?',
    questionHi: 'क्या आप कीटनाशक उपलब्ध कराते हैं?',
    answer:
      'Lah Suvidha Kendra provides pesticides relevant to agricultural and lac-cultivation requirements, subject to product availability and applicable regulations. Please contact us via WhatsApp for current availability.',
    answerHi:
      'लाह सुविधा केंद्र कृषि और लाह फसल सुरक्षा की आवश्यकताओं के अनुसार, उत्पाद की उपलब्धता और लागू नियमों के अधीन कीटनाशक उपलब्ध कराता है। उपलब्धता हेतु व्हाट्सएप पर संपर्क करें।',
    category: 'Agricultural Inputs',
    categoryHi: 'कृषि इनपुट्स',
  },
  {
    question: 'Do you provide insecticides?',
    questionHi: 'क्या आप इंसेक्टिसाइड्स प्रदान करते हैं?',
    answer:
      'Yes, we provide insecticides suited for agricultural and lac-crop protection against destructive moth and predator infestations, subject to product availability and applicable regulations.',
    answerHi:
      'हां, हानिकारक परभक्षी कीटों और पतंगों से लाह फसल की रक्षा हेतु हम लागू नियमों के तहत अधिकृत कीटनाशक प्रदान करते हैं।',
    category: 'Agricultural Inputs',
    categoryHi: 'कृषि इनपुट्स',
  },
  {
    question: 'Do you supply raw lac?',
    questionHi: 'क्या आप कच्ची लाह (स्टिकलैक) की आपूर्ति करते हैं?',
    answer:
      'Yes, we supply raw lac (sticklac) collected from regional cultivation belts, suitable for secondary processors, seedlac manufacturers, and industrial buyers.',
    answerHi:
      'हां, हम क्षेत्रीय लाह उत्पादक क्षेत्रों से संकलित शुद्ध कच्ची लाह (स्टिकलैक) की आपूर्ति करते हैं, जो बीज शोधन और प्रसंस्करण इकाइयों के लिए उपयुक्त है।',
    category: 'Products',
    categoryHi: 'उत्पाद',
  },
  {
    question: 'Do you supply lac resin?',
    questionHi: 'क्या आप लाह राल (रेज़िन) की आपूर्ति करते हैं?',
    answer:
      'Yes, we supply natural lac resin suitable for diverse coating, sealing, insulating, and manufacturing applications. You can contact us directly to discuss requirements and lot specifications.',
    answerHi:
      'हां, हम विभिन्न औद्योगिक कोटिंग, सीलिंग, इंसुलेशन और विनिर्माण कार्यों के लिए प्राकृतिक लाह राल की आपूर्ति करते हैं।',
    category: 'Products',
    categoryHi: 'उत्पाद',
  },
  {
    question: 'Do you supply lac gum?',
    questionHi: 'क्या आप लाह गोंद प्रदान करते हैं?',
    answer:
      'Yes, we provide natural lac gum used as a traditional binder, jewellery sealer, and adhesive in craft and industrial workshops.',
    answerHi:
      'हां, हम प्राकृतिक लाह गोंद प्रदान करते हैं जो पारंपरिक बांधक, लाह की चूड़ियों और शिल्पशालाओं में व्यापक रूप से काम आता है।',
    category: 'Products',
    categoryHi: 'उत्पाद',
  },
  {
    question: 'Can I enquire about bulk quantities?',
    questionHi: 'क्या मैं थोक (बल्क) मात्रा के लिए पूछताछ कर सकता हूँ?',
    answer:
      'Yes, businesses, traders, and farmer groups can enquire about bulk quantities across all our product lines. Please reach out with your required volume on WhatsApp or through our business enquiry form.',
    answerHi:
      'हां, व्यापारी, प्रोसेसर्स और किसान समूह सभी उत्पादों के लिए थोक मात्रा की पूछताछ कर सकते हैं। व्हाट्सएप या बिजनेस फॉर्म द्वारा संपर्क करें।',
    category: 'Enquiries',
    categoryHi: 'पूछताछ',
  },
  {
    question: 'Can farmers contact you?',
    questionHi: 'क्या किसान भाई आपसे संपर्क कर सकते हैं?',
    answer:
      'Absolutely. Lah Suvidha Kendra has over 25 years of experience working closely with farmers and lac growers, offering practical product supplies, cultivation inputs, and seasonal materials.',
    answerHi:
      'बिल्कुल। लाह सुविधा केंद्र 25+ वर्षों से किसान भाइयों के साथ मिलकर काम कर रहा है और उन्हें मौसमी बीहन, औजार तथा व्यावहारिक सलाह प्रदान करता है।',
    category: 'Enquiries',
    categoryHi: 'पूछताछ',
  },
  {
    question: 'Can businesses contact you?',
    questionHi: 'क्या व्यावसायिक संस्थान आपसे संपर्क कर सकते हैं?',
    answer:
      'Yes, we regularly cater to traders, industrial processors, agricultural retailers, and craft manufacturers seeking authentic lac materials and tools.',
    answerHi:
      'हां, हम व्यापारियों, औद्योगिक प्रोसेसर्स और कृषि विक्रेताओं को नियमित रूप से प्रामाणिक लाह सामग्री और उपकरणों की आपूर्ति करते हैं।',
    category: 'Enquiries',
    categoryHi: 'पूछताछ',
  },
  {
    question: 'How can I contact Lah Suvidha Kendra?',
    questionHi: 'लाह सुविधा केंद्र से कैसे संपर्क करें?',
    answer:
      'You can contact Shri Shakti Dhar Koiri at Lah Suvidha Kendra directly via WhatsApp at +91 91029 62005, or through the contact and business enquiry sections on this website.',
    answerHi:
      'आप लाह सुविधा केंद्र के श्री शक्ति धर कोइरी से सीधे व्हाट्सएप पर +91 91029 62005 पर संपर्क कर सकते हैं, या वेबसाइट के फॉर्म द्वारा संदेश भेज सकते हैं।',
    category: 'Contact',
    categoryHi: 'संपर्क',
  },
  {
    question: 'What is the WhatsApp number?',
    questionHi: 'व्हाट्सएप नंबर क्या है?',
    answer:
      '+91 91029 62005. You can click any WhatsApp link on this site to start an instant chat with pre-filled enquiry details.',
    answerHi:
      '+91 91029 62005। आप इस वेबसाइट के किसी भी व्हाट्सएप बटन पर क्लिक करके सीधे बातचीत शुरू कर सकते हैं।',
    category: 'Contact',
    categoryHi: 'संपर्क',
  },
];
