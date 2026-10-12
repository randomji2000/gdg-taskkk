"use client";

import { Sparkles, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "./data";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/5 bg-cosmos-deep">
      <div className="absolute inset-0 -z-10 aurora-bg opacity-40" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[#5B4DE8] to-[#FFD3B6] glow-violet">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight aurora-text">
                  AURORA HACKS 36
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                  From dusk to dawn
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
              A 36-hour overnight hackathon organized by the Aurora Builders Club.
              Curiosity over credentials, community as a feature, and constraints that
              unlock creativity. See you under the violet sky.
            </p>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${s.name}: ${s.handle}`}
                  className="group inline-flex items-center gap-2 rounded-full glass-card px-3 py-1.5 text-xs text-muted-foreground hover:text-apricot transition-colors"
                >
                  <s.icon className="h-3.5 w-3.5" />
                  <span>{s.handle}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-apricot">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-apricot" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-apricot mt-0.5 shrink-0" />
                <span>{CONTACT_INFO.venue}</span>
              </li>
              <li className="text-muted-foreground">
                <span className="text-apricot">Discord:</span>{" "}
                {CONTACT_INFO.discord}
              </li>
            </ul>
          </div>

          {/* Sitemap column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-apricot">
              Sitemap
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#tracks", label: "Tracks" },
                { href: "#schedule", label: "Schedule" },
                { href: "#prizes", label: "Prizes" },
                { href: "#rules", label: "Rules" },
                { href: "#faq", label: "FAQ" },
                { href: "#register", label: "Register" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Aurora Hacks · Built with curiosity, fueled by apricot-colored coffee.
          </p>
          <p className="text-xs text-muted-foreground">
            Organized by the Aurora Builders Club · Made with Next.js &amp; shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
