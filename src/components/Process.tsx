import { ArrowRight, PhoneCall, Calculator, Truck, ShieldCheck } from 'lucide-react';
import { businessConfig } from '@/config/business';

export default function Process() {
  const stepIcons = [
    <PhoneCall key="1" className="h-6 w-6 text-red-600" aria-hidden="true" />,
    <Calculator key="2" className="h-6 w-6 text-amber-500" aria-hidden="true" />,
    <Truck key="3" className="h-6 w-6 text-blue-600" aria-hidden="true" />,
    <ShieldCheck key="4" className="h-6 w-6 text-emerald-600" aria-hidden="true" />,
  ];

  return (
    <section aria-labelledby="process-heading" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-3">
            Simple &amp; Transparent
          </span>
          <h2 id="process-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            How It Works: From Inquiry to Power On
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A frictionless customer experience designed for homeowners, business owners, and farmers across Ghazipur.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {businessConfig.processSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100">
                    {stepIcons[index]}
                  </div>
                  <span className="text-3xl font-black text-slate-500 font-mono">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {index !== businessConfig.processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
