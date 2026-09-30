import React, { useState } from 'react';
import { MessageCircle, Check, Camera, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../data/products';
import { getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
  const { language, t } = useLanguage();

  const isHindi = language === 'hi';
  const displayName = isHindi && product.nameHi ? product.nameHi : product.name;
  const displayCategory = isHindi && product.categoryLabelHi ? product.categoryLabelHi : product.categoryLabel;
  const displayShortDesc = isHindi && product.shortDescriptionHi ? product.shortDescriptionHi : product.shortDescription;
  const displayFullDesc = isHindi && product.fullDescriptionHi ? product.fullDescriptionHi : product.fullDescription;
  const displayFeatures = isHindi && product.featuresHi ? product.featuresHi : product.features;
  const displayNotice = isHindi && product.inStockNoticeHi ? product.inStockNoticeHi : product.inStockNotice;
  const displayWhatsAppMsg = isHindi && product.whatsappMessageHi ? product.whatsappMessageHi : product.whatsappMessage;

  const images = product.additionalImages && product.additionalImages.length > 0
    ? product.additionalImages
    : [{ url: product.image, label: product.name, caption: product.shortDescription }];

  const currentImage = images[activeImgIndex] || images[0];
  const currentImgLabel = isHindi && (currentImage as any).labelHi ? (currentImage as any).labelHi : currentImage.label;
  const currentImgCaption = isHindi && (currentImage as any).captionHi ? (currentImage as any).captionHi : currentImage.caption;

  return (
    <>
      <div className="bg-white rounded-xl border border-[#E7DFD3] overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#CBBDA9] transition-all duration-200">
        <div>
          {/* Product Thumbnail with Photo Switcher */}
          <div className="relative h-48 sm:h-52 bg-[#F4EFE6] overflow-hidden group">
            <img
              src={currentImage.url}
              alt={`${displayName} - ${currentImgLabel || 'Lah Suvidha Kendra'}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Clean Category Label - quiet typography */}
            <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-sm text-[#2C241E] px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide border border-[#E7DFD3]">
              {displayCategory}
            </div>

            {/* Quick View Photo Badge */}
            <button
              onClick={() => setModalOpen(true)}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-lg text-xs flex items-center gap-1 backdrop-blur-xs transition-colors cursor-pointer"
              title="View full size photo"
            >
              <Camera className="w-3.5 h-3.5" />
              <span className="text-[10px] font-medium hidden xs:inline">
                {isHindi ? 'फोटो' : 'Photo'}
              </span>
            </button>

            {/* If product has multiple photos (like Lac Seeds), show pill indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/55 backdrop-blur-xs px-2.5 py-1 rounded-md text-white text-[10px]">
                <span className="truncate max-w-[170px] font-medium text-amber-200">
                  {currentImgLabel}
                </span>
                <div className="flex gap-1 shrink-0">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImgIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeImgIndex === idx ? 'bg-amber-300 w-4' : 'bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Content */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-serif-title text-xl font-bold text-[#2C241E]">
                {displayName}
              </h3>
              {product.additionalImages && product.additionalImages.length > 1 && (
                <span className="text-[10px] font-semibold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-200 shrink-0">
                  {product.additionalImages.length} {t.products.photosCount}
                </span>
              )}
            </div>

            <p className="text-xs text-[#5A4D43] mt-2 leading-relaxed line-clamp-3">
              {displayShortDesc}
            </p>

            {/* In-stock or Compliance Notice */}
            {displayNotice && (
              <p className="text-[11px] font-medium text-amber-800 bg-amber-50 p-2 rounded mt-3 border border-amber-200/60">
                {displayNotice}
              </p>
            )}

            {/* Key feature bullet highlights */}
            {displayFeatures && displayFeatures.length > 0 && (
              <ul className="mt-3.5 space-y-1.5 text-xs text-[#4A3E37]">
                {displayFeatures.slice(0, 2).map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#2D6344] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-5 pt-0 space-y-2.5">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-[#6E1B24] hover:text-[#53141B] hover:bg-[#FAF7F2] rounded transition-colors cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{t.products.viewDetails}</span>
          </button>

          <a
            href={getWhatsAppUrl(displayWhatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold shadow-sm transition-all duration-150 active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>{t.products.enquireBtn}</span>
          </a>
        </div>
      </div>

      {/* Product Detail & Photo Lightbox Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E7DFD3] p-5 sm:p-7 space-y-5 relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`product-title-${product.id}`}
          >
            <button
              onClick={() => {
                setModalOpen(false);
                setIsPhotoZoomed(false);
              }}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 z-10 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High Resolution Photo Showcase */}
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#E7DFD3] flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
                <img
                  src={currentImage.url}
                  alt={currentImgLabel || displayName}
                  referrerPolicy="no-referrer"
                  className={`w-full object-cover transition-all duration-300 ${
                    isPhotoZoomed ? 'scale-150 cursor-zoom-out h-96 object-contain' : 'h-64 sm:h-80 object-cover cursor-zoom-in'
                  }`}
                  onClick={() => setIsPhotoZoomed(!isPhotoZoomed)}
                />

                {/* Zoom toggle button */}
                <button
                  onClick={() => setIsPhotoZoomed(!isPhotoZoomed)}
                  className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 text-white px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5 backdrop-blur-xs cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>
                    {isPhotoZoomed
                      ? isHindi ? 'रीसेट करें' : 'Reset'
                      : isHindi ? 'ज़ूम इन करें' : 'Zoom In'}
                  </span>
                </button>

                {/* Previous / Next buttons if multiple photos */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Photo Caption & Context */}
              <div className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E7DFD3] text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-[#6E1B24] block sm:inline mr-2">
                    {isHindi ? 'फोटो:' : 'Photo:'} {currentImgLabel}
                  </strong>
                  <span className="text-[#5A4D43]">{currentImgCaption}</span>
                </div>
                <span className="text-[11px] text-stone-400 shrink-0">
                  {activeImgIndex + 1} / {images.length}
                </span>
              </div>

              {/* Multiple Thumbnails Selector */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => {
                    const thumbLabel = isHindi && (img as any).labelHi ? (img as any).labelHi : img.label;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIndex(idx)}
                        className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                          activeImgIndex === idx
                            ? 'border-[#6E1B24] ring-2 ring-[#6E1B24]/30'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img.url}
                          alt={thumbLabel}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <span className="text-xs font-semibold text-[#6E1B24] uppercase tracking-wider">
                {displayCategory}
              </span>
              <h2
                id={`product-title-${product.id}`}
                className="font-serif-title text-2xl font-bold text-[#2C241E] mt-1"
              >
                {displayName}
              </h2>
            </div>

            <p className="text-sm text-[#5A4D43] leading-relaxed">
              {displayFullDesc}
            </p>

            {displayFeatures && (
              <div>
                <h4 className="text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-2">
                  {isHindi ? 'प्रमुख विशेषताएं एवं व्यावहारिक उपयोगिता' : 'Key Specifications & Practical Relevance'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#4A3E37]">
                  {displayFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#2D6344] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-3 border-t border-[#E7DFD3] flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl(displayWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-lg text-sm font-semibold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>
                  {isHindi ? `${displayName} के बारे में व्हाट्सएप पर पूछें` : `Chat on WhatsApp regarding ${displayName}`}
                </span>
              </a>

              <button
                onClick={() => {
                  setModalOpen(false);
                  setIsPhotoZoomed(false);
                }}
                className="px-4 py-3 border border-[#D5C9B8] rounded-lg text-sm font-medium text-[#4A3E37] hover:bg-[#FAF7F2] cursor-pointer"
              >
                {isHindi ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


