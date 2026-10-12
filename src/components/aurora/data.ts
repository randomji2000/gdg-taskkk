import {
  Brain,
  Leaf,
  HeartPulse,
  GraduationCap,
  Trophy,
  Sparkles,
  Rocket,
  Code,
  Users,
  Coffee,
  Moon,
  Sunrise,
  Sun,
  Sunset,
  Utensils,
  Lightbulb,
  Mic,
  CalendarClock,
  Award,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Clock,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export type Track = {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  prompts: string[];
  accent: string; // tailwind gradient classes
  glow: string;
};

export const TRACKS: Track[] = [
  {
    id: "ai",
    name: "AI & Machine Intelligence",
    icon: Brain,
    tagline: "Build the brains.",
    description:
      "From large language model agents to computer vision pipelines, this track is for builders hacking at the frontier of machine intelligence. Ship products that perceive, reason, and act in the world.",
    prompts: [
      "An LLM-powered study companion that adapts to your learning pace",
      "A multimodal accessibility assistant for blind and low-vision users",
      "A small-business automation agent that handles email triage end-to-end",
      "A real-time code review copilot for open-source maintainers",
    ],
    accent: "from-[#5B4DE8] to-[#8B7FEF]",
    glow: "shadow-[0_0_60px_-15px_rgba(91,77,232,0.7)]",
  },
  {
    id: "climate",
    name: "Climate & Sustainability",
    icon: Leaf,
    tagline: "Heal the planet.",
    description:
      "Climate change is the defining challenge of our generation. Build tools that reduce emissions, accelerate the energy transition, enable circular economies, or mobilize collective action at planetary scale.",
    prompts: [
      "A community-owned solar microgrid marketplace",
      "An AI supply-chain decarbonization co-pilot for SMB manufacturers",
      "A gamified household carbon tracker with social accountability",
      "A satellite-image pipeline that flags illegal logging in near-real-time",
    ],
    accent: "from-[#FFB088] to-[#FFD3B6]",
    glow: "shadow-[0_0_60px_-15px_rgba(255,176,136,0.7)]",
  },
  {
    id: "health",
    name: "Health & Wellbeing",
    icon: HeartPulse,
    tagline: "Care, redesigned.",
    description:
      "Healthcare should be accessible, dignified, and human. Build products that improve patient outcomes, support mental wellbeing, expand access to care, or augment the clinicians and caregivers who hold it all together.",
    prompts: [
      "A voice-first dementia companion for early-stage patients",
      "A peer-support matching network for first-year medical residents",
      "A non-invasive atrial-fibrillation detector using smartphone cameras",
      "A medication-adherence companion for chronic care patients",
    ],
    accent: "from-[#8B7FEF] to-[#FFB088]",
    glow: "shadow-[0_0_60px_-15px_rgba(139,127,239,0.7)]",
  },
  {
    id: "future",
    name: "Future of Work & Education",
    icon: GraduationCap,
    tagline: "Reimagine how we learn and earn.",
    description:
      "Work and learning are being rewritten in real time. Build the tools, platforms, and pedagogies that help people collaborate, learn, and create across distance, language, and skill level.",
    prompts: [
      "An AR-assisted apprenticeship platform for skilled trades",
      "A real-time multilingual co-pilot for distributed engineering teams",
      "A portfolio-first credentialing network for self-taught developers",
      "A focus-and-flow toolkit designed for neurodivergent students",
    ],
    accent: "from-[#5B4DE8] to-[#FFD3B6]",
    glow: "shadow-[0_0_60px_-15px_rgba(255,211,182,0.7)]",
  },
];

export type SchedulePhase = {
  hour: number;
  day: string;
  time: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: "milestone" | "meal" | "workshop" | "fun" | "deadline";
};

export const SCHEDULE: SchedulePhase[] = [
  {
    hour: 0,
    day: "Sat",
    time: "09:00",
    title: "Check-in opens",
    description:
      "Pick up your wristband, swag bag, and find your team a spot on the floor. Coffee is on.",
    icon: Users,
    category: "milestone",
  },
  {
    hour: 1,
    day: "Sat",
    time: "10:00",
    title: "Opening Ceremony",
    description:
      "Welcome from the Aurora Hacks crew. Track briefings, mentor intros, and the kickoff talk by our keynote speaker.",
    icon: Sparkles,
    category: "milestone",
  },
  {
    hour: 2,
    day: "Sat",
    time: "11:00",
    title: "Team Mixer & Ideation",
    description:
      "Haven't found a team yet? Rotate through our facilitated mixer. Bring an idea, find co-conspirators, or join an existing crew.",
    icon: Users,
    category: "milestone",
  },
  {
    hour: 3,
    day: "Sat",
    time: "12:00",
    title: "Hacking begins",
    description:
      "Clock starts. You now have 33 hours of pure build time. Push to your team's repo and claim your project page on the Aurora portal.",
    icon: Rocket,
    category: "milestone",
  },
  {
    hour: 5,
    day: "Sat",
    time: "14:00",
    title: "Workshop: Intro to LLM Agents",
    description:
      "A hands-on primer on building reliable LLM agents — tool use, function calling, evals. Beginner-friendly, no prior ML required.",
    icon: Lightbulb,
    category: "workshop",
  },
  {
    hour: 8,
    day: "Sat",
    time: "17:00",
    title: "Dinner break",
    description:
      "Hot meal from local vendors — vegetarian, vegan, and halal options available. Stretch your legs, swap ideas with the table next to you.",
    icon: Utensils,
    category: "meal",
  },
  {
    hour: 10,
    day: "Sat",
    time: "19:00",
    title: "Mentor Office Hours (Round 1)",
    description:
      "Sign up for 15-minute slots with mentors from partner companies. Bring your blockers, get unblocked. First-come, first-served.",
    icon: Lightbulb,
    category: "workshop",
  },
  {
    hour: 13,
    day: "Sat",
    time: "22:00",
    title: "Late-night energy boost",
    description:
      "Espresso bar reopens, snacks refilled. Quiet hours begin in the focus zone — keep the vibe respectful for the deep-work crowd.",
    icon: Coffee,
    category: "meal",
  },
  {
    hour: 16,
    day: "Sun",
    time: "01:00",
    title: "Midnight karaoke + smash tourney",
    description:
      "Optional decompression in the lounge. Sing badly, lose at Smash, recharge your brain. No coding allowed in this room.",
    icon: Sparkles,
    category: "fun",
  },
  {
    hour: 19,
    day: "Sun",
    time: "04:00",
    title: "Pre-dawn silence",
    description:
      "The deepest focus block of the night. Mentor table closes; organizers keep watch quietly. Push commits, document your work.",
    icon: Moon,
    category: "milestone",
  },
  {
    hour: 22,
    day: "Sun",
    time: "07:00",
    title: "Sunrise yoga & breakfast",
    description:
      "Gentle 20-minute stretch on the rooftop, then a full breakfast spread. Re-center before the final sprint.",
    icon: Sunrise,
    category: "meal",
  },
  {
    hour: 25,
    day: "Sun",
    time: "10:00",
    title: "Mid-point checkpoint",
    description:
      "Submit a 30-second Loom describing what you have so far. Mentors give structured feedback. Course-correct here, not at hour 32.",
    icon: CalendarClock,
    category: "milestone",
  },
  {
    hour: 28,
    day: "Sun",
    time: "13:00",
    title: "Lunch & sponsor booth crawl",
    description:
      "Long lunch break. Visit sponsor booths in the lobby — many are recruiting actively. Bring resumes, leave with stickers.",
    icon: Utensils,
    category: "meal",
  },
  {
    hour: 30,
    day: "Sun",
    time: "15:00",
    title: "Workshop: Pitching 101",
    description:
      "A 45-minute crash course on demo storytelling from a YC alum. What to show, what to skip, how to land the moment that matters.",
    icon: Mic,
    category: "workshop",
  },
  {
    hour: 32,
    day: "Sun",
    time: "17:00",
    title: "Soft deadline — code freeze in 1 hour",
    description:
      "Last call to wrap up features. Use this hour to write your README, record your demo video, and clean up your repo.",
    icon: AlertCircle,
    category: "deadline",
  },
  {
    hour: 33,
    day: "Sun",
    time: "18:00",
    title: "HARD DEADLINE — submissions close",
    description:
      "Repos locked, project pages locked. No exceptions. Take a breath. You did it.",
    icon: CheckCircle2,
    category: "deadline",
  },
  {
    hour: 34,
    day: "Sun",
    time: "19:00",
    title: "Demo Expo & Judging",
    description:
      "Set up at your team's table. Judges rotate in 4-minute windows. Bring laptops charged, demos warmed up, smiles ready.",
    icon: Rocket,
    category: "milestone",
  },
  {
    hour: 35,
    day: "Sun",
    time: "20:00",
    title: "Closing Ceremony & Awards",
    description:
      "Track winners announced. Grand prize. Special-category awards. Group photo. Tears optional but encouraged.",
    icon: Trophy,
    category: "milestone",
  },
  {
    hour: 36,
    day: "Sun",
    time: "21:00",
    title: "Pack up & goodbyes",
    description:
      "Tear down your station, leave the floor better than you found it. Hug your teammates. Exchange contacts. Go sleep.",
    icon: Sunset,
    category: "milestone",
  },
];

export type PrizeTier = {
  rank: string;
  amount: string;
  perks: string[];
  icon: LucideIcon;
  featured?: boolean;
};

export const PRIZES: PrizeTier[] = [
  {
    rank: "Grand Prize — Aurora Champion",
    amount: "$3,000",
    perks: [
      "Featured demo slot at the post-event showcase",
      "1:1 mentorship session with two VC partners",
      "Lifetime Aurora Hacks Legend badge",
      "Cloud credits bundle ($2,500 value)",
    ],
    icon: Trophy,
    featured: true,
  },
  {
    rank: "Track Winner (×4)",
    amount: "$1,500 each",
    perks: [
      "Cash prize per winning team",
      "Showcase slot on the Aurora portal",
      "Mentor intro to a domain specialist",
      "Premium swag upgrade",
    ],
    icon: Award,
  },
  {
    rank: "Runner-up",
    amount: "$500",
    perks: [
      "Cash prize per runner-up team",
      "Aurora Hacks finalist badge",
      "Cloud credits bundle ($500 value)",
    ],
    icon: Award,
  },
  {
    rank: "Special Awards",
    amount: "$250 each",
    perks: [
      "Best Design — for the team that made it beautiful",
      "Best Beginner Hack — first-time hackers only",
      "Most WTF Hack — the gloriously weird one",
      "People's Choice — voted by all participants",
    ],
    icon: Sparkles,
  },
];

export type Rule = {
  category: string;
  icon: LucideIcon;
  rules: { title: string; detail: string }[];
};

export const RULES: Rule[] = [
  {
    category: "Team & Eligibility",
    icon: Users,
    rules: [
      {
        title: "Team size: 2 to 5",
        detail:
          "Solo hacking is discouraged — find at least one teammate at the mixer. Teams may not exceed 5 members total. Cross-school and cross-discipline teams are encouraged.",
      },
      {
        title: "All code must be written on-site",
        detail:
          "You may use open-source libraries, public APIs, and your existing boilerplate (e.g. personal starter templates), but the project itself must be conceived and built during the 36-hour window.",
      },
      {
        title: "No pre-existing projects",
        detail:
          "You cannot continue work on a project that existed before the opening ceremony. Reusing your dotfiles or starter kit is fine; resuming last semester's side project is not.",
      },
    ],
  },
  {
    category: "Conduct & Safety",
    icon: ShieldCheck,
    rules: [
      {
        title: "Follow the Code of Conduct",
        detail:
          "Be excellent to each other. Harassment, discrimination, or any form of disrespect will result in immediate removal. We enforce the standard Hack Code of Conduct, linked on your project dashboard.",
      },
      {
        title: "Respect quiet hours",
        detail:
          "The focus zone enforces quiet hours from 22:00 to 07:00. Use the lounge for high-energy work. Use the focus zone for deep work. Both are equally valid.",
      },
      {
        title: "Sleep is a feature",
        detail:
          "Pushing past 24 hours awake demonstrably hurts your output. Take the nap. Eat the meal. Walk around the block. We provide a quiet sleep lounge with eye masks and earplugs.",
      },
    ],
  },
  {
    category: "Submissions & IP",
    icon: Code,
    rules: [
      {
        title: "Submit by the hard deadline",
        detail:
          "Submissions close at Hour 33 (Sun 18:00 sharp). Late submissions are not accepted under any circumstances. Push early and often; the last 5 minutes are chaos.",
      },
      {
        title: "Open-source your project",
        detail:
          "All projects must include a public GitHub link and a README by submission time. You retain full IP ownership — open-sourcing here is just for transparency and judging.",
      },
      {
        title: "Demo length: 4 minutes max",
        detail:
          "Demo slots are strictly timed. Plan for 3 minutes of demo + 1 minute of Q&A with judges. Practice your cut. Rehearse the click-path. We will ring a bell.",
      },
    ],
  },
  {
    category: "Logistics",
    icon: Clock,
    rules: [
      {
        title: "Bring a laptop + charger",
        detail:
          "Power strips and Ethernet drops are at every table. Wi-Fi is provided but Ethernet is recommended for serious work. Bring headphones, a hoodie, and a water bottle.",
      },
      {
        title: "Hardware hacks welcome",
        detail:
          "An MLH-style hardware lab is available with Arduinos, Raspberry Pis, sensors, and 3D printers. Reserve specific components at the hardware desk during check-in.",
      },
      {
        title: " judging & criteria",
        detail:
          "Projects are scored on four weighted criteria: Technical Difficulty (30%), Creativity & Originality (30%), Execution & Polish (20%), Demo Quality (20%). Scores are normalized across judges.",
      },
    ],
  },
];

export const SOCIAL_LINKS = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", handle: "@aurorahacks" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", handle: "@aurorahacks36" },
  { name: "GitHub", icon: Github, href: "https://github.com", handle: "aurora-hacks" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", handle: "aurora-hacks-36" },
] as const;

