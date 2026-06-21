"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectLink {
  title: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath?: string;
  links: ProjectLink[];
  stacks: string[];
}

export default function ProjectCard({
  title,
  description,
  imagePath,
  links,
  stacks,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const githubLinks = links.filter(
    (l) => l.title.toLowerCase().includes("github") || l.url.includes("github")
  );
  const demoLinks = links.filter(
    (l) => !l.title.toLowerCase().includes("github")
  );

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass rounded-xl overflow-hidden group hover:bg-bg-surface-2/40 hover:border-accent-cyan/20 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] transition-all duration-300 h-full flex flex-col"
    >
      {/* Image */}
      {imagePath && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={imagePath}
            alt={`${title} — project by Joy Biswas featuring ${stacks.join(", ")}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent opacity-60" />
        </div>
      )}

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        {/* Title */}
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-base md:text-lg font-semibold text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
            {title}
          </h3>
          {isHovered && (
            <ArrowUpRight
              size={16}
              className="text-accent-cyan transition-all duration-300"
            />
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tech stacks */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {stacks.map((stack) => (
            <span key={stack} className="stack-tag text-[10px] sm:text-xs">
              {stack}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto">
          {demoLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:text-white hover:bg-accent-cyan/15 px-2.5 py-1.5 rounded-md transition-all duration-200"
            >
              <ArrowUpRight size={14} />
              {link.title}
            </Link>
          ))}
          {githubLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-text-primary hover:bg-white/5 px-2.5 py-1.5 rounded-md transition-all duration-200"
            >
              <Github size={14} />
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
