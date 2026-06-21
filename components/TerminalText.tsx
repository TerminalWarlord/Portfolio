"use client";

import { useEffect, useState } from "react";

interface TerminalTextProps {
  lines: string[];
  prefix?: string;
  className?: string;
  speed?: number;
  loop?: boolean;
}

export default function TerminalText({
  lines,
  prefix = "$",
  className = "",
  speed = 60,
  loop = false,
}: TerminalTextProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!lines.length) return;

    const currentText = lines[currentLine];

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        const timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else if (loop) {
        // After typing completes, wait then delete
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, speed / 2);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setCurrentLine((prev) => (prev + 1) % lines.length);
      }
    }
  }, [charIndex, currentLine, isDeleting, lines, loop, speed]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const visibleText = lines[currentLine]?.slice(0, charIndex) || "";
  const typingComplete = charIndex >= (lines[currentLine]?.length || 0);

  return (
    <span className={`font-mono text-sm md:text-base ${className}`}>
      <span className="text-accent-green">{prefix}</span>{" "}
      <span>{visibleText}</span>
      {(!typingComplete || loop) && (
        <span
          className={`text-accent-cyan ml-0.5 ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        >
          ▊
        </span>
      )}
    </span>
  );
}
