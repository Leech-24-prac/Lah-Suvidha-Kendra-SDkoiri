import React from 'react';
import { Award, Package, Sprout, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('trust_exp_title', '25+ Years'),
      subtitle: t('trust_exp_sub', 'Lac Industry Experience'),
      detail: t('trust_exp_desc', 'Practical cultivation knowledge & proven regional supply'),
    },
    {
      icon: Package,
      title: t('trust_products_title', 'Lac Products'),
      subtitle: t('trust_products_sub', 'Kusmi • Rangini • Raw Lac'),
      detail: t('trust_products_desc', 'Resin, gum, sticklac & seasonal harvests'),
    },
    {
      icon: Sprout,
      title: t('trust_supplies_title', 'Cultivation Supplies'),
      subtitle: t('trust_supplies_sub', 'Seeds • Brood Lac • Synthetic Net'),
      detail: t('trust_supplies_desc', 'High-viability inoculation materials & host plants'),
    },
    {
      icon: Wrench,
      title: t('trust_tools_title', 'Equipment & Inputs'),
      subtitle: t('trust_tools_sub', 'Cutting Equipment • Pesticides • Insecticides'),
      detail: t('trust_tools_desc', 'Pruning tools & authorized crop protection supplies'),
    },
  ];

  return (
    <section className="bg-white border-b border-[#E7DFD3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF7F2] border border-[#EBE4D8] hover:border-[#6E1B24]/40 transition-colors"
              >
                <div className="p-3 rounded-lg bg-[#6E1B24]/10 text-[#6E1B24] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif-title text-[#2C241E] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#6E1B24] mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#63554A] mt-1 leading-snug">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
