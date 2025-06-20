import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Joy Biswas | Software Engineer & Problem Solver",
  description: "Explore the work of Joy Biswas, a software engineer passionate about building efficient and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-slate-900`}>
      <body>
        {children}
      </body>
    </html>
  );
}