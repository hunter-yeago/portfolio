import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Hunter Yeago",
  description: "Hunter Yeago Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} font-lora`}>
      <SpeedInsights />

      <body className="w-[90vw] max-w-[1200px] mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
