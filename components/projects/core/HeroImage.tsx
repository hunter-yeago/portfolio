"use client";

import { i_Image, i_ProjectPreview } from "@/types/types";
import Image from "next/image";

interface Props {
  mobileImage: i_ProjectPreview;
  image: i_Image;
}

export default function HeroImage({ mobileImage, image }: Props) {
  return (
    <>
      <Image
        className="block sm:hidden my-8 rounded-lg overflow-hidden shadow-lg w-full"
        src={mobileImage.mobileImage}
        alt={mobileImage.description[0]}
        width={1200}
        height={500}
        priority
      />
      <Image
        className="hidden sm:block my-8 rounded-lg overflow-hidden shadow-lg w-full"
        src={image.url}
        alt={image.alt}
        width={1200}
        height={500}
        priority
      />
    </>
  );
}
