// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-[80vw] mx-auto text-black pt-6">
      <div className="container text-lg mx-auto flex items-center">
        <p className="hidden md:block w-max whitespace-nowrap">Hunter Yeago</p>

        <ul className="flex w-full gap-4 justify-center md:justify-end align-center lg:items-center">
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
