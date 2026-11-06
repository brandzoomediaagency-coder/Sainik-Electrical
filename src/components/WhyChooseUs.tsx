import { ShieldCheck, Repeat, Sun, Truck, Gauge, Star, CheckCircle } from 'lucide-react';
import { businessConfig } from '@/config/business';

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="h-6 w-6 text-emerald-700" aria-hidden="true" />,
    Repeat: <Repeat className="h-6 w-6 text-red-700" aria-hidden="true" />,
    Sun: <Sun className="h-6 w-6 text-amber-600" aria-hidden="true" />,
    Truck: <Truck className="h-6 w-6 text-blue-700" aria-hidden="true" />,
    Gauge: <Gauge className="h-6 w-6 text-purple-700" aria-hidden="true" />,
    Star: <Star className="h-6 w-6 text-amber-600" aria-hidden="true" />,
  };

  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-3">
            Why Ghazipur Trusts Sainik Electrical
          </span>
          <h2 id="why-us-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Built on Authenticity, Fair Pricing &amp; Reliable Support
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We don&apos;t make inflated promises. Every claim is proven every day across homes, clinics, farms, and businesses in Ghazipur.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessConfig.whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-50 p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200">
                  {iconMap[item.icon] || <CheckCircle className="h-6 w-6 text-slate-700" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
