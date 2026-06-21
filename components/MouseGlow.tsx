"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Cyan glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          left: position.x - 200,
          top: position.y - 200,
          background:
            "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
          transform: "translate(0,0)",
        }}
      />
      {/* Purple glow */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          left: position.x - 150,
          top: position.y - 150,
          background:
            "radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)",
          transform: "translate(0,0)",
        }}
      />
    </div>
  );
}
