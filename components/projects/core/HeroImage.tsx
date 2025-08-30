"use client";

import { i_Image, i_ProjectPreview } from "@/types/types";
import Image from "next/image";

interface Props {
  mobileImage: i_ProjectPreview;
  image: i_Image;
}

export default function HeroImage({ mobileImage, image }: Props) {
  return (
    <div className="relative h-[min(50vh,600px)] overflow-hidden m">
      <Image
        className="absolute top-0 h-full block sm:hidden my-8 rounded-lg shadow-lg w-full object-cover object-top"
        src={mobileImage.mobileImage}
        alt={mobileImage.description[0]}
        width={1200}
        height={500}
        priority
      />
      <Image
        className="absolute top-0 h-full hidden sm:block my-8 rounded-lg shadow-lg w-full object-cover max-h-[700px]"
        src={image.url}
        alt={image.alt}
        width={1200}
        height={500}
        priority
      />
    </div>
  );
}
