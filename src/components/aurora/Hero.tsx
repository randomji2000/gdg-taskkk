"use client";

import { Sparkles, ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";

const HACKATHON_DATE = new Date("2026-11-14T10:00:00+08:00");

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden aurora-bg pt-28 pb-24 sm:pt-36 sm:pb-32"
    >
      {/* Starfield */}
      <div className="absolute inset-0 star-field opacity-50" aria-hidden />

      {/* Drifting orbs */}
      <div
        className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#5B4DE8]/40 blur-[100px] animate-drift"
        aria-hidden
      />
      <div
        className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-[#FFD3B6]/30 blur-[100px] animate-drift"
        style={{ animationDelay: "-5s" }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#3D2BC9]/50 blur-[120px] animate-drift"
        style={{ animationDelay: "-10s" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs sm:text-sm text-apricot animate-pulse-glow">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="font-medium tracking-wide">
              Nov 14 – 15, 2026 · Aurora Pavilion
            </span>
            <span className="hidden sm:inline text-muted-foreground">
              · 500 hackers
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
            <span className="block shimmer-text">AURORA</span>
            <span className="block mt-1 sm:mt-2">
              <span className="aurora-text-warm">HACKS </span>
              <span className="text-foreground/90">36</span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 max-w-2xl text-lg sm:text-2xl text-foreground/80 leading-relaxed">
            From dusk to dawn, build the future.{" "}
            <span className="text-apricot font-medium">
              36 hours. 4 tracks. 500 dreamers.
            </span>{" "}
            One overnight session to ship something the world has never seen.
          </p>

          {/* Countdown */}
          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Hacking begins in
            </p>
            <Countdown target={HACKATHON_DATE} />
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#5B4DE8] to-[#3D2BC9] hover:from-[#8B7FEF] hover:to-[#5B4DE8] text-white border-0 glow-violet text-base px-8 h-12"
            >
              <a href="#register" className="flex items-center gap-2">
                Reserve your spot
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#FFD3B6]/30 text-apricot hover:bg-[#FFD3B6]/10 hover:text-apricot text-base px-8 h-12"
            >
              <a href="#tracks">Explore the tracks</a>
            </Button>
          </div>

          {/* Meta strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-apricot" />
              Nov 14 – 15, 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-apricot" />
              Aurora Pavilion, Innovation District
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Applications open
            </span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="flex justify-center">
          <div className="h-9 w-5 rounded-full border border-muted-foreground/40 flex justify-center pt-1.5">
            <div className="h-2 w-1 rounded-full bg-apricot animate-scroll-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
