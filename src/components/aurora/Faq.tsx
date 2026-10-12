"use client";

import { HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { FAQ_ITEMS } from "./data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 aurora-bg opacity-30" aria-hidden />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-apricot">
            <HelpCircle className="h-3 w-3" />
            Frequently asked
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            Questions,{" "}
            <span className="aurora-text-warm">answered.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Can't find what you're looking for? Email{" "}
            <a
              href="mailto:hello@aurorahacks.dev"
              className="text-apricot hover:underline"
            >
              hello@aurorahacks.dev
            </a>{" "}
            or DM us on any platform — we usually reply within a day.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl glass-card overflow-hidden transition-all ${
                  isOpen ? "border-[#FFD3B6]/25" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-foreground">
                    {item.q}
                  </span>
                  <span className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-lg glass-card-warm">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-apricot" />
                    ) : (
                      <Plus className="h-4 w-4 text-apricot" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 -mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
