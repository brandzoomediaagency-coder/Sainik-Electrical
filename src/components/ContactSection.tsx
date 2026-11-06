'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { businessConfig, getWhatsAppUrl, getPhoneCallUrl } from '@/config/business';

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: 'Inverter Batteries (Exide / Luminous)',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return undefined;
      case 'phone':
        if (!value.trim()) return 'Please enter your 10-digit mobile number.';
        const cleanPhone = value.replace(/\D/g, '');
        if (cleanPhone.length < 10) return 'Please enter a valid 10-digit mobile number.';
        return undefined;
      case 'service':
        if (!value.trim()) return 'Please select a service or product.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error as user types (Non-intrusive Modern Web rule)
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      service: validateField('service', formData.service),
    };

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      setErrors(newErrors);
      setTouched({ name: true, phone: true, service: true });
      return;
    }

    const encodedPayload = encodeURIComponent(
      `*New Website Inquiry for Sainik Electrical & Electronics*\n\n` +
      `*Name:* ${formData.name.trim()}\n` +
      `*Phone:* ${formData.phone.trim()}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Message:* ${formData.message.trim() || 'Please contact me with price and availability.'}\n\n` +
      `_Sent via sainikelectronics.com website contact form_`
    );

    const whatsappDirectUrl = `https://wa.me/${businessConfig.whatsapp.number}?text=${encodedPayload}`;
    
    setSubmitted(true);
    window.open(whatsappDirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-3">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Fast Response</span>
          </span>
          <h2 id="contact-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Connect with Our Ghazipur Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Need an urgent battery replacement, inverter quotation, or solar rooftop site survey? Call, WhatsApp, or send us your details below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-slate-900 text-white p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-red-600/20 blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6 text-sm">
                
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-amber-400">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Primary Telephone</span>
                    <a
                      href={getPhoneCallUrl()}
                      className="font-bold text-white hover:text-amber-400 transition-colors text-base"
                    >
                      {businessConfig.phones.primaryDisplay}
                    </a>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      Secondary: {businessConfig.phones.secondaryDisplay}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">WhatsApp Support</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-400 hover:underline text-base"
                    >
                      {businessConfig.whatsapp.displayNumber}
                    </a>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      Available for instant product quotes &amp; photos
                    </span>
                  </div>
                </div>

                {/* Store Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-red-400">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Storefront Address</span>
                    <p className="font-medium text-slate-200 mt-0.5 leading-snug">
                      {businessConfig.address.full}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-blue-400">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Working Hours</span>
                    <p className="text-slate-200 mt-0.5">{businessConfig.hours.weekdays}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{businessConfig.hours.sunday}</p>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Quick Button */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={getWhatsAppUrl(businessConfig.whatsapp.emergencyMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-800 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Urgent Battery Emergency WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-50 p-6 sm:p-10 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Send a Direct Requirement Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-8">
                Fill in your details and our Ghazipur technical team will get back to you with price and availability.
              </p>

              {submitted && (
                <div className="mb-6 rounded-2xl bg-emerald-50 p-4 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">Opening WhatsApp with your inquiry!</p>
                    <p className="mt-0.5 text-emerald-800">
                      Your inquiry details have been formatted. Click send in WhatsApp or call us directly at {businessConfig.phones.primaryDisplay}.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="customer-name"
                    name="name"
                    required
                    autoComplete="name"
                    enterKeyHint="next"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Anand Kumar"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors focus-visible:outline-brand-red ${
                      errors.name && touched.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-700 font-medium">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="customer-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    10-Digit Mobile / WhatsApp Number <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="tel"
                    id="customer-phone"
                    name="phone"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    enterKeyHint="next"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. 9838612595"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors focus-visible:outline-brand-red ${
                      errors.phone && touched.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && touched.phone && (
                    <p id="phone-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-700 font-medium">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Product / Service Required <span className="text-red-700">*</span>
                  </label>
                  <select
                    id="service-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors focus-visible:outline-brand-red"
                  >
                    <option value="Inverter Batteries (Exide / Luminous / Microtek)">
                      Inverter Batteries (Exide / Luminous / Microtek)
                    </option>
                    <option value="Old Battery Exchange Valuation">
                      Old Battery Exchange &amp; Scrap Buyback
                    </option>
                    <option value="Solar Rooftop System (1kW to 10kW+)">
                      On-Grid / Off-Grid Solar Rooftop System
                    </option>
                    <option value="Pure Sine Wave Home Inverter / UPS">
                      Pure Sine Wave Home Inverter / UPS
                    </option>
                    <option value="Agricultural Solar Water Pump System">
                      Agricultural Solar Water Pumping System
                    </option>
                    <option value="Chemical Earthing & Lightning Arrester">
                      Chemical Earthing &amp; Lightning Protection
                    </option>
                    <option value="Electrical Cables & Distribution Switchgear">
                      Electrical Wiring Cables &amp; Switchgear
                    </option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="customer-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Requirements / Village or Town in Ghazipur
                  </label>
                  <textarea
                    id="customer-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us your current power issue, battery Ah needed, or village location..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-colors focus-visible:outline-brand-red"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-red-950/20 hover:bg-red-800 transition-all focus-visible:outline-slate-900"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Submit &amp; Open in WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 We respect your privacy. Your contact number is used solely to respond to your power inquiry.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
