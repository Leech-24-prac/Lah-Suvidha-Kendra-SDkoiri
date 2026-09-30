import React, { useState } from 'react';
import { Camera, Eye, Info, MessageCircle, X, ZoomIn } from 'lucide-react';
import { getWhatsAppUrl } from '../config/business';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const galleryItems = [
    {
      src: '/src/assets/images/lac_seeds_grains_1790787922266.jpg',
      title: 'Lac Seeds (Golden Amber Grains / Seedlac)',
      category: 'Lac Seeds Photo',
      description: 'Washed, high-purity natural golden amber lac seed grains (seedlac) ready for processing and trade.',
      whatsappMsg: 'Hello Lah Suvidha Kendra, I saw the photo of your Lac Seeds grains in your gallery. Please share details and pricing.',
    },
    {
      src: '/src/assets/images/lac_seed_sticks_1790787941472.jpg',
      title: 'Lac Seed Sticks (Brood Inoculation Sticks)',
      category: 'Cultivation Seeds',
      description: 'Bundled viable brood lac sticks carrying live female insect encrustation for branch inoculation.',
      whatsappMsg: 'Hello Lah Suvidha Kendra, I saw the photo of your Lac Seed Sticks (brood lac) in your gallery. Please share availability.',
    },
    {
      src: '/src/assets/images/brood_lac_twigs_1790787426825.jpg',
      title: 'Dense Lac Insect Encrustation',
      category: 'Cultivation Supplies',
      description: 'Healthy mature encrustations carrying gravid female insects ready for crawler emergence.',
      whatsappMsg: 'Hello Lah Suvidha Kendra, I saw the photo of your lac encrusted twigs. Please share details.',
    },
    {
      src: '/src/assets/images/raw_lac_resin_1790787444571.jpg',
      title: 'Natural Raw Lac & Amber Flakes',
      category: 'Lac Products',
      description: 'Natural amber resin granules and clean crude sticklac harvested for processing.',
      whatsappMsg: 'Hello Lah Suvidha Kendra, I saw the photo of raw lac and resin flakes. Please share pricing.',
    },
    {
      src: '/src/assets/images/hero_lac_farm_1790787414277.jpg',
      title: 'Lac Host Plantation in Jharkhand',
      category: 'Agroforestry & Cultivation',
      description: 'Canopy management and host tree agroforestry in the lac cultivation belts of Jharkhand.',
      whatsappMsg: 'Hello Lah Suvidha Kendra, I am interested in your lac cultivation techniques and host tree materials.',
    },
    {
      src: '/src/assets/images/lac_host_plants_1790787454818.jpg',
      title: 'Host Plant Saplings (Semialta & Kusum)',
      category: 'Plant Nursery',
      description: 'Healthy saplings cultivated for high-density bushy lac farming and traditional orchards.',
      whatsappMsg: 'Hello Lah Suvidha Kendra, I saw the photo of your host plant saplings. Please share available varieties.',
    },
    {
      src: '/src/assets/images/lac_tools_equipment_1790787467181.jpg',
      title: 'Pruning Shears & Synthetic Netting',
      category: 'Tools & Equipment',
      description: 'Branch cutting implements and fine synthetic mesh used to secure brood lac sticks.',
      whatsappMsg: 'Hello Lah Suvidha Kendra, I am interested in cutting tools and synthetic netting shown in your gallery.',
    },
  ];

  const activeItem = selectedImage !== null ? galleryItems[selectedImage] : null;

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24] mb-2">
            <Camera className="w-4 h-4" />
            <span>Visual Overview</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E]">
            Lac Cultivation & Product Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2">
            Inspect authentic photographs of lac seeds (grains & brood sticks), host trees, amber resin flakes, and harvesting implements. Click any image to view in high resolution.
          </p>
          <p className="text-xs text-[#8C7A6B] mt-2 italic">
            *Visual representations illustrative of lac cultivation practices, seed materials, and products in Jharkhand.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#E7DFD3] shadow-xs cursor-pointer"
              onClick={() => {
                setSelectedImage(idx);
                setIsZoomed(false);
              }}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h3 className="font-serif-title text-lg font-bold text-white mt-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for Gallery Photo Inspection */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E7DFD3] p-5 sm:p-7 space-y-4 relative"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 z-10"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#E7DFD3] flex items-center justify-center">
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className={`w-full object-cover transition-all duration-300 ${
                    isZoomed ? 'scale-150 cursor-zoom-out h-[450px] object-contain' : 'h-80 sm:h-96 object-cover cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 text-white px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5 backdrop-blur-xs"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{isZoomed ? 'Reset Zoom' : 'Zoom In'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#6E1B24] uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-[#2C241E] mt-0.5">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#5A4D43] mt-2 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E7DFD3] flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl(activeItem.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-5 rounded-lg text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire about this on WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-3 border border-[#D5C9B8] rounded-lg text-sm font-medium text-[#4A3E37] hover:bg-[#FAF7F2] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Gallery CTA */}
        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl(
              'Hello Lah Suvidha Kendra, I saw your product photos of lac seeds and supplies and would like to enquire about availability and rates.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1C3F2B] hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
            <span>Ask Shri Shakti Dhar Koiri about current lot photos on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

