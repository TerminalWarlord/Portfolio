"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import TerminalText from "./TerminalText";

const ROLES = [
  "Software Engineer",
  "Fullstack Developer",
  "Problem Solver",
  "Competitive Programmer",
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 bg-gradient-sphere pointer-events-none" />

      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent-cyan/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-purple/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Terminal intro */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-xs md:text-sm text-text-secondary">
            <span className="text-accent-green">$</span> system: ready for deployment
          </span>
        </div>

        {/* Name */}
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">Joy Biswas</span>
        </h1>

        {/* Roles — terminal style */}
        <div
          className={`flex items-center justify-center gap-2 mb-6 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-sm md:text-base text-accent-green hidden sm:inline">
            const role =
          </span>
          <span className="font-mono text-sm md:text-base text-accent-purple hidden sm:inline">
            &quot;
          </span>
          <TerminalText
            lines={ROLES}
            prefix=""
            className="text-lg sm:text-xl md:text-2xl font-mono font-semibold"
            speed={80}
            loop
          />
          <span className="font-mono text-sm md:text-base text-accent-purple hidden sm:inline">
            &quot;;
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`max-w-xl mx-auto text-sm sm:text-base md:text-lg text-text-secondary/80 mb-10 transition-all duration-700 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Building efficient, scalable, and accessible web applications with
          modern technologies.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 transition-all duration-700 delay-800 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={scrollToAbout}
            className="group flex items-center gap-2.5 px-6 py-3 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
          >
            <span className="font-mono text-sm text-accent-green group-hover:text-accent-cyan transition-colors">$</span>
            <span className="font-mono text-sm text-text-primary group-hover:text-accent-cyan transition-colors">
              explore my work
            </span>
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2.5 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white/[0.04]"
          >
            <span className="font-mono text-sm text-text-muted group-hover:text-accent-green transition-colors">$</span>
            <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors">
              get in touch
            </span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors animate-float"
        aria-label="Scroll to see more"
      >
        <span className="font-mono text-xs">Scroll</span>
        <ChevronDown size={16} />
      </button>
    </section>
  );
}
