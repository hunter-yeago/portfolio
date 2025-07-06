"use client";
import Image from "next/image";

interface HeroImageProps {
  url: string;
  alt: string;
}

export default function HeroImage({ url, alt }: HeroImageProps) {
  return (
    <div className="w-full max-h-[500px] my-8 rounded-lg overflow-hidden shadow-lg">
      <Image src={url} alt={alt} width={1200} height={500} priority />
    </div>
  );
}
