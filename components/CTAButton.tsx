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
    "bg-emerald-400 text-slate-950 shadow-glow hover:-translate-y-1 hover:bg-emerald-300",
  secondary:
    "border border-emerald-300/40 bg-emerald-300/10 text-emerald-100 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-300/20",
  ghost:
    "border border-white/10 bg-white/5 text-slate-100 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10",
};

export function CTAButton({ href, children, variant = "primary", download }: CTAButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
