import Link from "next/link";

export default function SectionLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  const isExternal = link.startsWith("http://") || link.startsWith("https://");
  return (
    <Link
      href={link}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={`${text} - ${isExternal ? "opens in a new tab" : "internal link"}`}
      className="text-blue-600 hover:underline"
    >
      {text}
    </Link>
  );
}
