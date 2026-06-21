"use client";

import { FolderOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "TeleBuzzed.Com",
    description:
      "A comprehensive directory for Telegram bots, channels, and groups. Built with React frontend and Node.js/Express/Mongoose/JWT backend. Deployed on Cloudflare Pages and VPS with PM2 and nginx.",
    imagePath: "/images/telebuzzed.png",
    links: [
      { title: "Demo", url: "https://telebuzzed.com" },
      { title: "GitHub (Frontend)", url: "https://github.com/TerminalWarlord/TeleBuzzed-Frontend" },
      { title: "GitHub (Backend)", url: "https://github.com/TerminalWarlord/TeleBuzzed-Backend" },
    ],
    stacks: ["React", "Node", "Mongoose", "Express", "JWT"],
  },
  {
    title: "Contest Tracker",
    description:
      "Track programming contests from Codeforces, CodeChef, and LeetCode. View upcoming contests, filter by platform, and bookmark contests for future reference.",
    imagePath: "/images/contest-tracker.png",
    links: [
      { title: "Demo (YT)", url: "https://youtu.be/PjjFXlFiu6U?si=dV5ECfdMYYE0K_ej" },
      { title: "GitHub", url: "https://github.com/TerminalWarlord/TLE-Contest-Tracker" },
    ],
    stacks: ["React", "Node", "Mongoose", "Express", "TypeScript"],
  },
  {
    title: "3D SuperShop (OpenGL)",
    description:
      "An immersive 3D retail environment featuring elevators, reception, petrol pumps, roads, shelves, lighting setups, and realistic texturing built with C++ and OpenGL/GLUT.",
    imagePath: "/images/3d-shop.png",
    links: [
      { title: "Demo (YT)", url: "https://www.youtube.com/watch?v=_jt4uKhp3S8" },
      { title: "GitHub", url: "https://github.com/TerminalWarlord/3D-SuperShop-A-Graphics-Project" },
    ],
    stacks: ["C++", "OpenGL", "GLUT/FreeGLUT"],
  },
  {
    title: "Course Management System",
    description:
      "A web application to manage users, departments, courses, and sessions. Built with PHP Laravel and MySQL for robust data management.",
    imagePath: undefined,
    links: [
      { title: "GitHub", url: "https://github.com/TerminalWarlord/Course-Management-System" },
    ],
    stacks: ["PHP", "Laravel", "MySQL"],
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-10">
          <FolderOpen size={20} className="text-accent-cyan" />
          <h2 className="font-mono text-lg md:text-xl font-semibold text-text-primary">
            <span className="text-accent-green">$ </span>./projects.sh --list
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {PROJECTS.map((project, index) => (
          <ScrollReveal
            key={project.title}
            variant="up"
            delay={index * 100}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imagePath={project.imagePath}
              links={project.links}
              stacks={project.stacks}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
