import Image from 'next/image';
import { MessageCircle, Check, ArrowRight, Sparkles } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/config/business';

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 bg-slate-50 border-t border-b border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-3">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Authorized Products &amp; Solutions</span>
          </span>
          <h2 id="services-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Comprehensive Power Backup, Solar &amp; Electrical Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Every product is backed by authentic company warranty cards, transparent pricing, and fast local Ghazipur field assistance.
          </p>
        </div>

        {/* Dynamic Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessConfig.services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 group"
            >
              {/* Service Card Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block rounded-full bg-slate-900/85 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-amber-300 border border-slate-700">
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold leading-snug drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4" aria-label="Key features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 mt-0.5">
                          <Check className="h-3 w-3 stroke-[3]" aria-hidden="true" />
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA: WhatsApp Custom Inquiry */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-800 focus-visible:outline-emerald-700"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner for Old Battery Exchange */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-red-700 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white mb-2">
              Exchange Offer
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Have an Old Dead Inverter or Vehicle Battery at Home?
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Don&apos;t throw it away or sell it cheap. We offer Ghazipur&apos;s highest scrap exchange buyback value against any new Exide or Luminous battery.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(businessConfig.whatsapp.batteryInquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-amber-400 transition-all"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Check Exchange Valuation</span>
          </a>
        </div>

      </div>
    </section>
  );
}
