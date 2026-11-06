import { Star, ShieldCheck, ExternalLink, Quote } from 'lucide-react';
import { businessConfig } from '@/config/business';

export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-3">
              Verified Customer Satisfaction
            </span>
            <h2 id="reviews-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              What Ghazipur Residents &amp; Businesses Say
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Genuine feedback from customers across Mohammadabad, Yusufpur, Ghazipur City, Kasimabad, and Zamania.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="shrink-0 flex items-center gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-200">
            <div className="text-center">
              <span className="text-4xl font-extrabold text-slate-900 block leading-none">4.9</span>
              <span className="flex text-amber-500 mt-1.5" role="img" aria-label="4.9 out of 5 stars average rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </span>
            </div>
            <div className="border-l border-slate-200 pl-4 text-xs">
              <p className="font-bold text-slate-800">Google Verified Rating</p>
              <p className="text-slate-500">Based on 60+ local reviews</p>
              <a
                href={businessConfig.googleLinks.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 font-semibold text-red-700 hover:underline"
              >
                <span>Read on Google</span>
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessConfig.reviews.map((rev, index) => (
            <article
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Header: Stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex text-amber-500" role="img" aria-label={`${rev.rating} out of 5 stars`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </span>

                  <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200">
                    {rev.serviceTag}
                  </span>
                </div>

                <Quote className="h-7 w-7 text-slate-300 mb-2" aria-hidden="true" />

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{rev.name}</h3>
                  <p className="text-xs text-slate-500">{rev.location}</p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Verified</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View on Google CTA */}
        <div className="mt-12 text-center">
          <a
            href={businessConfig.googleLinks.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition-all focus-visible:outline-brand-red"
          >
            <span>View All Reviews on Google Business Profile</span>
            <ExternalLink className="h-4 w-4 text-slate-600" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
