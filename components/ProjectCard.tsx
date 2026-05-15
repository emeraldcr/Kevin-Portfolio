import type { Project } from "@/data/projects";
import { CTAButton } from "./CTAButton";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-emerald-300/40 hover:bg-white/[0.07]">
      <div className={`relative h-44 bg-gradient-to-br ${project.accent} p-5`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.45),transparent_28%),linear-gradient(135deg,rgba(2,6,23,0.0),rgba(2,6,23,0.55))]" />
        <div className="relative h-full rounded-2xl border border-white/25 bg-slate-950/30 p-4 backdrop-blur-sm">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-300" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
          <div className="space-y-3">
            <div className="h-3 w-2/3 rounded-full bg-white/70" />
            <div className="h-3 w-5/6 rounded-full bg-white/35" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-14 rounded-xl bg-white/20" />
              <div className="h-14 rounded-xl bg-white/20" />
              <div className="h-14 rounded-xl bg-white/20" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTAButton href={project.liveDemoUrl} variant="secondary">Live Demo</CTAButton>
          <CTAButton href={project.githubUrl} variant="ghost">GitHub</CTAButton>
        </div>
      </div>
    </article>
  );
}
