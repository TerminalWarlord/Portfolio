"use client";

import ScrollReveal from "./ScrollReveal";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineEntry {
  role: string;
  organization: string;
  duration: string;
  description: string;
  type: "work" | "education";
  stacks?: string[];
}

const EXPERIENCE: TimelineEntry[] = [
  {
    role: "Backend Developer (Intern)",
    organization: "6SenseHQ",
    duration: "May 2026 — Present",
    description:
      "Contributing to the development of 6SenseHQ's Human Resource System (HRS), focusing on the Leave Management module. Building and maintaining scalable backend services, designing APIs, implementing business logic, and working with database models using NestJS, TypeScript, and MongoDB.",
    type: "work",
    stacks: ["TypeScript", "Nest.JS", "Node.js", "MongoDB", "Mongoose"],
  }
];

const EDUCATION: TimelineEntry[] = [
  {
    role: "Bachelor of Science in Computer Science",
    organization: "Premier University, Chittagong",
    duration: "2020 — Present",
    description:
      "Developing strong expertise across core CS subjects including Data Structures & Algorithms, Computer Networks, DBMS, OOP, Machine Learning, and AI.",
    type: "education",
  },
  {
    role: "Higher Secondary Certificate (Science)",
    organization: "Bakalia Government College",
    duration: "2017 — 2019",
    description:
      "Completed HSC in the Science stream, building a strong foundation in mathematics and analytical thinking.",
    type: "education",
  },
];

const allEntries = [...EXPERIENCE, ...EDUCATION];

function extractYear(duration: string): string {
  const match = duration.match(/(\d{4})/);
  return match ? match[1] : "";
}

export default function Timeline() {
  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-10">
          <Briefcase size={20} className="text-accent-purple" />
          <h2 className="font-mono text-lg md:text-xl font-semibold text-text-primary">
            <span className="text-accent-green">$ </span>ls experience/
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-accent-purple/40 to-transparent" />

        <div className="space-y-10">
          {allEntries.map((entry, index) => (
            <ScrollReveal
              key={index}
              variant={index % 2 === 0 ? "left" : "right"}
              delay={index * 100}
            >
              <div
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#0a0c14] border-2 border-accent-cyan -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_8px_rgba(0,229,255,0.3)]" />

                {/* Spacer for alignment on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content card */}
                <article className="relative ml-10 md:ml-0 md:w-1/2">
                  <div className="glass rounded-xl p-5 md:p-6 hover:bg-bg-surface-2/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-2 rounded-lg ${entry.type === "work"
                            ? "bg-accent-cyan/10 text-accent-cyan"
                            : "bg-accent-purple/10 text-accent-purple"
                          }`}
                      >
                        {entry.type === "work" ? (
                          <Briefcase size={16} />
                        ) : (
                          <GraduationCap size={16} />
                        )}
                      </div>
                      <div>
                        <h3 className="font-mono text-sm font-semibold text-text-primary">
                          {entry.role}
                        </h3>
                        <p className="font-mono text-xs text-text-muted">
                          {entry.organization}
                        </p>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <time
                      dateTime={extractYear(entry.duration)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-text-secondary mb-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                      {entry.duration}
                    </time>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {entry.description}
                    </p>

                    {/* Stacks */}
                    {entry.stacks && entry.stacks.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {entry.stacks.map((stack) => (
                          <span key={stack} className="stack-tag">
                            {stack}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
