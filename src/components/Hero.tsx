'use client';

import { useState, useRef } from 'react';
import { Star, MessageCircle, Phone, ShieldCheck, Zap, ArrowRight, RefreshCw, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { businessConfig, getWhatsAppUrl, getPhoneCallUrl } from '@/config/business';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <section
      id="home"
      aria-label="Welcome to Sainik Electrical & Electronics"
      className="relative overflow-hidden bg-slate-900 pt-6 pb-14 lg:pt-16 lg:pb-24 text-white"
    >
      {/* Background Cinematic Solar Video Header with Scrim */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/12842821-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-25 filter contrast-125 brightness-90"
        >
          <source src="/videos/12842821_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        <div className="absolute top-0 right-0 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Value Proposition & High Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Verified Google Rating Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start rounded-full bg-slate-800/90 border border-slate-700/80 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-slate-200 backdrop-blur-md mb-4 sm:mb-6">
              <span className="flex text-amber-400" role="img" aria-label="5 out of 5 stars rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" aria-hidden="true" />
                ))}
              </span>
              <span className="font-bold text-amber-400">4.9 / 5.0</span>
              <span className="text-slate-400" aria-hidden="true">|</span>
              <span className="text-slate-300 truncate">Google Verified Distributor</span>
            </div>

            {/* Main H1 - Clear, Specific, Customer-focused */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Power Your Home &amp; Business with Ghazipur&apos;s{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-amber-300">
                #1 Battery &amp; Solar Distributor
              </span>
            </h1>

            {/* Sub-statement */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Authorized wholesale &amp; retail distributor of <strong className="text-white font-semibold">Exide, Luminous, and Microtek</strong> tubular batteries, pure sine wave inverters, and turnkey rooftop solar power systems. Trusted across Mohammadabad, Yusufpur, and greater Ghazipur with guaranteed manufacturer warranty and top scrap exchange value.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href={getWhatsAppUrl(businessConfig.whatsapp.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-950/40 transition-all hover:bg-emerald-800 hover:scale-[1.02] focus-visible:outline-white"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Instant WhatsApp Enquiry</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={getPhoneCallUrl()}
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-slate-700 bg-slate-800/80 px-6 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-slate-700 hover:border-slate-600 focus-visible:outline-amber-400"
              >
                <Phone className="h-5 w-5 text-amber-400" aria-hidden="true" />
                <span>Call {businessConfig.phones.primaryDisplay}</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-white block">100% Genuine</span>
                  <span className="text-slate-400">Company Warranty</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <RefreshCw className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-white block">Best Buyback</span>
                  <span className="text-slate-400">Old Battery Exchange</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Zap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-white block">Fast Delivery</span>
                  <span className="text-slate-400">Ghazipur &amp; Surrounds</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual - Video Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="relative rounded-2xl bg-gradient-to-tr from-red-600/40 via-slate-700 to-amber-500/40 p-1 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl bg-slate-950 aspect-[4/3] sm:aspect-[4/3] group">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    poster="/videos/header-video-poster.jpg"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src="/videos/2249554-uhd_3840_2160_24fps.mp4" type="video/mp4" />
                  </video>

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/30 pointer-events-none" />

                  {/* Top badges & Controls */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                    <div className="bg-slate-900/90 backdrop-blur-md rounded-lg px-3 py-1.5 border border-slate-700/80 text-[11px] font-semibold text-amber-300 flex items-center gap-1.5 shadow-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span>Solar Rooftop &amp; Battery Hub</span>
                    </div>

                    {/* Interactive Play/Pause & Mute controls */}
                    <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md rounded-lg p-1 border border-slate-700/70 shadow-md">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="h-7 w-7 rounded-md bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors focus-visible:outline-white"
                        aria-label={isPlaying ? 'Pause header video' : 'Play header video'}
                      >
                        {isPlaying ? (
                          <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <Play className="h-3.5 w-3.5 fill-current ml-0.5" aria-hidden="true" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={toggleMute}
                        className="h-7 w-7 rounded-md bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors focus-visible:outline-white"
                        aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                      >
                        {isMuted ? (
                          <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Location & Open Status Pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 backdrop-blur-md rounded-lg p-3 border border-slate-800 text-xs flex items-center justify-between shadow-lg">
                    <div>
                      <p className="font-bold text-white text-sm">Sainik Electrical &amp; Electronics</p>
                      <p className="text-slate-300 text-[11px]">Station Road, Near Yusufpur Kotwali, Mohammadabad</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded bg-emerald-500/20 text-emerald-300 px-2 py-0.5 font-bold text-[10px]">
                        OPEN TODAY
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating feature chip */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 hidden sm:flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-xl text-slate-900 border border-slate-100">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-bold">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Heavy Inverter Batteries</p>
                  <p className="text-[11px] text-slate-600">Exide • Luminous • Microtek</p>
                </div>
              </div>

              {/* Floating solar chip */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-xl bg-emerald-700 px-3.5 py-2 text-white shadow-xl text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                <span>Net-Metering Ready Solar</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

