import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hunter Yeago",
  description: "Hunter Yeago's portfolio and personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-4/5 border-black border-2 mx-auto">{children}</main>
  );
}
