import { Star, ShieldCheck, Zap, RefreshCw, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '@/config/business';

export default function StatsBar() {
  const statIcons = [
    <Star key="star" className="h-5 w-5 text-amber-500" aria-hidden="true" />,
    <Zap key="zap" className="h-5 w-5 text-brand-red" aria-hidden="true" />,
    <ShieldCheck key="shield" className="h-5 w-5 text-emerald-600" aria-hidden="true" />,
    <RefreshCw key="refresh" className="h-5 w-5 text-blue-600" aria-hidden="true" />,
  ];

  return (
    <section aria-label="Key Performance Indicators" className="relative -mt-6 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 rounded-2xl bg-white p-6 shadow-xl border border-slate-100">
          {businessConfig.stats.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center text-center p-3 sm:p-4 ${
                index !== businessConfig.stats.length - 1 ? 'md:border-r md:border-slate-100' : ''
              }`}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
                {statIcons[index]}
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                {item.label}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Authorized Brand Stock Ticker / Chips */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-slate-100/80 px-6 py-4 border border-slate-200">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Authorized Dealerships & Stock:
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {businessConfig.authorizedBrands.map((brand) => (
              <span
                key={brand.name}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm border border-slate-200"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                <span>{brand.name}</span>
                <span className="text-[10px] text-slate-500 hidden md:inline">({brand.category})</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

