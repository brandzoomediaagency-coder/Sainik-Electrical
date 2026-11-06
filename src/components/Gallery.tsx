'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ZoomIn, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '@/config/business';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<(typeof businessConfig.gallery)[0] | null>(null);

  const categories = [
    'All',
    'Solar Installations',
    'Battery Storage',
    'Agricultural Solar',
    'Electrical Safety',
    'Products & Stock',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? businessConfig.gallery
      : businessConfig.gallery.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-3">
            <Camera className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Real Local Projects</span>
          </span>
          <h2 id="gallery-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Our Work &amp; Equipment Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real installations, authentic battery stock, and precision electrical engineering completed across Ghazipur district.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Gallery categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
              tabIndex={0}
              role="button"
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-brand-red text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm text-white">
                    <ZoomIn className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>

                <div className="absolute top-2.5 left-2.5">
                  <span className="rounded-md bg-slate-900/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-amber-300">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-slate-900 text-sm line-clamp-1 group-hover:text-red-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-slate-800/80 p-2 text-white hover:bg-slate-700 transition-colors focus-visible:outline-white"
                aria-label="Close photo preview"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {activeImage.category}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-xs text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      Verified Ghazipur Project
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{activeImage.title}</h3>
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl">{activeImage.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="rounded-xl bg-slate-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition-colors shrink-0"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
