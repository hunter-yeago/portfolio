"use client";
import Image from "next/image";
import Navbar from "../app/components/Navbar";
import IntroParagraph from "../app/components/IntroParagraph";
import ProjectSection from "../app/components/ProjectSection";
import ArticleCTA from "../app/components/ArticleCTA";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <IntroParagraph />
    </main>
  );
}
