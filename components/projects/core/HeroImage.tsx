"use client";

import { i_Image, i_ProjectPreview } from "@/types/types";
import Image from "next/image";

interface Props {
  mobileImage: i_ProjectPreview;
  image: i_Image;
}

export default function HeroImage({ mobileImage, image }: Props) {
  return (
    <div className="relative h-[min(50vh,600px)] overflow-hidden rounded-lg shadow-lg">
      <Image
        className="absolute h-full block sm:hidden object-cover object-top"
        src={mobileImage.mobileImage}
        alt={mobileImage.description[0]}
        width={1200}
        height={500}
        priority
      />
      <Image
        className="absolute h-full hidden sm:block object-cover"
        src={image.url}
        alt={image.alt}
        width={1200}
        height={500}
        priority
      />
    </div>
  );
}
