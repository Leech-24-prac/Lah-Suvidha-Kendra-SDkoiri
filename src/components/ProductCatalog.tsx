import React, { useState } from 'react';
import { Search, ShieldAlert, Wrench, MessageCircle } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

interface ProductCatalogProps {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { language, t } = useLanguage();
  const isHindi = language === 'hi';

  const filterTabs = [
    { id: 'all', label: t.products.tabAll },
    { id: 'materials', label: t.products.tabMaterials },
    { id: 'products', label: t.products.tabProducts },
    { id: 'equipment', label: t.products.tabEquipment },
    { id: 'inputs', label: t.products.tabInputs },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      (product.nameHi && product.nameHi.toLowerCase().includes(query)) ||
      product.shortDescription.toLowerCase().includes(query) ||
      (product.shortDescriptionHi && product.shortDescriptionHi.toLowerCase().includes(query)) ||
      product.categoryLabel.toLowerCase().includes(query) ||
      (product.categoryLabelHi && product.categoryLabelHi.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6E1B24] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6E1B24]" />
              <span>{t.products.tag}</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E]">
              {t.products.headline}
            </h2>
            <p className="text-sm sm:text-base text-[#5A4D43] mt-2 max-w-2xl">
              {t.products.sub}
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.products.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#DCD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
            />
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onCategoryChange(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#6E1B24] text-white shadow-sm'
                  : 'bg-white text-[#4A3E37] border border-[#DDD3C5] hover:bg-[#F4EFE6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-xl border border-[#E7DFD3]">
            <p className="text-base font-medium text-[#5A4D43]">
              {isHindi
                ? `“${searchQuery}” से संबंधित कोई उत्पाद नहीं मिला।`
                : `No products found matching “${searchQuery}”.`}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
              }}
              className="mt-3 text-xs font-bold text-[#6E1B24] underline hover:text-[#53141B] cursor-pointer"
            >
              {isHindi ? 'फ़िल्टर हटाएं और सभी उत्पाद देखें' : 'Clear filters and view all products'}
            </button>
          </div>
        )}

        {/* CATEGORY 3 DEDICATED CALLOUT: Lac Cultivation Tools & Equipment */}
        {(selectedCategory === 'all' || selectedCategory === 'equipment') && (
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#EDE5D8]/70 border border-[#D5C9B8]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6E1B24]">
                  <Wrench className="w-4 h-4" />
                  <span>{t.products.equipmentCalloutTag}</span>
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-[#2C241E]">
                  {t.products.equipmentCalloutTitle}
                </h3>
                <p className="text-sm text-[#5A4D43] leading-relaxed">
                  {t.products.equipmentCalloutDesc}
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <a
                  href={getWhatsAppUrl(
                    isHindi
                      ? 'नमस्ते लाह सुविधा केंद्र, मुझे कटाई उपकरण और खेती के औजारों के विकल्प, विनिर्देश और दरों की जानकारी चाहिए।'
                      : 'Hello Lah Suvidha Kendra, I would like to ask about cutting equipment and cultivation tool availability and options.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1C3F2B] hover:bg-[#153020] text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.products.equipmentCalloutBtn}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY 4 DEDICATED CALLOUT: Pesticides & Insecticides (Compliance Protected) */}
        {(selectedCategory === 'all' || selectedCategory === 'inputs') && (
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-amber-50/80 border border-amber-200/80">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-amber-800" />
                  <span>{t.products.inputsCalloutTag}</span>
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-[#2C241E]">
                  {t.products.inputsCalloutTitle}
                </h3>
                {/* REQUIRED EXACT TEXT */}
                <p className="text-sm sm:text-base text-[#4A3E37] font-medium leading-relaxed">
                  {t.products.inputsCalloutQuote}
                </p>
                <p className="text-xs text-[#7A6A5D]">
                  {t.products.inputsCalloutNote}
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <a
                  href={getWhatsAppUrl(
                    isHindi
                      ? 'नमस्ते लाह सुविधा केंद्र, मुझे आपकी उपलब्ध कीटनाशक/पेस्टीसाइड्स सामग्री की जानकारी चाहिए।'
                      : 'Hello Lah Suvidha Kendra, I am interested in your available pesticides/insecticides. Please share the available products and details.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#6E1B24] hover:bg-[#58141C] text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-sm transition-all"
                >
                  <span>{t.products.inputsCalloutBtn1}</span>
                </a>

                <a
                  href={getWhatsAppUrl(
                    isHindi
                      ? 'नमस्ते लाह सुविधा केंद्र, कीटनाशकों और फसल सुरक्षा इनपुट्स के बारे में व्हाट्सएप पूछताछ।'
                      : 'Hello Lah Suvidha Kendra, I have a WhatsApp enquiry regarding pesticides and crop protection inputs.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.products.inputsCalloutBtn2}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

