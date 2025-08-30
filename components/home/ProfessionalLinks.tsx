import Link from "next/link";

export default function ProfessionalLinks() {
  const links = [
    {
      id: "LinkedIn",
      href: "https://www.linkedin.com/in/hunter-yeago/",
      bgClass: "bg-[#e74c3c]",
      hoverClass: "focus:bg-[#ef6d5c] hover:bg-[#ef6d5c]", // lighter red
    },
    {
      id: "Resume",
      href: "/resume/resume.pdf",
      bgClass: "bg-[#aa8af7]",
      hoverClass: "focus:bg-[#b79cf8] hover:bg-[#b79cf8]", // lighter lavender
    },
    // {
    //   id: "GitHub",
    //   href: "https://github.com/hunter-yeago",
    //   bgClass: "bg-[#e74c3c]",
    //   hoverClass: "focus:bg-[#ef6d5c] hover:bg-[#ef6d5c]", // lighter red
    // },
  ];

  return (
    <div
      id="prof-links"
      className="flex w-fit justify-center flex-wrap gap-4 mt-4"
    >
      {links.map(({ id, href, bgClass, hoverClass }) => (
        <Link
          key={id}
          id={id.toLowerCase()}
          className={`w-40 text-center p-2 font-medium text-white rounded-md border border-[#1d2748] transition-colors duration-300 ${bgClass} ${hoverClass}`}
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
