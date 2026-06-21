"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for background opacity and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.href.slice(1))
      ).filter(Boolean);

      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0c14]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="#hero"
              onClick={() => handleNavClick("#hero")}
              className="font-mono text-lg md:text-xl font-semibold"
            >
              <span className="text-accent-cyan">~</span>
              <span className="text-text-primary">/tw</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    activeSection === item.href.slice(1)
                      ? "text-accent-cyan"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent-cyan rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-text-primary hover:text-accent-cyan transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0a0c14]/95 backdrop-blur-2xl"
          onClick={() => setMobileOpen(false)}
        />

        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 p-2 text-text-primary hover:text-accent-cyan transition-colors z-10"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        {/* Nav items */}
        <div className="relative flex flex-col items-center justify-center h-full gap-2 px-6">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`font-mono text-2xl md:text-3xl py-3 transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? "text-accent-cyan"
                  : "text-text-secondary hover:text-text-primary"
              }`}
              style={{
                transform: mobileOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <span className="text-accent-green text-base mr-3">$</span>
              {item.label.toLowerCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
