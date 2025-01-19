import type { Metadata } from "next";
import "./globals.css";

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
      <body className="w-[80vw] mx-auto">{children}</body>
    </html>
  );
}
