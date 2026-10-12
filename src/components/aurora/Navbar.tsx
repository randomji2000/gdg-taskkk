"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#schedule", label: "Schedule" },
  { href: "#prizes", label: "Prizes" },
  { href: "#rules", label: "Rules" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cosmos/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group flex items-center gap-2">
            <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#5B4DE8] to-[#FFD3B6] glow-violet">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-tight aurora-text">
                AURORA HACKS
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                36
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-[#5B4DE8] to-[#FFD3B6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-[#5B4DE8] to-[#3D2BC9] hover:from-[#8B7FEF] hover:to-[#5B4DE8] text-white border-0"
            >
              <a href="#register">Register now</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-white/5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#5B4DE8] to-[#3D2BC9] text-white text-sm text-center font-medium"
            >
              Register now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
