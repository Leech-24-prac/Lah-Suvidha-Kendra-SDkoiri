import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end print:hidden">
      {/* Quick speech bubble tooltip */}
      {showTooltip && (
        <div className="relative mb-2 hidden sm:flex items-center gap-2 bg-white text-[#2C241E] px-3.5 py-2 rounded-xl shadow-lg border border-[#E7DFD3] text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
          <p className="leading-snug">
            Need lac seeds, brood lac, or supplies? <strong>Chat on WhatsApp</strong>
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-[#E7DFD3] transform rotate-45" />
        </div>
      )}

      {/* Main floating button */}
      <a
        href={getWhatsAppUrl(
          'Hello Lah Suvidha Kendra, I have an enquiry regarding lac products and cultivation materials.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lah Suvidha Kendra on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1C3F2B]"></span>
          </span>
        </span>
        <span className="text-sm font-semibold tracking-wide hidden md:inline">
          Chat with Lah Suvidha Kendra
        </span>
        <span className="text-xs font-normal text-white/90 hidden lg:inline">
          ({BUSINESS_CONFIG.displayWhatsapp})
        </span>
      </a>
    </div>
  );
};
