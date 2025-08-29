import { i_HyperLink } from "@/types/types";
import Link from "next/link";

export default function HyperLink({ text, link }: i_HyperLink) {
  return (
    <Link
      className="px-2 py-1 hover:underline text-blue-800"
      href={link}
      target="_blank"
      aria-label={`${text} - opens in a new tab`}
    >
      {text}
    </Link>
  );
}
