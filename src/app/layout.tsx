import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurora Hacks 36 — From dusk to dawn, build the future.",
  description:
    "Aurora Hacks 36 is a 36-hour overnight hackathon where 500+ builders turn cosmic curiosity into shippable products. Four tracks, $15,000+ in prizes, mentorship from industry leaders.",
  keywords: [
    "hackathon",
    "36 hour hackathon",
    "Aurora Hacks",
    "student hackathon",
    "AI hackathon",
    "ultra violet",
    "soft apricot",
  ],
  authors: [{ name: "Aurora Hacks Organizing Committee" }],
  openGraph: {
    title: "Aurora Hacks 36",
    description:
      "From dusk to dawn, build the future. 36 hours. 4 tracks. 500 dreamers.",
    siteName: "Aurora Hacks 36",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Hacks 36",
    description:
      "From dusk to dawn, build the future. 36 hours. 4 tracks. 500 dreamers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
