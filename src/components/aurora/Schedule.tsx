"use client";

import { useState } from "react";
import { SCHEDULE, type SchedulePhase } from "./data";

const CATEGORY_META: Record<
  SchedulePhase["category"],
  { label: string; dot: string; chip: string }
> = {
  milestone: {
    label: "Milestone",
    dot: "bg-gradient-to-br from-[#5B4DE8] to-[#3D2BC9]",
    chip: "bg-[#5B4DE8]/15 text-[#8B7FEF] border-[#5B4DE8]/30",
  },
  meal: {
    label: "Meal break",
    dot: "bg-gradient-to-br from-[#FFB088] to-[#FFD3B6]",
    chip: "bg-[#FFD3B6]/15 text-[#FFB088] border-[#FFD3B6]/30",
  },
  workshop: {
    label: "Workshop",
    dot: "bg-gradient-to-br from-[#8B7FEF] to-[#FFB088]",
    chip: "bg-[#8B7FEF]/15 text-[#8B7FEF] border-[#8B7FEF]/30",
  },
  fun: {
    label: "Fun break",
    dot: "bg-gradient-to-br from-[#FFD3B6] to-[#FFE8D6]",
    chip: "bg-[#FFE8D6]/15 text-[#FFD3B6] border-[#FFE8D6]/30",
  },
  deadline: {
    label: "Deadline",
    dot: "bg-red-400",
    chip: "bg-red-500/15 text-red-300 border-red-500/30",
  },
};

const FILTERS: { id: SchedulePhase["category"] | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "milestone", label: "Milestones" },
  { id: "workshop", label: "Workshops" },
  { id: "meal", label: "Meals" },
  { id: "fun", label: "Fun" },
  { id: "deadline", label: "Deadlines" },
];

export function Schedule() {
  const [filter, setFilter] = useState<SchedulePhase["category"] | "all">("all");

  const visible =
    filter === "all"
      ? SCHEDULE
      : SCHEDULE.filter((s) => s.category === filter);

  return (
    <section id="schedule" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 aurora-bg opacity-30" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-apricot">
            <span className="font-mono">36h</span>
            Timeline &amp; schedule
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            36 hours,{" "}
            <span className="aurora-text-warm">choreographed.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Aurora isn't just 36 hours of grinding. It's a designed rhythm — focus
            blocks, mentor office hours, meal breaks, and one gloriously chaotic
            midnight karaoke session. Here's how the weekend unfolds, hour by hour.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
                filter === f.id
                  ? "bg-gradient-to-r from-[#5B4DE8] to-[#3D2BC9] text-white glow-violet"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12 relative">
          {/* Vertical rail */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px aurora-divider" aria-hidden />

          <ol className="space-y-3">
            {visible.map((phase) => {
              const meta = CATEGORY_META[phase.category];
              return (
                <li
                  key={phase.hour}
                  className="relative pl-12 sm:pl-16 group"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-1.5 sm:left-3.5 top-5 h-4 w-4 rounded-full ring-4 ring-[#0E0A24] ${meta.dot}`}
                    aria-hidden
                  />
                  {/* Card */}
                  <article className="rounded-2xl glass-card p-5 sm:p-6 group-hover:border-[#FFD3B6]/25 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center h-10 w-10 shrink-0 rounded-xl glass-card-warm">
                          <phase.icon className="h-5 w-5 text-apricot" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono text-apricot/90">
                              H{String(phase.hour).padStart(2, "0")} · {phase.day} {phase.time}
                            </span>
                            <span
                              className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${meta.chip}`}
                            >
                              {meta.label}
                            </span>
                          </div>
                          <h3 className="mt-1 text-base sm:text-lg font-semibold">
                            {phase.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mini progress bar of 36h */}
        <div className="mt-12 rounded-2xl glass-card p-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Hour 0 · Check-in</span>
            <span className="font-mono text-apricot">36-hour arc</span>
            <span>Hour 36 · Pack up</span>
          </div>
          <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B4DE8] via-[#8B7FEF] to-[#FFD3B6]" />
            {/* Tick marks for milestones */}
            {SCHEDULE.filter((s) => s.category === "milestone").map((m) => (
              <span
                key={m.hour}
                className="absolute top-1/2 -translate-y-1/2 h-3 w-0.5 bg-white/60"
                style={{ left: `${(m.hour / 36) * 100}%` }}
                title={`${m.hour}h: ${m.title}`}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-muted-foreground/70">
            <span>Dusk · Sat 9am</span>
            <span>Midnight</span>
            <span>Dawn · Sun 7am</span>
            <span>Dusk · Sun 9pm</span>
          </div>
        </div>
      </div>
    </section>
  );
}
