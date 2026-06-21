"use client";

import { useState } from "react";
import { Send, Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const ACCESS_KEY = "b220126a-abbe-4379-a69b-faed8b474be0";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    url: "https://github.com/TerminalWarlord",
    icon: Github,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/joybiswas389/",
    icon: Linkedin,
  },
  {
    label: "Twitter / X",
    url: "https://x.com/JayBeeOP",
    icon: Twitter,
  },
  {
    label: "LeetCode",
    url: "https://leetcode.com/u/terminalwarlord/",
    icon: ExternalLink,
  },
  {
    label: "CodeForces",
    url: "https://codeforces.com/profile/TerminalWarlord",
    icon: ExternalLink,
  },
];

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setResult("Sending...");

    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        setError("Submission failed. Please try again later.");
        console.log("Error", data);
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-10">
          <Send size={20} className="text-accent-purple" />
          <h2 className="font-mono text-lg md:text-xl font-semibold text-text-primary">
            <span className="text-accent-green">$ </span>./contact.sh
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        {/* Contact form */}
        <ScrollReveal variant="left" className="md:col-span-3">
          <div className="glass rounded-xl p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-text-secondary mb-1.5"
                  >
                    <span className="text-accent-green">$</span> name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-text-secondary mb-1.5"
                  >
                    <span className="text-accent-green">$</span> email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="johndoe@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-text-secondary mb-1.5"
                >
                  <span className="text-accent-green">$</span> message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-200 resize-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="group flex items-center gap-2.5 px-6 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-accent-cyan/30 transition-all duration-300"
                >
                  <span className="font-mono text-sm text-accent-green group-hover:text-accent-cyan transition-colors">$</span>
                  <span className="font-mono text-sm text-text-primary group-hover:text-accent-cyan transition-colors flex items-center gap-2">
                    <Send size={14} />
                    send message
                  </span>
                </button>

                <p className="text-xs text-text-muted font-mono hidden sm:block">
                  <span className="text-accent-green">●</span> encrypted
                </p>
              </div>

              {/* Status messages */}
              {result && (
                <p className="text-xs font-mono text-accent-green bg-accent-green/5 rounded-lg px-4 py-2 border border-accent-green/20">
                  ✔ {result}
                </p>
              )}
              {error && (
                <p className="text-xs font-mono text-red-400 bg-red-400/5 rounded-lg px-4 py-2 border border-red-400/20">
                  ✘ {error}
                </p>
              )}
            </form>
          </div>
        </ScrollReveal>

        {/* Contact info + socials */}
        <ScrollReveal variant="right" className="md:col-span-2">
          <div className="space-y-4">
            <div className="glass rounded-xl p-5 md:p-6">
              <h3 className="font-mono text-sm text-text-primary mb-4 flex items-center gap-2">
                <span className="text-accent-purple">◆</span> Find Me Online
              </h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <social.icon
                      size={18}
                      className="text-text-muted group-hover:text-accent-cyan transition-colors"
                    />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {social.label}
                    </span>
                    <ExternalLink
                      size={12}
                      className="ml-auto text-text-muted opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-5 md:p-6">
              <h3 className="font-mono text-sm text-text-primary mb-3 flex items-center gap-2">
                <span className="text-accent-cyan">◆</span> Direct Email
              </h3>
              <address className="not-italic">
                <a
                  href="mailto:contact@joybiswas.com"
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <Mail
                    size={18}
                    className="text-text-muted group-hover:text-accent-cyan transition-colors"
                  />
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors font-mono">
                    contact@joybiswas.com
                  </span>
                </a>
              </address>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
