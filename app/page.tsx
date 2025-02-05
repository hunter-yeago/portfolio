"use client";
import Navbar from "../app/components/Navbar";
import IntroParagraph from "../app/components/IntroParagraph";

export default function Home() {
  return (
    <div className="w-[90vw] max-w-[1200px] mx-auto">
      <Navbar />
      <main className="">
        <IntroParagraph />
      </main>
    </div>
  );
}
