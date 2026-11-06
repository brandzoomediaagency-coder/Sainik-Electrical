import type { Metadata, Viewport } from 'next';
import './globals.css';
import { businessConfig } from '@/config/business';

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sainikelectronics.com'),
  title: {
    default: 'Sainik Electrical & Electronics | Best Battery Distributor in Ghazipur',
    template: '%s | Sainik Electrical & Electronics Ghazipur',
  },
  description:
    'Sainik Electrical & Electronics is the #1 authorized battery distributor & solar solutions provider in Ghazipur. Genuine Exide, Luminous, Microtek batteries, pure sine wave inverters, on-grid/off-grid rooftop solar plants & electrical supplies. Best old battery exchange price in Mohammadabad & Yusufpur.',
  keywords: [
    'Best battery distributor in Ghazipur',
    'Sainik Electricals and Electronics',
    'Inverter battery dealer Ghazipur',
    'Solar panel installation Yusufpur',
    'Solar rooftop Ghazipur',
    'Exide battery Mohammadabad',
    'Luminous inverter battery Ghazipur',
    'Microtek pure sine wave inverter',
    'Old battery exchange Ghazipur',
    'Chemical earthing supplier Ghazipur',
  ],
  authors: [{ name: 'Sainik Electrical & Electronics' }],
  creator: 'Sainik Electrical & Electronics',
  publisher: 'Sainik Electrical & Electronics',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: 'https://sainikelectronics.com',
  },
  openGraph: {
    title: 'Sainik Electrical & Electronics | Best Battery Distributor in Ghazipur',
    description:
      'Authorized distributor of Inverter Batteries (Exide, Luminous, Microtek), Solar Rooftop Power Systems & Electrical Supplies in Ghazipur. Fast delivery, genuine manufacturer warranty & best scrap battery exchange rates.',
    url: 'https://sainikelectronics.com',
    siteName: 'Sainik Electrical & Electronics',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/gallery/commercial-on-grid-solar-installation.jpg',
        width: 1200,
        height: 630,
        alt: 'Sainik Electrical & Electronics - Battery Distributor & Solar Systems Ghazipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sainik Electrical & Electronics | Ghazipur Battery Distributor',
    description:
      'Premier battery & solar power solutions in Ghazipur. Inverter batteries, solar panels, and electrical hardware with fast local installation.',
    images: ['/images/gallery/commercial-on-grid-solar-installation.jpg'],
  },
  icons: {
    icon: '/images/brand/logo.png',
    apple: '/images/brand/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeGoodsStore', 'Electrician'],
    name: businessConfig.name,
    image: 'https://sainikelectronics.com/images/brand/logo.png',
    url: 'https://sainikelectronics.com',
    telephone: businessConfig.phones.primary,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: 'UP',
      postalCode: businessConfig.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessConfig.coordinates.latitude,
      longitude: businessConfig.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:30',
        closes: '20:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '65',
      bestRating: '5',
      worstRating: '1',
    },
    hasMap: businessConfig.googleLinks.profileUrl,
    areaServed: businessConfig.serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    sameAs: [
      businessConfig.googleLinks.profileUrl,
      'https://www.justdial.com/Ghazipur/Sainik-Electrical-Electronics',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
