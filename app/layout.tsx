import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const BASE_URL = "https://joybiswas.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0c14",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Joy Biswas | Software Engineer & Problem Solver",
  description:
    "Joy Biswas (TerminalWarlord) — a software engineer passionate about building scalable fullstack applications, solving complex problems, and competitive programming. Explore projects, experience, and problem-solving stats.",
  keywords: [
    "Joy Biswas",
    "TerminalWarlord",
    "Software Engineer",
    "Fullstack Developer",
    "Competitive Programmer",
    "React Developer",
    "Next.js Developer",
    "Bangladesh",
    "Chittagong",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Joy Biswas | Software Engineer & Problem Solver",
    description:
      "Exploring the work of Joy Biswas (TerminalWarlord) — fullstack development, competitive programming, and problem solving.",
    url: BASE_URL,
    siteName: "Joy Biswas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joy Biswas - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joy Biswas | Software Engineer & Problem Solver",
    description:
      "Fullstack developer & competitive programmer — building scalable web applications with modern technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <PersonJsonLd />
        <WebsiteJsonLd />
        {children}
      </body>
    </html>
  );
}
