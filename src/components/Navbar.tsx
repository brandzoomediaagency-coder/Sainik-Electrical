'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { businessConfig, getWhatsAppUrl, getPhoneCallUrl } from '@/config/business';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Solar Calculator', href: '#solar-calculator' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top utility bar */}
      <div className="hidden bg-slate-900 text-xs text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
              <span>Yusufpur Kotwali, Station Road, Mohammadabad, Ghazipur</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              <span>Mon - Sat: 9:30 AM - 8:30 PM | Sun: 10 AM - 4 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>100% Genuine Manufacturer Warranty</span>
            </span>
            <span className="text-slate-600" aria-hidden="true">|</span>
            <a
              href={getPhoneCallUrl()}
              className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-amber-400" aria-hidden="true" />
              <span>{businessConfig.phones.primaryDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <nav
        aria-label="Main navigation"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-md backdrop-blur-md py-3'
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 focus-visible:outline-brand-red rounded-lg"
          >
            <div className="relative h-11 w-36 sm:h-12 sm:w-44">
              <Image
                src="/images/brand/logo.png"
                alt="Sainik Electrical & Electronics - Best battery distributor in Ghazipur"
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain"
              />
            </div>
            <div className="hidden lg:block border-l border-slate-200 pl-3">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-red-700">
                Authorized Distributor
              </span>
              <span className="block text-xs font-semibold text-slate-700">
                Ghazipur • UP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-6 text-sm font-medium text-slate-700">
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-red-700 focus-visible:outline-red-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="transition-colors hover:text-red-700 focus-visible:outline-red-700"
            >
              Contact
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getPhoneCallUrl()}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 transition-all hover:bg-slate-100 hover:border-slate-300"
            >
              <Phone className="h-3.5 w-3.5 text-red-700" aria-hidden="true" />
              <span>Call Us</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-800"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-lg bg-emerald-700 text-white sm:hidden"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-red-700"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="rounded-md px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-red-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={getPhoneCallUrl()}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-3 text-sm font-semibold text-slate-800"
                >
                  <Phone className="h-4 w-4 text-red-700" aria-hidden="true" />
                  <span>Call {businessConfig.phones.primaryDisplay}</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-700 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
