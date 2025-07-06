import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Lora } from "next/font/google";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

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

      <body className="w-[min(1100px,90vw)] mx-auto">
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
