'use client'
import Image from "next/image";
import Navbar from '../app/components/Navbar';
import IntroParagraph from '../app/components/IntroParagraph';
import ProjectSection from '../app/components/ProjectSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroParagraph />
      <ProjectSection />

      {/* footer stuff */}
      <a href="https://iconscout.com/icons/folder" className="text-underline font-size-sm" target="_blank">Folder</a> by <a href="https://iconscout.com/contributors/font-awesome" className="text-underline font-size-sm">Font Awesome</a> on <a href="https://iconscout.com" className="text-underline font-size-sm">IconScout</a>
    </>
  );
}
