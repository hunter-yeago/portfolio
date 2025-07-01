"use client";
import Link from "next/link";
import { navData } from "../data";

interface Props {
  onClick?: () => void;
}

export default function NavLinks({ onClick }: Props) {
  return (
    <ul className="flex w-fit flex-wrap gap-4 align-center lg:items-center">
      {navData.map((item) => (
        <li key={item.name}>
          <Link
            href={item.path}
            className="hover:text-gray-400"
            onClick={onClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
