import Link from "next/link";

export default function JumpLink({
  section,
}: {
  section: string;
  index: number;
}) {
  if (!section) return null;

  return (
    <Link
      className="px-3 py-1.5 rounded-full  text-sm font-semibold hover:bg-primary-500 hover:border-bg-primary-500 transition-all duration-300 shadow-md cursor-pointer focus:outline-2 focus:ring-2 focus:ring-primary-500"
      href={`#${section}`}
    >
      {section}
    </Link>
  );
}
