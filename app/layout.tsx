import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Rojas | Web Developer Portfolio",
  description:
    "Personal portfolio of Kevin Rojas, software engineering student, freelance web developer and adventure tour guide based in San Carlos, Costa Rica.",
  openGraph: {
    title: "Kevin Rojas | Web Developer Portfolio",
    description:
      "Personal portfolio of Kevin Rojas, software engineering student, freelance web developer and adventure tour guide based in San Carlos, Costa Rica.",
    url: "https://kevin-portafolio-lovat-five-83.vercel.app/",
    siteName: "Kevin Rojas Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Rojas | Web Developer Portfolio",
    description:
      "Software engineering student, freelance web developer and adventure tour guide based in San Carlos, Costa Rica.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
