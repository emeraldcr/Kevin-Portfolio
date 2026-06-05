export type Project = {
  name: string;
  description: string;
  technologies: string[];
  liveDemoUrl: string;
  githubUrl: string;
  accent: string;
};

export const projects: Project[] = [
  {
    name: "Home Rentals Admin Dashboard",
    description:
      "Panel administrativo con Next.js/React para visualizar propiedades, autenticación, gestión de alquileres e integración de clima; ideal para demostrar lógica de producto y dashboards.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration", "Vercel"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    name: "La Vieja Adventures Website",
    description:
      "Concepto web para turismo de aventura en San Carlos, enfocado en narrativa visual, promoción de tours, flujo de contacto y experiencia móvil de alta conversión.",
    technologies: ["React", "Next.js", "Tailwind CSS", "UI/UX", "Responsive Design"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-lime-300 to-emerald-500",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "Sitio personal remasterizado para presentar habilidades, formación, proyectos y marca profesional con estética premium, SEO y microinteracciones.",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO", "Vercel"],
    liveDemoUrl: "https://kevin-portafolio-lovat-five-83.vercel.app/",
    githubUrl: "#",
    accent: "from-teal-300 to-sky-400",
  },
  {
    name: "Weather API Practice Project",
    description:
      "Módulo práctico que consume una API de clima y presenta datos por ubicación; útil para mostrar fetching, estados, variables de entorno e integración frontend.",
    technologies: ["JavaScript", "React", "API Fetching", "Environment Variables"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-sky-300 to-indigo-400",
  },
  {
    name: "Tourism Landing Page Concept",
    description:
      "Landing page para experiencias en naturaleza con enfoque en storytelling, contraste visual, CTA claros y conversión para negocios turísticos locales.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-amber-300 to-emerald-400",
  },
  {
    name: "Future Backend / Data Project",
    description:
      "Espacio reservado para un proyecto full-stack o de análisis de datos con Python, APIs, visualización y lógica de negocio aplicada.",
    technologies: ["Python", "APIs", "Data Analysis", "Backend"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-zinc-400 to-emerald-300",
  },
];
