import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#071511",
        emeraldGlow: "#34d399",
      },
      boxShadow: {
        glow: "0 0 40px rgba(52, 211, 153, 0.22)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(52, 211, 153, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 211, 153, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
