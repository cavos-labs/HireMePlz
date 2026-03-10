"use client";

import Link from "next/link";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#A0522D]/10 shadow-md"
      style={{
        background: "linear-gradient(135deg, #F5F5DC 0%, #F4A460 40%, #E35336 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 sm:py-10 flex items-center justify-between">
        <div className="flex-1" />

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center hover:opacity-90 transition-opacity"
        >
          <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#A0522D] tracking-tight drop-shadow-sm">
            HireMePlz
          </span>
        </Link>

        <div className="flex-1" />
      </div>
    </header>
  );
}
