"use client";
import Image from "next/image";

interface HeroImageProps {
  url: string;
  alt: string;
}

export default function HeroImage({ url, alt }: HeroImageProps) {
  return (
    <div className="w-full max-w-5xl mx-auto my-8 rounded-lg overflow-hidden shadow-md">
      <Image src={url} alt={alt} width={1200} height={630} className="w-full h-auto object-cover" priority />
    </div>
  );
}
