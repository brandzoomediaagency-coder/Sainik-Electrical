/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: '#E31718',
            hover: '#C81314',
            light: '#FEF2F2',
            dark: '#991B1B',
          },
          amber: {
            DEFAULT: '#FCB608',
            hover: '#E5A507',
            light: '#FFFBEB',
            dark: '#B45309',
          },
          navy: {
            DEFAULT: '#0F172A',
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
            950: '#020617',
          },
          whatsapp: '#25D366',
          'whatsapp-dark': '#128C7E',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'brand-glow': '0 0 25px rgba(227, 23, 24, 0.15)',
        'amber-glow': '0 0 25px rgba(252, 182, 8, 0.2)',
        'premium': '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
        'premium-hover': '0 20px 40px -10px rgba(15, 23, 42, 0.15), 0 10px 15px -3px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
};

