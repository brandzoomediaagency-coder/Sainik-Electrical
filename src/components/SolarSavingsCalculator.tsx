'use client';

import { useState } from 'react';
import {
  Sun,
  Zap,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  Calculator,
  CheckCircle2,
  BatteryCharging,
  Fan,
  Lightbulb,
  Tv,
  Refrigerator,
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/business';

export default function SolarSavingsCalculator() {
  const [activeTab, setActiveTab] = useState<'solar' | 'inverter'>('solar');

  // --- Solar Sizing State ---
  const [monthlyBill, setMonthlyBill] = useState<number>(4500);

  // Solar calculations
  const estimatedUnitsPerMonth = Math.round(monthlyBill / 7.5);
  const unitsPerDay = estimatedUnitsPerMonth / 30;
  const recommendedKw = Math.max(1, Math.round((unitsPerDay / 4) * 2) / 2);
  const dailyGenUnits = Math.round(recommendedKw * 4.2 * 10) / 10;
  const monthlyGenUnits = Math.round(dailyGenUnits * 30);
  const monthlySavings = Math.min(monthlyBill, Math.round(monthlyGenUnits * 7.5));
  const yearlySavings = monthlySavings * 12;
  const twentyFiveYearSavings = yearlySavings * 25;
  const roofAreaRequired = Math.round(recommendedKw * 90);

  const customWhatsAppSolarMsg = `Hello Sainik Electrical! I used your Solar Savings Calculator for my property in Ghazipur. My monthly electricity bill is approx ₹${monthlyBill.toLocaleString('en-IN')}. The calculator recommended a ${recommendedKw} kW Solar System. Please provide me a detailed quotation and subsidy details.`;

  // --- Inverter Sizing State ---
  const [fans, setFans] = useState<number>(3); // 75W each
  const [lights, setLights] = useState<number>(4); // 10W each
  const [hasTv, setHasTv] = useState<boolean>(true); // 100W
  const [hasFridge, setHasFridge] = useState<boolean>(false); // 200W

  const totalWattage =
    fans * 75 + lights * 10 + (hasTv ? 100 : 0) + (hasFridge ? 200 : 0);

  // Sizing inverter
  const requiredVa = Math.round(totalWattage / 0.8);
  let recommendedInverter = '900VA Pure Sine Wave';
  let recommendedBattery = '150Ah Tall Tubular';
  let batteryWh = 1440; // 150Ah @ 12V effective

  if (requiredVa > 1200) {
    recommendedInverter = '1500VA - 2000VA Heavy Duty (24V System)';
    recommendedBattery = '2 x 150Ah or 2 x 200Ah Batteries';
    batteryWh = 2880;
  } else if (requiredVa > 800) {
    recommendedInverter = '1100VA - 1250VA Pure Sine Wave (12V System)';
    recommendedBattery = '200Ah or 220Ah Tall Tubular';
    batteryWh = 1920;
  }

  // Backup duration (hours)
  const estimatedBackupHours =
    totalWattage > 0 ? (batteryWh / totalWattage).toFixed(1) : '12+';

  const customWhatsAppInverterMsg = `Hello Sainik Electrical! I calculated my home inverter requirements on your website: ${fans} Fans, ${lights} Lights, TV: ${hasTv ? 'Yes' : 'No'}, Fridge: ${hasFridge ? 'Yes' : 'No'} (Total ~${totalWattage}W). Recommended: ${recommendedInverter} with ${recommendedBattery}. Please share prices for Exide/Luminous setups and old battery exchange value.`;

  return (
    <section
      id="solar-calculator"
      aria-labelledby="calculator-heading"
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background glow contained within overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-3">
            <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Interactive Power Estimator</span>
          </span>
          <h2
            id="calculator-heading"
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Calculate Your Solar Sizing &amp; Battery Backup Needs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Tailored algorithms built specifically for power conditions and solar insolation in Ghazipur and Eastern UP.
          </p>
        </div>

        {/* Tab Selection: Fully Responsive */}
        <div className="flex justify-center mb-8 sm:mb-10 px-2" role="tablist" aria-label="Calculator Modes">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 w-full max-w-lg rounded-2xl bg-slate-800 p-1.5 border border-slate-700 shadow-xl">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'solar'}
              onClick={() => setActiveTab('solar')}
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'solar'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Sun className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Solar Rooftop &amp; Savings</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'inverter'}
              onClick={() => setActiveTab('inverter')}
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'inverter'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <BatteryCharging className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Inverter &amp; Battery Backup</span>
            </button>
          </div>
        </div>

        {/* --- TAB 1: SOLAR SIZING --- */}
        {activeTab === 'solar' && (
          <div className="mx-auto max-w-4xl rounded-3xl bg-slate-800/90 border border-slate-700 p-6 sm:p-10 shadow-2xl backdrop-blur-md animate-fadeIn">
            {/* Slider Control */}
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <label
                  htmlFor="bill-range"
                  className="text-sm font-semibold text-slate-200"
                >
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
                <span>₹12,000 (Heavy Load)</span>
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
                <p className="text-[11px] text-slate-400 mt-1">Mono PERC Modules</p>
              </div>

              <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-700/80 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-semibold">Daily Energy Output</span>
                  <Zap className="h-4 w-4 text-red-400" aria-hidden="true" />
                </div>
                <p className="text-3xl font-extrabold text-white">
                  ~{dailyGenUnits} <span className="text-base font-normal text-slate-300">Units/Day</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-1">Approx {monthlyGenUnits} units / month</p>
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
                <p className="text-[11px] text-slate-400 mt-1">Shadow-free roof space</p>
              </div>
            </div>

            {/* Action Callout */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 p-6 border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-white text-base">
                  Ready to cut your electricity bill in Ghazipur?
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Send this calculation to our solar team on WhatsApp for free shadow analysis &amp; Net Metering advice.
                </p>
              </div>

              <a
                href={getWhatsAppUrl(customWhatsAppSolarMsg)}
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
        )}

        {/* --- TAB 2: INVERTER & BATTERY SIZING --- */}
        {activeTab === 'inverter' && (
          <div className="mx-auto max-w-4xl rounded-3xl bg-slate-800/90 border border-slate-700 p-6 sm:p-10 shadow-2xl backdrop-blur-md animate-fadeIn">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-400" aria-hidden="true" />
              <span>Select Your Essential Power Outage Appliances</span>
            </h3>

            {/* Appliance Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Ceiling Fans */}
              <div className="rounded-2xl bg-slate-900/90 p-4 border border-slate-700 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold mb-2">
                  <Fan className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  <span>Ceiling Fans (75W)</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <button
                    type="button"
                    onClick={() => setFans(Math.max(1, fans - 1))}
                    className="h-10 w-10 rounded-xl bg-slate-800 text-white font-extrabold text-lg hover:bg-slate-700 flex items-center justify-center active:scale-95 transition-transform"
                    aria-label="Decrease fans"
                  >
                    -
                  </button>
                  <span className="text-2xl font-extrabold text-white">{fans}</span>
                  <button
                    type="button"
                    onClick={() => setFans(Math.min(8, fans + 1))}
                    className="h-10 w-10 rounded-xl bg-slate-800 text-white font-extrabold text-lg hover:bg-slate-700 flex items-center justify-center active:scale-95 transition-transform"
                    aria-label="Increase fans"
                  >
                    +
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 mt-2 text-center">{fans * 75} Watts total</span>
              </div>

              {/* LED Lights */}
              <div className="rounded-2xl bg-slate-900/90 p-4 border border-slate-700 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold mb-2">
                  <Lightbulb className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  <span>LED Bulbs (10W)</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <button
                    type="button"
                    onClick={() => setLights(Math.max(1, lights - 1))}
                    className="h-10 w-10 rounded-xl bg-slate-800 text-white font-extrabold text-lg hover:bg-slate-700 flex items-center justify-center active:scale-95 transition-transform"
                    aria-label="Decrease lights"
                  >
                    -
                  </button>
                  <span className="text-2xl font-extrabold text-white">{lights}</span>
                  <button
                    type="button"
                    onClick={() => setLights(Math.min(15, lights + 1))}
                    className="h-10 w-10 rounded-xl bg-slate-800 text-white font-extrabold text-lg hover:bg-slate-700 flex items-center justify-center active:scale-95 transition-transform"
                    aria-label="Increase lights"
                  >
                    +
                  </button>
                </div>
                <span className="text-[10px] text-slate-500 mt-2 text-center">{lights * 10} Watts total</span>
              </div>

              {/* TV / Entertainment */}
              <div
                onClick={() => setHasTv(!hasTv)}
                className={`cursor-pointer rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                  hasTv
                    ? 'bg-slate-900/90 border-amber-500/80 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/40 border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold mb-2">
                  <Tv className="h-4 w-4 text-purple-400" aria-hidden="true" />
                  <span>TV &amp; Wi-Fi Router</span>
                </div>
                <div className="text-center my-2">
                  <span className={`text-base font-bold ${hasTv ? 'text-amber-400' : 'text-slate-500'}`}>
                    {hasTv ? 'Included (100W)' : 'Excluded'}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 text-center">Click to toggle</span>
              </div>

              {/* Refrigerator */}
              <div
                onClick={() => setHasFridge(!hasFridge)}
                className={`cursor-pointer rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                  hasFridge
                    ? 'bg-slate-900/90 border-amber-500/80 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/40 border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold mb-2">
                  <Refrigerator className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  <span>Refrigerator</span>
                </div>
                <div className="text-center my-2">
                  <span className={`text-base font-bold ${hasFridge ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {hasFridge ? 'Included (200W)' : 'Excluded'}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 text-center">Click to toggle</span>
              </div>
            </div>

            {/* Sizing Recommendations Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="rounded-2xl bg-slate-900 p-5 border border-slate-700/80">
                <span className="text-xs text-slate-400 font-medium block">Total Running Load</span>
                <p className="text-3xl font-extrabold text-amber-400 mt-1">
                  {totalWattage} <span className="text-base font-normal text-slate-300">Watts</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-1">Peak load requirement</p>
              </div>

              <div className="rounded-2xl bg-slate-900 p-5 border border-slate-700/80">
                <span className="text-xs text-slate-400 font-medium block">Recommended Inverter</span>
                <p className="text-lg font-bold text-white mt-1 leading-snug">
                  {recommendedInverter}
                </p>
                <p className="text-[11px] text-emerald-400 mt-1">Microtek / Luminous Pure Sine Wave</p>
              </div>

              <div className="rounded-2xl bg-slate-900 p-5 border border-slate-700/80">
                <span className="text-xs text-slate-400 font-medium block">Battery &amp; Backup Hours</span>
                <p className="text-2xl font-extrabold text-emerald-400 mt-1">
                  ~{estimatedBackupHours} <span className="text-sm font-normal text-slate-300">Hours</span>
                </p>
                <p className="text-[11px] text-slate-300 mt-1 font-semibold">{recommendedBattery}</p>
              </div>
            </div>

            {/* Action Callout */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 p-6 border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-white text-base">
                  Get Wholesale Rates &amp; Old Battery Exchange in Ghazipur
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Send this {totalWattage}W appliance calculation on WhatsApp for instant brand comparison and doorstep delivery quote.
                </p>
              </div>

              <a
                href={getWhatsAppUrl(customWhatsAppInverterMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-800 transition-all focus-visible:outline-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Get WhatsApp Price ({totalWattage}W Load)</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
