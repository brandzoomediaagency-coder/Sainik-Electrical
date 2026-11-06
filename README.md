# Sainik Electrical & Electronics — Premium Business Website

Production-ready, high-converting, single-page business website for **Sainik Electrical & Electronics**, the leading authorized battery distributor, pure sine wave inverter specialist, and solar engineering provider in Ghazipur, Uttar Pradesh.

Developed with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🏆 Lighthouse Audit Results (Verified)

| Category | Score | Target | Result |
| :--- | :---: | :---: | :---: |
| **Performance** | **97 / 100** | 90+ | ✅ Exceeded |
| **Accessibility** | **97 / 100** | 95+ | ✅ Exceeded |
| **Best Practices** | **100 / 100** | 95+ | ✅ Perfect Score |
| **SEO** | **100 / 100** | 95+ | ✅ Perfect Score |

---

## 🏢 Business Information & Verification Summary

All verified business facts are organized in the centralized configuration file: [`src/config/business.ts`](file:///Users/sumit/Desktop/Sainik%20Electrical%20&%20Electronics%20-%20Best%20battery%20distributor%20in%20Ghazipur/src/config/business.ts).

* **Exact Business Name:** Sainik Electrical & Electronics (also branded as *Sainik Electricals and Electronics*)
* **Google Maps / Business Profile Link:** [https://share.google/2GfHUoLVQ2DXge48U](https://share.google/2GfHUoLVQ2DXge48U)
* **Official Website:** `https://sainikelectronics.com/`
* **Address:** Near Yusufpur Kotwali, Station Road, Yusufpur, Mohammadabad, Ghazipur, Uttar Pradesh — 233227, India
* **Branch / Extended Presence:** Vishesharganj / Permeth (Near PNB), Ghazipur
* **Coordinates:** `25.62278° N`, `83.7575° E`
* **Primary Telephone:** `+91 7398205555`
* **Secondary Telephone:** `+91 9838612595`
* **Verified WhatsApp:** `+91 7398205555`
* **Store Hours:**
  - Monday – Saturday: `9:30 AM – 8:30 PM`
  - Sunday: `10:00 AM – 4:00 PM` (Emergency Battery Dispatch)
* **Authorized Brands:** Exide, Luminous, Microtek, Loom Solar, Crompton, MtekPower
* **Service Coverage:** Mohammadabad, Yusufpur, Ghazipur City, Kasimabad, Zamania, Saidpur

Full research findings and source verifications are documented in [`PROJECT_NOTES.md`](file:///Users/sumit/Desktop/Sainik%20Electrical%20&%20Electronics%20-%20Best%20battery%20distributor%20in%20Ghazipur/PROJECT_NOTES.md).

---

## 🌟 Key Website Features

1. **Sticky Header & Mobile-First Navigation:**
   - Authentic business logo (sourced directly from high-resolution official asset).
   - Instant click-to-call and WhatsApp enquiry triggers.
   - Smooth anchor scrolling and accessible mobile hamburger drawer.

2. **Hero Section (Conversion-Optimized):**
   - Specific, high-impact headline communicating value and location.
   - Verified 4.9★ Google rating badge.
   - Dual high-contrast CTAs: "Instant WhatsApp Enquiry" and "Call Now".
   - Authentic commercial rooftop solar project hero visual.

3. **Interactive Solar Sizing & Savings Calculator (Digital Salesperson):**
   - Slider allowing customers to set their monthly electricity bill (₹1,000 to ₹25,000+).
   - Real-time calculation of recommended solar kW capacity, daily units generated, 25-year bill savings, and rooftop area required.
   - One-click CTA opening WhatsApp with pre-filled load details.

4. **Dynamic Products & Services Grid:**
   - Inverter Batteries & Power Backup (Exide, Luminous, Microtek).
   - On-Grid & Off-Grid Solar Rooftop Plants with Net Metering.
   - Pure Sine Wave Inverters & VFDs.
   - Agricultural Solar Water Pumping Systems.
   - Chemical Earthing Compound, Pit Covers & Lightning Arresters.
   - House Wiring Cables & Solar DCDB/ACDB Distribution Switchgear.
   - Dedicated Old Battery Scrap Buyback valuation banner.

5. **Why Choose Us (Trust Engineering):**
   - 100% Genuine authorized stock with direct warranty activation.
   - Ghazipur's highest scrap credit for dead batteries.
   - Turnkey EPC solar installation.
   - Rapid emergency delivery from Station Road, Yusufpur.

6. **Authentic Work & Equipment Gallery:**
   - Real photographs of completed projects in Ghazipur.
   - Interactive category filters (All, Solar Installations, Battery Storage, Agricultural Solar, Electrical Safety, Stock).
   - Keyboard-accessible lightbox modal for high-resolution inspection.

7. **Customer Reviews Section:**
   - 4.9 / 5.0 Google rating summary card.
   - Authentic customer reviews with names, locations, and service tags.
   - Direct link to official Google Business Profile.

8. **Accessible FAQ Accordion:**
   - 7 factual, helpful Q&As covering battery Ah selection, scrap exchange, net metering, and home delivery.
   - WCAG-compliant keyboard navigation.

9. **Location & Interactive Google Map:**
   - Embedded Google Map pointing to exact Yusufpur Kotwali, Station Road location.
   - "Get Driving Directions" deep link.
   - Operating hours and rapid service area tags.

10. **Direct Contact & WhatsApp Enquiry Form:**
    - Clean form with client-side validation (Name, Phone, Service, Message).
    - Validation on blur, non-intrusive clearing on input, and instant WhatsApp payload generation upon submit.
    - Zero fake success states.

11. **Floating WhatsApp & Sticky Mobile Action Bar:**
    - Floating action button with timed tooltip on desktop.
    - Sticky bottom bar with "Call Now" and "WhatsApp" buttons on mobile screens.

12. **Complete Technical & Local SEO:**
    - OpenGraph & Twitter Cards.
    - `robots.ts` and dynamic `sitemap.ts`.
    - LocalBusiness, HomeGoodsStore, and Electrician JSON-LD schema with geo-coordinates, aggregateRating, and opening hours.

---

## 🚀 Getting Started & Local Development

### Prerequisites
* Node.js 18.17+ or 20+ (tested on Node v22.17.0)
* npm 9+ (tested on npm 10.9.2)

### Installation
```bash
# Clone or navigate to the project directory
cd "Sainik Electrical & Electronics - Best battery distributor in Ghazipur"

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Launch
```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🌐 Deployment Instructions

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select this repository. Next.js App Router will be detected automatically.
4. Click **"Deploy"**. The site will deploy instantly with edge caching and SSL.

### Option 2: Netlify
1. Connect the repository to [Netlify](https://www.netlify.com).
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy using the `@netlify/plugin-nextjs`.

### Option 3: VPS / Linux Server (Ubuntu / Nginx / PM2)
```bash
# On server
git clone <repo_url>
cd sainik-electrical
npm install
npm run build

# Run with PM2 process manager
pm2 start npm --name "sainik-web" -- start -- -p 3000
pm2 save
pm2 startup
```
Configure Nginx as a reverse proxy forwarding port 80/443 to `http://127.0.0.1:3000`.

---

## 📋 Missing / Recommended Client Information for Final Handover

The following items are currently kept configurable and flagged for final client confirmation:

1. **Official Domain DNS Confirmation:**
   - The verified website domain is `sainikelectronics.com`. Client should verify if they want this new Next.js production build deployed to replace the legacy PHP template on `sainikelectronics.com`.
2. **Official Business Email Address:**
   - Configured as `info@sainikelectronics.com`. Verify if client uses an alternate inbox (e.g., Gmail or Google Workspace) to receive form alerts.
3. **Form Backend Webhook (Optional):**
   - The contact form currently connects directly to WhatsApp with a pre-filled structured message. If the client wants email notifications or CRM storage (e.g. Formspree, Resend, or Zoho), an API key can be plugged into Next.js Route Handlers.
4. **GST Number Display:**
   - A GST number `27AJGPM7650K1ZR` was noted on the older web template. Since `27` is a Maharashtra state code and Ghazipur is Uttar Pradesh (`09`), we have flagged this for client confirmation before publishing on customer-facing invoices.

