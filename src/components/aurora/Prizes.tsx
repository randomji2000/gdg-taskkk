"use client";

import { Trophy, Sparkles, Gift, ArrowRight } from "lucide-react";
import { PRIZES } from "./data";
import { Button } from "@/components/ui/button";

export function Prizes() {
  return (
    <section id="prizes" className="relative py-24 sm:py-32">
      {/* Warm glow bg */}
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(255, 211, 182, 0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 50%, rgba(91, 77, 232, 0.25) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-apricot">
            <Trophy className="h-3 w-3" />
            Prizes &amp; rewards
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            <span className="aurora-text-warm">$15,000+</span> on the table.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Prizes are nice — but the real reward is what you ship. Still, we believe in
            putting our money where our mouths are. Cash, cloud credits, mentorship, and
            a stage to show your work to the people who can take it further.
          </p>
        </div>

        {/* Prize grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PRIZES.map((prize) => (
            <article
              key={prize.rank}
              className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 transition-all hover:-translate-y-1 ${
                prize.featured
                  ? "glass-card-warm border-[#FFD3B6]/30 glow-apricot lg:col-span-2"
                  : "glass-card hover:border-[#FFD3B6]/20"
              }`}
            >
              {prize.featured && (
                <>
                  <div
                    className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#5B4DE8]/40 to-[#FFD3B6]/30 blur-3xl"
                    aria-hidden
                  />
                  <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#5B4DE8] to-[#3D2BC9] px-3 py-1 text-xs font-medium text-white">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </div>
                </>
              )}
              <div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
                <div
                  className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl ${
                    prize.featured
                      ? "bg-gradient-to-br from-[#FFD3B6] to-[#FFB088] text-[#0E0A24]"
                      : "bg-gradient-to-br from-[#5B4DE8] to-[#3D2BC9] text-white glow-violet"
                  }`}
                >
                  <prize.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold">{prize.rank}</h3>
                  <div className="mt-2 text-3xl sm:text-4xl font-bold aurora-text-warm">
                    {prize.amount}
                  </div>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                    {prize.perks.map((perk, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-foreground/85"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#5B4DE8] to-[#FFD3B6]" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Participant swag banner */}
        <div className="mt-10 relative overflow-hidden rounded-3xl glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#FFD3B6] to-[#FFB088] text-[#0E0A24]">
              <Gift className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Every hacker gets the Aurora swag bundle.
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Tee, hoodie raffle ticket, sticker pack, and the legendary glow-in-the-dark
                wristband. Yes, even if you don't win anything.
              </p>
            </div>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-[#5B4DE8] to-[#3D2BC9] hover:from-[#8B7FEF] hover:to-[#5B4DE8] text-white border-0 shrink-0"
          >
            <a href="#register">
              Claim your swag
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
