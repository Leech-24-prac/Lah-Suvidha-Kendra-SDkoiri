import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS_CONFIG } from '../config/business';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'compact' | 'light';
  className?: string;
  label?: string;
  showNumber?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  variant = 'primary',
  className = '',
  label = 'Chat on WhatsApp',
  showNumber = false,
}) => {
  const url = getWhatsAppUrl(message);

  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 active:scale-[0.98] select-none';

  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles =
        'bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm hover:shadow px-5 py-3 rounded-lg text-sm sm:text-base font-semibold';
      break;
    case 'secondary':
      variantStyles =
        'bg-[#6E1B24] hover:bg-[#58141C] text-white shadow-sm px-5 py-3 rounded-lg text-sm sm:text-base font-semibold';
      break;
    case 'outline':
      variantStyles =
        'border-2 border-[#25D366] text-[#1E7E34] hover:bg-[#25D366]/10 px-4 py-2.5 rounded-lg text-sm font-semibold';
      break;
    case 'compact':
      variantStyles =
        'bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium shadow-sm';
      break;
    case 'light':
      variantStyles =
        'bg-white text-[#1C3F2B] hover:bg-[#F4EFE6] border border-[#DDD3C5] px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm';
      break;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={`Send WhatsApp message to Lah Suvidha Kendra: ${label}`}
    >
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0 fill-current" />
      <span>{label}</span>
      {showNumber && (
        <span className="ml-1.5 opacity-95 text-xs sm:text-sm font-normal">
          ({BUSINESS_CONFIG.displayWhatsapp})
        </span>
      )}
    </a>
  );
};
