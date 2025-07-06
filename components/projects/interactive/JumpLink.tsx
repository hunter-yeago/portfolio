import Link from "next/link";

export default function JumpLink({ text, id }: { text: string; id: string }) {
  if (!text || !id) return null;

  return (
    <li>
      <Link
        href={`#${id}`}
        className="block px-3 py-1.5 border-2 rounded-full text-sm font-semibold hover:outline-2 hover:ring-2 hover:ring-primary-500 transition-all duration-300 shadow-md cursor-pointer focus:outline-2 focus:ring-2 focus:ring-primary-500"
      >
        {text}
      </Link>
    </li>
  );
}
