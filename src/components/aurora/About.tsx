"use client";

import { Sparkles, Compass, Zap, Heart } from "lucide-react";
import { STATS } from "./data";

const PILLARS = [
  {
    icon: Compass,
    title: "Curiosity over credentials",
    description:
      "We don't care where you go to school or what's on your résumé. We care that you showed up curious and willing to build something you've never built before. Aurora Hacks is built for the question-askers, the tinkerers, and the quietly obsessed.",
  },
  {
    icon: Zap,
    title: "Constraints unlock creativity",
    description:
      "36 hours is brutal and that's the point. Without time to over-architect, you ship the thing that matters. Without permission to be perfect, you become useful. Aurora is a forcing function for the work you've been putting off.",
  },
  {
    icon: Heart,
    title: "Community as a feature",
    description:
      "Half of what you take home from Aurora isn't code — it's the people. You'll meet your next co-founder, your next hire, your next friend. We engineer the mixer, the mentor hours, and the late-night chaos to make those collisions inevitable.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 aurora-bg opacity-30" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-apricot">
            <Sparkles className="h-3 w-3" />
            About the hackathon
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            An overnight where{" "}
            <span className="aurora-text-warm">impossible</span> ships.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Aurora Hacks is a 36-hour hackathon built around a single belief: that the
            most ambitious things get built when constraints, community, and a little bit
            of sleep deprivation converge. We invite 500 hackers — students, dropouts,
            self-taught builders, and seasoned engineers alike — to spend one weekend
            turning an idea into something that runs. The theme, <span className="text-apricot">"From Dusk to
            Dawn,"</span> isn't just a tagline: it's the actual arc of the weekend. You
            arrive at sunrise, build through the violet-blue deep night, and ship as the
            apricot light returns.
          </p>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl glass-card p-6 text-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B4DE8]/10 to-[#FFD3B6]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold aurora-text-warm tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Three pillars */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl glass-card p-8 hover:border-[#FFD3B6]/30 transition-all hover:-translate-y-1"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-[#5B4DE8]/30 to-[#FFD3B6]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#5B4DE8] to-[#3D2BC9] text-white glow-violet">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Manifesto block */}
        <div className="mt-20 relative overflow-hidden rounded-3xl aurora-border p-8 sm:p-14">
          <div className="absolute inset-0 aurora-bg opacity-50" aria-hidden />
          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-apricot">
              The Aurora Manifesto
            </p>
            <blockquote className="mt-6 text-2xl sm:text-3xl font-medium leading-snug text-foreground">
              <span className="text-muted-foreground">&ldquo;</span>
              We are not here to grind for résumé bullets. We are here because somewhere
              between the second coffee and the third commit, the world quietly stops
              feeling impossible.{" "}
              <span className="aurora-text-warm">
                Build the thing. Then build yourself.
              </span>
              <span className="text-muted-foreground">&rdquo;</span>
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">
              — The Aurora Hacks Organizing Committee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
