import type { CSSProperties } from "react";
import { skills } from "@/data/profile";

export function SkillMeter() {
  return (
    <div className="grid gap-4">
      {skills.map((skill, index) => (
        <article key={skill.name} className="group rounded-3xl border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.07]">
          <div className="mb-3 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-white">{skill.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">{skill.category}</p>
            </div>
            <span className="font-mono text-sm text-slate-300">{skill.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800/90 ring-1 ring-white/10">
            <div
              className="skill-bar h-full rounded-full bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 shadow-[0_0_24px_rgba(45,212,191,0.45)]"
              style={{ "--skill-width": `${skill.level}%`, animationDelay: `${index * 120}ms` } as CSSProperties}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
