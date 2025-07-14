import { i_Image } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: i_Image;
  path: string;
  restaurant: {
    name: string;
  };
}

export default function RestaurantCard({ image, path, restaurant }: Props) {
  return (
    <article className="w-72 border">
      <Link
        className="border-gray-200 hover:outline outline-2 outline-blue-600"
        href={path}
        target="_blank"
        aria-label={`${restaurant.name} - opens in a new tab`}
      >
        <div className="relative aspect-square">
          {image && <Image src={image.url} alt={image.alt} width={300} height={240} className="w-full h-full object-cover" />}
        </div>

        <div className="p-4">
          <p>{restaurant.name}</p>
          <p className="flex justify-between text-sm"> here are some words</p>
        </div>
      </Link>
    </article>
  );
}
