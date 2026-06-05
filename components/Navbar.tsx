"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/profile";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-slate-950/78 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl"
          : "border-b border-white/0 bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="group inline-flex items-center gap-3" aria-label="Kevin Rojas home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-emerald-300/25 bg-white/[0.06] text-sm font-black text-white shadow-glow transition group-hover:scale-105">
            KR
          </span>
          <span className="hidden text-xs font-black uppercase tracking-[0.32em] text-white sm:inline">
            Kevin<span className="text-emerald-300">.</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition duration-300 hover:bg-white/10 hover:text-emerald-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:kevinrd1171@gmail.com"
          className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-100 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-300/20"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
