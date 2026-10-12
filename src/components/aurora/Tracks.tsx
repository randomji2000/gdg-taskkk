"use client";

import { useState } from "react";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import { TRACKS } from "./data";
import { Button } from "@/components/ui/button";

export function Tracks() {
  const [activeId, setActiveId] = useState<string>(TRACKS[0].id);
  const active = TRACKS.find((t) => t.id === activeId) ?? TRACKS[0];

  return (
    <section id="tracks" className="relative py-24 sm:py-32">
      {/* Bg accent */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(91, 77, 232, 0.25) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-apricot">
              <Lightbulb className="h-3 w-3" />
              Hackathon tracks
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Four domains.{" "}
              <span className="aurora-text-warm">One wild weekend.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Pick a track to anchor your build — or mash two together and judge at the
              edges. Each track has starter prompts, mentor partners, and a dedicated
              prize. The tracks are guidance, not cages.
            </p>
          </div>
          <div className="hidden md:block">
            <Button
              asChild
              variant="outline"
              className="border-[#FFD3B6]/30 text-apricot hover:bg-[#FFD3B6]/10 hover:text-apricot"
            >
              <a href="#register">Pick a track & register</a>
            </Button>
          </div>
        </div>

        {/* Track tabs */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRACKS.map((track) => {
            const isActive = track.id === activeId;
            return (
              <button
                key={track.id}
                onClick={() => setActiveId(track.id)}
                className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
                  isActive
                    ? "glass-card-warm scale-[1.02] " + track.glow
                    : "glass-card hover:scale-[1.01]"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br ${track.accent} text-white`}
                >
                  <track.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold leading-tight">
                  {track.name}
                </h3>
                <p className="mt-1 text-xs text-apricot/80">{track.tagline}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {isActive ? "Active" : "View track"}
                  <ArrowUpRight
                    className={`h-3 w-3 transition-transform ${
                      isActive ? "translate-x-0.5 -translate-y-0.5" : ""
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active track detail */}
        <div className="mt-10 grid lg:grid-cols-5 gap-8 items-start">
          <article className="lg:col-span-3 relative overflow-hidden rounded-3xl glass-card-warm p-8 sm:p-10">
            <div
              className={`absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br ${active.accent} opacity-30 blur-3xl`}
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-center gap-4">
                <div
                  className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${active.accent} text-white shadow-xl`}
                >
                  <active.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-apricot">
                    Track {TRACKS.findIndex((t) => t.id === active.id) + 1}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-1">
                    {active.name}
                  </h3>
                </div>
              </div>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                {active.description}
              </p>
              <p className="mt-4 text-sm italic text-apricot/80">
                {active.tagline}
              </p>
            </div>
          </article>

          <aside className="lg:col-span-2 space-y-4">
            <div className="rounded-3xl glass-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <Lightbulb className="h-3.5 w-3.5 text-apricot" />
                Starter prompts
              </div>
              <ul className="mt-5 space-y-3">
                {active.prompts.map((prompt, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#5B4DE8] to-[#FFD3B6]" />
                    <span className="text-foreground/85">{prompt}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pt-5 border-t border-white/10 text-xs text-muted-foreground">
                These are starting points — feel free to diverge. The best Aurora
                projects rarely start from a brief.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