export const CONTACT_INFO = {
  email: "hello@aurorahacks.dev",
  discord: "discord.gg/aurorahacks",
  venue: "Aurora Pavilion, 36 Lyra Lane, Innovation District",
};

export const STATS = [
  { value: "36", label: "Hours of building" },
  { value: "500+", label: "Hackers expected" },
  { value: "4", label: "Hackathon tracks" },
  { value: "$15K+", label: "In prizes" },
];

export const FAQ_ITEMS = [
  {
    q: "Do I need to come with a team?",
    a: "Nope. The Hour 2 Team Mixer is designed for exactly this — show up solo and we'll help you find a crew. About 40% of participants arrive without a team and end up on the winning projects more often than not.",
  },
  {
    q: "Is there an application or registration fee?",
    a: "Admission is free for all accepted hackers. We review applications to keep the cohort balanced across tracks and skill levels, but we don't charge a fee. Travel reimbursements are available on a need basis — apply through your dashboard.",
  },
  {
    q: "What if I've never been to a hackathon before?",
    a: "Perfect. Aurora Hacks is beginner-friendly by design. We run intro workshops, pair first-timers with experienced mentors, and reserve a Best Beginner Hack prize just for you. Imposter syndrome is normal here — push through it.",
  },
  {
    q: "Can I work on something outside the four tracks?",
    a: "Yes. The four tracks are guidance, not cages. You'll select a primary track for judging purposes, but many of the best projects live at the intersection of two or more. Pick the closest fit; judges will follow.",
  },
  {
    q: "Is there a hardware lab?",
    a: "Yes — an MLH-style hardware library with Arduinos, Raspberry Pi 5 units, sensors, and two Bambu 3D printers. Reserve specific components during check-in; first-come, first-served.",
  },
  {
    q: "What about food and sleep?",
    a: "All meals from Saturday breakfast through Sunday dinner are provided, with vegetarian, vegan, halal, and gluten-free options at every meal. A dedicated quiet sleep lounge runs 22:00 to 07:00 with eye masks, earplugs, and cots.",
  },
];
