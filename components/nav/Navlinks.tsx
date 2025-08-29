"use client";

import Link from "next/link";
import { NavItem } from "@/types/types";
import { usePathname } from "next/navigation";

interface Props {
  onClick?: () => void;
}

export default function NavLinks({ onClick }: Props) {
  const pathname = usePathname();

  const navData: NavItem[] = [
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  // If not on home, always prepend "/"
  const buildHref = (hash: string) => {
    return pathname === "/" ? hash : `/${hash}`;
  };

  return (
    <ul className="flex w-fit flex-wrap gap-4 justify-end lg:items-center">
      {navData.map((item) => (
        <li key={item.name}>
          <Link
            href={buildHref(item.path)}
            className="text-lg hover:text-gray-400 py-1 px-2"
            onClick={onClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
