'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { businessConfig, getWhatsAppUrl, getPhoneCallUrl } from '@/config/business';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds to subtly attract attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end">
        {/* Subtle Tooltip */}
        {showTooltip && (
          <div className="relative mb-3 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-xl border border-slate-200 animate-fadeIn">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Need battery or solar quote in Ghazipur?</span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="ml-1 text-slate-500 hover:text-slate-700"
              aria-label="Dismiss chat hint"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white border-r border-b border-slate-200" />
          </div>
        )}

        <a
          href={getWhatsAppUrl(businessConfig.whatsapp.defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-2xl shadow-emerald-950/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-800 focus-visible:outline-slate-900"
          aria-label="Chat with Sainik Electrical on WhatsApp"
        >
          <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-12" aria-hidden="true" />
        </a>
      </div>

      {/* Mobile Sticky CTA Bar (Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={getPhoneCallUrl()}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 py-3 text-xs font-bold text-slate-800 shadow-sm active:bg-slate-100"
          >
            <Phone className="h-4 w-4 text-red-700" aria-hidden="true" />
            <span>Call Now</span>
          </a>

          <a
            href={getWhatsAppUrl(businessConfig.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-700 py-3 text-xs font-bold text-white shadow-sm active:bg-emerald-800"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
