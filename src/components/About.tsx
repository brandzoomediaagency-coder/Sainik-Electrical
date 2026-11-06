import Image from 'next/image';
import { ShieldCheck, MapPin, CheckCircle, Award, Phone, MessageCircle } from 'lucide-react';
import { businessConfig, getWhatsAppUrl, getPhoneCallUrl } from '@/config/business';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-3">
            About Our Enterprise
          </span>
          <h2 id="about-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Ghazipur&apos;s Foremost Power Backup &amp; Solar Engineering Depot
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered near Yusufpur Kotwali on Station Road, Mohammadabad, <strong>Sainik Electrical &amp; Electronics</strong> has established itself as the trusted benchmark for genuine batteries, pure sine wave inverters, and high-efficiency solar energy systems across Ghazipur district.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Visual with Authentic Project Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] bg-slate-100">
              <Image
                src="/images/gallery/industrial-solar-plant-structure.jpg"
                alt="Sainik Electricals - Solar Plant Installation and Heavy Structures in Ghazipur"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Authentic Installation
                  </span>
                </div>
                <p className="text-lg font-bold">Rooftop Solar &amp; Heavy Backup</p>
                <p className="text-xs text-slate-300 mt-1">
                  Engineered with heavy-duty galvanized structures for high wind resistance and decades of reliable performance.
                </p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -top-4 -right-4 bg-red-700 text-white p-4 rounded-xl shadow-xl hidden sm:block">
              <Award className="h-6 w-6 mb-1" aria-hidden="true" />
              <p className="text-xs font-bold leading-tight">4.9 / 5.0 Star</p>
              <p className="text-[10px] text-red-100">Google Verified</p>
            </div>
          </div>

          {/* Right Column: Key Details & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <p>
                Unlike generic retailers who simply hand over a boxed product, we understand the specific power dynamics of Ghazipur: frequent voltage fluctuations, harsh summer peak load periods, and extended rural outages. Our mission is to engineer <strong>tailored power solutions</strong> that protect your appliances and guarantee peace of mind.
              </p>
              <p>
                From single-battery residential inverters to multi-kilowatt commercial solar power plants with bidirectional Net Metering, our experienced technicians ensure safe installation, proper earthing, and authentic company warranty registration.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-1.5 text-sm">
                  <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0" aria-hidden="true" />
                  <span>100% Factory Genuine Stock</span>
                </div>
                <p className="text-xs text-slate-600">
                  Direct authorized tie-ups with Exide, Luminous, Microtek, and Loom Solar. Zero refurbished or duplicate products.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-1.5 text-sm">
                  <CheckCircle className="h-4 w-4 text-red-700 shrink-0" aria-hidden="true" />
                  <span>Transparent Scrap Valuation</span>
                </div>
                <p className="text-xs text-slate-600">
                  Get the true scrap buyback value for your expired inverter and vehicle batteries, instantly adjusted on your bill.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-1.5 text-sm">
                  <MapPin className="h-4 w-4 text-amber-600 shrink-0" aria-hidden="true" />
                  <span>Deep Local Coverage</span>
                </div>
                <p className="text-xs text-slate-600">
                  Fast doorstep delivery and technical dispatch in Mohammadabad, Yusufpur, Ghazipur City, Kasimabad, and Zamania.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-1.5 text-sm">
                  <Award className="h-4 w-4 text-blue-700 shrink-0" aria-hidden="true" />
                  <span>Turnkey Solar EPC Service</span>
                </div>
                <p className="text-xs text-slate-600">
                  From site shadow analysis to structure mounting, chemical earthing, and Discom net-metering approvals.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl(businessConfig.whatsapp.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-800 transition-all"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Consult on WhatsApp</span>
              </a>

              <a
                href={getPhoneCallUrl()}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all"
              >
                <Phone className="h-4 w-4 text-red-700" aria-hidden="true" />
                <span>Call {businessConfig.phones.primaryDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
