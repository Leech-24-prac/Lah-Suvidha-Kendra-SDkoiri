export type Language = 'en' | 'hi';

export interface TranslationData {
  nav: {
    about: string;
    products: string;
    lacSeedsPhoto: string;
    farmers: string;
    businesses: string;
    knowledge: string;
    gallery: string;
    faq: string;
    contact: string;
    langToggle: string;
    chatWhatsApp: string;
    experienceBadge: string;
    locationBadge: string;
  };
  hero: {
    experienceTag: string;
    headline: string;
    subheading: string;
    description: string;
    quote: string;
    exploreBtn: string;
    whatsappBtn: string;
    directEnquiries: string;
    proprietor: string;
    photoCaption: string;
  };
  trustBar: {
    expTitle: string;
    expSub: string;
    expDetail: string;
    prodTitle: string;
    prodSub: string;
    prodDetail: string;
    matTitle: string;
    matSub: string;
    matDetail: string;
    eqTitle: string;
    eqSub: string;
    eqDetail: string;
  };
  about: {
    tag: string;
    headline: string;
    p1: string;
    p2: string;
    p3: string;
    founderTitle: string;
    founderSub: string;
    connectWhatsApp: string;
    pillarsTitle: string;
    pillarsSub: string;
    pillars: {
      cultivationTitle: string;
      cultivationDesc: string;
      productsTitle: string;
      productsDesc: string;
      seedsTitle: string;
      seedsDesc: string;
      inputsTitle: string;
      inputsDesc: string;
      equipmentTitle: string;
      equipmentDesc: string;
      farmersTitle: string;
      farmersDesc: string;
    };
  };
  categories: {
    tag: string;
    headline: string;
    sub: string;
    explore: string;
    cat1: { name: string; tag: string; desc: string };
    cat2: { name: string; tag: string; desc: string };
    cat3: { name: string; tag: string; desc: string };
    cat4: { name: string; tag: string; desc: string };
  };
  products: {
    tag: string;
    headline: string;
    sub: string;
    searchPlaceholder: string;
    tabAll: string;
    tabMaterials: string;
    tabProducts: string;
    tabEquipment: string;
    tabInputs: string;
    enquireBtn: string;
    viewDetails: string;
    photosCount: string;
    equipmentCalloutTag: string;
    equipmentCalloutTitle: string;
    equipmentCalloutDesc: string;
    equipmentCalloutBtn: string;
    inputsCalloutTag: string;
    inputsCalloutTitle: string;
    inputsCalloutQuote: string;
    inputsCalloutNote: string;
    inputsCalloutBtn1: string;
    inputsCalloutBtn2: string;
  };
  lacSeedsSection: {
    tag: string;
    headline: string;
    sub: string;
    tabGrains: string;
    tabSticks: string;
    tabTwigs: string;
    zoomIn: string;
    resetZoom: string;
    clickToInspect: string;
    whatToLookFor: string;
    enquireBtn: string;
  };
  farmers: {
    tag: string;
    headline: string;
    sub: string;
    boxTitle: string;
    boxDesc: string;
    whatsappBtn: string;
    callBtn: string;
    note: string;
  };
  knowledge: {
    tag: string;
    headline: string;
    sub: string;
    lifecycleTitle: string;
    comparisonTag: string;
    comparisonTitle: string;
    comparisonSub: string;
    helpText: string;
    helpBtn: string;
  };
  b2b: {
    tag: string;
    headline: string;
    sub: string;
    suitableFor: string;
    productsTitle: string;
    needQuoteTitle: string;
    needQuoteDesc: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    companyLabel: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    productLabel: string;
    qtyLabel: string;
    msgLabel: string;
    submitBtn: string;
    whatsappBtn: string;
  };
  international: {
    tag: string;
    headline: string;
    quote: string;
    point1: string;
    point2: string;
    point3: string;
    btn: string;
  };
  gallery: {
    tag: string;
    headline: string;
    sub: string;
    note: string;
    ctaBtn: string;
  };
  faq: {
    tag: string;
    headline: string;
    sub: string;
    searchPlaceholder: string;
    extraTitle: string;
    extraDesc: string;
    extraBtn: string;
  };
  contact: {
    tag: string;
    headline: string;
    sub: string;
    whatsappLabel: string;
    locationLabel: string;
    phoneLabel: string;
    emailLabel: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    phoneInputLabel: string;
    msgInputLabel: string;
    submitBtn: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    productsTitle: string;
    contactTitle: string;
    backToTop: string;
    disclaimer: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  en: {
    nav: {
      about: 'About',
      products: 'Products',
      lacSeedsPhoto: 'Lac Seeds Photo',
      farmers: 'For Farmers',
      businesses: 'For Businesses',
      knowledge: 'Lac Knowledge',
      gallery: 'Gallery',
      faq: 'FAQ',
      contact: 'Contact',
      langToggle: 'हिन्दी',
      chatWhatsApp: 'Chat on WhatsApp',
      experienceBadge: '25+ Years Lac Industry Experience',
      locationBadge: 'Ranchi, Jharkhand, India',
    },
    hero: {
      experienceTag: 'Established Lac Supplier · Ranchi, Jharkhand',
      headline: '25+ Years of Lac Industry Experience',
      subheading: 'Lac Cultivation • Lac Products • Agricultural Supplies',
      description:
        'Lah Suvidha Kendra provides lac cultivation products, agricultural supplies, equipment and lac-related products, backed by more than 25 years of practical experience in the lac industry.',
      quote: '“Your source for lac cultivation materials, products and agricultural supplies.”',
      exploreBtn: 'Explore Products',
      whatsappBtn: 'Chat on WhatsApp',
      directEnquiries: 'Direct Enquiries:',
      proprietor: 'Proprietor: Shri Shakti Dhar Koiri',
      photoCaption: 'Ranchi, Jharkhand · Brood Lac, Seeds, Host Plants & Tools',
    },
    trustBar: {
      expTitle: '25+ Years',
      expSub: 'Lac Industry Experience',
      expDetail: 'Practical cultivation knowledge & proven regional supply',
      prodTitle: 'Lac Products',
      prodSub: 'Kusmi • Rangini • Raw Lac',
      prodDetail: 'Resin, gum, sticklac & seasonal harvests',
      matTitle: 'Cultivation Supplies',
      matSub: 'Seeds • Brood Lac • Synthetic Net',
      matDetail: 'High-viability inoculation materials & host plants',
      eqTitle: 'Equipment & Inputs',
      eqSub: 'Cutting Equipment • Pesticides • Insecticides',
      eqDetail: 'Pruning tools & authorized crop protection supplies',
    },
    about: {
      tag: 'About Lah Suvidha Kendra',
      headline: '25+ Years of Experience in the Lac Industry',
      p1: 'Lah Suvidha Kendra is an established lac business based in Ranchi, Jharkhand, India. With more than 25 years of practical experience in lac-related agricultural activities, the enterprise serves as a dependable source for cultivation materials, lac products, and farming inputs.',
      p2: 'Led by Shri Shakti Dhar Koiri, the business brings quarter of a century of hands-on experience in the lac ecosystem—working directly with the natural crop cycles, host tree care, inoculation materials, and product handling.',
      p3: 'Located in the heart of Jharkhand—one of India\'s preeminent lac-producing regions—Lah Suvidha Kendra understands the exact requirements of both rural cultivators and trade buyers seeking reliable lac supplies.',
      founderTitle: 'Shri Shakti Dhar Koiri',
      founderSub: 'Proprietor · Lah Suvidha Kendra',
      connectWhatsApp: 'Connect on WhatsApp',
      pillarsTitle: 'Practical Lac Industry Knowledge & Supply',
      pillarsSub: 'Grounded in 25+ years of real field experience across every phase of lac production.',
      pillars: {
        cultivationTitle: 'Lac Cultivation',
        cultivationDesc: 'Practical knowledge of host tree management, seasonal inoculations, crawler emergence timing, and field cultivation on Kusum, Ber, Palas, and Semialta plants.',
        productsTitle: 'Lac Products',
        productsDesc: 'Sourcing, grading, and supplying natural raw lac (sticklac), Kusmi lac, Rangini lac, processed lac resin, and natural lac gum.',
        seedsTitle: 'Seeds & Brood Lac',
        seedsDesc: 'Handling viable brood lac and lac seed materials with the seasonal care required to safeguard crawlers prior to branch inoculation.',
        inputsTitle: 'Agricultural Inputs',
        inputsDesc: 'Supplying crop protection pesticides and insecticides compliant with agricultural standards to assist growers with pest-free crops.',
        equipmentTitle: 'Cultivation Equipment',
        equipmentDesc: 'Providing dependable branch cutting equipment, pruning shears, and synthetic mesh netting tailored to lac harvesting operations.',
        farmersTitle: 'Farmer Requirements',
        farmersDesc: 'Deep understanding of ground-level challenges faced by rural lac growers, smallholders, and commercial agroforestry farmers.',
      },
    },
    categories: {
      tag: 'Product Categories',
      headline: 'Lac Supplies & Agricultural Inputs',
      sub: 'Explore our specialized catalogue spanning biological cultivation materials, natural lac resins, field implements, and crop inputs.',
      explore: 'Explore Products',
      cat1: {
        name: 'Lac Cultivation Materials',
        tag: 'Seeds • Brood Lac • Cultivation Plants',
        desc: 'Essential biological materials, host saplings, and protective nets required for successful lac crop inoculation and establishment.',
      },
      cat2: {
        name: 'Lac Products',
        tag: 'Kusmi • Rangini • Raw Lac • Lac Resin • Lac Gum',
        desc: 'High-quality natural lac varieties and refined derivatives sourced and handled with over 25 years of industry experience.',
      },
      cat3: {
        name: 'Equipment & Tools',
        tag: 'Cutting Equipment • Farming Tools • Synthetic Net',
        desc: 'Reliable cutting equipment, pruning implements, and handling materials specifically suited for lac cultivation operations.',
      },
      cat4: {
        name: 'Agricultural Inputs',
        tag: 'Pesticides • Insecticides • Other Cultivation Inputs',
        desc: 'Crop care inputs relevant to agricultural and lac-cultivation requirements, subject to availability and applicable regulations.',
      },
    },
    products: {
      tag: 'Full Product Catalogue',
      headline: 'Lac Products & Cultivation Supplies',
      sub: 'From brood lac inoculation sticks to refined resin, pruning tools, and crop protection supplies, explore our complete inventory backed by 25+ years of practical experience.',
      searchPlaceholder: 'Search products or tools...',
      tabAll: 'All Catalogue',
      tabMaterials: '🌱 Cultivation Materials',
      tabProducts: '🪴 Lac Products',
      tabEquipment: '🛠️ Equipment & Tools',
      tabInputs: '🌾 Pesticides & Inputs',
      enquireBtn: 'Enquire on WhatsApp',
      viewDetails: 'View Photos & Specifications',
      photosCount: 'Photos',
      equipmentCalloutTag: 'Lac Cultivation Tools & Equipment',
      equipmentCalloutTitle: 'Reliable Harvesting & Pruning Implements',
      equipmentCalloutDesc: 'Lah Suvidha Kendra supplies cutting equipment, heavy-duty pruning shears, agricultural farming tools, and synthetic nets specifically suited to lac cultivation activities. Clean cuts protect host tree canopies from infection and enable efficient brood twig harvesting.',
      equipmentCalloutBtn: 'Ask About Equipment Availability',
      inputsCalloutTag: 'Pesticides & Insecticides',
      inputsCalloutTitle: 'Agricultural Crop Protection Inputs',
      inputsCalloutQuote: '“Lah Suvidha Kendra provides pesticides and insecticides relevant to agricultural and lac-cultivation requirements, subject to product availability and applicable regulations.”',
      inputsCalloutNote: 'Note: Products are supplied strictly in adherence with applicable agricultural guidelines. Please contact us directly regarding stock availability and authorized products.',
      inputsCalloutBtn1: 'Contact Us for Available Products',
      inputsCalloutBtn2: 'WhatsApp Enquiry',
    },
    lacSeedsSection: {
      tag: 'High-Resolution Photo Inspection',
      headline: 'Lac Seeds in High-Definition Photography',
      sub: 'In the lac industry, "lac seeds" refers both to granular amber seedlac grains and live brood lac seed sticks used for tree inoculation. Inspect both forms below.',
      tabGrains: 'Lac Seeds (Amber Grains / Seedlac)',
      tabSticks: 'Lac Seed Sticks (Brood Inoculation Sticks)',
      tabTwigs: 'Branch Encrustation Detail',
      zoomIn: 'Click to Zoom In',
      resetZoom: 'Click to Reset Zoom',
      clickToInspect: 'Click image to inspect texture',
      whatToLookFor: 'What to look for in this photo:',
      enquireBtn: 'Enquire about Lac Seeds on WhatsApp',
    },
    farmers: {
      tag: 'Dedicated Service For Cultivators',
      headline: 'Everything You Need for Lac Cultivation',
      sub: 'Lah Suvidha Kendra provides a comprehensive range of products, supplies, and tools for lac cultivation—backed by more than 25 years of practical knowledge assisting smallholders and commercial agroforestry growers across Jharkhand.',
      boxTitle: 'Looking for Lac Cultivation Supplies?',
      boxDesc: 'Get in touch with Shri Shakti Dhar Koiri to verify seasonal brood lac schedules, seedling availability, synthetic nets, and field tools.',
      whatsappBtn: 'WhatsApp Us',
      callBtn: 'Call Us:',
      note: 'Based in Ranchi, Jharkhand · Serving cultivators with practical advice & prompt supply',
    },
    knowledge: {
      tag: 'Lac Knowledge Hub',
      headline: 'Understanding Lac',
      sub: 'Explore the biological cycle, host agroforestry, harvesting techniques, and processing steps that turn tiny insect secretions into versatile natural resin products.',
      lifecycleTitle: 'The Lac Cultivation & Production Lifecycle',
      comparisonTag: 'Variety Guide',
      comparisonTitle: 'Kusmi vs. Rangini Lac: Factual Comparison',
      comparisonSub: 'India produces two primary botanical strains of lac, each differentiated by host tree species, harvest calendar, color, and technical uses.',
      helpText: 'Need help with lac products or cultivation supplies? Contact us on WhatsApp to discuss your crop season or resin grade.',
      helpBtn: 'Contact on WhatsApp',
    },
    b2b: {
      tag: 'Commercial & Wholesale Services',
      headline: 'Lac Products & Supplies for Businesses',
      sub: 'Backed by more than 25 years of hands-on experience in the lac heartland of Ranchi, Jharkhand, Lah Suvidha Kendra supplies high-grade natural commodities, cultivation materials, and field tools to commercial entities.',
      suitableFor: 'Suitable for:',
      productsTitle: 'Products Available for B2B Supply:',
      needQuoteTitle: 'Need an Immediate Quotation?',
      needQuoteDesc: 'Direct business enquiries can also be handled immediately on WhatsApp at',
      formTitle: 'Business Enquiry Form',
      formSub: 'Submit your required commodity, specifications, and volume for custom evaluation.',
      nameLabel: 'Full Name *',
      companyLabel: 'Company Name',
      phoneLabel: 'Phone / Mobile *',
      emailLabel: 'Email Address',
      locationLabel: 'Location / City *',
      productLabel: 'Product',
      qtyLabel: 'Estimated Qty',
      msgLabel: 'Requirements / Message',
      submitBtn: 'Send Business Enquiry',
      whatsappBtn: 'Enquire on WhatsApp',
    },
    international: {
      tag: 'Global Inquiries',
      headline: 'For International Buyers',
      quote: '“We welcome enquiries from businesses interested in Indian lac and lac-related products. Contact Lah Suvidha Kendra to discuss product availability, specifications, quantities and possible delivery arrangements.”',
      point1: 'Indian Lac Origin (Jharkhand Region)',
      point2: 'Custom Batch & Grade Discussions',
      point3: 'Direct Communication with Proprietor',
      btn: 'International WhatsApp Enquiry',
    },
    gallery: {
      tag: 'Visual Overview',
      headline: 'Lac Cultivation & Product Gallery',
      sub: 'Inspect authentic photographs of lac seeds (grains & brood sticks), host trees, amber resin flakes, and harvesting implements. Click any image to view in high resolution.',
      note: '*Visual representations illustrative of lac cultivation practices, seed materials, and products in Jharkhand.',
      ctaBtn: 'Ask Shri Shakti Dhar Koiri about current lot photos on WhatsApp',
    },
    faq: {
      tag: 'Frequently Asked Questions',
      headline: 'Frequently Asked Questions',
      sub: 'Clear, factual answers regarding lac cultivation, brood supplies, equipment availability, and how to reach us.',
      searchPlaceholder: 'Search questions (e.g., brood lac, Kusmi, WhatsApp)...',
      extraTitle: 'Have a question not listed here?',
      extraDesc: 'Contact Shri Shakti Dhar Koiri directly on WhatsApp for prompt responses regarding lac supplies and current availability.',
      extraBtn: 'Ask on WhatsApp:',
    },
    contact: {
      tag: 'Get in Touch',
      headline: 'Contact Lah Suvidha Kendra',
      sub: 'Reach out directly for product availability, brood lac cycles, agricultural inputs, and B2B orders.',
      whatsappLabel: 'Official WhatsApp (Direct Contact)',
      locationLabel: 'Business Location',
      phoneLabel: 'Telephone',
      emailLabel: 'Email Address',
      formTitle: 'Send a Direct Message',
      formSub: 'Fill in your contact information and query to connect immediately.',
      nameLabel: 'Your Name *',
      phoneInputLabel: 'Phone / WhatsApp Number *',
      msgInputLabel: 'Your Message / Product Enquiry *',
      submitBtn: 'Send Message',
    },
    footer: {
      tagline: 'Your source for lac cultivation materials, products and agricultural supplies.',
      navTitle: 'Navigation',
      productsTitle: 'Products & Supplies',
      contactTitle: 'Direct Contact',
      backToTop: 'Back to top',
      disclaimer: 'Disclaimer: Lah Suvidha Kendra provides lac cultivation products, agricultural supplies, equipment and lac-related products backed by more than 25 years of practical experience. Product availability, brood lac timing, and agricultural inputs are subject to seasonal cycles and regulatory compliance.',
    },
  },

  // COMPLETE HINDI TRANSLATION (हिंदी)
  hi: {
    nav: {
      about: 'हमारे बारे में',
      products: 'उत्पाद',
      lacSeedsPhoto: 'लाह बीज फोटो',
      farmers: 'किसानों के लिए',
      businesses: 'व्यापार/B2B',
      knowledge: 'लाह ज्ञान केंद्र',
      gallery: 'गैलरी',
      faq: 'सवाल-जवाब (FAQ)',
      contact: 'संपर्क',
      langToggle: 'English',
      chatWhatsApp: 'व्हाट्सएप पर बात करें',
      experienceBadge: '25+ वर्षों का लाह उद्योग अनुभव',
      locationBadge: 'रांची, झारखंड, भारत',
    },
    hero: {
      experienceTag: 'प्रतिष्ठित लाह आपूर्तिकर्ता · रांची, झारखंड',
      headline: '25+ वर्षों का लाह उद्योग अनुभव',
      subheading: 'लाह की खेती • लाह उत्पाद • कृषि सामग्री',
      description:
        'लाह सुविधा केंद्र, लाह उद्योग में 25 से अधिक वर्षों के व्यावहारिक अनुभव के साथ लाह की खेती के उत्पाद, कृषि सामग्री, उपकरण और लाह से संबंधित उत्पाद उपलब्ध कराता है।',
      quote: '“लाह की खेती की सामग्री, उत्पाद और कृषि आपूर्ति के लिए आपका विश्वसनीय केंद्र।”',
      exploreBtn: 'उत्पाद देखें',
      whatsappBtn: 'व्हाट्सएप पर संपर्क करें',
      directEnquiries: 'सीधी पूछताछ:',
      proprietor: 'मालिक: श्री शक्ति धर कोइरी',
      photoCaption: 'रांची, झारखंड · बीहन लाह, बीज, पोषक पौधे एवं कृषि औजार',
    },
    trustBar: {
      expTitle: '25+ वर्ष',
      expSub: 'लाह उद्योग अनुभव',
      expDetail: 'खेती का व्यावहारिक ज्ञान और प्रामाणिक क्षेत्रीय आपूर्ति',
      prodTitle: 'लाह उत्पाद',
      prodSub: 'कुसुमी • रंगीनी • कच्ची लाह',
      prodDetail: 'लाह राल (रेज़िन), गोंद, स्टिकलैक एवं मौसमी फसल',
      matTitle: 'खेती सामग्री',
      matSub: 'बीज • बीहन लाह • सिंथेटिक नेट',
      matDetail: 'उच्च गुणवत्ता वाली संचरण सामग्री और पोषक पौधे',
      eqTitle: 'उपकरण एवं इनपुट्स',
      eqSub: 'कटाई औजार • कीटनाशक • पेस्टीसाइड्स',
      eqDetail: 'छंटाई उपकरण एवं अधिकृत फसल सुरक्षा सामग्री',
    },
    about: {
      tag: 'लाह सुविधा केंद्र के बारे में',
      headline: 'लाह उद्योग में 25 से अधिक वर्षों का अनुभव',
      p1: 'लाह सुविधा केंद्र रांची, झारखंड, भारत में स्थित एक स्थापित लाह व्यवसाय है। लाह से संबंधित कृषि गतिविधियों में 25 से अधिक वर्षों के व्यावहारिक अनुभव के साथ, यह उद्यम खेती सामग्री, लाह उत्पादों और कृषि इनपुट्स के लिए एक भरोसेमंद स्रोत के रूप में सेवारत है।',
      p2: 'श्री शक्ति धर कोइरी के नेतृत्व में, व्यवसाय लाह पारिस्थितिकी तंत्र में 25 वर्षों का ज़मीनी अनुभव प्रस्तुत करता है—जो प्राकृतिक फसल चक्रों, पोषक वृक्षों की देखभाल, बीहन सामग्री और उत्पाद ग्रेडिंग से गहराई से जुड़ा है।',
      p3: 'झारखंड के प्रमुख लाह उत्पादक क्षेत्र के केंद्र में स्थित, लाह सुविधा केंद्र ग्रामीण किसानों और व्यापारिक खरीदारों दोनों की सटीक आवश्यकताओं को भली-भांति समझता है।',
      founderTitle: 'श्री शक्ति धर कोइरी',
      founderSub: 'मालिक · लाह सुविधा केंद्र',
      connectWhatsApp: 'व्हाट्सएप पर जुड़ें',
      pillarsTitle: 'व्यावहारिक लाह उद्योग ज्ञान एवं आपूर्ति',
      pillarsSub: 'लाह उत्पादन के प्रत्येक चरण में 25+ वर्षों के वास्तविक ज़मीनी अनुभव पर आधारित।',
      pillars: {
        cultivationTitle: 'लाह की खेती',
        cultivationDesc: 'पोषक वृक्ष प्रबंधन, मौसमी संचरण, कीट निर्गमन समय और कुसुम, बेर, पलास तथा सेमियालता पौधों पर खेती का व्यावहारिक ज्ञान।',
        productsTitle: 'लाह उत्पाद',
        productsDesc: 'प्राकृतिक कच्ची लाह (स्टिकलैक), कुसुमी लाह, रंगीनी लाह, शुद्ध लाह राल (रेज़िन) और लाह गोंद का संकलन एवं आपूर्ति।',
        seedsTitle: 'बीज एवं बीहन लाह',
        seedsDesc: 'वृक्षों पर संचरण से पूर्व कीटों की सुरक्षा हेतु आवश्यक मौसमी देखभाल के साथ बीहन लाह और लाह बीज सामग्री का उचित प्रबंधन।',
        inputsTitle: 'कृषि इनपुट्स',
        inputsDesc: 'किसानों को कीट-मुक्त फसल प्राप्त करने में सहायता के लिए कृषि मानकों के अनुरूप फसल सुरक्षा कीटनाशकों की आपूर्ति।',
        equipmentTitle: 'खेती के उपकरण',
        equipmentDesc: 'लाह कटाई और छंटाई के लिए अनुकूलित टिकाऊ प्रूनिंग सिकेटियर्स, कटिंग औजार और सिंथेटिक जाली की उपलब्धता।',
        farmersTitle: 'किसानों की आवश्यकताएं',
        farmersDesc: 'झारखंड के ग्रामीण लाह उत्पादकों और वाणिज्यिक कृषि-वानिकी किसानों की वास्तविक जमीनी जरूरतों की गहरी समझ।',
      },
    },
    categories: {
      tag: 'उत्पाद श्रेणियां',
      headline: 'लाह सामग्री एवं कृषि इनपुट्स',
      sub: 'खेती सामग्री, प्राकृतिक लाह रेज़िन, फील्ड टूल्स और अधिकृत कृषि इनपुट्स का हमारा विस्तृत कैटलॉग देखें।',
      explore: 'उत्पाद देखें',
      cat1: {
        name: 'लाह की खेती की सामग्री',
        tag: 'बीज • बीहन लाह • पोषक पौधे',
        desc: 'लाह फसल संचरण और स्थापना के लिए आवश्यक जैविक सामग्री, पोषक पौधे और सुरक्षात्मक जालियां।',
      },
      cat2: {
        name: 'लाह उत्पाद',
        tag: 'कुसुमी • रंगीनी • कच्ची लाह • लाह राल • लाह गोंद',
        desc: '25+ वर्षों के अनुभव के साथ संकलित एवं श्रेणीबद्ध उच्च गुणवत्ता वाले प्राकृतिक लाह उत्पाद।',
      },
      cat3: {
        name: 'उपकरण एवं औजार',
        tag: 'कटाई उपकरण • खेती औजार • सिंथेटिक नेट',
        desc: 'लाह संचरण, पेड़ की छंटाई और कटाई के लिए विशेष रूप से उपयुक्त मजबूत उपकरण।',
      },
      cat4: {
        name: 'कृषि इनपुट्स',
        tag: 'कीटनाशक • पेस्टीसाइड्स • अन्य खेती इनपुट्स',
        desc: 'लाह फसल सुरक्षा और कृषि जरूरतों के अनुरूप इनपुट्स, उपलब्धता और नियमों के अनुसार।',
      },
    },
    products: {
      tag: 'संपूर्ण उत्पाद कैटलॉग',
      headline: 'लाह उत्पाद एवं खेती की सामग्री',
      sub: 'बीहन लाह से लेकर शुद्ध रेज़िन, कटाई औजार और फसल सुरक्षा इनपुट्स तक—25+ वर्षों के व्यावहारिक अनुभव से समर्थित हमारी पूरी सूची।',
      searchPlaceholder: 'उत्पाद या उपकरण खोजें...',
      tabAll: 'सभी उत्पाद',
      tabMaterials: '🌱 खेती सामग्री',
      tabProducts: '🪴 लाह उत्पाद',
      tabEquipment: '🛠️ उपकरण एवं औजार',
      tabInputs: '🌾 कीटनाशक एवं इनपुट्स',
      enquireBtn: 'व्हाट्सएप पर पूछें',
      viewDetails: 'फोटो व विवरण देखें',
      photosCount: 'तस्वीरें',
      equipmentCalloutTag: 'लाह की खेती के औजार एवं उपकरण',
      equipmentCalloutTitle: 'विश्वसनीय कटाई एवं छंटाई उपकरण',
      equipmentCalloutDesc: 'लाह सुविधा केंद्र लाह की खेती के लिए उपयुक्त कटाई उपकरण, मजबूत प्रूनिंग सिकेटियर्स, कृषि औजार और सिंथेटिक जाली उपलब्ध कराता है। स्वच्छ कटाई से पोषक पेड़ों को नुकसान नहीं होता और बीहन कटाई सुगम बनती है।',
      equipmentCalloutBtn: 'उपकरण की उपलब्धता पूछें',
      inputsCalloutTag: 'कीटनाशक एवं पेस्टीसाइड्स',
      inputsCalloutTitle: 'फसल सुरक्षा कृषि इनपुट्स',
      inputsCalloutQuote: '“लाह सुविधा केंद्र उत्पाद की उपलब्धता और लागू नियमों के अधीन कृषि और लाह की खेती की आवश्यकताओं से संबंधित कीटनाशक और पेस्टीसाइड्स प्रदान करता है।”',
      inputsCalloutNote: 'सूचना: उत्पाद केवल लागू कृषि दिशानिर्देशों के अनुपालन में उपलब्ध कराए जाते हैं। उपलब्ध स्टॉक की जानकारी के लिए सीधे संपर्क करें।',
      inputsCalloutBtn1: 'उपलब्ध उत्पादों हेतु संपर्क करें',
      inputsCalloutBtn2: 'व्हाट्सएप पूछताछ',
    },
    lacSeedsSection: {
      tag: 'उच्च-रिज़ॉल्यूशन फोटो निरीक्षण',
      headline: 'लाह बीज की प्रामाणिक तस्वीरें',
      sub: 'लाह उद्योग में "लाह बीज" का तात्पर्य दानेदार सुनहरे सीडलैक (अंबर दानों) और वृक्ष संचरण हेतु जीवित बीहन लाह की डंडियों दोनों से होता है। नीचे दोनों रूपों का निरीक्षण करें।',
      tabGrains: 'लाह बीज (सुनहरे दाने / सीडलैक)',
      tabSticks: 'लाह बीज डंडियां (बीहन लाह संचरण)',
      tabTwigs: 'टहनी पर लाह आवरण का विवरण',
      zoomIn: 'ज़ूम करने हेतु क्लिक करें',
      resetZoom: 'ज़ूम रीसेट करें',
      clickToInspect: 'बनावट देखने हेतु फोटो पर क्लिक करें',
      whatToLookFor: 'इस तस्वीर में क्या देखें:',
      enquireBtn: 'लाह बीज के बारे में व्हाट्सएप पर पूछें',
    },
    farmers: {
      tag: 'किसान भाइयों के लिए समर्पित सेवा',
      headline: 'लाह की खेती के लिए आवश्यक सभी सामग्री',
      sub: 'लाह सुविधा केंद्र लाह की खेती के लिए उत्पादों, सामग्रियों और उपकरणों की पूरी श्रृंखला प्रदान करता है—झारखंड के छोटे और बड़े किसानों की मदद करने के 25+ वर्षों के व्यावहारिक अनुभव के साथ।',
      boxTitle: 'लाह की खेती की सामग्री चाहिए?',
      boxDesc: 'मौसमी बीहन लाह के समय, पोषक पौधों की उपलब्धता, सिंथेटिक नेट और औजारों की जानकारी के लिए श्री शक्ति धर कोइरी से संपर्क करें।',
      whatsappBtn: 'व्हाट्सएप करें',
      callBtn: 'कॉल करें:',
      note: 'रांची, झारखंड में स्थित · व्यावहारिक सलाह और त्वरित आपूर्ति के साथ किसानों की सेवा में',
    },
    knowledge: {
      tag: 'लाह ज्ञान केंद्र',
      headline: 'लाह को समझें',
      sub: 'लाह के जैविक चक्र, पोषक वृक्ष कृषि-वानिकी, कटाई की तकनीक और प्रसंस्करण चरणों को समझें, जिनसे यह प्राकृतिक रेज़िन तैयार होता है।',
      lifecycleTitle: 'लाह की खेती और उत्पादन चक्र',
      comparisonTag: 'किस्म गाइड',
      comparisonTitle: 'कुसुमी बनाम रंगीनी लाह: तथ्यात्मक तुलना',
      comparisonSub: 'भारत में लाह की दो मुख्य किस्में होती हैं, जो पोषक वृक्ष, फसल समय, रंग और तकनीकी उपयोग के आधार पर भिन्न होती हैं।',
      helpText: 'लाह उत्पादों या खेती सामग्री के चयन में मदद चाहिए? अपनी फसल के मौसम या ग्रेड की जानकारी के लिए व्हाट्सएप पर संपर्क करें।',
      helpBtn: 'व्हाट्सएप पर संपर्क करें',
    },
    b2b: {
      tag: 'व्यापारिक एवं थोक आपूर्ति',
      headline: 'व्यवसायों के लिए लाह उत्पाद एवं सामग्री',
      sub: 'रांची, झारखंड के लाह क्षेत्र में 25+ वर्षों के व्यावहारिक अनुभव के साथ, लाह सुविधा केंद्र व्यापारियों, प्रोसेसर्स और व्यावसायिक संस्थानों को प्रामाणिक प्राकृतिक लाह सामग्री की आपूर्ति करता है।',
      suitableFor: 'इनके लिए उपयुक्त:',
      productsTitle: 'B2B आपूर्ति हेतु उपलब्ध उत्पाद:',
      needQuoteTitle: 'तत्काल कोटेशन चाहिए?',
      needQuoteDesc: 'व्यावसायिक पूछताछ सीधे हमारे व्हाट्सएप नंबर पर भी की जा सकती है:',
      formTitle: 'व्यावसायिक पूछताछ फॉर्म',
      formSub: 'अपनी आवश्यक सामग्री, विनिर्देश और मात्रा का विवरण भेजें।',
      nameLabel: 'पूरा नाम *',
      companyLabel: 'कंपनी / फर्म का नाम',
      phoneLabel: 'फोन / मोबाइल *',
      emailLabel: 'ईमेल पता',
      locationLabel: 'स्थान / शहर *',
      productLabel: 'उत्पाद',
      qtyLabel: 'अनुमानित मात्रा',
      msgLabel: 'आवश्यकता / विवरण',
      submitBtn: 'पूछताछ भेजें',
      whatsappBtn: 'व्हाट्सएप पर पूछें',
    },
    international: {
      tag: 'अंतर्राष्ट्रीय खरीदारों के लिए',
      headline: 'For International Buyers / अंतर्राष्ट्रीय व्यापार',
      quote: '“We welcome enquiries from businesses interested in Indian lac and lac-related products. Contact Lah Suvidha Kendra to discuss product availability, specifications, quantities and possible delivery arrangements.”',
      point1: 'भारतीय लाह मूल (झारखंड क्षेत्र)',
      point2: 'कस्टम बैच और ग्रेड पर चर्चा',
      point3: 'मालिक से सीधा संवाद',
      btn: 'अंतर्राष्ट्रीय व्हाट्सएप पूछताछ',
    },
    gallery: {
      tag: 'फोटो गैलरी',
      headline: 'लाह की खेती एवं उत्पाद गैलरी',
      sub: 'लाह बीज (दाने एवं बीहन डंडियां), पोषक वृक्ष, सुनहरे रेज़िन और औजारों की वास्तविक तस्वीरें देखें। हाई-डेफिनिशन में देखने हेतु किसी भी तस्वीर पर क्लिक करें।',
      note: '*झारखंड में लाह की खेती की पद्धतियों और उत्पादों का प्रामाणिक दृश्य प्रतिनिधित्व।',
      ctaBtn: 'वर्तमान स्टॉक की तस्वीरों के लिए व्हाट्सएप पर श्री शक्ति धर कोइरी से संपर्क करें',
    },
    faq: {
      tag: 'अक्सर पूछे जाने वाले सवाल',
      headline: 'अक्सर पूछे जाने वाले सवाल (FAQ)',
      sub: 'लाह की खेती, बीहन आपूर्ति, औजारों की उपलब्धता और संपर्क करने से संबंधित स्पष्ट तथ्यात्मक उत्तर।',
      searchPlaceholder: 'सवाल खोजें (जैसे: बीहन लाह, कुसुमी, व्हाट्सएप)...',
      extraTitle: 'क्या आपका कोई सवाल यहां सूचीबद्ध नहीं है?',
      extraDesc: 'लाह सामग्री और वर्तमान उपलब्धता की तत्काल जानकारी के लिए श्री शक्ति धर कोइरी से सीधे व्हाट्सएप पर बात करें।',
      extraBtn: 'व्हाट्सएप पर पूछें:',
    },
    contact: {
      tag: 'संपर्क सूत्र',
      headline: 'लाह सुविधा केंद्र से संपर्क करें',
      sub: 'उत्पाद उपलब्धता, बीहन लाह चक्र, कृषि इनपुट्स और थोक आर्डर के लिए सीधे संपर्क करें।',
      whatsappLabel: 'आधिकारिक व्हाट्सएप (सीधा संपर्क)',
      locationLabel: 'व्यवसाय का स्थान',
      phoneLabel: 'टेलीफोन',
      emailLabel: 'ईमेल पता',
      formTitle: 'सीधा संदेश भेजें',
      formSub: 'तुरंत जुड़ने के लिए अपना संपर्क विवरण और संदेश भरें।',
      nameLabel: 'आपका नाम *',
      phoneInputLabel: 'फोन / व्हाट्सएप नंबर *',
      msgInputLabel: 'आपका संदेश / उत्पाद पूछताछ *',
      submitBtn: 'संदेश भेजें',
    },
    footer: {
      tagline: 'लाह की खेती की सामग्री, उत्पाद और कृषि आपूर्ति के लिए आपका विश्वसनीय केंद्र।',
      navTitle: 'नेविगेशन',
      productsTitle: 'उत्पाद एवं सामग्री',
      contactTitle: 'सीधा संपर्क',
      backToTop: 'ऊपर जाएं',
      disclaimer: 'अस्वीकरण: लाह सुविधा केंद्र 25 से अधिक वर्षों के व्यावहारिक अनुभव के साथ लाह की खेती के उत्पाद, कृषि आपूर्ति, उपकरण और लाह उत्पाद प्रदान करता है। उत्पाद की उपलब्धता, बीहन लाह का समय और कृषि इनपुट्स मौसमी चक्रों और नियामक अनुपालन के अधीन हैं।',
    },
  },
};
