'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/config/business';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" aria-labelledby="faq-heading" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100 mb-3">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Got Questions?</span>
          </span>
          <h2 id="faq-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Clear, honest answers about inverter batteries, solar systems, warranties, and pricing in Ghazipur.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {businessConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-colors"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 transition-colors hover:text-brand-red focus-visible:outline-brand-red"
                  >
                    <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-brand-red text-white' : ''
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 rounded-2xl bg-slate-100 p-6 text-center border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-bold text-slate-900 text-base">Have a specific question not covered here?</h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Ask our technical team directly on WhatsApp for immediate assistance.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello Sainik Electricals! I have a question regarding batteries / solar systems for my home in Ghazipur.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

