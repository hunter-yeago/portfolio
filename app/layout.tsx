import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
    <html className="min-w-full w-full" lang="en">
      <body className="w-[90vw] max-w-[1200px] mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
