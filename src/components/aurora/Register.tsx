"use client";

import { useState } from "react";
import { Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { TRACKS } from "./data";

export function Register() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    toast({
      title: "You're on the list.",
      description:
        "Check your inbox for confirmation. We'll reach out with onboarding details closer to Nov 14.",
    });
  };

  return (
    <section id="register" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Cosmic backdrop */}
      <div className="absolute inset-0 -z-10 aurora-bg" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-gradient-to-r from-[#5B4DE8]/40 via-[#8B7FEF]/30 to-[#FFD3B6]/30 blur-[120px] animate-pulse-glow"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl aurora-border">
          <div className="absolute inset-0 aurora-bg opacity-80" aria-hidden />
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left: pitch */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-apricot">
                  <Rocket className="h-3 w-3" />
                  Reserve your spot
                </div>
                <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
                  See you under the{" "}
                  <span className="aurora-text-warm">violet sky.</span>
                </h2>
                <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Applications close Sunday, Nov 1, 2026 at 23:59 local time. Spots are
                  limited to 500 hackers and we review every application individually —
                  we read your prompts, not just your résumé.
                </p>

                <ul className="mt-8 space-y-3 text-sm">
                  {[
                    "Free admission — meals, swag, and venue all covered.",
                    "Travel micro-grants available on a need basis.",
                    "Beginner-friendly — first-timers explicitly welcome.",
                    "Decisions sent within 5 business days of applying.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-apricot" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: form / success */}
              <div className="rounded-2xl glass-card-warm p-6 sm:p-8">
                {done ? (
                  <div className="text-center py-10">
                    <div className="mx-auto inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-[#5B4DE8] to-[#3D2BC9] text-white glow-violet">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold">
                      Application received.
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      You're on the Aurora Hacks 36 list. Watch your inbox — we'll be in
                      touch within 5 business days with next steps, your hacker portal
                      link, and the team-mixer RSVP.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 border-[#FFD3B6]/30 text-apricot hover:bg-[#FFD3B6]/10 hover:text-apricot"
                      onClick={() => setDone(false)}
                    >
                      Submit another application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/85">
                        Full name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Ada Lovelace"
                        className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/85">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="ada@engschool.edu"
                        className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="track" className="text-foreground/85">
                        Preferred track
                      </Label>
                      <Select name="track" required>
                        <SelectTrigger className="bg-white/5 border-white/10 text-foreground">
                          <SelectValue placeholder="Pick the closest fit" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#07051A] border-white/10">
                          {TRACKS.map((t) => (
                            <SelectItem
                              key={t.id}
                              value={t.id}
                              className="text-foreground focus:bg-[#5B4DE8]/30"
                            >
                              {t.name}
                            </SelectItem>
                          ))}
                          <SelectItem
                            value="undecided"
                            className="text-foreground focus:bg-[#5B4DE8]/30"
                          >
                            Undecided — help me choose
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idea" className="text-foreground/85">
                        What do you want to build?{" "}
                        <span className="text-muted-foreground">(optional)</span>
                      </Label>
                      <Textarea
                        id="idea"
                        name="idea"
                        rows={3}
                        placeholder="One sentence is fine. Two is great. Five is too many."
                        className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/60 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-12 bg-gradient-to-r from-[#5B4DE8] to-[#3D2BC9] hover:from-[#8B7FEF] hover:to-[#5B4DE8] text-white border-0 glow-violet text-base"
                    >
                      {submitting ? (
                        "Submitting…"
                      ) : (
                        <>
                          Apply to Aurora Hacks 36
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                      By applying, you agree to the Aurora Hacks Code of Conduct and
                      acknowledge that admission decisions are final.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
