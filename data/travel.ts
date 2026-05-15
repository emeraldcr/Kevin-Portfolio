export type TravelPlace = {
  name: string;
  description: string;
  tag: string;
  gradient: string;
};

export const travelPlaces: TravelPlace[] = [
  {
    name: "Volcán Turrialba",
    description: "A powerful landscape that inspires resilient design, clarity under changing conditions and respect for nature.",
    tag: "Volcano experience",
    gradient: "from-stone-500 via-emerald-700 to-slate-950",
  },
  {
    name: "Volcán Platanar",
    description: "Mountain routes that connect field experience with the importance of simple, useful and reliable digital tools.",
    tag: "Highland routes",
    gradient: "from-emerald-500 via-green-800 to-zinc-950",
  },
  {
    name: "Cataratas Las Gemelas",
    description: "Natural storytelling, movement and visual contrast that influence how I design memorable landing pages.",
    tag: "Waterfall adventure",
    gradient: "from-cyan-400 via-emerald-700 to-slate-950",
  },
];
