import Link from "next/link";
export default function ProfessionalLinks() {
  const links = [
    {
      id: "LinkedIn",
      href: "https://www.linkedin.com/in/hunter-yeago/",
      bgClass: "bg-[#7FBEEB] text-black",
    },
    {
      id: "Resume",
      href: "https://drive.google.com/file/d/1V4S31joVw0NZeowUtAIvXtexgXu90T7V/view?usp=drive_link",
      bgClass: "bg-[#C1D37F] text-gold",
    },
    {
      id: "GitHub",
      href: "https://github.com/hunter-yeago",
      bgClass: "bg-[#fe938c] text-black",
    },
  ];

  return (
    <div
      id="prof-links"
      className="flex mx-auto flex-wrap items-center justify-center gap-4 mt-4"
    >
      {links.map(({ id, href, bgClass }) => (
        <Link
          key={id}
          id={id.toLowerCase()}
          className={`w-40 text-center p-2 font-medium rounded-md border border-[#1d2748] hover:bg-[#1d2748] hover:text-white ${bgClass}`}
          href={href}
          target="_blank"
          aria-label={`View Hunter Yeago's ${id} - opens in a new tab`}
        >
          View {id}
        </Link>
      ))}
    </div>
  );
}
