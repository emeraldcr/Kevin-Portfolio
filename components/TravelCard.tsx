import type { TravelPlace } from "@/data/travel";

export function TravelCard({ place }: { place: TravelPlace }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-emerald-300/40">
      <div className={`h-56 bg-gradient-to-br ${place.gradient} p-5`}>
        <div className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-slate-950/20 p-5 backdrop-blur-[2px]">
          <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">{place.tag}</span>
          <div className="h-16 w-16 rounded-full bg-white/20 blur-xl transition duration-300 group-hover:scale-150" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{place.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{place.description}</p>
      </div>
    </article>
  );
}
