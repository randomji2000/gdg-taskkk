"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function computeTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

type CountdownProps = {
  target: Date;
};

export function Countdown({ target }: CountdownProps) {
  // Lazy initializer computes once on initial render (server + client).
  // The suppressHydrationWarning flag below silences any SSR/CSR time drift.
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    computeTimeLeft(target),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(computeTimeLeft(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const segments = [
    { value: timeLeft.days, label: "days" },
    { value: timeLeft.hours, label: "hours" },
    { value: timeLeft.minutes, label: "minutes" },
    { value: timeLeft.seconds, label: "seconds" },
  ];

  return (
    <div
      className="flex items-stretch gap-2 sm:gap-3"
      aria-label="Time until Aurora Hacks 36 begins"
      role="timer"
    >
      {segments.map((seg, idx) => (
        <div key={seg.label} className="flex items-stretch gap-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center rounded-xl px-3 py-3 sm:px-5 sm:py-4 min-w-[68px] sm:min-w-[92px] glass-card">
            <span
              className="font-mono text-2xl sm:text-4xl font-bold tabular-nums aurora-text-warm"
              suppressHydrationWarning
            >
              {String(seg.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">
              {seg.label}
            </span>
          </div>
          {idx < segments.length - 1 && (
            <span className="self-center text-2xl sm:text-4xl font-bold aurora-text">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
