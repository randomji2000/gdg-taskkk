"use client";

import { useState } from "react";
import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  UserPlus,
  Trash2,
  Users,
  Crown,
  AlertCircle,
} from "lucide-react";
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
import {
  TRACKS,
  TEAM_ROLES,
  MAX_TEAM_SIZE,
} from "./data";

type Member = {
  id: string;
  name: string;
  email: string;
  role: string;
  affiliation: string;
};

let memberCounter = 0;
function makeMember(isLead = false): Member {
  memberCounter += 1;
  return {
    // Deterministic ID for the lead so SSR + client render match.
    // Subsequent members use a monotonic counter — only created after user
    // interaction, so no hydration concern.
    id: isLead ? "m-lead" : `m-${memberCounter}`,
    name: "",
    email: "",
    role: "",
    affiliation: "",
  };
}

const TEAM_PERKS_LIST = [
  "Free admission — meals, swag, and venue all covered for every member.",
  "Travel micro-grants available on a need basis.",
  "Beginner-friendly — first-timers explicitly welcome.",
  "Decisions sent within 5 business days of applying.",
];

export function Register() {
  // Start with one member — the team lead (cannot be removed).
  // Pass isLead=true so the lead gets a deterministic ID (no SSR hydration mismatch).
  const [members, setMembers] = useState<Member[]>(() => [makeMember(true)]);
  const [teamName, setTeamName] = useState("");
  const [track, setTrack] = useState("");
  const [idea, setIdea] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const updateMember = (id: string, field: keyof Member, value: string) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m)),
    );
  };

  const addMember = () => {
    if (members.length >= MAX_TEAM_SIZE) return;
    setMembers((prev) => [...prev, makeMember()]);
  };

  const removeMember = (id: string) => {
    if (members.length <= 1) return;
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const validate = (): string | null => {
    if (!teamName.trim()) return "Please name your team.";
    if (!track) return "Please pick a track.";
    for (let i = 0; i < members.length; i++) {
      const m = members[i];
      const label = i === 0 ? "Team Lead" : `Member ${i + 1}`;
      if (!m.name.trim()) return `${label} needs a name.`;
      if (!m.email.trim()) return `${label} needs an email.`;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email))
        return `${label}'s email doesn't look right.`;
      if (!m.role) return `${label} needs a role.`;
    }
    return null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      toast({
        title: "Hold up.",
        description: err,
        variant: "destructive",
      });
      return;
    }
    setError(null);
    setSubmitting(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    toast({
      title: "Team registered.",
      description: `${teamName} (${members.length} ${
        members.length === 1 ? "member" : "members"
      }) is on the Aurora Hacks 36 list.`,
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
          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
              {/* Left: pitch */}
              <div className="lg:col-span-2 lg:sticky lg:top-24">
                <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-apricot">
                  <Rocket className="h-3 w-3" />
                  Register your team
                </div>
                <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
                  See you under the{" "}
                  <span className="aurora-text-warm">violet sky.</span>
                </h2>
                <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Bring your crew — register as a team of up to{" "}
                  <span className="text-apricot font-semibold">
                    {MAX_TEAM_SIZE} members
                  </span>
                  . The first member is your Team Lead and our primary contact. Solo?
                  That's a one-person team, totally fine.
                </p>

                <ul className="mt-8 space-y-3 text-sm">
                  {TEAM_PERKS_LIST.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-apricot" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl glass-card p-4 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Team size</span>
                    <span className="font-mono text-apricot">
                      {members.length} / {MAX_TEAM_SIZE}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#5B4DE8] to-[#FFD3B6] transition-all"
                      style={{
                        width: `${(members.length / MAX_TEAM_SIZE) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right: form / success */}
              <div className="lg:col-span-3 rounded-2xl glass-card-warm p-6 sm:p-8">
                {done ? (
                  <div className="text-center py-10">
                    <div className="mx-auto inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-[#5B4DE8] to-[#3D2BC9] text-white glow-violet">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold">
                      Team{" "}
                      <span className="aurora-text-warm">
                        {teamName || "Anonymous"}
                      </span>{" "}
                      registered.
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      You're on the Aurora Hacks 36 list with{" "}
                      <span className="text-foreground font-semibold">
                        {members.length}{" "}
                        {members.length === 1 ? "member" : "members"}
                      </span>
                      . Watch your inbox — we'll reach out within 5 business days
                      with onboarding details and the team-mixer RSVP.
                    </p>
                    <div className="mt-6 rounded-xl glass-card p-4 text-left">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        Recap
                      </p>
                      <ul className="space-y-1.5 text-sm">
                        <li className="flex justify-between gap-4">
                          <span className="text-muted-foreground">Team</span>
                          <span className="text-foreground font-medium">
                            {teamName}
                          </span>
                        </li>
                        <li className="flex justify-between gap-4">
                          <span className="text-muted-foreground">Track</span>
                          <span className="text-foreground font-medium">
                            {TRACKS.find((t) => t.id === track)?.name ??
                              "Undecided"}
                          </span>
                        </li>
                        <li className="flex justify-between gap-4">
                          <span className="text-muted-foreground">Members</span>
                          <span className="text-foreground font-medium">
                            {members.map((m) => m.name).join(", ")}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Button
                      variant="outline"
                      className="mt-6 border-[#FFD3B6]/30 text-apricot hover:bg-[#FFD3B6]/10 hover:text-apricot"
                      onClick={() => {
                        setDone(false);
                        setMembers([makeMember(true)]);
                        setTeamName("");
                        setTrack("");
                        setIdea("");
                      }}
                    >
                      Register another team
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    {/* Team block */}
                    <fieldset className="space-y-4">
                      <legend className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-apricot">
                        <Users className="h-3.5 w-3.5" />
                        Team info
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="teamName" className="text-foreground/85">
                            Team name
                          </Label>
                          <Input
                            id="teamName"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            required
                            placeholder="e.g. Comet Catchers"
                            className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/60"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="track" className="text-foreground/85">
                            Preferred track
                          </Label>
                          <Select value={track} onValueChange={setTrack} required>
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
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="idea" className="text-foreground/85">
                          What do you want to build?{" "}
                          <span className="text-muted-foreground">(optional)</span>
                        </Label>
                        <Textarea
                          id="idea"
                          value={idea}
                          onChange={(e) => setIdea(e.target.value)}
                          rows={2}
                          placeholder="One sentence is fine. Two is great. Five is too many."
                          className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/60 resize-none"
                        />
                      </div>
                    </fieldset>

                    {/* Members block */}
                    <fieldset className="space-y-3">
                      <legend className="flex items-center justify-between w-full">
                        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-apricot">
                          <Users className="h-3.5 w-3.5" />
                          Team members{" "}
                          <span className="font-mono text-muted-foreground normal-case tracking-normal">
                            ({members.length}/{MAX_TEAM_SIZE})
                          </span>
                        </span>
                        {members.length < MAX_TEAM_SIZE && (
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={addMember}
                            className="h-8 px-3 text-xs border-[#FFD3B6]/30 text-apricot hover:bg-[#FFD3B6]/10 hover:text-apricot"
                          >
                            <UserPlus className="h-3.5 w-3.5 mr-1.5" />
                            Add member
                          </Button>
                        )}
                      </legend>

                      <div className="space-y-3">
                        {members.map((m, i) => {
                          const isLead = i === 0;
                          return (
                            <article
                              key={m.id}
                              className="relative rounded-2xl glass-card p-4 sm:p-5"
                            >
                              <header className="flex items-center justify-between mb-3">
                                <span
                                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                                    isLead
                                      ? "bg-gradient-to-r from-[#5B4DE8] to-[#3D2BC9] text-white"
                                      : "glass-card-warm text-apricot"
                                  }`}
                                >
                                  {isLead ? (
                                    <>
                                      <Crown className="h-3 w-3" />
                                      Team Lead
                                    </>
                                  ) : (
                                    <>Member {i + 1}</>
                                  )}
                                </span>
                                {!isLead && (
                                  <Button
                                    type="button"
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => removeMember(m.id)}
                                    className="h-8 px-2 text-muted-foreground hover:text-red-300 hover:bg-red-500/10"
                                    aria-label={`Remove member ${i + 1}`}
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </Button>
                                )}
                              </header>

                              <div className="grid sm:grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                  <Label
                                    htmlFor={`${m.id}-name`}
                                    className="text-xs text-muted-foreground"
                                  >
                                    Full name
                                  </Label>
                                  <Input
                                    id={`${m.id}-name`}
                                    value={m.name}
                                    onChange={(e) =>
                                      updateMember(m.id, "name", e.target.value)
                                    }
                                    required
                                    placeholder={
                                      isLead ? "Ada Lovelace" : "Grace Hopper"
                                    }
                                    className="h-9 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/60 text-sm"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <Label
                                    htmlFor={`${m.id}-email`}
                                    className="text-xs text-muted-foreground"
                                  >
                                    Email
                                  </Label>
                                  <Input
                                    id={`${m.id}-email`}
                                    type="email"
                                    value={m.email}
                                    onChange={(e) =>
                                      updateMember(m.id, "email", e.target.value)
                                    }
                                    required
                                    placeholder="ada@engschool.edu"
                                    className="h-9 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/60 text-sm"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <Label
                                    htmlFor={`${m.id}-role`}
                                    className="text-xs text-muted-foreground"
                                  >
                                    Primary role
                                  </Label>
                                  <Select
                                    value={m.role}
                                    onValueChange={(v) =>
                                      updateMember(m.id, "role", v)
                                    }
                                    required
                                  >
                                    <SelectTrigger
                                      id={`${m.id}-role`}
                                      className="h-9 bg-white/5 border-white/10 text-foreground text-sm"
                                    >
                                      <SelectValue placeholder="Pick a role" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#07051A] border-white/10">
                                      {TEAM_ROLES.map((r) => (
                                        <SelectItem
                                          key={r.id}
                                          value={r.id}
                                          className="text-foreground focus:bg-[#5B4DE8]/30"
                                        >
                                          <div className="flex flex-col">
                                            <span className="text-sm">
                                              {r.label}
                                            </span>
                                            <span className="text-[10px] text-muted-foreground">
                                              {r.hint}
                                            </span>
                                          </div>
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="space-y-1.5">
                                  <Label
                                    htmlFor={`${m.id}-aff`}
                                    className="text-xs text-muted-foreground"
                                  >
                                    School / Org &amp; year{" "}
                                    <span className="text-muted-foreground/60">
                                      (optional)
                                    </span>
                                  </Label>
                                  <Input
                                    id={`${m.id}-aff`}
                                    value={m.affiliation}
                                    onChange={(e) =>
                                      updateMember(
                                        m.id,
                                        "affiliation",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Engschool, 3rd year"
                                    className="h-9 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/60 text-sm"
                                  />
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>

                      {members.length >= MAX_TEAM_SIZE && (
                        <p className="text-xs text-muted-foreground text-center pt-1">
                          You've hit the max team size of {MAX_TEAM_SIZE}. To
                          register more hackers, submit this team and start a new
                          registration.
                        </p>
                      )}
                    </fieldset>

                    {error && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200"
                      >
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Hold up.</p>
                          <p className="text-red-200/85 mt-0.5">{error}</p>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-12 bg-gradient-to-r from-[#5B4DE8] to-[#3D2BC9] hover:from-[#8B7FEF] hover:to-[#5B4DE8] text-white border-0 glow-violet text-base"
                    >
                      {submitting ? (
                        "Submitting…"
                      ) : (
                        <>
                          Register {members.length}{" "}
                          {members.length === 1 ? "member" : "members"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                      By applying, you agree to the Aurora Hacks Code of Conduct
                      and acknowledge that admission decisions are final.
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
