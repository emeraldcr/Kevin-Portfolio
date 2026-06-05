import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

const styles = {
  primary:
    "bg-gradient-to-r from-emerald-300 to-cyan-300 text-slate-950 shadow-glow hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(45,212,191,0.32)]",
  secondary:
    "border border-emerald-300/35 bg-emerald-300/10 text-emerald-100 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-300/20",
  ghost:
    "border border-white/10 bg-white/[0.055] text-slate-100 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10",
};

export function CTAButton({ href, children, variant = "primary", download }: CTAButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${styles[variant]}`}
    >
      {children}
      <span aria-hidden="true" className="transition duration-300 group-hover:translate-x-0.5">→</span>
    </Link>
  );
}
