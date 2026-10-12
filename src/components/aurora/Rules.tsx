"use client";

import { ShieldCheck } from "lucide-react";
import { RULES } from "./data";

export function Rules() {
  return (
    <section id="rules" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 aurora-bg opacity-30" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-apricot">
            <ShieldCheck className="h-3 w-3" />
            Rules &amp; guidelines
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            The rules are short.{" "}
            <span className="aurora-text-warm">Read them.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Aurora is built on trust. We don't patrol your repos for infractions — we trust
            you to honor the spirit of the event. The rules below exist to keep the playing
            field level and the vibe intact. When in doubt, ask an organizer.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {RULES.map((group) => (
            <article
              key={group.category}
              className="relative overflow-hidden rounded-3xl glass-card p-8 hover:border-[#FFD3B6]/20 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#5B4DE8] to-[#3D2BC9] text-white glow-violet">
                  <group.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{group.category}</h3>
              </div>
              <ul className="mt-6 space-y-5">
                {group.rules.map((rule) => (
                  <li key={rule.title} className="border-l-2 border-[#FFD3B6]/30 pl-4">
                    <h4 className="text-sm font-semibold text-foreground">
                      {rule.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {rule.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Conduct callout */}
        <div className="mt-10 rounded-3xl glass-card-warm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[#FFD3B6] to-[#FFB088] text-[#0E0A24] shrink-0">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p className="text-sm text-foreground/85 leading-relaxed">
            <span className="font-semibold text-apricot">Code of Conduct, in one sentence:</span>{" "}
            Be excellent to each other. Harassment, discrimination, or disrespect of any kind
            results in immediate removal — no warnings, no exceptions. The full{" "}
            <a
              href="https://hackcodeofconduct.org/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#FFD3B6]/40 hover:decoration-[#FFD3B6]"
            >
              Hack Code of Conduct
            </a>{" "}
            applies.
          </p>
        </div>
      </div>
    </section>
  );
}
