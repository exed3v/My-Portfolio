import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LangProvider } from "@/hooks/useLang";
import NavBar from "@/components/Layout/NavBar";
import "./globals.css";
import { Toaster } from "@/components/ui/Sonner";
import { Footer } from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exequiel Maydana – Full Stack Developer & Frontend Enthusiast",
  description:
    "Portfolio de Exequiel Maydana. Proyectos y trabajos de desarrollo web full-stack con JavaScript, TypeScript, React, Next.js, Tailwind CSS y UI/UX modernos.",
  keywords: [
    "Exequiel Maydana",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
  ],
  openGraph: {
    title: "Exequiel Maydana – Full Stack Developer",
    description:
      "Portfolio de proyectos y trabajos de desarrollo web full-stack con JavaScript y Next.js",
    url: "https://my-portfolio-navy-gamma-73.vercel.app/",
    siteName: "Exequiel Maydana Portfolio",
    images: [
      {
        url: "/yo.jpeg",
        width: 1200,
        height: 630,
        alt: "Exequiel Maydana Portfolio",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exequiel Maydana – Full Stack Developer",
    description:
      "Portfolio de proyectos web full-stack con JavaScript y Next.js",
    images: ["/yo.jpeg"],
    creator: "@exedev",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LangProvider>
          <NavBar />
          {children}
          <Toaster />
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
