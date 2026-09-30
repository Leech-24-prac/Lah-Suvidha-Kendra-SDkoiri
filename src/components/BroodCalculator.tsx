import React, { useState } from 'react';
import { Calculator, Sprout, CheckCircle2, MessageCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const BroodCalculator: React.FC = () => {
  const { lang, t } = useLanguage();

  const [hostType, setHostType] = useState<'semialta' | 'ber' | 'kusum' | 'palas'>('semialta');
  const [treeCount, setTreeCount] = useState<number>(500); // 500 plants for semialta or 20 trees for big hosts
  const [canopySize, setCanopySize] = useState<'medium' | 'large' | 'small'>('medium');

  // Realistic practical lac agroforestry rates based on Indian Lac Research Institute / ICAR standards
  const calculations = (() => {
    let broodPerUnit = 0; // in kg
    let netMetersPerUnit = 0;
    let cropName = '';
    let pruningWindow = '';
    let inoculationSeason = '';

    switch (hostType) {
      case 'semialta':
        // Flemingia semialata is bushy, planted at 3000-4000 plants per acre. Approx 60-80g brood lac per bush.
        broodPerUnit = canopySize === 'small' ? 0.05 : canopySize === 'medium' ? 0.075 : 0.1;
        netMetersPerUnit = 0.25; // 25cm sleeve per bush
        cropName = 'Kusmi Lac (Aghani / Jethwi)';
        pruningWindow = 'Jan - Feb (for winter crop) or June (for summer crop)';
        inoculationSeason = 'June - July (Aghani) / Jan - Feb (Jethwi)';
        break;

      case 'ber':
        // Ber (Ziziphus mauritiana) medium trees
        broodPerUnit = canopySize === 'small' ? 2 : canopySize === 'medium' ? 4 : 6;
        netMetersPerUnit = 5;
        cropName = 'Rangini Lac (Baisakhi) or Kusmi (on suitable pruned Ber)';
        pruningWindow = 'April - May (for winter/Katki) or Feb - March';
        inoculationSeason = 'June - July or Oct - Nov';
        break;

      case 'kusum':
        // Kusum (Schleichera oleosa) large forest tree
        broodPerUnit = canopySize === 'small' ? 8 : canopySize === 'medium' ? 15 : 25;
        netMetersPerUnit = 18;
        cropName = 'Kusmi Lac (Superior Grade Aghani & Jethwi)';
        pruningWindow = 'Jan - Feb or June - July (18-month rest cycle)';
        inoculationSeason = 'June - July (Aghani) & Jan - Feb (Jethwi)';
        break;

      case 'palas':
        // Palas (Butea monosperma) medium tree
        broodPerUnit = canopySize === 'small' ? 1.5 : canopySize === 'medium' ? 3 : 5;
        netMetersPerUnit = 4;
        cropName = 'Rangini Lac (Baisakhi & Katki Crops)';
        pruningWindow = 'Feb - March (for Katki inoculation)';
        inoculationSeason = 'June - July (Katki) & Oct - Nov (Baisakhi)';
        break;
    }

    const totalBroodKg = Math.round(treeCount * broodPerUnit * 10) / 10;
    const totalNetMeters = Math.round(treeCount * netMetersPerUnit);
    const estimatedBundles = Math.ceil(totalBroodKg / 0.1); // approx 100g bundles

    return {
      totalBroodKg,
      totalNetMeters,
      estimatedBundles,
      cropName,
      pruningWindow,
      inoculationSeason,
    };
  })();

  const formatWhatsAppText = () => {
    const hostLabel =
      hostType === 'semialta'
        ? 'Flemingia semialata (झाड़ीदार)'
        : hostType === 'kusum'
        ? 'Kusum (कुसुम)'
        : hostType === 'ber'
        ? 'Ber (बेर)'
        : 'Palas (पलाश)';

    return `Hello Lah Suvidha Kendra, I used your Brood Lac Calculator on your website.

Cultivation Plan:
- Host Tree: ${hostLabel}
- Total Plants/Trees: ${treeCount}
- Canopy Size: ${canopySize}
- Estimated Brood Lac Needed: ${calculations.totalBroodKg} kg
- Estimated Synthetic Net: ~${calculations.totalNetMeters} meters
- Target Season: ${calculations.inoculationSeason}

Please share current brood lac availability, pre-booking schedule, and pricing for this quantity.`;
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24] mb-2">
            <Calculator className="w-4 h-4" />
            <span>{lang === 'hi' ? 'किसान सहायता टूल' : 'Farmer Planning Tool'}</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E]">
            {t('calc_title', 'Brood Lac & Seed Requirement Calculator')}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2">
            {t(
              'calc_subtitle',
              'Calculate estimated brood lac sticks, synthetic mesh, and pruning requirements for your farm.'
            )}
          </p>
        </div>

        <div className="bg-[#FAF7F2] rounded-2xl border border-[#E7DFD3] shadow-md p-6 sm:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#2C241E] uppercase mb-2">
                  1. Select Host Tree / Plant (पोषक वृक्ष)
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'semialta', name: 'Semialta (सेमिआलता)', sub: 'Bushy / High-density' },
                    { id: 'kusum', name: 'Kusum (कुसुम)', sub: 'Large tree / High grade' },
                    { id: 'ber', name: 'Ber (बेर)', sub: 'Medium tree / Fast cycle' },
                    { id: 'palas', name: 'Palas (पलाश)', sub: 'Traditional wild host' },
                  ].map((h) => (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => {
                        setHostType(h.id as any);
                        if (h.id === 'semialta') {
                          setTreeCount(500);
                        } else {
                          setTreeCount(15);
                        }
                      }}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        hostType === h.id
                          ? 'bg-[#6E1B24] text-white border-[#6E1B24] shadow-sm'
                          : 'bg-white text-[#4A3E37] border-[#DDD3C5] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      <strong className="block text-xs sm:text-sm font-semibold leading-tight">
                        {h.name}
                      </strong>
                      <span className={`text-[11px] block mt-0.5 ${hostType === h.id ? 'text-amber-200' : 'text-[#7A6A5D]'}`}>
                        {h.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Plants / Trees */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#2C241E] uppercase">
                    2. Number of {hostType === 'semialta' ? 'Plants (पौधे)' : 'Trees (पेड़)'}
                  </label>
                  <span className="text-xs font-bold text-[#6E1B24] bg-white px-2.5 py-1 rounded border border-[#DDD3C5]">
                    {treeCount} {hostType === 'semialta' ? 'Plants' : 'Trees'}
                  </span>
                </div>

                <input
                  type="range"
                  min={hostType === 'semialta' ? 50 : 2}
                  max={hostType === 'semialta' ? 5000 : 200}
                  step={hostType === 'semialta' ? 50 : 1}
                  value={treeCount}
                  onChange={(e) => setTreeCount(parseInt(e.target.value) || 1)}
                  className="w-full accent-[#6E1B24] h-2 bg-[#E0D7CD] rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-[#7A6A5D] mt-1">
                  <span>{hostType === 'semialta' ? '50 plants' : '2 trees'}</span>
                  <span>{hostType === 'semialta' ? '2,500 plants' : '100 trees'}</span>
                  <span>{hostType === 'semialta' ? '5,000 plants' : '200 trees'}</span>
                </div>
              </div>

              {/* Canopy / Growth stage */}
              <div>
                <label className="block text-xs font-bold text-[#2C241E] uppercase mb-2">
                  3. Tree Canopy / Vegetative Growth (कैनोपी / छतरी का फैलाव)
                </label>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    { id: 'small', label: 'Young / Pruned' },
                    { id: 'medium', label: 'Normal / Medium' },
                    { id: 'large', label: 'Dense / Large' },
                  ].map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setCanopySize(size.id as any)}
                      className={`py-2 px-3 rounded-lg border font-semibold transition-all cursor-pointer ${
                        canopySize === size.id
                          ? 'bg-[#1C3F2B] text-white border-[#1C3F2B]'
                          : 'bg-white text-[#4A3E37] border-[#DDD3C5] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Calculation Card */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-xl border border-[#E7DFD3] shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E1B24]">
                    Estimated Requirements
                  </span>
                  <h3 className="font-serif-title text-xl font-bold text-[#2C241E]">
                    Cultivation Material Estimate
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-100 text-[#6E1B24] flex items-center justify-center font-bold">
                  <Sprout className="w-5 h-5" />
                </div>
              </div>

              {/* Big metric counters */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DFD3]">
                  <span className="text-xs text-[#7A6A5D] block font-medium">
                    Brood Lac / Seed Required:
                  </span>
                  <div className="text-3xl font-serif-title font-extrabold text-[#6E1B24] mt-1">
                    ~{calculations.totalBroodKg} <span className="text-sm font-sans font-bold text-[#2C241E]">kg</span>
                  </div>
                  <span className="text-[11px] text-[#7A6A5D] mt-1 block">
                    (~{calculations.estimatedBundles} tied bundles)
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DFD3]">
                  <span className="text-xs text-[#7A6A5D] block font-medium">
                    Synthetic Netting:
                  </span>
                  <div className="text-3xl font-serif-title font-extrabold text-[#1C3F2B] mt-1">
                    ~{calculations.totalNetMeters} <span className="text-sm font-sans font-bold text-[#2C241E]">meters</span>
                  </div>
                  <span className="text-[11px] text-[#7A6A5D] mt-1 block">
                    (for crawler emergence sleeves)
                  </span>
                </div>
              </div>

              {/* Cultivation Schedule Guidance */}
              <div className="space-y-2 text-xs text-[#4A3E37] bg-amber-50/70 p-3.5 rounded-lg border border-amber-200/70">
                <p>
                  <strong>Target Crop:</strong> {calculations.cropName}
                </p>
                <p>
                  <strong>Inoculation Window:</strong> {calculations.inoculationSeason}
                </p>
                <p>
                  <strong>Recommended Pruning:</strong> {calculations.pruningWindow}
                </p>
              </div>

              <div className="text-[11px] text-[#7A6A5D] italic">
                *Note: Brood lac amounts vary based on branch density and crawler vigor. Lah Suvidha Kendra assists in precise lot selection.
              </div>

              {/* WhatsApp Action Button with pre-filled plan */}
              <a
                href={getWhatsAppUrl(formatWhatsAppText())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-5 rounded-lg text-sm font-semibold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Share My Plan & Pre-Book on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
