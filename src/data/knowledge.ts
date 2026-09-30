export interface LacCycleStep {
  step: number;
  title: string;
  titleHi: string;
  subtitle: string;
  subtitleHi: string;
  description: string;
  descriptionHi: string;
}

export const LAC_PROCESS_STEPS: LacCycleStep[] = [
  {
    step: 1,
    title: 'Host Plant',
    titleHi: 'पोषक पौधे',
    subtitle: 'Nursery & Pruning',
    subtitleHi: 'रोपण एवं समय पर छंटाई',
    description: 'Establishment and timely pruning of suitable host trees (Kusum, Ber, Palas, or Flemingia semialata) to produce succulent shoots for lac insect settlement.',
    descriptionHi: 'कुसुम, बेर, पलास या सेमियालता के पौधों की स्थापना और सही समय पर छंटाई, ताकि कोमल नई कोपलें कीट संचरण हेतु तैयार हों।',
  },
  {
    step: 2,
    title: 'Lac Insect',
    titleHi: 'लाह कीट',
    subtitle: 'Biological Inoculation',
    subtitleHi: 'जैविक संचरण (बीहन बांधना)',
    description: 'Attachment of healthy brood lac carrying thousands of gravid microscopic female insects (Kerria lacca) whose emerging crawlers settle on tender twigs.',
    descriptionHi: 'स्वस्थ बीहन लाह को डालियों पर बांधना, जिससे निकलने वाले नन्हे कीट (क्रॉलर्स) कोमल टहनियों पर चिपक कर रस चूसना शुरू करते हैं।',
  },
  {
    step: 3,
    title: 'Cultivation',
    titleHi: 'खेती एवं विकास',
    subtitle: 'Growth & Secretion',
    subtitleHi: 'विकास एवं राल स्राव',
    description: 'Insects feed continuously on phloem sap, secreting a protective resinous encrustation around their bodies that gradually coalesces into continuous sticklac.',
    descriptionHi: 'कीट पौधे के रस पर पोषण करते हुए अपने शरीर के चारों ओर सुरक्षात्मक राल (लाह) छोड़ते हैं, जो धीरे-धीरे मोटी परत बन जाती है।',
  },
  {
    step: 4,
    title: 'Harvesting',
    titleHi: 'कटाई',
    subtitle: 'Sticklac Collection',
    subtitleHi: 'लाह की कटाई एवं संकलन',
    description: 'Careful cutting of encrusted twigs at maturity. Depending on crop objectives, material is harvested either as brood lac for new propagation or as mature crop.',
    descriptionHi: 'फसल पकने पर टहनियों की सावधानीपूर्वक कटाई। इसे अगली फसल के लिए बीहन लाह के रूप में या बिक्री के लिए परिपक्व फसल के रूप में काटा जाता है।',
  },
  {
    step: 5,
    title: 'Processing',
    titleHi: 'प्रसंस्करण',
    subtitle: 'Scraping & Washing',
    subtitleHi: 'छिलाई एवं धुलाई',
    description: 'Mechanical or manual scraping separates resin from twigs, followed by washing to remove insect remains and water-soluble natural dye, producing clean seedlac.',
    descriptionHi: 'टहनियों से लाह को खुरचकर अलग करना (कच्ची लाह) और फिर पानी में धोकर प्राकृतिक रंग व अशुद्धियां हटाकर शुद्ध दानेदार सीडलैक बनाना।',
  },
  {
    step: 6,
    title: 'Lac Products',
    titleHi: 'लाह उत्पाद',
    subtitle: 'Resin, Gum & Shellac',
    subtitleHi: 'शुद्ध रेज़िन, गोंद व चपड़ा',
    description: 'Refined into commercial button shellac, lac resin, lac gum, and custom derivatives used in woodworking, polish, coatings, sealing, and handicrafts.',
    descriptionHi: 'शुद्ध राल, लाह गोंद और बटन शेलैक में शोधित, जो लकड़ी की पॉलिश, बिजली रोधन, चूड़ियों और औद्योगिक कोटिंग में काम आता है।',
  },
];

