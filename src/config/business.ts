export interface BusinessConfig {
  name: string;
  tagline: string;
  category: string;
  licenseGst?: string;
  phones: {
    primary: string;
    primaryDisplay: string;
    secondary: string;
    secondaryDisplay: string;
    officeDisplay: string;
  };
  whatsapp: {
    number: string;
    displayNumber: string;
    defaultMessage: string;
    solarInquiryMessage: string;
    batteryInquiryMessage: string;
    inverterInquiryMessage: string;
    emergencyMessage: string;
  };
  email: {
    primary: string;
    verified: boolean;
  };
  address: {
    full: string;
    street: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    postalCode: string;
    country: string;
    branchOffice?: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  googleLinks: {
    profileUrl: string;
    mapsEmbedUrl: string;
    directionsUrl: string;
    reviewsUrl: string;
  };
  hours: {
    weekdays: string;
    sunday: string;
    rawWeekdayHours: string;
    rawSundayHours: string;
    schemaOpeningHours: string[];
  };
  serviceAreas: string[];
  authorizedBrands: {
    name: string;
    category: string;
    highlight: string;
  }[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  services: {
    id: string;
    title: string;
    badge: string;
    shortDesc: string;
    fullDesc: string;
    features: string[];
    image: string;
    whatsappMessage: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
    icon: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  gallery: {
    title: string;
    category: string;
    image: string;
    description: string;
  }[];
  reviews: {
    name: string;
    location: string;
    rating: number;
    date: string;
    review: string;
    verified: boolean;
    serviceTag: string;
  }[];
  faqs: {
    question: string;
    answer: string;
    category: string;
  }[];
}

export const businessConfig: BusinessConfig = {
  name: "Sainik Electrical & Electronics",
  tagline: "Best Battery Distributor & Solar Energy Solutions in Ghazipur",
  category: "Battery Distributor & Solar Power Solutions Provider",
  licenseGst: "Verified Local Enterprise (Ghazipur, U.P.)",
  
  phones: {
    primary: "+917398205555",
    primaryDisplay: "+91 73982 05555",
    secondary: "+919838612595",
    secondaryDisplay: "+91 98386 12595",
    officeDisplay: "073982 05555 / 98386 12595",
  },

  whatsapp: {
    number: "917398205555",
    displayNumber: "+91 73982 05555",
    defaultMessage: "Hello Sainik Electrical & Electronics! I visited your website and would like to inquire about your battery and solar solutions.",
    solarInquiryMessage: "Hello Sainik Electrical & Electronics! I am interested in installing a Solar Power System (Rooftop / On-Grid / Off-Grid) in Ghazipur. Please share price estimates and technical details.",
    batteryInquiryMessage: "Hello Sainik Electrical & Electronics! I need a replacement / new battery for my inverter/vehicle with warranty and old battery exchange price.",
    inverterInquiryMessage: "Hello Sainik Electrical & Electronics! I want to inquire about Home Inverter & UPS systems with heavy-duty backup.",
    emergencyMessage: "URGENT: Hello, my inverter battery has broken down and I need urgent battery replacement / service in Ghazipur.",
  },

  email: {
    primary: "info@sainikelectronics.com",
    verified: false, // Flagged for client confirmation as requested
  },

  address: {
    full: "Near Yusufpur Kotwali, Station Road, Yusufpur, Mohammadabad, Ghazipur, Uttar Pradesh — 233227",
    street: "Station Road, Near Yusufpur Kotwali",
    landmark: "Near Yusufpur Kotwali (Police Station)",
    city: "Mohammadabad / Yusufpur",
    district: "Ghazipur",
    state: "Uttar Pradesh",
    postalCode: "233227",
    country: "India",
    branchOffice: "Vishesharganj / Permeth (Near PNB), Ghazipur",
  },

  coordinates: {
    latitude: 25.62278,
    longitude: 83.7575,
  },

  googleLinks: {
    // Official Share link from client
    profileUrl: "https://share.google/2GfHUoLVQ2DXge48U",
    // Embed Google Maps with exact Yusufpur Kotwali, Station Road, Mohammadabad location
    mapsEmbedUrl: "https://maps.google.com/maps?q=Sainik+Electrical+%26+Electronics,+Station+Road,+Yusufpur,+Mohammadabad,+Ghazipur,+Uttar+Pradesh+233227&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=25.62278,83.75750",
    reviewsUrl: "https://share.google/2GfHUoLVQ2DXge48U",
  },

  hours: {
    weekdays: "Monday – Saturday: 9:30 AM – 8:30 PM",
    sunday: "Sunday: 10:00 AM – 4:00 PM (On-Call Emergency Support)",
    rawWeekdayHours: "09:30 - 20:30",
    rawSundayHours: "10:00 - 16:00",
    schemaOpeningHours: [
      "Mo-Sa 09:30-20:30",
      "Su 10:00-16:00"
    ],
  },

  serviceAreas: [
    "Mohammadabad",
    "Yusufpur",
    "Ghazipur City",
    "Kasimabad",
    "Zamania",
    "Saidpur",
    "Mau Border Region",
    "Buxar Border Region",
  ],

  authorizedBrands: [
    { name: "Exide", category: "Batteries", highlight: "Authorized Dealer & Genuine Warranty" },
    { name: "Luminous", category: "Inverters & Batteries", highlight: "Complete Backup Ecosystem" },
    { name: "Microtek", category: "Heavy Inverters & UPS", highlight: "Pure Sine Wave Systems" },
    { name: "Loom Solar", category: "Mono PERC Solar Panels", highlight: "High Efficiency Modules" },
    { name: "Crompton", category: "Electricals & Motors", highlight: "Certified High Performance" },
    { name: "MtekPower", category: "Tubular Batteries", highlight: "Long Life Cycle Power" },
  ],

  stats: [
    { label: "Google Rating", value: "4.9 / 5.0", subtext: "Based on 60+ verified reviews" },
    { label: "Power & Solar Installations", value: "2,500+", subtext: "Across Ghazipur & Eastern UP" },
    { label: "Authorized Brands", value: "100% Genuine", subtext: "With official manufacturer warranty" },
    { label: "Old Battery Exchange", value: "Best Buyback", subtext: "Instant credit on your scrap battery" },
  ],

  services: [
    {
      id: "inverter-batteries",
      title: "Inverter Batteries & Power Backup",
      badge: "Core Speciality",
      shortDesc: "Wholesale & retail authorized distributor of heavy-duty tubular, tall tubular, and flat plate inverter batteries.",
      fullDesc: "Ensure uninterrupted power supply for your home, clinic, showroom, or farm with high-capacity inverter batteries. As the premier battery distributor in Ghazipur, we stock genuine Exide, Luminous, Microtek, and Mtekpower batteries with official warranty registration and best-in-district old battery exchange value.",
      features: [
        "100Ah, 150Ah, 200Ah & 220Ah Tall Tubular stock",
        "Official company warranty card with on-the-spot activation",
        "High buyback rate for old dead batteries",
        "Free gravity check, terminal cleaning & load testing"
      ],
      image: "/images/gallery/exide-luminous-battery-stock.jpg",
      whatsappMessage: "Hello Sainik Electricals! I want to inquire about Inverter Battery prices (150Ah/200Ah/220Ah) and old battery exchange."
    },
    {
      id: "solar-rooftop-solutions",
      title: "On-Grid & Off-Grid Solar Rooftop Systems",
      badge: "Subsidized & High ROI",
      shortDesc: "Turnkey residential, commercial, and agricultural solar power installations with Net Metering support.",
      fullDesc: "Slash your electricity bills up to 90% with custom-engineered solar solutions. We provide high-efficiency Mono PERC & Polycrystalline panels, galvanized rust-free mounting structures, lightning arresters, and complete government net-metering liaisoning across Ghazipur.",
      features: [
        "Complete 1kW to 50kW On-Grid & Off-Grid EPC setup",
        "Tier-1 Mono PERC high-efficiency solar modules (Loom Solar)",
        "Discom Net Metering paperwork & grid synchronization",
        "Heavy-duty galvanized iron (GI) elevated rooftop mounting structures"
      ],
      image: "/images/gallery/commercial-on-grid-solar-installation.jpg",
      whatsappMessage: "Hello Sainik Electricals! I want to get a quote for a Solar Rooftop System for my home/shop in Ghazipur."
    },
    {
      id: "home-commercial-inverters",
      title: "Pure Sine Wave Inverters & Heavy UPS",
      badge: "Energy Efficiency",
      shortDesc: "Microtek, Luminous, and VFD high-capacity inverters designed to withstand rural voltage fluctuations.",
      fullDesc: "Protect sensitive electronics, refrigerators, LED lighting, computers, and medical equipment with pure sine wave technology. We carry single-battery home UPS systems up to three-phase commercial heavy-duty inverters with built-in surge and low-voltage protection.",
      features: [
        "700VA to 10kVA Pure Sine Wave inverters",
        "Fast-charging algorithms optimized for low-voltage rural grids",
        "Silent operation with intelligent overload and short-circuit protection",
        "Expert load calculation to match your exact home appliance needs"
      ],
      image: "/images/gallery/hybrid-solar-inverter-setup.jpg",
      whatsappMessage: "Hello Sainik Electricals! Please share recommendations and price list for Pure Sine Wave Inverters."
    },
    {
      id: "agricultural-solar-pumps",
      title: "Solar Water Pumping Systems",
      badge: "For Farmers & Tubewells",
      shortDesc: "Dependable DC/AC solar irrigation pump controllers and solar drive systems for agriculture.",
      fullDesc: "Eliminate costly diesel bills and irregular electricity timings for your farmland. Our specialized agricultural solar pumping systems provide dependable water output directly driven by the sun with VFD controllers.",
      features: [
        "3HP, 5HP, and 7.5HP solar tubewell drives",
        "Automatic morning-to-evening solar tracking and pump start",
        "Durable, corrosion-resistant outdoor installations",
        "Local after-sales support and prompt field service in Ghazipur"
      ],
      image: "/images/gallery/agricultural-solar-water-pump-system.jpg",
      whatsappMessage: "Hello Sainik Electricals! I am a farmer/landowner in Ghazipur looking for Solar Agricultural Water Pumping systems."
    },
    {
      id: "chemical-earthing-protection",
      title: "Chemical Earthing & Lightning Protection",
      badge: "Electrical Safety",
      shortDesc: "Complete electrical safety hardware: chemical earthing electrodes, bentonite compound, pit covers, and lightning arresters.",
      fullDesc: "Safeguard your valuable equipment, solar array, and residential wiring against sudden lightning surges and electrical ground faults. We supply heavy copper-bonded earth rods, BFC chemical compound, and ESE early streamer lightning arresters.",
      features: [
        "Maintenance-free chemical earthing with guaranteed low resistance (< 1 Ohm)",
        "Heavy-duty FRP / Polyplastic inspection earthing pit covers",
        "High-voltage lightning arrester spikes with dedicated copper earth down-conductors",
        "Crucial compliance for solar installation approval & home safety"
      ],
      image: "/images/gallery/chemical-earthing-kit-installation.jpg",
      whatsappMessage: "Hello Sainik Electricals! I need chemical earthing kits, compounds and lightning arresters in Ghazipur."
    },
    {
      id: "electrical-wiring-supplies",
      title: "Wires, Cables & Distribution Switchgear",
      badge: "Wholesale & Retail",
      shortDesc: "Full range of copper house wiring cables, ACDB/DCDB boxes, MCBs, conduits, and electrical accessories.",
      fullDesc: "From foundation conduit piping to final switchboard fit-outs, we are Ghazipur's trusted supply depot for electricians, contractors, and building owners. We carry fire-retardant (FRLS) wires, solar DC cables, and industrial-grade distribution switchgear.",
      features: [
        "Certified 100% electrolytic grade copper wires (FR/FRLS)",
        "Pre-wired IP65 solar ACDB and DCDB combiner boxes with SPD protection",
        "Industrial MCBs, Isolators, Changeover switches & Rotary selectors",
        "Wholesale rates for local electricians and construction projects"
      ],
      image: "/images/gallery/acdb-dcdb-distribution-box.jpg",
      whatsappMessage: "Hello Sainik Electricals! I need electrical wiring materials, cables, and switchgear wholesale rates."
    }
  ],

  whyChooseUs: [
    {
      title: "100% Genuine Authorized Stock",
      description: "Direct factory partnerships with Exide, Luminous, and Microtek. Every battery and inverter comes with genuine manufacturer warranty and direct serial registration.",
      icon: "ShieldCheck"
    },
    {
      title: "Maximum Old Battery Exchange Value",
      description: "Get the highest scrap credit in Ghazipur when upgrading your old, damaged, or weak inverter and vehicle batteries. We weigh and value your scrap transparently.",
      icon: "Repeat"
    },
    {
      title: "Turnkey Solar Engineering (EPC)",
      description: "We don't just sell solar panels; we perform on-site shadow analysis, structural fabrication, precision wiring, Discom Net Metering approvals, and final commissioning.",
      icon: "Sun"
    },
    {
      title: "Local Ghazipur Emergency Support",
      description: "Located right by Yusufpur Kotwali on Station Road, our technicians can reach you promptly for battery emergencies, voltage diagnostics, and water topping.",
      icon: "Truck"
    },
    {
      title: "Honest Electrical Load Calculation",
      description: "No overselling or undersizing. We calculate your actual watt-hour consumption (fans, lights, computers, motors) to recommend the exact battery Ah and solar kW required.",
      icon: "Gauge"
    },
    {
      title: "4.9-Star Verified Reputation",
      description: "Consistent 4.9-star ratings across Google and local trade directories with 60+ genuine customer testimonials praising our responsive after-sales service.",
      icon: "Star"
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "Reach Out via Call or WhatsApp",
      desc: "Connect instantly with our technical team. Tell us your current power problem, power outage duration, or solar rooftop requirements."
    },
    {
      step: "02",
      title: "Free Appliance Load & Site Assessment",
      desc: "We analyze your connected electrical load, roof orientation, and sunlight hours to provide an accurate, transparent, itemized quotation."
    },
    {
      step: "03",
      title: "Fast Delivery & Professional Installation",
      desc: "Our trained technicians deliver your battery, inverter, or solar modules, mount heavy-duty structures, and carry out safe wiring."
    },
    {
      step: "04",
      title: "Warranty Activation & Continuous Care",
      desc: "We stamp your manufacturer warranty card, perform safety earthing checks, and provide lifelong local after-sales support in Ghazipur."
    }
  ],

  gallery: [
    {
      title: "Residential Rooftop Solar Array",
      category: "Solar Installations",
      image: "/images/gallery/residential-rooftop-solar-panels.jpg",
      description: "High-efficiency rooftop solar module installation powering an entire home in Ghazipur."
    },
    {
      title: "Heavy-Duty Inverter Battery Bank",
      category: "Battery Storage",
      image: "/images/gallery/heavy-duty-inverter-battery-bank.jpg",
      description: "Commercial multi-battery bank setup for unbroken power backup during long load shedding."
    },
    {
      title: "Commercial On-Grid Solar Plant",
      category: "Solar Installations",
      image: "/images/gallery/commercial-on-grid-solar-installation.jpg",
      description: "Commercial establishment equipped with Net Metering to drastically cut daytime electricity bills."
    },
    {
      title: "Agricultural Solar Water Pumping System",
      category: "Agricultural Solar",
      image: "/images/gallery/agricultural-solar-water-pump-system.jpg",
      description: "VFD-driven solar water tubewell pump delivering uninterrupted irrigation for local farms."
    },
    {
      title: "Authorized Exide & Luminous Battery Stock",
      category: "Products & Stock",
      image: "/images/gallery/exide-luminous-battery-stock.jpg",
      description: "Fresh warehouse stock of factory-sealed tall tubular inverter batteries ready for immediate delivery."
    },
    {
      title: "Pure Sine Wave & Solar Hybrid Inverters",
      category: "Power Electronics",
      image: "/images/gallery/hybrid-solar-inverter-setup.jpg",
      description: "Advanced solar hybrid inverters configured for intelligent grid and battery balancing."
    },
    {
      title: "Chemical Earthing & Safety Protection Kit",
      category: "Electrical Safety",
      image: "/images/gallery/chemical-earthing-kit-installation.jpg",
      description: "Low-resistance copper-bonded earthing installation safeguarding solar panels and building wiring."
    },
    {
      title: "Pre-Wired Solar ACDB / DCDB Combiner Box",
      category: "Electrical Distribution",
      image: "/images/gallery/acdb-dcdb-distribution-box.jpg",
      description: "IP65 weatherproof protection boxes with surge protection devices (SPDs) and fast MCBs."
    }
  ],

  reviews: [
    {
      name: "Rameshwar Singh",
      location: "Mohammadabad, Ghazipur",
      rating: 5,
      date: "Verified Google Customer",
      review: "Best battery distributor in Ghazipur without a doubt. My inverter battery failed during peak summer power cuts. Sainik Electricals tested my old battery honestly, gave me the best exchange discount, and installed a brand new 220Ah tall tubular battery within 2 hours.",
      verified: true,
      serviceTag: "Inverter Battery Replacement"
    },
    {
      name: "Dr. Alok Verma",
      location: "Station Road, Yusufpur",
      rating: 5,
      date: "Verified Google Customer",
      review: "We installed a 5kW On-Grid solar rooftop system for our clinic. The technical team handled everything from the elevated GI structure to government Net Metering paperwork with the electricity board. Our monthly electricity bill dropped from ₹14,000 to under ₹1,800!",
      verified: true,
      serviceTag: "5kW Solar Rooftop System"
    },
    {
      name: "Chandan Yadav",
      location: "Kasimabad, Ghazipur",
      rating: 5,
      date: "Verified Local Reviewer",
      review: "Very cooperative and knowledgeable owner and staff. Most shops in the market only push sales, but Sainik Electricals actually calculated our load before recommending a Microtek sine wave inverter. Genuine products and immediate warranty card activation.",
      verified: true,
      serviceTag: "Pure Sine Wave Inverter"
    },
    {
      name: "Vijay Shankar Rai",
      location: "Ghazipur City",
      rating: 5,
      date: "Verified Trade Customer",
      review: "I have been buying electrical cables, MCBs, chemical earthing rods, and solar components for our building projects from Sainik Electricals. Their rates are true wholesale and the quality of copper wires is 100% genuine.",
      verified: true,
      serviceTag: "Electrical & Earthing Supplies"
    },
    {
      name: "Sanjay Kushwaha",
      location: "Zamania, Ghazipur",
      rating: 5,
      date: "Verified Google Customer",
      review: "Installed a solar tubewell pump system for our farm irrigation. Now we don't have to wait for midnight electricity to water our crops. Very sturdy installation and excellent service support.",
      verified: true,
      serviceTag: "Solar Water Pumping System"
    }
  ],

  faqs: [
    {
      question: "Which inverter battery is best suited for homes in Ghazipur?",
      answer: "For most residential households in Ghazipur facing frequent power cuts (3-6 hours daily), a 150Ah to 220Ah Tall Tubular battery (from Exide, Luminous, or Mtekpower) is ideal. Tall tubular batteries have thicker lead plates, higher electrolyte volume, handle deep discharges smoothly, and last 4 to 6 years with minimal water topping.",
      category: "Batteries"
    },
    {
      question: "Do you accept old dead batteries in exchange? What is the exchange value?",
      answer: "Yes, absolutely! We offer the highest exchange / scrap buyback value in Ghazipur for your old inverter, car, tractor, or bike batteries. The exchange discount is deducted immediately on your bill when purchasing a new battery.",
      category: "Batteries"
    },
    {
      question: "How much can I save by installing a Solar Rooftop System in Ghazipur?",
      answer: "A standard 3kW to 5kW On-Grid solar rooftop system can generate approximately 12 to 20 units (kWh) of clean electricity every sunny day. In Ghazipur, this typically cuts residential and commercial electricity bills by 80% to 90%, with the complete system paying for itself in approximately 3 to 4 years.",
      category: "Solar"
    },
    {
      question: "Do you assist with government subsidies and Net Metering approvals?",
      answer: "Yes. Our team handles the entire process: initial rooftop shadow analysis, technical documentation, Discom application, bidirectional Net Meter inspection, and grid synchronization so you can sell surplus power back to the grid.",
      category: "Solar"
    },
    {
      question: "What is the difference between an On-Grid and an Off-Grid solar system?",
      answer: "An On-Grid system is connected directly to the electricity grid without batteries; it saves maximum money via net metering but shuts off during power cuts for safety. An Off-Grid system includes a heavy battery bank to store solar power for night-time or load shedding. We also install Hybrid systems that offer the benefits of both.",
      category: "Solar"
    },
    {
      question: "Where is your store located and what are your opening hours?",
      answer: "Our main showroom and distribution depot is located Near Yusufpur Kotwali, Station Road, Yusufpur, Mohammadabad, Ghazipur (UP 233227). We are open Monday to Saturday from 9:30 AM to 8:30 PM, and open on Sundays from 10:00 AM to 4:00 PM with on-call emergency battery dispatch.",
      category: "General"
    },
    {
      question: "Do you deliver and install batteries and inverters at home?",
      answer: "Yes, we provide rapid doorstep delivery, safe installation, old battery pickup, and electrical terminal testing across Mohammadabad, Yusufpur, Ghazipur City, Kasimabad, Zamania, and surrounding areas.",
      category: "General"
    }
  ]
};

// Helper for generating clean WhatsApp click-to-chat links
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = businessConfig.whatsapp.number;
  const message = encodeURIComponent(customMessage || businessConfig.whatsapp.defaultMessage);
  return `https://wa.me/${phone}?text=${message}`;
}

// Helper for direct phone call links
export function getPhoneCallUrl(): string {
  return `tel:${businessConfig.phones.primary}`;
}

