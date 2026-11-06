import { MapPin, Navigation, Clock, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { businessConfig, getPhoneCallUrl } from '@/config/business';

export default function LocationMap() {
  return (
    <section id="location" aria-labelledby="location-heading" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-red bg-red-100/60 px-3 py-1 rounded-full border border-red-200 mb-3">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Visit Our Store</span>
          </span>
          <h2 id="location-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Conveniently Located in Mohammadabad, Ghazipur
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Visit our distribution showroom on Station Road near Yusufpur Kotwali for battery load-testing, warranty activation, and solar consultations.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Store Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 mb-4">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>Verified Physical Location</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {businessConfig.name}
              </h3>
              
              <div className="flex items-start gap-3 mt-4 text-slate-700 text-sm">
                <MapPin className="h-5 w-5 text-brand-red shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="block font-semibold text-slate-900">Main Distribution Center:</strong>
                  <p className="mt-1 leading-relaxed">
                    {businessConfig.address.full}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Landmark: Right near Yusufpur Kotwali (Police Station) on main Station Road.
                  </p>
                </div>
              </div>

              {businessConfig.address.branchOffice && (
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <span className="font-bold text-slate-800">Branch Presence:</span> {businessConfig.address.branchOffice}
                </div>
              )}

              {/* Operating Hours */}
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                  <Clock className="h-4 w-4 text-amber-500" aria-hidden="true" />
                  <span>Store Timings</span>
                </div>
                <div className="space-y-1 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Monday – Saturday:</span>
                    <span>9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Sunday:</span>
                    <span>10:00 AM – 4:00 PM (Emergency Dispatch)</span>
                  </div>
                </div>
              </div>

              {/* Contact Call Link */}
              <div className="mt-6 flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-brand-red shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-slate-500 block">Direct Telephone Hotline:</span>
                  <a
                    href={getPhoneCallUrl()}
                    className="font-bold text-slate-900 hover:text-brand-red transition-colors"
                  >
                    {businessConfig.phones.primaryDisplay}
                  </a>
                </div>
              </div>

              {/* Key Service Areas */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Rapid Delivery &amp; Service Areas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {businessConfig.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-4">
              <a
                href={businessConfig.googleLinks.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-slate-800 transition-colors focus-visible:outline-brand-red"
              >
                <Navigation className="h-4 w-4 text-amber-400" aria-hidden="true" />
                <span>Get Driving Directions on Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed Column */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-200 relative min-h-[420px] flex flex-col">
            <iframe
              title="Sainik Electrical & Electronics Google Map Location"
              src={businessConfig.googleLinks.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '440px', flex: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            {/* Map bottom bar */}
            <div className="bg-slate-900 text-white p-3 px-5 flex items-center justify-between text-xs">
              <span className="text-slate-300">
                📍 Coordinates: {businessConfig.coordinates.latitude}° N, {businessConfig.coordinates.longitude}° E
              </span>
              <a
                href={businessConfig.googleLinks.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

