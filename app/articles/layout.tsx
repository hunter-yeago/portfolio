import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hunter Yeago",
  description: "Hunter Yeago's portfolio and personal website",
  keywords: ["Hunter Yeago", "portfolio", "web developer", "personal website"],
  authors: [{ name: "Hunter Yeago", url: "https://hunteryeago.com" }],
  creator: "Hunter Yeago",
  openGraph: {
    title: "Hunter Yeago",
    description: "Welcome to Hunter Yeago's portfolio and personal website.",
    url: "https://hunteryeago.com",
    siteName: "Hunter Yeago",
    locale: "en_US",
    type: "website",
  },
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
