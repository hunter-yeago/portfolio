"use client";

import { i_Image } from "@/types/types";
import Image from "next/image";

interface Props {
  image: i_Image;
}

export default function HeroImage({ image }: Props) {
  return (
    <Image
      className="aspect-[16/7] my-8 rounded-lg overflow-hidden shadow-lg"
      src={image.url}
      alt={image.alt}
      width={1200}
      height={500}
      priority
    />
  );
}
