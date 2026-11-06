'use client';

import { useState } from 'react';
import { Sun, Zap, TrendingUp, ArrowRight, MessageCircle, Calculator, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/business';

export default function SolarSavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<number>(4500);

  // Calculation formulas adapted for Ghazipur solar insolation (~4.5 peak sun hours)
  // Average electricity unit cost in UP: ~₹7.50 / unit
  const estimatedUnitsPerMonth = Math.round(monthlyBill / 7.5);
  const unitsPerDay = estimatedUnitsPerMonth / 30;
  
  // 1 kW solar generates ~4 to 4.5 units per day in Eastern UP
  const recommendedKw = Math.max(1, Math.round((unitsPerDay / 4) * 2) / 2);
  
  // Daily generation for recommended kW
  const dailyGenUnits = Math.round(recommendedKw * 4.2 * 10) / 10;
  const monthlyGenUnits = Math.round(dailyGenUnits * 30);
  
  // Monthly bill savings (approx 85-90% offset)
  const monthlySavings = Math.min(monthlyBill, Math.round(monthlyGenUnits * 7.5));
  const yearlySavings = monthlySavings * 12;
  const twentyFiveYearSavings = yearlySavings * 25;
  
  // Roof area: ~80 to 100 sq ft per kW
  const roofAreaRequired = Math.round(recommendedKw * 90);

  const customWhatsAppMsg = `Hello Sainik Electrical! I used your Solar Savings Calculator for my property in Ghazipur. My monthly electricity bill is approx ₹${monthlyBill.toLocaleString('en-IN')}. The calculator recommended a ${recommendedKw} kW Solar System. Please provide me a detailed quotation and subsidy details.`;

  return (
    <section
      id="solar-calculator"
      aria-labelledby="calculator-heading"
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-3">
            <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Smart Estimator</span>
          </span>
          <h2 id="calculator-heading" className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Calculate Your Solar Sizing &amp; Electricity Savings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Slide your average monthly electricity bill to see your recommended solar plant capacity, rooftop area required, and estimated lifetime savings in Ghazipur.
          </p>
        </div>

        {/* Interactive Estimator Container */}
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-800/90 border border-slate-700 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          
          {/* Slider Control */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <label htmlFor="bill-range" className="text-sm font-semibold text-slate-200">
                Your Average Monthly Electricity Bill:
              </label>
              <div className="inline-flex items-baseline gap-1 bg-slate-900 px-4 py-2 rounded-xl border border-slate-700">
                <span className="text-xs text-amber-400 font-bold">₹</span>
                <span className="text-2xl font-extrabold text-amber-400">
                  {monthlyBill.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
            </div>

            <input
              id="bill-range"
              type="range"
              min="1000"
              max="25000"
              step="500"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500 focus-visible:outline-amber-400"
              aria-label="Monthly electricity bill slider"
            />
            
            <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
              <span>₹1,000 (Small Home)</span>
              <span>₹5,000 (Family Home)</span>
              <span>₹12,000 (Heavy Inverter/AC)</span>
              <span>₹25,000+ (Commercial)</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-700/80 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold">Recommended Solar</span>
                <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
              </div>
              <p className="text-3xl font-extrabold text-white">
                {recommendedKw} <span className="text-base font-normal text-amber-400">kW</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Mono PERC / On-Grid or Hybrid
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-700/80 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold">Clean Energy Output</span>
                <Zap className="h-4 w-4 text-red-400" aria-hidden="true" />
              </div>
              <p className="text-3xl font-extrabold text-white">
                ~{dailyGenUnits} <span className="text-base font-normal text-slate-300">Units/Day</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Approx {monthlyGenUnits} units / month
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-700/80 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold">Yearly Bill Savings</span>
                <TrendingUp className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              </div>
              <p className="text-3xl font-extrabold text-emerald-400">
                ₹{yearlySavings.toLocaleString('en-IN')}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                ₹{(twentyFiveYearSavings / 100000).toFixed(1)} Lakhs in 25 years
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-700/80 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold">Rooftop Area Needed</span>
                <CheckCircle2 className="h-4 w-4 text-blue-400" aria-hidden="true" />
              </div>
              <p className="text-3xl font-extrabold text-white">
                ~{roofAreaRequired} <span className="text-base font-normal text-slate-300">sq.ft</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Shadow-free roof space
              </p>
            </div>

          </div>

          {/* Action Callout */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 p-6 border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white text-base">
                Ready to cut your electricity bill in Ghazipur?
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                Share this estimate with our solar engineer on WhatsApp for free shadow analysis &amp; subsidy guidance.
              </p>
            </div>

            <a
              href={getWhatsAppUrl(customWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-800 transition-all focus-visible:outline-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Get WhatsApp Quote ({recommendedKw} kW)</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
