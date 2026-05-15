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
      "Admin dashboard built with Next.js/React that includes authentication, rental property management UI and weather API integration.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration", "Vercel"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    name: "La Vieja Adventures Website",
    description:
      "Tourism website concept for an adventure company in San Carlos, Costa Rica, focused on tour promotion, contact flow and responsive design.",
    technologies: ["React", "Next.js", "Tailwind CSS", "UI/UX", "Responsive Design"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-lime-300 to-emerald-500",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "My personal portfolio built to present my skills, education, projects and professional profile.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveDemoUrl: "https://kevin-portafolio-lovat-five-83.vercel.app/",
    githubUrl: "#",
    accent: "from-teal-300 to-sky-400",
  },
  {
    name: "Weather API Practice Project",
    description:
      "Small web app or module that consumes a weather API and displays current weather data based on location.",
    technologies: ["JavaScript", "React", "API Fetching", "Environment Variables"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-sky-300 to-indigo-400",
  },
  {
    name: "Tourism Landing Page Concept",
    description:
      "Landing page concept for promoting nature-based experiences, designed with conversion and visual storytelling in mind.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-amber-300 to-emerald-400",
  },
  {
    name: "Coming Soon / Future Project",
    description: "Reserved for future backend, dashboard or full-stack projects.",
    technologies: ["To be added"],
    liveDemoUrl: "#",
    githubUrl: "#",
    accent: "from-zinc-400 to-emerald-300",
  },
];
