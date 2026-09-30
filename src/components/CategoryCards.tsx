import React from 'react';
import { ArrowRight, Sprout, Boxes, Wrench, ShieldAlert } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

interface CategoryCardsProps {
  onSelectCategory: (categoryId: 'materials' | 'products' | 'equipment' | 'inputs') => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({ onSelectCategory }) => {
  const { language, t } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    materials: <Sprout className="w-7 h-7 text-[#2D6344]" />,
    products: <Boxes className="w-7 h-7 text-[#6E1B24]" />,
    equipment: <Wrench className="w-7 h-7 text-[#8B5E3C]" />,
    inputs: <ShieldAlert className="w-7 h-7 text-[#B8860B]" />,
  };

  const emojiMap: Record<string, string> = {
    materials: '🌱',
    products: '🪴',
    equipment: '🛠️',
    inputs: '🌾',
  };

  return (
    <section className="py-16 bg-white border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6E1B24] uppercase tracking-wider mb-2">
            <span>{t.categories.tag}</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E]">
            {t.categories.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2">
            {t.categories.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const displayName = language === 'hi' ? cat.nameHi : cat.name;
            const displayTagline = language === 'hi' ? cat.taglineHi : cat.tagline;
            const displayDesc = language === 'hi' ? cat.descriptionHi : cat.description;

            return (
              <div
                key={cat.id}
                className="group relative bg-[#FAF7F2] rounded-2xl p-6 border border-[#E7DFD3] hover:border-[#6E1B24]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#EAE3D6]">
                      {iconMap[cat.id]}
                    </div>
                    <span className="text-2xl" aria-hidden="true">
                      {emojiMap[cat.id]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif-title text-[#2C241E] group-hover:text-[#6E1B24] transition-colors">
                    {displayName}
                  </h3>

                  <p className="text-xs font-semibold text-[#6E1B24] mt-1 tracking-tight">
                    {displayTagline}
                  </p>

                  <p className="text-xs text-[#5A4D43] mt-3 leading-relaxed">
                    {displayDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE3D6]">
                  <a
                    href="#products"
                    onClick={(e) => {
                      onSelectCategory(cat.id as any);
                    }}
                    className="inline-flex items-center text-xs font-bold text-[#2C241E] group-hover:text-[#6E1B24] transition-colors"
                  >
                    <span>{t.categories.explore}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

