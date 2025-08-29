"use client";

import { i_Image, i_ProjectPreview } from "@/types/types";
import Image from "next/image";

interface Props {
  mobileImage: i_ProjectPreview,
  image: i_Image;
}

export default function HeroImage({ mobileImage, image }: Props) {
  return (
    <>
      <Image
        className="block md:hidden aspect-[16/7] my-8 rounded-lg overflow-hidden shadow-lg w-full"
        src={mobileImage.image}
        alt={mobileImage.description[0]}
        width={1200}
        height={500}
        priority
      />
      <Image
        className="hidden md:block aspect-[16/7] my-8 rounded-lg overflow-hidden shadow-lg w-full"
        src={image.url}
        alt={image.alt}
        width={1200}
        height={500}
        priority
      />
    </>
  );
}
