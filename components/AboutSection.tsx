"use client";

import ScrollReveal from "./ScrollReveal";
import { Terminal } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-8">
          <Terminal size={20} className="text-accent-cyan" />
          <h2 className="font-mono text-lg md:text-xl font-semibold text-text-primary">
            <span className="text-accent-green">$ </span>cat about.md
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
        {/* Terminal window */}
        <ScrollReveal variant="left" className="md:col-span-3">
          <div className="glass rounded-xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 font-mono text-xs text-text-muted">
                joy-biswas@terminal:~$
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-5 md:p-6 space-y-3">
              <p className="font-mono text-sm text-text-secondary leading-relaxed">
                <span className="text-accent-green">$</span>{" "}
                <span className="text-accent-purple">cat</span> about.txt
              </p>
              <div className="space-y-4 font-mono text-xs sm:text-sm text-text-secondary/90 leading-relaxed">
                <p>
                  <span className="text-accent-cyan">Name:</span> Joy Biswas
                </p>
                <p>
                  <span className="text-accent-cyan">Alias:</span>{" "}
                  <span className="text-accent-purple">TerminalWarlord</span>
                </p>
                <p>
                  <span className="text-accent-cyan">Status:</span>{" "}
                  <span className="text-accent-green">Active</span>
                </p>
                <p>
                  <span className="text-accent-cyan">Bio:</span>{" "}
                  As a lifelong tech enthusiast with a deep passion for software
                  engineering, I thrive on building scalable solutions and solving
                  complex problems. With a strong foundation in competitive
                  programming, I&apos;m currently expanding my expertise in fullstack
                  development — pushing the boundaries of what technology can
                  achieve.
                </p>
              </div>
              <p className="font-mono text-xs text-text-muted mt-4 pt-3 border-t border-white/5">
                <span className="text-accent-green">✔</span> Process exited with
                status 0
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Quick Stats */}
        <ScrollReveal variant="right" className="md:col-span-2">
          <div className="space-y-4">
            <div className="glass rounded-xl p-5">
              <h3 className="font-mono text-sm text-text-primary mb-3 flex items-center gap-2">
                <span className="text-accent-cyan">◆</span> Quick Facts
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Location", value: "Chittagong, Bangladesh" },
                  { label: "Focus", value: "Fullstack Development" },
                  { label: "LeetCode", value: "1156+ Problems Solved" },
                ].map((fact) => (
                  <div key={fact.label}>
                    <p className="text-xs font-mono text-text-muted">
                      {fact.label}
                    </p>
                    <p className="text-sm text-text-primary">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-5">
              <h3 className="font-mono text-sm text-text-primary mb-3 flex items-center gap-2">
                <span className="text-accent-purple">◆</span> Current Focus
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Building efficient and accessible web applications with modern
                  technologies like React, Next.js, Node.js, and TypeScript.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
