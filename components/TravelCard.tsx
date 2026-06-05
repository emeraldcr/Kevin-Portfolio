import type { TravelPlace } from "@/data/travel";

export function TravelCard({ place }: { place: TravelPlace }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] transition duration-500 hover:-translate-y-2 hover:border-emerald-300/40 hover:bg-white/[0.07]">
      <div className={`h-60 bg-gradient-to-br ${place.gradient} p-5`}>
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-slate-950/20 p-5 backdrop-blur-[2px]">
          <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">{place.tag}</span>
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl transition duration-500 group-hover:scale-150" />
          <div className="relative h-16 w-16 rounded-full border border-white/20 bg-white/15 shadow-2xl" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-white">{place.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{place.description}</p>
      </div>
    </article>
  );
}
