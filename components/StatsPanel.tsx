"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const STATS_DATA = [
  {
    platform: "LeetCode",
    solved: 1156,
    rating: 1858,
    url: "https://leetcode.com/u/terminalwarlord/",
    color: "#ffa116",
  },
  {
    platform: "CodeForces",
    solved: 975,
    rating: 1160,
    url: "https://codeforces.com/profile/TerminalWarlord",
    color: "#1e88e5",
  },
  {
    platform: "CodeChef",
    solved: 170,
    rating: 1516,
    url: "https://www.codechef.com/users/jaybeeop",
    color: "#654321",
  },
  {
    platform: "AtCoder",
    solved: 50,
    rating: 294,
    url: "https://atcoder.jp/users/TerminalWarlord",
    color: "#00c853",
  },
  {
    platform: "CSES",
    solved: 20,
    rating: null,
    url: "https://cses.fi/user/112416",
    color: "#90a4ae",
  },
];

function AnimatedNumber({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsPanel() {
  return (
    <section id="stats" className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-10">
          <BarChart3 size={20} className="text-accent-green" />
          <h2 className="font-mono text-lg md:text-xl font-semibold text-text-primary">
            <span className="text-accent-green">$ </span>cat stats.json
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {STATS_DATA.map((stat) => (
            <a
              key={stat.platform}
              href={stat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 md:p-5 text-center hover:bg-bg-surface-2/50 transition-all duration-300 group"
            >
              {/* Solved count */}
              <div
                className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono transition-colors duration-300"
                style={{ color: stat.color }}
              >
                <AnimatedNumber value={stat.solved} suffix="+" />
              </div>

              {/* Platform name */}
              <p className="text-xs md:text-sm font-mono text-text-secondary mt-2 group-hover:text-text-primary transition-colors">
                {stat.platform}
              </p>

              {/* Rating */}
              {stat.rating && (
                <p className="text-[10px] md:text-xs text-text-muted mt-1">
                  Rating: {stat.rating}
                </p>
              )}
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
