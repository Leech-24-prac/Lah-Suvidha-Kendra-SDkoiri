import React, { useState } from 'react';
import { Calendar, Clock, AlertTriangle, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const SeasonalCalendar: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCrop, setSelectedCrop] = useState<number>(0);

  const cropCycles = [
    {
      id: 'kusmi-aghani',
      name: 'Kusmi Aghani Crop (अघनी फसल)',
      strain: 'Kusmi Lac',
      hosts: 'Kusum, Flemingia semialata, Ber',
      pruning: 'January – February',
      inoculation: 'June – July (आषाढ़ / सावन)',
      phunkiRemoval: '3 weeks after swarming (late July)',
      harvesting: 'January – February (माघ)',
      duration: 'Approx. 6 months',
      characteristics: 'Produces highest quality pale yellow / golden amber lac resin with high market demand.',
      bookingAdvice: 'Pre-book brood lac in May – June to ensure timely allocation before monsoon emergence.',
    },
    {
      id: 'kusmi-jethwi',
      name: 'Kusmi Jethwi Crop (जेठवी फसल)',
      strain: 'Kusmi Lac',
      hosts: 'Kusum, Flemingia semialata',
      pruning: 'June – July (previous year)',
      inoculation: 'January – February (माघ)',
      phunkiRemoval: '2-3 weeks after swarming (mid February)',
      harvesting: 'June – July (जेठ / आषाढ़)',
      duration: 'Approx. 5-6 months',
      characteristics: 'Summer crop with high crawler emergence rate and vital seed supply for Aghani propagation.',
      bookingAdvice: 'Pre-book in December – January before cold wave emergence.',
    },
    {
      id: 'rangini-katki',
      name: 'Rangini Katki Crop (कतकी फसल)',
      strain: 'Rangini Lac',
      hosts: 'Palas, Ber',
      pruning: 'February – March',
      inoculation: 'June – July (आषाढ़)',
      phunkiRemoval: '2-3 weeks after inoculation',
      harvesting: 'October – November (कार्तिक)',
      duration: 'Approx. 4 months (Fast cycle)',
      characteristics: 'Rainy season crop yielding high-density sticklac, essential for winter brood preparation.',
      bookingAdvice: 'Pre-book in May – June for Palas and Ber orchards.',
    },
    {
      id: 'rangini-baisakhi',
      name: 'Rangini Baisakhi Crop (वैशाखी फसल)',
      strain: 'Rangini Lac',
      hosts: 'Palas, Ber',
      pruning: 'April – May (selective) or previous year',
      inoculation: 'October – November (कार्तिक)',
      phunkiRemoval: '3 weeks after inoculation',
      harvesting: 'April – May (वैशाख / जेठ)',
      duration: 'Approx. 7-8 months',
      characteristics: 'Largest commercial volume crop in central-eastern India, robust natural wax content.',
      bookingAdvice: 'Pre-book in September – October before post-monsoon swarming.',
    },
  ];

  const active = cropCycles[selectedCrop];

  return (
    <section id="calendar" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24] mb-2">
            <Calendar className="w-4 h-4" />
            <span>Seasonal Inoculation Timetable</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E]">
            {t('calendar_title', 'Jharkhand Lac Crop Cycle & Booking Calendar')}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2">
            {t(
              'calendar_subtitle',
              'Timely pre-booking of brood lac is crucial because live inoculation sticks must be tied onto trees within days of swarming.'
            )}
          </p>
        </div>

        {/* 4 Crop Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {cropCycles.map((crop, idx) => (
            <button
              key={crop.id}
              onClick={() => setSelectedCrop(idx)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                selectedCrop === idx
                  ? 'bg-[#6E1B24] text-white border-[#6E1B24] shadow-md'
                  : 'bg-white text-[#2C241E] border-[#DDD3C5] hover:bg-[#F4EFE6]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${selectedCrop === idx ? 'text-amber-200' : 'text-[#6E1B24]'}`}>
                  {crop.strain}
                </span>
                <Clock className={`w-3.5 h-3.5 ${selectedCrop === idx ? 'text-amber-200' : 'text-stone-400'}`} />
              </div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                {crop.name}
              </h3>
              <p className={`text-xs mt-1 ${selectedCrop === idx ? 'text-white/80' : 'text-[#7A6A5D]'}`}>
                Harvest: {crop.harvesting}
              </p>
            </button>
          ))}
        </div>

        {/* Active Crop Detail Sheet */}
        <div className="bg-white rounded-2xl border border-[#E7DFD3] shadow-sm p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#F0EAE1]">
            <div>
              <span className="text-xs font-bold text-[#6E1B24] uppercase tracking-wider">
                Crop Details & Timeline
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2C241E] mt-0.5">
                {active.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4D43] mt-1">
                Hosts: <strong>{active.hosts}</strong> · Crop Duration: <strong>{active.duration}</strong>
              </p>
            </div>

            <a
              href={getWhatsAppUrl(
                `Hello Lah Suvidha Kendra, I want to pre-book brood lac for ${active.name}. Please share booking schedule, quantity and rates.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Pre-Book Brood for {active.strain}</span>
            </a>
          </div>

          {/* 4 Milestones Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 border-b border-[#F0EAE1]">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DFD3]">
              <span className="text-[11px] font-bold text-[#6E1B24] uppercase block">
                Stage 1: Pruning
              </span>
              <div className="font-bold text-base text-[#2C241E] mt-1">
                {active.pruning}
              </div>
              <p className="text-xs text-[#7A6A5D] mt-1">
                Canopy pruning to induce succulent shoot growth.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DFD3]">
              <span className="text-[11px] font-bold text-[#1C3F2B] uppercase block">
                Stage 2: Inoculation
              </span>
              <div className="font-bold text-base text-[#2C241E] mt-1">
                {active.inoculation}
              </div>
              <p className="text-xs text-[#7A6A5D] mt-1">
                Brood sticks tied on branches with synthetic nets.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DFD3]">
              <span className="text-[11px] font-bold text-[#8B5E3C] uppercase block">
                Stage 3: Phunki Removal
              </span>
              <div className="font-bold text-base text-[#2C241E] mt-1">
                {active.phunkiRemoval}
              </div>
              <p className="text-xs text-[#7A6A5D] mt-1">
                Spent twigs unhooked to prevent predator transfer.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DFD3]">
              <span className="text-[11px] font-bold text-[#6E1B24] uppercase block">
                Stage 4: Harvesting
              </span>
              <div className="font-bold text-base text-[#2C241E] mt-1">
                {active.harvesting}
              </div>
              <p className="text-xs text-[#7A6A5D] mt-1">
                Mature sticklac or new brood sticks harvested.
              </p>
            </div>
          </div>

          {/* Practical Advisory Box */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#4A3E37]">
                <strong className="block text-[#2C241E]">
                  Advance Brood Lac Booking Advisory:
                </strong>
                {active.bookingAdvice}
              </div>
            </div>

            <span className="text-xs font-semibold text-[#6E1B24] shrink-0">
              Assistance from Shri Shakti Dhar Koiri
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