export const KUSMI_VS_RANGINI = [
  {
    feature: 'Resin Type & Quality',
    featureHi: 'लाह का प्रकार एवं गुणवत्ता',
    kusmi: 'Produces light, golden-amber colored resin known for higher clarity, low color index, and premium resin yield.',
    kusmiHi: 'हल्के सुनहरे अंबर रंग की उच्च कोटि की लाह, जिसमें उत्कृष्ट चमक और उच्च रेज़िन शुद्धता होती है।',
    rangini: 'Produces medium to deep reddish-amber resin with natural wax richness and resilient adhesive body.',
    ranginiHi: 'मध्यम से गहरे लाल-अंबर रंग की लाह, जिसमें प्राकृतिक मोम और मजबूत पकड़ की क्षमता होती है।',
  },
  {
    feature: 'Primary Host Plants',
    featureHi: 'प्रमुख पोषक वृक्ष',
    kusmi: 'Kusum (Schleichera oleosa) and bushy Flemingia semialata (popular in modern high-density farming).',
    kusmiHi: 'कुसुम (Schleichera oleosa) और झाड़ीदार सेमियालता (Flemingia semialata)।',
    rangini: 'Palas (Butea monosperma, Flame of the Forest) and Ber (Ziziphus mauritiana / Indian jujube).',
    ranginiHi: 'पलास (Butea monosperma) और बेर (Ziziphus mauritiana)।',
  },
  {
    feature: 'Cultivation & Crop Cycles',
    featureHi: 'फसल चक्र एवं मौसम',
    kusmi: 'Two distinct crops: Aghani (inoculated in July, harvested in Jan–Feb) and Jethwi (inoculated in Feb, harvested in June–July).',
    kusmiHi: 'दो मुख्य फसलें: अघनी (जुलाई में संचरण, जन-फरवरी में कटाई) और जेठवी (फरवरी में संचरण, जून-जुलाई में कटाई)।',
    rangini: 'Two distinct crops: Katki (rainy crop, harvested in Oct–Nov) and Baisakhi (summer crop, harvested in April–May).',
    ranginiHi: 'दो मुख्य फसलें: कतकी (बरसात की फसल, अक्टू-नवंबर में कटाई) और बैसाखी (गर्मी की फसल, अप्रै-मई में कटाई)।',
  },
  {
    feature: 'General Applications',
    featureHi: 'प्रमुख उपयोग',
    kusmi: 'High-grade finishing, optical polishes, food-safe coatings, cosmetics, pharmaceutical glazes, and specialty seedlac.',
    kusmiHi: 'उच्च स्तरीय फिनिशिंग, ऑप्टिकल पॉलिश, उच्च श्रेणी का सीडलैक और विशेष औद्योगिक अनुप्रयोग।',
    rangini: 'Industrial lac products, traditional furniture French polish, sealing wax, electrical insulators, and artisan lacquer bangles.',
    ranginiHi: 'पारंपरिक लकड़ी की पॉलिश, बिजली उपकरण इंसुलेशन, हस्तशिल्प और लाह की पारंपरिक चूड़ियां।',
  },
];

