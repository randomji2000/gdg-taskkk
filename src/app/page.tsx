import { Navbar } from "@/components/aurora/Navbar";
import { Hero } from "@/components/aurora/Hero";
import { About } from "@/components/aurora/About";
import { Tracks } from "@/components/aurora/Tracks";
import { Schedule } from "@/components/aurora/Schedule";
import { Prizes } from "@/components/aurora/Prizes";
import { Rules } from "@/components/aurora/Rules";
import { Faq } from "@/components/aurora/Faq";
import { Register } from "@/components/aurora/Register";
import { Footer } from "@/components/aurora/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-cosmos text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Tracks />
        <Schedule />
        <Prizes />
        <Rules />
        <Faq />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
