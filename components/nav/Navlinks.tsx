"use client";
import Link from "next/link";
import { NavItem } from "@/types/types";

interface Props {
  onClick?: () => void;
}

export default function NavLinks({ onClick }: Props) {
  const navData: NavItem[] = [
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <ul className="flex w-fit flex-wrap gap-4 align-center lg:items-center">
      {navData.map((item: NavItem) => (
        <li key={item.name}>
          <Link
            href={item.path}
            className="text-lg hover:text-gray-400"
            onClick={onClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
