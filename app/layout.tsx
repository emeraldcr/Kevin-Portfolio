import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kevin-portafolio-lovat-five-83.vercel.app/"),
  title: "Kevin Rojas | Software Developer Portfolio",
  description:
    "Portfolio profesional de Kevin Rojas: estudiante de ingeniería de software, desarrollador web, Python/JavaScript, análisis de datos y proyectos de turismo con La Vieja Adventures.",
  keywords: [
    "Kevin Rojas",
    "software developer Costa Rica",
    "frontend developer",
    "Next.js portfolio",
    "Python developer",
    "La Vieja Adventures",
    "San Carlos Costa Rica",
  ],
  authors: [{ name: "Kevin Rojas" }],
  creator: "Kevin Rojas",
  openGraph: {
    title: "Kevin Rojas | Software Developer Portfolio",
    description:
      "Software engineering student, web developer and adventure tourism collaborator building modern digital experiences from San Carlos, Costa Rica.",
    url: "https://kevin-portafolio-lovat-five-83.vercel.app/",
    siteName: "Kevin Rojas Portfolio",
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Rojas | Software Developer Portfolio",
    description:
      "Frontend, backend, Python, JavaScript, data analysis and tourism-related digital products.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
