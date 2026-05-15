import type { TimelineItem } from "@/data/experience";

export function ExperienceCard({ item }: { item: TimelineItem }) {
  return (
    <article className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-300/10 text-2xl ring-1 ring-emerald-300/30">{item.icon}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-emerald-200">{item.period}</span>
      </div>
      <h3 className="text-lg font-bold text-white">{item.title}</h3>
      <p className="mt-1 text-sm font-semibold text-emerald-200">{item.organization}</p>
      <p className="mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
    </article>
  );
}
