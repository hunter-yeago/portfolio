import links from "@/lib/prof_links";
import Link from "next/link";

export default function ProfessionalLinks() {
  
  return (
    <div
      id="prof-links"
      className="flex w-fit flex-wrap gap-4 mt-4"
    >
      {links.map(({ id, href, bgClass, hoverClass }) => (
        <Link
          key={id}
          id={id.toLowerCase()}
          className={`w-40 text-center p-2 font-medium rounded-md border border-[#1d2748] transition-colors duration-300 ${bgClass} ${hoverClass}`}
          href={href}
          target="_blank"
          aria-label={`View Hunter Yeago's ${id} - opens in a new tab`}
        >
          {id}
        </Link>
      ))}
    </div>
  );
}
