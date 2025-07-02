import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Lora } from "next/font/google";
import NavLinks from "./components/nav/Navlinks";
import Footer from "./components/footer/Footer";

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

      <body className="w-[90vw] max-w-4xl mx-auto">
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
