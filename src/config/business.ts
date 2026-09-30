export const BUSINESS_CONFIG = {
  businessName: "Lah Suvidha Kendra",
  ownerName: "Shri Shakti Dhar Koiri",
  whatsapp: "+919102962005",
  displayWhatsapp: "+91 91029 62005",
  city: "Ranchi",
  state: "Jharkhand",
  country: "India",
  experience: "25+ Years",
  tagline: "Lac Cultivation • Lac Products • Agricultural Supplies",
  subTagline: "Your source for lac cultivation materials, products and agricultural supplies.",
  description:
    "Lah Suvidha Kendra provides lac cultivation products, agricultural supplies, equipment and lac-related products, backed by more than 25 years of practical experience in the lac industry.",
  
  // Required placeholders per instructions
  placeholders: {
    phone: "[PHONE NUMBER]",
    email: "[EMAIL ADDRESS]",
    fullAddress: "[FULL BUSINESS ADDRESS], Ranchi, Jharkhand, India",
  },

  whatsappUrl: "https://wa.me/919102962005",

  defaultHeroMessage:
    "Hello Lah Suvidha Kendra, I am interested in your lac cultivation products and supplies. Please share product details, availability and pricing.",
};

export function getWhatsAppUrl(message?: string): string {
  const text = message || BUSINESS_CONFIG.defaultHeroMessage;
  return `https://wa.me/919102962005?text=${encodeURIComponent(text.trim())}`;
}