export const KNOWLEDGE_TOPICS = [
  {
    id: 'what-is-lac',
    title: 'What is Lac?',
    titleHi: 'लाह क्या है?',
    content:
      'Lac is the only known natural commercial resin of animal origin. It is a biological resinous secretion produced by microscopic insects that feed on the sap of specialized host trees. Cultivated extensively in Jharkhand and central-eastern India, lac has been utilized for centuries as a renewable, non-toxic, and biodegradable raw material across traditional arts and modern industry.',
    contentHi:
      'लाह जंतु जगत से प्राप्त होने वाला एकमात्र प्राकृतिक वाणिज्यिक रेज़िन (राल) है। यह सूक्ष्म कीटों (केरिया लैका) द्वारा स्रावित एक प्राकृतिक सुरक्षात्मक पदार्थ है, जो विशेष पोषक पेड़ों के रस पर जीवित रहते हैं। झारखंड में सदियों से उत्पादित यह प्राकृतिक उत्पाद पूरी तरह गैर-विषाक्त और बायोडिग्रेडेबल है।',
  },
  {
    id: 'lac-insect',
    title: 'The Lac Insect (Kerria lacca)',
    titleHi: 'लाह कीट (केरिया लैका)',
    content:
      'The primary lac insect species cultivated in India is Kerria lacca (order Hemiptera). These tiny, soft-bodied insects settle in dense colonies on tender shoots of host trees. They insert their piercing proboscis into the plant tissues to feed on phloem sap and secrete a continuous resinous encrustation that shields them from predators, harsh weather, and desiccation.',
    contentHi:
      'भारत में पाली जाने वाली प्रमुख कीट प्रजाति केरिया लैका है। ये सूक्ष्म कीट पोषक पेड़ों की नई कोमल डालियों पर घनी बस्तियों में चिपक जाते हैं और रस चूसते हुए अपने चारों ओर लाह की परत बनाते हैं, जो उन्हें मौसम और शत्रुओं से बचाती है।',
  },
  {
    id: 'host-plants',
    title: 'Host Plants & Agroforestry',
    titleHi: 'पोषक वृक्ष एवं कृषि-वानिकी',
    content:
      'Healthy lac production relies fundamentally on healthy host trees. The major traditional trees are Kusum (Schleichera oleosa), Palas (Butea monosperma), and Ber (Ziziphus mauritiana). In recent decades, the bushy shrub Flemingia semialata has emerged as a game-changer, enabling high-density field planting, easy ground-level pruning, and intensive Kusmi lac production.',
    contentHi:
      'सफल लाह उत्पादन का मुख्य आधार स्वस्थ पोषक वृक्ष हैं। पारंपरिक रूप से कुसुम, पलास और बेर प्रमुख पेड़ हैं। हाल के वर्षों में झाड़ीदार सेमियालता ने क्रांति ला दी है, जिसे खेत में सघन रूप से लगाकर जमीन से ही आसानी से कुसुमी लाह की पैदावार ली जा सकती है।',
  },
  {
    id: 'seeds-and-brood',
    title: 'Lac Seeds & Brood Lac',
    titleHi: 'लाह बीज एवं बीहन लाह',
    content:
      'In agricultural parlance, "lac seeds" or "brood lac" refers to sticks bearing live, mature encrustations about to release millions of microscopic young crawlers (nymphs). These sticks are tied onto newly pruned host branches using synthetic mesh nets. Once crawlers exit and settle, the spent twigs (phunki) are promptly removed to protect the young colony.',
    contentHi:
      'कृषि भाषा में "लाह बीज" या "बीहन लाह" उन डंडियों को कहते हैं जिनमें जीवित मादा कीट होते हैं जो लाखों नन्हें कीट छोड़ने वाले होते हैं। इन्हें सिंथेटिक जाली में रखकर पेड़ों पर बांधा जाता है। जब कीट बाहर निकलकर टहनियों पर बस जाते हैं, तो खाली डंडियों (फुंकी) को हटा लिया जाता है।',
  },
  {
    id: 'raw-lac-to-resin',
    title: 'From Raw Lac to Refined Resin & Gum',
    titleHi: 'कच्ची लाह से शुद्ध रेज़िन व गोंद',
    content:
      'Harvested sticklac undergoes scraping to free resin from wood. Crushed and washed in water, the natural red dye (laccaic acid) dissolves away, yielding granular "seedlac". Melting or solvent extraction further separates pure lac resin and natural lac wax, producing buttons, flakes, sheets, and natural lac gums suited for varied technical and artisan applications.',
    contentHi:
      'काटी गई टहनियों से लाह खुरचकर कच्ची लाह मिलती है। इसे धोकर लाल रंग (डाई) अलग किया जाता है, जिससे दानेदार सीडलैक मिलता है। इसे आगे पिघलाकर या शोधित करके शुद्ध लाह राल, चपड़ा और लाह गोंद तैयार किया जाता है।',
  },
];
