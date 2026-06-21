"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <p className="font-mono text-sm text-text-muted">
            <span className="text-accent-cyan">~</span>
            <span className="text-text-secondary">/tw</span>
          </p>

          {/* Built with */}
          <p className="text-xs text-text-muted flex items-center gap-1.5">
            Built with
            <Heart size={12} className="text-red-400 fill-red-400" />
            using
            <span className="text-text-secondary">Next.js</span>
            <span className="text-text-muted">&amp;</span>
            <span className="text-text-secondary">Tailwind CSS</span>
          </p>

          {/* Copyright */}
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Joy Biswas
          </p>
        </div>
      </div>
    </footer>
  );
}
