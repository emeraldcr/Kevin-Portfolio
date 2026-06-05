import type { TimelineItem } from "@/data/experience";

export function ExperienceCard({ item }: { item: TimelineItem }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.075]">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-300/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/15" />
      <div className="relative mb-4 flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-300/10 text-2xl ring-1 ring-emerald-300/30">{item.icon}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-emerald-200">{item.period}</span>
      </div>
      <h3 className="relative text-lg font-black text-white">{item.title}</h3>
      <p className="relative mt-1 text-sm font-semibold text-emerald-200">{item.organization}</p>
      <p className="relative mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
    </article>
  );
}
