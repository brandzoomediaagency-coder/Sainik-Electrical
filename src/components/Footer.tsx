import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, Heart, ShieldCheck } from 'lucide-react';
import { businessConfig, getWhatsAppUrl, getPhoneCallUrl } from '@/config/business';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#home" className="inline-block">
              <div className="relative h-12 w-48">
                <Image
                  src="/images/brand/logo.png"
                  alt="Sainik Electrical & Electronics"
                  fill
                  sizes="192px"
                  className="object-contain brightness-110"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sainik Electrical &amp; Electronics is Ghazipur&apos;s leading authorized distributor of inverter batteries, pure sine wave home UPS, and turnkey solar energy solutions. Authorized partner for Exide, Luminous, Microtek, and Loom Solar.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span>100% Genuine Authorized Products with Warranty</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-bold text-white text-sm uppercase tracking-wider">Quick Links</p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#solar-calculator" className="hover:text-white transition-colors">Solar Savings Calculator</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location &amp; Map</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-white text-sm uppercase tracking-wider">Key Specialities</p>
            <ul className="space-y-2 text-xs">
              {businessConfig.services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href={getWhatsAppUrl(businessConfig.whatsapp.batteryInquiryMessage)} className="text-amber-400 hover:underline">
                  ⚡ Old Battery Scrap Buyback
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-white text-sm uppercase tracking-wider">Store Headquarters</p>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" aria-hidden="true" />
                <span>{businessConfig.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-amber-500 shrink-0" aria-hidden="true" />
                <span>Mon – Sat: 9:30 AM – 8:30 PM | Sun: 10 AM – 4 PM</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-red shrink-0" aria-hidden="true" />
                <a href={getPhoneCallUrl()} className="text-white font-semibold hover:underline">
                  {businessConfig.phones.primaryDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline"
                >
                  WhatsApp: {businessConfig.whatsapp.displayNumber}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={businessConfig.googleLinks.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 text-xs transition-colors"
                >
                  <span>Google Business Profile &amp; Reviews</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {businessConfig.name}. All Rights Reserved.
          </p>

          <p className="text-slate-400">
            Authorized Distributor &bull; Mohammadabad &amp; Yusufpur, Ghazipur, Uttar Pradesh
          </p>
        </div>

      </div>
    </footer>
  );
}

